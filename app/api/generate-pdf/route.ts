import { NextResponse } from "next/server"
import puppeteer from "puppeteer"

export async function GET() {
  try {
    // Create HTML content for the PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Emotional Wellbeing: Understanding Our Feelings</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          h1 { color: #007B5F; text-align: center; margin-bottom: 30px; }
          h2 { color: #333; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
          h3 { color: #555; }
          .header { text-align: center; margin-bottom: 40px; }
          .section { margin-bottom: 30px; }
          .lesson { border-left: 4px solid #007B5F; padding-left: 15px; margin-bottom: 20px; }
          .activities { margin-top: 10px; font-style: italic; }
          .worksheet { border: 1px solid #ddd; padding: 20px; margin: 20px 0; background-color: #f9f9f9; }
          .footer { text-align: center; margin-top: 50px; font-size: 12px; color: #777; }
          .page-break { page-break-after: always; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Emotional Wellbeing: Understanding Our Feelings</h1>
          <p>A complete unit of work for children aged 6-13</p>
        </div>
        
        <div class="section">
          <h2>Introduction</h2>
          <p>This comprehensive unit of work is designed to help children develop emotional intelligence, self-awareness, and healthy coping strategies. Through engaging lessons and activities, students will learn to identify, express, and manage their emotions effectively.</p>
          
          <p>The unit consists of six lessons, each focusing on different aspects of emotional wellbeing. Each lesson includes learning objectives, key vocabulary, warm-up activities, main activities, worksheets, and reflection questions.</p>
        </div>
        
        <div class="section">
          <h2>Unit Overview</h2>
          
          <div class="lesson">
            <h3>Lesson 1: Understanding Our Emotions</h3>
            <p>Introduction to basic emotions, how to recognise them, and why all feelings are important.</p>
            <div class="activities">
              <strong>Key Activities:</strong> Emotion Charades, Feelings Journal, Emotion Wheel Exploration
            </div>
          </div>
          
          <div class="lesson">
            <h3>Lesson 2: Expressing Our Feelings</h3>
            <p>Healthy ways to express different emotions and communicate our feelings to others.</p>
            <div class="activities">
              <strong>Key Activities:</strong> "I Feel" Statements Practice, Emotion Art Project, Role-Playing Scenarios
            </div>
          </div>
          
          <div class="lesson">
            <h3>Lesson 3: Managing Strong Emotions</h3>
            <p>Strategies for coping with intense feelings like anger, worry, and sadness.</p>
            <div class="activities">
              <strong>Key Activities:</strong> Calm Down Techniques, Worry Tree Craft, Breathing Exercises
            </div>
          </div>
          
          <div class="lesson">
            <h3>Lesson 4: Empathy and Understanding Others</h3>
            <p>Recognising others' feelings and developing compassion and empathy.</p>
            <div class="activities">
              <strong>Key Activities:</strong> Perspective-Taking Stories, Kindness Tree Project, Empathy Scenarios
            </div>
          </div>
          
          <div class="lesson">
            <h3>Lesson 5: Building Emotional Resilience</h3>
            <p>Developing skills to bounce back from difficult situations and manage challenges.</p>
            <div class="activities">
              <strong>Key Activities:</strong> Growth Mindset Exercises, Resilience Stories, Problem-Solving Practice
            </div>
          </div>
          
          <div class="lesson">
            <h3>Lesson 6: Celebrating Our Emotional Growth</h3>
            <p>Reflecting on learning, setting emotional wellbeing goals, and celebrating progress.</p>
            <div class="activities">
              <strong>Key Activities:</strong> Feelings Time Capsule, Emotional Wellbeing Pledge, Celebration Circle
            </div>
          </div>
        </div>
        
        <div class="page-break"></div>
        
        <div class="section">
          <h2>Lesson 1: Understanding Our Emotions</h2>
          
          <h3>Learning Objectives:</h3>
          <ul>
            <li>Identify and name basic emotions</li>
            <li>Recognise how emotions feel in our bodies</li>
            <li>Understand that all emotions are important and valid</li>
          </ul>
          
          <h3>Key Vocabulary:</h3>
          <p>Emotions, Feelings, Happy, Sad, Angry, Scared, Surprised, Disgusted</p>
          
          <h3>Warm-up Activity (10 minutes):</h3>
          <p>Show students different emotion faces and ask them to identify the emotions. Discuss how they knew what emotion was being shown.</p>
          
          <h3>Main Activity (20 minutes):</h3>
          <p><strong>Emotion Charades:</strong></p>
          <ol>
            <li>Divide students into small groups</li>
            <li>Give each group emotion cards</li>
            <li>Students take turns acting out emotions while others guess</li>
            <li>After guessing, discuss: "How did you know it was that emotion?"</li>
          </ol>
          
          <div class="worksheet">
            <h3>Worksheet: My Emotions Detective Sheet</h3>
            <p>Instructions: Draw faces showing different emotions and colour where you feel these emotions in your body.</p>
            
            <p><strong>Part 1:</strong> Draw a face showing each emotion: happy, sad, angry, scared</p>
            
            <p><strong>Part 2:</strong> Colour the areas on the body outline where you feel each emotion:</p>
            <ul>
              <li>Happy - Where do you feel happiness in your body?</li>
              <li>Sad - Where do you feel sadness in your body?</li>
              <li>Angry - Where do you feel anger in your body?</li>
              <li>Scared - Where do you feel fear in your body?</li>
            </ul>
          </div>
          
          <h3>Reflection (5 minutes):</h3>
          <ul>
            <li>What new emotions did you learn about today?</li>
            <li>Why is it important to understand our emotions?</li>
            <li>How can understanding emotions help us get along with others?</li>
          </ul>
        </div>
        
        <div class="page-break"></div>
        
        <div class="section">
          <h2>Lesson 2: Expressing Our Feelings</h2>
          
          <h3>Learning Objectives:</h3>
          <ul>
            <li>Learn healthy ways to express emotions</li>
            <li>Practice using "I feel" statements</li>
            <li>Understand the difference between expressing and acting out emotions</li>
          </ul>
          
          <h3>Key Vocabulary:</h3>
          <p>Express, Communicate, "I feel" statements, Healthy expression</p>
          
          <h3>Warm-up Activity (10 minutes):</h3>
          <p>Show pictures of different scenarios and ask students to identify how the people might be feeling and how they are expressing those feelings.</p>
          
          <h3>Main Activity (20 minutes):</h3>
          <p><strong>"I Feel" Statements Practice:</strong></p>
          <ol>
            <li>Teach the format: "I feel [emotion] when [situation] because [reason]"</li>
            <li>Model examples: "I feel happy when we play together because it's fun"</li>
            <li>Students practise with partners using scenario cards</li>
            <li>Share examples with the class</li>
          </ol>
          
          <div class="worksheet">
            <h3>Worksheet: "I Feel" Statements</h3>
            <p>Instructions: Complete the sentences with your own feelings.</p>
            
            <p>1. I feel _____________ when _____________ because _____________.</p>
            <p>2. I feel _____________ when _____________ because _____________.</p>
            <p>3. I feel _____________ when _____________ because _____________.</p>
            <p>4. I feel _____________ when _____________ because _____________.</p>
            
            <p><strong>Draw a picture:</strong> Show a time when you had a strong feeling and expressed it in a healthy way.</p>
          </div>
          
          <h3>Reflection (5 minutes):</h3>
          <ul>
            <li>Why is it important to express our feelings?</li>
            <li>How can "I feel" statements help us communicate better?</li>
            <li>What are some healthy ways to express strong feelings?</li>
          </ul>
        </div>
        
        <div class="footer">
          <p>© PALM Learning - Emotional Wellbeing Unit</p>
        </div>
      </body>
      </html>
    `

    // Launch a browser instance
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    // Set content and generate PDF
    await page.setContent(htmlContent)
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
    })

    await browser.close()

    // Return the PDF as a response
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="emotional-wellbeing-unit.pdf"',
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
