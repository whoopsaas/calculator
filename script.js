
function updateCalculations() {

    var cell_b13_sq_footage = parseFloat(document.getElementById('cell_b13_sq_footage').value)
    





    // ================= Places =========================

    const selectBox = document.getElementById('cell_b4_st_of_prop');

    for (let i = 0; i < database.length; i++) {
        const option = document.createElement('option');
        option.value = database[i][0]; 
        option.textContent = database[i][0];
        selectBox.appendChild(option);
    }


    var sheet_2_value = 0
    for (let i = 0; i < database.length; i++) {
        if (database[i][0] === selectBox.value) {
            const multiplier = database[i][2]; 
            sheet_2_value = multiplier;
            break; 
        }
    }

    // console.log('sheet_2_value--------------',sheet_2_value)

    // ================= Places =========================




    // ==========================  Florring ==============================

    // var cell_b18_flooring = 4/cell_b13_sq_footage

    // document.getElementById('cell_b18_flooring').innerHTML = valueFormat(cell_b18_flooring)

    var eight_per_of_sq_footage = cell_b13_sq_footage * 0.08
    var cell_b20_minor_repair = (3.20 * eight_per_of_sq_footage)  * sheet_2_value
    document.getElementById('cell_b20_minor_repair').innerHTML = valueFormat(cell_b20_minor_repair,'dollar')

    var twenty_five_per_of_sq_footage = cell_b13_sq_footage * 0.25 
    var cell_b21_need_rep =  (3.20 * twenty_five_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b21_need_rep').innerHTML = valueFormat(cell_b21_need_rep,'dollar')

    var fity_per_of_sq_footage = cell_b13_sq_footage * 0.50
    var cell_b22_need_rep_25 = (3.20 * fity_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b22_need_rep_25').innerHTML = valueFormat(cell_b22_need_rep_25, 'dollar')

    var seventy_five_per_of_sq_footage = cell_b13_sq_footage * 0.75
    var cell_b23_need_rep_50 = (3.20 * seventy_five_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b23_need_rep_50').innerHTML = valueFormat(cell_b23_need_rep_50,'dollar')

    var hundred_per_of_sq_footage = cell_b13_sq_footage * 1
    var cell_b24_need_rep_thr = (3.20 * hundred_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b24_need_rep_thr').innerHTML = valueFormat(cell_b24_need_rep_thr,'dollar')


    

     // for Checkboxes Value


    var selectedRadio = document.querySelector('input[name="flooring"]:checked'); // Ge
    

    var flooring_inp_checkbox = document.getElementById('flooring_inp_checkbox').checked;
    var flooring_minor = document.getElementById('flooring_minor').checked;
    var flooring_25_per = document.getElementById('flooring_25_per').checked;
    var flooring_25_50_per = document.getElementById('flooring_25_50_per').checked;
    var flooring_50_75_per = document.getElementById('flooring_50_75_per').checked;
    var flooring_rep_thr = document.getElementById('flooring_rep_thr').checked;
     // for Checkboxes Value


    // for border
    var flooring_input_Div = document.getElementById('flooring_input_Div');
    var flooring_minor_Div = document.getElementById('flooring_minor_Div');
    var flooring_25_per_Div = document.getElementById('flooring_25_per_Div');
    var flooring_25_50_per_Div = document.getElementById('flooring_25_50_per_Div');
    var flooring_50_75_per_Div = document.getElementById('flooring_50_75_per_Div');
    var flooring_rep_thr_Div = document.getElementById('flooring_rep_thr_Div');
    // for border

    
    
    // Add value to Total Flooring

    var total_of_flooring = 0
    if(flooring_inp_checkbox){
        total_of_flooring += 0
        flooring_input_Div.classList.add('border-highlight');
    }
    else{
        flooring_input_Div.classList.remove('border-highlight');
    }

    if(flooring_minor){
        total_of_flooring += parseFloat(cell_b20_minor_repair)
        flooring_minor_Div.classList.add('border-highlight');
    }
    else{
        flooring_minor_Div.classList.remove('border-highlight');
    }

    if(flooring_25_per){
        total_of_flooring += parseFloat(cell_b21_need_rep)
        flooring_25_per_Div.classList.add('border-highlight')
    }
    else{
        flooring_25_per_Div.classList.remove('border-highlight')
    }

    if(flooring_25_50_per){
        total_of_flooring += parseFloat(cell_b22_need_rep_25)
        flooring_25_50_per_Div.classList.add('border-highlight')
    }
    else{
        flooring_25_50_per_Div.classList.remove('border-highlight')
    }

    if(flooring_50_75_per){
        total_of_flooring += parseFloat(cell_b23_need_rep_50)
        flooring_50_75_per_Div.classList.add('border-highlight')
    }
    else{
        flooring_50_75_per_Div.classList.remove('border-highlight')
    }

    if(flooring_rep_thr){
        total_of_flooring += parseFloat(cell_b24_need_rep_thr)
        flooring_rep_thr_Div.classList.add('border-highlight')
    }
    else{
        flooring_rep_thr_Div.classList.remove('border-highlight')
    }

    document.getElementById('cell_b18_flooring').innerHTML = valueFormat(total_of_flooring,'dollar') || '$0'

    // Add value to Total Flooring

    

    // ==========================  Florring ==============================







    // ==========================  Walls ==============================



    
    // var cell_b26_walls = 2.75/ cell_b13_sq_footage
    // document.getElementById('cell_b26_walls').innerHTML = cell_b26_walls
    
    // WALLS

    var cell_b28_mixed_rep = (2.20 * eight_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b28_mixed_rep').innerHTML = valueFormat(cell_b28_mixed_rep,'dollar')
    
    var cell_b29_mixed_cond = (2.20 * twenty_five_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b29_mixed_cond').innerHTML = valueFormat(cell_b29_mixed_cond,'dollar')
    
    var cell_b30_major_rep = (2.20 * fity_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b30_major_rep').innerHTML = valueFormat(cell_b30_major_rep,'dollar')
    
    var cell_b31_rep_thr = (2.20 * hundred_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b31_rep_thr').innerHTML = valueFormat(cell_b31_rep_thr,'dollar')



    // for Checkboxes Value
    var walls_noWork = document.getElementById('walls_noWork').checked;
    var walls_minor = document.getElementById('walls_minor').checked;
    var walls_mixed = document.getElementById('walls_mixed').checked;
    var walls_maj_repair = document.getElementById('walls_maj_repair').checked;
    var walls_rep_thr = document.getElementById('walls_rep_thr').checked;
    
    // for Checkboxes Value

    // for border
    var walls_noWork_Div = document.getElementById('walls_noWork_Div');
    var walls_minor_Div = document.getElementById('walls_minor_Div');
    var walls_mixed_Div = document.getElementById('walls_mixed_Div');
    var walls_maj_repair_Div = document.getElementById('walls_maj_repair_Div');
    var walls_rep_thr_Div = document.getElementById('walls_rep_thr_Div');
    // for border


    // Add value to Total Walls

    var total_of_walls = 0
    if(walls_noWork){
        total_of_walls += 0
        walls_noWork_Div.classList.add('border-highlight');
    }
    else{
        walls_noWork_Div.classList.remove('border-highlight');
    }

    if(walls_minor){
        total_of_walls += parseFloat(cell_b28_mixed_rep)
        walls_minor_Div.classList.add('border-highlight');
    }
    else{
        walls_minor_Div.classList.remove('border-highlight');
    }

    if(walls_mixed){
        total_of_walls += parseFloat(cell_b29_mixed_cond)
        walls_mixed_Div.classList.add('border-highlight');
    }
    else{
        walls_mixed_Div.classList.remove('border-highlight');
    }

    if(walls_maj_repair){
        total_of_walls += parseFloat(cell_b30_major_rep)
        walls_maj_repair_Div.classList.add('border-highlight');
    }
    else{
        walls_maj_repair_Div.classList.remove('border-highlight');
    }

    if(walls_rep_thr){
        total_of_walls += parseFloat(cell_b31_rep_thr)
        walls_rep_thr_Div.classList.add('border-highlight');
    }
    else{
        walls_rep_thr_Div.classList.remove('border-highlight');
    }

    
    // Add value to Total Walls


    document.getElementById('cell_b26_walls').innerHTML = valueFormat(total_of_walls,'dollar') || '$0'



    // ======================= WALLS =================================






    // =======================  KITCHEN =========================

    var twelve_pont_five_per_of_sq_footage = cell_b13_sq_footage * 0.125
    // console.log('twelve_pont_five_per_of_sq_footage',twelve_pont_five_per_of_sq_footage)
    // var cell_b33_kitchen = twelve_pont_five_per_of_sq_footage * 100 / cell_b13_sq_footage
    // document.getElementById('cell_b33_kitchen').innerHTML = cell_b33_kitchen
    
    var more_two_point_five_per = twelve_pont_five_per_of_sq_footage * 0.125
    // console.log('',twelve_pont_five_per_of_sq_footage)
    
    var cell_b35_minor_reapair = (80 * more_two_point_five_per) * sheet_2_value
    // console.log('cell_b35_minor_reapair',more_two_point_five_per)
    document.getElementById('cell_b35_minor_reapair').innerHTML = valueFormat(cell_b35_minor_reapair,'dollar')

    var more_twinty_five = twelve_pont_five_per_of_sq_footage * 0.25
    var cell_b36_mixed_cond = (80 * more_twinty_five) * sheet_2_value
    document.getElementById('cell_b36_mixed_cond').innerHTML = valueFormat(cell_b36_mixed_cond,'dollar')

    var more_fifty_per = twelve_pont_five_per_of_sq_footage * 0.50
    var cell_b37_major_repair = (80 * more_fifty_per) * sheet_2_value
    document.getElementById('cell_b37_major_repair').innerHTML = valueFormat(cell_b37_major_repair,'dollar')

    var more_hundred_per = twelve_pont_five_per_of_sq_footage * 1
    var cell_b38_rep_thr = (80 * more_hundred_per) * sheet_2_value
    document.getElementById('cell_b38_rep_thr').innerHTML = valueFormat(cell_b38_rep_thr, 'dollar')




    // for Checkboxes Value
    var kitchen_noWork = document.getElementById('kitchen_noWork').checked;
    var kitchen_minor = document.getElementById('kitchen_minor').checked;
    var kitchen_mixed = document.getElementById('kitchen_mixed').checked;
    var kitchen_maj_repair = document.getElementById('kitchen_maj_repair').checked;
    var kitchen_rep_thr = document.getElementById('kitchen_rep_thr').checked;
    // for Checkboxes Value


    // for border
    var kitchen_noWork_Div = document.getElementById('kitchen_noWork_Div');
    var kitchen_minor_Div = document.getElementById('kitchen_minor_Div');
    var kitchen_mixed_Div = document.getElementById('kitchen_mixed_Div');
    var kitchen_maj_repair_Div = document.getElementById('kitchen_maj_repair_Div');
    var kitchen_rep_thr_Div = document.getElementById('kitchen_rep_thr_Div');
    // for border


    var total_of_kitchen = 0
    if(kitchen_noWork){
        total_of_kitchen += 0
        kitchen_noWork_Div.classList.add('border-highlight');
    }
    else{
        kitchen_noWork_Div.classList.remove('border-highlight');
    }

    if(kitchen_minor){
        total_of_kitchen += parseFloat(cell_b35_minor_reapair)
        kitchen_minor_Div.classList.add('border-highlight');
    }
    else{
        kitchen_minor_Div.classList.remove('border-highlight');
    }

    if(kitchen_mixed){
        total_of_kitchen += parseFloat(cell_b36_mixed_cond)
        kitchen_mixed_Div.classList.add('border-highlight');
    }
    else{
        kitchen_mixed_Div.classList.remove('border-highlight');
    }

    if(kitchen_maj_repair){
        total_of_kitchen += parseFloat(cell_b37_major_repair)
        kitchen_maj_repair_Div.classList.add('border-highlight');
    }
    else{
        kitchen_maj_repair_Div.classList.remove('border-highlight');
    }

    if(kitchen_rep_thr){
        total_of_kitchen += parseFloat(cell_b38_rep_thr)
        kitchen_rep_thr_Div.classList.add('border-highlight');
    }
    else{
        kitchen_rep_thr_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b33_kitchen').innerHTML = valueFormat(total_of_kitchen, 'dollar') || '$0'
    
    // KITCHEN





    // ======================== Full Bathroom ===================================


    var multp_of_fullBathrroms = parseFloat(document.getElementById('multp_of_fullBathrroms').value) || 0

    var three_per_of_sq_footage = cell_b13_sq_footage * 0.03 
    var cell_b40_full_bathroom = three_per_of_sq_footage * (175 /cell_b13_sq_footage)
    document.getElementById('cell_b40_full_bathroom').innerHTML = (cell_b40_full_bathroom) 

    var more_zero_pnt_one_two_five_of_three_per = three_per_of_sq_footage * 0.125
    
    var cell_b42_minor_rep = (140 * more_zero_pnt_one_two_five_of_three_per) * sheet_2_value * multp_of_fullBathrroms
    document.getElementById('cell_b42_minor_rep').innerHTML = valueFormat(cell_b42_minor_rep,'dollar') 

    var more_twenty_five_per_of_three_per = three_per_of_sq_footage * 0.25
    var cell_b43_minor_rep = (140 * more_twenty_five_per_of_three_per) * sheet_2_value * multp_of_fullBathrroms
    document.getElementById('cell_b43_minor_rep').innerHTML = valueFormat(cell_b43_minor_rep,'dollar') 

    var more_fifty_per_of_three_per = three_per_of_sq_footage * 0.50
    var cell_b44_minor_rep = (140 * more_fifty_per_of_three_per ) * sheet_2_value * multp_of_fullBathrroms
    document.getElementById('cell_b44_minor_rep').innerHTML = valueFormat(cell_b44_minor_rep,'dollar') 

    var more_hund_per_of_three_per = three_per_of_sq_footage * 1
    var cell_b45_rep_thr = (140 * more_hund_per_of_three_per) * sheet_2_value * multp_of_fullBathrroms
    document.getElementById('cell_b45_rep_thr').innerHTML = valueFormat(cell_b45_rep_thr,'dollar') 






    
    // for Checkboxes Value
    var fullBathroom_noWork = document.getElementById('fullBathroom_noWork').checked;
    var fullBathroom_minor = document.getElementById('fullBathroom_minor').checked;
    var fullBathroom_mixed = document.getElementById('fullBathroom_mixed').checked;
    var fullBathroom_major = document.getElementById('fullBathroom_major').checked;
    var fullBathroom_rep_thr = document.getElementById('fullBathroom_rep_thr').checked;
    // for Checkboxes Value


    // for border
    var fullBathroom_noWork_Div = document.getElementById('fullBathroom_noWork_Div');
    var fullBathroom_minor_Div = document.getElementById('fullBathroom_minor_Div');
    var fullBathroom_mixed_Div = document.getElementById('fullBathroom_mixed_Div');
    var fullBathroom_major_Div = document.getElementById('fullBathroom_major_Div');
    var fullBathroom_rep_thr_Div = document.getElementById('fullBathroom_rep_thr_Div');
    // for border


    var total_of_fullBathroom = 0

    
    
    if(fullBathroom_noWork){
        total_of_fullBathroom += 0
        fullBathroom_noWork_Div.classList.add('border-highlight');
    }
    else{
        fullBathroom_noWork_Div.classList.remove('border-highlight');
    }

    if(fullBathroom_minor){
        total_of_fullBathroom += parseFloat(cell_b42_minor_rep) 
        fullBathroom_minor_Div.classList.add('border-highlight');
    }
    else{
        fullBathroom_minor_Div.classList.remove('border-highlight');
    }

    if(fullBathroom_mixed){
        total_of_fullBathroom += parseFloat(cell_b43_minor_rep) 
        fullBathroom_mixed_Div.classList.add('border-highlight');
    }
    else{
        fullBathroom_mixed_Div.classList.remove('border-highlight');
    }

    if(fullBathroom_major){
        total_of_fullBathroom += parseFloat(cell_b44_minor_rep) 
        fullBathroom_major_Div.classList.add('border-highlight');
    }
    else{
        fullBathroom_major_Div.classList.remove('border-highlight');
    }

    if(fullBathroom_rep_thr){
        total_of_fullBathroom += parseFloat(cell_b45_rep_thr) 
        fullBathroom_rep_thr_Div.classList.add('border-highlight');
    }
    else{
        fullBathroom_rep_thr_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b40_full_bathroom').innerHTML = valueFormat(total_of_fullBathroom, 'dollar') || '$0'

    // ========================= Full Bathroom ==========================





    // ==================== HALF BATH ROOM================================


    
    // for Checkboxes Value
    var halfBathroom_noWork = document.getElementById('halfBathroom_noWork').checked;
    var halfBathroom_minor = document.getElementById('halfBathroom_minor').checked;
    var halfBathroom_mixed = document.getElementById('halfBathroom_mixed').checked;
    var halfBathroom_maj = document.getElementById('halfBathroom_maj').checked;
    var halfBathroom_rep_thr = document.getElementById('halfBathroom_rep_thr').checked;
    // for Checkboxes Value


    // for border
    var halfBathroom_noWork_Div = document.getElementById('halfBathroom_noWork_Div');
    var halfBathroom_minor_Div = document.getElementById('halfBathroom_minor_Div');
    var halfBathroom_mixed_Div = document.getElementById('halfBathroom_mixed_Div');
    var halfBathroom_maj_Div = document.getElementById('halfBathroom_maj_Div');
    var halfBathroom_rep_thr_Div = document.getElementById('halfBathroom_rep_thr_Div');
    // for border


    var total_of_HalfBathroom = 0

    var multp_of_halfBathrroms = parseFloat(document.getElementById('multp_of_halfBathrroms').value) || 0
    
    if(halfBathroom_noWork){
        total_of_HalfBathroom += 0
        halfBathroom_noWork_Div.classList.add('border-highlight');
    }
    else{
        halfBathroom_noWork_Div.classList.remove('border-highlight');
    }
    

    var cell_b49_minor_rep = 250 * sheet_2_value * multp_of_halfBathrroms
    document.getElementById('cell_b49_minor_rep').innerHTML = valueFormat(cell_b49_minor_rep,'dollar')
    if(halfBathroom_minor){
        total_of_HalfBathroom += cell_b49_minor_rep
        halfBathroom_minor_Div.classList.add('border-highlight');
    }
    else{
        halfBathroom_minor_Div.classList.remove('border-highlight');
    }
    

    var cell_b50_mix_cond = 750 * sheet_2_value * multp_of_halfBathrroms
    document.getElementById('cell_b50_mix_cond').innerHTML = valueFormat(cell_b50_mix_cond,'dollar')
    if(halfBathroom_mixed){
        total_of_HalfBathroom += cell_b50_mix_cond
        halfBathroom_mixed_Div.classList.add('border-highlight');
    }
    else{
        halfBathroom_mixed_Div.classList.remove('border-highlight');
    }
    

    var cell_b51_mix_cond = 1500 * sheet_2_value * multp_of_halfBathrroms
    document.getElementById('cell_b51_mix_cond').innerHTML = valueFormat(cell_b51_mix_cond,'dollar')
    if(halfBathroom_maj){
        total_of_HalfBathroom += cell_b51_mix_cond
        halfBathroom_maj_Div.classList.add('border-highlight');
    }
    else{
        halfBathroom_maj_Div.classList.remove('border-highlight');
    }
    

    var cell_b52_rep_thr = 2000 * sheet_2_value * multp_of_halfBathrroms
    document.getElementById('cell_b52_rep_thr').innerHTML = valueFormat(cell_b52_rep_thr,'dollar')
    if(halfBathroom_rep_thr){
        total_of_HalfBathroom += cell_b52_rep_thr
        halfBathroom_rep_thr_Div.classList.add('border-highlight');
    }
    else{
        halfBathroom_rep_thr_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b47_halfBathroom').innerHTML = valueFormat(total_of_HalfBathroom, 'dollar') || '$0'

    

    // ==================== HALF BATH ROOM================================





    // ====================== Appliances ===============================


    // for Checkboxes Value
    var appliances_newLike = document.getElementById('appliances_newLike').checked;
    var appliances_goodCond = document.getElementById('appliances_goodCond').checked;
    var appliances_fairCond = document.getElementById('appliances_fairCond').checked;
    var appliances_replNeeded = document.getElementById('appliances_replNeeded').checked;
    // for Checkboxes Value


    // for border
    var appliances_newLike_Div = document.getElementById('appliances_newLike_Div');
    var appliances_goodCond_Div = document.getElementById('appliances_goodCond_Div');
    var appliances_fairCond_Div = document.getElementById('appliances_fairCond_Div');
    var appliances_replNeeded_Div = document.getElementById('appliances_replNeeded_Div');
    // for border


    var total_of_Appliances = 0
    
    if(appliances_newLike){
        // total_of_Appliances += parseFloat(strToNum(document.getElementById('cell_b55_app').value) || 0)
        total_of_Appliances += 0
        appliances_newLike_Div.classList.add('border-highlight');
    }
    else{
        appliances_newLike_Div.classList.remove('border-highlight');
    }
    

    var cell_b56_app = 500 * sheet_2_value
    document.getElementById('cell_b56_app').innerHTML = valueFormat(cell_b56_app,'dollar')
    if(appliances_goodCond){
        total_of_Appliances += cell_b56_app
        appliances_goodCond_Div.classList.add('border-highlight');
    }
    else{
        appliances_goodCond_Div.classList.remove('border-highlight');
    }
    
    var cell_b57_app = 1250 * sheet_2_value
    document.getElementById('cell_b57_app').innerHTML = valueFormat(cell_b57_app,'dollar')
    if(appliances_fairCond){
        total_of_Appliances += cell_b57_app
        appliances_fairCond_Div.classList.add('border-highlight');
    }
    else{
        appliances_fairCond_Div.classList.remove('border-highlight');
    }
    
    
    var cell_b58_app = 2500 * sheet_2_value
    document.getElementById('cell_b58_app').innerHTML = valueFormat(cell_b58_app,'dollar')
    if(appliances_replNeeded){
        total_of_Appliances += cell_b58_app
        appliances_replNeeded_Div.classList.add('border-highlight');
    }
    else{
        appliances_replNeeded_Div.classList.remove('border-highlight');
    }
    

    document.getElementById('cell_b54_app').innerHTML = valueFormat(total_of_Appliances,'dollar') || '$0'

    // ====================== Appliances ===============================






    // ==================== MINIMAL ===================================

    // for Checkboxes Value
    var Miscellaneous_minimal = document.getElementById('Miscellaneous_minimal').checked;
    var Miscellaneous_Moderate = document.getElementById('Miscellaneous_Moderate').checked;
    var Miscellaneous_high = document.getElementById('Miscellaneous_high').checked;
    // for Checkboxes Value


    // for border
    var Miscellaneous_minimal_Div = document.getElementById('Miscellaneous_minimal_Div');
    var Miscellaneous_Moderate_Div = document.getElementById('Miscellaneous_Moderate_Div');
    var Miscellaneous_high_Div = document.getElementById('Miscellaneous_high_Div');
    // for border


    var total_of_miscell = 0
    
    var cell_b61_minimal = 1500 * sheet_2_value
    document.getElementById('cell_b61_minimal').innerHTML = valueFormat(cell_b61_minimal,'dollar')
    if(Miscellaneous_minimal){
        // total_of_miscell += parseFloat(strToNum(document.getElementById('cell_b61_minimal').value) || 0)
        total_of_miscell += cell_b61_minimal
        Miscellaneous_minimal_Div.classList.add('border-highlight');
    }
    else{
        Miscellaneous_minimal_Div.classList.remove('border-highlight');
    }
    
    var cell_b62_moderate = 2500 * sheet_2_value
    document.getElementById('cell_b62_moderate').innerHTML = valueFormat(cell_b62_moderate,'dollar')
    if(Miscellaneous_Moderate){
        total_of_miscell += cell_b62_moderate
        Miscellaneous_Moderate_Div.classList.add('border-highlight');
    }
    else{
        Miscellaneous_Moderate_Div.classList.remove('border-highlight');
    }
    
    var cell_b63_High = 5000 * sheet_2_value
    document.getElementById('cell_b63_High').innerHTML = valueFormat(cell_b63_High,'dollar')
    if(Miscellaneous_high){
        total_of_miscell += cell_b63_High
        Miscellaneous_high_Div.classList.add('border-highlight');
    }
    else{
        Miscellaneous_high_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b60_miscell').innerHTML = valueFormat(total_of_miscell,'dollar') || '$0'
    
    // ==================== MINIMAL ===================================








    // Siding | Flashing | Trim

    var cell_b67_siding = 7 / cell_b13_sq_footage
    document.getElementById('cell_b67_siding').innerHTML = valueFormat(cell_b67_siding,'dollar')


    var cell_b69_minor_rep = (5.60 * twelve_pont_five_per_of_sq_footage ) * sheet_2_value
    document.getElementById('cell_b69_minor_rep').innerHTML = valueFormat(cell_b69_minor_rep,'dollar')

    var cell_b70_mixed_cond = (5.60 * twenty_five_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b70_mixed_cond').innerHTML = valueFormat(cell_b70_mixed_cond,'dollar')

    var cell_b71_maj_repair = (5.60 * fity_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b71_maj_repair').innerHTML = valueFormat(cell_b71_maj_repair,'dollar')

    var cell_b72_rep_thr = (5.60 * hundred_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b72_rep_thr').innerHTML = valueFormat(cell_b72_rep_thr,'dollar')





    // for Checkboxes Value
    var siding_self = document.getElementById('siding_self').checked;
    var siding_minor = document.getElementById('siding_minor').checked;
    var siding_mixed = document.getElementById('siding_mixed').checked;
    var siding_major = document.getElementById('siding_major').checked;
    var siding_rep_thr = document.getElementById('siding_rep_thr').checked;
    // for Checkboxes Value


    // for border
    var siding_self_Div = document.getElementById('siding_self_Div');
    var siding_minor_Div = document.getElementById('siding_minor_Div');
    var siding_mixed_Div = document.getElementById('siding_mixed_Div');
    var siding_major_Div = document.getElementById('siding_major_Div');
    var siding_rep_thr_Div = document.getElementById('siding_rep_thr_Div');
    // for border


    var total_of_siding = 0
    
    if(siding_self){
        total_of_siding += 0
        siding_self_Div.classList.add('border-highlight');
    }
    else{
        siding_self_Div.classList.remove('border-highlight');
    }
    
    if(siding_minor){
        total_of_siding += parseFloat(cell_b69_minor_rep)
        siding_minor_Div.classList.add('border-highlight');
    }
    else{
        siding_minor_Div.classList.remove('border-highlight');
    }
    
    if(siding_mixed){
        total_of_siding += parseFloat(cell_b70_mixed_cond)
        siding_mixed_Div.classList.add('border-highlight');
    }
    else{
        siding_mixed_Div.classList.remove('border-highlight');
    }
    
    if(siding_major){
        total_of_siding += parseFloat(cell_b71_maj_repair)
        siding_major_Div.classList.add('border-highlight');
    }
    else{
        siding_major_Div.classList.remove('border-highlight');
    }
    

    if(siding_rep_thr){
        total_of_siding += parseFloat(cell_b72_rep_thr)
        siding_rep_thr_Div.classList.add('border-highlight');
    }
    else{
        siding_rep_thr_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b67_siding').innerHTML = valueFormat(total_of_siding,'dollar') || '$0'


    // Siding | Flashing | Trim






    // LandEscaping

    
    // for Checkboxes Value
    var Landingscaping_noWork = document.getElementById('Landingscaping_noWork').checked;
    var Landingscaping_minor = document.getElementById('Landingscaping_minor').checked;
    var Landingscaping_mixed = document.getElementById('Landingscaping_mixed').checked;
    var Landingscaping_major = document.getElementById('Landingscaping_major').checked;
    var Landingscaping_repl = document.getElementById('Landingscaping_repl').checked;
    // for Checkboxes Value


    // for border
    var Landingscaping_noWork_Div = document.getElementById('Landingscaping_noWork_Div');
    var Landingscaping_minor_Div = document.getElementById('Landingscaping_minor_Div');
    var Landingscaping_mixed_Div = document.getElementById('Landingscaping_mixed_Div');
    var Landingscaping_major_Div = document.getElementById('Landingscaping_major_Div');
    var Landingscaping_repl_Div = document.getElementById('Landingscaping_repl_Div');
    // for border


    var total_of_landescaping = 0
    
    if(Landingscaping_noWork){
        total_of_landescaping += 0
        Landingscaping_noWork_Div.classList.add('border-highlight');
    }
    else{
        Landingscaping_noWork_Div.classList.remove('border-highlight');
    }
    
    var cell_b76_minor_work = 500 * sheet_2_value
    document.getElementById('cell_b76_minor_work').innerHTML = valueFormat(cell_b76_minor_work,'dollar')
    if(Landingscaping_minor){
        // total_of_landescaping += parseFloat(strToNum(document.getElementById('cell_b76_minor_work').value) || 0)
        total_of_landescaping += cell_b76_minor_work
        Landingscaping_minor_Div.classList.add('border-highlight');
    }
    else{
        Landingscaping_minor_Div.classList.remove('border-highlight');
    }
    

    var cell_b77_mix_cond = 750 * sheet_2_value
    document.getElementById('cell_b77_mix_cond').innerHTML = valueFormat(cell_b77_mix_cond,'dollar')
    if(Landingscaping_mixed){
        total_of_landescaping += cell_b77_mix_cond
        Landingscaping_mixed_Div.classList.add('border-highlight');
    }
    else{
        Landingscaping_mixed_Div.classList.remove('border-highlight');
    }
    

    var cell_b78_maj_rep = 1500 * sheet_2_value
    document.getElementById('cell_b78_maj_rep').innerHTML = valueFormat(cell_b78_maj_rep,'dollar')
    if(Landingscaping_major){
        total_of_landescaping += cell_b78_maj_rep
        Landingscaping_major_Div.classList.add('border-highlight');
    }
    else{
        Landingscaping_major_Div.classList.remove('border-highlight');
    }
    
    var cell_b79_maj_rep = 2000 * sheet_2_value
    document.getElementById('cell_b79_maj_rep').innerHTML = valueFormat(cell_b79_maj_rep,'dollar')
    if(Landingscaping_repl){
        total_of_landescaping += cell_b79_maj_rep
        Landingscaping_repl_Div.classList.add('border-highlight');
    }
    else{
        Landingscaping_repl_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b74_landing').innerHTML = valueFormat(total_of_landescaping,'dollar') || '$0'

    // LandEscaping




    // Walkaway

     // for Checkboxes Value
     var Walkways_noWork = document.getElementById('Walkways_noWork').checked;
     var Walkways_minor = document.getElementById('Walkways_minor').checked;
     var Walkways_mixed = document.getElementById('Walkways_mixed').checked;
     var Walkways_major = document.getElementById('Walkways_major').checked;
     var Walkways_rep_thr = document.getElementById('Walkways_rep_thr').checked;
     // for Checkboxes Value
 
 
     // for border
     var Walkways_noWork_Div = document.getElementById('Walkways_noWork_Div');
     var Walkways_minor_Div = document.getElementById('Walkways_minor_Div');
     var Walkways_mixed_Div = document.getElementById('Walkways_mixed_Div');
     var Walkways_major_Div = document.getElementById('Walkways_major_Div');
     var Walkways_rep_thr_Div = document.getElementById('Walkways_rep_thr_Div');
     // for border
 
 
     var total_of_walkaways = 0
     
     if(Walkways_noWork){
         total_of_walkaways += 0
         Walkways_noWork_Div.classList.add('border-highlight');
     }
     else{
         Walkways_noWork_Div.classList.remove('border-highlight');
     }
     
    var cell_b83_minor_rep = 750 * sheet_2_value
    document.getElementById('cell_b83_minor_rep').innerHTML = valueFormat(cell_b83_minor_rep,'dollar')
     if(Walkways_minor){
         total_of_walkaways += cell_b83_minor_rep
         Walkways_minor_Div.classList.add('border-highlight');
     }
     else{
         Walkways_minor_Div.classList.remove('border-highlight');
     }
     
     var cell_b84_mixed_cond = 2000 * sheet_2_value
     document.getElementById('cell_b84_mixed_cond').innerHTML = valueFormat(cell_b84_mixed_cond,'dollar')
     if(Walkways_mixed){
         total_of_walkaways += cell_b84_mixed_cond
         Walkways_mixed_Div.classList.add('border-highlight');
     }
     else{
         Walkways_mixed_Div.classList.remove('border-highlight');
     }
     
     var cell_b85_maj_rep = 5000 * sheet_2_value
     document.getElementById('cell_b85_maj_rep').innerHTML = valueFormat(cell_b85_maj_rep,'dollar')
     if(Walkways_major){
         total_of_walkaways += cell_b85_maj_rep
         Walkways_major_Div.classList.add('border-highlight');
     }
     else{
         Walkways_major_Div.classList.remove('border-highlight');
     }
     
     var cell_b86_rep_thr = 10000 * sheet_2_value
     document.getElementById('cell_b86_rep_thr').innerHTML = valueFormat(cell_b86_rep_thr,'dollar')
     if(Walkways_rep_thr){
         total_of_walkaways += cell_b86_rep_thr
         Walkways_rep_thr_Div.classList.add('border-highlight');
     }
     else{
         Walkways_rep_thr_Div.classList.remove('border-highlight');
     }
     

     document.getElementById('cell_b81_walkaways').innerHTML = valueFormat(total_of_walkaways, 'dollar') || '$0'

    // Walkaway





    // Fencing

    
     // for Checkboxes Value
     var Fencing_noWork = document.getElementById('Fencing_noWork').checked;
     var Fencing_minor = document.getElementById('Fencing_minor').checked;
     var Fencing_mixed = document.getElementById('Fencing_mixed').checked;
     var Fencing_major = document.getElementById('Fencing_major').checked;
     var Fencing_major_rep_thr = document.getElementById('Fencing_major_rep_thr').checked;
     // for Checkboxes Value
 
 
     // for border
     var Fencing_noWork_Div = document.getElementById('Fencing_noWork_Div');
     var Fencing_minor_Div = document.getElementById('Fencing_minor_Div');
     var Fencing_mixed_Div = document.getElementById('Fencing_mixed_Div');
     var Fencing_major_Div = document.getElementById('Fencing_major_Div');
     var Fencing_major_rep_thr_Div = document.getElementById('Fencing_major_rep_thr_Div');
     // for border
 
 
     var total_of_fencing = 0
     
     if(Fencing_noWork){
         total_of_fencing += 0
         Fencing_noWork_Div.classList.add('border-highlight');
     }
     else{
         Fencing_noWork_Div.classList.remove('border-highlight');
     }
     
     var cell_b90_minor_rep = 250 * sheet_2_value
     document.getElementById('cell_b90_minor_rep').innerHTML = valueFormat(cell_b90_minor_rep,'dollar')
     if(Fencing_minor){
        //  total_of_fencing += parseFloat(strToNum(document.getElementById('cell_b90_minor_rep').value) || 0)
         total_of_fencing += cell_b90_minor_rep
         Fencing_minor_Div.classList.add('border-highlight');
     }
     else{
         Fencing_minor_Div.classList.remove('border-highlight');
     }
     
     var cell_b91_mixed_cond = 2000 * sheet_2_value
     document.getElementById('cell_b91_mixed_cond').innerHTML = valueFormat(cell_b91_mixed_cond,'dollar')
     if(Fencing_mixed){
         total_of_fencing += cell_b91_mixed_cond
         Fencing_mixed_Div.classList.add('border-highlight');
     }
     else{
         Fencing_mixed_Div.classList.remove('border-highlight');
     }
     
     var cell_b92_major_rep = 3500 * sheet_2_value
     document.getElementById('cell_b92_major_rep').innerHTML = valueFormat(cell_b92_major_rep,'dollar')
     if(Fencing_major){
         total_of_fencing += cell_b92_major_rep
         Fencing_major_Div.classList.add('border-highlight');
     }
     else{
         Fencing_major_Div.classList.remove('border-highlight');
     }
     

     var cell_b93_rep_thr = 5000 * sheet_2_value
     document.getElementById('cell_b93_rep_thr').innerHTML = valueFormat(cell_b93_rep_thr,'dollar')
     if(Fencing_major_rep_thr){
         total_of_fencing += cell_b93_rep_thr
         Fencing_major_rep_thr_Div.classList.add('border-highlight');
     }
     else{
         Fencing_major_rep_thr_Div.classList.remove('border-highlight');
     }


     document.getElementById('cell_b88_fencing').innerHTML = valueFormat(total_of_fencing,'dollar') || '$0'

    // Fencing





    // Deck


     // for Checkboxes Value
     var Deck_noWork = document.getElementById('Deck_noWork').checked;
     var Deck_minor = document.getElementById('Deck_minor').checked;
     var Deck_mixed = document.getElementById('Deck_mixed').checked;
     var Deck_major = document.getElementById('Deck_major').checked;
     var Deck_rep_thr = document.getElementById('Deck_rep_thr').checked;
     // for Checkboxes Value
 
 
     // for border
     var Deck_noWork_Div = document.getElementById('Deck_noWork_Div');
     var Deck_minor_Div = document.getElementById('Deck_minor_Div');
     var Deck_mixed_Div = document.getElementById('Deck_mixed_Div');
     var Deck_major_Div = document.getElementById('Deck_major_Div');
     var Deck_rep_thr_Div = document.getElementById('Deck_rep_thr_Div');
     // for border
 
 
     var total_of_deck = 0
     
     if(Deck_noWork){
        //  total_of_deck += parseFloat(strToNum(document.getElementById('cell_b96_no_work').value) || 0)
         total_of_deck += 0
         Deck_noWork_Div.classList.add('border-highlight');
     }
     else{
         Deck_noWork_Div.classList.remove('border-highlight');
     }
     
     var cell_b97_minor_rep = 250 * sheet_2_value
     document.getElementById('cell_b97_minor_rep').innerHTML = valueFormat(cell_b97_minor_rep,'dollar')
     if(Deck_minor){
         total_of_deck += cell_b97_minor_rep
         Deck_minor_Div.classList.add('border-highlight');
     }
     else{
         Deck_minor_Div.classList.remove('border-highlight');
     }
     
     var cell_b98_mixed_cond = 2000 * sheet_2_value
     document.getElementById('cell_b98_mixed_cond').innerHTML = valueFormat(cell_b98_mixed_cond,'dollar')
     if(Deck_mixed){
         total_of_deck += cell_b98_mixed_cond
         Deck_mixed_Div.classList.add('border-highlight');
     }
     else{
         Deck_mixed_Div.classList.remove('border-highlight');
     }

     var cell_b99_major_rep = 3500 * sheet_2_value
     document.getElementById('cell_b99_major_rep').innerHTML = valueFormat(cell_b99_major_rep,'dollar')
     if(Deck_major){
         total_of_deck += cell_b99_major_rep
         Deck_major_Div.classList.add('border-highlight');
     }
     else{
         Deck_major_Div.classList.remove('border-highlight');
     }

     var cell_b100_rep_thr = 5000 * sheet_2_value
     document.getElementById('cell_b100_rep_thr').innerHTML = valueFormat(cell_b100_rep_thr,'dollar')
     if(Deck_rep_thr){
         total_of_deck += cell_b100_rep_thr
         Deck_rep_thr_Div.classList.add('border-highlight');
     }
     else{
         Deck_rep_thr_Div.classList.remove('border-highlight');
     }

     document.getElementById('cell_b88_deck').innerHTML = valueFormat(total_of_deck,'dollar') || '$0'

    // Deck






    // Roof | Gutters

    var cell_b102_roof = 5.50 / cell_b13_sq_footage
    // document.getElementById('cell_b102_roof').innerHTML = cell_b102_roof

    var fifteen_per_of_sq_footage = cell_b13_sq_footage * 0.15
    var cell_b104_repair_needed = (4.40 * fifteen_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b104_repair_needed').innerHTML = valueFormat(cell_b104_repair_needed,'dollar')

    var cell_b105_rep = (4.40 * hundred_per_of_sq_footage) * sheet_2_value
    document.getElementById('cell_b105_rep').innerHTML = valueFormat(cell_b105_rep,'dollar')




    // for Checkboxes Value
    var Roof_noWork = document.getElementById('Roof_noWork').checked;
    var Roof_repair = document.getElementById('Roof_repair').checked;
    var Roof_repl = document.getElementById('Roof_repl').checked;
    // for Checkboxes Value


    // for border
    var Roof_noWork_Div = document.getElementById('Roof_noWork_Div');
    var Roof_repair_Div = document.getElementById('Roof_repair_Div');
    var Roof_repl_Div = document.getElementById('Roof_repl_Div');
    // for border


    var total_of_Roof = 0
    
    if(Roof_noWork){
        total_of_Roof += 0
        Roof_noWork_Div.classList.add('border-highlight');
    }
    else{
        Roof_noWork_Div.classList.remove('border-highlight');
    }
    
    if(Roof_repair){
        total_of_Roof += parseFloat(cell_b104_repair_needed)
        Roof_repair_Div.classList.add('border-highlight');
    }
    else{
        Roof_repair_Div.classList.remove('border-highlight');
    }
    
    if(Roof_repl){
        total_of_Roof += parseFloat(cell_b105_rep)
        Roof_repl_Div.classList.add('border-highlight');
    }
    else{
        Roof_repl_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b102_roof').innerHTML = valueFormat(total_of_Roof,'dollar') || '$0'

    // Roof | Gutters



    // Windows

    // var cell_b108_a_no_of_windows = parseFloat(document.getElementById('cell_b108_a_no_of_windows').value || 0)
    // var cell_b108_b_ans = cell_b108_a_no_of_windows * 850

    
   


    // for Checkboxes Value
    var Windows_NoOFWin = document.getElementById('Windows_NoOFWin').checked;
    // for Checkboxes Value


    // for border
    var Windows_NoOFWin_Div = document.getElementById('Windows_NoOFWin_Div');
    // for border

    var multp_of_windows = parseFloat(document.getElementById('multp_of_windows').value) || 0


    var cell_b108_b_ans =  850 * sheet_2_value * multp_of_windows
    document.getElementById('cell_b108_b_ans').innerHTML = valueFormat(cell_b108_b_ans,'dollar')


    var total_of_Windows = 0
    
    if(Windows_NoOFWin){
        total_of_Windows += cell_b108_b_ans 
        Windows_NoOFWin_Div.classList.add('border-highlight');
    }
    else{
        Windows_NoOFWin_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b107_windows').innerHTML = valueFormat(total_of_Windows,'dollar')

    // Windows





    // unfinished


    
    // for Checkboxes Value
    var unfinished_noWork = document.getElementById('unfinished_noWork').checked;
    var unfinished_minor = document.getElementById('unfinished_minor').checked;
    var unfinished_major = document.getElementById('unfinished_major').checked;
    var unfinished_repl_thr = document.getElementById('unfinished_repl_thr').checked;
    // for Checkboxes Value


    // for border
    var unfinished_noWork_Div = document.getElementById('unfinished_noWork_Div');
    var unfinished_minor_Div = document.getElementById('unfinished_minor_Div');
    var unfinished_major_Div = document.getElementById('unfinished_major_Div');
    var unfinished_repl_thr_Div = document.getElementById('unfinished_repl_thr_Div');
    // for border


    var total_of_unfinished = 0
    
    if(unfinished_noWork){
        total_of_unfinished += 0
        unfinished_noWork_Div.classList.add('border-highlight');
    }
    else{
        unfinished_noWork_Div.classList.remove('border-highlight');
    }
    

    var cell_b112_minor_rep = 2500 * sheet_2_value
    document.getElementById('cell_b112_minor_rep').innerHTML = valueFormat(cell_b112_minor_rep,'dollar')
    if(unfinished_minor){
        // total_of_unfinished += parseFloat(strToNum(document.getElementById('cell_b112_minor_rep').value) || 0)
        total_of_unfinished += cell_b112_minor_rep
        unfinished_minor_Div.classList.add('border-highlight');
    }
    else{
        unfinished_minor_Div.classList.remove('border-highlight');
    }
    
    var cell_b113_major_rep = 10000 * sheet_2_value
    document.getElementById('cell_b113_major_rep').innerHTML = valueFormat(cell_b113_major_rep,'dollar')
    if(unfinished_major){
        total_of_unfinished += cell_b113_major_rep
        unfinished_major_Div.classList.add('border-highlight');
    }
    else{
        unfinished_major_Div.classList.remove('border-highlight');
    }
    
    var cell_b114_rep_thr = 30000 * sheet_2_value
    document.getElementById('cell_b114_rep_thr').innerHTML = valueFormat(cell_b114_rep_thr,'dollar')

    if(unfinished_repl_thr){
        total_of_unfinished += 30000
        unfinished_repl_thr_Div.classList.add('border-highlight');
    }
    else{
        unfinished_repl_thr_Div.classList.remove('border-highlight');
    }

    document.getElementById('cell_b110_unfin').innerHTML = valueFormat(total_of_unfinished,'dollar') || '$0'


    // unfinished




    // Finished Basement
    
    var cell_b116_fini_base = 7 / cell_b13_sq_footage
    // document.getElementById('cell_b116_fini_base').innerHTML = cell_b116_fini_base

    var cell_b118_no_work = (5.60 * eight_per_of_sq_footage ) * sheet_2_value
    document.getElementById('cell_b118_no_work').innerHTML = valueFormat(cell_b118_no_work,'dollar')

    var cell_b119_mixed_cond = (5.60 * twenty_five_per_of_sq_footage) * sheet_2_value 
    document.getElementById('cell_b119_mixed_cond').innerHTML = valueFormat(cell_b119_mixed_cond,'dollar')

    var cell_b120_maj_rep = (5.60 * fity_per_of_sq_footage) * sheet_2_value 
    document.getElementById('cell_b120_maj_rep').innerHTML = valueFormat(cell_b120_maj_rep,'dollar')

    var cell_b121_rep_thr = (5.60 * hundred_per_of_sq_footage) * sheet_2_value 
    document.getElementById('cell_b121_rep_thr').innerHTML = valueFormat(cell_b121_rep_thr,'dollar')





     // for Checkboxes Value
     var Finished_noWork = document.getElementById('Finished_noWork').checked;
     var Finished_minor = document.getElementById('Finished_minor').checked;
     var Finished_mixed = document.getElementById('Finished_mixed').checked;
     var Finished_major = document.getElementById('Finished_major').checked;
     var Finished_rep_thr = document.getElementById('Finished_rep_thr').checked;
     // for Checkboxes Value
 
 
     // for border
     var Finished_noWork_Div = document.getElementById('Finished_noWork_Div');
     var Finished_minor_Div = document.getElementById('Finished_minor_Div');
     var Finished_mixed_Div = document.getElementById('Finished_mixed_Div');
     var Finished_major_Div = document.getElementById('Finished_major_Div');
     var Finished_rep_thr_Div = document.getElementById('Finished_rep_thr_Div');
     // for border
 
 
     var total_of_Finished = 0
     
     if(Finished_noWork){
         total_of_Finished += 0
         Finished_noWork_Div.classList.add('border-highlight');
     }
     else{
         Finished_noWork_Div.classList.remove('border-highlight');
     }
     
     if(Finished_minor){
         total_of_Finished += parseFloat(cell_b118_no_work)
         Finished_minor_Div.classList.add('border-highlight');
     }
     else{
         Finished_minor_Div.classList.remove('border-highlight');
     }
     
     if(Finished_mixed){
        total_of_Finished += parseFloat(cell_b119_mixed_cond)
        Finished_mixed_Div.classList.add('border-highlight');
     }
     else{
        Finished_mixed_Div.classList.remove('border-highlight');
     }

     if(Finished_major){
        total_of_Finished += parseFloat(cell_b120_maj_rep)
        Finished_major_Div.classList.add('border-highlight');
     }
     else{
        Finished_major_Div.classList.remove('border-highlight');
     }

     if(Finished_rep_thr){
        total_of_Finished += parseFloat(cell_b121_rep_thr)
        Finished_rep_thr_Div.classList.add('border-highlight');
     }
     else{
        Finished_rep_thr_Div.classList.remove('border-highlight');
     }


    document.getElementById('cell_b116_fini_base').innerHTML = valueFormat(total_of_Finished, 'dollar') || '$0'

    // Finished Basement





    // HVAC

     // for Checkboxes Value
     var HVAC_noWork = document.getElementById('HVAC_noWork').checked;
     var HVAC_repair = document.getElementById('HVAC_repair').checked;
     var HVAC_replacement = document.getElementById('HVAC_replacement').checked;
     // for Checkboxes Value
 
 
     // for border
     var HVAC_noWork_Div = document.getElementById('HVAC_noWork_Div');
     var HVAC_repair_Div = document.getElementById('HVAC_repair_Div');
     var HVAC_replacement_Div = document.getElementById('HVAC_replacement_Div');
     // for border
 
 
     var total_of_HVAC = 0
     
     if(HVAC_noWork){
         total_of_HVAC += 0
         HVAC_noWork_Div.classList.add('border-highlight');
     }
     else{
         HVAC_noWork_Div.classList.remove('border-highlight');
     }
     
     
     var cell_b127_repair_needed = 2000 * sheet_2_value
    document.getElementById('cell_b127_repair_needed').innerHTML = valueFormat(cell_b127_repair_needed,'dollar')
     if(HVAC_repair){
         total_of_HVAC += cell_b127_repair_needed
         HVAC_repair_Div.classList.add('border-highlight');
     }
     else{
         HVAC_repair_Div.classList.remove('border-highlight');
     }
     
     var cell_b128_Replacement = 10000 * sheet_2_value
     document.getElementById('cell_b128_Replacement').innerHTML = valueFormat(cell_b128_Replacement,'dollar')
     if(HVAC_replacement){
         total_of_HVAC += 10000
         HVAC_replacement_Div.classList.add('border-highlight');
     }
     else{
         HVAC_replacement_Div.classList.remove('border-highlight');
     }
     

     document.getElementById('cell_b125_fini_base').innerHTML = valueFormat(total_of_HVAC,'dollar') || '$0'


    // HVAC








    // Plumbing

    
     // for Checkboxes Value
     var plumbing_noWork = document.getElementById('plumbing_noWork').checked;
     var plumbing_minor = document.getElementById('plumbing_minor').checked;
     var plumbing_major = document.getElementById('plumbing_major').checked;
     var plumbing_replacment = document.getElementById('plumbing_replacment').checked;
     // for Checkboxes Value
 
 
     // for border
     var plumbing_noWork_Div = document.getElementById('plumbing_noWork_Div');
     var plumbing_minor_Div = document.getElementById('plumbing_minor_Div');
     var plumbing_major_Div = document.getElementById('plumbing_major_Div');
     var plumbing_replacment_Div = document.getElementById('plumbing_replacment_Div');
     // for border
 
 
     var total_of_plumbing = 0
     
     if(plumbing_noWork){
         total_of_plumbing += 0
         plumbing_noWork_Div.classList.add('border-highlight');
     }
     else{
         plumbing_noWork_Div.classList.remove('border-highlight');
     }
     
     var cell_b132_repair_needed = 500 * sheet_2_value
     document.getElementById('cell_b132_repair_needed').innerHTML = valueFormat(cell_b132_repair_needed,'dollar')
     if(plumbing_minor){
         total_of_plumbing += cell_b132_repair_needed
         plumbing_minor_Div.classList.add('border-highlight');
     }
     else{
         plumbing_minor_Div.classList.remove('border-highlight');
     }
     
     var cell_b133_maj_rep = 2500 * sheet_2_value
     document.getElementById('cell_b133_maj_rep').innerHTML = valueFormat(cell_b133_maj_rep,'dollar')
     if(plumbing_major){
         total_of_plumbing += cell_b133_maj_rep
         plumbing_major_Div.classList.add('border-highlight');
     }
     else{
         plumbing_major_Div.classList.remove('border-highlight');
     }
     

     var cell_b134_maj_rep = 10000 * sheet_2_value
     document.getElementById('cell_b134_maj_rep').innerHTML = valueFormat(cell_b134_maj_rep,'dollar')
     if(plumbing_replacment){
         total_of_plumbing += cell_b134_maj_rep
         plumbing_replacment_Div.classList.add('border-highlight');
     }
     else{
         plumbing_replacment_Div.classList.remove('border-highlight');
     }

     document.getElementById('cell_b130_plumbing').innerHTML = valueFormat(total_of_plumbing,'dollar')
     
    // Plumbing





    // Electrical



    // for Checkboxes Value
    var electrical_noWork = document.getElementById('electrical_noWork').checked;
    var electrical_minor = document.getElementById('electrical_minor').checked;
    var electrical_major = document.getElementById('electrical_major').checked;
    var electrical_replacment = document.getElementById('electrical_replacment').checked;
    // for Checkboxes Value


    // for border
    var electrical_noWork_Div = document.getElementById('electrical_noWork_Div');
    var electrical_minor_Div = document.getElementById('electrical_minor_Div');
    var electrical_major_Div = document.getElementById('electrical_major_Div');
    var electrical_replacment_Div = document.getElementById('electrical_replacment_Div');
    // for border


    var total_of_electrical = 0
    
    if(electrical_noWork){
        total_of_electrical += 0
        electrical_noWork_Div.classList.add('border-highlight');
    }
    else{
        electrical_noWork_Div.classList.remove('border-highlight');
    }
    
    var cell_b138_minor_repair = 500 * sheet_2_value
     document.getElementById('cell_b138_minor_repair').innerHTML = valueFormat(cell_b138_minor_repair,'dollar')
    if(electrical_minor){
        // total_of_electrical += parseFloat(strToNum(document.getElementById('cell_b138_minor_repair').value))
        total_of_electrical += cell_b138_minor_repair
        electrical_minor_Div.classList.add('border-highlight');
    }
    else{
        electrical_minor_Div.classList.remove('border-highlight');
    }
    

    var cell_b139_minor_repair = 2500 * sheet_2_value
    document.getElementById('cell_b139_minor_repair').innerHTML = valueFormat(cell_b139_minor_repair,'dollar')
    if(electrical_major){
        total_of_electrical += cell_b139_minor_repair
        electrical_major_Div.classList.add('border-highlight');
    }
    else{
        electrical_major_Div.classList.remove('border-highlight');
    }
    
    var cell_b140_minor_repair = 10000 * sheet_2_value
    document.getElementById('cell_b140_minor_repair').innerHTML = valueFormat(cell_b140_minor_repair,'dollar')
    if(electrical_replacment){
        total_of_electrical += cell_b140_minor_repair
        electrical_replacment_Div.classList.add('border-highlight');
    }
    else{
        electrical_replacment_Div.classList.remove('border-highlight');
    }


    document.getElementById('cell_b136_plumbing').innerHTML = valueFormat(total_of_electrical,'dollar') || '$0'

    // Electrical

    



    // Fire Place

     // for Checkboxes Value
     var fireplace_noWork = document.getElementById('fireplace_noWork').checked;
     var fireplace_minor = document.getElementById('fireplace_minor').checked;
     var fireplace_major = document.getElementById('fireplace_major').checked;
     // for Checkboxes Value
 
 
     // for border
     var fireplace_noWork_Div = document.getElementById('fireplace_noWork_Div');
     var fireplace_minor_Div = document.getElementById('fireplace_minor_Div');
     var fireplace_major_Div = document.getElementById('fireplace_major_Div');
     // for border
 
 
     var total_of_fireplace = 0
     
     if(fireplace_noWork){
         total_of_fireplace += 0
         fireplace_noWork_Div.classList.add('border-highlight');
     }
     else{
         fireplace_noWork_Div.classList.remove('border-highlight');
     }
     
     var cell_b144_minor_repair = 500 * sheet_2_value
    document.getElementById('cell_b144_minor_repair').innerHTML = valueFormat(cell_b144_minor_repair,'dollar')
     if(fireplace_minor){
         // total_of_fireplace += parseFloat(strToNum(document.getElementById('cell_b138_minor_repair').value))
         total_of_fireplace += cell_b144_minor_repair
         fireplace_minor_Div.classList.add('border-highlight');
     }
     else{
         fireplace_minor_Div.classList.remove('border-highlight');
     }
     
     var cell_b145_minor_repair = 2500 * sheet_2_value
     document.getElementById('cell_b145_minor_repair').innerHTML = valueFormat(cell_b145_minor_repair,'dollar')
     if(fireplace_major){
         total_of_fireplace += cell_b145_minor_repair
         fireplace_major_Div.classList.add('border-highlight');
     }
     else{
         fireplace_major_Div.classList.remove('border-highlight');
     }
  
 
     document.getElementById('cell_b142_fireplace').innerHTML = valueFormat(total_of_fireplace,'dollar') || '$0'
 

    // Fire Place




    // garge


    
    // for Checkboxes Value
    var garge_noWork = document.getElementById('garge_noWork').checked;
    var garge_minor = document.getElementById('garge_minor').checked;
    var garge_major = document.getElementById('garge_major').checked;
    // for Checkboxes Value


    // for border
    var garge_noWork_Div = document.getElementById('garge_noWork_Div');
    var garge_minor_Div = document.getElementById('garge_minor_Div');
    var garge_major_Div = document.getElementById('garge_major_Div');
    // for border


    var total_of_garge = 0
    
    if(garge_noWork){
        total_of_garge += 0
        garge_noWork_Div.classList.add('border-highlight');
    }
    else{
        garge_noWork_Div.classList.remove('border-highlight');
    }
    
    var cell_b149_minor_repair = 1500 * sheet_2_value
     document.getElementById('cell_b149_minor_repair').innerHTML = valueFormat(cell_b149_minor_repair,'dollar')
    if(garge_minor){
        // total_of_garge += parseFloat(document.getElementById('cell_b149_minor_repair').value)
        total_of_garge += cell_b149_minor_repair
        garge_minor_Div.classList.add('border-highlight');
    }
    else{
        garge_minor_Div.classList.remove('border-highlight');
    }
    
    var cell_b150_minor_repair = 3000 * sheet_2_value
    document.getElementById('cell_b150_minor_repair').innerHTML = valueFormat(cell_b150_minor_repair,'dollar')
    if(garge_major){
        total_of_garge += cell_b150_minor_repair
        garge_major_Div.classList.add('border-highlight');
    }
    else{
        garge_major_Div.classList.remove('border-highlight');
    }


    document.getElementById('cell_b147_Garage').innerHTML = valueFormat(total_of_garge, 'dollar') || '$0'

    // garge


    var cell_b9_zestimate_price = parseFloat(document.getElementById('cell_b9_zestimate_price').value || 0)

    // var ninty_three_per = cell_b9_zestimate_price * 0.93
    var ninty_three_per = cell_b9_zestimate_price
    document.getElementById('cell_f5').innerHTML = valueFormat(ninty_three_per,'dollar') || '$0'


    var cell_f6 = parseFloat(strToNum(document.getElementById('cell_b18_flooring').innerHTML))  +  parseFloat(strToNum(document.getElementById('cell_b26_walls').innerHTML))  +  parseFloat(strToNum(document.getElementById('cell_b33_kitchen').innerHTML)) +  parseFloat(strToNum(document.getElementById('cell_b40_full_bathroom').innerHTML)) +  parseFloat(strToNum(document.getElementById('cell_b47_halfBathroom').innerHTML))  +  parseFloat(strToNum(document.getElementById('cell_b54_app').innerHTML)) +  parseFloat(strToNum(document.getElementById('cell_b60_miscell').innerHTML))  +  parseFloat(strToNum(document.getElementById('cell_b67_siding').innerHTML)) +  parseFloat(strToNum(document.getElementById('cell_b74_landing').innerHTML)) + parseFloat(strToNum(document.getElementById('cell_b81_walkaways').innerHTML))  + parseFloat(strToNum(document.getElementById('cell_b88_fencing').innerHTML))  +  parseFloat(strToNum(document.getElementById('cell_b88_deck').innerHTML)) +  parseFloat(strToNum(document.getElementById('cell_b102_roof').innerHTML)) + parseFloat(strToNum(document.getElementById('cell_b107_windows').innerHTML))  + parseFloat(strToNum(document.getElementById('cell_b110_unfin').innerHTML)) + parseFloat(strToNum(document.getElementById('cell_b116_fini_base').innerHTML)) + parseFloat(strToNum(document.getElementById('cell_b125_fini_base').innerHTML))  + parseFloat(strToNum(document.getElementById('cell_b130_plumbing').innerHTML))  +parseFloat(strToNum(document.getElementById('cell_b136_plumbing').innerHTML)) + parseFloat(strToNum(document.getElementById('cell_b142_fireplace').innerHTML))   +   parseFloat(strToNum(document.getElementById('cell_b147_Garage').innerHTML))    
    document.getElementById('cell_f6').innerHTML = valueFormat(cell_f6,'dollar') || '$0'

    // console.log('cell_f6',cell_f6)

    var cell_f7 = (ninty_three_per * 0.7) - cell_f6
    document.getElementById('cell_f7').innerHTML = valueFormat(cell_f7,'dollar') || '$0'


    


    var e14_contract = cell_f7
    document.getElementById('e14_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    var f14_sell = 5000 + parseFloat(e14_contract)

    var cell_f8 = f14_sell * 0.01
    document.getElementById('cell_f8').innerHTML = valueFormat(cell_f8,'dollar') || '$0'


    var cell_f9 = f14_sell * 0.01
    document.getElementById('cell_f9').innerHTML = valueFormat(cell_f9,'dollar') || '$0'

    var e15_contract = parseFloat(cell_f7) + parseFloat(cell_f8)
    document.getElementById('e15_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    
    document.getElementById('e16_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    document.getElementById('e17_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    document.getElementById('e18_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    document.getElementById('e19_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    document.getElementById('e20_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'
    document.getElementById('e21_contract').innerHTML = valueFormat(e14_contract,'dollar') || '$0'



    var f15_sell = 7500 + parseFloat(e15_contract)
    var f16_sell = 10000 + parseFloat(e15_contract)
    var f17_sell = 12500 + parseFloat(e15_contract)
    var f18_sell = 15000 + parseFloat(e15_contract)
    var f19_sell = 17500 + parseFloat(e15_contract)
    var f20_sell = 20000 + parseFloat(e15_contract)
    var f21_sell = 25000 + parseFloat(e15_contract)


    document.getElementById('f14_sell').innerHTML = valueFormat(f14_sell,'dollar')
    document.getElementById('f15_sell').innerHTML = valueFormat(f15_sell,'dollar')
    document.getElementById('f16_sell').innerHTML = valueFormat(f16_sell,'dollar')
    document.getElementById('f17_sell').innerHTML = valueFormat(f17_sell,'dollar')
    document.getElementById('f18_sell').innerHTML = valueFormat(f18_sell,'dollar')
    document.getElementById('f19_sell').innerHTML = valueFormat(f19_sell,'dollar')
    document.getElementById('f20_sell').innerHTML = valueFormat(f20_sell,'dollar')
    document.getElementById('f21_sell').innerHTML = valueFormat(f21_sell,'dollar')


    document.getElementById('g14_profit').innerHTML = '$5,000'
    document.getElementById('g15_profit').innerHTML =  '$7,500' 
    document.getElementById('g16_profit').innerHTML = '$10,000'
    document.getElementById('g17_profit').innerHTML = '$12,500'
    document.getElementById('g18_profit').innerHTML = '$15,000'
    document.getElementById('g19_profit').innerHTML = '$17,500'
    document.getElementById('g20_profit').innerHTML = '$20,000'
    document.getElementById('g21_profit').innerHTML = '$25,000'




    // interior_sum

    var interior_sum = parseFloat(total_of_flooring) + parseFloat(total_of_walls) + parseFloat(total_of_kitchen) + parseFloat(total_of_fullBathroom) + parseFloat(total_of_HalfBathroom) + parseFloat(total_of_Appliances) + parseFloat(total_of_miscell) 
    document.getElementById('interior_sum').innerHTML = valueFormat(interior_sum, 'dollar')

    // interior_sum



    // exterior_sum

    var exterior_sum = parseFloat(total_of_siding) + parseFloat(total_of_landescaping) + parseFloat(total_of_walkaways) + parseFloat(total_of_fencing) + parseFloat(total_of_deck) + parseFloat(total_of_Roof) + parseFloat(total_of_Windows) + parseFloat(total_of_unfinished) + parseFloat(total_of_Finished)
    document.getElementById('exterior_sum').innerHTML = valueFormat(exterior_sum, 'dollar')

    // exterior_sum


    // components_sum

    var components_sum = parseFloat(total_of_HVAC) + parseFloat(total_of_plumbing) + parseFloat(total_of_electrical) + parseFloat(total_of_fireplace) +  parseFloat(total_of_garge)
    document.getElementById('components_sum').innerHTML = valueFormat(components_sum,'dollar') || '$0'

    // components_sum




    


}
updateCalculations()





function generatepdf(page) {

    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    const currentDate = `${month}-${day}-${year}`;
    var doc = new jsPDF("p", "mm", "a4");
    var x = 15;
    var y = 10;
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(8);
    doc.text(x+178, 4, 'Date:' + ' ' +currentDate, 'right');

    y += 6;
        
    // doc.rect(15, 10, 180, 277);
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(105, y, "Property Valuation & Qualifying", 'center');
    
    y +=8
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(15);
    doc.text(105, y, "Calculation Report", 'center');

    // Box 2
    y += 8.5;


    doc.setDrawColor(222, 222, 222);
    doc.rect(x + 1, y, 85, 25);
    doc.setFillColor(210, 210, 210);
    doc.rect(x + 1, y, 85, 5, 'F');
    doc.setDrawColor(222, 222, 222);
    doc.rect(x + 1, y, 85, 5);

    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 3.5, "Property Details", 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "State of Property");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, document.getElementById("cell_b4_st_of_prop").value, 'right');

    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Property Address");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    var splitToTextSize = doc.splitTextToSize(document.getElementById("cell_b7_property_add").value,55);
    doc.text(x+85, y + 8, splitToTextSize, 'right');
    
    y+=4
    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Asking Price");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b8_asking_price").value), 'right');

    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Zestimate Price");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b9_zestimate_price").value), 'right');
  
    // Box 3
    x+=93
    y -= 16;


    doc.rect(x + 1, y, 85, 25);
    doc.setFillColor(210, 210, 210);
    doc.rect(x + 1, y, 85, 5, 'F');
    doc.setDrawColor(222, 222, 222);
    doc.rect(x + 1, y, 85, 5);

    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 3.5, "Home Details", 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Home Type");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b12_home_typ").value), 'right');
    
    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Square Footage");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b13_sq_footage").value), 'right');

    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Bedrooms");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b14_bedrooms").value), 'right');

    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Full Bathrooms");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b15_full_bathrooms").value), 'right');

    y+=4
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+2, y + 8, "Basement");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+85, y + 8, (document.getElementById("cell_b16_basement").value), 'right');
    
    x-=93
    // Box 4
    y += 12;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Flooring", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b18_flooring").innerHTML), 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="flooring"]:checked').val(), 'center');
    
  x+=93
    // Box 5
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Walls ", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b26_walls").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="walls"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Kitchen", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b33_kitchen").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="kitchen"]:checked').val(), 'center');

  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Full Bathrooms ", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b40_full_bathroom").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="fullBathRoom"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Half Bathrooms", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b47_halfBathroom").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="half_bathroom"]:checked').val(), 'center');
    
  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Appliances", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b54_app").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="appliances"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Miscellaneous", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b60_miscell").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Miscellaneous"]:checked').val(), 'center');
    
  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Siding | Flashing | Trim | Exterior Doors | Soffets", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b67_siding").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Siding"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Landscaping | Drainage | Grading", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b74_landing").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Landingscaping"]:checked').val(), 'center');

  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Walkways | Patios | Porches | Driveways", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b81_walkaways").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Walkways"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Fencing ", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b88_fencing").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Fencing"]:checked').val(), 'center');
    
  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Deck", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b88_deck").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Deck"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Roof | Gutters ", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b102_roof").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Roof"]:checked').val(), 'center');

  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Windows", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b107_windows").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Windows"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Garage", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b147_Garage").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Garage"]:checked').val(), 'center');

    
  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Finished Basement", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b125_fini_base").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Finished"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "HVAC", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b116_fini_base").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="HVAC"]:checked').val(), 'center');
    
  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Plumbing", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b130_plumbing").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Plumbing"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Electrical", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10, (document.getElementById("cell_b136_plumbing").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15, jQuery('input[name="Electrical"]:checked').val(), 'center');
    
  x+=93
    // Box 7
    doc.rect(x + 1, y, 85, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 5, "Fireplace", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+42.5, y + 10,  (document.getElementById("cell_b142_fireplace").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+42.5, y + 15,   jQuery('input[name="fireplace"]:checked').val(), 'center');
    
    x-=93
    // Box 6
    y += 20;

    doc.rect(x + 1, y, 178, 17);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(x+89, y + 5, "Unfinished Basement, Foundation, Crawlspace, Structure", 'center');
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+89, y + 10, (document.getElementById("cell_b110_unfin").innerHTML), 'center');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(9);
    doc.text(x+89, y + 15, jQuery('input[name="Unfinished"]:checked').val(), 'center');
    
    

    doc.addPage("p", "mm", "a4", true);

    var x = 15;
    var y = 10;
    
// Box 11
    y += 5;

    doc.rect(x + 1, y, 178, 36);
    doc.setFillColor(210, 210, 210);
    doc.rect(x + 1, y, 178, 6, 'F');
    doc.setDrawColor(222, 222, 222);
    doc.rect(x + 1, y, 178, 6);

    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+89, y + 4.5, "Contract Details", 'center');

    
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(10);
    doc.text(x+2, y + 10, "ARV");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+178, y + 10, (document.getElementById("cell_f5").innerHTML), 'right');
    
    y+=6
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(11);
    doc.text(x+2, y + 10, "Rennovation Budget");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+178, y + 10, (document.getElementById("cell_f6").innerHTML), 'right');

    y+=6
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(11);
    doc.text(x+2, y + 10, "Investor Maximum Buy");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+178, y + 10, (document.getElementById("cell_f7").innerHTML), 'right');

    y+=6
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(11);
    doc.text(x+2, y + 10, "Closing Costs (1% of purchase price)");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+178, y + 10, (document.getElementById("cell_f8").innerHTML), 'right');

    y+=6
    doc.setTextColor(0, 0, 0);
    doc.setFontType("normal");
    doc.setFontSize(11);
    doc.text(x+2, y + 10, "Earnest Money (1% of purchase price)");
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(11);
    doc.text(x+178, y + 10, (document.getElementById("cell_f9").innerHTML), 'right');

    // y += 16.5;

    // doc.rect(x + 1, y, 178, 59);
    // doc.setFillColor(210, 210, 210);
    // doc.rect(x + 1, y, 178, 6, 'F');
    // doc.setDrawColor(222, 222, 222);
    // doc.rect(x + 1, y, 178, 6);

    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+89, y + 3.5, "Negotiation Pricing", 'center');

    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, "Contract Price");
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, "'Sell For' Price", 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, "Profit", 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e14_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f14_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g14_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e15_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f15_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g15_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e16_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f16_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g16_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e17_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f17_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g17_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e18_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f18_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g18_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e19_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f19_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g19_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e20_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f20_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g20_profit").innerHTML), 'right');
    
    // y +=6
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+2, y + 10, (document.getElementById("e21_contract").innerHTML));
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("normal");
    // doc.setFontSize(11);
    // doc.text(x+90, y + 10, (document.getElementById("f21_sell").innerHTML), 'center');
    // doc.setTextColor(0, 0, 0);
    // doc.setFontType("bold");
    // doc.setFontSize(11);
    // doc.text(x+178, y + 10, (document.getElementById("g21_profit").innerHTML), 'right');
        

    window.open(doc.output('bloburl'))
    // doc.save();
}



















function strToNum(value) {
    var myStr = value;
    var newStr = myStr.replace(/,/g, '');
    var temp = newStr.replace(/\$/g, '')
    var numberValidation = temp.replace(/\%/g, '')
    return numberValidation;
}




jQuery(".dollarFormat").on("input", function () {
    if (numeral(this.value).value() != null) {
        jQuery(this).val('$' + valueFormat(numeral(this.value).value()))
    }
})









const inputs = document.querySelectorAll('.restricted-input');

inputs.forEach(input => {
    input.addEventListener('keypress', function (event) {
        const char = String.fromCharCode(event.which);
        if (!/\d/.test(char) && !['Backspace', 'Tab'].includes(event.key)) {
            event.preventDefault();
        }
    });
});






jQuery('.numericValidation').on('change', (e) => {

    var myStr = e.target.value;
    var newStr = myStr.replace(/,/g, '');
    var numberValidation = newStr.replace(/\$/g, '')

    var numbers = /^[0-9]+$/;
    if (!numberValidation.match(numbers)) {
        var str = numberValidation.substring(0, numberValidation.length - 1);
        if (numberValidation.length - 1 != 0) {
            e.target.value = valueFormat(numeral(str).value());
        } else {
            e.target.style = { "border-color": "red" };
        }
    }

})



// jQuery(".dollarFormat").on("change", function () {
//     if (numeral(this.value).value() != null) {
//         jQuery(this).val(valueFormat(numeral(this.value).value(),'nodigits'))
//     }
// })




jQuery('.dollarformat').on('keypress', function (evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode;
    //console.log(charCode);
    if (charCode != 46 && charCode != 45 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;

})


function strToNum(value) {
    var myStr = value;
    var newStr = myStr.replace(/,/g, '');
    var temp = newStr.replace(/\$/g, '')
    var numberValidation = temp.replace(/\%/g, '')
    return numberValidation;
}

jQuery(".dollarFormatwithdecimal").on("change", function () {
    if (numeral(this.value).value() != null) {
        jQuery(this).val((numeral(this.value).value()))
    }
})


function valueFormat(value, method = "none") {

    if (!value) {
        return 0
    }

    if (method == 'dollar') {
        return "$" + value.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    } 
    else if (method == 'dollarnodigits') {
        return "$" + value.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    } 
    else if (method == 'percentage') {

        return value.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }) + "%";

    }
    else if (method == 'nodigits') {

        return value.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }) ;

    }
    else {
        return value.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }

}








 // Function to ensure input is positive
 function preventNegativeInput(event) {
    const input = event.target;
    const value = parseFloat(input.value);
    if (value < 0) {
        input.value = Math.abs(value); // Convert to positive
    }
}

// Add event listeners to all input fields
const Myinputs = document.querySelectorAll('#container input');
Myinputs.forEach(input => {
    input.addEventListener('input', preventNegativeInput);
});