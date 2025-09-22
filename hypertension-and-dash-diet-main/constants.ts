
import { SlideData, ContentType } from './types';

const slidesData: SlideData[] = [
    {
        id: 1,
        title: "Hypertention - Dr/Eman Kamal",
        content: [
            { type: ContentType.PARAGRAPH, data: "أهلاً بيكم يا أبطال، ومساء الفل على عيونكم!\nالنهاردة جايين نفهم واحد من أخطر وأشرس الأمراض اللي بنسمع عنها كتير، بس يمكن منعرفش تفاصيله كويس: Hypertension.\nيعني إيه Hypertension؟ هو ضغط الدم المرتفع.\nالمحاضرة دي مقدمة لينا من الدكتورة إيمان كمال، وهتكون رحلة ممتعة نفهم فيها كل كبيرة وصغيرة عن المرض ده. يلا بينا نبدأ حكايتنا!" },
        ],
    },
    {
        id: 2,
        title: "HYPERTENSION A SILENT KILLER",
        content: [
            { type: ContentType.IMAGE_CAPTION, data: "قلب وسماعة دكتور... وتحتهم مكتوب كلام يخلي الواحد يقف يفكر: HYPERTENSION - A SILENT KILLER." },
            { type: ContentType.PARAGRAPH, data: "A SILENT KILLER يعني \"القاتل الصامت\".\nيا ترى ليه سموه كده؟ تخيل إن في حرامي دخل بيتك، بس ده حرامي ذكي أوي، مبيعملش أي صوت، بيسرق ويدمر وهو ماشي من غير ما تحس بيه! ده بالظبط اللي بيعمله ضغط الدم المرتفع. ممكن يكون موجود في جسمك سنين طويلة، عمال يشتغل ويدمر في الأعضاء الحيوية بهدوء وبدون أي أعراض واضحة تحس بيها. وفجأة، تيجي تصحى في يوم تلاقي مصيبة كبيرة حصلت. عشان كده، معرفتنا بيه ووعينا بخطورته دي أول وأهم خطوة عشان نحمي نفسنا من \"الحرامي\" الصامت ده. يلا نفهمه كويس عشان نعرف نصده!" },
        ],
    },
    {
        id: 3,
        title: "Definition of hypertension",
        content: [
            { type: ContentType.PARAGRAPH, data: "طيب، هو إيه بقى Hypertension ده أصلاً؟ بالبلدي كده، هو إن ضغط الدم بتاعك يفضل عالي باستمرار. والسلايد بتقول تعريف دقيق أوي: \"a consistent constant elevation of systolic or diastolic pressure above 140/90 mm Hg.\"" },
            { type: ContentType.SUBTITLE, data: "تعالوا نفصص التعريف ده سوا، كأننا بنفك شفرة:" },
            { type: ContentType.KEY_VALUE_LIST, data: { "ضغط الدم (Blood Pressure)": "ده عامل زي قوة الماية وهي ماشية جوه خراطيم البيت، اللي هي عندنا في جسمنا الشرايين. لو الماية ماشية بقوة طبيعية، كل حاجة تمام ومفيش قلق.\nلكن لو الضغط زاد أوي في الخراطيم دي، ممكن الخراطيم تتأثر أو حتى تنفجر! ده بالظبط اللي بيحصل لشراييننا.", "إيه الرقمين دول؟": "ضغط الدم بنقيسه برقمين:", "Systolic pressure (الرقم اللي فوق)": "ده الضغط اللي بيحصل لما القلب بتاعك ينقبض ويضخ الدم لكل حتة في جسمك. تخيل القلب بيعصر نفسه عشان يزق الدم بقوة، فدي أقوى لحظة ضغط بتحصل.", "Diastolic pressure (الرقم اللي تحت)": "وده الضغط اللي بيحصل لما القلب يريح وينبسط عشان يتملي دم تاني ويستعد للضخة اللي بعدها. في اللحظة دي، بيكون الضغط أقل.", "140/90 mm Hg": "الرقمين دول هما الخط الأحمر بتاعنا. لو ضغطك فضل أعلى من 140 على 90 مليمتر زئبق (ودي وحدة قياس الضغط) بشكل مستمر، يبقى أنت كده في منطقة الخطر، وعندك ضغط دم مرتفع.\nيعني مش مرة واحدة قيست ولقيته عالي يبقى كده خلاص، لا، لازم يكون ده الوضع الثابت بتاعك بعد كذا قياس في أوقات مختلفة." } },
        ],
    },
    {
        id: 4,
        title: "High blood pressure (hypertension)",
        content: [
            { type: ContentType.PARAGRAPH, data: "الصورة دي بقى هتورينا بالظبط إيه اللي بيحصل جوه شرايينا لما يكون عندنا ضغط دم مرتفع (Hypertension). كأننا بنشوفها بكاميرا مكبرة!"},
            { type: ContentType.KEY_VALUE_LIST, data: {
                "على الشمال، شريان Healthy (سليم ومعافى):": "الفتحة بتاعته من جوه Normal interior diameter يعني قطرها الداخلي طبيعي وواسع.\nالجدار بتاعه سمكه طبيعي جداً.\nكرات الدم الحمراء (الدم يعني) ماشية جواه بكل سلاسة وسهولة، كأنها عربيات ماشية على طريق سريع واسع ومفتوح، مفيش أي زحمة.",
                "أما على اليمين، شريان عنده Hypertension (ضغط دم مرتفع):": "أول حاجة، الجدار بتاعه بقى Increased wall thickness يعني سميك بزيادة! كأن طريق الأسفلت بقى تخين أوي.\nوالأخطر بقى، إن الفتحة بتاعته ضاقت وبقت Reduced Interior diameter أو Narrow interior diameter يعني قطرها الداخلي بقى أضيق بكتير.\nتخيلوا نفس الطريق السريع، بس فجأة بقى ضيق جداً والأسفلت نفسه بقى تخين. أكيد العربيات هتمشي بصعوبة وضغط كبير أوي عشان تعدي! ده بالظبط اللي بيحصل للدم، بيضطر يمشي بضغط أكبر بكتير عشان يعدي في الشرايين الضيقة دي، والضغط الزيادة ده هو اللي بيضر أعضاء جسمك على المدى الطويل."
            }},
        ]
    },
    {
        id: 5,
        title: "Risk factors for high blood pressure",
        content: [
            { type: ContentType.PARAGRAPH, data: "طيب، إيه الحاجات اللي ممكن تخلي الواحد عرضه إنه يجيله High blood pressure (ضغط دم مرتفع)؟ الموضوع مش بالحظ، فيه عوامل كتير بتلعب دور، وقسمناها لنوعين عشان نفهمها كويس: Modifiable (عوامل نقدر نتحكم فيها ونغيرها) وعوامل تانية للأسف Non-modifiable (مفيش في إيدينا نغيرها)."},
            { type: ContentType.SUBTITLE, data: "Modifiable (عوامل نقدر نتحكم فيها ونلعب فيها):" },
            { type: ContentType.LIST, data: [
                "Excess dietary salt (الملح الزيادة في الأكل): ده عدو ضغط الدم الأول! كل ما بتاكل ملح أكتر، جسمك بيحبس ماية أكتر، وده بيزود حجم الدم جوه الشرايين، وبالتالي الضغط بيعلى.",
                "Poor diet and obesity (الأكل غير الصحي والسمنة): الأكل اللي كله دهون وسكريات بيودينا للسمنة، والسمنة دي كنز للمشاكل الصحية، ومنها ارتفاع الضغط.",
                "Excess alcohol consumption (شرب الكحوليات بكميات كبيرة): الكحول بيضر الأوعية الدموية وبيخلي الضغط يعلى.",
                "Lack of physical activity (قلة الحركة والنشاط البدني): اللي مبيتمرنش أو مبيتحركش كتير، قلبه بيكون أضعف، وشرايينه أقل مرونة، وده بيخليه عرضه للضغط.",
                "Deprivation and socio-economic status (الحرمان والوضع الاجتماعي والاقتصادي): أحياناً الضغوط النفسية والمعيشية الصعبة، وقلة الرعاية الصحية، وسوء التغذية، ممكن تزود الضغط.",
                "Mental health and stress (الصحة النفسية والتوتر): التوتر المستمر والقلق بيخلوا الجسم يفرز هرمونات بتعلي الضغط بشكل مؤقت، ولو التوتر ده فضل موجود، ممكن الضغط يفضل عالي."
            ]},
            { type: ContentType.SUBTITLE, data: "Non-modifiable (عوامل خارجة عن إرادتنا):" },
             { type: ContentType.LIST, data: [
                "Age (السن): كل ما بنكبر، شراييننا بتفقد مرونتها وبتتصلب، وده بيخلي الضغط يعلى طبيعي.",
                "Ethnicity (العرق): بعض الأعراق عندها استعداد وراثي للضغط أكتر من غيرها، زي مثلاً أصحاب البشرة السمراء.",
                "Genetics (العوامل الوراثية): لو في تاريخ مرضي لضغط الدم في عيلتك (زي الأب، الأم، أو الإخوة)، يبقى احتمالية إصابتك بيه بتكون أكبر.",
                "Gender (النوع/الجنس): في أوقات معينة في العمر، ممكن يكون فيه فروقات بين الرجال والسيدات في احتمالية الإصابة بالضغط، زي بعد سن اليأس عند السيدات."
            ]},
        ],
    },
     {
        id: 6,
        title: "Genetic Risk Factors",
        content: [
            { type: ContentType.PARAGRAPH, data: "الصورة دي بتلخص لنا أهم 3 عوامل وراثية أو طبيعية مش بنتحكم فيها، وهما اللي بيحددوا جزء من قدرنا الصحي:"},
            { type: ContentType.KEY_VALUE_LIST, data: {
                "FAMILY HISTORY (التاريخ العائلي):": "دي أول حاجة لازم نسأل عنها. لو في ناس في عيلتك القريبة (زي جدك وجدتك أو والدك ووالدتك) عندهم ضغط، خلي بالك أكتر. ده بيزود احتمالية إصابتك، لكن مش بيضمنها.",
                "AGE (السن):": "مقولة \"لكل أجل كتاب\" هنا ممكن نقولها \"لكل عمر ضغطه\". كل ما بنكبر، الشرايين بتاعتنا بتتأثر، وده جزء طبيعي من تقدم العمر.",
                "GENDER (الجنس):": "اختلافاتنا البيولوجية كرجال وسيدات بتخلي فيه فروق في الاستعداد لبعض الأمراض، ومنها ضغط الدم."
            }},
        ]
    },
    {
        id: 7,
        title: "TYPES OF HYPERTENSION",
        content: [
            { type: ContentType.PARAGRAPH, data: "هو الضغط العالي أنواع يا دكتور؟ أيوه، نوعين رئيسيين، وكل نوع ليه حكايته وظروفه الخاصة:"},
            { type: ContentType.KEY_VALUE_LIST, data: {
                "PRIMARY (الأولي):": "ده ليه اسم دلع كده في الطب وهو \"essential hypertension\".\nالغريب في النوع ده إنه في معظم الحالات \"the causes of this type is not known\"، يعني أسبابه مش معروفة!\nوالأدهى بقى، إن \"majority of people with this type feel no different from those who have normal blood pressure.\" يعني أغلب الناس اللي عندها النوع ده مبيحسوش بأي فرق خالص بينها وبين الناس اللي ضغطها طبيعي. عشان كده هو \"القاتل الصامت\" بجد، لأنه بيتسلل ويدمر من غير ما تحس بيه.",
                "SECONDARY (الثانوي):": "النوع ده صريح وواضح، وبيجي لما يكون \"high blood pressure is as a result of other medical problems (like kidney or liver problem) or medication.\" يعني ارتفاع الضغط هنا بيكون نتيجة لمشكلة صحية تانية موجودة أصلاً في الجسم، أو بسبب الآثار الجانبية لبعض الأدوية اللي الشخص بياخدها.\nالمشاكل دي ممكن تكون في:\n- Kidney problem (مشكلة في الكلى)\n- Liver problem (مشكلة في الكبد)\n- أو بسبب Medication (أدوية معينة)\nالخبر الحلو في النوع ده إن لو عالجنا السبب الأصلي، ممكن الضغط يرجع طبيعي."
            }},
        ]
    },
    {
        id: 8,
        title: "Main complications of persistent HIGH BLOOD PRESSURE",
        content: [
            { type: ContentType.PARAGRAPH, data: "زي ما اتفقنا، الضغط العالي ده مش بيهزر ولا بيرحم! بيسيب خراب وراه في أعضاء الجسم الحيوية. دي أهم المضاعفات اللي ممكن تحصل:"},
            { type: ContentType.KEY_VALUE_LIST, data: {
                "BRAIN": ["Stroke (سكتة دماغية)", "Confusion (تشوش)", "Headache (صداع)", "Convulsion (تشنجات)"],
                "RETINA OF EYE": ["Hypertensive retinopathy (اعتلال الشبكية)"],
                "HEART": ["Heart attack (أزمة قلبية)", "Heart failure (فشل القلب)"],
                "BLOOD": ["Elevated sugar levels (ارتفاع مستويات السكر)"],
                "KIDNEYS": ["Chronic renal failure (الفشل الكلوي المزمن)"]
            }},
        ]
    },
    {
        id: 9,
        title: "NUTRITIONAL ASSESSMENT",
        content: [
            { type: ContentType.PARAGRAPH, data: "بعد كل الكلام اللي يخوف ده، أكيد في حل! وأول وأهم خطوة في مواجهة Hypertension (ضغط الدم المرتفع) هي NUTRITIONAL ASSESSMENT، يعني \"التقييم الغذائي\".\nده عامل زي ما بتجيب مهندس ديكور لبيتك عشان يعرف كل ركن فيه وإيه اللي محتاجه عشان يبقى أحسن. إحنا هنا بنجيب دكتور تغذية شاطر عشان يعرف الشخص ده بياكل إيه وبيشرب إيه بالظبط، وإيه عاداته الغذائية، عشان نقدر نساعده يغيرها للأحسن. التقييم الغذائي ده هو المفتاح الرئيسي للوقاية والعلاج." },
        ],
    },
    {
        id: 10,
        title: "Methods of assessments",
        content: [
            { type: ContentType.PARAGRAPH, data: "عشان نعمل تقييم غذائي صح ومظبوط، بنستخدم طرق علمية كده، متلخصة في \"ABCD Techniques\" (كأنها أبجدية التقييم):" },
            { type: ContentType.KEY_VALUE_LIST, data: {
                "A = Anthropometric measurements (القياسات الجسمانية):": "دي بنقيس فيها حاجات زي Weight (الوزن)، و Height (الطول)، وبعدين بنحسب منهم BMI (Body Mass Index) يعني \"مؤشر كتلة الجسم\".",
                "B = Biochemical assessment (التقييم الكيميائي الحيوي):": "هنا بنخش على التحاليل! بنشوف مستوى Cholesterol (الكوليسترول) و Blood glucose (السكر في الدم).",
                "C = Clinical assessment (التقييم الإكلينيكي):": "ده الشغل اللي بيعمله الدكتور بنفسه، زي الفحص البدني (Physical exam) عشان يشوف فيه أي Symptoms (أعراض) ظاهرة على الشخص.",
                "D = Dietary assessment (التقييم الغذائي):": "وهنا بقى الدكتور بيقعد معاك يسألك عن كل حاجة أكلتها وشربتها في يوم كامل أو في أسبوع، عشان يرسم صورة واضحة لنظامك الغذائي."
            }},
        ],
    },
    {
        id: 11,
        title: "Hypertension - Nutrition Therapy",
        content: [
            { type: ContentType.PARAGRAPH, data: "خلاص عرفنا العدو وعرفنا إزاي بنقيّم حالته. دلوقتي جه وقت العلاج! وهنا العلاج مش أدوية بس، لأ ده فيه سحر اسمه Nutrition Therapy، يعني \"العلاج بالغذاء\". وجزء كبير من العلاج ده بيكون عن طريق خطة عظيمة اسمها DASH، ودي اختصار لـ Dietary Approaches to Stop Hypertension." },
            { type: ContentType.SUBTITLE, data: "DASH - Dietary Approaches to Stop Hypertension:" },
            { type: ContentType.LIST, data: [
                "Decrease sodium, saturated fat, alcohol: بنقلل تلات حاجات أساسية: الملح، الدهون المشبعة، والكحول.",
                "Increase calcium, potassium, fiber: بنزود أبطالنا الخارقين في الأكل: الكالسيوم، البوتاسيوم، والألياف."
            ]},
            { type: ContentType.SUBTITLE, data: "Lifestyle modifications (تعديلات في أسلوب حياتنا):" },
            { type: ContentType.LIST, data: [
                "Smoking (التدخين): لازم يتوقف فوراً.",
                "Exercise (التمارين الرياضية): الحركة بتقوي القلب وبتخلي الشرايين مرنة.",
                "Weight loss (نزول الوزن): الوزن الزائد عبء على القلب والشرايين."
            ]},
        ],
    },
    {
        id: 12,
        title: "TABLE 15.3 - Effects of Lifestyle Modification to Manage Hypertension",
        content: [
            { type: ContentType.PARAGRAPH, data: "الجدول ده زي الخريطة اللي بتورينا كل خطوة في تغيير أسلوب حياتنا، وإيه تأثيرها القوي على تخفيض ضغط الدم. كل تغيير بسيط ممكن يعمل فرق كبير في صحتنا!"},
            { type: ContentType.TABLE, data: {
                headers: ["Recommendation (التوصية)", "Average Systolic BP Reduction (متوسط تخفيض الضغط الانقباضي)"],
                rows: [
                    ["Weight reduction to maintain a BMI 18.5-24.9<br>(إنك تخفض وزنك عشان تحافظ على مؤشر كتلة الجسم بتاعك بين 18.5 و 24.9)", "5-20 mmHg/10 kg<br>(يعني كل 10 كيلو جرام بتنزلهم من وزنك، ممكن ضغطك يقل من 5 لـ 20 مليمتر زئبق)"],
                    ["Diet rich in fruits, vegetables, & low-fat dairy products with reduced saturated & total fat — the DASH Eating Plan<br>(إنك تتبع نظام غذائي غني بالفواكه والخضروات ومنتجات الألبان قليلة الدسم، مع تقليل الدهون المشبعة والدهون كلها - وده هو نظام DASH الغذائي)", "8-14 mmHg"],
                    ["Intake of not > 100 mEq/day (2.4 g sodium or 6 g sodium chloride)<br>(إنك تاكل أقل من 100 ملي مكافئ صوديوم في اليوم، وده بيعادل حوالي 2.4 جرام صوديوم أو 6 جرام ملح طعام)", "2-8 mmHg"],
                    ["Aerobic activity, suchs as brisk walking for 30 min/day, most days of the week<br>(إنك تتمرن تمارين هوائية، زي المشي السريع لمدة 30 دقيقة في اليوم، معظم أيام الأسبوع)", "4-9 mmHg"],
                    ["Most men: Not > 2 drinks/day, Women & lighter weight men: Not > 1 drink/day<br>(معظم الرجال: مش أكتر من مشروبين في اليوم، والستات والرجالة اللي وزنهم أقل: مش أكتر من مشروب واحد في اليوم)", "2-4 mmHg"]
                ]
            }},
        ],
    },
    {
        id: 13,
        title: "DASH diet",
        content: [
            { type: ContentType.IMAGE_CAPTION, data: "الصورة دي بتلخص لينا جمال وبساطة DASH diet! طبق مليان ألوان من الفاكهة والخضروات، وخبز كامل الحبة، وشوفان، وبروتين صحي.\nده مش دايت حرمان يا جماعة، ده دايت استمتاع بكل حاجة مفيدة لجسمك، وبتساعدك تتحكم في ضغطك. ده الأكل اللي قلبك هيحبه وهيقولك \"شكراً\" عليه!" },
        ],
    },
    {
        id: 14,
        title: "DEFINITION",
        content: [
            { type: ContentType.PARAGRAPH, data: "نقول تاني، إيه هو الـ DEFINITION (التعريف) بتاع الـ DASH diet بالظبط؟\nالـ DASH ده اختصار لـ Dietary Approaches to Stop Hypertension.\nيعني هو نظام غذائي مُصمم خصيصًا عشان يوقف أو يتحكم في ضغط الدم المرتفع." },
            { type: ContentType.SUBTITLE, data: "The DASH diet is rich in fruits, vegetables, whole grains, and low-fat dairy foods; includes meat, fish, poultry, nuts and beans; and is limited in sugar-sweetened foods and beverages, red meat, and added fats." },
            { type: ContentType.PARAGRAPH, data: "الدايت ده مش كلام على ورق وخلاص، ده نظام غذائي موثوق فيه ومدعوم من أكبر جهة صحية في أمريكا، اللي هي معهد القلب والرئة والدم الوطني، عشان نمنع ونعالج ضغط الدم العالي." },
        ],
    },
    {
        id: 15,
        title: "Following the DASH Eating Plan",
        content: [
            { type: ContentType.PARAGRAPH, data: "طيب، بما إن ده نظام غذائي متكامل ومدروس، أكيد فيه تفاصيل للكميات عشان نتبعه صح. الجدول ده بيورينا المجموعات الغذائية، وعدد الحصص اليومية، ومقاسات الحصص عشان نمشي على DASH Eating Plan زي الكتاب ما بيقول بالظبط:"},
            { type: ContentType.TABLE, data: {
                headers: ["Food Group (المجموعة الغذائية)", "Daily Servings (الحصص اليومية)", "Serving Sizes (مقاس الحصة الواحدة)"],
                rows: [
                    ["Grains (الحبوب)", "6-8", "1 slice bread (شريحة عيش), 1 oz dry cereal (30 جرام حبوب إفطار جافة), 1/2 cup cooked rice, pasta, or cereal (نص كوب رز أو مكرونة مطبوخة)"],
                    ["Vegetables (الخضروات)", "4-5", "1 cup raw leafy vegetable (كوب خضار ورقي ني), 1/2 cup cut-up raw or cooked vegetable (نص كوب خضار متقطع ني أو مطبوخ), 1/2 cup vegetable juice (نص كوب عصير خضار)"],
                    ["Fruits (الفواكه)", "4-5", "1 medium fruit (فاكهة متوسطة), 1/4 cup dried fruit (ربع كوب فاكهة مجففة), 1/2 cup fresh, frozen, or canned fruit (نص كوب فاكهة طازجة، مجمدة، أو معلبة), 1/2 cup fruit juice (نص كوب عصير فاكهة)"],
                    ["Fat-free or low-fat milk and milk products (منتجات الألبان قليلة أو خالية الدسم)", "2-3", "1 cup milk or yogurt (كوب لبن أو زبادي), 1 1/2 oz cheese (حوالي 40 جرام جبنة)"],
                    ["Lean meats, poultry, and fish (اللحوم قليلة الدهن، الدواجن، والسمك)", "6 or less", "1 oz cooked meats, poultry, or fish (30 جرام لحم مطبوخ، دجاج، أو سمك), 1 egg (بيضة واحدة)"],
                    ["Nuts, seeds, and legumes (المكسرات، البذور، والبقوليات)", "4-5 per week", "1/3 cup or 1 1/2 oz nuts (ثلث كوب مكسرات), 2 Tbsp peanut butter (2 معلقة كبيرة زبدة فول سوداني), 2 Tbsp or 1/2 oz seeds (2 معلقة كبيرة بذور), 1/2 cup cooked legumes (نص كوب بقوليات مطبوخة)"],
                    ["Fats and oils (الدهون والزيوت)", "2-3", "1 tsp soft margarine (معلقة صغيرة مارجرين طري), 1 tsp vegetable oil (معلقة صغيرة زيت نباتي), 1 Tbsp mayonnaise (معلقة كبيرة مايونيز), 2 Tbsp salad dressing (2 معلقة كبيرة تتبيلة سلطة)"],
                    ["Sweets and added sugars (الحلويات والسكريات المضافة)", "5 or less per week", "1 Tbsp sugar (معلقة كبيرة سكر), 1 Tbsp jelly or jam (معلقة كبيرة مربى), 1/2 cup sorbet, gelatin (نص كوب شربات/جيلاتين), 1 cup lemonade (كوب لموناضة)"]
                ]
            }},
        ],
    },
    {
        id: 16,
        title: "DASH DIET FOOD CHART",
        content: [
            { type: ContentType.FOOD_CHART, data: {
                enjoy: {
                    category: "ENJOY (استمتع بيه بكميات مناسبة)",
                    items: [
                        "FRUITS (فواكه):<br>Berries, apples, oranges, bananas, pears, kiwi, melons",
                        "VEGETABLES (خضروات):<br>Leafy greens (spinach, kale, Swiss chard), broccoli, carrots, bell peppers, tomatoes, cucumbers",
                        "WHOLE GRAINS (حبوب كاملة):<br>Brown rice, quinoa, oats, barley, whole wheat bread, whole grain pasta, whole grain cereals",
                        "LEAN PROTEIN SOURCES (مصادر البروتين الخالي من الدهون):<br>Skinless poultry (chicken, turkey), fish (salmon, trout, tuna), lean cuts of beef"
                    ]
                },
                avoid: {
                    category: "AVOID (ابعد عنه أو قلل منه جداً)",
                    items: [
                        "PROCESSED FOODS (الأطعمة المصنعة):<br>Fast food, frozen meals, packaged snacks, processed meats (hot dogs, bacon, sausage), canned soups with high sodium content",
                        "HIGH-SODIUM FOODS (الأطعمة الغنية بالصوديوم):<br>Salted snacks (chips, pretzels), cured meats, pickles, canned vegetables with added salt, sauces",
                        "HIGH-SODIUM CONDIMENTS (التوابل والصلصات الغنية بالصوديوم):<br>Soy sauce, teriyaki sauce, ketchup",
                        "SUGARY BEVERAGES (المشروبات السكرية):<br>Soda, sweetened fruit juices, energy drinks, sugary coffee drinks"
                    ]
                }
            }}
        ]
    },
    {
        id: 17,
        title: "(Example daily meal plan)",
        content: [
            { type: ContentType.PARAGRAPH, data: "عشان محدش يقول \"مش عارف أعمل إيه\"، ده مثال ليوم أكل كامل متكامل على طريقة الـ DASH diet. ده مش حرمان، ده تنظيم واستبدال ذكي للأكل عشان صحتك تبقى أحسن!" },
            { type: ContentType.MEAL_PLAN, data: {
                meals: [
                    { name: "Breakfast (الفطار)", items: ["1/2 cup instant oatmeal", "1 mini whole wheat bagel with 1 Tbsp peanut butter", "1 medium banana", "1 cup low-fat milk"] },
                    { name: "Lunch (الغداء)", items: ["chicken breast sandwich (3 oz chicken, 2 slices whole wheat bread, 1 slice reduced fat cheddar, lettuce, tomato, 1 Tbsp low-fat mayo)", "1 cup cantaloupe chunks", "1 cup apple juice"] },
                    { name: "Dinner (العشاء)", items: ["1 cup spaghetti with 3/4 cup vegetarian sauce*", "3 Tbsp Parmesan cheese", "spinach salad (1 cup spinach, 1/4 cup carrots, 1/4 cup mushrooms, 1 Tbsp vinaigrette*)", "1/2 cup corn", "1/2 cup canned pears"] },
                    { name: "Snacks (سناكس / وجبات خفيفة)", items: ["1/3 cup almonds, unsalted", "1/4 cup dried apricots", "1 cup fruit yogurt, fat-free, no sugar added"] }
                ]
            }}
        ],
    },
    {
        id: 18,
        title: "DASH diet shopping list",
        content: [
            { type: ContentType.PARAGRAPH, data: "عشان تلتزم بـ DASH diet صح ومتقعدش تحتار في السوبر ماركت، لازم تعرف إيه اللي تحطه في عربية التسوق بتاعتك! دي قائمة هتسهل لك الدنيا وتخليك عارف إيه المطلوب بالظبط:" },
            { type: ContentType.SHOPPING_LIST, data: {
                "Fruits (فواكه)": "Apple, Melon, Apricots, Nectarines, Avocado, Oranges, Bananas, Papaya, Berries, Peaches, Cherries, Pears, Dates, Pineapple",
                "Herbs and spices (أعشاب وبهارات)": "Basil, bay leaves, cumin, coriander, mint, parsley, oregano, rosemary, paprika, sage, sumac, turmeric",
                "Vegetables (خضروات)": "Asparagus, Artichokes, Aubergines, Beetroot, Broccoli, Cabbage (all types), Carrots, Cauliflower, Courgettes, Cucumber, Garlic",
                "Beans and legumes (بقوليات)": "Black beans, Butter beans, Cannellini beans, Chickpeas, Kidney beans, Lentils",
                "Grains (حبوب)": "Amaranth, barley, breads (whole grain or sourdough), buckwheat, bulgur wheat, freekeh, low fat granola, pasta/rice (wholemeal)",
                "Fats (دهون)": "Extra virgin olive oil, Sesame oil",
                "Dairy and eggs (ألبان وبيض)": "Goat cheese, eggs, feta cheese, milk (low fat), mozzarella (low fat), parmesan cheese, ricotta",
                "Meat, fish, plant protein (لحوم، أسماك، بروتين نباتي)": "Chicken, duck, lamb, lean beef, oily fish, prawns, white fish, tuna, wild salmon, Tofu, tempeh"
            }}
        ],
    },
    {
        id: 19,
        title: "DASH diet and Sodium Intake",
        content: [
            { type: ContentType.PARAGRAPH, data: "ركزوا هنا معايا أوي! أساس الـ DASH diet كله قايم على بطل واحد ومهم جداً: Sodium (الصوديوم) اللي هو الملح.\n\"A key goal of the DASH diet is reducing how much sodium you eat, since sodium can dramatically increase blood pressure in people who are sensitive to its effects.\""},
            { type: ContentType.KEY_VALUE_LIST, data: {
                "Standard DASH diet (دايت DASH العادي):": "You can consume up to 2,300 milligrams (mg) of sodium a day.",
                "Lower sodium DASH diet (دايت DASH منخفض الصوديوم):": "You can consume up to 1,500 mg of sodium a day. It worked very well for people who already had high blood pressure, middle-aged and older adults."
            }}
        ]
    },
    { id: 20, title: "Grains (6 to 8 servings a day)", content: [{ type: ContentType.PARAGRAPH, data: "الحبوب تشمل الخبز، حبوب الإفطار، الأرز والمكرونة.\nالحصة الواحدة: شريحة خبز قمح كامل، أو 30 جرام حبوب إفطار جافة، أو نصف كوب أرز/مكرونة مطبوخة.\nركز على الحبوب الكاملة لأنها غنية بالألياف والمغذيات. ابحث عن منتجات \"100% حبوب كاملة\".\nالحبوب قليلة الدهون بطبيعتها، فتجنب إضافة الزبدة أو صلصات الكريمة والجبن." }] },
    { id: 21, title: "Vegetables (4 to 5 servings a day)", content: [{ type: ContentType.PARAGRAPH, data: "الطماطم، الجزر، البروكلي، البطاطا الحلوة، والخضروات الورقية مليئة بالألياف والفيتامينات والمعادن مثل البوتاسيوم والمغنيسيوم.\nالحصة الواحدة: كوب من الخضروات الورقية النيئة، أو نصف كوب من الخضار المقطع (نيء أو مطبوخ).\nاقرأ الملصقات على الخضروات المعلبة والمجمدة للتأكد من عدم إضافة الملح." }] },
    { id: 22, title: "Fruits (4 to 5 servings a day)", content: [{ type: ContentType.PARAGRAPH, data: "معظم الفواكه لا تحتاج إلى تحضير. مثل الخضروات، هي غنية بالألياف، البوتاسيوم والمغنيسيوم وقليلة الدهون (باستثناء الأفوكادو وجوز الهند).\nالحصة الواحدة: فاكهة متوسطة الحجم، أو نصف كوب فاكهة طازجة، مجمدة أو معلبة (بدون سكر مضاف)." }] },
    { id: 23, title: "Dairy (2 to 3 servings a day)", content: [{ type: ContentType.PARAGRAPH, data: "الحليب، الزبادي، الجبن ومنتجات الألبان الأخرى هي مصادر رئيسية للكالسيوم، فيتامين D والبروتين.\nالمفتاح هو اختيار منتجات قليلة الدسم أو خالية من الدسم لتجنب الدهون غير الصحية.\nالحصة الواحدة: كوب حليب خالي الدسم أو 1%، كوب زبادي، أو حوالي 40 جرام جبنة." }] },
    { id: 24, title: "Lean meat, poultry and fish (6 or fewer servings a day)", content: [{ type: ContentType.PARAGRAPH, data: "اللحوم مصدر غني بالبروتين، فيتامينات B، الحديد والزنك.\nولكن حتى الأنواع قليلة الدهن تحتوي على دهون وكوليسترول. قلل حصة اللحم وزد من الخضروات.\nالحصة الواحدة: 30 جرام دجاج منزوع الجلد، مأكولات بحرية أو لحم قليل الدهن، بيضة واحدة، أو 30 جرام تونة معلبة بالماء.\nأزل الجلد والدهون واطهُ بطرق صحية كالشوي أو السلق. تناول أسماكًا صحية للقلب مثل السلمون والتونة الغنية بأحماض أوميجا 3." }] },
    { id: 25, title: "Nuts, seeds and legumes (4 to 5 servings a week)", content: [{ type: ContentType.PARAGRAPH, data: "اللوز، بذور عباد الشمس، الفاصوليا، البازلاء والعدس هي مصادر جيدة للمغنيسيوم، البوتاسيوم والبروتين.\nهي أيضًا مليئة بالألياف والمواد الكيميائية النباتية التي قد تحمي من بعض أنواع السرطان وأمراض القلب.\nحصصها صغيرة وتُستهلك أسبوعيًا لأنها عالية السعرات الحرارية.\nالحصة الواحدة: ثلث كوب مكسرات، 2 ملعقة كبيرة بذور، أو نصف كوب فاصوليا/بازلاء مطبوخة." }] },
    { id: 26, title: "Fats and oils (2 to 3 servings a day)", content: [{ type: ContentType.PARAGRAPH, data: "الدهون تساعد الجسم على امتصاص الفيتامينات الأساسية ودعم جهاز المناعة. لكن الكثير منها يزيد من خطر أمراض القلب والسكري والسمنة.\nيهدف نظام DASH إلى توازن صحي من خلال توفير 30% أو أقل من السعرات الحرارية اليومية من الدهون، مع التركيز على الدهون غير المشبعة الصحية.\nالحصة الواحدة: ملعقة صغيرة مارجرين طري، ملعقة كبيرة مايونيز قليل الدسم، أو 2 ملعقة كبيرة تتبيلة سلطة خفيفة." }] },
    { id: 27, title: "Sweets (5 or fewer a week)", content: [{ type: ContentType.PARAGRAPH, data: "الحصة الواحدة: ملعقة كبيرة سكر أو مربى، نصف كوب شربات، أو كوب ليموناضة.\nعندما تتناول الحلويات، اختر تلك الخالية من الدهون أو قليلة الدسم.\nيمكن للمحليات الصناعية أن تساعد، ولكن استخدمها بحكمة. قلل من السكر المضاف لأنه لا يحتوي على قيمة غذائية." }] },
    { id: 28, title: "Alcohol and Caffeine", content: [{ type: ContentType.PARAGRAPH, data: "شرب الكثير من الكحول يمكن أن يرفع ضغط الدم.\nيوصي نظام DASH بأن يحد الرجال من الكحول إلى مشروبين أو أقل يوميًا والنساء إلى مشروب واحد أو أقل.\nمن الأفضل الاعتدال في تناول الكافيين أيضًا." }] },
    { id: 29, title: "FIBER", content: [{ type: ContentType.PARAGRAPH, data: "الحصول على الكمية اليومية الموصى بها - من 22 إلى 34 جرامًا للبالغين - يساعدك على الشعور بالشبع ويعزز الهضم الجيد.\nيوفر نظام DASH أكثر من الكمية الكافية من الألياف." }] },
    { id: 30,
        title: "MINERALS - Potassium",
        content: [
            { type: ContentType.MINERAL_INFO, data: {
                title: "Potassium (البوتاسيوم)",
                description: "كمية كافية من هذا العنصر الغذائي الهام، وفقًا للإرشادات الغذائية لعام 2010، تعاكس قدرة الملح على رفع ضغط الدم، وتقلل من فقدان العظام، وتقلل من خطر الإصابة بحصوات الكلى.",
                dailyGoal: "4,700 mg",
                challenge: "ليس من السهل الحصول على الكمية الموصى بها يوميًا من الطعام. (تحتاج إلى أكل 11 موزة في اليوم!).",
                solution: "يوفر نظام DASH حوالي 4,900 مجم، وهو ما يتجاوز التوصية الحكومية - وهو أحد الأنظمة الغذائية القليلة التي تحقق ذلك."
            }}
        ]
    },
    {
        id: 31,
        title: "Daily Nutrient Goals Used in the DASH Studies (for a 2,000-Calorie Eating Plan)",
        content: [
            { type: ContentType.NUTRIENT_GOALS, data: [
                { name: "Total fat (إجمالي الدهون)", value: "27% of calories" },
                { name: "Saturated fat (الدهون المشبعة)", value: "6% of calories" },
                { name: "Protein (البروتين)", value: "18% of calories" },
                { name: "Carbohydrate (الكربوهيدرات)", value: "55% of calories" },
                { name: "Cholesterol (الكوليسترول)", value: "150 mg" },
                { name: "Sodium (الصوديوم)", value: "2,300 mg*", footnote: "*1,500 mg was a lower goal found to be even better for lowering blood pressure." },
                { name: "Potassium (البوتاسيوم)", value: "4,700 mg" },
                { name: "Calcium (الكالسيوم)", value: "1,250 mg" },
                { name: "Magnesium (المغنيسيوم)", value: "500 mg" },
                { name: "Fiber (الألياف)", value: "30 g" }
            ] },
        ],
    },
];

export default slidesData;
