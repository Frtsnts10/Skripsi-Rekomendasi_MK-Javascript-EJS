from sklearn.metrics.pairwise import cosine_similarity
import operator
import pandas as pd


# Mendefinisikan sample data
data = [['MhsA','AlgoritmaI', 65],['MhsA','PBO', 80],['MhsA','KalkulusI', 60],['MhsA','Citra', 65],['MhsA','Statistik', 100],['MhsA','Data', 75],['MhsA','GD', 62],['MhsA','ML', 42],['MhsA','MD', 100],['MhsA','Aljabar', 87],
        ['MhsB','AlgoritmaI', 41],['MhsB','PBO', 45],['MhsB','KalkulusI', 65],['MhsB','Citra', 42],['MhsB','Statistik', 45],['MhsB','Data', 41],['MhsB','GD', 52],['MhsB','ML', 33],['MhsB','MD', 35],['MhsB','Aljabar', 37],
        ['MhsC','AlgoritmaI', 95],['MhsC','PBO', 99],['MhsC','KalkulusI', 42],['MhsC','Citra', 86],['MhsC','Statistik', 62],['MhsC','Data', 85],['MhsC','GD', 43],['MhsC','ML', 85],['MhsC','MD', 95],['MhsC','Aljabar', 82],
        ['MhsD','AlgoritmaI', 49],['MhsD','PBO', 55],['MhsD','KalkulusI', 75],['MhsD','Citra', 0 ],['MhsD','Statistik', 82],['MhsD','Data', 65],['MhsD','GD', 79],['MhsD','ML', 46],['MhsD','MD', 41],['MhsD','Aljabar', 55],
        ['MhsE','AlgoritmaI', 63],['MhsE','PBO', 52],['MhsE','KalkulusI', 57],['MhsE','Citra', 85],['MhsE','Statistik', 54],['MhsE','Data', 77],['MhsE','GD', 64],['MhsE','ML', 60],['MhsE','MD', 56],['MhsE','Aljabar', 52],
        ['MhsF','AlgoritmaI', 45],['MhsF','PBO', 48],['MhsF','KalkulusI', 60],['MhsF','Citra', 48],['MhsF','Statistik', 43],['MhsF','Data', 43],['MhsF','GD', 85],['MhsF','ML', 99],['MhsF','MD', 37],['MhsF','Aljabar', 34],
        ['MhsG','AlgoritmaI', 88],['MhsG','PBO', 65],['MhsG','KalkulusI', 25],['MhsG','Citra', 75],['MhsG','Statistik', 41],['MhsG','Data', 65],['MhsG','GD', 21],['MhsG','ML', 88],['MhsG','MD', 84],['MhsG','Aljabar', 45],
        ['MhsH','AlgoritmaI', 84],['MhsH','PBO', 81],['MhsH','KalkulusI', 62],['MhsH','Citra', 81],['MhsH','Statistik', 79],['MhsH','Data', 87],['MhsH','GD', 56],['MhsH','ML', 76],['MhsH','MD', 36],['MhsH','Aljabar', 39],
        ['MhsI','AlgoritmaI', 42],['MhsI','PBO', 48],['MhsI','KalkulusI', 81],['MhsI','Citra', 40],['MhsI','Statistik', 55],['MhsI','Data', 20],['MhsI','GD', 81],['MhsI','ML', 42],['MhsI','MD', 40],['MhsI','Aljabar', 47],
        ['MhsJ','AlgoritmaI', 45],['MhsJ','PBO', 84],['MhsJ','KalkulusI', 70],['MhsJ','Citra', 15],['MhsJ','Statistik', 88],['MhsJ','Data', 55],['MhsJ','GD', 80],['MhsJ','ML', 15],['MhsJ','MD', 67],['MhsJ','Aljabar', 100],]

ratings = pd.DataFrame(data, columns=['User', 'Item', 'Rating'])

# membuat dataframe menjadi matrix user - item
nilai = ratings.pivot_table(index='User', columns='Item', values='Rating')
nilai = nilai.fillna(0)

user_mean = nilai.iloc[:,:10].mean(axis=1)
print(user_mean)

new_nilai = nilai.iloc[:,:10].subtract(user_mean, axis=0)
print(new_nilai)

# fungsi untuk mencari kemiripan user
def similar_users(user_id, matrix, k=2):
    user = matrix[matrix.index == user_id]
    
    other_users = matrix[matrix.index != user_id]

    similarities = cosine_similarity(user,other_users)[0].tolist()    
    indices = other_users.index.tolist()
    
    index_similarity = dict(zip(indices, similarities))
    
    # sort by similarity
    index_similarity_sorted = sorted(index_similarity.items(), key=operator.itemgetter(1))
    index_similarity_sorted.reverse()
    
    top_users_similarities = index_similarity_sorted[:k]
    users = [u[0] for u in top_users_similarities]
    nilai = [u[1] for u in top_users_similarities]
    
    return users, nilai

