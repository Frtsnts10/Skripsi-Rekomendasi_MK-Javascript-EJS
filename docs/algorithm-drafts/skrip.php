<?php
    for($i = 0; $i < $place; $i++){
        for($j = $i+1; $j < $place; $j++){
            $pemb = 0;
            $peny1 = 0;
            $peny2 = 0;
            foreach ($recommendation as $users => $score){
                if($recommendation[$users][$place[$i]] > 0 and $recommendation[$users][$place[$j]] > 0){
                    $pemb += (($recommendation[$users][$place[$i]] - $duser[$users]) * ($recommendation[$users][$place[$j]] - $duser[$users]));
                    $peny1 += (pow(($recommendation[$users][$place[$i]] - $duser[$users]), 2));
                    $peny2 += (pow(($recommendation[$users][$place[$j]] - $duser[$users]), 2));
                }
            }

            $akar = (sqrt($peny1)) * (sqrt($peny2));
            if($akar == 0) {
                $kemiripan[$place[$i]][$dplace[$j]] = 0;
                $kemiripan[$place[$j]][$dplace[$i]] = 0;
            }
            else{
                $kemiripan[$place[$i]][$dplace[$j]] = $pemb/$akar;
                $kemiripan[$place[$j]][$dplace[$i]] = $pemb/$akar;
            }
        }
    }
?>