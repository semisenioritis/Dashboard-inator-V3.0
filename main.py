import tkinter as tk
from tkinter import ttk
import re
import os
import shutil
from re import sub



global master_dict_5
global actual_entry_count

master_dict_5 = {
    "Brown": "#603B2C",
    "Orange": "#854C1D",
    "Yellow": "#89632A",
    "Green": "#2B593F",
    "Blue": "#28456C",
    "Purple": "#492F64",
    "Pink": "#69314C",
    "Red": "#6E3630"

}

def submit_form():

    # extract all data from the fields
    global  master_dict_3
    global  master_dict_4
    global  gcal_to_populatee
    global  cal_name
    global  cal_category
    global  major_db_id
    global  minor_db_id
    global  main_cal_id
    global  deadline_cal_id
    global  reminder_cal_id
    cal_name = cal_name_entry.get()  # Get the value from the Name input field
    cal_category = cal_cat_name_entry.get()  # Get the value from the Email input field
    major_db_id = major_db_id_entry.get()
    minor_db_id = minor_db_id_entry.get()
    main_cal_id = cal_1_id_entry.get()
    deadline_cal_id = cal_2_id_entry.get()
    reminder_cal_id = cal_3_id_entry.get()
    gcal_to_populatee = str(gcal_to_populate_entry.get())
    master_dict_3=  {}
    master_dict_4=  {}


    for i in range(1,actual_entry_count+1):
        name_of_my_cate="category_entry_"+str(i)
        master_dict_3[i]=master_dict_1[name_of_my_cate].get()
        color_of_my_cate="category_color_entry_"+str(i)
        master_dict_4[i]=master_dict_2[color_of_my_cate].get()

    
    # ensure that all fields are well modified and filled in 
    # else, display an error message
    if cal_name == "" or cal_category == "" or major_db_id == "" or minor_db_id == "" or main_cal_id == "" or deadline_cal_id == "" or reminder_cal_id == "" or gcal_to_populatee == "":
        result_label.config(text="Please fill in all the fields")
    if cal_name == "eg: 21f1005520@ds.study.iitm.ac.in" or cal_category == "case sensitive"  or main_cal_id == "all events you add populate here" or deadline_cal_id == "Deadline events populate here" or reminder_cal_id == "Reminder notifs populate here" :
        result_label.config(text="Please modify all the fields correctly")
    else:
        result_label.config(text="")  # Clear the result label

    # if everything is good, then proceed to generate the code


        # this basically includes itterating thru the code files and replacing the patterns with whatever is needed. 
        # if the new file already exists then delete it and create a new one.


        # first, delete a preexisting folder
        if os.path.exists("done_appscript"):
            shutil.rmtree("done_appscript")
        
        os.mkdir("done_appscript")



        with open("./base_appscript/Daily Populator.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%events_from_cal%%", cal_category, line)
                file_out.write(modified_line)
        with open("./done_appscript/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp2.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%name_of_main_google_calendar%%", cal_name, line)
                file_out.write(modified_line)
        os.remove("./done_appscript/temp1.js")                
        with open("./done_appscript/temp2.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%major_database_id%%", major_db_id, line)
                file_out.write(modified_line) 
        os.remove("./done_appscript/temp2.js")                
        with open("./done_appscript/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/Daily_Populator.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%minor_database_id%%", minor_db_id, line)
                file_out.write(modified_line)
        os.remove("./done_appscript/temp1.js")





        with open("./base_appscript/Dashboard Endpoint.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/Dashboard Endpoint.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%minor_database_id%%", minor_db_id, line)
                file_out.write(modified_line)







        with open("./base_appscript/New Task Handler.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%major_database_id%%", major_db_id, line)
                file_out.write(modified_line)                
        with open("./done_appscript/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp2.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%cal_to_which_events_get_populated%%", main_cal_id, line)
                file_out.write(modified_line)
        os.remove("./done_appscript/temp1.js")    
        with open("./done_appscript/temp2.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%cal_which_is_deadline_cal%%", deadline_cal_id, line)
                file_out.write(modified_line)
        os.remove("./done_appscript/temp2.js")

        with open("./done_appscript/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp2.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%cal_that_is_reminder_cal%%", reminder_cal_id, line)
                file_out.write(modified_line)
        os.remove("./done_appscript/temp1.js")
        with open("./done_appscript/temp2.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/New Task Handler.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%minor_database_id%%", minor_db_id, line)
                file_out.write(modified_line)
        os.remove("./done_appscript/temp2.js")







        with open("./base_appscript/Task Deleter.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%major_database_id%%", major_db_id, line)
                file_out.write(modified_line)
        with open("./done_appscript/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/Task Deleter.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%minor_database_id%%", minor_db_id, line)
                file_out.write(modified_line)        
        os.remove("./done_appscript/temp1.js")




        with open("./base_appscript/Task Snoozer.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%major_database_id%%", major_db_id, line)
                file_out.write(modified_line)  
        with open("./done_appscript/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_appscript/Task Snoozer.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%minor_database_id%%", minor_db_id, line)
                file_out.write(modified_line) 
        os.remove("./done_appscript/temp1.js")                
        

        # then, create the main code file
        # then copy over the files that are not modified
        # then, itterate thru the files and replace the patterns with the required data

    # once code is generated, close window and open new window with the code
        root.destroy()
        loop_flag=False


    


def add_input():
    global entry_count
    global actual_entry_count
    entry_count += 1
    actual_entry_count += 1

    # Dynamic_Variable_Name can be
    # anything the user wants.
    count_str= str(actual_entry_count)
    dynamic_category_name= "category_entry_"+count_str
    print(dynamic_category_name)

    dynamic_categoty_color_name= "category_color_entry_"+count_str


    # Create a label for the new input
    new_label = ttk.Label(form_frame, text=f"Category {count_str}:")
    new_label.grid(column=0, row=entry_count, sticky=tk.W)

    # Create an input field for the new entry
    master_dict_1[dynamic_category_name] = ttk.Entry(form_frame)
    master_dict_1[dynamic_category_name].grid(column=1, row=entry_count, padx=5, pady=5, sticky=tk.W)
  
    master_dict_2[dynamic_categoty_color_name] = ttk.Combobox(form_frame,
    state="readonly",
    values=["Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"])
 
    master_dict_2[dynamic_categoty_color_name].grid(column=2, row=entry_count, padx=5, pady=5, sticky=tk.W)
    
def submit_form2():
    push_appscript = push_endpoint_entry.get()  # Get the value from the Name input field
    del_appscript = del_endpoint_entry.get()  # Get the value from the Email input field
    snooze_appscript = snooze_endpoint_entry.get()
    populate_appscript = populate_endpoint_entry.get()
    gmail_link_id = gmail_link_entry.get()
    gcal_link_id = gcal_link_entry.get()

    popup_html_variable=''
    for i in range(1,actual_entry_count+1):
        part1='<option value="'
        part3='" style="background-color: '
        part5=';">'
        part7='''</option>
        '''
        part2=master_dict_3[i]
        
        part4=master_dict_5[master_dict_4[i]]
        part6=master_dict_3[i]
        popup_html_variable=popup_html_variable+part1+part2+part3+part4+part5+part6+part7
        
    popup_css_variable=''
    for i in range(1,actual_entry_count+1):
        part1='#category option[value="'
        part3='"] {background-color: '
        part5=''';}
        '''

        part2=master_dict_3[i]
        part4=master_dict_5[master_dict_4[i]]
        popup_css_variable=popup_css_variable+part1+part2+part3+part4+part5

    def kebab(s):
        return '-'.join(
        sub(r"(\s|_|-)+"," ",
        sub(r"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+",
        lambda mo: ' ' + mo.group(0).lower(), s)).split())

    categ_classes=''
    categ_classes_dict=''
    for i in range(1,actual_entry_count+1):
        apart1 = '"'
        apart3 = '": "category-'
        apart5 = '''",
        '''

        apart2 = master_dict_3[i]
        apart4 = kebab(master_dict_3[i])

        bpart1 = '.category-'
        bpart3 = '{ background-color: '
        bpart5 = ''';}
        '''

        bpart2 = kebab(master_dict_3[i])
        bpart4 = master_dict_5[master_dict_4[i]]
        categ_classes = categ_classes + apart1 + apart2 + apart3 + apart4 + apart5
        categ_classes_dict = categ_classes_dict + bpart1 + bpart2 + bpart3 + bpart4 + bpart5


    if push_appscript =="" or del_appscript=="" or snooze_appscript=="" or populate_appscript=="" or gmail_link_id==""  or gcal_link_id=="":
        result_label.config(text="Please fill in all the fields")        

    else:
        result_label.config(text="")

        # first, delete a preexisting folder
        if os.path.exists("done_extension"):
            shutil.rmtree("done_extension")

        # then, create the main code file        
        os.mkdir("done_extension")





        # then copy over the files that are not modified


        shutil.copytree("./base_moding_gcal/img", "./done_extension/img")
        shutil.copyfile("./base_moding_gcal/apexcharts.min.js", "./done_extension/apexcharts.min.js")
        shutil.copyfile("./base_moding_gcal/redirect.html", "./done_extension/redirect.html")


        # then, itterate thru the files and replace the patterns with the required data

        with open("./base_moding_gcal/popup.js", 'r', encoding='utf-8') as file_in, open("./done_extension/popup.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%appscript_endpoint_to_push_data_towards%%", push_appscript, line)
                file_out.write(modified_line)        



        with open("./base_moding_gcal/popup.html", 'r', encoding='utf-8') as file_in, open("./done_extension/popup.html", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%populate_html_code_for_req_categories%%", popup_html_variable, line)
                file_out.write(modified_line)



        with open("./base_moding_gcal/popup.css", 'r', encoding='utf-8') as file_in, open("./done_extension/popup.css", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%add_custom_code_for_category_css%%", popup_css_variable, line)
                file_out.write(modified_line)




        with open("./base_moding_gcal/manifest.json", 'r', encoding='utf-8') as file_in, open("./done_extension/manifest.json", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%which_gcal_should_be_killed%%", gcal_to_populatee, line)
                file_out.write(modified_line)

        # ===========================================================================================================================


        with open("./base_moding_gcal/content.js", 'r', encoding='utf-8') as file_in, open("./done_extension/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%task_deleter_endpoint%%", del_appscript, line)
                file_out.write(modified_line)    

        with open("./done_extension/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_extension/temp2.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%task_snoozer_endpoint%%", snooze_appscript, line)
                file_out.write(modified_line) 
        os.remove("./done_extension/temp1.js")
        with open("./done_extension/temp2.js", 'r', encoding='utf-8') as file_in, open("./done_extension/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%dashboard_populator_endpoint%%", populate_appscript, line)
                file_out.write(modified_line)   
        os.remove("./done_extension/temp2.js")
        with open("./done_extension/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_extension/temp2.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%gmail_you_want_to_link_to%%", gmail_link_id, line)
                file_out.write(modified_line) 
        os.remove("./done_extension/temp1.js")
        with open("./done_extension/temp2.js", 'r', encoding='utf-8') as file_in, open("./done_extension/temp1.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%gcal_i_want_to_link_to%%", gcal_link_id, line)
                file_out.write(modified_line)  
        os.remove("./done_extension/temp2.js")
        with open("./done_extension/temp1.js", 'r', encoding='utf-8') as file_in, open("./done_extension/temp2.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%category_classes_of_new_tab%%", categ_classes_dict, line)
                file_out.write(modified_line) 
        os.remove("./done_extension/temp1.js")
        with open("./done_extension/temp2.js", 'r', encoding='utf-8') as file_in, open("./done_extension/content.js", 'w', encoding='utf-8') as file_out:
            for line in file_in:
                modified_line = re.sub(r"%%category_classes_dictionary_of_new_tab%%", categ_classes, line)
                file_out.write(modified_line) 
        os.remove("./done_extension/temp2.js")                                                                                                                                   

    # once code is generated, close window and open new window with the code
        root2.destroy()













# Create the main window
root = tk.Tk()
root.title("Step 1")  # Set the title of the window

# Create and configure a frame for the form
form_frame = ttk.Frame(root, padding=10)
form_frame.grid(column=0, row=0, padx=10, pady=10)  # Grid layout for the frame

# Center the form_frame horizontally by creating an empty column with weight
root.columnconfigure(0, weight=1)

# Create a heading label
heading_label = ttk.Label(form_frame, text="Creating custom Appscript code", font=("TkDefaultFont", 11, "bold"))  # Create a bold heading
heading_label.grid(column=0, row=0, columnspan=2, pady=10)  # Place the heading label in the grid

subheading_label = ttk.Label(form_frame, text="Paste data here and use it to generate the required appscript code", font=("TkDefaultFont", 8))  # Create a bold heading
subheading_label.grid(column=0, row=1, columnspan=2, pady=10)  # Place the heading label in the grid




# Create and add labels and input fields for Name
cal_name_label = ttk.Label(form_frame, text="Main Calendar name (from gcal):")  # Create a label for Name
cal_name_label.grid(column=0, row=2, sticky=tk.W)  # Place the label in the grid

cal_name_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
cal_name_entry.grid(column=1, row=2, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
cal_name_entry.insert(0, 'eg: 21f1005520@ds.study.iitm.ac.in')


# Create and add labels and input fields for Name
cal_cat_name_label = ttk.Label(form_frame, text="Category lable for events from above calendar:")  # Create a label for Name
cal_cat_name_label.grid(column=0, row=3, sticky=tk.W)  # Place the label in the grid

cal_cat_name_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
cal_cat_name_entry.grid(column=1, row=3, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
cal_cat_name_entry.insert(0, 'case sensitive')

another_label = ttk.Label(form_frame, text="Remember to add add this category below too with corresponding color", font=("TkDefaultFont", 8))  # Create a bold heading
another_label.grid(column=0, row=4, columnspan=2, pady=10)  # Place the heading label in the grid



major_db_id = ttk.Label(form_frame, text="Major Database Id:")  # Create a label for Name
major_db_id.grid(column=0, row=5, sticky=tk.W)  # Place the label in the grid

major_db_id_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
major_db_id_entry.grid(column=0, row=6, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid



minor_db_id = ttk.Label(form_frame, text="Minor Database Id:")  # Create a label for Name
minor_db_id.grid(column=1, row=5, sticky=tk.W)  # Place the label in the grid

minor_db_id_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
minor_db_id_entry.grid(column=1, row=6, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid


cal_1_id = ttk.Label(form_frame, text="1. Main calendar Id:")  # Create a label for Name
cal_1_id.grid(column=0, row=7, sticky=tk.W)  # Place the label in the grid

cal_1_id_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
cal_1_id_entry.grid(column=1, row=7, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
cal_1_id_entry.insert(0, 'all events you add populate here')

cal_2_id = ttk.Label(form_frame, text="2. Deadline calendar Id:")  # Create a label for Name
cal_2_id.grid(column=0, row=8, sticky=tk.W)  # Place the label in the grid

cal_2_id_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
cal_2_id_entry.grid(column=1, row=8, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
cal_2_id_entry.insert(0, 'Deadline events populate here')


cal_3_id = ttk.Label(form_frame, text="3. Reminder calendar Id:")  # Create a label for Name
cal_3_id.grid(column=0, row=9, sticky=tk.W)  # Place the label in the grid

cal_3_id_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
cal_3_id_entry.grid(column=1, row=9, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
cal_3_id_entry.insert(0, 'Reminder notifs populate here')   

gcal_to_populate = ttk.Label(form_frame, text="Gcal to Sacrifice")  # Create a label for Name
gcal_to_populate.grid(column=0, row=10, sticky=tk.W)  # Place the label in the grid

gcal_to_populate_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
gcal_to_populate_entry.grid(column=1, row=10, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
gcal_to_populate_entry.insert(0, 'https://calendar.google.com/calendar/u/0/r') 






# Create a button to add new entries
add_button = ttk.Button(form_frame, text="Add Category", command=add_input)
add_button.grid(column=0, row=11, columnspan=2, pady=10)

# Initialize entry count
entry_count = 12
actual_entry_count = 0
master_dict_1 = {}
master_dict_2 = {}
k=0


# Create a Submit button
submit_button = ttk.Button(form_frame, text="Submit", command=submit_form)  # Create the Submit button
submit_button.grid(column=0, row=100, columnspan=2, pady=10)  # Place the button in the grid

# Create a label to display the result
result_label = ttk.Label(form_frame, text="", foreground="#ff0000")  # Create an empty label for displaying the result
result_label.grid(column=0, row=101, columnspan=2)  # Place the label in the grid

# Adjust column and row weights for resizing
form_frame.columnconfigure(0, weight=1)
form_frame.columnconfigure(1, weight=1)
form_frame.rowconfigure(1, weight=1)
form_frame.rowconfigure(2, weight=1)

# Start the Tkinter main loop
root.mainloop()


# =========================================================================

root2 = tk.Tk()
root2.title("Step 2")


# Create and configure a frame for the form
form_frame = ttk.Frame(root2, padding=10)
form_frame.grid(column=0, row=0, padx=10, pady=10)  # Grid layout for the frame

# Center the form_frame horizontally by creating an empty column with weight
root2.columnconfigure(0, weight=1)

# Create a heading label
heading_label = ttk.Label(form_frame, text="Creating New-Tab extension code", font=("TkDefaultFont", 11, "bold"))  # Create a bold heading
heading_label.grid(column=0, row=0, columnspan=2, pady=10)  # Place the heading label in the grid







push_endpoint = ttk.Label(form_frame, text="Endpoint to 'New Task Handler':")  # Create a label for Name
push_endpoint.grid(column=0, row=1, sticky=tk.W)  # Place the label in the grid

push_endpoint_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
push_endpoint_entry.grid(column=1, row=1, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid


del_endpoint = ttk.Label(form_frame, text="Endpoint to 'Task Deleter':")  # Create a label for Name
del_endpoint.grid(column=0, row=2, sticky=tk.W)  # Place the label in the grid

del_endpoint_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
del_endpoint_entry.grid(column=1, row=2, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid



snooze_endpoint = ttk.Label(form_frame, text="Endpoint to 'Task Snoozer':")  # Create a label for Name
snooze_endpoint.grid(column=0, row=3, sticky=tk.W)  # Place the label in the grid

snooze_endpoint_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
snooze_endpoint_entry.grid(column=1, row=3, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
  


populate_endpoint = ttk.Label(form_frame, text="Endpoint to 'Dashboard Endpoint':")  # Create a label for Name
populate_endpoint.grid(column=0, row=4, sticky=tk.W)  # Place the label in the grid

populate_endpoint_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
populate_endpoint_entry.grid(column=1, row=4, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid


gmail_link = ttk.Label(form_frame, text="Gmail to Link:")  # Create a label for Name
gmail_link.grid(column=0, row=5, sticky=tk.W)  # Place the label in the grid

gmail_link_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
gmail_link_entry.grid(column=1, row=5, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
gmail_link_entry.insert(0, 'https://calendar.google.com/calendar/u/0/r')


gcal_link = ttk.Label(form_frame, text="Gcal to link:")  # Create a label for Name
gcal_link.grid(column=0, row=6, sticky=tk.W)  # Place the label in the grid

gcal_link_entry = ttk.Entry(form_frame, width=40)  # Create an input field for Name
gcal_link_entry.grid(column=1, row=6, padx=5, pady=5, sticky=tk.W)  # Place the input field in the grid
gcal_link_entry.insert(0, 'https://mail.google.com/mail/u/0/#inbox') 





# Create a Submit button
submit_button = ttk.Button(form_frame, text="Submit", command=submit_form2)  # Create the Submit button
submit_button.grid(column=0, row=100, columnspan=2, pady=10)  # Place the button in the grid

# Create a label to display the result
result_label = ttk.Label(form_frame, text="", foreground="#ff0000")  # Create an empty label for displaying the result
result_label.grid(column=0, row=101, columnspan=2)  # Place the label in the grid



# Adjust column and row weights for resizing
form_frame.columnconfigure(0, weight=1)
form_frame.columnconfigure(1, weight=1)
form_frame.rowconfigure(1, weight=1)
form_frame.rowconfigure(2, weight=1)

# Start the Tkinter main loop
root2.mainloop()
