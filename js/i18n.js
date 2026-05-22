(function () {
  const STORAGE_KEY = "siteLang";
  const DEFAULT_LANG = "en";

  const dictionary = {
    ar: {
      nav_home: "الرئيسية",
      nav_sec_home: "الرئيسية",
      nav_sec_units: "الوحدات",
      nav_sec_why: "عن المشروع",
      nav_sec_gallery: "الجاليري",
      nav_sec_payment: "عن Palm Hills",
      nav_sec_register: "سجل الآن",
      nav_about: "من نحن",
      nav_privacy: "سياسة الخصوصية",
      nav_disclaimer: "اخلاء المسؤولية",
      lang_label: "EN",
      footer_copy: "جميع الحقوق محفوظة - بالم هيلز رأس الحكمة",
      footer_privacy: "سياسة الخصوصية",
      footer_disclaimer: "اخلاء المسؤولية",
      footer_about: "من نحن",
      cta_form: "احجز استشارة مجانية",
      cta_whatsapp: "تفاصيل اكثر",
      sticky_whatsapp: "واتساب",
      cta_call: "اتصال مباشر",
      whatsapp_general: "مرحباً، أنا مهتم بمشروع Hacienda Ras al Hekma Palm Hills وأرغب في معرفة التفاصيل.",

      home_kicker: "إطلاق جديد",
      home_title: "هاسيندا رأس الحكمة",
      home_subtitle: "الوجهة الأضخم على الساحل الشمالي",
      home_meta: "مقدم يبدأ من 5% - قسط يصل إلى 10 سنوات",
      hero_scroll_aria: "النزول للمحتوى",
      hero_stat_1_t: "فدان",
      hero_stat_1_v: "1,400",
      hero_stat_2_t: "واجهة بحرية",
      hero_stat_2_v: "4.8 كم",
      hero_stat_3_t: "وحدات باطلاله مائيه",
      hero_stat_3_v: "97%",
      hero_stat_4_t: "مساحات خضراء ومائية",
      hero_stat_4_v: "84%",

      units_title: "الوحدات والأسعار المتاحة",
      units_subtitle: "أسعار بداية مبدئية قابلة للتحديث حسب الطرح الرسمي. احجز أولوية المتابعة الآن.",
      units_eoi_badge: "EOI قابل للاسترداد بالكامل خلال أسبوع",
      units_cta_whatsapp: "تفاصيل أكثر",
      units_cta_eoi: "سجل EOI",
      units_card_badge: "أولوية الحجز",
      units_card_note: "تشطيب كامل + التكييفات + خزائن المطبخ",
      units_type_apartments: "شقق / ريزيدنس",
      units_type_junior_chalet: "جونيور شاليه",
      units_type_senior_chalet: "سينيور شاليه",
      units_type_twin_house: "توين هاوس",
      units_type_villas: "فيلات",
      units_eoi_title: "قيمة EOI",
      units_eoi_beach_home: "Beach Home",
      units_eoi_chalet: "Chalet",
      units_eoi_villas: "Villas",
      unit_price_from: "السعر يبدأ من",
      unit_meta_area: "المساحة",
      unit_meta_delivery: "الاستلام",
      unit_area_val: "من 110م إلى 230م",
      unit_delivery_val: "حسب الطرح",

      section_about_project_title: "لماذا هاسيندا رأس الحكمة؟",
      section_about_project_subtitle: "وجهة ساحلية فاخرة من Palm Hills في الكيلو 238.",
      section_about_chip_1: "1,400 فدان",
      section_about_chip_2: "4.8 كم واجهة بحرية",
      section_about_chip_3: "84% مسطحات خضراء ومائية",
      section_about_chip_4: "97% وحدات بإطلالة مائية",
      section_about_feature_1_t: "Masterplan by OBMI",
      section_about_feature_1_p: "تخطيط عالمي بمعايير تصميم فاخرة ومدروسة.",
      section_about_feature_2_t: "3 فنادق دولية",
      section_about_feature_2_p: "منظومة ضيافة متكاملة داخل المشروع.",
      section_about_feature_3_t: "وجهة متكاملة",
      section_about_feature_3_p: "مطار، مارينا، مدارس، مستشفيات، ومنطقة حرة.",
      section_about_feature_4_t: "وحدات كاملة التشطيب",
      section_about_feature_4_p: "تشطيب كامل مع التكييفات وخزائن المطبخ.",
      section_about_cta_eoi: "سجل EOI",

      gallery_title: "جاليري المشروع",
      gallery_subtitle: "هوية بصرية مميزة تعكس تجربة صيفية راقية.",
      gallery_1: "تصميم معماري معاصر",
      gallery_2: "مساحات خضراء وممرات مريحة",
      gallery_3: "منطقة خدمات ومرافق متكاملة",

      palm_title: "عن Palm Hills",
      palm_subtitle:
        "شركة تطوير عقاري رائدة في السوق المصري بسجل قوي في التسليم والالتزام والجودة عبر مشروعات سكنية وساحلية متميزة.",

      palm_about_title: "About Palm Hills",
      palm_about_subtitle:
        "مطور عقاري رائد بخبرة طويلة ومشروعات ناجحة في مواقع استراتيجية على مستوى الجمهورية.",
      palm_about_1_t: "خبرة أكثر من 25 سنة",
      palm_about_1_p: "تاريخ طويل في التطوير العقاري داخل السوق المصري مع سجل موثوق في التنفيذ والتسليم.",
      palm_about_2_t: "مجتمعات سكنية حية",
      palm_about_2_p: "مشروعات قائمة يسكنها العملاء منذ سنوات وتوفر جودة حياة جيدة وخدمات متكاملة.",
      palm_about_3_t: "تنوع قوي في المواقع",
      palm_about_3_p: "مشروعات في الساحل الشمالي والقاهرة الجديدة والشيخ زايد وأكتوبر لتلبية احتياجات مختلفة.",
      palm_about_4_t: "خطط سداد مرنة",
      palm_about_4_p: "أنظمة تقسيط متعددة تساعدك تختار الحل المناسب لميزانيتك وهدفك الشرائي.",
      palm_about_5_t: "مثالي للسكن والاستثمار",
      palm_about_5_p: "منتجات متنوعة تمنحك اختيار مناسب سواء كنت تبحث عن بيت للعيش أو فرصة استثمارية.",

      payment_title: "تفاصيل نظام السداد",
      payment_subtitle: "خطة مرنة تساعد العميل على اتخاذ قرار الشراء بثقة ووضوح.",
      payment_b1: "مقدم تعاقد تنافسي.",
      payment_b2: "تقسيط على سنوات متعددة.",
      payment_b3: "مرونة في اختيار الوحدة المناسبة للميزانية.",
      payment_note: "لمعرفة الخطة الحالية الدقيقة حسب نوع الوحدة، اضغط تفاصيل اكثر أو اترك بياناتك الآن.",

      form_title: "سجل بياناتك وسيتم التواصل معك",
      form_subtitle: "فريق المبيعات المباشر جاهز للرد ومساعدتك في اختيار أفضل وحدة.",
      form_name: "الاسم الكامل",
      form_phone: "رقم الهاتف (بكود الدولة)",
      form_email: "البريد الإلكتروني",
      form_unit: "نوع الوحدة",
      form_unit_placeholder: "اختر نوع الوحدة",
      unit_opt_chalet: "شاليه",
      unit_opt_townhouse: "تاون هاوس",
      unit_opt_villa: "فيلا",
      form_submit: "إرسال البيانات",
      form_privacy_note: "بالإرسال أنت توافق على سياسة الخصوصية واخلاء المسؤولية.",

      about_title: "نبذة عن مستشار المبيعات",
      about_subtitle:
        "أنا مستشار مبيعات مباشر لمشروعات Palm Hills، وهدفي هو مساعدتك على اختيار وحدة مناسبة لاحتياجك وميزانيتك بأقصى شفافية.",
      about_b1: "تواصل مباشر وسريع مع العميل المهتم.",
      about_b2: "شرح واضح لمقارنة الوحدات وخطط السداد.",
      about_b3: "متابعة كاملة من أول استفسار حتى قرار الحجز.",
      about_card_slot_title: "مكان صورة البيزنس كارد",
      about_card_slot_note: "سيتم إضافة صورة البيزنس كارد هنا لاحقًا.",
      about_contact_title: "التواصل المباشر",
      about_contact_whatsapp: "واتساب",
      about_contact_call: "اتصال",
      about_contact_email: "info@salespalmhills.com",

      privacy_title: "سياسة الخصوصية",
      privacy_intro:
        "نحن نولي أهمية كبيرة لحماية خصوصية زوار ومستخدمي هذا الموقع.",
      privacy_h2_1: "1. مقدمة",
      privacy_p1: "نحن نولي أهمية كبيرة لحماية خصوصية زوار ومستخدمي هذا الموقع. توضح هذه الصفحة كيفية جمع واستخدام وحماية المعلومات التي يتم الحصول عليها من خلال استخدامك للموقع. باستخدامك لهذا الموقع فإنك توافق على بنود سياسة الخصوصية الموضحة في هذه الصفحة.",
      privacy_h2_2: "2. المعلومات التي نقوم بجمعها",
      privacy_p2: "قد نقوم بجمع بعض المعلومات عند استخدامك للموقع أو عند ملء نماذج التسجيل، مثل الاسم، رقم الهاتف، البريد الإلكتروني، عنوان IP، بيانات الجهاز والمتصفح، وبيانات التصفح داخل الموقع.",
      privacy_h2_3: "3. كيفية استخدام المعلومات",
      privacy_p3: "قد يتم استخدام المعلومات التي يتم جمعها من أجل التواصل مع المستخدمين بخصوص الاستفسارات أو الطلبات، وتقديم معلومات عن الخدمات أو المشروعات المعروضة، وتحسين تجربة المستخدم داخل الموقع، وتحليل أداء الموقع والحملات التسويقية والإعلانية.",
      privacy_h2_4: "4. ملفات تعريف الارتباط (Cookies)",
      privacy_p4: "يستخدم هذا الموقع ملفات تعريف الارتباط (Cookies) وتقنيات التتبع المشابهة بهدف تحسين تجربة المستخدم، وتحليل حركة الزوار على الموقع، وقياس أداء الحملات التسويقية والإعلانية.",
      privacy_h2_5: "5. مشاركة المعلومات مع أطراف ثالثة",
      privacy_p5: "قد يتم مشاركة بعض المعلومات مع أطراف ثالثة موثوقة مثل شركات تحليل البيانات، أو منصات الإعلان الرقمي، أو مزودي خدمات الاستضافة، وذلك بالقدر اللازم لتشغيل الموقع وتحسين الخدمات المقدمة.",
      privacy_h2_6: "6. حماية البيانات",
      privacy_p6: "نحن نتخذ إجراءات أمنية مناسبة لحماية المعلومات الشخصية للمستخدمين من الوصول غير المصرح به أو التعديل أو الإفصاح. ومع ذلك لا يمكن ضمان الأمان الكامل لأي عملية نقل بيانات عبر الإنترنت.",
      privacy_h2_7: "7. إخلاء المسؤولية عن المحتوى العقاري",
      privacy_p7: "هذا الموقع عبارة عن منصة إعلامية وتسويقية متخصصة في عرض وتسويق المشروعات العقارية ويتم تشغيله وإدارته بواسطة شركة تسويق عقاري مستقلة. جميع المعلومات المعروضة على الموقع بما في ذلك الأسعار والصور والمساحات ومواصفات الوحدات هي معلومات إرشادية وتسويقية وقد تخضع للتحديث أو التغيير في أي وقت دون إشعار مسبق.",
      privacy_h2_8: "8. طبيعة الموقع",
      privacy_p8: "قد يستخدم الموقع نماذج تسجيل أو تواصل لجمع بيانات المستخدمين بهدف الرد على الاستفسارات أو تقديم معلومات إضافية عن الخدمات أو المشروعات المعروضة.",
      privacy_h2_9: "9. الروابط الخارجية",
      privacy_p9: "قد يحتوي الموقع على روابط لمواقع خارجية لا يتم إدارتها من قبلنا، ولذلك فإننا غير مسؤولين عن محتوى أو سياسات الخصوصية الخاصة بتلك المواقع.",
      privacy_h2_10: "10. موافقة المستخدم",
      privacy_p10: "باستخدامك لهذا الموقع فإنك تقر بأنك قرأت وفهمت سياسة الخصوصية هذه وتوافق على الالتزام ببنودها.",
      privacy_h2_11: "11. تحديث سياسة الخصوصية",
      privacy_p11: "قد يتم تحديث سياسة الخصوصية من وقت لآخر بما يتوافق مع التحديثات التقنية أو القانونية، وسيتم نشر أي تحديثات على هذه الصفحة.",
      privacy_h2_12: "12. التواصل معنا",
      privacy_p12: "في حال وجود أي استفسار بخصوص سياسة الخصوصية أو كيفية استخدام البيانات، يمكن التواصل معنا عبر وسائل الاتصال المتوفرة في الموقع.",

      disclaimer_title: "اخلاء المسؤولية",
      disclaimer_updated: "آخر تحديث: 22/05/2026",
      disclaimer_lang_hint: "EN / عربي",
      disclaimer_intro:
        "تنبيه: المعلومات المعروضة على هذه الصفحة لأغراض تسويقية وإعلامية فقط وقد تتغير دون إشعار مسبق.",
      disclaimer_h2_1: "1. طبيعة الموقع",
      disclaimer_p1: "هذا الموقع منصة تسويقية وإعلامية متخصصة في التسويق العقاري. المحتوى المعروض (صور/أسعار/خطط سداد/مواصفات) يُقدم كمعلومات عامة لمساعدة الزائر ولا يُعد عرضًا رسميًا أو تعاقديًا.",
      disclaimer_h2_2: "2. دقة المعلومات وتحديثها",
      disclaimer_p2: "نسعى لتقديم معلومات دقيقة قدر الإمكان، لكن قد تحدث فروق أو تغييرات من قبل المطور أو الجهة المالكة أو الجهات الرسمية. لذلك قد تكون الأسعار، الصور، المساحات، الإتاحة، وخطط السداد قابلة للتغيير في أي وقت دون إشعار.",
      disclaimer_h2_3: "3. الصور والمحتوى التسويقي",
      disclaimer_p3: "قد تحتوي الصفحة على صور أو رندرات أو مواد تسويقية توضيحية، وقد لا تعكس الشكل النهائي بشكل كامل. التفاصيل النهائية تُحدد وفق مستندات المطور/الجهة المالكة الرسمية.",
      disclaimer_h2_4: "4. العروض والتعاقد",
      disclaimer_p4: "أي تواصل عبر النماذج أو الهاتف أو الواتساب هو لغرض الاستفسار والحصول على معلومات. لا يتم اعتبار أي محتوى أو رد رسالة/اتصال بمثابة عقد أو التزام رسمي إلا من خلال الجهات الرسمية المختصة وبمستندات معتمدة.",
      disclaimer_h2_5: "5. الروابط الخارجية",
      disclaimer_p5: "قد يحتوي الموقع على روابط لمصادر خارجية. نحن غير مسؤولين عن محتوى تلك المواقع أو سياسات الخصوصية الخاصة بها.",
      disclaimer_h2_6: "6. حدود المسؤولية",
      disclaimer_l6_1: "لا نتحمل مسؤولية أي قرار شرائي/استثماري يتم اتخاذه بالاعتماد على المعلومات المعروضة فقط.",
      disclaimer_l6_2: "لا نضمن التوافر المستمر للمشروعات أو الأسعار أو الوحدات.",
      disclaimer_l6_3: "أي نزاع يتعلق بالتعاقد أو التسعير أو التسليم يكون مرجعه الجهة المالكة/المطور وشروطهم الرسمية.",
      disclaimer_p6: "باستخدامك للموقع، فأنت تقر بأنك قرأت هذا الإخلاء وتوافق عليه. لأي استفسار تواصل معنا عبر صفحة \"تواصل معنا\".",

      thanks_title: "تم استلام بياناتك بنجاح",
      thanks_subtitle: "سيتم التواصل معك قريباً من فريق المبيعات لعرض أفضل الخيارات المناسبة لك.",
      thanks_quick_title: "وصول سريع",
      thanks_whatsapp: "تفاصيل اكثر عبر واتساب",
      thanks_back_home: "العودة للرئيسية",

      cookie_text:
        "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستمرارك في التصفح، أنت توافق على",
      cookie_and: "و",

      unit_chalet: "شاليه",
      unit_townhouse: "تاون هاوس",
      unit_villa: "فيلا"
    },
    en: {
      nav_home: "Home",
      nav_sec_home: "Home",
      nav_sec_units: "Units",
      nav_sec_why: "Project",
      nav_sec_gallery: "Gallery",
      nav_sec_payment: "About Palm Hills",
      nav_sec_register: "Register",
      nav_about: "About Us",
      nav_privacy: "Privacy Policy",
      nav_disclaimer: "Disclaimer",
      lang_label: "AR",
      footer_copy: "All rights reserved - Palm Hills Ras El Hekma",
      footer_privacy: "Privacy Policy",
      footer_disclaimer: "Disclaimer",
      footer_about: "About Us",
      cta_form: "Book Free Consultation",
      cta_whatsapp: "More Details",
      sticky_whatsapp: "WhatsApp",
      cta_call: "Call Now",
      whatsapp_general: "I'm interested in Hacienda Ras al Hekma Palm Hills, and I need more details.",

      home_kicker: "New Launch",
      home_title: "Hacienda Ras El Hekma",
      home_subtitle: "The largest destination on Egypt's North Coast",
      home_meta: "5% Down Payments, up to 10 years installments",
      hero_scroll_aria: "Scroll to content",
      hero_stat_1_t: "Feddan",
      hero_stat_1_v: "1,400",
      hero_stat_2_t: "Beach Frontage",
      hero_stat_2_v: "4.8 km",
      hero_stat_3_t: "Water View Units",
      hero_stat_3_v: "97%",
      hero_stat_4_t: "Green & Water Landscapes",
      hero_stat_4_v: "84%",

      units_title: "Available Units & Prices",
      units_subtitle: "Starting prices are indicative and subject to official launch updates. Register now for priority follow-up.",
      units_eoi_badge: "EOI is fully refundable within one week",
      units_cta_whatsapp: "More Details",
      units_cta_eoi: "Submit EOI",
      units_card_badge: "Priority Access",
      units_card_note: "Fully Finished + ACs + Kitchen Cabinets",
      units_type_apartments: "Apartments / Residences",
      units_type_junior_chalet: "Junior Chalet",
      units_type_senior_chalet: "Senior Chalet",
      units_type_twin_house: "Twin House",
      units_type_villas: "Villas",
      units_eoi_title: "EOI Values",
      units_eoi_beach_home: "Beach Home",
      units_eoi_chalet: "Chalet",
      units_eoi_villas: "Villas",
      unit_price_from: "Starting from",
      unit_meta_area: "Area",
      unit_meta_delivery: "Delivery",
      unit_area_val: "From 110 sqm to 230 sqm",
      unit_delivery_val: "As announced",

      section_about_project_title: "Why Hacienda Ras El Hekma",
      section_about_project_subtitle: "Premium coastal destination by Palm Hills at KM 238.",
      section_about_chip_1: "1,400 Acres",
      section_about_chip_2: "4.8 KM Beachfront",
      section_about_chip_3: "84% Greenery & Water",
      section_about_chip_4: "97% Water Views",
      section_about_feature_1_t: "Masterplan by OBMI",
      section_about_feature_1_p: "Global planning quality with premium design standards.",
      section_about_feature_2_t: "3 International Hotels",
      section_about_feature_2_p: "Hospitality ecosystem built inside the destination.",
      section_about_feature_3_t: "Integrated Destination",
      section_about_feature_3_p: "Airport, marina, schools, hospitals, and free zone access.",
      section_about_feature_4_t: "Fully Finished Units",
      section_about_feature_4_p: "ACs and kitchen cabinets included for immediate readiness.",
      section_about_cta_eoi: "Submit EOI",

      gallery_title: "Project Gallery",
      gallery_subtitle: "A premium visual identity that reflects an elevated summer lifestyle.",
      gallery_1: "Contemporary architecture",
      gallery_2: "Green landscapes and walkable zones",
      gallery_3: "Integrated facilities and service core",

      palm_title: "About Palm Hills",
      palm_subtitle:
        "A leading Egyptian real estate developer with a proven track record in quality delivery and premium communities.",

      palm_about_title: "About Palm Hills",
      palm_about_subtitle:
        "A leading developer with strong delivery history and successful projects in strategic locations across Egypt.",
      palm_about_1_t: "25+ Years of Experience",
      palm_about_1_p: "A long-standing presence in Egypt's real estate market with trusted execution and delivery quality.",
      palm_about_2_t: "Established Living Communities",
      palm_about_2_p: "Operational communities where residents have been living for years with solid quality of life.",
      palm_about_3_t: "Wide Location Diversity",
      palm_about_3_p: "Strong portfolio across North Coast, New Cairo, Sheikh Zayed, and October to match different needs.",
      palm_about_4_t: "Flexible Payment Plans",
      palm_about_4_p: "Multiple installment structures that help buyers choose according to budget and purchase goals.",
      palm_about_5_t: "Ideal for Living & Investment",
      palm_about_5_p: "Diverse product mix for both end-users looking for a home and buyers seeking investment value.",

      payment_title: "Payment Plan Details",
      payment_subtitle: "A flexible structure that helps buyers decide with confidence.",
      payment_b1: "Competitive down payment options.",
      payment_b2: "Installments across extended years.",
      payment_b3: "Flexibility by unit type and budget.",
      payment_note: "For the latest exact plan based on your unit preference, click More Details or submit your details now.",

      form_title: "Register Your Details",
      form_subtitle: "Our direct sales team is ready to help you choose the best-fit unit.",
      form_name: "Full Name",
      form_phone: "Phone Number (with country code)",
      form_email: "Email Address",
      form_unit: "Unit Type",
      form_unit_placeholder: "Select unit type",
      unit_opt_chalet: "Chalet",
      unit_opt_townhouse: "Townhouse",
      unit_opt_villa: "Villa",
      form_submit: "Submit",
      form_privacy_note: "By submitting, you agree to the Privacy Policy and Disclaimer.",

      about_title: "About the Sales Consultant",
      about_subtitle:
        "I am a direct sales consultant for Palm Hills projects. My role is to help you choose the right unit for your goals and budget with full transparency.",
      about_b1: "Fast, direct communication with serious buyers.",
      about_b2: "Clear comparisons for unit options and payment plans.",
      about_b3: "End-to-end follow-up from first inquiry to booking decision.",
      about_card_slot_title: "Business Card Placeholder",
      about_card_slot_note: "The business card image will be added here later.",
      about_contact_title: "Direct Contact",
      about_contact_whatsapp: "WhatsApp",
      about_contact_call: "Call",
      about_contact_email: "info@salespalmhills.com",

      privacy_title: "Privacy Policy",
      privacy_intro:
        "We place great importance on protecting the privacy of all visitors and users of this website.",
      privacy_h2_1: "1. Introduction",
      privacy_p1: "We place great importance on protecting the privacy of all visitors and users of this website. This page explains how information collected through your use of the site is gathered, used, and protected. By using this website, you agree to the terms of the privacy policy stated on this page.",
      privacy_h2_2: "2. Information We Collect",
      privacy_p2: "We may collect certain information when you use the website or fill out registration forms, such as name, phone number, email address, IP address, device and browser data, and on-site browsing data.",
      privacy_h2_3: "3. How We Use Information",
      privacy_p3: "Collected information may be used to communicate with users regarding inquiries or requests, provide information about offered services or projects, improve the user experience on the site, and analyze website performance as well as marketing and advertising campaigns.",
      privacy_h2_4: "4. Cookies",
      privacy_p4: "This website uses cookies and similar tracking technologies to improve user experience, analyze visitor traffic, and measure the performance of marketing and advertising campaigns.",
      privacy_h2_5: "5. Sharing Information with Third Parties",
      privacy_p5: "Some information may be shared with trusted third parties such as analytics companies, digital advertising platforms, or hosting providers, only to the extent necessary to operate the website and improve provided services.",
      privacy_h2_6: "6. Data Protection",
      privacy_p6: "We take appropriate security measures to protect users' personal information from unauthorized access, modification, or disclosure. However, complete security of any data transmission over the internet cannot be guaranteed.",
      privacy_h2_7: "7. Real Estate Content Disclaimer",
      privacy_p7: "This website is an informational and marketing platform specialized in presenting and marketing real estate projects. It is operated and managed by an independent real estate marketing company. All information displayed on the website, including prices, images, areas, and unit specifications, is for guidance and marketing purposes and may be updated or changed at any time without prior notice.",
      privacy_h2_8: "8. Nature of the Website",
      privacy_p8: "The website may use registration or contact forms to collect user data for responding to inquiries or providing additional information about offered services or projects.",
      privacy_h2_9: "9. External Links",
      privacy_p9: "The website may contain links to external websites that are not managed by us. Therefore, we are not responsible for the content or privacy policies of those websites.",
      privacy_h2_10: "10. User Consent",
      privacy_p10: "By using this website, you acknowledge that you have read and understood this privacy policy and agree to comply with its terms.",
      privacy_h2_11: "11. Privacy Policy Updates",
      privacy_p11: "This privacy policy may be updated from time to time in line with technical or legal updates, and any updates will be published on this page.",
      privacy_h2_12: "12. Contact Us",
      privacy_p12: "If you have any questions regarding this privacy policy or how data is used, you can contact us through the communication channels available on the website.",

      disclaimer_title: "Disclaimer",
      disclaimer_updated: "Last updated: 22/05/2026",
      disclaimer_lang_hint: "EN / عربي",
      disclaimer_intro:
        "Notice: The information displayed on this page is for marketing and informational purposes only and may change without prior notice.",
      disclaimer_h2_1: "1. Website Nature",
      disclaimer_p1: "This website is a marketing and informational platform specialized in real estate marketing. Displayed content (images/prices/payment plans/specifications) is provided as general information to assist visitors and does not constitute an official or contractual offer.",
      disclaimer_h2_2: "2. Accuracy and Updates",
      disclaimer_p2: "We strive to provide accurate information whenever possible; however, differences or changes may occur by the developer, property owner, or official authorities. Therefore, prices, images, areas, availability, and payment plans may change at any time without notice.",
      disclaimer_h2_3: "3. Marketing Images and Content",
      disclaimer_p3: "This page may include illustrative images, renders, or marketing materials that may not fully reflect the final product. Final details are determined according to official developer/owner documentation.",
      disclaimer_h2_4: "4. Offers and Contracting",
      disclaimer_p4: "Any communication through forms, phone calls, or WhatsApp is for inquiry and information purposes only. No content, message, or call response is considered a contract or official commitment except through the competent official entities and approved documents.",
      disclaimer_h2_5: "5. External Links",
      disclaimer_p5: "The website may include links to external sources. We are not responsible for the content of those sites or their privacy policies.",
      disclaimer_h2_6: "6. Limitation of Liability",
      disclaimer_l6_1: "We are not responsible for any purchase/investment decision made based solely on the displayed information.",
      disclaimer_l6_2: "We do not guarantee ongoing availability of projects, prices, or units.",
      disclaimer_l6_3: "Any dispute related to contracting, pricing, or delivery is governed by the property owner/developer and their official terms.",
      disclaimer_p6: "By using this website, you acknowledge that you have read this disclaimer and agree to it. For any inquiry, contact us through the \"Contact Us\" page.",

      thanks_title: "Your Details Have Been Received",
      thanks_subtitle: "Our sales team will contact you shortly with the most suitable options.",
      thanks_quick_title: "Quick Access",
      thanks_whatsapp: "More Details on WhatsApp",
      thanks_back_home: "Back to Home",

      cookie_text:
        "We use cookies to improve your experience. By continuing to browse, you agree to the",
      cookie_and: "and",

      unit_chalet: "Chalet",
      unit_townhouse: "Townhouse",
      unit_villa: "Villa"
    }
  };

  const getDictionary = () => dictionary;

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "ar" ? saved : DEFAULT_LANG;
  }

  function setLang(lang) {
    const safeLang = lang === "en" ? "en" : "ar";
    localStorage.setItem(STORAGE_KEY, safeLang);
    applyLanguage(safeLang);
  }

  function t(lang, key) {
    return dictionary[lang]?.[key] || dictionary.en[key] || key;
  }

  function applyLanguage(lang) {
    const currentLang = lang === "en" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(currentLang, key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const attrMap = el.getAttribute("data-i18n-attr") || "";
      attrMap.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((v) => v && v.trim());
        if (attr && key) {
          el.setAttribute(attr, t(currentLang, key));
        }
      });
    });

    document.querySelectorAll(".lang-toggle").forEach((langToggle) => {
      langToggle.textContent = t(currentLang, "lang_label");
      langToggle.setAttribute("aria-label", t(currentLang, "lang_label"));
    });
  }

  window.SiteI18n = {
    getLang,
    setLang,
    t,
    applyLanguage,
    getDictionary
  };
})();
