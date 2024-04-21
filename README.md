
## What it does
ParkinDetectAI prompts users to submit a drawing - either a spiral or wave - via camera. Utilizing past data, the API analyzes the drawing to determine the presence of Parkinson's disease, offering swift and accurate detection for proactive health management. Through innovative technology, it sets a new standard in early diagnosis, ultimately transforming lives.

## How we built it
We started by searching for the best-performing machine learning model, which ended up being XGBoost, and finetuning and perfecting it since it is the most vital part of this project, later on, we ended up creating two models: one for spirals and another for waves since the two drawing types were too different from each other. We used Kaggle for the dataset, Scikit-Learn and XGBoost for model testing, OpenCV for image processing, and Pickle for model persistence. Once we were pleased with the results, we began developing the interactive website using React Native, ExpoFile Picker, TensorFlow, and the accompanying Django API, which opens the pre-trained model saved with Pickle for a swifter diagnosis and allows the user to specify the type of drawing they are sending.

## Challenges we ran into
While developing our waves model, it initially had a significantly lower accuracy (77%) than our spirals model, but after tweaking the data preprocessing and adjusting model parameters, we were able to optimize our waves model to a 93 percent validation accuracy.

## Accomplishments that we're proud of
- Our AI model's ability to achieve an average 90% accuracy rate in determining whether the user of the application has Parkinson's disease.
