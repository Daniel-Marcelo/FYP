/**
 * 
 */

function getCompanies(){

	
	var companies = [
               {
            	    "Symbol": "FLWS",
            	    "Name": "1-800 FLOWERS.COM, Inc."
            	  },
            	  {
            	    "Symbol": "TFSC",
            	    "Name": "1347 Capital Corp."
            	  },
            	  {
            	    "Symbol": "TFSCR",
            	    "Name": "1347 Capital Corp."
            	  },
            	  {
            	    "Symbol": "TFSCU",
            	    "Name": "1347 Capital Corp."
            	  },
            	  {
            	    "Symbol": "TFSCW",
            	    "Name": "1347 Capital Corp."
            	  },
            	  {
            	    "Symbol": "PIH",
            	    "Name": "1347 Property Insurance Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "FCTY",
            	    "Name": "1st Century Bancshares, Inc"
            	  },
            	  {
            	    "Symbol": "FCCY",
            	    "Name": "1st Constitution Bancorp (NJ)"
            	  },
            	  {
            	    "Symbol": "SRCE",
            	    "Name": "1st Source Corporation"
            	  },
            	  {
            	    "Symbol": "VNET",
            	    "Name": "21Vianet Group, Inc."
            	  },
            	  {
            	    "Symbol": "XXII",
            	    "Name": "22nd Century Group, Inc"
            	  },
            	  {
            	    "Symbol": "TWOU",
            	    "Name": "2U, Inc."
            	  },
            	  {
            	    "Symbol": "DDD",
            	    "Name": "3D Systems Corporation"
            	  },
            	  {
            	    "Symbol": "MMM",
            	    "Name": "3M Company"
            	  },
            	  {
            	    "Symbol": "WBAI",
            	    "Name": "500.com Limited"
            	  },
            	  {
            	    "Symbol": "JOBS",
            	    "Name": "51job, Inc."
            	  },
            	  {
            	    "Symbol": "WUBA",
            	    "Name": "58.com Inc."
            	  },
            	  {
            	    "Symbol": "SIXD",
            	    "Name": "6D Global Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "CAFD",
            	    "Name": "8point3 Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "EGHT",
            	    "Name": "8x8 Inc"
            	  },
            	  {
            	    "Symbol": "AVHI",
            	    "Name": "A V Homes, Inc."
            	  },
            	  {
            	    "Symbol": "AMRK",
            	    "Name": "A-Mark Precious Metals, Inc."
            	  },
            	  {
            	    "Symbol": "SHLM",
            	    "Name": "A. Schulman, Inc."
            	  },
            	  {
            	    "Symbol": "AHC",
            	    "Name": "A.H. Belo Corporation"
            	  },
            	  {
            	    "Symbol": "ATEN",
            	    "Name": "A10 Networks, Inc."
            	  },
            	  {
            	    "Symbol": "AAC",
            	    "Name": "AAC Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "AAON",
            	    "Name": "AAON, Inc."
            	  },
            	  {
            	    "Symbol": "AIR",
            	    "Name": "AAR Corp."
            	  },
            	  {
            	    "Symbol": "ABAX",
            	    "Name": "ABAXIS, Inc."
            	  },
            	  {
            	    "Symbol": "ABB",
            	    "Name": "ABB Ltd"
            	  },
            	  {
            	    "Symbol": "ABMD",
            	    "Name": "ABIOMED, Inc."
            	  },
            	  {
            	    "Symbol": "ABM",
            	    "Name": "ABM Industries Incorporated"
            	  },
            	  {
            	    "Symbol": "ACAD",
            	    "Name": "ACADIA Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "ACIW",
            	    "Name": "ACI Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "ACNB",
            	    "Name": "ACNB Corporation"
            	  },
            	  {
            	    "Symbol": "AIII",
            	    "Name": "ACRE Realty Investors, Inc."
            	  },
            	  {
            	    "Symbol": "AEY",
            	    "Name": "ADDvantage Technologies Group, Inc."
            	  },
            	  {
            	    "Symbol": "ADMA",
            	    "Name": "ADMA Biologics Inc"
            	  },
            	  {
            	    "Symbol": "ADT",
            	    "Name": "ADT Corporation"
            	  },
            	  {
            	    "Symbol": "ADTN",
            	    "Name": "ADTRAN, Inc."
            	  },
            	  {
            	    "Symbol": "ACM",
            	    "Name": "AECOM"
            	  },
            	  {
            	    "Symbol": "AEPI",
            	    "Name": "AEP Industries Inc."
            	  },
            	  {
            	    "Symbol": "AEZS",
            	    "Name": "AEterna Zentaris Inc."
            	  },
            	  {
            	    "Symbol": "MITT",
            	    "Name": "AG Mortgage Investment Trust, Inc."
            	  },
            	  {
            	    "Symbol": "MITT^A",
            	    "Name": "AG Mortgage Investment Trust, Inc."
            	  },
            	  {
            	    "Symbol": "MITT^B",
            	    "Name": "AG Mortgage Investment Trust, Inc."
            	  },
            	  {
            	    "Symbol": "WGA",
            	    "Name": "AG&E Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "AGCO",
            	    "Name": "AGCO Corporation"
            	  },
            	  {
            	    "Symbol": "GAS",
            	    "Name": "AGL Resources, Inc."
            	  },
            	  {
            	    "Symbol": "AKS",
            	    "Name": "AK Steel Holding Corporation"
            	  },
            	  {
            	    "Symbol": "ACG",
            	    "Name": "ALLIANCEBERNSTEIN INCOME FUND INC"
            	  },
            	  {
            	    "Symbol": "AMAG",
            	    "Name": "AMAG Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "AMC",
            	    "Name": "AMC Entertainment Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "AMCX",
            	    "Name": "AMC Networks Inc."
            	  },
            	  {
            	    "Symbol": "DIT",
            	    "Name": "AMCON Distributing Company"
            	  },
            	  {
            	    "Symbol": "AMP",
            	    "Name": "AMERIPRISE FINANCIAL SERVICES, INC."
            	  },
            	  {
            	    "Symbol": "AMSF",
            	    "Name": "AMERISAFE, Inc."
            	  },
            	  {
            	    "Symbol": "AHS",
            	    "Name": "AMN Healthcare Services Inc"
            	  },
            	  {
            	    "Symbol": "AXR",
            	    "Name": "AMREP Corporation"
            	  },
            	  {
            	    "Symbol": "AME",
            	    "Name": "AMTEK, Inc."
            	  },
            	  {
            	    "Symbol": "ANIP",
            	    "Name": "ANI Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ANSS",
            	    "Name": "ANSYS, Inc."
            	  },
            	  {
            	    "Symbol": "ATNY",
            	    "Name": "API Technologies Corp."
            	  },
            	  {
            	    "Symbol": "AUMA",
            	    "Name": "AR Capital Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "AUMAU",
            	    "Name": "AR Capital Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "AUMAW",
            	    "Name": "AR Capital Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "ARC",
            	    "Name": "ARC Document Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "ARCW",
            	    "Name": "ARC Group Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "ABIO",
            	    "Name": "ARCA biopharma, Inc."
            	  },
            	  {
            	    "Symbol": "ARIS",
            	    "Name": "ARI Network Services, Inc."
            	  },
            	  {
            	    "Symbol": "ARIA",
            	    "Name": "ARIAD Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ARMH",
            	    "Name": "ARM Holdings plc"
            	  },
            	  {
            	    "Symbol": "ARR",
            	    "Name": "ARMOUR Residential REIT, Inc."
            	  },
            	  {
            	    "Symbol": "ARR^A",
            	    "Name": "ARMOUR Residential REIT, Inc."
            	  },
            	  {
            	    "Symbol": "ARR^B",
            	    "Name": "ARMOUR Residential REIT, Inc."
            	  },
            	  {
            	    "Symbol": "ARRS",
            	    "Name": "ARRIS International plc"
            	  },
            	  {
            	    "Symbol": "ASA",
            	    "Name": "ASA Gold and Precious Metals Limited"
            	  },
            	  {
            	    "Symbol": "ASBB",
            	    "Name": "ASB Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "ASML",
            	    "Name": "ASML Holding N.V."
            	  },
            	  {
            	    "Symbol": "T",
            	    "Name": "AT&T Inc."
            	  },
            	  {
            	    "Symbol": "ATAI",
            	    "Name": "ATA Inc."
            	  },
            	  {
            	    "Symbol": "ATRI",
            	    "Name": "ATRION Corporation"
            	  },
            	  {
            	    "Symbol": "AUO",
            	    "Name": "AU Optronics Corp"
            	  },
            	  {
            	    "Symbol": "AVEO",
            	    "Name": "AVEO Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "AVG",
            	    "Name": "AVG Technologies N.V."
            	  },
            	  {
            	    "Symbol": "AVX",
            	    "Name": "AVX Corporation"
            	  },
            	  {
            	    "Symbol": "AXTI",
            	    "Name": "AXT Inc"
            	  },
            	  {
            	    "Symbol": "AZZ",
            	    "Name": "AZZ Inc."
            	  },
            	  {
            	    "Symbol": "AAN",
            	    "Name": "Aaron&#39;s,  Inc."
            	  },
            	  {
            	    "Symbol": "ABBV",
            	    "Name": "AbbVie Inc."
            	  },
            	  {
            	    "Symbol": "ABT",
            	    "Name": "Abbott Laboratories"
            	  },
            	  {
            	    "Symbol": "ABY",
            	    "Name": "Abengoa Yield plc"
            	  },
            	  {
            	    "Symbol": "ABGB",
            	    "Name": "Abengoa, S.A."
            	  },
            	  {
            	    "Symbol": "ABEO",
            	    "Name": "Abeona Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "ABEOW",
            	    "Name": "Abeona Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "ANF",
            	    "Name": "Abercrombie & Fitch Company"
            	  },
            	  {
            	    "Symbol": "FAX",
            	    "Name": "Aberdeen Asia-Pacific Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "IAF",
            	    "Name": "Aberdeen Australia Equity Fund Inc"
            	  },
            	  {
            	    "Symbol": "CH",
            	    "Name": "Aberdeen Chile Fund, Inc."
            	  },
            	  {
            	    "Symbol": "ABE",
            	    "Name": "Aberdeen Emerging Markets Smaller Company Opportunities Fund I"
            	  },
            	  {
            	    "Symbol": "FCO",
            	    "Name": "Aberdeen Global Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "GCH",
            	    "Name": "Aberdeen Greater China Fund, Inc."
            	  },
            	  {
            	    "Symbol": "IF",
            	    "Name": "Aberdeen Indonesia Fund, Inc."
            	  },
            	  {
            	    "Symbol": "ISL",
            	    "Name": "Aberdeen Israel Fund, Inc."
            	  },
            	  {
            	    "Symbol": "JEQ",
            	    "Name": "Aberdeen Japan Equity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "SGF",
            	    "Name": "Aberdeen Singapore Fund, Inc."
            	  },
            	  {
            	    "Symbol": "ABIL",
            	    "Name": "Ability Inc."
            	  },
            	  {
            	    "Symbol": "ABILW",
            	    "Name": "Ability Inc."
            	  },
            	  {
            	    "Symbol": "AXAS",
            	    "Name": "Abraxas Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "ACTG",
            	    "Name": "Acacia Research Corporation"
            	  },
            	  {
            	    "Symbol": "ACHC",
            	    "Name": "Acadia Healthcare Company, Inc."
            	  },
            	  {
            	    "Symbol": "AKR",
            	    "Name": "Acadia Realty Trust"
            	  },
            	  {
            	    "Symbol": "ACST",
            	    "Name": "Acasti Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "AXDX",
            	    "Name": "Accelerate Diagnostics, Inc."
            	  },
            	  {
            	    "Symbol": "XLRN",
            	    "Name": "Acceleron Pharma Inc."
            	  },
            	  {
            	    "Symbol": "ACN",
            	    "Name": "Accenture plc"
            	  },
            	  {
            	    "Symbol": "ANCX",
            	    "Name": "Access National Corporation"
            	  },
            	  {
            	    "Symbol": "ACCO",
            	    "Name": "Acco Brands Corporation"
            	  },
            	  {
            	    "Symbol": "VXDN",
            	    "Name": "AccuShares Spot CBOE VIX Down Shares"
            	  },
            	  {
            	    "Symbol": "VXUP",
            	    "Name": "AccuShares Spot CBOE VIX Up Shares"
            	  },
            	  {
            	    "Symbol": "ARAY",
            	    "Name": "Accuray Incorporated"
            	  },
            	  {
            	    "Symbol": "ACW",
            	    "Name": "Accuride Corporation New"
            	  },
            	  {
            	    "Symbol": "ACRX",
            	    "Name": "AcelRx Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ACET",
            	    "Name": "Aceto Corporation"
            	  },
            	  {
            	    "Symbol": "AKAO",
            	    "Name": "Achaogen, Inc."
            	  },
            	  {
            	    "Symbol": "ACHN",
            	    "Name": "Achillion Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ACRS",
            	    "Name": "Aclaris Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ACU",
            	    "Name": "Acme United Corporation."
            	  },
            	  {
            	    "Symbol": "ACOR",
            	    "Name": "Acorda Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ATV",
            	    "Name": "Acorn International, Inc."
            	  },
            	  {
            	    "Symbol": "ATNM",
            	    "Name": "Actinium Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ACTS",
            	    "Name": "Actions Semiconductor Co., Ltd."
            	  },
            	  {
            	    "Symbol": "ACPW",
            	    "Name": "Active Power, Inc."
            	  },
            	  {
            	    "Symbol": "ATVI",
            	    "Name": "Activision Blizzard, Inc"
            	  },
            	  {
            	    "Symbol": "ACTA",
            	    "Name": "Actua Corporation"
            	  },
            	  {
            	    "Symbol": "ATU",
            	    "Name": "Actuant Corporation"
            	  },
            	  {
            	    "Symbol": "AYI",
            	    "Name": "Acuity Brands Inc"
            	  },
            	  {
            	    "Symbol": "ACUR",
            	    "Name": "Acura Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ACXM",
            	    "Name": "Acxiom Corporation"
            	  },
            	  {
            	    "Symbol": "ADMS",
            	    "Name": "Adamas Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ADMP",
            	    "Name": "Adamis Pharmaceuticals Corporation"
            	  },
            	  {
            	    "Symbol": "ADX",
            	    "Name": "Adams Diversified Equity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "PEO",
            	    "Name": "Adams Natural Resources Fund, Inc."
            	  },
            	  {
            	    "Symbol": "AE",
            	    "Name": "Adams Resources & Energy, Inc."
            	  },
            	  {
            	    "Symbol": "ADAP",
            	    "Name": "Adaptimmune Therapeutics plc"
            	  },
            	  {
            	    "Symbol": "ADK",
            	    "Name": "Adcare Health Systems Inc"
            	  },
            	  {
            	    "Symbol": "ADK^A",
            	    "Name": "Adcare Health Systems Inc"
            	  },
            	  {
            	    "Symbol": "ADUS",
            	    "Name": "Addus HomeCare Corporation"
            	  },
            	  {
            	    "Symbol": "AGRO",
            	    "Name": "Adecoagro S.A."
            	  },
            	  {
            	    "Symbol": "ADPT",
            	    "Name": "Adeptus Health Inc."
            	  },
            	  {
            	    "Symbol": "IOTS",
            	    "Name": "Adesto Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "ADBE",
            	    "Name": "Adobe Systems Incorporated"
            	  },
            	  {
            	    "Symbol": "ADRO",
            	    "Name": "Aduro Biotech, Inc."
            	  },
            	  {
            	    "Symbol": "AAP",
            	    "Name": "Advance Auto Parts Inc"
            	  },
            	  {
            	    "Symbol": "AAAP",
            	    "Name": "Advanced Accelerator Applications S.A."
            	  },
            	  {
            	    "Symbol": "WMS",
            	    "Name": "Advanced Drainage Systems, Inc."
            	  },
            	  {
            	    "Symbol": "AEIS",
            	    "Name": "Advanced Energy Industries, Inc."
            	  },
            	  {
            	    "Symbol": "AMD",
            	    "Name": "Advanced Micro Devices, Inc."
            	  },
            	  {
            	    "Symbol": "ASX",
            	    "Name": "Advanced Semiconductor Engineering, Inc."
            	  },
            	  {
            	    "Symbol": "AAV",
            	    "Name": "Advantage Oil & Gas Ltd"
            	  },
            	  {
            	    "Symbol": "ATE",
            	    "Name": "Advantest Corporation (Kabushiki Kaisha Advantest) ADS"
            	  },
            	  {
            	    "Symbol": "ADXS",
            	    "Name": "Advaxis, Inc."
            	  },
            	  {
            	    "Symbol": "ADXSW",
            	    "Name": "Advaxis, Inc."
            	  },
            	  {
            	    "Symbol": "AVK",
            	    "Name": "Advent Claymore Convertible Securities and Income Fund"
            	  },
            	  {
            	    "Symbol": "AGC",
            	    "Name": "Advent Claymore Convertible Securities and Income Fund II"
            	  },
            	  {
            	    "Symbol": "LCM",
            	    "Name": "Advent\/Claymore Enhanced Growth & Income Fund"
            	  },
            	  {
            	    "Symbol": "MAUI",
            	    "Name": "AdvisorShares Market Adaptive Unconstrained Income ETF"
            	  },
            	  {
            	    "Symbol": "YPRO",
            	    "Name": "AdvisorShares YieldPro ETF"
            	  },
            	  {
            	    "Symbol": "ANW",
            	    "Name": "Aegean Marine Petroleum Network Inc."
            	  },
            	  {
            	    "Symbol": "AEGR",
            	    "Name": "Aegerion Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "AEGN",
            	    "Name": "Aegion Corp"
            	  },
            	  {
            	    "Symbol": "AEB",
            	    "Name": "Aegon NV"
            	  },
            	  {
            	    "Symbol": "AED",
            	    "Name": "Aegon NV"
            	  },
            	  {
            	    "Symbol": "AEG",
            	    "Name": "Aegon NV"
            	  },
            	  {
            	    "Symbol": "AEH",
            	    "Name": "Aegon NV"
            	  },
            	  {
            	    "Symbol": "AEK",
            	    "Name": "Aegon NV"
            	  },
            	  {
            	    "Symbol": "AEHR",
            	    "Name": "Aehr Test Systems"
            	  },
            	  {
            	    "Symbol": "AMTX",
            	    "Name": "Aemetis, Inc"
            	  },
            	  {
            	    "Symbol": "AER",
            	    "Name": "Aercap Holdings N.V."
            	  },
            	  {
            	    "Symbol": "AERI",
            	    "Name": "Aerie Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ACY",
            	    "Name": "AeroCentury Corp."
            	  },
            	  {
            	    "Symbol": "AVAV",
            	    "Name": "AeroVironment, Inc."
            	  },
            	  {
            	    "Symbol": "HIVE",
            	    "Name": "Aerohive Networks, Inc."
            	  },
            	  {
            	    "Symbol": "AJRD",
            	    "Name": "Aerojet Rocketdyne Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ARO",
            	    "Name": "Aeropostale Inc"
            	  },
            	  {
            	    "Symbol": "AEMD",
            	    "Name": "Aethlon Medical, Inc."
            	  },
            	  {
            	    "Symbol": "AET",
            	    "Name": "Aetna Inc."
            	  },
            	  {
            	    "Symbol": "AMG",
            	    "Name": "Affiliated Managers Group, Inc."
            	  },
            	  {
            	    "Symbol": "MGR",
            	    "Name": "Affiliated Managers Group, Inc."
            	  },
            	  {
            	    "Symbol": "AFMD",
            	    "Name": "Affimed N.V."
            	  },
            	  {
            	    "Symbol": "AFFX",
            	    "Name": "Affymetrix, Inc."
            	  },
            	  {
            	    "Symbol": "AFL",
            	    "Name": "Aflac Incorporated"
            	  },
            	  {
            	    "Symbol": "AFSD",
            	    "Name": "Aflac Incorporated"
            	  },
            	  {
            	    "Symbol": "AGEN",
            	    "Name": "Agenus Inc."
            	  },
            	  {
            	    "Symbol": "AGRX",
            	    "Name": "Agile Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "A",
            	    "Name": "Agilent Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "AGYS",
            	    "Name": "Agilysys, Inc."
            	  },
            	  {
            	    "Symbol": "AGIO",
            	    "Name": "Agios Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "AEM",
            	    "Name": "Agnico Eagle Mines Limited"
            	  },
            	  {
            	    "Symbol": "ADC",
            	    "Name": "Agree Realty Corporation"
            	  },
            	  {
            	    "Symbol": "GRO",
            	    "Name": "Agria Corporation"
            	  },
            	  {
            	    "Symbol": "AGU",
            	    "Name": "Agrium Inc."
            	  },
            	  {
            	    "Symbol": "AGFS",
            	    "Name": "AgroFresh Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "AGFSW",
            	    "Name": "AgroFresh Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "AIMT",
            	    "Name": "Aimmune Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "AIRI",
            	    "Name": "Air Industries Group"
            	  },
            	  {
            	    "Symbol": "AL",
            	    "Name": "Air Lease Corporation"
            	  },
            	  {
            	    "Symbol": "AIRM",
            	    "Name": "Air Methods Corporation"
            	  },
            	  {
            	    "Symbol": "APD",
            	    "Name": "Air Products and Chemicals, Inc."
            	  },
            	  {
            	    "Symbol": "AIRT",
            	    "Name": "Air T, Inc."
            	  },
            	  {
            	    "Symbol": "ATSG",
            	    "Name": "Air Transport Services Group, Inc"
            	  },
            	  {
            	    "Symbol": "AMCN",
            	    "Name": "AirMedia Group Inc"
            	  },
            	  {
            	    "Symbol": "AYR",
            	    "Name": "Aircastle Limited"
            	  },
            	  {
            	    "Symbol": "ARG",
            	    "Name": "Airgas, Inc."
            	  },
            	  {
            	    "Symbol": "AIXG",
            	    "Name": "Aixtron SE"
            	  },
            	  {
            	    "Symbol": "AKAM",
            	    "Name": "Akamai Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "AKTX",
            	    "Name": "Akari Therapeutics Plc"
            	  },
            	  {
            	    "Symbol": "AKBA",
            	    "Name": "Akebia Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "AKER",
            	    "Name": "Akers Biosciences Inc"
            	  },
            	  {
            	    "Symbol": "AKRX",
            	    "Name": "Akorn, Inc."
            	  },
            	  {
            	    "Symbol": "ALP^O",
            	    "Name": "Alabama Power Company"
            	  },
            	  {
            	    "Symbol": "ALG",
            	    "Name": "Alamo Group, Inc."
            	  },
            	  {
            	    "Symbol": "AGI",
            	    "Name": "Alamos Gold Inc."
            	  },
            	  {
            	    "Symbol": "ALRM",
            	    "Name": "Alarm.com Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ALK",
            	    "Name": "Alaska Air Group, Inc."
            	  },
            	  {
            	    "Symbol": "ALSK",
            	    "Name": "Alaska Communications Systems Group, Inc."
            	  },
            	  {
            	    "Symbol": "AIN",
            	    "Name": "Albany International Corporation"
            	  },
            	  {
            	    "Symbol": "AMRI",
            	    "Name": "Albany Molecular Research, Inc."
            	  },
            	  {
            	    "Symbol": "ALB",
            	    "Name": "Albemarle Corporation"
            	  },
            	  {
            	    "Symbol": "ABDC",
            	    "Name": "Alcentra Capital Corp."
            	  },
            	  {
            	    "Symbol": "AA",
            	    "Name": "Alcoa Inc."
            	  },
            	  {
            	    "Symbol": "AA^",
            	    "Name": "Alcoa Inc."
            	  },
            	  {
            	    "Symbol": "AA^B",
            	    "Name": "Alcoa Inc."
            	  },
            	  {
            	    "Symbol": "ADHD",
            	    "Name": "Alcobra Ltd."
            	  },
            	  {
            	    "Symbol": "ALDR",
            	    "Name": "Alder BioPharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ALDX",
            	    "Name": "Aldeyra Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ALR",
            	    "Name": "Alere Inc."
            	  },
            	  {
            	    "Symbol": "ALR^B",
            	    "Name": "Alere Inc."
            	  },
            	  {
            	    "Symbol": "ALEX",
            	    "Name": "Alexander & Baldwin Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ALX",
            	    "Name": "Alexander&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "ARE",
            	    "Name": "Alexandria Real Estate Equities, Inc."
            	  },
            	  {
            	    "Symbol": "ARE^D",
            	    "Name": "Alexandria Real Estate Equities, Inc."
            	  },
            	  {
            	    "Symbol": "ARE^E",
            	    "Name": "Alexandria Real Estate Equities, Inc."
            	  },
            	  {
            	    "Symbol": "AXU",
            	    "Name": "Alexco Resource Corp"
            	  },
            	  {
            	    "Symbol": "ALXN",
            	    "Name": "Alexion Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ALXA",
            	    "Name": "Alexza Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "BABA",
            	    "Name": "Alibaba Group Holding Limited"
            	  },
            	  {
            	    "Symbol": "ALCO",
            	    "Name": "Alico, Inc."
            	  },
            	  {
            	    "Symbol": "ALGN",
            	    "Name": "Align Technology, Inc."
            	  },
            	  {
            	    "Symbol": "ALIM",
            	    "Name": "Alimera Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "ALKS",
            	    "Name": "Alkermes plc"
            	  },
            	  {
            	    "Symbol": "Y",
            	    "Name": "Alleghany Corporation"
            	  },
            	  {
            	    "Symbol": "ATI",
            	    "Name": "Allegheny Technologies Incorporated"
            	  },
            	  {
            	    "Symbol": "ABTX",
            	    "Name": "Allegiance Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "ALGT",
            	    "Name": "Allegiant Travel Company"
            	  },
            	  {
            	    "Symbol": "ALLE",
            	    "Name": "Allegion plc"
            	  },
            	  {
            	    "Symbol": "AGN",
            	    "Name": "Allergan plc."
            	  },
            	  {
            	    "Symbol": "AGN^A",
            	    "Name": "Allergan plc."
            	  },
            	  {
            	    "Symbol": "ALE",
            	    "Name": "Allete, Inc."
            	  },
            	  {
            	    "Symbol": "AKP",
            	    "Name": "Alliance California Municipal Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "ADS",
            	    "Name": "Alliance Data Systems Corporation"
            	  },
            	  {
            	    "Symbol": "AFOP",
            	    "Name": "Alliance Fiber Optic Products, Inc."
            	  },
            	  {
            	    "Symbol": "AIQ",
            	    "Name": "Alliance HealthCare Services, Inc."
            	  },
            	  {
            	    "Symbol": "AHGP",
            	    "Name": "Alliance Holdings GP, L.P."
            	  },
            	  {
            	    "Symbol": "AFB",
            	    "Name": "Alliance National Municipal Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "AOI",
            	    "Name": "Alliance One International, Inc."
            	  },
            	  {
            	    "Symbol": "ARLP",
            	    "Name": "Alliance Resource Partners, L.P."
            	  },
            	  {
            	    "Symbol": "AWF",
            	    "Name": "Alliance World Dollar Government Fund II"
            	  },
            	  {
            	    "Symbol": "AB",
            	    "Name": "AllianceBernstein Holding L.P."
            	  },
            	  {
            	    "Symbol": "LNT",
            	    "Name": "Alliant Energy Corporation"
            	  },
            	  {
            	    "Symbol": "NCV",
            	    "Name": "AllianzGI Convertible & Income Fund"
            	  },
            	  {
            	    "Symbol": "NCZ",
            	    "Name": "AllianzGI Convertible & Income Fund II"
            	  },
            	  {
            	    "Symbol": "ACV",
            	    "Name": "AllianzGI Diversified Income & Convertible Fund"
            	  },
            	  {
            	    "Symbol": "NIE",
            	    "Name": "AllianzGI Equity & Convertible Income Fund"
            	  },
            	  {
            	    "Symbol": "NFJ",
            	    "Name": "AllianzGI NFJ Dividend, Interest & Premium Strategy Fund"
            	  },
            	  {
            	    "Symbol": "AHPI",
            	    "Name": "Allied Healthcare Products, Inc."
            	  },
            	  {
            	    "Symbol": "AMOT",
            	    "Name": "Allied Motion Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "AWH",
            	    "Name": "Allied World Assurance Company Holdings, AG"
            	  },
            	  {
            	    "Symbol": "ALQA",
            	    "Name": "Alliqua BioMedical, Inc."
            	  },
            	  {
            	    "Symbol": "ALSN",
            	    "Name": "Allison Transmission Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ALLT",
            	    "Name": "Allot Communications Ltd."
            	  },
            	  {
            	    "Symbol": "MDRX",
            	    "Name": "Allscripts Healthcare Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "ALL",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALL^A",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALL^B",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALL^C",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALL^D",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALL^E",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALL^F",
            	    "Name": "Allstate Corporation (The)"
            	  },
            	  {
            	    "Symbol": "ALLY",
            	    "Name": "Ally Financial Inc."
            	  },
            	  {
            	    "Symbol": "ALLY^A",
            	    "Name": "Ally Financial Inc."
            	  },
            	  {
            	    "Symbol": "ALLY^B",
            	    "Name": "Ally Financial Inc."
            	  },
            	  {
            	    "Symbol": "AAU",
            	    "Name": "Almaden Minerals, Ltd."
            	  },
            	  {
            	    "Symbol": "AFAM",
            	    "Name": "Almost Family Inc"
            	  },
            	  {
            	    "Symbol": "ALNY",
            	    "Name": "Alnylam Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "BSI",
            	    "Name": "Alon Blue Square Israel Ltd."
            	  },
            	  {
            	    "Symbol": "ALJ",
            	    "Name": "Alon USA Energy, Inc."
            	  },
            	  {
            	    "Symbol": "ALDW",
            	    "Name": "Alon USA Partners, LP"
            	  },
            	  {
            	    "Symbol": "APT",
            	    "Name": "Alpha Pro Tech, Ltd."
            	  },
            	  {
            	    "Symbol": "AOSL",
            	    "Name": "Alpha and Omega Semiconductor Limited"
            	  },
            	  {
            	    "Symbol": "SMCP",
            	    "Name": "AlphaMark Actively Managed Small Cap ETF"
            	  },
            	  {
            	    "Symbol": "GOOG",
            	    "Name": "Alphabet Inc."
            	  },
            	  {
            	    "Symbol": "GOOGL",
            	    "Name": "Alphabet Inc."
            	  },
            	  {
            	    "Symbol": "ATEC",
            	    "Name": "Alphatec Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "AGD",
            	    "Name": "Alpine Global Dynamic Dividend Fund"
            	  },
            	  {
            	    "Symbol": "AWP",
            	    "Name": "Alpine Global Premier Properties Fund"
            	  },
            	  {
            	    "Symbol": "AOD",
            	    "Name": "Alpine Total Dynamic Dividend Fund"
            	  },
            	  {
            	    "Symbol": "AAMC",
            	    "Name": "Altisource Asset Management Corp"
            	  },
            	  {
            	    "Symbol": "ASPS",
            	    "Name": "Altisource Portfolio Solutions S.A."
            	  },
            	  {
            	    "Symbol": "RESI",
            	    "Name": "Altisource Residential Corporation"
            	  },
            	  {
            	    "Symbol": "AIMC",
            	    "Name": "Altra Industrial Motion Corp."
            	  },
            	  {
            	    "Symbol": "MO",
            	    "Name": "Altria Group"
            	  },
            	  {
            	    "Symbol": "ACH",
            	    "Name": "Aluminum Corporation of China Limited"
            	  },
            	  {
            	    "Symbol": "AFSI",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFSI^A",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFSI^B",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFSI^C",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFSI^D",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFSI^E",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFSS",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AFST",
            	    "Name": "AmTrust Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "AMRN",
            	    "Name": "Amarin Corporation PLC"
            	  },
            	  {
            	    "Symbol": "AYA",
            	    "Name": "Amaya Inc."
            	  },
            	  {
            	    "Symbol": "AMZN",
            	    "Name": "Amazon.com, Inc."
            	  },
            	  {
            	    "Symbol": "AMBC",
            	    "Name": "Ambac Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AMBCW",
            	    "Name": "Ambac Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AMBA",
            	    "Name": "Ambarella, Inc."
            	  },
            	  {
            	    "Symbol": "AMBR",
            	    "Name": "Amber Road, Inc."
            	  },
            	  {
            	    "Symbol": "ABEV",
            	    "Name": "Ambev S.A."
            	  },
            	  {
            	    "Symbol": "DOX",
            	    "Name": "Amdocs Limited"
            	  },
            	  {
            	    "Symbol": "AMFW",
            	    "Name": "Amec Plc Ord"
            	  },
            	  {
            	    "Symbol": "AMDA",
            	    "Name": "Amedica Corporation"
            	  },
            	  {
            	    "Symbol": "AMED",
            	    "Name": "Amedisys Inc"
            	  },
            	  {
            	    "Symbol": "UHAL",
            	    "Name": "Amerco"
            	  },
            	  {
            	    "Symbol": "AEE",
            	    "Name": "Ameren Corporation"
            	  },
            	  {
            	    "Symbol": "AMRC",
            	    "Name": "Ameresco, Inc."
            	  },
            	  {
            	    "Symbol": "APU",
            	    "Name": "AmeriGas Partners, L.P."
            	  },
            	  {
            	    "Symbol": "ASRV",
            	    "Name": "AmeriServ Financial Inc."
            	  },
            	  {
            	    "Symbol": "ASRVP",
            	    "Name": "AmeriServ Financial Inc."
            	  },
            	  {
            	    "Symbol": "ATAX",
            	    "Name": "America First Multifamily Investors, L.P."
            	  },
            	  {
            	    "Symbol": "AMOV",
            	    "Name": "America Movil, S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "AMX",
            	    "Name": "America Movil, S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "CRMT",
            	    "Name": "America&#39;s Car-Mart, Inc."
            	  },
            	  {
            	    "Symbol": "AAL",
            	    "Name": "American Airlines Group, Inc."
            	  },
            	  {
            	    "Symbol": "AAT",
            	    "Name": "American Assets Trust, Inc."
            	  },
            	  {
            	    "Symbol": "AXL",
            	    "Name": "American Axle & Manufacturing Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ACC",
            	    "Name": "American Campus Communities Inc"
            	  },
            	  {
            	    "Symbol": "AGNC",
            	    "Name": "American Capital Agency Corp."
            	  },
            	  {
            	    "Symbol": "AGNCB",
            	    "Name": "American Capital Agency Corp."
            	  },
            	  {
            	    "Symbol": "AGNCP",
            	    "Name": "American Capital Agency Corp."
            	  },
            	  {
            	    "Symbol": "MTGE",
            	    "Name": "American Capital Mortgage Investment Corp."
            	  },
            	  {
            	    "Symbol": "MTGEP",
            	    "Name": "American Capital Mortgage Investment Corp."
            	  },
            	  {
            	    "Symbol": "ACSF",
            	    "Name": "American Capital Senior Floating, Ltd."
            	  },
            	  {
            	    "Symbol": "ACAS",
            	    "Name": "American Capital, Ltd."
            	  },
            	  {
            	    "Symbol": "GNOW",
            	    "Name": "American Caresource Holdings Inc"
            	  },
            	  {
            	    "Symbol": "ADGE",
            	    "Name": "American DG Energy Inc."
            	  },
            	  {
            	    "Symbol": "AEO",
            	    "Name": "American Eagle Outfitters, Inc."
            	  },
            	  {
            	    "Symbol": "AEP",
            	    "Name": "American Electric Power Company, Inc."
            	  },
            	  {
            	    "Symbol": "AETI",
            	    "Name": "American Electric Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "AEL",
            	    "Name": "American Equity Investment Life Holding Company"
            	  },
            	  {
            	    "Symbol": "AXP",
            	    "Name": "American Express Company"
            	  },
            	  {
            	    "Symbol": "AFCO",
            	    "Name": "American Farmland Company"
            	  },
            	  {
            	    "Symbol": "AFA",
            	    "Name": "American Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AFG",
            	    "Name": "American Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AFGE",
            	    "Name": "American Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AFGH",
            	    "Name": "American Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AFW",
            	    "Name": "American Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "AMH",
            	    "Name": "American Homes 4 Rent"
            	  },
            	  {
            	    "Symbol": "AMH^A",
            	    "Name": "American Homes 4 Rent"
            	  },
            	  {
            	    "Symbol": "AMH^B",
            	    "Name": "American Homes 4 Rent"
            	  },
            	  {
            	    "Symbol": "AMH^C",
            	    "Name": "American Homes 4 Rent"
            	  },
            	  {
            	    "Symbol": "AMIC",
            	    "Name": "American Independence Corp."
            	  },
            	  {
            	    "Symbol": "AIG",
            	    "Name": "American International Group, Inc."
            	  },
            	  {
            	    "Symbol": "AIG.WS",
            	    "Name": "American International Group, Inc."
            	  },
            	  {
            	    "Symbol": "ALN",
            	    "Name": "American Lorain Corporation"
            	  },
            	  {
            	    "Symbol": "AMID",
            	    "Name": "American Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "AMNB",
            	    "Name": "American National Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "ANAT",
            	    "Name": "American National Insurance Company"
            	  },
            	  {
            	    "Symbol": "APEI",
            	    "Name": "American Public Education, Inc."
            	  },
            	  {
            	    "Symbol": "ARII",
            	    "Name": "American Railcar Industries, Inc."
            	  },
            	  {
            	    "Symbol": "ARL",
            	    "Name": "American Realty Investors, Inc."
            	  },
            	  {
            	    "Symbol": "AMRB",
            	    "Name": "American River Bankshares"
            	  },
            	  {
            	    "Symbol": "ASEI",
            	    "Name": "American Science and Engineering, Inc."
            	  },
            	  {
            	    "Symbol": "AMS",
            	    "Name": "American Shared Hospital Services"
            	  },
            	  {
            	    "Symbol": "AMSWA",
            	    "Name": "American Software, Inc."
            	  },
            	  {
            	    "Symbol": "AWR",
            	    "Name": "American States Water Company"
            	  },
            	  {
            	    "Symbol": "AMSC",
            	    "Name": "American Superconductor Corporation"
            	  },
            	  {
            	    "Symbol": "AMT",
            	    "Name": "American Tower Corporation (REIT)"
            	  },
            	  {
            	    "Symbol": "AMT^A",
            	    "Name": "American Tower Corporation (REIT)"
            	  },
            	  {
            	    "Symbol": "AMT^B",
            	    "Name": "American Tower Corporation (REIT)"
            	  },
            	  {
            	    "Symbol": "AVD",
            	    "Name": "American Vanguard Corporation"
            	  },
            	  {
            	    "Symbol": "AWK",
            	    "Name": "American Water Works"
            	  },
            	  {
            	    "Symbol": "AMWD",
            	    "Name": "American Woodmark Corporation"
            	  },
            	  {
            	    "Symbol": "ABCB",
            	    "Name": "Ameris Bancorp"
            	  },
            	  {
            	    "Symbol": "ABC",
            	    "Name": "AmerisourceBergen Corporation (Holding Co)"
            	  },
            	  {
            	    "Symbol": "ATLO",
            	    "Name": "Ames National Corporation"
            	  },
            	  {
            	    "Symbol": "AMGN",
            	    "Name": "Amgen Inc."
            	  },
            	  {
            	    "Symbol": "FOLD",
            	    "Name": "Amicus Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ANFI",
            	    "Name": "Amira Nature Foods Ltd"
            	  },
            	  {
            	    "Symbol": "AMKR",
            	    "Name": "Amkor Technology, Inc."
            	  },
            	  {
            	    "Symbol": "AP",
            	    "Name": "Ampco-Pittsburgh Corporation"
            	  },
            	  {
            	    "Symbol": "AMPH",
            	    "Name": "Amphastar Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "APH",
            	    "Name": "Amphenol Corporation"
            	  },
            	  {
            	    "Symbol": "AMPE",
            	    "Name": "Ampio Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "APHB",
            	    "Name": "AmpliPhi Biosciences Corporation"
            	  },
            	  {
            	    "Symbol": "BETR",
            	    "Name": "Amplify Snack Brands, inc."
            	  },
            	  {
            	    "Symbol": "AMSG",
            	    "Name": "Amsurg Corp."
            	  },
            	  {
            	    "Symbol": "AMSGP",
            	    "Name": "Amsurg Corp."
            	  },
            	  {
            	    "Symbol": "ASYS",
            	    "Name": "Amtech Systems, Inc."
            	  },
            	  {
            	    "Symbol": "AMRS",
            	    "Name": "Amyris, Inc."
            	  },
            	  {
            	    "Symbol": "ANAC",
            	    "Name": "Anacor Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "AEUA",
            	    "Name": "Anadarko Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "APC",
            	    "Name": "Anadarko Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "ADI",
            	    "Name": "Analog Devices, Inc."
            	  },
            	  {
            	    "Symbol": "ALOG",
            	    "Name": "Analogic Corporation"
            	  },
            	  {
            	    "Symbol": "AVXL",
            	    "Name": "Anavex Life Sciences Corp."
            	  },
            	  {
            	    "Symbol": "ABCW",
            	    "Name": "Anchor BanCorp Wisconsin Inc."
            	  },
            	  {
            	    "Symbol": "ANCB",
            	    "Name": "Anchor Bancorp"
            	  },
            	  {
            	    "Symbol": "ANDA",
            	    "Name": "Andina Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "ANDAR",
            	    "Name": "Andina Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "ANDAU",
            	    "Name": "Andina Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "ANDAW",
            	    "Name": "Andina Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "ANGI",
            	    "Name": "Angie&#39;s List, Inc."
            	  },
            	  {
            	    "Symbol": "ANGO",
            	    "Name": "AngioDynamics, Inc."
            	  },
            	  {
            	    "Symbol": "AU",
            	    "Name": "AngloGold Ashanti Limited"
            	  },
            	  {
            	    "Symbol": "BUD",
            	    "Name": "Anheuser-Busch Inbev SA"
            	  },
            	  {
            	    "Symbol": "ANIK",
            	    "Name": "Anika Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "AXE",
            	    "Name": "Anixter International Inc."
            	  },
            	  {
            	    "Symbol": "NLY",
            	    "Name": "Annaly Capital Management Inc"
            	  },
            	  {
            	    "Symbol": "NLY^A",
            	    "Name": "Annaly Capital Management Inc"
            	  },
            	  {
            	    "Symbol": "NLY^C",
            	    "Name": "Annaly Capital Management Inc"
            	  },
            	  {
            	    "Symbol": "NLY^D",
            	    "Name": "Annaly Capital Management Inc"
            	  },
            	  {
            	    "Symbol": "ATRS",
            	    "Name": "Antares Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "AM",
            	    "Name": "Antero Midstream Partners LP"
            	  },
            	  {
            	    "Symbol": "AR",
            	    "Name": "Antero Resources Corporation"
            	  },
            	  {
            	    "Symbol": "ANTM",
            	    "Name": "Anthem, Inc."
            	  },
            	  {
            	    "Symbol": "ANTX",
            	    "Name": "Anthem, Inc."
            	  },
            	  {
            	    "Symbol": "ANTH",
            	    "Name": "Anthera Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ANH",
            	    "Name": "Anworth Mortgage Asset  Corporation"
            	  },
            	  {
            	    "Symbol": "ANH^A",
            	    "Name": "Anworth Mortgage Asset  Corporation"
            	  },
            	  {
            	    "Symbol": "ANH^B",
            	    "Name": "Anworth Mortgage Asset  Corporation"
            	  },
            	  {
            	    "Symbol": "ANH^C",
            	    "Name": "Anworth Mortgage Asset  Corporation"
            	  },
            	  {
            	    "Symbol": "AON",
            	    "Name": "Aon plc"
            	  },
            	  {
            	    "Symbol": "ABAC",
            	    "Name": "Aoxin Tianli Group, Inc."
            	  },
            	  {
            	    "Symbol": "AXN",
            	    "Name": "Aoxing Pharmaceutical Company, Inc."
            	  },
            	  {
            	    "Symbol": "APA",
            	    "Name": "Apache Corporation"
            	  },
            	  {
            	    "Symbol": "AIV",
            	    "Name": "Apartment Investment and Management Company"
            	  },
            	  {
            	    "Symbol": "AIV^A",
            	    "Name": "Apartment Investment and Management Company"
            	  },
            	  {
            	    "Symbol": "AIV^Z",
            	    "Name": "Apartment Investment and Management Company"
            	  },
            	  {
            	    "Symbol": "APIC",
            	    "Name": "Apigee Corporation"
            	  },
            	  {
            	    "Symbol": "APOG",
            	    "Name": "Apogee Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "ARI",
            	    "Name": "Apollo Commercial Real Estate Finance"
            	  },
            	  {
            	    "Symbol": "ARI^A",
            	    "Name": "Apollo Commercial Real Estate Finance"
            	  },
            	  {
            	    "Symbol": "APOL",
            	    "Name": "Apollo Education Group, Inc."
            	  },
            	  {
            	    "Symbol": "APO",
            	    "Name": "Apollo Global Management, LLC"
            	  },
            	  {
            	    "Symbol": "AIB",
            	    "Name": "Apollo Investment Corporation"
            	  },
            	  {
            	    "Symbol": "AINV",
            	    "Name": "Apollo Investment Corporation"
            	  },
            	  {
            	    "Symbol": "AIY",
            	    "Name": "Apollo Investment Corporation"
            	  },
            	  {
            	    "Symbol": "AMTG",
            	    "Name": "Apollo Residential Mortgage, Inc."
            	  },
            	  {
            	    "Symbol": "AMTG^A",
            	    "Name": "Apollo Residential Mortgage, Inc."
            	  },
            	  {
            	    "Symbol": "AFT",
            	    "Name": "Apollo Senior Floating Rate Fund Inc."
            	  },
            	  {
            	    "Symbol": "AIF",
            	    "Name": "Apollo Tactical Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "APPF",
            	    "Name": "AppFolio, Inc."
            	  },
            	  {
            	    "Symbol": "APLE",
            	    "Name": "Apple Hospitality REIT, Inc."
            	  },
            	  {
            	    "Symbol": "AAPL",
            	    "Name": "Apple Inc."
            	  },
            	  {
            	    "Symbol": "ARCI",
            	    "Name": "Appliance Recycling Centers of America, Inc."
            	  },
            	  {
            	    "Symbol": "APDN",
            	    "Name": "Applied DNA Sciences Inc"
            	  },
            	  {
            	    "Symbol": "APDNW",
            	    "Name": "Applied DNA Sciences Inc"
            	  },
            	  {
            	    "Symbol": "AGTC",
            	    "Name": "Applied Genetic Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "AIT",
            	    "Name": "Applied Industrial Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "AMAT",
            	    "Name": "Applied Materials, Inc."
            	  },
            	  {
            	    "Symbol": "AMCC",
            	    "Name": "Applied Micro Circuits Corporation"
            	  },
            	  {
            	    "Symbol": "AAOI",
            	    "Name": "Applied Optoelectronics, Inc."
            	  },
            	  {
            	    "Symbol": "AREX",
            	    "Name": "Approach Resources Inc."
            	  },
            	  {
            	    "Symbol": "APRI",
            	    "Name": "Apricus Biosciences, Inc"
            	  },
            	  {
            	    "Symbol": "ATR",
            	    "Name": "AptarGroup, Inc."
            	  },
            	  {
            	    "Symbol": "APTO",
            	    "Name": "Aptose Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "WTR",
            	    "Name": "Aqua America, Inc."
            	  },
            	  {
            	    "Symbol": "AQMS",
            	    "Name": "Aqua Metals, Inc."
            	  },
            	  {
            	    "Symbol": "AQXP",
            	    "Name": "Aquinox Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ARQL",
            	    "Name": "ArQule, Inc."
            	  },
            	  {
            	    "Symbol": "ARDM",
            	    "Name": "Aradigm Corporation"
            	  },
            	  {
            	    "Symbol": "ARLZ",
            	    "Name": "Aralez Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "ARMK",
            	    "Name": "Aramark"
            	  },
            	  {
            	    "Symbol": "PETX",
            	    "Name": "Aratana Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ABR",
            	    "Name": "Arbor Realty Trust"
            	  },
            	  {
            	    "Symbol": "ABRN",
            	    "Name": "Arbor Realty Trust"
            	  },
            	  {
            	    "Symbol": "ABR^A",
            	    "Name": "Arbor Realty Trust"
            	  },
            	  {
            	    "Symbol": "ABR^B",
            	    "Name": "Arbor Realty Trust"
            	  },
            	  {
            	    "Symbol": "ABR^C",
            	    "Name": "Arbor Realty Trust"
            	  },
            	  {
            	    "Symbol": "ABUS",
            	    "Name": "Arbutus Biopharma Corporation"
            	  },
            	  {
            	    "Symbol": "ARCX",
            	    "Name": "Arc Logistic Partners LP"
            	  },
            	  {
            	    "Symbol": "ARCB",
            	    "Name": "ArcBest Corporation"
            	  },
            	  {
            	    "Symbol": "RKDA",
            	    "Name": "Arcadia Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "MT",
            	    "Name": "ArcelorMittal"
            	  },
            	  {
            	    "Symbol": "MT.WS",
            	    "Name": "ArcelorMittal"
            	  },
            	  {
            	    "Symbol": "ACGL",
            	    "Name": "Arch Capital Group Ltd."
            	  },
            	  {
            	    "Symbol": "ARH^C",
            	    "Name": "Arch Capital Group Ltd."
            	  },
            	  {
            	    "Symbol": "ADM",
            	    "Name": "Archer-Daniels-Midland Company"
            	  },
            	  {
            	    "Symbol": "APLP",
            	    "Name": "Archrock Partners, L.P."
            	  },
            	  {
            	    "Symbol": "AROC",
            	    "Name": "Archrock, Inc."
            	  },
            	  {
            	    "Symbol": "ARCO",
            	    "Name": "Arcos Dorados Holdings Inc."
            	  },
            	  {
            	    "Symbol": "ACAT",
            	    "Name": "Arctic Cat Inc."
            	  },
            	  {
            	    "Symbol": "ARDX",
            	    "Name": "Ardelyx, Inc."
            	  },
            	  {
            	    "Symbol": "ASC",
            	    "Name": "Ardmore Shipping Corporation"
            	  },
            	  {
            	    "Symbol": "ARNA",
            	    "Name": "Arena Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "AFC",
            	    "Name": "Ares Capital Corporation"
            	  },
            	  {
            	    "Symbol": "ARCC",
            	    "Name": "Ares Capital Corporation"
            	  },
            	  {
            	    "Symbol": "ARU",
            	    "Name": "Ares Capital Corporation"
            	  },
            	  {
            	    "Symbol": "ACRE",
            	    "Name": "Ares Commercial Real Estate Corporation"
            	  },
            	  {
            	    "Symbol": "ARDC",
            	    "Name": "Ares Dynamic Credit Allocation Fund, Inc."
            	  },
            	  {
            	    "Symbol": "ARES",
            	    "Name": "Ares Management L.P."
            	  },
            	  {
            	    "Symbol": "AGX",
            	    "Name": "Argan, Inc."
            	  },
            	  {
            	    "Symbol": "AGII",
            	    "Name": "Argo Group International Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "AGIIL",
            	    "Name": "Argo Group International Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "ARGS",
            	    "Name": "Argos Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ANET",
            	    "Name": "Arista Networks, Inc."
            	  },
            	  {
            	    "Symbol": "ARKR",
            	    "Name": "Ark Restaurants Corp."
            	  },
            	  {
            	    "Symbol": "AI",
            	    "Name": "Arlington Asset Investment Corp"
            	  },
            	  {
            	    "Symbol": "AIC",
            	    "Name": "Arlington Asset Investment Corp"
            	  },
            	  {
            	    "Symbol": "AIW",
            	    "Name": "Arlington Asset Investment Corp"
            	  },
            	  {
            	    "Symbol": "AHH",
            	    "Name": "Armada Hoffler Properties, Inc."
            	  },
            	  {
            	    "Symbol": "AMCO",
            	    "Name": "Armco Metals Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "AFI$",
            	    "Name": "Armstrong Flooring, Inc."
            	  },
            	  {
            	    "Symbol": "AWI",
            	    "Name": "Armstrong World Industries Inc"
            	  },
            	  {
            	    "Symbol": "AWI$",
            	    "Name": "Armstrong World Industries Inc"
            	  },
            	  {
            	    "Symbol": "ARTX",
            	    "Name": "Arotech Corporation"
            	  },
            	  {
            	    "Symbol": "ARWA",
            	    "Name": "Arowana Inc."
            	  },
            	  {
            	    "Symbol": "ARWAR",
            	    "Name": "Arowana Inc."
            	  },
            	  {
            	    "Symbol": "ARWAU",
            	    "Name": "Arowana Inc."
            	  },
            	  {
            	    "Symbol": "ARWAW",
            	    "Name": "Arowana Inc."
            	  },
            	  {
            	    "Symbol": "ARRY",
            	    "Name": "Array BioPharma Inc."
            	  },
            	  {
            	    "Symbol": "HRT",
            	    "Name": "Arrhythmia Research Technology Inc."
            	  },
            	  {
            	    "Symbol": "DWAT",
            	    "Name": "Arrow DWA Tactical ETF"
            	  },
            	  {
            	    "Symbol": "ARW",
            	    "Name": "Arrow Electronics, Inc."
            	  },
            	  {
            	    "Symbol": "AROW",
            	    "Name": "Arrow Financial Corporation"
            	  },
            	  {
            	    "Symbol": "ARWR",
            	    "Name": "Arrowhead Research Corporation"
            	  },
            	  {
            	    "Symbol": "ARTW",
            	    "Name": "Art&#39;s-Way Manufacturing Co., Inc."
            	  },
            	  {
            	    "Symbol": "ARTNA",
            	    "Name": "Artesian Resources Corporation"
            	  },
            	  {
            	    "Symbol": "AJG",
            	    "Name": "Arthur J. Gallagher & Co."
            	  },
            	  {
            	    "Symbol": "APAM",
            	    "Name": "Artisan Partners Asset Management Inc."
            	  },
            	  {
            	    "Symbol": "AKG",
            	    "Name": "Asanko Gold Inc."
            	  },
            	  {
            	    "Symbol": "ABG",
            	    "Name": "Asbury Automotive Group Inc"
            	  },
            	  {
            	    "Symbol": "ASNA",
            	    "Name": "Ascena Retail Group, Inc."
            	  },
            	  {
            	    "Symbol": "ASND",
            	    "Name": "Ascendis Pharma A\/S"
            	  },
            	  {
            	    "Symbol": "ASCMA",
            	    "Name": "Ascent Capital Group, Inc."
            	  },
            	  {
            	    "Symbol": "AHP",
            	    "Name": "Ashford Hospitality Prime, Inc."
            	  },
            	  {
            	    "Symbol": "AHT",
            	    "Name": "Ashford Hospitality Trust Inc"
            	  },
            	  {
            	    "Symbol": "AHT^A",
            	    "Name": "Ashford Hospitality Trust Inc"
            	  },
            	  {
            	    "Symbol": "AHT^D",
            	    "Name": "Ashford Hospitality Trust Inc"
            	  },
            	  {
            	    "Symbol": "AHT^E",
            	    "Name": "Ashford Hospitality Trust Inc"
            	  },
            	  {
            	    "Symbol": "AINC",
            	    "Name": "Ashford Inc."
            	  },
            	  {
            	    "Symbol": "ASH",
            	    "Name": "Ashland Inc."
            	  },
            	  {
            	    "Symbol": "APB",
            	    "Name": "Asia Pacific Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "APWC",
            	    "Name": "Asia Pacific Wire & Cable Corporation Limited"
            	  },
            	  {
            	    "Symbol": "GRR",
            	    "Name": "Asia Tigers Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "ASPN",
            	    "Name": "Aspen Aerogels, Inc."
            	  },
            	  {
            	    "Symbol": "AHL",
            	    "Name": "Aspen Insurance Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AHL^A",
            	    "Name": "Aspen Insurance Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AHL^B",
            	    "Name": "Aspen Insurance Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AHL^C",
            	    "Name": "Aspen Insurance Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AZPN",
            	    "Name": "Aspen Technology, Inc."
            	  },
            	  {
            	    "Symbol": "ASMB",
            	    "Name": "Assembly Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "ASB",
            	    "Name": "Associated Banc-Corp"
            	  },
            	  {
            	    "Symbol": "ASB.WS",
            	    "Name": "Associated Banc-Corp"
            	  },
            	  {
            	    "Symbol": "ASB^B",
            	    "Name": "Associated Banc-Corp"
            	  },
            	  {
            	    "Symbol": "ASB^C",
            	    "Name": "Associated Banc-Corp"
            	  },
            	  {
            	    "Symbol": "AC",
            	    "Name": "Associated Capital Group, Inc."
            	  },
            	  {
            	    "Symbol": "AIZ",
            	    "Name": "Assurant, Inc."
            	  },
            	  {
            	    "Symbol": "AGO",
            	    "Name": "Assured Guaranty Ltd."
            	  },
            	  {
            	    "Symbol": "AGO^B",
            	    "Name": "Assured Guaranty Ltd."
            	  },
            	  {
            	    "Symbol": "AGO^E",
            	    "Name": "Assured Guaranty Ltd."
            	  },
            	  {
            	    "Symbol": "AGO^F",
            	    "Name": "Assured Guaranty Ltd."
            	  },
            	  {
            	    "Symbol": "ASFI",
            	    "Name": "Asta Funding, Inc."
            	  },
            	  {
            	    "Symbol": "ASTE",
            	    "Name": "Astec Industries, Inc."
            	  },
            	  {
            	    "Symbol": "AST",
            	    "Name": "Asterias Biotherapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "AF",
            	    "Name": "Astoria Financial Corporation"
            	  },
            	  {
            	    "Symbol": "AF^C",
            	    "Name": "Astoria Financial Corporation"
            	  },
            	  {
            	    "Symbol": "AZN",
            	    "Name": "Astrazeneca PLC"
            	  },
            	  {
            	    "Symbol": "ALOT",
            	    "Name": "Astro-Med, Inc."
            	  },
            	  {
            	    "Symbol": "ATRO",
            	    "Name": "Astronics Corporation"
            	  },
            	  {
            	    "Symbol": "ASTC",
            	    "Name": "Astrotech Corporation"
            	  },
            	  {
            	    "Symbol": "ASUR",
            	    "Name": "Asure Software Inc"
            	  },
            	  {
            	    "Symbol": "ATRA",
            	    "Name": "Atara Biotherapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ATTO",
            	    "Name": "Atento S.A."
            	  },
            	  {
            	    "Symbol": "ATHX",
            	    "Name": "Athersys, Inc."
            	  },
            	  {
            	    "Symbol": "AAPC",
            	    "Name": "Atlantic Alliance Partnership Corp."
            	  },
            	  {
            	    "Symbol": "AAME",
            	    "Name": "Atlantic American Corporation"
            	  },
            	  {
            	    "Symbol": "ACBI",
            	    "Name": "Atlantic Capital Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "ACFC",
            	    "Name": "Atlantic Coast Financial Corporation"
            	  },
            	  {
            	    "Symbol": "AT",
            	    "Name": "Atlantic Power Corporation"
            	  },
            	  {
            	    "Symbol": "ATNI",
            	    "Name": "Atlantic Tele-Network, Inc."
            	  },
            	  {
            	    "Symbol": "ATLC",
            	    "Name": "Atlanticus Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "AAWW",
            	    "Name": "Atlas Air Worldwide Holdings"
            	  },
            	  {
            	    "Symbol": "AFH",
            	    "Name": "Atlas Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ARP",
            	    "Name": "Atlas Resource Partners, L.P."
            	  },
            	  {
            	    "Symbol": "ARP^D",
            	    "Name": "Atlas Resource Partners, L.P."
            	  },
            	  {
            	    "Symbol": "ARP^E",
            	    "Name": "Atlas Resource Partners, L.P."
            	  },
            	  {
            	    "Symbol": "TEAM",
            	    "Name": "Atlassian Corporation Plc"
            	  },
            	  {
            	    "Symbol": "ATML",
            	    "Name": "Atmel Corporation"
            	  },
            	  {
            	    "Symbol": "ATO",
            	    "Name": "Atmos Energy Corporation"
            	  },
            	  {
            	    "Symbol": "ATOS",
            	    "Name": "Atossa Genetics Inc."
            	  },
            	  {
            	    "Symbol": "ATRC",
            	    "Name": "AtriCure, Inc."
            	  },
            	  {
            	    "Symbol": "ATTU",
            	    "Name": "Attunity Ltd."
            	  },
            	  {
            	    "Symbol": "ATW",
            	    "Name": "Atwood Oceanics, Inc."
            	  },
            	  {
            	    "Symbol": "AUBN",
            	    "Name": "Auburn National Bancorporation, Inc."
            	  },
            	  {
            	    "Symbol": "AUDC",
            	    "Name": "AudioCodes Ltd."
            	  },
            	  {
            	    "Symbol": "AUPH",
            	    "Name": "Aurinia Pharmaceuticals Inc"
            	  },
            	  {
            	    "Symbol": "EARS",
            	    "Name": "Auris Medical Holding AG"
            	  },
            	  {
            	    "Symbol": "AN",
            	    "Name": "AutoNation, Inc."
            	  },
            	  {
            	    "Symbol": "AZO",
            	    "Name": "AutoZone, Inc."
            	  },
            	  {
            	    "Symbol": "ABTL",
            	    "Name": "Autobytel Inc."
            	  },
            	  {
            	    "Symbol": "ADSK",
            	    "Name": "Autodesk, Inc."
            	  },
            	  {
            	    "Symbol": "ATHM",
            	    "Name": "Autohome Inc."
            	  },
            	  {
            	    "Symbol": "ALV",
            	    "Name": "Autoliv, Inc."
            	  },
            	  {
            	    "Symbol": "ADP",
            	    "Name": "Automatic Data Processing, Inc."
            	  },
            	  {
            	    "Symbol": "AAVL",
            	    "Name": "Avalanche Biotechnologies, Inc."
            	  },
            	  {
            	    "Symbol": "AWX",
            	    "Name": "Avalon Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "AVB",
            	    "Name": "AvalonBay Communities, Inc."
            	  },
            	  {
            	    "Symbol": "AGR",
            	    "Name": "Avangrid, Inc."
            	  },
            	  {
            	    "Symbol": "AVXS",
            	    "Name": "AveXis, Inc."
            	  },
            	  {
            	    "Symbol": "AVNU",
            	    "Name": "Avenue Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ACP",
            	    "Name": "Avenue Income Credit Strategies Fund"
            	  },
            	  {
            	    "Symbol": "AVY",
            	    "Name": "Avery Dennison Corporation"
            	  },
            	  {
            	    "Symbol": "AVH",
            	    "Name": "Avianca Holdings S.A."
            	  },
            	  {
            	    "Symbol": "AVNW",
            	    "Name": "Aviat Networks, Inc."
            	  },
            	  {
            	    "Symbol": "AVID",
            	    "Name": "Avid Technology, Inc."
            	  },
            	  {
            	    "Symbol": "AVGR",
            	    "Name": "Avinger, Inc."
            	  },
            	  {
            	    "Symbol": "ASM",
            	    "Name": "Avino Silver"
            	  },
            	  {
            	    "Symbol": "CAR",
            	    "Name": "Avis Budget Group, Inc."
            	  },
            	  {
            	    "Symbol": "AVA",
            	    "Name": "Avista Corporation"
            	  },
            	  {
            	    "Symbol": "AV",
            	    "Name": "Aviva plc"
            	  },
            	  {
            	    "Symbol": "AVV",
            	    "Name": "Aviva plc"
            	  },
            	  {
            	    "Symbol": "AVT",
            	    "Name": "Avnet, Inc."
            	  },
            	  {
            	    "Symbol": "AVP",
            	    "Name": "Avon Products, Inc."
            	  },
            	  {
            	    "Symbol": "AWRE",
            	    "Name": "Aware, Inc."
            	  },
            	  {
            	    "Symbol": "AXTA",
            	    "Name": "Axalta Coating Systems Ltd."
            	  },
            	  {
            	    "Symbol": "ACLS",
            	    "Name": "Axcelis Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "AXLL",
            	    "Name": "Axiall Corporation"
            	  },
            	  {
            	    "Symbol": "AXS",
            	    "Name": "Axis Capital Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AXS^C",
            	    "Name": "Axis Capital Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AXS^D",
            	    "Name": "Axis Capital Holdings Limited"
            	  },
            	  {
            	    "Symbol": "AXGN",
            	    "Name": "AxoGen, Inc."
            	  },
            	  {
            	    "Symbol": "AXSM",
            	    "Name": "Axsome Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "AZUR",
            	    "Name": "Azure Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "BCOM",
            	    "Name": "B Communications Ltd."
            	  },
            	  {
            	    "Symbol": "BGS",
            	    "Name": "B&G Foods, Inc."
            	  },
            	  {
            	    "Symbol": "RILY",
            	    "Name": "B. Riley Financial, Inc."
            	  },
            	  {
            	    "Symbol": "BOSC",
            	    "Name": "B.O.S. Better Online Solutions"
            	  },
            	  {
            	    "Symbol": "BEAV",
            	    "Name": "B\/E Aerospace, Inc."
            	  },
            	  {
            	    "Symbol": "BTG",
            	    "Name": "B2Gold Corp"
            	  },
            	  {
            	    "Symbol": "BAA",
            	    "Name": "BANRO CORPORATION"
            	  },
            	  {
            	    "Symbol": "BBT",
            	    "Name": "BB&T Corporation"
            	  },
            	  {
            	    "Symbol": "BBT^D",
            	    "Name": "BB&T Corporation"
            	  },
            	  {
            	    "Symbol": "BBT^E",
            	    "Name": "BB&T Corporation"
            	  },
            	  {
            	    "Symbol": "BBT^F",
            	    "Name": "BB&T Corporation"
            	  },
            	  {
            	    "Symbol": "BBT^G",
            	    "Name": "BB&T Corporation"
            	  },
            	  {
            	    "Symbol": "BBT^H",
            	    "Name": "BB&T Corporation"
            	  },
            	  {
            	    "Symbol": "BBCN",
            	    "Name": "BBCN Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BFR",
            	    "Name": "BBVA Banco Frances S.A."
            	  },
            	  {
            	    "Symbol": "BBX",
            	    "Name": "BBX Capital Corporation"
            	  },
            	  {
            	    "Symbol": "BCBP",
            	    "Name": "BCB Bancorp, Inc. (NJ)"
            	  },
            	  {
            	    "Symbol": "BCE",
            	    "Name": "BCE, Inc."
            	  },
            	  {
            	    "Symbol": "BGSF",
            	    "Name": "BG Staffing Inc"
            	  },
            	  {
            	    "Symbol": "BGCA",
            	    "Name": "BGC Partners, Inc."
            	  },
            	  {
            	    "Symbol": "BGCP",
            	    "Name": "BGC Partners, Inc."
            	  },
            	  {
            	    "Symbol": "BHP",
            	    "Name": "BHP Billiton Limited"
            	  },
            	  {
            	    "Symbol": "BBL",
            	    "Name": "BHP Billiton plc"
            	  },
            	  {
            	    "Symbol": "BIND",
            	    "Name": "BIND Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "BJRI",
            	    "Name": "BJ&#39;s Restaurants, Inc."
            	  },
            	  {
            	    "Symbol": "BGY",
            	    "Name": "BLACKROCK INTERNATIONAL, LTD."
            	  },
            	  {
            	    "Symbol": "ADRA",
            	    "Name": "BLDRS Asia 50 ADR Index Fund"
            	  },
            	  {
            	    "Symbol": "ADRD",
            	    "Name": "BLDRS Developed Markets 100 ADR Index Fund"
            	  },
            	  {
            	    "Symbol": "ADRE",
            	    "Name": "BLDRS Emerging Markets 50 ADR Index Fund"
            	  },
            	  {
            	    "Symbol": "ADRU",
            	    "Name": "BLDRS Europe 100 ADR Index Fund"
            	  },
            	  {
            	    "Symbol": "STCK",
            	    "Name": "BMC Stock Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BNCN",
            	    "Name": "BNC Bancorp"
            	  },
            	  {
            	    "Symbol": "BOKF",
            	    "Name": "BOK Financial Corporation"
            	  },
            	  {
            	    "Symbol": "BPT",
            	    "Name": "BP Prudhoe Bay Royalty Trust"
            	  },
            	  {
            	    "Symbol": "BP",
            	    "Name": "BP p.l.c."
            	  },
            	  {
            	    "Symbol": "BERY",
            	    "Name": "BPC Acquisition Corp"
            	  },
            	  {
            	    "Symbol": "BRFS",
            	    "Name": "BRF S.A."
            	  },
            	  {
            	    "Symbol": "BRT",
            	    "Name": "BRT Realty Trust"
            	  },
            	  {
            	    "Symbol": "BLMT",
            	    "Name": "BSB Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BSQR",
            	    "Name": "BSQUARE Corporation"
            	  },
            	  {
            	    "Symbol": "BT",
            	    "Name": "BT Group plc"
            	  },
            	  {
            	    "Symbol": "BWXT",
            	    "Name": "BWX Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "BW",
            	    "Name": "Babcock"
            	  },
            	  {
            	    "Symbol": "MCI",
            	    "Name": "Babson Capital Corporate Investors"
            	  },
            	  {
            	    "Symbol": "BGH",
            	    "Name": "Babson Capital Global Short Duration High Yield Fund"
            	  },
            	  {
            	    "Symbol": "MPV",
            	    "Name": "Babson Capital Participation Investors"
            	  },
            	  {
            	    "Symbol": "BMI",
            	    "Name": "Badger Meter, Inc."
            	  },
            	  {
            	    "Symbol": "BIDU",
            	    "Name": "Baidu, Inc."
            	  },
            	  {
            	    "Symbol": "BHI",
            	    "Name": "Baker Hughes Incorporated"
            	  },
            	  {
            	    "Symbol": "BCPC",
            	    "Name": "Balchem Corporation"
            	  },
            	  {
            	    "Symbol": "BBN",
            	    "Name": "BalckRock Taxable Municipal Bond Trust"
            	  },
            	  {
            	    "Symbol": "BWINA",
            	    "Name": "Baldwin & Lyons, Inc."
            	  },
            	  {
            	    "Symbol": "BWINB",
            	    "Name": "Baldwin & Lyons, Inc."
            	  },
            	  {
            	    "Symbol": "BLL",
            	    "Name": "Ball Corporation"
            	  },
            	  {
            	    "Symbol": "BTN",
            	    "Name": "Ballantyne Strong, Inc"
            	  },
            	  {
            	    "Symbol": "BLDP",
            	    "Name": "Ballard Power Systems, Inc."
            	  },
            	  {
            	    "Symbol": "BGE^B",
            	    "Name": "Baltimore Gas & Electric Company"
            	  },
            	  {
            	    "Symbol": "CIB",
            	    "Name": "BanColombia S.A."
            	  },
            	  {
            	    "Symbol": "BANC",
            	    "Name": "Banc of California, Inc."
            	  },
            	  {
            	    "Symbol": "BANC^C",
            	    "Name": "Banc of California, Inc."
            	  },
            	  {
            	    "Symbol": "BANC^D",
            	    "Name": "Banc of California, Inc."
            	  },
            	  {
            	    "Symbol": "BANC^E",
            	    "Name": "Banc of California, Inc."
            	  },
            	  {
            	    "Symbol": "BOCA.CL",
            	    "Name": "Banc of California, Inc."
            	  },
            	  {
            	    "Symbol": "BANF",
            	    "Name": "BancFirst Corporation"
            	  },
            	  {
            	    "Symbol": "BANFP",
            	    "Name": "BancFirst Corporation"
            	  },
            	  {
            	    "Symbol": "BBVA",
            	    "Name": "Banco Bilbao Viscaya Argentaria S.A."
            	  },
            	  {
            	    "Symbol": "BBD",
            	    "Name": "Banco Bradesco Sa"
            	  },
            	  {
            	    "Symbol": "BBDO",
            	    "Name": "Banco Bradesco Sa"
            	  },
            	  {
            	    "Symbol": "BCH",
            	    "Name": "Banco De Chile"
            	  },
            	  {
            	    "Symbol": "BLX",
            	    "Name": "Banco Latinoamericano de Comercio Exterior, S.A."
            	  },
            	  {
            	    "Symbol": "BSBR",
            	    "Name": "Banco Santander Brasil SA"
            	  },
            	  {
            	    "Symbol": "BSAC",
            	    "Name": "Banco Santander Chile"
            	  },
            	  {
            	    "Symbol": "SAN",
            	    "Name": "Banco Santander, S.A."
            	  },
            	  {
            	    "Symbol": "SAN^A",
            	    "Name": "Banco Santander, S.A."
            	  },
            	  {
            	    "Symbol": "SAN^B",
            	    "Name": "Banco Santander, S.A."
            	  },
            	  {
            	    "Symbol": "SAN^C",
            	    "Name": "Banco Santander, S.A."
            	  },
            	  {
            	    "Symbol": "SAN^I",
            	    "Name": "Banco Santander, S.A."
            	  },
            	  {
            	    "Symbol": "BKJ",
            	    "Name": "Bancorp of New Jersey, Inc"
            	  },
            	  {
            	    "Symbol": "BXS",
            	    "Name": "BancorpSouth, Inc."
            	  },
            	  {
            	    "Symbol": "BCV",
            	    "Name": "Bancroft Fund Limited"
            	  },
            	  {
            	    "Symbol": "BKMU",
            	    "Name": "Bank Mutual Corporation"
            	  },
            	  {
            	    "Symbol": "BMO",
            	    "Name": "Bank Of Montreal"
            	  },
            	  {
            	    "Symbol": "BK",
            	    "Name": "Bank Of New York Mellon Corporation (The)"
            	  },
            	  {
            	    "Symbol": "BK^C",
            	    "Name": "Bank Of New York Mellon Corporation (The)"
            	  },
            	  {
            	    "Symbol": "BAC",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC.WS.A",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC.WS.B",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^C",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^D",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^E",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^I",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^L",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^W",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^Y",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BAC^Z",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BML^G",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BML^H",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BML^I",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BML^J",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BML^L",
            	    "Name": "Bank of America Corporation"
            	  },
            	  {
            	    "Symbol": "BOCH",
            	    "Name": "Bank of Commerce Holdings (CA)"
            	  },
            	  {
            	    "Symbol": "BOH",
            	    "Name": "Bank of Hawaii Corporation"
            	  },
            	  {
            	    "Symbol": "BMRC",
            	    "Name": "Bank of Marin Bancorp"
            	  },
            	  {
            	    "Symbol": "BNS",
            	    "Name": "Bank of Nova Scotia (The)"
            	  },
            	  {
            	    "Symbol": "BKSC",
            	    "Name": "Bank of South Carolina Corp."
            	  },
            	  {
            	    "Symbol": "BOTJ",
            	    "Name": "Bank of the James Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "OZRK",
            	    "Name": "Bank of the Ozarks"
            	  },
            	  {
            	    "Symbol": "BFIN",
            	    "Name": "BankFinancial Corporation"
            	  },
            	  {
            	    "Symbol": "BKU",
            	    "Name": "BankUnited, Inc."
            	  },
            	  {
            	    "Symbol": "RATE",
            	    "Name": "Bankrate, Inc."
            	  },
            	  {
            	    "Symbol": "BWFG",
            	    "Name": "Bankwell Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "BANR",
            	    "Name": "Banner Corporation"
            	  },
            	  {
            	    "Symbol": "BZUN",
            	    "Name": "Baozun Inc."
            	  },
            	  {
            	    "Symbol": "BHB",
            	    "Name": "Bar Harbor Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "BCS",
            	    "Name": "Barclays PLC"
            	  },
            	  {
            	    "Symbol": "BCS^",
            	    "Name": "Barclays PLC"
            	  },
            	  {
            	    "Symbol": "BCS^A",
            	    "Name": "Barclays PLC"
            	  },
            	  {
            	    "Symbol": "BCS^C",
            	    "Name": "Barclays PLC"
            	  },
            	  {
            	    "Symbol": "BCS^D",
            	    "Name": "Barclays PLC"
            	  },
            	  {
            	    "Symbol": "BHAC",
            	    "Name": "Barington\/Hilco Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "BHACR",
            	    "Name": "Barington\/Hilco Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "BHACU",
            	    "Name": "Barington\/Hilco Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "BHACW",
            	    "Name": "Barington\/Hilco Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "BNED",
            	    "Name": "Barnes & Noble Education, Inc"
            	  },
            	  {
            	    "Symbol": "BKS",
            	    "Name": "Barnes & Noble, Inc."
            	  },
            	  {
            	    "Symbol": "B",
            	    "Name": "Barnes Group, Inc."
            	  },
            	  {
            	    "Symbol": "BRN",
            	    "Name": "Barnwell Industries, Inc."
            	  },
            	  {
            	    "Symbol": "CUDA",
            	    "Name": "Barracuda Networks, Inc."
            	  },
            	  {
            	    "Symbol": "BBSI",
            	    "Name": "Barrett Business Services, Inc."
            	  },
            	  {
            	    "Symbol": "ABX",
            	    "Name": "Barrick Gold Corporation"
            	  },
            	  {
            	    "Symbol": "BAS",
            	    "Name": "Basic Energy Services, Inc."
            	  },
            	  {
            	    "Symbol": "BSET",
            	    "Name": "Bassett Furniture Industries, Incorporated"
            	  },
            	  {
            	    "Symbol": "BXLT",
            	    "Name": "Baxalta Incorporated"
            	  },
            	  {
            	    "Symbol": "BAX",
            	    "Name": "Baxter International Inc."
            	  },
            	  {
            	    "Symbol": "BYBK",
            	    "Name": "Bay Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BYLK",
            	    "Name": "Baylake Corp"
            	  },
            	  {
            	    "Symbol": "BTE",
            	    "Name": "Baytex Energy Corp"
            	  },
            	  {
            	    "Symbol": "BV",
            	    "Name": "Bazaarvoice, Inc."
            	  },
            	  {
            	    "Symbol": "BECN",
            	    "Name": "Beacon Roofing Supply, Inc."
            	  },
            	  {
            	    "Symbol": "BSF",
            	    "Name": "Bear State Financial, Inc."
            	  },
            	  {
            	    "Symbol": "TZF.CL",
            	    "Name": "Bear Stearns Depositor, Inc."
            	  },
            	  {
            	    "Symbol": "BBGI",
            	    "Name": "Beasley Broadcast Group, Inc."
            	  },
            	  {
            	    "Symbol": "BZH",
            	    "Name": "Beazer Homes USA, Inc."
            	  },
            	  {
            	    "Symbol": "BDX",
            	    "Name": "Becton, Dickinson and Company"
            	  },
            	  {
            	    "Symbol": "BBBY",
            	    "Name": "Bed Bath & Beyond Inc."
            	  },
            	  {
            	    "Symbol": "BGNE",
            	    "Name": "BeiGene, Ltd."
            	  },
            	  {
            	    "Symbol": "BELFA",
            	    "Name": "Bel Fuse Inc."
            	  },
            	  {
            	    "Symbol": "BELFB",
            	    "Name": "Bel Fuse Inc."
            	  },
            	  {
            	    "Symbol": "BDC",
            	    "Name": "Belden Inc"
            	  },
            	  {
            	    "Symbol": "BXE",
            	    "Name": "Bellatrix Exploration Ltd"
            	  },
            	  {
            	    "Symbol": "BLPH",
            	    "Name": "Bellerophon Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "BLCM",
            	    "Name": "Bellicum Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "BEL",
            	    "Name": "Belmond Ltd."
            	  },
            	  {
            	    "Symbol": "BMS",
            	    "Name": "Bemis Company, Inc."
            	  },
            	  {
            	    "Symbol": "BHE",
            	    "Name": "Benchmark Electronics, Inc."
            	  },
            	  {
            	    "Symbol": "BNCL",
            	    "Name": "Beneficial Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BNFT",
            	    "Name": "Benefitfocus, Inc."
            	  },
            	  {
            	    "Symbol": "BNTC",
            	    "Name": "Benitec Biopharma Limited"
            	  },
            	  {
            	    "Symbol": "BNTCW",
            	    "Name": "Benitec Biopharma Limited"
            	  },
            	  {
            	    "Symbol": "BRK.A",
            	    "Name": "Berkshire Hathaway Inc."
            	  },
            	  {
            	    "Symbol": "BRK.B",
            	    "Name": "Berkshire Hathaway Inc."
            	  },
            	  {
            	    "Symbol": "BHLB",
            	    "Name": "Berkshire Hills Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BBY",
            	    "Name": "Best Buy Co., Inc."
            	  },
            	  {
            	    "Symbol": "BGFV",
            	    "Name": "Big 5 Sporting Goods Corporation"
            	  },
            	  {
            	    "Symbol": "BIG",
            	    "Name": "Big Lots, Inc."
            	  },
            	  {
            	    "Symbol": "BH",
            	    "Name": "Biglari Holdings Inc."
            	  },
            	  {
            	    "Symbol": "BBG",
            	    "Name": "Bill Barrett Corporation"
            	  },
            	  {
            	    "Symbol": "ORPN",
            	    "Name": "Bio Blast Pharma Ltd."
            	  },
            	  {
            	    "Symbol": "BPTH",
            	    "Name": "Bio-Path Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BIO",
            	    "Name": "Bio-Rad Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "BIO.B",
            	    "Name": "Bio-Rad Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "TECH",
            	    "Name": "Bio-Techne Corp"
            	  },
            	  {
            	    "Symbol": "BIOA",
            	    "Name": "BioAmber Inc."
            	  },
            	  {
            	    "Symbol": "BIOA.WS",
            	    "Name": "BioAmber Inc."
            	  },
            	  {
            	    "Symbol": "BCRX",
            	    "Name": "BioCryst Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "BDSI",
            	    "Name": "BioDelivery Sciences International, Inc."
            	  },
            	  {
            	    "Symbol": "BLFS",
            	    "Name": "BioLife Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "BLRX",
            	    "Name": "BioLineRx Ltd."
            	  },
            	  {
            	    "Symbol": "BMRN",
            	    "Name": "BioMarin Pharmaceutical Inc."
            	  },
            	  {
            	    "Symbol": "BPMX",
            	    "Name": "BioPharmX Corporation"
            	  },
            	  {
            	    "Symbol": "BIOS",
            	    "Name": "BioScrip, Inc."
            	  },
            	  {
            	    "Symbol": "BBC",
            	    "Name": "BioShares Biotechnology Clinical Trials Fund"
            	  },
            	  {
            	    "Symbol": "BBP",
            	    "Name": "BioShares Biotechnology Products Fund"
            	  },
            	  {
            	    "Symbol": "BSTC",
            	    "Name": "BioSpecifics Technologies Corp"
            	  },
            	  {
            	    "Symbol": "BEAT",
            	    "Name": "BioTelemetry, Inc."
            	  },
            	  {
            	    "Symbol": "BTX",
            	    "Name": "BioTime, Inc."
            	  },
            	  {
            	    "Symbol": "BTX.WS",
            	    "Name": "BioTime, Inc."
            	  },
            	  {
            	    "Symbol": "BASI",
            	    "Name": "Bioanalytical Systems, Inc."
            	  },
            	  {
            	    "Symbol": "BIOC",
            	    "Name": "Biocept, Inc."
            	  },
            	  {
            	    "Symbol": "BIOD",
            	    "Name": "Biodel Inc."
            	  },
            	  {
            	    "Symbol": "BIIB",
            	    "Name": "Biogen Inc."
            	  },
            	  {
            	    "Symbol": "BIOL",
            	    "Name": "Biolase, Inc."
            	  },
            	  {
            	    "Symbol": "BVXV",
            	    "Name": "BiondVax Pharmaceuticals Ltd."
            	  },
            	  {
            	    "Symbol": "BVXVW",
            	    "Name": "BiondVax Pharmaceuticals Ltd."
            	  },
            	  {
            	    "Symbol": "BSPM",
            	    "Name": "Biostar Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "BOTA",
            	    "Name": "Biota Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "BITI",
            	    "Name": "Biotie Therapies Corp."
            	  },
            	  {
            	    "Symbol": "BGI",
            	    "Name": "Birks Group Inc."
            	  },
            	  {
            	    "Symbol": "BDMS",
            	    "Name": "Birner Dental Management Services, Inc."
            	  },
            	  {
            	    "Symbol": "BITA",
            	    "Name": "Bitauto Holdings Limited"
            	  },
            	  {
            	    "Symbol": "BBOX",
            	    "Name": "Black Box Corporation"
            	  },
            	  {
            	    "Symbol": "BDE",
            	    "Name": "Black Diamond, Inc."
            	  },
            	  {
            	    "Symbol": "BKH",
            	    "Name": "Black Hills Corporation"
            	  },
            	  {
            	    "Symbol": "BKHU",
            	    "Name": "Black Hills Corporation"
            	  },
            	  {
            	    "Symbol": "BKFS",
            	    "Name": "Black Knight Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "BSM",
            	    "Name": "Black Stone Minerals, L.P."
            	  },
            	  {
            	    "Symbol": "BBRY",
            	    "Name": "BlackBerry Limited"
            	  },
            	  {
            	    "Symbol": "BFZ",
            	    "Name": "BlackRock California Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "BKCC",
            	    "Name": "BlackRock Capital Investment Corporation"
            	  },
            	  {
            	    "Symbol": "BTZ",
            	    "Name": "BlackRock Credit Allocation Income Trust"
            	  },
            	  {
            	    "Symbol": "BGR",
            	    "Name": "BlackRock Energy and Resources Trust"
            	  },
            	  {
            	    "Symbol": "BAF",
            	    "Name": "BlackRock Income Investment Quality Trust"
            	  },
            	  {
            	    "Symbol": "BKT",
            	    "Name": "BlackRock Income Trust Inc. (The)"
            	  },
            	  {
            	    "Symbol": "BKN",
            	    "Name": "BlackRock Investment Quality Municipal Trust Inc. (The)"
            	  },
            	  {
            	    "Symbol": "BTA",
            	    "Name": "BlackRock Long-Term Municipal Advantage Trust"
            	  },
            	  {
            	    "Symbol": "BZM",
            	    "Name": "BlackRock Maryland Municipal Bond Trust"
            	  },
            	  {
            	    "Symbol": "MHE",
            	    "Name": "BlackRock Massachusetts Tax-Exempt Trust"
            	  },
            	  {
            	    "Symbol": "BIT",
            	    "Name": "BlackRock Multi-Sector Income Trust"
            	  },
            	  {
            	    "Symbol": "BBF",
            	    "Name": "BlackRock Municipal Income Investment Trust"
            	  },
            	  {
            	    "Symbol": "BFK",
            	    "Name": "BlackRock Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "BLE",
            	    "Name": "BlackRock Municipal Income Trust II"
            	  },
            	  {
            	    "Symbol": "BTT",
            	    "Name": "BlackRock Municipal Target Term Trust Inc. (The)"
            	  },
            	  {
            	    "Symbol": "BNJ",
            	    "Name": "BlackRock New Jersey Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "BNY",
            	    "Name": "BlackRock New York Investment Quality Municipal Trust Inc. (Th"
            	  },
            	  {
            	    "Symbol": "BFY",
            	    "Name": "BlackRock New York Municipal Income Trust II"
            	  },
            	  {
            	    "Symbol": "BCX",
            	    "Name": "BlackRock Resources"
            	  },
            	  {
            	    "Symbol": "BST",
            	    "Name": "BlackRock Science and Technology Trust"
            	  },
            	  {
            	    "Symbol": "BSD",
            	    "Name": "BlackRock Strategic Municipal Trust Inc. (The)"
            	  },
            	  {
            	    "Symbol": "BUI",
            	    "Name": "BlackRock Utility and Infrastructure Trust"
            	  },
            	  {
            	    "Symbol": "BHV",
            	    "Name": "BlackRock Virginia Municipal Bond Trust"
            	  },
            	  {
            	    "Symbol": "BLK",
            	    "Name": "BlackRock, Inc."
            	  },
            	  {
            	    "Symbol": "BLKB",
            	    "Name": "Blackbaud, Inc."
            	  },
            	  {
            	    "Symbol": "HAWK",
            	    "Name": "Blackhawk Network Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BJZ",
            	    "Name": "Blackrock California Municipal 2018 Term Trust"
            	  },
            	  {
            	    "Symbol": "CII",
            	    "Name": "Blackrock Capital and Income Strategies Fund Inc"
            	  },
            	  {
            	    "Symbol": "BHK",
            	    "Name": "Blackrock Core Bond Trust"
            	  },
            	  {
            	    "Symbol": "HYT",
            	    "Name": "Blackrock Corporate High Yield Fund, Inc."
            	  },
            	  {
            	    "Symbol": "DSU",
            	    "Name": "Blackrock Debt Strategies Fund, Inc."
            	  },
            	  {
            	    "Symbol": "BHL",
            	    "Name": "Blackrock Defined Opportunity Credit Trust"
            	  },
            	  {
            	    "Symbol": "BDJ",
            	    "Name": "Blackrock Enhanced Equity Dividend Trust"
            	  },
            	  {
            	    "Symbol": "EGF",
            	    "Name": "Blackrock Enhanced Government Fund, Inc"
            	  },
            	  {
            	    "Symbol": "FRA",
            	    "Name": "Blackrock Floating Rate Income Strategies Fund Inc"
            	  },
            	  {
            	    "Symbol": "BFO",
            	    "Name": "Blackrock Florida Municipal 2020 Term Trust"
            	  },
            	  {
            	    "Symbol": "BGT",
            	    "Name": "Blackrock Global"
            	  },
            	  {
            	    "Symbol": "BOE",
            	    "Name": "Blackrock Global"
            	  },
            	  {
            	    "Symbol": "BME",
            	    "Name": "Blackrock Health Sciences Trust"
            	  },
            	  {
            	    "Symbol": "MUI",
            	    "Name": "Blackrock Muni Intermediate Duration Fund Inc"
            	  },
            	  {
            	    "Symbol": "MNE",
            	    "Name": "Blackrock Muni New York Intermediate Duration Fund Inc"
            	  },
            	  {
            	    "Symbol": "MUA",
            	    "Name": "Blackrock MuniAssets Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MEN",
            	    "Name": "Blackrock MuniEnhanced Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MUC",
            	    "Name": "Blackrock MuniHoldings California Quality Fund,  Inc."
            	  },
            	  {
            	    "Symbol": "MUH",
            	    "Name": "Blackrock MuniHoldings Fund II, Inc."
            	  },
            	  {
            	    "Symbol": "MHD",
            	    "Name": "Blackrock MuniHoldings Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MFL",
            	    "Name": "Blackrock MuniHoldings Investment Quality Fund"
            	  },
            	  {
            	    "Symbol": "MUJ",
            	    "Name": "Blackrock MuniHoldings New Jersey Insured Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MHN",
            	    "Name": "Blackrock MuniHoldings New York Quality Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MUE",
            	    "Name": "Blackrock MuniHoldings Quality Fund II, Inc."
            	  },
            	  {
            	    "Symbol": "MUS",
            	    "Name": "Blackrock MuniHoldings Quality Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MVT",
            	    "Name": "Blackrock MuniVest Fund II, Inc."
            	  },
            	  {
            	    "Symbol": "MYC",
            	    "Name": "Blackrock MuniYield California Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MCA",
            	    "Name": "Blackrock MuniYield California Insured Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MYD",
            	    "Name": "Blackrock MuniYield Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MYF",
            	    "Name": "Blackrock MuniYield Investment Fund"
            	  },
            	  {
            	    "Symbol": "MFT",
            	    "Name": "Blackrock MuniYield Investment QualityFund"
            	  },
            	  {
            	    "Symbol": "MIY",
            	    "Name": "Blackrock MuniYield Michigan Quality Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MYJ",
            	    "Name": "Blackrock MuniYield New Jersey Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MYN",
            	    "Name": "Blackrock MuniYield New York Quality Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MPA",
            	    "Name": "Blackrock MuniYield Pennsylvania Quality Fund"
            	  },
            	  {
            	    "Symbol": "MQT",
            	    "Name": "Blackrock MuniYield Quality Fund II, Inc."
            	  },
            	  {
            	    "Symbol": "MYI",
            	    "Name": "Blackrock MuniYield Quality Fund III, Inc."
            	  },
            	  {
            	    "Symbol": "MQY",
            	    "Name": "Blackrock MuniYield Quality Fund, Inc."
            	  },
            	  {
            	    "Symbol": "BPK",
            	    "Name": "Blackrock Municipal 2018 Term Trust"
            	  },
            	  {
            	    "Symbol": "BKK",
            	    "Name": "Blackrock Municipal 2020 Term Trust"
            	  },
            	  {
            	    "Symbol": "BIE",
            	    "Name": "Blackrock Municipal Bond Investment Trust"
            	  },
            	  {
            	    "Symbol": "BBK",
            	    "Name": "Blackrock Municipal Bond Trust"
            	  },
            	  {
            	    "Symbol": "BYM",
            	    "Name": "Blackrock Municipal Income Quality Trust"
            	  },
            	  {
            	    "Symbol": "BLJ",
            	    "Name": "Blackrock New Jersey Municipal Bond Trust"
            	  },
            	  {
            	    "Symbol": "BLH",
            	    "Name": "Blackrock New York Municipal 2018 Term Trust"
            	  },
            	  {
            	    "Symbol": "BQH",
            	    "Name": "Blackrock New York Municipal Bond Trust"
            	  },
            	  {
            	    "Symbol": "BSE",
            	    "Name": "Blackrock New York Municipal Income Quality Trust"
            	  },
            	  {
            	    "Symbol": "BGB",
            	    "Name": "Blackstone \/ GSO Strategic Credit Fund"
            	  },
            	  {
            	    "Symbol": "BGX",
            	    "Name": "Blackstone GSO Long Short Credit Income Fund"
            	  },
            	  {
            	    "Symbol": "BSL",
            	    "Name": "Blackstone GSO Senior Floating Rate Term Fund"
            	  },
            	  {
            	    "Symbol": "BDR",
            	    "Name": "Blonder Tongue Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "BLMN",
            	    "Name": "Bloomin&#39; Brands, Inc."
            	  },
            	  {
            	    "Symbol": "BLT",
            	    "Name": "Blount International, Inc."
            	  },
            	  {
            	    "Symbol": "BCOR",
            	    "Name": "Blucora, Inc."
            	  },
            	  {
            	    "Symbol": "BLBD",
            	    "Name": "Blue Bird Corporation"
            	  },
            	  {
            	    "Symbol": "BUFF",
            	    "Name": "Blue Buffalo Pet Products, Inc."
            	  },
            	  {
            	    "Symbol": "BCRH",
            	    "Name": "Blue Capital Reinsurance Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "BBLU",
            	    "Name": "Blue Earth, Inc."
            	  },
            	  {
            	    "Symbol": "BHBK",
            	    "Name": "Blue Hills Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "NILE",
            	    "Name": "Blue Nile, Inc."
            	  },
            	  {
            	    "Symbol": "BXC",
            	    "Name": "BlueLinx Holdings Inc."
            	  },
            	  {
            	    "Symbol": "ITEQ",
            	    "Name": "BlueStar TA-BIGITech Israel Technology ETF"
            	  },
            	  {
            	    "Symbol": "BKEP",
            	    "Name": "Blueknight Energy Partners L.P., L.L.C."
            	  },
            	  {
            	    "Symbol": "BKEPP",
            	    "Name": "Blueknight Energy Partners L.P., L.L.C."
            	  },
            	  {
            	    "Symbol": "BPMC",
            	    "Name": "Blueprint Medicines Corporation"
            	  },
            	  {
            	    "Symbol": "BRG",
            	    "Name": "Bluerock Residential Growth REIT, Inc."
            	  },
            	  {
            	    "Symbol": "BRG^A",
            	    "Name": "Bluerock Residential Growth REIT, Inc."
            	  },
            	  {
            	    "Symbol": "BWP",
            	    "Name": "Boardwalk Pipeline Partners L.P."
            	  },
            	  {
            	    "Symbol": "BOBE",
            	    "Name": "Bob Evans Farms, Inc."
            	  },
            	  {
            	    "Symbol": "BA",
            	    "Name": "Boeing Company (The)"
            	  },
            	  {
            	    "Symbol": "BOFI",
            	    "Name": "BofI Holding, Inc."
            	  },
            	  {
            	    "Symbol": "BOFIL",
            	    "Name": "BofI Holding, Inc."
            	  },
            	  {
            	    "Symbol": "WIFI",
            	    "Name": "Boingo Wireless, Inc."
            	  },
            	  {
            	    "Symbol": "BCC",
            	    "Name": "Boise Cascade, L.L.C."
            	  },
            	  {
            	    "Symbol": "BOJA",
            	    "Name": "Bojangles&#39;, Inc."
            	  },
            	  {
            	    "Symbol": "BONA",
            	    "Name": "Bona Film Group Limited"
            	  },
            	  {
            	    "Symbol": "BCEI",
            	    "Name": "Bonanza Creek Energy, Inc."
            	  },
            	  {
            	    "Symbol": "BNSO",
            	    "Name": "Bonso Electronics International, Inc."
            	  },
            	  {
            	    "Symbol": "BOOT",
            	    "Name": "Boot Barn Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BAH",
            	    "Name": "Booz Allen Hamilton Holding Corporation"
            	  },
            	  {
            	    "Symbol": "BWA",
            	    "Name": "BorgWarner Inc."
            	  },
            	  {
            	    "Symbol": "SAM",
            	    "Name": "Boston Beer Company, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "BPFH",
            	    "Name": "Boston Private Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BPFHP",
            	    "Name": "Boston Private Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BPFHW",
            	    "Name": "Boston Private Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "BXP",
            	    "Name": "Boston Properties, Inc."
            	  },
            	  {
            	    "Symbol": "BXP^B",
            	    "Name": "Boston Properties, Inc."
            	  },
            	  {
            	    "Symbol": "BSX",
            	    "Name": "Boston Scientific Corporation"
            	  },
            	  {
            	    "Symbol": "EPAY",
            	    "Name": "Bottomline Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "BLVD",
            	    "Name": "Boulevard Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "BLVDU",
            	    "Name": "Boulevard Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "BLVDW",
            	    "Name": "Boulevard Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "BVX",
            	    "Name": "Bovie Medical Corporation"
            	  },
            	  {
            	    "Symbol": "BWL.A",
            	    "Name": "Bowl America, Inc."
            	  },
            	  {
            	    "Symbol": "BOX",
            	    "Name": "Box, Inc."
            	  },
            	  {
            	    "Symbol": "BYD",
            	    "Name": "Boyd Gaming Corporation"
            	  },
            	  {
            	    "Symbol": "BRC",
            	    "Name": "Brady Corporation"
            	  },
            	  {
            	    "Symbol": "BCLI",
            	    "Name": "Brainstorm Cell Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "BDN^E",
            	    "Name": "Brandywine Realty Tr"
            	  },
            	  {
            	    "Symbol": "BDN",
            	    "Name": "Brandywine Realty Trust"
            	  },
            	  {
            	    "Symbol": "LND",
            	    "Name": "Brasilagro Cia Brasileira De Propriedades Agricolas"
            	  },
            	  {
            	    "Symbol": "BAK",
            	    "Name": "Braskem S.A."
            	  },
            	  {
            	    "Symbol": "BBRG",
            	    "Name": "Bravo Brio Restaurant Group, Inc."
            	  },
            	  {
            	    "Symbol": "BBEP",
            	    "Name": "Breitburn Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "BBEPP",
            	    "Name": "Breitburn Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "BDGE",
            	    "Name": "Bridge Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BLIN",
            	    "Name": "Bridgeline Digital, Inc."
            	  },
            	  {
            	    "Symbol": "BPI",
            	    "Name": "Bridgepoint Education, Inc."
            	  },
            	  {
            	    "Symbol": "BRID",
            	    "Name": "Bridgford Foods Corporation"
            	  },
            	  {
            	    "Symbol": "BGG",
            	    "Name": "Briggs & Stratton Corporation"
            	  },
            	  {
            	    "Symbol": "BFAM",
            	    "Name": "Bright Horizons Family Solutions Inc."
            	  },
            	  {
            	    "Symbol": "BCOV",
            	    "Name": "Brightcove Inc."
            	  },
            	  {
            	    "Symbol": "BCO",
            	    "Name": "Brink&#39;s Company (The)"
            	  },
            	  {
            	    "Symbol": "EAT",
            	    "Name": "Brinker International, Inc."
            	  },
            	  {
            	    "Symbol": "BMY",
            	    "Name": "Bristol-Myers Squibb Company"
            	  },
            	  {
            	    "Symbol": "BRS",
            	    "Name": "Bristow Group Inc"
            	  },
            	  {
            	    "Symbol": "BTI",
            	    "Name": "British American Tobacco p.l.c."
            	  },
            	  {
            	    "Symbol": "BRX",
            	    "Name": "Brixmor Property Group Inc."
            	  },
            	  {
            	    "Symbol": "BSFT",
            	    "Name": "BroadSoft, Inc."
            	  },
            	  {
            	    "Symbol": "BVSN",
            	    "Name": "BroadVision, Inc."
            	  },
            	  {
            	    "Symbol": "AVGO",
            	    "Name": "Broadcom Limited"
            	  },
            	  {
            	    "Symbol": "BR",
            	    "Name": "Broadridge Financial Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "BYFC",
            	    "Name": "Broadway Financial Corporation"
            	  },
            	  {
            	    "Symbol": "BWEN",
            	    "Name": "Broadwind Energy, Inc."
            	  },
            	  {
            	    "Symbol": "BRCD",
            	    "Name": "Brocade Communications Systems, Inc."
            	  },
            	  {
            	    "Symbol": "BKD",
            	    "Name": "Brookdale Senior Living Inc."
            	  },
            	  {
            	    "Symbol": "BAM",
            	    "Name": "Brookfield Asset Management Inc"
            	  },
            	  {
            	    "Symbol": "BOXC",
            	    "Name": "Brookfield Canada Office Properties"
            	  },
            	  {
            	    "Symbol": "DTLA^",
            	    "Name": "Brookfield DTLA Inc."
            	  },
            	  {
            	    "Symbol": "INF",
            	    "Name": "Brookfield Global Listed Infrastructure Income Fund"
            	  },
            	  {
            	    "Symbol": "HHY",
            	    "Name": "Brookfield High Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "BIP",
            	    "Name": "Brookfield Infrastructure Partners LP"
            	  },
            	  {
            	    "Symbol": "BOI",
            	    "Name": "Brookfield Mortgage Opportunity Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "BPY",
            	    "Name": "Brookfield Property Partners L.P."
            	  },
            	  {
            	    "Symbol": "BEP",
            	    "Name": "Brookfield Renewable Powerr Fund"
            	  },
            	  {
            	    "Symbol": "HTR",
            	    "Name": "Brookfield Total Return Fund Inc."
            	  },
            	  {
            	    "Symbol": "BRKL",
            	    "Name": "Brookline Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BRKS",
            	    "Name": "Brooks Automation, Inc."
            	  },
            	  {
            	    "Symbol": "BRO",
            	    "Name": "Brown & Brown, Inc."
            	  },
            	  {
            	    "Symbol": "BF.A",
            	    "Name": "Brown Forman Corporation"
            	  },
            	  {
            	    "Symbol": "BF.B",
            	    "Name": "Brown Forman Corporation"
            	  },
            	  {
            	    "Symbol": "BRKR",
            	    "Name": "Bruker Corporation"
            	  },
            	  {
            	    "Symbol": "BC",
            	    "Name": "Brunswick Corporation"
            	  },
            	  {
            	    "Symbol": "BMTC",
            	    "Name": "Bryn Mawr Bank Corporation"
            	  },
            	  {
            	    "Symbol": "BPL",
            	    "Name": "Buckeye Partners L.P."
            	  },
            	  {
            	    "Symbol": "BKE",
            	    "Name": "Buckle, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "BVN",
            	    "Name": "Buenaventura Mining Company Inc."
            	  },
            	  {
            	    "Symbol": "BWLD",
            	    "Name": "Buffalo Wild Wings, Inc."
            	  },
            	  {
            	    "Symbol": "BBW",
            	    "Name": "Build-A-Bear Workshop, Inc."
            	  },
            	  {
            	    "Symbol": "BLDR",
            	    "Name": "Builders FirstSource, Inc."
            	  },
            	  {
            	    "Symbol": "BG",
            	    "Name": "Bunge Limited"
            	  },
            	  {
            	    "Symbol": "BUR",
            	    "Name": "Burcon Nutrascience Corp"
            	  },
            	  {
            	    "Symbol": "BURL",
            	    "Name": "Burlington Stores, Inc."
            	  },
            	  {
            	    "Symbol": "CFFI",
            	    "Name": "C&F Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CJES",
            	    "Name": "C&J Energy Services, Ltd."
            	  },
            	  {
            	    "Symbol": "CHRW",
            	    "Name": "C.H. Robinson Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "BCR",
            	    "Name": "C.R. Bard, Inc."
            	  },
            	  {
            	    "Symbol": "BNK",
            	    "Name": "C1 Financial, Inc."
            	  },
            	  {
            	    "Symbol": "CA",
            	    "Name": "CA Inc."
            	  },
            	  {
            	    "Symbol": "GYB",
            	    "Name": "CABCO Series 2004-101 Trust"
            	  },
            	  {
            	    "Symbol": "PFH",
            	    "Name": "CABCO Series 2004-101 Trust"
            	  },
            	  {
            	    "Symbol": "CACI",
            	    "Name": "CACI International, Inc."
            	  },
            	  {
            	    "Symbol": "CAE",
            	    "Name": "CAE Inc"
            	  },
            	  {
            	    "Symbol": "CAI",
            	    "Name": "CAI International, Inc."
            	  },
            	  {
            	    "Symbol": "CASM",
            	    "Name": "CAS Medical Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CASI",
            	    "Name": "CASI Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CBFV",
            	    "Name": "CB Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "CNLM",
            	    "Name": "CB Pharma Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "CNLMR",
            	    "Name": "CB Pharma Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "CNLMU",
            	    "Name": "CB Pharma Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "CNLMW",
            	    "Name": "CB Pharma Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "CBZ",
            	    "Name": "CBIZ, Inc."
            	  },
            	  {
            	    "Symbol": "CBL",
            	    "Name": "CBL & Associates Properties, Inc."
            	  },
            	  {
            	    "Symbol": "CBL^D",
            	    "Name": "CBL & Associates Properties, Inc."
            	  },
            	  {
            	    "Symbol": "CBL^E",
            	    "Name": "CBL & Associates Properties, Inc."
            	  },
            	  {
            	    "Symbol": "CBO",
            	    "Name": "CBO (Listing Market - NYSE - Networks A\/E)"
            	  },
            	  {
            	    "Symbol": "CBOE",
            	    "Name": "CBOE Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IGR",
            	    "Name": "CBRE Clarion Global Real Estate Income Fund"
            	  },
            	  {
            	    "Symbol": "CBG",
            	    "Name": "CBRE Group, Inc."
            	  },
            	  {
            	    "Symbol": "CBS",
            	    "Name": "CBS Corporation"
            	  },
            	  {
            	    "Symbol": "CBS.A",
            	    "Name": "CBS Corporation"
            	  },
            	  {
            	    "Symbol": "CBX",
            	    "Name": "CBX (Listing Market NYSE Networks AE"
            	  },
            	  {
            	    "Symbol": "CAW",
            	    "Name": "CCA Industries, Inc."
            	  },
            	  {
            	    "Symbol": "CDI",
            	    "Name": "CDI Corporation"
            	  },
            	  {
            	    "Symbol": "CDK",
            	    "Name": "CDK Global, Inc."
            	  },
            	  {
            	    "Symbol": "CDW",
            	    "Name": "CDW Corporation"
            	  },
            	  {
            	    "Symbol": "CEB",
            	    "Name": "CEB Inc."
            	  },
            	  {
            	    "Symbol": "CECE",
            	    "Name": "CECO Environmental Corp."
            	  },
            	  {
            	    "Symbol": "CPHD",
            	    "Name": "CEPHEID"
            	  },
            	  {
            	    "Symbol": "CEVA",
            	    "Name": "CEVA, Inc."
            	  },
            	  {
            	    "Symbol": "CF",
            	    "Name": "CF Industries Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CGG",
            	    "Name": "CGG"
            	  },
            	  {
            	    "Symbol": "GIB",
            	    "Name": "CGI Group, Inc."
            	  },
            	  {
            	    "Symbol": "CHSCL",
            	    "Name": "CHS Inc"
            	  },
            	  {
            	    "Symbol": "CHSCM",
            	    "Name": "CHS Inc"
            	  },
            	  {
            	    "Symbol": "CHSCN",
            	    "Name": "CHS Inc"
            	  },
            	  {
            	    "Symbol": "CHSCO",
            	    "Name": "CHS Inc"
            	  },
            	  {
            	    "Symbol": "CHSCP",
            	    "Name": "CHS Inc"
            	  },
            	  {
            	    "Symbol": "CIFC",
            	    "Name": "CIFC LLC"
            	  },
            	  {
            	    "Symbol": "CMCT",
            	    "Name": "CIM Commercial Trust Corporation"
            	  },
            	  {
            	    "Symbol": "CIR",
            	    "Name": "CIRCOR International, Inc."
            	  },
            	  {
            	    "Symbol": "CIT",
            	    "Name": "CIT Group Inc (DEL)"
            	  },
            	  {
            	    "Symbol": "CKX",
            	    "Name": "CKX Lands, Inc."
            	  },
            	  {
            	    "Symbol": "CLC",
            	    "Name": "CLARCOR Inc."
            	  },
            	  {
            	    "Symbol": "CMFN",
            	    "Name": "CM Finance Inc"
            	  },
            	  {
            	    "Symbol": "CME",
            	    "Name": "CME Group Inc."
            	  },
            	  {
            	    "Symbol": "CMS",
            	    "Name": "CMS Energy Corporation"
            	  },
            	  {
            	    "Symbol": "CMS^B",
            	    "Name": "CMS Energy Corporation"
            	  },
            	  {
            	    "Symbol": "CNA",
            	    "Name": "CNA Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CCNE",
            	    "Name": "CNB Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CNHI",
            	    "Name": "CNH Industrial N.V."
            	  },
            	  {
            	    "Symbol": "CNO",
            	    "Name": "CNO Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "CEO",
            	    "Name": "CNOOC Limited"
            	  },
            	  {
            	    "Symbol": "CNXC",
            	    "Name": "CNX Coal Resources LP"
            	  },
            	  {
            	    "Symbol": "CISG",
            	    "Name": "CNinsure Inc."
            	  },
            	  {
            	    "Symbol": "CNMD",
            	    "Name": "CONMED Corporation"
            	  },
            	  {
            	    "Symbol": "CNX",
            	    "Name": "CONSOL Energy Inc."
            	  },
            	  {
            	    "Symbol": "COYN",
            	    "Name": "COPsync, Inc."
            	  },
            	  {
            	    "Symbol": "COYNW",
            	    "Name": "COPsync, Inc."
            	  },
            	  {
            	    "Symbol": "CPF",
            	    "Name": "CPB Inc."
            	  },
            	  {
            	    "Symbol": "CPL",
            	    "Name": "CPFL Energia S.A."
            	  },
            	  {
            	    "Symbol": "CVU",
            	    "Name": "CPI Aerostructures, Inc."
            	  },
            	  {
            	    "Symbol": "PMTS",
            	    "Name": "CPI Card Group Inc."
            	  },
            	  {
            	    "Symbol": "CPSH",
            	    "Name": "CPS Technologies Corp."
            	  },
            	  {
            	    "Symbol": "CRAI",
            	    "Name": "CRA International,Inc."
            	  },
            	  {
            	    "Symbol": "CRHM",
            	    "Name": "CRH Medical Corporation"
            	  },
            	  {
            	    "Symbol": "CRH",
            	    "Name": "CRH PLC"
            	  },
            	  {
            	    "Symbol": "CSGS",
            	    "Name": "CSG Systems International, Inc."
            	  },
            	  {
            	    "Symbol": "CCLP",
            	    "Name": "CSI Compressco LP"
            	  },
            	  {
            	    "Symbol": "CSPI",
            	    "Name": "CSP Inc."
            	  },
            	  {
            	    "Symbol": "CSRA",
            	    "Name": "CSRA Inc."
            	  },
            	  {
            	    "Symbol": "CSS",
            	    "Name": "CSS Industries, Inc."
            	  },
            	  {
            	    "Symbol": "CST",
            	    "Name": "CST Brands, Inc."
            	  },
            	  {
            	    "Symbol": "CSWI",
            	    "Name": "CSW Industrials, Inc."
            	  },
            	  {
            	    "Symbol": "CSX",
            	    "Name": "CSX Corporation"
            	  },
            	  {
            	    "Symbol": "CTCM",
            	    "Name": "CTC Media, Inc."
            	  },
            	  {
            	    "Symbol": "CTIC",
            	    "Name": "CTI BioPharma Corp."
            	  },
            	  {
            	    "Symbol": "CTIB",
            	    "Name": "CTI Industries Corporation"
            	  },
            	  {
            	    "Symbol": "CTS",
            	    "Name": "CTS Corporation"
            	  },
            	  {
            	    "Symbol": "CUNB",
            	    "Name": "CU Bancorp (CA)"
            	  },
            	  {
            	    "Symbol": "CUI",
            	    "Name": "CUI Global, Inc."
            	  },
            	  {
            	    "Symbol": "CVBF",
            	    "Name": "CVB Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CVV",
            	    "Name": "CVD Equipment Corporation"
            	  },
            	  {
            	    "Symbol": "CVT",
            	    "Name": "CVENT, INC."
            	  },
            	  {
            	    "Symbol": "CVI",
            	    "Name": "CVR Energy Inc."
            	  },
            	  {
            	    "Symbol": "UAN",
            	    "Name": "CVR Partners, LP"
            	  },
            	  {
            	    "Symbol": "CVRR",
            	    "Name": "CVR Refining, LP"
            	  },
            	  {
            	    "Symbol": "CVS",
            	    "Name": "CVS Health Corporation"
            	  },
            	  {
            	    "Symbol": "CYRN",
            	    "Name": "CYREN Ltd."
            	  },
            	  {
            	    "Symbol": "CYS",
            	    "Name": "CYS Investments, Inc."
            	  },
            	  {
            	    "Symbol": "CYS^A",
            	    "Name": "CYS Investments, Inc."
            	  },
            	  {
            	    "Symbol": "CYS^B",
            	    "Name": "CYS Investments, Inc."
            	  },
            	  {
            	    "Symbol": "CAB",
            	    "Name": "Cabela&#39;s Inc"
            	  },
            	  {
            	    "Symbol": "CABO",
            	    "Name": "Cable One, Inc."
            	  },
            	  {
            	    "Symbol": "CVC",
            	    "Name": "Cablevision Systems Corporation"
            	  },
            	  {
            	    "Symbol": "CBT",
            	    "Name": "Cabot Corporation"
            	  },
            	  {
            	    "Symbol": "CCMP",
            	    "Name": "Cabot Microelectronics Corporation"
            	  },
            	  {
            	    "Symbol": "COG",
            	    "Name": "Cabot Oil & Gas Corporation"
            	  },
            	  {
            	    "Symbol": "CDNS",
            	    "Name": "Cadence Design Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CDZI",
            	    "Name": "Cadiz, Inc."
            	  },
            	  {
            	    "Symbol": "CSTE",
            	    "Name": "CaesarStone Sdot-Yam Ltd."
            	  },
            	  {
            	    "Symbol": "CACQ",
            	    "Name": "Caesars Acquisition Company"
            	  },
            	  {
            	    "Symbol": "CZR",
            	    "Name": "Caesars Entertainment Corporation"
            	  },
            	  {
            	    "Symbol": "PRSS",
            	    "Name": "CafePress Inc."
            	  },
            	  {
            	    "Symbol": "CALM",
            	    "Name": "Cal-Maine Foods, Inc."
            	  },
            	  {
            	    "Symbol": "CAMP",
            	    "Name": "CalAmp Corp."
            	  },
            	  {
            	    "Symbol": "CAA",
            	    "Name": "CalAtlantic Group, Inc."
            	  },
            	  {
            	    "Symbol": "CLBS",
            	    "Name": "Caladrius Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "CLMS",
            	    "Name": "Calamos Asset Management, Inc."
            	  },
            	  {
            	    "Symbol": "CHI",
            	    "Name": "Calamos Convertible Opportunities and Income Fund"
            	  },
            	  {
            	    "Symbol": "CHY",
            	    "Name": "Calamos Convertible and High Income Fund"
            	  },
            	  {
            	    "Symbol": "CCD",
            	    "Name": "Calamos Dynamic Convertible & Income Fund"
            	  },
            	  {
            	    "Symbol": "CFGE",
            	    "Name": "Calamos Focus Growth ETF"
            	  },
            	  {
            	    "Symbol": "CHW",
            	    "Name": "Calamos Global Dynamic Income Fund"
            	  },
            	  {
            	    "Symbol": "CGO",
            	    "Name": "Calamos Global Total Return Fund"
            	  },
            	  {
            	    "Symbol": "CSQ",
            	    "Name": "Calamos Strategic Total Return Fund"
            	  },
            	  {
            	    "Symbol": "CVGW",
            	    "Name": "Calavo Growers, Inc."
            	  },
            	  {
            	    "Symbol": "CAL",
            	    "Name": "Caleres, Inc."
            	  },
            	  {
            	    "Symbol": "CCC",
            	    "Name": "Calgon Carbon Corporation"
            	  },
            	  {
            	    "Symbol": "CFNB",
            	    "Name": "California First National Bancorp"
            	  },
            	  {
            	    "Symbol": "CRC",
            	    "Name": "California Resources Corporation"
            	  },
            	  {
            	    "Symbol": "CWT",
            	    "Name": "California Water  Service Group Holding"
            	  },
            	  {
            	    "Symbol": "CALA",
            	    "Name": "Calithera Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "CALX",
            	    "Name": "Calix, Inc"
            	  },
            	  {
            	    "Symbol": "ELY",
            	    "Name": "Callaway Golf Company"
            	  },
            	  {
            	    "Symbol": "CALD",
            	    "Name": "Callidus Software, Inc."
            	  },
            	  {
            	    "Symbol": "CPE",
            	    "Name": "Callon Petroleum Company"
            	  },
            	  {
            	    "Symbol": "CPE^A",
            	    "Name": "Callon Petroleum Company"
            	  },
            	  {
            	    "Symbol": "CPN",
            	    "Name": "Calpine Corporation"
            	  },
            	  {
            	    "Symbol": "CLMT",
            	    "Name": "Calumet Specialty Products Partners, L.P."
            	  },
            	  {
            	    "Symbol": "ABCD",
            	    "Name": "Cambium Learning Group, Inc."
            	  },
            	  {
            	    "Symbol": "CBM",
            	    "Name": "Cambrex Corporation"
            	  },
            	  {
            	    "Symbol": "CAC",
            	    "Name": "Camden National Corporation"
            	  },
            	  {
            	    "Symbol": "CPT",
            	    "Name": "Camden Property Trust"
            	  },
            	  {
            	    "Symbol": "CCJ",
            	    "Name": "Cameco Corporation"
            	  },
            	  {
            	    "Symbol": "CAM",
            	    "Name": "Cameron International Corporation"
            	  },
            	  {
            	    "Symbol": "CPB",
            	    "Name": "Campbell Soup Company"
            	  },
            	  {
            	    "Symbol": "CAMT",
            	    "Name": "Camtek Ltd."
            	  },
            	  {
            	    "Symbol": "CANF",
            	    "Name": "Can-Fite Biopharma Ltd"
            	  },
            	  {
            	    "Symbol": "CM",
            	    "Name": "Canadian Imperial Bank of Commerce"
            	  },
            	  {
            	    "Symbol": "CNI",
            	    "Name": "Canadian National Railway Company"
            	  },
            	  {
            	    "Symbol": "CNQ",
            	    "Name": "Canadian Natural Resources Limited"
            	  },
            	  {
            	    "Symbol": "CP",
            	    "Name": "Canadian Pacific Railway Limited"
            	  },
            	  {
            	    "Symbol": "CSIQ",
            	    "Name": "Canadian Solar Inc."
            	  },
            	  {
            	    "Symbol": "CGIX",
            	    "Name": "Cancer Genetics, Inc."
            	  },
            	  {
            	    "Symbol": "CAJ",
            	    "Name": "Canon, Inc."
            	  },
            	  {
            	    "Symbol": "CMN",
            	    "Name": "Cantel Medical Corp."
            	  },
            	  {
            	    "Symbol": "CPHC",
            	    "Name": "Canterbury Park Holding Corporation"
            	  },
            	  {
            	    "Symbol": "CBNJ",
            	    "Name": "Cape Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CPLA",
            	    "Name": "Capella Education Company"
            	  },
            	  {
            	    "Symbol": "CBF",
            	    "Name": "Capital Bank Financial Corp."
            	  },
            	  {
            	    "Symbol": "CCBG",
            	    "Name": "Capital City Bank Group"
            	  },
            	  {
            	    "Symbol": "COF",
            	    "Name": "Capital One Financial Corporation"
            	  },
            	  {
            	    "Symbol": "COF.WS",
            	    "Name": "Capital One Financial Corporation"
            	  },
            	  {
            	    "Symbol": "COF^C",
            	    "Name": "Capital One Financial Corporation"
            	  },
            	  {
            	    "Symbol": "COF^D",
            	    "Name": "Capital One Financial Corporation"
            	  },
            	  {
            	    "Symbol": "COF^F",
            	    "Name": "Capital One Financial Corporation"
            	  },
            	  {
            	    "Symbol": "COF^P",
            	    "Name": "Capital One Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CPLP",
            	    "Name": "Capital Product Partners L.P."
            	  },
            	  {
            	    "Symbol": "CSU",
            	    "Name": "Capital Senior Living Corporation"
            	  },
            	  {
            	    "Symbol": "CSWC",
            	    "Name": "Capital Southwest Corporation"
            	  },
            	  {
            	    "Symbol": "BXMT",
            	    "Name": "Capital Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CLA",
            	    "Name": "Capitala Finance Corp."
            	  },
            	  {
            	    "Symbol": "CPTA",
            	    "Name": "Capitala Finance Corp."
            	  },
            	  {
            	    "Symbol": "CLAC",
            	    "Name": "Capitol Acquisition Corp. III"
            	  },
            	  {
            	    "Symbol": "CLACU",
            	    "Name": "Capitol Acquisition Corp. III"
            	  },
            	  {
            	    "Symbol": "CLACW",
            	    "Name": "Capitol Acquisition Corp. III"
            	  },
            	  {
            	    "Symbol": "CFFN",
            	    "Name": "Capitol Federal Financial, Inc."
            	  },
            	  {
            	    "Symbol": "CAPN",
            	    "Name": "Capnia, Inc."
            	  },
            	  {
            	    "Symbol": "CAPNW",
            	    "Name": "Capnia, Inc."
            	  },
            	  {
            	    "Symbol": "CAPR",
            	    "Name": "Capricor Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "CMO",
            	    "Name": "Capstead Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "CMO^E",
            	    "Name": "Capstead Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "CPST",
            	    "Name": "Capstone Turbine Corporation"
            	  },
            	  {
            	    "Symbol": "KMX",
            	    "Name": "CarMax Inc"
            	  },
            	  {
            	    "Symbol": "CARA",
            	    "Name": "Cara Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "CRR",
            	    "Name": "Carbo Ceramics, Inc."
            	  },
            	  {
            	    "Symbol": "CARB",
            	    "Name": "Carbonite, Inc."
            	  },
            	  {
            	    "Symbol": "CBYL",
            	    "Name": "Carbylan Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "CRDC",
            	    "Name": "Cardica, Inc."
            	  },
            	  {
            	    "Symbol": "CFNL",
            	    "Name": "Cardinal Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CAH",
            	    "Name": "Cardinal Health, Inc."
            	  },
            	  {
            	    "Symbol": "CRME",
            	    "Name": "Cardiome Pharma Corporation"
            	  },
            	  {
            	    "Symbol": "CSII",
            	    "Name": "Cardiovascular Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CATM",
            	    "Name": "Cardtronics, Inc."
            	  },
            	  {
            	    "Symbol": "CCP",
            	    "Name": "Care Capital Properties, Inc."
            	  },
            	  {
            	    "Symbol": "CRCM",
            	    "Name": "Care.com, Inc."
            	  },
            	  {
            	    "Symbol": "CDNA",
            	    "Name": "CareDx, Inc."
            	  },
            	  {
            	    "Symbol": "CTRE",
            	    "Name": "CareTrust REIT, Inc."
            	  },
            	  {
            	    "Symbol": "CECO",
            	    "Name": "Career Education Corporation"
            	  },
            	  {
            	    "Symbol": "CSL",
            	    "Name": "Carlisle Companies Incorporated"
            	  },
            	  {
            	    "Symbol": "CKEC",
            	    "Name": "Carmike Cinemas, Inc."
            	  },
            	  {
            	    "Symbol": "CCL",
            	    "Name": "Carnival Corporation"
            	  },
            	  {
            	    "Symbol": "CUK",
            	    "Name": "Carnival Corporation"
            	  },
            	  {
            	    "Symbol": "CLBH",
            	    "Name": "Carolina Bank Holdings Inc."
            	  },
            	  {
            	    "Symbol": "CARO",
            	    "Name": "Carolina Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CART",
            	    "Name": "Carolina Trust Bank"
            	  },
            	  {
            	    "Symbol": "CRS",
            	    "Name": "Carpenter Technology Corporation"
            	  },
            	  {
            	    "Symbol": "CSV",
            	    "Name": "Carriage Services, Inc."
            	  },
            	  {
            	    "Symbol": "CRZO",
            	    "Name": "Carrizo Oil & Gas, Inc."
            	  },
            	  {
            	    "Symbol": "TAST",
            	    "Name": "Carrols Restaurant Group, Inc."
            	  },
            	  {
            	    "Symbol": "CRI",
            	    "Name": "Carter&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "CRTN",
            	    "Name": "Cartesian, Inc."
            	  },
            	  {
            	    "Symbol": "CARV",
            	    "Name": "Carver Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CACB",
            	    "Name": "Cascade Bancorp"
            	  },
            	  {
            	    "Symbol": "CSCD",
            	    "Name": "Cascade Microtech, Inc."
            	  },
            	  {
            	    "Symbol": "CWST",
            	    "Name": "Casella Waste Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CASY",
            	    "Name": "Caseys General Stores, Inc."
            	  },
            	  {
            	    "Symbol": "CSH",
            	    "Name": "Cash America International, Inc."
            	  },
            	  {
            	    "Symbol": "CASS",
            	    "Name": "Cass Information Systems, Inc"
            	  },
            	  {
            	    "Symbol": "CAS",
            	    "Name": "Castle (A.M.) & Co."
            	  },
            	  {
            	    "Symbol": "ROX",
            	    "Name": "Castle Brands, Inc."
            	  },
            	  {
            	    "Symbol": "CSLT",
            	    "Name": "Castlight Health, inc."
            	  },
            	  {
            	    "Symbol": "CATB",
            	    "Name": "Catabasis Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CTLT",
            	    "Name": "Catalent, Inc."
            	  },
            	  {
            	    "Symbol": "CBIO",
            	    "Name": "Catalyst Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "CPRX",
            	    "Name": "Catalyst Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CTT",
            	    "Name": "CatchMark Timber Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CAT",
            	    "Name": "Caterpillar, Inc."
            	  },
            	  {
            	    "Symbol": "CATY",
            	    "Name": "Cathay General Bancorp"
            	  },
            	  {
            	    "Symbol": "CATYW",
            	    "Name": "Cathay General Bancorp"
            	  },
            	  {
            	    "Symbol": "CATO",
            	    "Name": "Cato Corporation (The)"
            	  },
            	  {
            	    "Symbol": "CVCO",
            	    "Name": "Cavco Industries, Inc."
            	  },
            	  {
            	    "Symbol": "CAVM",
            	    "Name": "Cavium, Inc."
            	  },
            	  {
            	    "Symbol": "FUN",
            	    "Name": "Cedar Fair, L.P."
            	  },
            	  {
            	    "Symbol": "CDR",
            	    "Name": "Cedar Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CDR^B",
            	    "Name": "Cedar Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CVM",
            	    "Name": "Cel-Sci Corporation"
            	  },
            	  {
            	    "Symbol": "CVM.WS",
            	    "Name": "Cel-Sci Corporation"
            	  },
            	  {
            	    "Symbol": "CGI",
            	    "Name": "Celadon Group, Inc."
            	  },
            	  {
            	    "Symbol": "CE",
            	    "Name": "Celanese Corporation"
            	  },
            	  {
            	    "Symbol": "CPXX",
            	    "Name": "Celator Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "CLS",
            	    "Name": "Celestica, Inc."
            	  },
            	  {
            	    "Symbol": "CELG",
            	    "Name": "Celgene Corporation"
            	  },
            	  {
            	    "Symbol": "CELGZ",
            	    "Name": "Celgene Corporation"
            	  },
            	  {
            	    "Symbol": "CEL",
            	    "Name": "Cellcom Israel, Ltd."
            	  },
            	  {
            	    "Symbol": "CLDX",
            	    "Name": "Celldex Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "CLRB",
            	    "Name": "Cellectar Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "CLRBW",
            	    "Name": "Cellectar Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "CLLS",
            	    "Name": "Cellectis S.A."
            	  },
            	  {
            	    "Symbol": "CBMG",
            	    "Name": "Cellular Biomedicine Group, Inc."
            	  },
            	  {
            	    "Symbol": "CLSN",
            	    "Name": "Celsion Corporation"
            	  },
            	  {
            	    "Symbol": "CYAD",
            	    "Name": "Celyad SA"
            	  },
            	  {
            	    "Symbol": "CPAC",
            	    "Name": "Cementos Pacasmayo S.A.A."
            	  },
            	  {
            	    "Symbol": "CX",
            	    "Name": "Cemex S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "CEMP",
            	    "Name": "Cempra, Inc."
            	  },
            	  {
            	    "Symbol": "CETX",
            	    "Name": "Cemtrex Inc."
            	  },
            	  {
            	    "Symbol": "CNCO",
            	    "Name": "Cencosud S.A."
            	  },
            	  {
            	    "Symbol": "CVE",
            	    "Name": "Cenovus Energy Inc"
            	  },
            	  {
            	    "Symbol": "CNC",
            	    "Name": "Centene Corporation"
            	  },
            	  {
            	    "Symbol": "CEN",
            	    "Name": "Center Coast MLP & Infrastructure Fund"
            	  },
            	  {
            	    "Symbol": "CNP",
            	    "Name": "CenterPoint Energy, Inc."
            	  },
            	  {
            	    "Symbol": "CSFL",
            	    "Name": "CenterState Banks, Inc."
            	  },
            	  {
            	    "Symbol": "EBR",
            	    "Name": "Centrais Electricas Brasileiras SA"
            	  },
            	  {
            	    "Symbol": "EBR.B",
            	    "Name": "Centrais Electricas Brasileiras SA"
            	  },
            	  {
            	    "Symbol": "CEE",
            	    "Name": "Central Europe, Russia and Turkey Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "CETV",
            	    "Name": "Central European Media Enterprises Ltd."
            	  },
            	  {
            	    "Symbol": "CFBK",
            	    "Name": "Central Federal Corporation"
            	  },
            	  {
            	    "Symbol": "CEF",
            	    "Name": "Central Fund of Canada Limited"
            	  },
            	  {
            	    "Symbol": "CENT",
            	    "Name": "Central Garden & Pet Company"
            	  },
            	  {
            	    "Symbol": "CENTA",
            	    "Name": "Central Garden & Pet Company"
            	  },
            	  {
            	    "Symbol": "CET",
            	    "Name": "Central Securities Corporation"
            	  },
            	  {
            	    "Symbol": "CVCY",
            	    "Name": "Central Valley Community Bancorp"
            	  },
            	  {
            	    "Symbol": "CFCB",
            	    "Name": "Centrue Financial Corporation"
            	  },
            	  {
            	    "Symbol": "LEU",
            	    "Name": "Centrus Energy Corp."
            	  },
            	  {
            	    "Symbol": "CENX",
            	    "Name": "Century Aluminum Company"
            	  },
            	  {
            	    "Symbol": "CNBKA",
            	    "Name": "Century Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CNTY",
            	    "Name": "Century Casinos, Inc."
            	  },
            	  {
            	    "Symbol": "CCS",
            	    "Name": "Century Communities, Inc."
            	  },
            	  {
            	    "Symbol": "CTL",
            	    "Name": "CenturyLink, Inc."
            	  },
            	  {
            	    "Symbol": "CVO",
            	    "Name": "Cenveo Inc"
            	  },
            	  {
            	    "Symbol": "CRNT",
            	    "Name": "Ceragon Networks Ltd."
            	  },
            	  {
            	    "Symbol": "CERC",
            	    "Name": "Cerecor Inc."
            	  },
            	  {
            	    "Symbol": "CERCW",
            	    "Name": "Cerecor Inc."
            	  },
            	  {
            	    "Symbol": "CERCZ",
            	    "Name": "Cerecor Inc."
            	  },
            	  {
            	    "Symbol": "CERE",
            	    "Name": "Ceres, Inc."
            	  },
            	  {
            	    "Symbol": "CERN",
            	    "Name": "Cerner Corporation"
            	  },
            	  {
            	    "Symbol": "CERU",
            	    "Name": "Cerulean Pharma Inc."
            	  },
            	  {
            	    "Symbol": "CERS",
            	    "Name": "Cerus Corporation"
            	  },
            	  {
            	    "Symbol": "KOOL",
            	    "Name": "Cesca Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "CSBR",
            	    "Name": "Champions Oncology, Inc."
            	  },
            	  {
            	    "Symbol": "CYOU",
            	    "Name": "Changyou.com Limited"
            	  },
            	  {
            	    "Symbol": "ECOM",
            	    "Name": "ChannelAdvisor Corporation"
            	  },
            	  {
            	    "Symbol": "HOTR",
            	    "Name": "Chanticleer Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HOTRW",
            	    "Name": "Chanticleer Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CTHR",
            	    "Name": "Charles & Colvard Ltd"
            	  },
            	  {
            	    "Symbol": "CRL",
            	    "Name": "Charles River Laboratories International, Inc."
            	  },
            	  {
            	    "Symbol": "GTLS",
            	    "Name": "Chart Industries, Inc."
            	  },
            	  {
            	    "Symbol": "CHTR",
            	    "Name": "Charter Communications, Inc."
            	  },
            	  {
            	    "Symbol": "CHFN",
            	    "Name": "Charter Financial Corp."
            	  },
            	  {
            	    "Symbol": "CCF",
            	    "Name": "Chase Corporation"
            	  },
            	  {
            	    "Symbol": "CLDT",
            	    "Name": "Chatham Lodging Trust (REIT)"
            	  },
            	  {
            	    "Symbol": "CHKP",
            	    "Name": "Check Point Software Technologies Ltd."
            	  },
            	  {
            	    "Symbol": "CHEK",
            	    "Name": "Check-Cap Ltd."
            	  },
            	  {
            	    "Symbol": "CHEKW",
            	    "Name": "Check-Cap Ltd."
            	  },
            	  {
            	    "Symbol": "CKP",
            	    "Name": "Checkpoint Systms, Inc."
            	  },
            	  {
            	    "Symbol": "CMCM",
            	    "Name": "Cheetah Mobile Inc."
            	  },
            	  {
            	    "Symbol": "CHGG",
            	    "Name": "Chegg, Inc."
            	  },
            	  {
            	    "Symbol": "CEMI",
            	    "Name": "Chembio Diagnostics, Inc."
            	  },
            	  {
            	    "Symbol": "CHE",
            	    "Name": "Chemed Corp."
            	  },
            	  {
            	    "Symbol": "CHFC",
            	    "Name": "Chemical Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CCXI",
            	    "Name": "ChemoCentryx, Inc."
            	  },
            	  {
            	    "Symbol": "CC",
            	    "Name": "Chemours Company (The)"
            	  },
            	  {
            	    "Symbol": "CHMT",
            	    "Name": "Chemtura Corp."
            	  },
            	  {
            	    "Symbol": "CHMG",
            	    "Name": "Chemung Financial Corp"
            	  },
            	  {
            	    "Symbol": "CQH",
            	    "Name": "Cheniere Energy Partners LP Holdings, LLC"
            	  },
            	  {
            	    "Symbol": "CQP",
            	    "Name": "Cheniere Energy Partners, LP"
            	  },
            	  {
            	    "Symbol": "LNG",
            	    "Name": "Cheniere Energy, Inc."
            	  },
            	  {
            	    "Symbol": "CHKE",
            	    "Name": "Cherokee Inc."
            	  },
            	  {
            	    "Symbol": "CHMI",
            	    "Name": "Cherry Hill Mortgage Investment Corporation"
            	  },
            	  {
            	    "Symbol": "CHK",
            	    "Name": "Chesapeake Energy Corporation"
            	  },
            	  {
            	    "Symbol": "CHK^D",
            	    "Name": "Chesapeake Energy Corporation"
            	  },
            	  {
            	    "Symbol": "CHKR",
            	    "Name": "Chesapeake Granite Wash Trust"
            	  },
            	  {
            	    "Symbol": "CHSP",
            	    "Name": "Chesapeake Lodging Trust"
            	  },
            	  {
            	    "Symbol": "CHSP^A",
            	    "Name": "Chesapeake Lodging Trust"
            	  },
            	  {
            	    "Symbol": "CPK",
            	    "Name": "Chesapeake Utilities Corporation"
            	  },
            	  {
            	    "Symbol": "CHEV",
            	    "Name": "Cheviot Financial Corp"
            	  },
            	  {
            	    "Symbol": "CVX",
            	    "Name": "Chevron Corporation"
            	  },
            	  {
            	    "Symbol": "CHMA",
            	    "Name": "Chiasma, Inc."
            	  },
            	  {
            	    "Symbol": "CBI",
            	    "Name": "Chicago Bridge & Iron Company N.V."
            	  },
            	  {
            	    "Symbol": "CVR",
            	    "Name": "Chicago Rivet & Machine Co."
            	  },
            	  {
            	    "Symbol": "CHS",
            	    "Name": "Chico&#39;s FAS, Inc."
            	  },
            	  {
            	    "Symbol": "CBNK",
            	    "Name": "Chicopee Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PLCE",
            	    "Name": "Children&#39;s Place, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "CIM",
            	    "Name": "Chimera Investment Corporation"
            	  },
            	  {
            	    "Symbol": "CMRX",
            	    "Name": "Chimerix, Inc."
            	  },
            	  {
            	    "Symbol": "CADC",
            	    "Name": "China Advanced Construction Materials Group, Inc."
            	  },
            	  {
            	    "Symbol": "CALI",
            	    "Name": "China Auto Logistics Inc."
            	  },
            	  {
            	    "Symbol": "CAAS",
            	    "Name": "China Automotive Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CBAK",
            	    "Name": "China BAK Battery, Inc."
            	  },
            	  {
            	    "Symbol": "CBPO",
            	    "Name": "China Biologic Products, Inc."
            	  },
            	  {
            	    "Symbol": "CCCL",
            	    "Name": "China Ceramics Co., Ltd."
            	  },
            	  {
            	    "Symbol": "CCCR",
            	    "Name": "China Commercial Credit, Inc."
            	  },
            	  {
            	    "Symbol": "CO",
            	    "Name": "China Cord Blood Corporation"
            	  },
            	  {
            	    "Symbol": "CCRC",
            	    "Name": "China Customer Relations Centers, Inc."
            	  },
            	  {
            	    "Symbol": "STV",
            	    "Name": "China Digital TV Holding Co., Ltd."
            	  },
            	  {
            	    "Symbol": "DL",
            	    "Name": "China Distance Education Holdings Limited"
            	  },
            	  {
            	    "Symbol": "CEA",
            	    "Name": "China Eastern Airlines Corporation Ltd."
            	  },
            	  {
            	    "Symbol": "JRJC",
            	    "Name": "China Finance Online Co. Limited"
            	  },
            	  {
            	    "Symbol": "CHN",
            	    "Name": "China Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "CGA",
            	    "Name": "China Green Agriculture, Inc."
            	  },
            	  {
            	    "Symbol": "HGSH",
            	    "Name": "China HGS Real Estate, Inc."
            	  },
            	  {
            	    "Symbol": "CNIT",
            	    "Name": "China Information Technology, Inc."
            	  },
            	  {
            	    "Symbol": "CJJD",
            	    "Name": "China Jo-Jo Drugstores, Inc."
            	  },
            	  {
            	    "Symbol": "LFC",
            	    "Name": "China Life Insurance Company Limited"
            	  },
            	  {
            	    "Symbol": "HTHT",
            	    "Name": "China Lodging Group, Limited"
            	  },
            	  {
            	    "Symbol": "CNR",
            	    "Name": "China Metro-Rural Holdings Limited"
            	  },
            	  {
            	    "Symbol": "MY",
            	    "Name": "China Ming Yang Wind Power Group Limited"
            	  },
            	  {
            	    "Symbol": "CHL",
            	    "Name": "China Mobile (Hong Kong) Ltd."
            	  },
            	  {
            	    "Symbol": "CHNR",
            	    "Name": "China Natural Resources, Inc."
            	  },
            	  {
            	    "Symbol": "NPD",
            	    "Name": "China Nepstar Chain Drugstore Ltd"
            	  },
            	  {
            	    "Symbol": "BORN",
            	    "Name": "China New Borun Corporation"
            	  },
            	  {
            	    "Symbol": "SNP",
            	    "Name": "China Petroleum & Chemical Corporation"
            	  },
            	  {
            	    "Symbol": "CPHI",
            	    "Name": "China Pharma Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CREG",
            	    "Name": "China Recycling Energy Corporation"
            	  },
            	  {
            	    "Symbol": "ZNH",
            	    "Name": "China Southern Airlines Company Limited"
            	  },
            	  {
            	    "Symbol": "CNTF",
            	    "Name": "China TechFaith Wireless Communication Technology Limited"
            	  },
            	  {
            	    "Symbol": "CHA",
            	    "Name": "China Telecom Corp Ltd"
            	  },
            	  {
            	    "Symbol": "CHU",
            	    "Name": "China Unicom (Hong Kong) Ltd"
            	  },
            	  {
            	    "Symbol": "CXDC",
            	    "Name": "China XD Plastics Company Limited"
            	  },
            	  {
            	    "Symbol": "XNY",
            	    "Name": "China Xiniya Fashion Limited"
            	  },
            	  {
            	    "Symbol": "CNYD",
            	    "Name": "China Yida Holding, Co."
            	  },
            	  {
            	    "Symbol": "CYD",
            	    "Name": "China Yuchai International Limited"
            	  },
            	  {
            	    "Symbol": "ZX",
            	    "Name": "China Zenix Auto International Limited"
            	  },
            	  {
            	    "Symbol": "CCIH",
            	    "Name": "ChinaCache International Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "CNET",
            	    "Name": "ChinaNet Online Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IMOS",
            	    "Name": "ChipMOS TECHNOLOGIES (Bermuda) LTD."
            	  },
            	  {
            	    "Symbol": "CMG",
            	    "Name": "Chipotle Mexican Grill, Inc."
            	  },
            	  {
            	    "Symbol": "CHH",
            	    "Name": "Choice Hotels International, Inc."
            	  },
            	  {
            	    "Symbol": "CBK",
            	    "Name": "Christopher & Banks Corporation"
            	  },
            	  {
            	    "Symbol": "CHT",
            	    "Name": "Chunghwa Telecom Co., Ltd."
            	  },
            	  {
            	    "Symbol": "CHD",
            	    "Name": "Church & Dwight Company, Inc."
            	  },
            	  {
            	    "Symbol": "CHDN",
            	    "Name": "Churchill Downs, Incorporated"
            	  },
            	  {
            	    "Symbol": "CHUY",
            	    "Name": "Chuy&#39;s Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CBR",
            	    "Name": "Ciber, Inc."
            	  },
            	  {
            	    "Symbol": "CDTX",
            	    "Name": "Cidara Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "CIEN",
            	    "Name": "Ciena Corporation"
            	  },
            	  {
            	    "Symbol": "CI",
            	    "Name": "Cigna Corporation"
            	  },
            	  {
            	    "Symbol": "XEC",
            	    "Name": "Cimarex Energy Co"
            	  },
            	  {
            	    "Symbol": "CMPR",
            	    "Name": "Cimpress N.V"
            	  },
            	  {
            	    "Symbol": "CBB",
            	    "Name": "Cincinnati Bell Inc"
            	  },
            	  {
            	    "Symbol": "CBB^B",
            	    "Name": "Cincinnati Bell Inc"
            	  },
            	  {
            	    "Symbol": "CINF",
            	    "Name": "Cincinnati Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CIDM",
            	    "Name": "Cinedigm Corp"
            	  },
            	  {
            	    "Symbol": "CNK",
            	    "Name": "Cinemark Holdings Inc"
            	  },
            	  {
            	    "Symbol": "CINR",
            	    "Name": "Ciner Resources LP"
            	  },
            	  {
            	    "Symbol": "CTAS",
            	    "Name": "Cintas Corporation"
            	  },
            	  {
            	    "Symbol": "CPHR",
            	    "Name": "Cipher Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "CRUS",
            	    "Name": "Cirrus Logic, Inc."
            	  },
            	  {
            	    "Symbol": "CSCO",
            	    "Name": "Cisco Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CTRN",
            	    "Name": "Citi Trends, Inc."
            	  },
            	  {
            	    "Symbol": "BLW",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C.WS.A",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^C",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^J",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^K",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^L",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^N",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^P",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "C^S",
            	    "Name": "Citigroup Inc."
            	  },
            	  {
            	    "Symbol": "CZNC",
            	    "Name": "Citizens & Northern Corp"
            	  },
            	  {
            	    "Symbol": "CZWI",
            	    "Name": "Citizens Community Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CFG",
            	    "Name": "Citizens Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "CZFC",
            	    "Name": "Citizens First Corporation"
            	  },
            	  {
            	    "Symbol": "CIZN",
            	    "Name": "Citizens Holding Company"
            	  },
            	  {
            	    "Symbol": "CIA",
            	    "Name": "Citizens, Inc."
            	  },
            	  {
            	    "Symbol": "CTXS",
            	    "Name": "Citrix Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CHCO",
            	    "Name": "City Holding Company"
            	  },
            	  {
            	    "Symbol": "CIO",
            	    "Name": "City Office REIT, Inc."
            	  },
            	  {
            	    "Symbol": "CVEO",
            	    "Name": "Civeo Corporation"
            	  },
            	  {
            	    "Symbol": "CIVB",
            	    "Name": "Civista Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "CIVBP",
            	    "Name": "Civista Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "CIVI",
            	    "Name": "Civitas Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "CWEI",
            	    "Name": "Clayton Williams Energy, Inc."
            	  },
            	  {
            	    "Symbol": "CDTI",
            	    "Name": "Clean Diesel Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "CLNE",
            	    "Name": "Clean Energy Fuels Corp."
            	  },
            	  {
            	    "Symbol": "CLH",
            	    "Name": "Clean Harbors, Inc."
            	  },
            	  {
            	    "Symbol": "CLNT",
            	    "Name": "Cleantech Solutions International, Inc."
            	  },
            	  {
            	    "Symbol": "CCO",
            	    "Name": "Clear Channel Outdoor Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CBA",
            	    "Name": "ClearBridge American Energy MLP Fund Inc."
            	  },
            	  {
            	    "Symbol": "CEM",
            	    "Name": "ClearBridge Energy MLP Fund Inc."
            	  },
            	  {
            	    "Symbol": "EMO",
            	    "Name": "ClearBridge Energy MLP Opportunity Fund Inc."
            	  },
            	  {
            	    "Symbol": "CTR",
            	    "Name": "ClearBridge Energy MLP Total Return Fund Inc."
            	  },
            	  {
            	    "Symbol": "CLRO",
            	    "Name": "ClearOne, Inc."
            	  },
            	  {
            	    "Symbol": "CLIR",
            	    "Name": "ClearSign Combustion Corporation"
            	  },
            	  {
            	    "Symbol": "CLFD",
            	    "Name": "Clearfield, Inc."
            	  },
            	  {
            	    "Symbol": "CLW",
            	    "Name": "Clearwater Paper Corporation"
            	  },
            	  {
            	    "Symbol": "CNL",
            	    "Name": "Cleco Corporation"
            	  },
            	  {
            	    "Symbol": "CBLI",
            	    "Name": "Cleveland BioLabs, Inc."
            	  },
            	  {
            	    "Symbol": "CLF",
            	    "Name": "Cliffs Natural Resources Inc."
            	  },
            	  {
            	    "Symbol": "CSBK",
            	    "Name": "Clifton Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "CLX",
            	    "Name": "Clorox Company (The)"
            	  },
            	  {
            	    "Symbol": "CLD",
            	    "Name": "Cloud Peak Energy Inc"
            	  },
            	  {
            	    "Symbol": "GLV",
            	    "Name": "Clough Global Allocation Fund"
            	  },
            	  {
            	    "Symbol": "GLQ",
            	    "Name": "Clough Global Equity Fund"
            	  },
            	  {
            	    "Symbol": "GLO",
            	    "Name": "Clough Global Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "CLVS",
            	    "Name": "Clovis Oncology, Inc."
            	  },
            	  {
            	    "Symbol": "MYCC",
            	    "Name": "ClubCorp Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CNV",
            	    "Name": "Cnova N.V."
            	  },
            	  {
            	    "Symbol": "COBZ",
            	    "Name": "CoBiz Financial Inc."
            	  },
            	  {
            	    "Symbol": "CLCD",
            	    "Name": "CoLucid Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CSGP",
            	    "Name": "CoStar Group, Inc."
            	  },
            	  {
            	    "Symbol": "COH",
            	    "Name": "Coach, Inc."
            	  },
            	  {
            	    "Symbol": "CWAY",
            	    "Name": "Coastway Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CIE",
            	    "Name": "Cobalt International Energy, Inc."
            	  },
            	  {
            	    "Symbol": "KOF",
            	    "Name": "Coca Cola Femsa S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "COKE",
            	    "Name": "Coca-Cola Bottling Co. Consolidated"
            	  },
            	  {
            	    "Symbol": "KO",
            	    "Name": "Coca-Cola Company (The)"
            	  },
            	  {
            	    "Symbol": "CCE",
            	    "Name": "Coca-Cola Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "CDRB",
            	    "Name": "Code Rebel Corporation"
            	  },
            	  {
            	    "Symbol": "CDXS",
            	    "Name": "Codexis, Inc."
            	  },
            	  {
            	    "Symbol": "CVLY",
            	    "Name": "Codorus Valley Bancorp, Inc"
            	  },
            	  {
            	    "Symbol": "CDE",
            	    "Name": "Coeur Mining, Inc."
            	  },
            	  {
            	    "Symbol": "JVA",
            	    "Name": "Coffee Holding Co., Inc."
            	  },
            	  {
            	    "Symbol": "CCOI",
            	    "Name": "Cogent Communications Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CGNT",
            	    "Name": "Cogentix Medical, Inc."
            	  },
            	  {
            	    "Symbol": "CGNX",
            	    "Name": "Cognex Corporation"
            	  },
            	  {
            	    "Symbol": "CTSH",
            	    "Name": "Cognizant Technology Solutions Corporation"
            	  },
            	  {
            	    "Symbol": "FOF",
            	    "Name": "Cohen & Steers Closed-End Opportunity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "INB",
            	    "Name": "Cohen & Steers Global Income Builder, Inc."
            	  },
            	  {
            	    "Symbol": "UTF",
            	    "Name": "Cohen & Steers Infrastructure Fund, Inc"
            	  },
            	  {
            	    "Symbol": "LDP",
            	    "Name": "Cohen & Steers Limited Duration Preferred and Income Fund, Inc"
            	  },
            	  {
            	    "Symbol": "MIE",
            	    "Name": "Cohen & Steers MLP Income and Energy Opportunity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "RQI",
            	    "Name": "Cohen & Steers Quality Income Realty Fund Inc"
            	  },
            	  {
            	    "Symbol": "RNP",
            	    "Name": "Cohen & Steers Reit and Preferred Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "PSF",
            	    "Name": "Cohen & Steers Select Preferred and Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "RFI",
            	    "Name": "Cohen & Steers Total Return Realty Fund, Inc."
            	  },
            	  {
            	    "Symbol": "COHR",
            	    "Name": "Coherent, Inc."
            	  },
            	  {
            	    "Symbol": "CHRS",
            	    "Name": "Coherus BioSciences, Inc."
            	  },
            	  {
            	    "Symbol": "CNS",
            	    "Name": "Cohn & Steers Inc"
            	  },
            	  {
            	    "Symbol": "COHU",
            	    "Name": "Cohu, Inc."
            	  },
            	  {
            	    "Symbol": "CFX",
            	    "Name": "Colfax Corporation"
            	  },
            	  {
            	    "Symbol": "CL",
            	    "Name": "Colgate-Palmolive Company"
            	  },
            	  {
            	    "Symbol": "CLCT",
            	    "Name": "Collectors Universe, Inc."
            	  },
            	  {
            	    "Symbol": "COLL",
            	    "Name": "Collegium Pharmaceutical, Inc."
            	  },
            	  {
            	    "Symbol": "CIGI",
            	    "Name": "Colliers International Group Inc."
            	  },
            	  {
            	    "Symbol": "CXE",
            	    "Name": "Colonial High Income Municipal Trust"
            	  },
            	  {
            	    "Symbol": "CIF",
            	    "Name": "Colonial Intermediate High Income Fund"
            	  },
            	  {
            	    "Symbol": "CXH",
            	    "Name": "Colonial Investment Grade Municipal Trust"
            	  },
            	  {
            	    "Symbol": "CMU",
            	    "Name": "Colonial Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "CBAN",
            	    "Name": "Colony Bankcorp, Inc."
            	  },
            	  {
            	    "Symbol": "CLNY",
            	    "Name": "Colony Capital, Inc"
            	  },
            	  {
            	    "Symbol": "CLNY^A",
            	    "Name": "Colony Capital, Inc"
            	  },
            	  {
            	    "Symbol": "CLNY^B",
            	    "Name": "Colony Capital, Inc"
            	  },
            	  {
            	    "Symbol": "CLNY^C",
            	    "Name": "Colony Capital, Inc"
            	  },
            	  {
            	    "Symbol": "SFR",
            	    "Name": "Colony Starwood Homes"
            	  },
            	  {
            	    "Symbol": "COLB",
            	    "Name": "Columbia Banking System, Inc."
            	  },
            	  {
            	    "Symbol": "CPGX",
            	    "Name": "Columbia Pipeline Group, Inc."
            	  },
            	  {
            	    "Symbol": "CPPL",
            	    "Name": "Columbia Pipeline Partners LP"
            	  },
            	  {
            	    "Symbol": "CXP",
            	    "Name": "Columbia Property Trust, Inc."
            	  },
            	  {
            	    "Symbol": "STK",
            	    "Name": "Columbia Seligman Premium Technology Growth Fund, Inc"
            	  },
            	  {
            	    "Symbol": "COLM",
            	    "Name": "Columbia Sportswear Company"
            	  },
            	  {
            	    "Symbol": "CMCO",
            	    "Name": "Columbus McKinnon Corporation"
            	  },
            	  {
            	    "Symbol": "CBMX",
            	    "Name": "CombiMatrix Corporation"
            	  },
            	  {
            	    "Symbol": "CBMXW",
            	    "Name": "CombiMatrix Corporation"
            	  },
            	  {
            	    "Symbol": "CCV",
            	    "Name": "Comcast Corporation"
            	  },
            	  {
            	    "Symbol": "CCZ",
            	    "Name": "Comcast Corporation"
            	  },
            	  {
            	    "Symbol": "CMCSA",
            	    "Name": "Comcast Corporation"
            	  },
            	  {
            	    "Symbol": "CMA",
            	    "Name": "Comerica Incorporated"
            	  },
            	  {
            	    "Symbol": "CMA.WS",
            	    "Name": "Comerica Incorporated"
            	  },
            	  {
            	    "Symbol": "FIX",
            	    "Name": "Comfort Systems USA, Inc."
            	  },
            	  {
            	    "Symbol": "COMM",
            	    "Name": "CommScope Holding Company, Inc."
            	  },
            	  {
            	    "Symbol": "CVLT",
            	    "Name": "CommVault Systems, Inc."
            	  },
            	  {
            	    "Symbol": "MOC",
            	    "Name": "Command Security Corporation"
            	  },
            	  {
            	    "Symbol": "CBSH",
            	    "Name": "Commerce Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "CBSHP",
            	    "Name": "Commerce Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "CUBN",
            	    "Name": "Commerce Union Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "CMC",
            	    "Name": "Commercial Metals Company"
            	  },
            	  {
            	    "Symbol": "CVGI",
            	    "Name": "Commercial Vehicle Group, Inc."
            	  },
            	  {
            	    "Symbol": "CSAL",
            	    "Name": "Communications Sales & Leasing,Inc."
            	  },
            	  {
            	    "Symbol": "JCS",
            	    "Name": "Communications Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CBU",
            	    "Name": "Community Bank System, Inc."
            	  },
            	  {
            	    "Symbol": "ESXB",
            	    "Name": "Community Bankers Trust Corporation."
            	  },
            	  {
            	    "Symbol": "CYH",
            	    "Name": "Community Health Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CYHHZ",
            	    "Name": "Community Health Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CHCT",
            	    "Name": "Community Healthcare Trust Incorporated"
            	  },
            	  {
            	    "Symbol": "CTBI",
            	    "Name": "Community Trust Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CWBC",
            	    "Name": "Community West Bancshares"
            	  },
            	  {
            	    "Symbol": "COB",
            	    "Name": "CommunityOne Bancorp"
            	  },
            	  {
            	    "Symbol": "CIG",
            	    "Name": "Comp En De Mn Cemig ADS"
            	  },
            	  {
            	    "Symbol": "CIG.C",
            	    "Name": "Comp En De Mn Cemig ADS"
            	  },
            	  {
            	    "Symbol": "CIX",
            	    "Name": "CompX International Inc."
            	  },
            	  {
            	    "Symbol": "CBD",
            	    "Name": "Companhia Brasileira de Distribuicao"
            	  },
            	  {
            	    "Symbol": "ELP",
            	    "Name": "Companhia Paranaense de Energia (COPEL)"
            	  },
            	  {
            	    "Symbol": "SBS",
            	    "Name": "Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp"
            	  },
            	  {
            	    "Symbol": "CCU",
            	    "Name": "Compania Cervecerias Unidas, S.A."
            	  },
            	  {
            	    "Symbol": "CODI",
            	    "Name": "Compass Diversified Holdings"
            	  },
            	  {
            	    "Symbol": "CMP",
            	    "Name": "Compass Minerals International, Inc."
            	  },
            	  {
            	    "Symbol": "CGEN",
            	    "Name": "Compugen Ltd."
            	  },
            	  {
            	    "Symbol": "CPSI",
            	    "Name": "Computer Programs and Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CSC",
            	    "Name": "Computer Sciences Corporation"
            	  },
            	  {
            	    "Symbol": "CTG",
            	    "Name": "Computer Task Group, Incorporated"
            	  },
            	  {
            	    "Symbol": "CHCI",
            	    "Name": "Comstock Holding Companies, Inc."
            	  },
            	  {
            	    "Symbol": "LODE",
            	    "Name": "Comstock Mining, Inc."
            	  },
            	  {
            	    "Symbol": "CRK",
            	    "Name": "Comstock Resources, Inc."
            	  },
            	  {
            	    "Symbol": "CMTL",
            	    "Name": "Comtech Telecommunications Corp."
            	  },
            	  {
            	    "Symbol": "CAG",
            	    "Name": "ConAgra Foods, Inc."
            	  },
            	  {
            	    "Symbol": "CNAT",
            	    "Name": "Conatus Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "CNCE",
            	    "Name": "Concert Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CXO",
            	    "Name": "Concho Resources Inc."
            	  },
            	  {
            	    "Symbol": "CCM",
            	    "Name": "Concord Medical Services Holdings Limited"
            	  },
            	  {
            	    "Symbol": "CXRX",
            	    "Name": "Concordia Healthcare Corp."
            	  },
            	  {
            	    "Symbol": "CCUR",
            	    "Name": "Concurrent Computer Corporation"
            	  },
            	  {
            	    "Symbol": "CDOR",
            	    "Name": "Condor Hospitality Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CDORO",
            	    "Name": "Condor Hospitality Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CDORP",
            	    "Name": "Condor Hospitality Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CNNX",
            	    "Name": "Cone Midstream Partners LP"
            	  },
            	  {
            	    "Symbol": "CFMS",
            	    "Name": "ConforMIS, Inc."
            	  },
            	  {
            	    "Symbol": "CNFR",
            	    "Name": "Conifer Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CONN",
            	    "Name": "Conn&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "CNOB",
            	    "Name": "ConnectOne Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CTWS",
            	    "Name": "Connecticut Water Service, Inc."
            	  },
            	  {
            	    "Symbol": "CNXR",
            	    "Name": "Connecture, Inc."
            	  },
            	  {
            	    "Symbol": "COP",
            	    "Name": "ConocoPhillips"
            	  },
            	  {
            	    "Symbol": "CNSL",
            	    "Name": "Consolidated Communications Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ED",
            	    "Name": "Consolidated Edison Inc"
            	  },
            	  {
            	    "Symbol": "CWCO",
            	    "Name": "Consolidated Water Co. Ltd."
            	  },
            	  {
            	    "Symbol": "CTO",
            	    "Name": "Consolidated-Tomoka Land Co."
            	  },
            	  {
            	    "Symbol": "STZ",
            	    "Name": "Constellation Brands Inc"
            	  },
            	  {
            	    "Symbol": "STZ.B",
            	    "Name": "Constellation Brands Inc"
            	  },
            	  {
            	    "Symbol": "CSTM",
            	    "Name": "Constellium N.V."
            	  },
            	  {
            	    "Symbol": "CPSS",
            	    "Name": "Consumer Portfolio Services, Inc."
            	  },
            	  {
            	    "Symbol": "TCS",
            	    "Name": "Container Store (The)"
            	  },
            	  {
            	    "Symbol": "MCF",
            	    "Name": "Contango Oil & Gas Company"
            	  },
            	  {
            	    "Symbol": "CBPX",
            	    "Name": "Continental Building Products, Inc."
            	  },
            	  {
            	    "Symbol": "CUO",
            	    "Name": "Continental Materials Corporation"
            	  },
            	  {
            	    "Symbol": "CLR",
            	    "Name": "Continental Resources, Inc."
            	  },
            	  {
            	    "Symbol": "CFRX",
            	    "Name": "ContraFect Corporation"
            	  },
            	  {
            	    "Symbol": "CFRXW",
            	    "Name": "ContraFect Corporation"
            	  },
            	  {
            	    "Symbol": "CTRV",
            	    "Name": "ContraVir Pharmaceuticals Inc"
            	  },
            	  {
            	    "Symbol": "CTRL",
            	    "Name": "Control4 Corporation"
            	  },
            	  {
            	    "Symbol": "VLRS",
            	    "Name": "Controladora Vuela Compania de Aviacion, S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "CVG",
            	    "Name": "Convergys Corporation"
            	  },
            	  {
            	    "Symbol": "COO",
            	    "Name": "Cooper Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "CTB",
            	    "Name": "Cooper Tire & Rubber Company"
            	  },
            	  {
            	    "Symbol": "CPS",
            	    "Name": "Cooper-Standard Holdings Inc."
            	  },
            	  {
            	    "Symbol": "CPA",
            	    "Name": "Copa Holdings, S.A."
            	  },
            	  {
            	    "Symbol": "CPRT",
            	    "Name": "Copart, Inc."
            	  },
            	  {
            	    "Symbol": "CORR",
            	    "Name": "CorEnergy Infrastructure Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CORR^A",
            	    "Name": "CorEnergy Infrastructure Trust, Inc."
            	  },
            	  {
            	    "Symbol": "CRMD",
            	    "Name": "CorMedix Inc"
            	  },
            	  {
            	    "Symbol": "CRVL",
            	    "Name": "CorVel Corp."
            	  },
            	  {
            	    "Symbol": "CRBP",
            	    "Name": "Corbus Pharmaceuticals Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CORT",
            	    "Name": "Corcept Therapeutics Incorporated"
            	  },
            	  {
            	    "Symbol": "BVA",
            	    "Name": "Cordia Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "CLB",
            	    "Name": "Core Laboratories N.V."
            	  },
            	  {
            	    "Symbol": "CMT",
            	    "Name": "Core Molding Technologies Inc"
            	  },
            	  {
            	    "Symbol": "CORE",
            	    "Name": "Core-Mark Holding Company, Inc."
            	  },
            	  {
            	    "Symbol": "CLGX",
            	    "Name": "CoreLogic, Inc."
            	  },
            	  {
            	    "Symbol": "COR",
            	    "Name": "CoreSite Realty Corporation"
            	  },
            	  {
            	    "Symbol": "COR^A",
            	    "Name": "CoreSite Realty Corporation"
            	  },
            	  {
            	    "Symbol": "CVRS",
            	    "Name": "Corindus Vascular Robotics, Inc."
            	  },
            	  {
            	    "Symbol": "CORI",
            	    "Name": "Corium International, Inc."
            	  },
            	  {
            	    "Symbol": "CSOD",
            	    "Name": "Cornerstone OnDemand, Inc."
            	  },
            	  {
            	    "Symbol": "CRF",
            	    "Name": "Cornerstone Strategic Return Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "CLM",
            	    "Name": "Cornerstone Strategic Value Fund, Inc."
            	  },
            	  {
            	    "Symbol": "GLW",
            	    "Name": "Corning Incorporated"
            	  },
            	  {
            	    "Symbol": "BCA",
            	    "Name": "Corpbanca"
            	  },
            	  {
            	    "Symbol": "GYC",
            	    "Name": "Corporate Asset Backed Corp CABCO"
            	  },
            	  {
            	    "Symbol": "OFC",
            	    "Name": "Corporate Office Properties Trust"
            	  },
            	  {
            	    "Symbol": "OFC^L",
            	    "Name": "Corporate Office Properties Trust"
            	  },
            	  {
            	    "Symbol": "CXW",
            	    "Name": "Corrections Corporation of America"
            	  },
            	  {
            	    "Symbol": "CRVS",
            	    "Name": "Corvus Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CZZ",
            	    "Name": "Cosan Limited"
            	  },
            	  {
            	    "Symbol": "COSI",
            	    "Name": "Cosi, Inc."
            	  },
            	  {
            	    "Symbol": "CMRE",
            	    "Name": "Costamare Inc."
            	  },
            	  {
            	    "Symbol": "CMRE^B",
            	    "Name": "Costamare Inc."
            	  },
            	  {
            	    "Symbol": "CMRE^C",
            	    "Name": "Costamare Inc."
            	  },
            	  {
            	    "Symbol": "CMRE^D",
            	    "Name": "Costamare Inc."
            	  },
            	  {
            	    "Symbol": "COST",
            	    "Name": "Costco Wholesale Corporation"
            	  },
            	  {
            	    "Symbol": "COT",
            	    "Name": "Cott Corporation"
            	  },
            	  {
            	    "Symbol": "COTY",
            	    "Name": "Coty Inc."
            	  },
            	  {
            	    "Symbol": "CPAH",
            	    "Name": "CounterPath Corporation"
            	  },
            	  {
            	    "Symbol": "CCSC",
            	    "Name": "Country Style Cooking Restaurant Chain Co., Ltd."
            	  },
            	  {
            	    "Symbol": "CFC^A",
            	    "Name": "Countrywide Financial Corporation"
            	  },
            	  {
            	    "Symbol": "CFC^B",
            	    "Name": "Countrywide Financial Corporation"
            	  },
            	  {
            	    "Symbol": "ICBK",
            	    "Name": "County Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "CUZ",
            	    "Name": "Cousins Properties Incorporated"
            	  },
            	  {
            	    "Symbol": "CVA",
            	    "Name": "Covanta Holding Corporation"
            	  },
            	  {
            	    "Symbol": "CVTI",
            	    "Name": "Covenant Transportation Group, Inc."
            	  },
            	  {
            	    "Symbol": "COVS",
            	    "Name": "Covisint Corporation"
            	  },
            	  {
            	    "Symbol": "COWN",
            	    "Name": "Cowen Group, Inc."
            	  },
            	  {
            	    "Symbol": "COWNL",
            	    "Name": "Cowen Group, Inc."
            	  },
            	  {
            	    "Symbol": "CBRL",
            	    "Name": "Cracker Barrel Old Country Store, Inc."
            	  },
            	  {
            	    "Symbol": "BREW",
            	    "Name": "Craft Brew Alliance, Inc."
            	  },
            	  {
            	    "Symbol": "CR",
            	    "Name": "Crane Company"
            	  },
            	  {
            	    "Symbol": "CRD.A",
            	    "Name": "Crawford & Company"
            	  },
            	  {
            	    "Symbol": "CRD.B",
            	    "Name": "Crawford & Company"
            	  },
            	  {
            	    "Symbol": "CRAY",
            	    "Name": "Cray Inc"
            	  },
            	  {
            	    "Symbol": "BAP",
            	    "Name": "Credicorp Ltd."
            	  },
            	  {
            	    "Symbol": "CACC",
            	    "Name": "Credit Acceptance Corporation"
            	  },
            	  {
            	    "Symbol": "GLDI",
            	    "Name": "Credit Suisse AG"
            	  },
            	  {
            	    "Symbol": "CIK",
            	    "Name": "Credit Suisse Asset Management Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "CS",
            	    "Name": "Credit Suisse Group"
            	  },
            	  {
            	    "Symbol": "DHY",
            	    "Name": "Credit Suisse High Yield Bond Fund"
            	  },
            	  {
            	    "Symbol": "CREE",
            	    "Name": "Cree, Inc."
            	  },
            	  {
            	    "Symbol": "CPG",
            	    "Name": "Crescent Point Energy Corporation"
            	  },
            	  {
            	    "Symbol": "CEQP",
            	    "Name": "Crestwood Equity Partners LP"
            	  },
            	  {
            	    "Symbol": "CRESY",
            	    "Name": "Cresud S.A.C.I.F. y A."
            	  },
            	  {
            	    "Symbol": "CRTO",
            	    "Name": "Criteo S.A."
            	  },
            	  {
            	    "Symbol": "CROX",
            	    "Name": "Crocs, Inc."
            	  },
            	  {
            	    "Symbol": "CCRN",
            	    "Name": "Cross Country Healthcare, Inc."
            	  },
            	  {
            	    "Symbol": "CRT",
            	    "Name": "Cross Timbers Royalty Trust"
            	  },
            	  {
            	    "Symbol": "CAPL",
            	    "Name": "CrossAmerica Partners LP"
            	  },
            	  {
            	    "Symbol": "XRDC",
            	    "Name": "Crossroads Capital, Inc."
            	  },
            	  {
            	    "Symbol": "CRDS",
            	    "Name": "Crossroads Systems, Inc."
            	  },
            	  {
            	    "Symbol": "CCI",
            	    "Name": "Crown Castle International Corporation"
            	  },
            	  {
            	    "Symbol": "CCI^A",
            	    "Name": "Crown Castle International Corporation"
            	  },
            	  {
            	    "Symbol": "CRWS",
            	    "Name": "Crown Crafts, Inc."
            	  },
            	  {
            	    "Symbol": "CCK",
            	    "Name": "Crown Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CRWN",
            	    "Name": "Crown Media Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CRY",
            	    "Name": "CryoLife, Inc."
            	  },
            	  {
            	    "Symbol": "CYRX",
            	    "Name": "CryoPort, Inc."
            	  },
            	  {
            	    "Symbol": "CYRXW",
            	    "Name": "CryoPort, Inc."
            	  },
            	  {
            	    "Symbol": "CRVP",
            	    "Name": "Crystal Rock Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "CTRP",
            	    "Name": "Ctrip.com International, Ltd."
            	  },
            	  {
            	    "Symbol": "CUBE",
            	    "Name": "CubeSmart"
            	  },
            	  {
            	    "Symbol": "CUBE^A",
            	    "Name": "CubeSmart"
            	  },
            	  {
            	    "Symbol": "CUB",
            	    "Name": "Cubic Corporation"
            	  },
            	  {
            	    "Symbol": "CFR",
            	    "Name": "Cullen\/Frost Bankers, Inc."
            	  },
            	  {
            	    "Symbol": "CFR^A",
            	    "Name": "Cullen\/Frost Bankers, Inc."
            	  },
            	  {
            	    "Symbol": "CFI",
            	    "Name": "Culp, Inc."
            	  },
            	  {
            	    "Symbol": "CPIX",
            	    "Name": "Cumberland Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "CMI",
            	    "Name": "Cummins Inc."
            	  },
            	  {
            	    "Symbol": "CMLS",
            	    "Name": "Cumulus Media Inc."
            	  },
            	  {
            	    "Symbol": "CRIS",
            	    "Name": "Curis, Inc."
            	  },
            	  {
            	    "Symbol": "CW",
            	    "Name": "Curtiss-Wright Corporation"
            	  },
            	  {
            	    "Symbol": "SRF",
            	    "Name": "Cushing Energy Income Fund (The)"
            	  },
            	  {
            	    "Symbol": "SZC",
            	    "Name": "Cushing Renaissance Fund (The)"
            	  },
            	  {
            	    "Symbol": "CUBI",
            	    "Name": "Customers Bancorp, Inc"
            	  },
            	  {
            	    "Symbol": "CUBI^C",
            	    "Name": "Customers Bancorp, Inc"
            	  },
            	  {
            	    "Symbol": "CUBI^D",
            	    "Name": "Customers Bancorp, Inc"
            	  },
            	  {
            	    "Symbol": "CUBS",
            	    "Name": "Customers Bancorp, Inc"
            	  },
            	  {
            	    "Symbol": "CUTR",
            	    "Name": "Cutera, Inc."
            	  },
            	  {
            	    "Symbol": "CSI",
            	    "Name": "Cutwater Select Income Fund"
            	  },
            	  {
            	    "Symbol": "CYAN",
            	    "Name": "Cyanotech Corporation"
            	  },
            	  {
            	    "Symbol": "CYBR",
            	    "Name": "CyberArk Software Ltd."
            	  },
            	  {
            	    "Symbol": "CYBE",
            	    "Name": "CyberOptics Corporation"
            	  },
            	  {
            	    "Symbol": "CYCC",
            	    "Name": "Cyclacel Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CYCCP",
            	    "Name": "Cyclacel Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "CBAY",
            	    "Name": "Cymabay Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "CYNA",
            	    "Name": "Cynapsus Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "CYNO",
            	    "Name": "Cynosure, Inc."
            	  },
            	  {
            	    "Symbol": "CELP",
            	    "Name": "Cypress Energy Partners, L.P."
            	  },
            	  {
            	    "Symbol": "CY",
            	    "Name": "Cypress Semiconductor Corporation"
            	  },
            	  {
            	    "Symbol": "CONE",
            	    "Name": "CyrusOne Inc"
            	  },
            	  {
            	    "Symbol": "CYTR",
            	    "Name": "CytRx Corporation"
            	  },
            	  {
            	    "Symbol": "CYTK",
            	    "Name": "Cytokinetics, Incorporated"
            	  },
            	  {
            	    "Symbol": "CTMX",
            	    "Name": "CytomX Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "CYTX",
            	    "Name": "Cytori Therapeutics Inc"
            	  },
            	  {
            	    "Symbol": "CTSO",
            	    "Name": "Cytosorbents Corporation"
            	  },
            	  {
            	    "Symbol": "DHI",
            	    "Name": "D.R. Horton, Inc."
            	  },
            	  {
            	    "Symbol": "CB",
            	    "Name": "D\/B\/A Chubb Limited New"
            	  },
            	  {
            	    "Symbol": "DQ",
            	    "Name": "DAQO New Energy Corp."
            	  },
            	  {
            	    "Symbol": "DTEA",
            	    "Name": "DAVIDsTEA Inc."
            	  },
            	  {
            	    "Symbol": "DBVT",
            	    "Name": "DBV Technologies S.A."
            	  },
            	  {
            	    "Symbol": "DPM",
            	    "Name": "DCP Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "DCT",
            	    "Name": "DCT Industrial Trust Inc"
            	  },
            	  {
            	    "Symbol": "DDR",
            	    "Name": "DDR Corp."
            	  },
            	  {
            	    "Symbol": "DDR^J",
            	    "Name": "DDR Corp."
            	  },
            	  {
            	    "Symbol": "DDR^K",
            	    "Name": "DDR Corp."
            	  },
            	  {
            	    "Symbol": "DWRE",
            	    "Name": "DEMANDWARE, INC."
            	  },
            	  {
            	    "Symbol": "XRAY",
            	    "Name": "DENTSPLY SIRONA Inc."
            	  },
            	  {
            	    "Symbol": "DGSE",
            	    "Name": "DGSE Companies, Inc."
            	  },
            	  {
            	    "Symbol": "DHX",
            	    "Name": "DHI Group, Inc."
            	  },
            	  {
            	    "Symbol": "DHT",
            	    "Name": "DHT Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "DHXM",
            	    "Name": "DHX Media Ltd."
            	  },
            	  {
            	    "Symbol": "DISH",
            	    "Name": "DISH Network Corporation"
            	  },
            	  {
            	    "Symbol": "DLHC",
            	    "Name": "DLH Holdings Corp."
            	  },
            	  {
            	    "Symbol": "DNBF",
            	    "Name": "DNB Financial Corp"
            	  },
            	  {
            	    "Symbol": "DRD",
            	    "Name": "DRDGOLD Limited"
            	  },
            	  {
            	    "Symbol": "DSKX",
            	    "Name": "DS Healthcare Group, Inc."
            	  },
            	  {
            	    "Symbol": "DSPG",
            	    "Name": "DSP Group, Inc."
            	  },
            	  {
            	    "Symbol": "DST",
            	    "Name": "DST Systems, Inc."
            	  },
            	  {
            	    "Symbol": "DSW",
            	    "Name": "DSW Inc."
            	  },
            	  {
            	    "Symbol": "CADT",
            	    "Name": "DT Asia Investments Limited"
            	  },
            	  {
            	    "Symbol": "CADTR",
            	    "Name": "DT Asia Investments Limited"
            	  },
            	  {
            	    "Symbol": "CADTU",
            	    "Name": "DT Asia Investments Limited"
            	  },
            	  {
            	    "Symbol": "CADTW",
            	    "Name": "DT Asia Investments Limited"
            	  },
            	  {
            	    "Symbol": "DTE",
            	    "Name": "DTE Energy Company"
            	  },
            	  {
            	    "Symbol": "DTQ",
            	    "Name": "DTE Energy Company"
            	  },
            	  {
            	    "Symbol": "DTZ",
            	    "Name": "DTE Energy Company"
            	  },
            	  {
            	    "Symbol": "DTSI",
            	    "Name": "DTS, Inc."
            	  },
            	  {
            	    "Symbol": "DHG",
            	    "Name": "DWS High Income Opportunities Fund, Inc."
            	  },
            	  {
            	    "Symbol": "DXI",
            	    "Name": "DXI Energy Inc."
            	  },
            	  {
            	    "Symbol": "DXPE",
            	    "Name": "DXP Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "DVA",
            	    "Name": "DaVita healthCare Partners Inc."
            	  },
            	  {
            	    "Symbol": "DJCO",
            	    "Name": "Daily Journal Corp. (S.C.)"
            	  },
            	  {
            	    "Symbol": "DAKP",
            	    "Name": "Dakota Plains Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "DAKT",
            	    "Name": "Daktronics, Inc."
            	  },
            	  {
            	    "Symbol": "DAN",
            	    "Name": "Dana Holding Corporation"
            	  },
            	  {
            	    "Symbol": "DHR",
            	    "Name": "Danaher Corporation"
            	  },
            	  {
            	    "Symbol": "DAC",
            	    "Name": "Danaos Corporation"
            	  },
            	  {
            	    "Symbol": "DRI",
            	    "Name": "Darden Restaurants, Inc."
            	  },
            	  {
            	    "Symbol": "DAR",
            	    "Name": "Darling Ingredients Inc."
            	  },
            	  {
            	    "Symbol": "DAIO",
            	    "Name": "Data I\/O Corporation"
            	  },
            	  {
            	    "Symbol": "DTLK",
            	    "Name": "Datalink Corporation"
            	  },
            	  {
            	    "Symbol": "DRAM",
            	    "Name": "Dataram Corporation"
            	  },
            	  {
            	    "Symbol": "DWCH",
            	    "Name": "Datawatch Corporation"
            	  },
            	  {
            	    "Symbol": "PLAY",
            	    "Name": "Dave & Buster&#39;s Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "DWSN",
            	    "Name": "Dawson Geophysical Company"
            	  },
            	  {
            	    "Symbol": "DXR",
            	    "Name": "Daxor Corporation"
            	  },
            	  {
            	    "Symbol": "DV",
            	    "Name": "DeVry Education Group Inc."
            	  },
            	  {
            	    "Symbol": "DF",
            	    "Name": "Dean Foods Company"
            	  },
            	  {
            	    "Symbol": "DECK",
            	    "Name": "Deckers Outdoor Corporation"
            	  },
            	  {
            	    "Symbol": "DE",
            	    "Name": "Deere & Company"
            	  },
            	  {
            	    "Symbol": "DHRM",
            	    "Name": "Dehaier Medical Systems Limited"
            	  },
            	  {
            	    "Symbol": "DFRG",
            	    "Name": "Del Frisco&#39;s Restaurant Group, Inc."
            	  },
            	  {
            	    "Symbol": "TACO",
            	    "Name": "Del Taco Restaurants, Inc."
            	  },
            	  {
            	    "Symbol": "TACOW",
            	    "Name": "Del Taco Restaurants, Inc."
            	  },
            	  {
            	    "Symbol": "DEX",
            	    "Name": "Delaware Enhanced Global Dividend"
            	  },
            	  {
            	    "Symbol": "VCF",
            	    "Name": "Delaware Investments Colorado Municipal Income Fund, Inc"
            	  },
            	  {
            	    "Symbol": "DDF",
            	    "Name": "Delaware Investments Dividend & Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "VFL",
            	    "Name": "Delaware Investments Florida Insured Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "VMM",
            	    "Name": "Delaware Investments Minnesota Municipal Income Fund II, Inc."
            	  },
            	  {
            	    "Symbol": "DCTH",
            	    "Name": "Delcath Systems, Inc."
            	  },
            	  {
            	    "Symbol": "DKL",
            	    "Name": "Delek Logistics Partners, L.P."
            	  },
            	  {
            	    "Symbol": "DK",
            	    "Name": "Delek US Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "DLPH",
            	    "Name": "Delphi Automotive plc"
            	  },
            	  {
            	    "Symbol": "DAL",
            	    "Name": "Delta Air Lines, Inc."
            	  },
            	  {
            	    "Symbol": "DLA",
            	    "Name": "Delta Apparel, Inc."
            	  },
            	  {
            	    "Symbol": "DGAS",
            	    "Name": "Delta Natural Gas Company, Inc."
            	  },
            	  {
            	    "Symbol": "DELT",
            	    "Name": "Delta Technology Holdings Limited"
            	  },
            	  {
            	    "Symbol": "DELTW",
            	    "Name": "Delta Technology Holdings Limited"
            	  },
            	  {
            	    "Symbol": "DEL",
            	    "Name": "Deltic Timber Corporation"
            	  },
            	  {
            	    "Symbol": "DLX",
            	    "Name": "Deluxe Corporation"
            	  },
            	  {
            	    "Symbol": "DMD",
            	    "Name": "Demand Media Inc."
            	  },
            	  {
            	    "Symbol": "DNR",
            	    "Name": "Denbury Resources Inc."
            	  },
            	  {
            	    "Symbol": "DNN",
            	    "Name": "Denison Mine Corp"
            	  },
            	  {
            	    "Symbol": "DENN",
            	    "Name": "Denny&#39;s Corporation"
            	  },
            	  {
            	    "Symbol": "DEPO",
            	    "Name": "Depomed, Inc."
            	  },
            	  {
            	    "Symbol": "DSCI",
            	    "Name": "Derma Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "DERM",
            	    "Name": "Dermira, Inc."
            	  },
            	  {
            	    "Symbol": "DEST",
            	    "Name": "Destination Maternity Corporation"
            	  },
            	  {
            	    "Symbol": "DXLG",
            	    "Name": "Destination XL Group, Inc."
            	  },
            	  {
            	    "Symbol": "DSWL",
            	    "Name": "Deswell Industries, Inc."
            	  },
            	  {
            	    "Symbol": "DTRM",
            	    "Name": "Determine, Inc."
            	  },
            	  {
            	    "Symbol": "DKT",
            	    "Name": "Deutsch Bk Contingent Cap Tr V"
            	  },
            	  {
            	    "Symbol": "DB",
            	    "Name": "Deutsche Bank AG"
            	  },
            	  {
            	    "Symbol": "DTK",
            	    "Name": "Deutsche Bank AG"
            	  },
            	  {
            	    "Symbol": "DXB",
            	    "Name": "Deutsche Bank AG"
            	  },
            	  {
            	    "Symbol": "DVN",
            	    "Name": "Devon Energy Corporation"
            	  },
            	  {
            	    "Symbol": "DXCM",
            	    "Name": "DexCom, Inc."
            	  },
            	  {
            	    "Symbol": "DEO",
            	    "Name": "Diageo plc"
            	  },
            	  {
            	    "Symbol": "DHIL",
            	    "Name": "Diamond Hill Investment Group, Inc."
            	  },
            	  {
            	    "Symbol": "DO",
            	    "Name": "Diamond Offshore Drilling, Inc."
            	  },
            	  {
            	    "Symbol": "DRII",
            	    "Name": "Diamond Resorts International, Inc."
            	  },
            	  {
            	    "Symbol": "FANG",
            	    "Name": "Diamondback Energy, Inc."
            	  },
            	  {
            	    "Symbol": "DRH",
            	    "Name": "Diamondrock Hospitality Company"
            	  },
            	  {
            	    "Symbol": "DCIX",
            	    "Name": "Diana Containerships Inc."
            	  },
            	  {
            	    "Symbol": "DSX",
            	    "Name": "Diana Shipping inc."
            	  },
            	  {
            	    "Symbol": "DSXN",
            	    "Name": "Diana Shipping inc."
            	  },
            	  {
            	    "Symbol": "DSX^B",
            	    "Name": "Diana Shipping inc."
            	  },
            	  {
            	    "Symbol": "DRNA",
            	    "Name": "Dicerna Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "DKS",
            	    "Name": "Dick&#39;s Sporting Goods Inc"
            	  },
            	  {
            	    "Symbol": "DBD",
            	    "Name": "Diebold, Incorporated"
            	  },
            	  {
            	    "Symbol": "DFBG",
            	    "Name": "Differential Brands Group Inc."
            	  },
            	  {
            	    "Symbol": "DGII",
            	    "Name": "Digi International Inc."
            	  },
            	  {
            	    "Symbol": "DMRC",
            	    "Name": "Digimarc Corporation"
            	  },
            	  {
            	    "Symbol": "DRAD",
            	    "Name": "Digirad Corporation"
            	  },
            	  {
            	    "Symbol": "DGLY",
            	    "Name": "Digital Ally, Inc."
            	  },
            	  {
            	    "Symbol": "DPW",
            	    "Name": "Digital Power Corporation"
            	  },
            	  {
            	    "Symbol": "DLR",
            	    "Name": "Digital Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "DLR^E",
            	    "Name": "Digital Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "DLR^F",
            	    "Name": "Digital Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "DLR^G",
            	    "Name": "Digital Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "DLR^H",
            	    "Name": "Digital Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "DLR^I",
            	    "Name": "Digital Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "APPS",
            	    "Name": "Digital Turbine, Inc."
            	  },
            	  {
            	    "Symbol": "DGI",
            	    "Name": "DigitalGlobe, Inc"
            	  },
            	  {
            	    "Symbol": "DDS",
            	    "Name": "Dillard&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "DDT",
            	    "Name": "Dillard&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "DCOM",
            	    "Name": "Dime Community Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "DMTX",
            	    "Name": "Dimension Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "DIN",
            	    "Name": "DineEquity, Inc"
            	  },
            	  {
            	    "Symbol": "DIOD",
            	    "Name": "Diodes Incorporated"
            	  },
            	  {
            	    "Symbol": "DPRX",
            	    "Name": "Dipexium Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "DPLO",
            	    "Name": "Diplomat Pharmacy, Inc."
            	  },
            	  {
            	    "Symbol": "DFS",
            	    "Name": "Discover Financial Services"
            	  },
            	  {
            	    "Symbol": "DFS^B",
            	    "Name": "Discover Financial Services"
            	  },
            	  {
            	    "Symbol": "DISCA",
            	    "Name": "Discovery Communications, Inc."
            	  },
            	  {
            	    "Symbol": "DISCB",
            	    "Name": "Discovery Communications, Inc."
            	  },
            	  {
            	    "Symbol": "DISCK",
            	    "Name": "Discovery Communications, Inc."
            	  },
            	  {
            	    "Symbol": "DSCO",
            	    "Name": "Discovery Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "DVCR",
            	    "Name": "Diversicare Healthcare Services Inc."
            	  },
            	  {
            	    "Symbol": "DRA",
            	    "Name": "Diversified Real Asset Income Fund"
            	  },
            	  {
            	    "Symbol": "SAUC",
            	    "Name": "Diversified Restaurant Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "DNI",
            	    "Name": "Dividend and Income Fund"
            	  },
            	  {
            	    "Symbol": "DSS",
            	    "Name": "Document Security Systems, Inc."
            	  },
            	  {
            	    "Symbol": "DLB",
            	    "Name": "Dolby Laboratories"
            	  },
            	  {
            	    "Symbol": "DG",
            	    "Name": "Dollar General Corporation"
            	  },
            	  {
            	    "Symbol": "DLTR",
            	    "Name": "Dollar Tree, Inc."
            	  },
            	  {
            	    "Symbol": "DDC",
            	    "Name": "Dominion Diamond Corporation"
            	  },
            	  {
            	    "Symbol": "DM",
            	    "Name": "Dominion Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "D",
            	    "Name": "Dominion Resources, Inc."
            	  },
            	  {
            	    "Symbol": "DCUA",
            	    "Name": "Dominion Resources, Inc."
            	  },
            	  {
            	    "Symbol": "DCUB",
            	    "Name": "Dominion Resources, Inc."
            	  },
            	  {
            	    "Symbol": "DCUC",
            	    "Name": "Dominion Resources, Inc."
            	  },
            	  {
            	    "Symbol": "DPZ",
            	    "Name": "Domino&#39;s Pizza Inc"
            	  },
            	  {
            	    "Symbol": "UFS",
            	    "Name": "Domtar Corporation"
            	  },
            	  {
            	    "Symbol": "DCI",
            	    "Name": "Donaldson Company, Inc."
            	  },
            	  {
            	    "Symbol": "DGICA",
            	    "Name": "Donegal Group, Inc."
            	  },
            	  {
            	    "Symbol": "DGICB",
            	    "Name": "Donegal Group, Inc."
            	  },
            	  {
            	    "Symbol": "DMLP",
            	    "Name": "Dorchester Minerals, L.P."
            	  },
            	  {
            	    "Symbol": "LPG",
            	    "Name": "Dorian LPG Ltd."
            	  },
            	  {
            	    "Symbol": "DORM",
            	    "Name": "Dorman Products, Inc."
            	  },
            	  {
            	    "Symbol": "EAGL",
            	    "Name": "Double Eagle Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "EAGLU",
            	    "Name": "Double Eagle Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "EAGLW",
            	    "Name": "Double Eagle Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "DSL",
            	    "Name": "DoubleLine Income Solutions Fund"
            	  },
            	  {
            	    "Symbol": "DBL",
            	    "Name": "DoubleLine Opportunistic Credit Fund"
            	  },
            	  {
            	    "Symbol": "PLOW",
            	    "Name": "Douglas Dynamics, Inc."
            	  },
            	  {
            	    "Symbol": "DEI",
            	    "Name": "Douglas Emmett, Inc."
            	  },
            	  {
            	    "Symbol": "DOV",
            	    "Name": "Dover Corporation"
            	  },
            	  {
            	    "Symbol": "DDE",
            	    "Name": "Dover Downs Gaming & Entertainment Inc"
            	  },
            	  {
            	    "Symbol": "DVD",
            	    "Name": "Dover Motorsports, Inc."
            	  },
            	  {
            	    "Symbol": "DOW",
            	    "Name": "Dow Chemical Company (The)"
            	  },
            	  {
            	    "Symbol": "DPS",
            	    "Name": "Dr Pepper Snapple Group, Inc"
            	  },
            	  {
            	    "Symbol": "RDY",
            	    "Name": "Dr. Reddy&#39;s Laboratories Ltd"
            	  },
            	  {
            	    "Symbol": "DDAY",
            	    "Name": "DraftDay Fantasy Sports, Inc."
            	  },
            	  {
            	    "Symbol": "DRWI",
            	    "Name": "DragonWave Inc"
            	  },
            	  {
            	    "Symbol": "DRWIW",
            	    "Name": "DragonWave Inc"
            	  },
            	  {
            	    "Symbol": "DWA",
            	    "Name": "Dreamworks Animation SKG, Inc."
            	  },
            	  {
            	    "Symbol": "DW",
            	    "Name": "Drew Industries Incorporated"
            	  },
            	  {
            	    "Symbol": "DHF",
            	    "Name": "Dreyfus High Yield Strategies Fund"
            	  },
            	  {
            	    "Symbol": "DMB",
            	    "Name": "Dreyfus Municipal Bond Infrastructure Fund, Inc."
            	  },
            	  {
            	    "Symbol": "DMF",
            	    "Name": "Dreyfus Municipal Income, Inc."
            	  },
            	  {
            	    "Symbol": "DSM",
            	    "Name": "Dreyfus Strategic Municipal Bond Fund, Inc."
            	  },
            	  {
            	    "Symbol": "LEO",
            	    "Name": "Dreyfus Strategic Municipals, Inc."
            	  },
            	  {
            	    "Symbol": "DRQ",
            	    "Name": "Dril-Quip, Inc."
            	  },
            	  {
            	    "Symbol": "DRYS",
            	    "Name": "DryShips Inc."
            	  },
            	  {
            	    "Symbol": "DCO",
            	    "Name": "Ducommun Incorporated"
            	  },
            	  {
            	    "Symbol": "DPG",
            	    "Name": "Duff & Phelps Global Utility Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "DSE",
            	    "Name": "Duff & Phelps Select Energy MLP Fund Inc."
            	  },
            	  {
            	    "Symbol": "DNP",
            	    "Name": "Duff & Phelps Utilities Income, Inc."
            	  },
            	  {
            	    "Symbol": "DTF",
            	    "Name": "Duff & Phelps Utilities Tax-Free Income, Inc."
            	  },
            	  {
            	    "Symbol": "DUC",
            	    "Name": "Duff & Phelps Utility & Corporate Bond Trust, Inc."
            	  },
            	  {
            	    "Symbol": "DUK",
            	    "Name": "Duke Energy Corporation"
            	  },
            	  {
            	    "Symbol": "DUKH",
            	    "Name": "Duke Energy Corporation"
            	  },
            	  {
            	    "Symbol": "DRE",
            	    "Name": "Duke Realty Corporation"
            	  },
            	  {
            	    "Symbol": "DLTH",
            	    "Name": "Duluth Holdings Inc."
            	  },
            	  {
            	    "Symbol": "DNB",
            	    "Name": "Dun & Bradstreet Corporation (The)"
            	  },
            	  {
            	    "Symbol": "DNKN",
            	    "Name": "Dunkin&#39; Brands Group, Inc."
            	  },
            	  {
            	    "Symbol": "DFT",
            	    "Name": "Dupont Fabros Technology, Inc."
            	  },
            	  {
            	    "Symbol": "DFT^A",
            	    "Name": "Dupont Fabros Technology, Inc."
            	  },
            	  {
            	    "Symbol": "DFT^B",
            	    "Name": "Dupont Fabros Technology, Inc."
            	  },
            	  {
            	    "Symbol": "DRRX",
            	    "Name": "Durect Corporation"
            	  },
            	  {
            	    "Symbol": "DY",
            	    "Name": "Dycom Industries, Inc."
            	  },
            	  {
            	    "Symbol": "DLNG",
            	    "Name": "Dynagas LNG Partners LP"
            	  },
            	  {
            	    "Symbol": "DLNG^A",
            	    "Name": "Dynagas LNG Partners LP"
            	  },
            	  {
            	    "Symbol": "BOOM",
            	    "Name": "Dynamic Materials Corporation"
            	  },
            	  {
            	    "Symbol": "DYSL",
            	    "Name": "Dynasil Corporation of America"
            	  },
            	  {
            	    "Symbol": "DYNT",
            	    "Name": "Dynatronics Corporation"
            	  },
            	  {
            	    "Symbol": "DVAX",
            	    "Name": "Dynavax Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "DYN",
            	    "Name": "Dynegy Inc."
            	  },
            	  {
            	    "Symbol": "DYN.WS",
            	    "Name": "Dynegy Inc."
            	  },
            	  {
            	    "Symbol": "DYN^A",
            	    "Name": "Dynegy Inc."
            	  },
            	  {
            	    "Symbol": "DX",
            	    "Name": "Dynex Capital, Inc."
            	  },
            	  {
            	    "Symbol": "DX^A",
            	    "Name": "Dynex Capital, Inc."
            	  },
            	  {
            	    "Symbol": "DX^B",
            	    "Name": "Dynex Capital, Inc."
            	  },
            	  {
            	    "Symbol": "ETFC",
            	    "Name": "E*TRADE Financial Corporation"
            	  },
            	  {
            	    "Symbol": "DANG",
            	    "Name": "E-Commerce China Dangdang Inc."
            	  },
            	  {
            	    "Symbol": "EJ",
            	    "Name": "E-House (China) Holdings Limited"
            	  },
            	  {
            	    "Symbol": "ECAC",
            	    "Name": "E-compass Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "ECACR",
            	    "Name": "E-compass Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "ECACU",
            	    "Name": "E-compass Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "DD",
            	    "Name": "E.I. du Pont de Nemours and Company"
            	  },
            	  {
            	    "Symbol": "DD^A",
            	    "Name": "E.I. du Pont de Nemours and Company"
            	  },
            	  {
            	    "Symbol": "DD^B",
            	    "Name": "E.I. du Pont de Nemours and Company"
            	  },
            	  {
            	    "Symbol": "SSP",
            	    "Name": "E.W. Scripps Company (The)"
            	  },
            	  {
            	    "Symbol": "ECT",
            	    "Name": "ECA Marcellus Trust I"
            	  },
            	  {
            	    "Symbol": "EDAP",
            	    "Name": "EDAP TMS S.A."
            	  },
            	  {
            	    "Symbol": "EMC",
            	    "Name": "EMC Corporation"
            	  },
            	  {
            	    "Symbol": "EMCI",
            	    "Name": "EMC Insurance Group Inc."
            	  },
            	  {
            	    "Symbol": "EME",
            	    "Name": "EMCOR Group, Inc."
            	  },
            	  {
            	    "Symbol": "EMKR",
            	    "Name": "EMCORE Corporation"
            	  },
            	  {
            	    "Symbol": "ETP",
            	    "Name": "ENERGY TRANSFER PARTNERS"
            	  },
            	  {
            	    "Symbol": "ENG",
            	    "Name": "ENGlobal Corporation"
            	  },
            	  {
            	    "Symbol": "E",
            	    "Name": "ENI S.p.A."
            	  },
            	  {
            	    "Symbol": "ESV",
            	    "Name": "ENSCO plc"
            	  },
            	  {
            	    "Symbol": "ENSV",
            	    "Name": "ENSERVCO Corporation"
            	  },
            	  {
            	    "Symbol": "EOG",
            	    "Name": "EOG Resources, Inc."
            	  },
            	  {
            	    "Symbol": "EPE",
            	    "Name": "EP Energy Corporation"
            	  },
            	  {
            	    "Symbol": "EPAM",
            	    "Name": "EPAM Systems, Inc."
            	  },
            	  {
            	    "Symbol": "EPIQ",
            	    "Name": "EPIQ Systems, Inc."
            	  },
            	  {
            	    "Symbol": "EPRS",
            	    "Name": "EPIRUS Biopharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "EPR",
            	    "Name": "EPR Properties"
            	  },
            	  {
            	    "Symbol": "EPR^C",
            	    "Name": "EPR Properties"
            	  },
            	  {
            	    "Symbol": "EPR^E",
            	    "Name": "EPR Properties"
            	  },
            	  {
            	    "Symbol": "EPR^F",
            	    "Name": "EPR Properties"
            	  },
            	  {
            	    "Symbol": "EQT",
            	    "Name": "EQT Corporation"
            	  },
            	  {
            	    "Symbol": "EQGP",
            	    "Name": "EQT GP Holdings, LP"
            	  },
            	  {
            	    "Symbol": "EQM",
            	    "Name": "EQT Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "ERB",
            	    "Name": "ERBA Diagnostics, Inc."
            	  },
            	  {
            	    "Symbol": "ESE",
            	    "Name": "ESCO Technologies Inc."
            	  },
            	  {
            	    "Symbol": "ESSA",
            	    "Name": "ESSA Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "EPIX",
            	    "Name": "ESSA Pharma Inc."
            	  },
            	  {
            	    "Symbol": "EVEP",
            	    "Name": "EV Energy Partners, L.P."
            	  },
            	  {
            	    "Symbol": "EVLV",
            	    "Name": "EVINE Live Inc."
            	  },
            	  {
            	    "Symbol": "EXAS",
            	    "Name": "EXACT Sciences Corporation"
            	  },
            	  {
            	    "Symbol": "XCO",
            	    "Name": "EXCO Resources NL"
            	  },
            	  {
            	    "Symbol": "EXFO",
            	    "Name": "EXFO Inc"
            	  },
            	  {
            	    "Symbol": "EZPW",
            	    "Name": "EZCORP, Inc."
            	  },
            	  {
            	    "Symbol": "EBMT",
            	    "Name": "Eagle Bancorp Montana, Inc."
            	  },
            	  {
            	    "Symbol": "EGBN",
            	    "Name": "Eagle Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "EGLE",
            	    "Name": "Eagle Bulk Shipping Inc."
            	  },
            	  {
            	    "Symbol": "GRF",
            	    "Name": "Eagle Capital Growth Fund, Inc."
            	  },
            	  {
            	    "Symbol": "EGIF",
            	    "Name": "Eagle Growth and Income Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "EXP",
            	    "Name": "Eagle Materials Inc"
            	  },
            	  {
            	    "Symbol": "EGRX",
            	    "Name": "Eagle Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ECC",
            	    "Name": "Eagle Point Credit Company Inc."
            	  },
            	  {
            	    "Symbol": "ECCA",
            	    "Name": "Eagle Point Credit Company Inc."
            	  },
            	  {
            	    "Symbol": "ECCZ",
            	    "Name": "Eagle Point Credit Company Inc."
            	  },
            	  {
            	    "Symbol": "ELNK",
            	    "Name": "EarthLink Holdings Corp."
            	  },
            	  {
            	    "Symbol": "ESTE",
            	    "Name": "Earthstone Energy, Inc."
            	  },
            	  {
            	    "Symbol": "EWBC",
            	    "Name": "East West Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "EGP",
            	    "Name": "EastGroup Properties, Inc."
            	  },
            	  {
            	    "Symbol": "EACQ",
            	    "Name": "Easterly Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "EACQU",
            	    "Name": "Easterly Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "EACQW",
            	    "Name": "Easterly Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "DEA",
            	    "Name": "Easterly Government Properties, Inc."
            	  },
            	  {
            	    "Symbol": "EML",
            	    "Name": "Eastern Company (The)"
            	  },
            	  {
            	    "Symbol": "EVBS",
            	    "Name": "Eastern Virginia Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "EMN",
            	    "Name": "Eastman Chemical Company"
            	  },
            	  {
            	    "Symbol": "KODK",
            	    "Name": "Eastman Kodak Company"
            	  },
            	  {
            	    "Symbol": "KODK.WS",
            	    "Name": "Eastman Kodak Company"
            	  },
            	  {
            	    "Symbol": "KODK.WS.A",
            	    "Name": "Eastman Kodak Company"
            	  },
            	  {
            	    "Symbol": "ETN",
            	    "Name": "Eaton Corporation, PLC"
            	  },
            	  {
            	    "Symbol": "EVM",
            	    "Name": "Eaton Vance California Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "EIA",
            	    "Name": "Eaton Vance California Municipal Bond Fund II"
            	  },
            	  {
            	    "Symbol": "CEV",
            	    "Name": "Eaton Vance California Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "ETV",
            	    "Name": "Eaton Vance Corporation"
            	  },
            	  {
            	    "Symbol": "ETW",
            	    "Name": "Eaton Vance Corporation"
            	  },
            	  {
            	    "Symbol": "EV",
            	    "Name": "Eaton Vance Corporation"
            	  },
            	  {
            	    "Symbol": "EOI",
            	    "Name": "Eaton Vance Enhance Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "EOS",
            	    "Name": "Eaton Vance Enhanced Equity Income Fund II"
            	  },
            	  {
            	    "Symbol": "EFT",
            	    "Name": "Eaton Vance Floating Rate Income Trust"
            	  },
            	  {
            	    "Symbol": "EVV",
            	    "Name": "Eaton Vance Limited Duration Income Fund"
            	  },
            	  {
            	    "Symbol": "MAB",
            	    "Name": "Eaton Vance Massachusetts Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "MMV",
            	    "Name": "Eaton Vance Massachusetts Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "MIW",
            	    "Name": "Eaton Vance Michigan Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "EMI",
            	    "Name": "Eaton Vance Michigan Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "EIM",
            	    "Name": "Eaton Vance Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "EIV",
            	    "Name": "Eaton Vance Municipal Bond Fund II"
            	  },
            	  {
            	    "Symbol": "ETX",
            	    "Name": "Eaton Vance Municipal Income 2028 Term Trust"
            	  },
            	  {
            	    "Symbol": "EOT",
            	    "Name": "Eaton Vance Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "EVN",
            	    "Name": "Eaton Vance Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "EMJ",
            	    "Name": "Eaton Vance New Jersey Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "EVJ",
            	    "Name": "Eaton Vance New Jersey Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "ENX",
            	    "Name": "Eaton Vance New York Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "NYH",
            	    "Name": "Eaton Vance New York Municipal Bond Fund II"
            	  },
            	  {
            	    "Symbol": "EVY",
            	    "Name": "Eaton Vance New York Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "EVSTC",
            	    "Name": "Eaton Vance NextShares Trust"
            	  },
            	  {
            	    "Symbol": "EIO",
            	    "Name": "Eaton Vance Ohio Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "EVO",
            	    "Name": "Eaton Vance Ohio Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "EIP",
            	    "Name": "Eaton Vance Pennsylvania Municipal Bond Fund"
            	  },
            	  {
            	    "Symbol": "EVP",
            	    "Name": "Eaton Vance Pennsylvania Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "ETJ",
            	    "Name": "Eaton Vance Risk-Managed Diversified Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "EFR",
            	    "Name": "Eaton Vance Senior Floating-Rate Fund"
            	  },
            	  {
            	    "Symbol": "EVF",
            	    "Name": "Eaton Vance Senior Income Trust"
            	  },
            	  {
            	    "Symbol": "EVG",
            	    "Name": "Eaton Vance Short Diversified Income Fund"
            	  },
            	  {
            	    "Symbol": "EVT",
            	    "Name": "Eaton Vance Tax Advantaged Dividend Income Fund"
            	  },
            	  {
            	    "Symbol": "ETO",
            	    "Name": "Eaton Vance Tax-Advantage Global Dividend Opp"
            	  },
            	  {
            	    "Symbol": "EXD",
            	    "Name": "Eaton Vance Tax-Advantaged Bond"
            	  },
            	  {
            	    "Symbol": "ETG",
            	    "Name": "Eaton Vance Tax-Advantaged Global Dividend Income Fund"
            	  },
            	  {
            	    "Symbol": "ETB",
            	    "Name": "Eaton Vance Tax-Managed Buy-Write Income Fund"
            	  },
            	  {
            	    "Symbol": "ETY",
            	    "Name": "Eaton Vance Tax-Managed Diversified Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "EXG",
            	    "Name": "Eaton Vance Tax-Managed Global Diversified Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "EFF",
            	    "Name": "Eaton vance Floating-Rate Income Plus Fund"
            	  },
            	  {
            	    "Symbol": "EBIX",
            	    "Name": "Ebix, Inc."
            	  },
            	  {
            	    "Symbol": "ELON",
            	    "Name": "Echelon Corporation"
            	  },
            	  {
            	    "Symbol": "ECHO",
            	    "Name": "Echo Global Logistics, Inc."
            	  },
            	  {
            	    "Symbol": "ECTE",
            	    "Name": "Echo Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "SATS",
            	    "Name": "EchoStar Corporation"
            	  },
            	  {
            	    "Symbol": "ECR",
            	    "Name": "Eclipse Resources Corporation"
            	  },
            	  {
            	    "Symbol": "ESES",
            	    "Name": "Eco-Stim Energy Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "ECL",
            	    "Name": "Ecolab Inc."
            	  },
            	  {
            	    "Symbol": "EEI",
            	    "Name": "Ecology and Environment, Inc."
            	  },
            	  {
            	    "Symbol": "EC",
            	    "Name": "Ecopetrol S.A."
            	  },
            	  {
            	    "Symbol": "EDGE",
            	    "Name": "Edge Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "EDGW",
            	    "Name": "Edgewater Technology, Inc."
            	  },
            	  {
            	    "Symbol": "EIX",
            	    "Name": "Edison International"
            	  },
            	  {
            	    "Symbol": "EDIT",
            	    "Name": "Editas Medicine, Inc."
            	  },
            	  {
            	    "Symbol": "EDR",
            	    "Name": "Education Realty Trust Inc."
            	  },
            	  {
            	    "Symbol": "EDUC",
            	    "Name": "Educational Development Corporation"
            	  },
            	  {
            	    "Symbol": "EW",
            	    "Name": "Edwards Lifesciences Corporation"
            	  },
            	  {
            	    "Symbol": "EGLT",
            	    "Name": "Egalet Corporation"
            	  },
            	  {
            	    "Symbol": "EP^C",
            	    "Name": "El Paso Corporation"
            	  },
            	  {
            	    "Symbol": "EE",
            	    "Name": "El Paso Electric Company"
            	  },
            	  {
            	    "Symbol": "LOCO",
            	    "Name": "El Pollo Loco Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "EMITF",
            	    "Name": "Elbit Imaging Ltd."
            	  },
            	  {
            	    "Symbol": "ESLT",
            	    "Name": "Elbit Systems Ltd."
            	  },
            	  {
            	    "Symbol": "EGO",
            	    "Name": "Eldorado Gold Corporation"
            	  },
            	  {
            	    "Symbol": "ERI",
            	    "Name": "Eldorado Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "ELRC",
            	    "Name": "Electro Rent Corporation"
            	  },
            	  {
            	    "Symbol": "ESIO",
            	    "Name": "Electro Scientific Industries, Inc."
            	  },
            	  {
            	    "Symbol": "ELSE",
            	    "Name": "Electro-Sensors, Inc."
            	  },
            	  {
            	    "Symbol": "ELMD",
            	    "Name": "Electromed, Inc."
            	  },
            	  {
            	    "Symbol": "EA",
            	    "Name": "Electronic Arts Inc."
            	  },
            	  {
            	    "Symbol": "EFII",
            	    "Name": "Electronics for Imaging, Inc."
            	  },
            	  {
            	    "Symbol": "ELEC",
            	    "Name": "Electrum Special Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "ELECU",
            	    "Name": "Electrum Special Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "ELECW",
            	    "Name": "Electrum Special Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "ETAK",
            	    "Name": "Elephant Talk Communications Corp."
            	  },
            	  {
            	    "Symbol": "EBIO",
            	    "Name": "Eleven Biotherapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "LLY",
            	    "Name": "Eli Lilly and Company"
            	  },
            	  {
            	    "Symbol": "RDEN",
            	    "Name": "Elizabeth Arden, Inc."
            	  },
            	  {
            	    "Symbol": "CAPX",
            	    "Name": "Elkhorn S&P 500 Capital Expenditures Portfolio"
            	  },
            	  {
            	    "Symbol": "ELLI",
            	    "Name": "Ellie Mae, Inc."
            	  },
            	  {
            	    "Symbol": "EFC",
            	    "Name": "Ellington Financial LLC"
            	  },
            	  {
            	    "Symbol": "EARN",
            	    "Name": "Ellington Residential Mortgage REIT"
            	  },
            	  {
            	    "Symbol": "ELLO",
            	    "Name": "Ellomay Capital Ltd."
            	  },
            	  {
            	    "Symbol": "ECF",
            	    "Name": "Ellsworth Growth and Income Fund Ltd."
            	  },
            	  {
            	    "Symbol": "ESBK",
            	    "Name": "Elmira Savings Bank NY (The)"
            	  },
            	  {
            	    "Symbol": "ELTK",
            	    "Name": "Eltek Ltd."
            	  },
            	  {
            	    "Symbol": "AKO.A",
            	    "Name": "Embotelladora Andina S.A."
            	  },
            	  {
            	    "Symbol": "AKO.B",
            	    "Name": "Embotelladora Andina S.A."
            	  },
            	  {
            	    "Symbol": "ERJ",
            	    "Name": "Embraer-Empresa Brasileira de Aeronautica"
            	  },
            	  {
            	    "Symbol": "EMCF",
            	    "Name": "Emclaire Financial Corp"
            	  },
            	  {
            	    "Symbol": "EOX",
            	    "Name": "Emerald Oil, Inc."
            	  },
            	  {
            	    "Symbol": "EMES",
            	    "Name": "Emerge Energy Services LP"
            	  },
            	  {
            	    "Symbol": "EBS",
            	    "Name": "Emergent Biosolutions, Inc."
            	  },
            	  {
            	    "Symbol": "EMG",
            	    "Name": "Emergent Capital, Inc."
            	  },
            	  {
            	    "Symbol": "EMR",
            	    "Name": "Emerson Electric Company"
            	  },
            	  {
            	    "Symbol": "MSN",
            	    "Name": "Emerson Radio Corporation"
            	  },
            	  {
            	    "Symbol": "EMMS",
            	    "Name": "Emmis Communications Corporation"
            	  },
            	  {
            	    "Symbol": "EDE",
            	    "Name": "Empire District Electric Company (The)"
            	  },
            	  {
            	    "Symbol": "NYNY",
            	    "Name": "Empire Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "ERS",
            	    "Name": "Empire Resources, Inc."
            	  },
            	  {
            	    "Symbol": "ESRT",
            	    "Name": "Empire State Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "EIG",
            	    "Name": "Employers Holdings Inc"
            	  },
            	  {
            	    "Symbol": "EDN",
            	    "Name": "Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor)"
            	  },
            	  {
            	    "Symbol": "EOC",
            	    "Name": "Empresa Nacional de Electricidad S.A."
            	  },
            	  {
            	    "Symbol": "ICA",
            	    "Name": "Empresas Ica Soc Contrladora"
            	  },
            	  {
            	    "Symbol": "ENLK",
            	    "Name": "EnLink Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "ENLC",
            	    "Name": "EnLink Midstream, LLC"
            	  },
            	  {
            	    "Symbol": "ESNC",
            	    "Name": "EnSync, Inc."
            	  },
            	  {
            	    "Symbol": "ENBL",
            	    "Name": "Enable Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "ENTA",
            	    "Name": "Enanta Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "EEQ",
            	    "Name": "Enbridge Energy Management LLC"
            	  },
            	  {
            	    "Symbol": "EEP",
            	    "Name": "Enbridge Energy, L.P."
            	  },
            	  {
            	    "Symbol": "ENB",
            	    "Name": "Enbridge Inc"
            	  },
            	  {
            	    "Symbol": "ECA",
            	    "Name": "Encana Corporation"
            	  },
            	  {
            	    "Symbol": "ECPG",
            	    "Name": "Encore Capital Group Inc"
            	  },
            	  {
            	    "Symbol": "WIRE",
            	    "Name": "Encore Wire Corporation"
            	  },
            	  {
            	    "Symbol": "EXK",
            	    "Name": "Endeavour Silver Corporation"
            	  },
            	  {
            	    "Symbol": "ENDP",
            	    "Name": "Endo International plc"
            	  },
            	  {
            	    "Symbol": "GI",
            	    "Name": "EndoChoice Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ECYT",
            	    "Name": "Endocyte, Inc."
            	  },
            	  {
            	    "Symbol": "ELGX",
            	    "Name": "Endologix, Inc."
            	  },
            	  {
            	    "Symbol": "EIGI",
            	    "Name": "Endurance International Group Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ENH",
            	    "Name": "Endurance Specialty Holdings Ltd"
            	  },
            	  {
            	    "Symbol": "ENH^B",
            	    "Name": "Endurance Specialty Holdings Ltd"
            	  },
            	  {
            	    "Symbol": "ENH^C",
            	    "Name": "Endurance Specialty Holdings Ltd"
            	  },
            	  {
            	    "Symbol": "NDRO",
            	    "Name": "Enduro Royalty Trust"
            	  },
            	  {
            	    "Symbol": "ENRJ",
            	    "Name": "EnerJex Resources, Inc."
            	  },
            	  {
            	    "Symbol": "ENRJ^",
            	    "Name": "EnerJex Resources, Inc."
            	  },
            	  {
            	    "Symbol": "ENOC",
            	    "Name": "EnerNOC, Inc."
            	  },
            	  {
            	    "Symbol": "EGN",
            	    "Name": "Energen Corporation"
            	  },
            	  {
            	    "Symbol": "ENR",
            	    "Name": "Energizer Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "EPC",
            	    "Name": "Energizer Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "WATT",
            	    "Name": "Energous Corporation"
            	  },
            	  {
            	    "Symbol": "EFOI",
            	    "Name": "Energy Focus, Inc."
            	  },
            	  {
            	    "Symbol": "UUUU",
            	    "Name": "Energy Fuels Inc"
            	  },
            	  {
            	    "Symbol": "ERII",
            	    "Name": "Energy Recovery, Inc."
            	  },
            	  {
            	    "Symbol": "ETE",
            	    "Name": "Energy Transfer Equity, L.P."
            	  },
            	  {
            	    "Symbol": "EXXI",
            	    "Name": "Energy XXI Ltd."
            	  },
            	  {
            	    "Symbol": "ERF",
            	    "Name": "Enerplus Corporation"
            	  },
            	  {
            	    "Symbol": "ENI",
            	    "Name": "Enersis Americas S.A."
            	  },
            	  {
            	    "Symbol": "ENS",
            	    "Name": "Enersys"
            	  },
            	  {
            	    "Symbol": "EGL",
            	    "Name": "Engility Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "EBF",
            	    "Name": "Ennis, Inc."
            	  },
            	  {
            	    "Symbol": "ENVA",
            	    "Name": "Enova International, Inc."
            	  },
            	  {
            	    "Symbol": "ENPH",
            	    "Name": "Enphase Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NPO",
            	    "Name": "Enpro Industries"
            	  },
            	  {
            	    "Symbol": "ESGR",
            	    "Name": "Enstar Group Limited"
            	  },
            	  {
            	    "Symbol": "ENFC",
            	    "Name": "Entegra Financial Corp."
            	  },
            	  {
            	    "Symbol": "ENTG",
            	    "Name": "Entegris, Inc."
            	  },
            	  {
            	    "Symbol": "ENTL",
            	    "Name": "Entellus Medical, Inc."
            	  },
            	  {
            	    "Symbol": "ETM",
            	    "Name": "Entercom Communications Corporation"
            	  },
            	  {
            	    "Symbol": "EAA",
            	    "Name": "Entergy Arkansas, Inc."
            	  },
            	  {
            	    "Symbol": "EAB",
            	    "Name": "Entergy Arkansas, Inc."
            	  },
            	  {
            	    "Symbol": "EAE",
            	    "Name": "Entergy Arkansas, Inc."
            	  },
            	  {
            	    "Symbol": "ETR",
            	    "Name": "Entergy Corporation"
            	  },
            	  {
            	    "Symbol": "ELA",
            	    "Name": "Entergy Louisiana, Inc."
            	  },
            	  {
            	    "Symbol": "ELB",
            	    "Name": "Entergy Louisiana, Inc."
            	  },
            	  {
            	    "Symbol": "ELJ",
            	    "Name": "Entergy Louisiana, Inc."
            	  },
            	  {
            	    "Symbol": "ELU",
            	    "Name": "Entergy Louisiana, Inc."
            	  },
            	  {
            	    "Symbol": "EFM",
            	    "Name": "Entergy Mississippi, Inc."
            	  },
            	  {
            	    "Symbol": "EMQ",
            	    "Name": "Entergy Mississippi, Inc."
            	  },
            	  {
            	    "Symbol": "EMZ",
            	    "Name": "Entergy Mississippi, Inc."
            	  },
            	  {
            	    "Symbol": "ENJ",
            	    "Name": "Entergy New Orleans, Inc."
            	  },
            	  {
            	    "Symbol": "EZT",
            	    "Name": "Entergy Texas Inc"
            	  },
            	  {
            	    "Symbol": "ETRM",
            	    "Name": "EnteroMedics Inc."
            	  },
            	  {
            	    "Symbol": "EBTC",
            	    "Name": "Enterprise Bancorp Inc"
            	  },
            	  {
            	    "Symbol": "EFSC",
            	    "Name": "Enterprise Financial Services Corporation"
            	  },
            	  {
            	    "Symbol": "EPD",
            	    "Name": "Enterprise Products Partners L.P."
            	  },
            	  {
            	    "Symbol": "EGT",
            	    "Name": "Entertainment Gaming Asia Incorporated"
            	  },
            	  {
            	    "Symbol": "EVC",
            	    "Name": "Entravision Communications Corporation"
            	  },
            	  {
            	    "Symbol": "EGI",
            	    "Name": "Entree Gold Inc"
            	  },
            	  {
            	    "Symbol": "ENV",
            	    "Name": "Envestnet, Inc"
            	  },
            	  {
            	    "Symbol": "EVI",
            	    "Name": "EnviroStarm, Inc."
            	  },
            	  {
            	    "Symbol": "EVHC",
            	    "Name": "Envision Healthcare Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "EVA",
            	    "Name": "Enviva Partners, LP"
            	  },
            	  {
            	    "Symbol": "ENZ",
            	    "Name": "Enzo Biochem, Inc."
            	  },
            	  {
            	    "Symbol": "ENZN",
            	    "Name": "Enzon Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ENZY",
            	    "Name": "Enzymotec Ltd."
            	  },
            	  {
            	    "Symbol": "EPZM",
            	    "Name": "Epizyme, Inc."
            	  },
            	  {
            	    "Symbol": "EFX",
            	    "Name": "Equifax, Inc."
            	  },
            	  {
            	    "Symbol": "EQIX",
            	    "Name": "Equinix, Inc."
            	  },
            	  {
            	    "Symbol": "EQFN",
            	    "Name": "Equitable Financial Corp."
            	  },
            	  {
            	    "Symbol": "EQBK",
            	    "Name": "Equity Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "EQC",
            	    "Name": "Equity Commonwealth"
            	  },
            	  {
            	    "Symbol": "EQCO",
            	    "Name": "Equity Commonwealth"
            	  },
            	  {
            	    "Symbol": "EQC^D",
            	    "Name": "Equity Commonwealth"
            	  },
            	  {
            	    "Symbol": "EQC^E",
            	    "Name": "Equity Commonwealth"
            	  },
            	  {
            	    "Symbol": "ELS",
            	    "Name": "Equity Lifestyle Properties, Inc."
            	  },
            	  {
            	    "Symbol": "ELS^C",
            	    "Name": "Equity Lifestyle Properties, Inc."
            	  },
            	  {
            	    "Symbol": "EQY",
            	    "Name": "Equity One, Inc."
            	  },
            	  {
            	    "Symbol": "EQR",
            	    "Name": "Equity Residential"
            	  },
            	  {
            	    "Symbol": "EQS",
            	    "Name": "Equus Total Return, Inc."
            	  },
            	  {
            	    "Symbol": "ERA",
            	    "Name": "Era Group, Inc."
            	  },
            	  {
            	    "Symbol": "EAC",
            	    "Name": "Erickson Incorporated"
            	  },
            	  {
            	    "Symbol": "ERIC",
            	    "Name": "Ericsson"
            	  },
            	  {
            	    "Symbol": "ERIE",
            	    "Name": "Erie Indemnity Company"
            	  },
            	  {
            	    "Symbol": "ERN",
            	    "Name": "Erin Energy Corp."
            	  },
            	  {
            	    "Symbol": "EROS",
            	    "Name": "Eros International PLC"
            	  },
            	  {
            	    "Symbol": "ESCA",
            	    "Name": "Escalade, Incorporated"
            	  },
            	  {
            	    "Symbol": "ESMC",
            	    "Name": "Escalon Medical Corp."
            	  },
            	  {
            	    "Symbol": "ESPR",
            	    "Name": "Esperion Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ESP",
            	    "Name": "Espey Mfg. & Electronics Corp."
            	  },
            	  {
            	    "Symbol": "ESND",
            	    "Name": "Essendant Inc."
            	  },
            	  {
            	    "Symbol": "ESNT",
            	    "Name": "Essent Group Ltd."
            	  },
            	  {
            	    "Symbol": "ESS",
            	    "Name": "Essex Property Trust, Inc."
            	  },
            	  {
            	    "Symbol": "ESS^H.CL",
            	    "Name": "Essex Property Trust, Inc."
            	  },
            	  {
            	    "Symbol": "EL",
            	    "Name": "Estee Lauder Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "ESL",
            	    "Name": "Esterline Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "DEG",
            	    "Name": "Etablissements Delhaize Freres et Cie &quot;Le Lion&quot; S.A."
            	  },
            	  {
            	    "Symbol": "ETH",
            	    "Name": "Ethan Allen Interiors Inc."
            	  },
            	  {
            	    "Symbol": "ETSY",
            	    "Name": "Etsy, Inc."
            	  },
            	  {
            	    "Symbol": "EMXX",
            	    "Name": "Eurasian Minerals Inc."
            	  },
            	  {
            	    "Symbol": "CLWT",
            	    "Name": "Euro Tech Holdings Company Limited"
            	  },
            	  {
            	    "Symbol": "EURN",
            	    "Name": "Euronav NV"
            	  },
            	  {
            	    "Symbol": "EEFT",
            	    "Name": "Euronet Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "EEA",
            	    "Name": "European Equity Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "ESEA",
            	    "Name": "Euroseas Ltd."
            	  },
            	  {
            	    "Symbol": "EVBN",
            	    "Name": "Evans Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "EVK",
            	    "Name": "Ever-Glory International Group, Inc."
            	  },
            	  {
            	    "Symbol": "EVER",
            	    "Name": "EverBank Financial Corp."
            	  },
            	  {
            	    "Symbol": "EVER^A",
            	    "Name": "EverBank Financial Corp."
            	  },
            	  {
            	    "Symbol": "EVR",
            	    "Name": "Evercore Partners Inc"
            	  },
            	  {
            	    "Symbol": "RE",
            	    "Name": "Everest Re Group, Ltd."
            	  },
            	  {
            	    "Symbol": "EVRI",
            	    "Name": "Everi Holdings Inc."
            	  },
            	  {
            	    "Symbol": "ES",
            	    "Name": "Eversource Energy"
            	  },
            	  {
            	    "Symbol": "EVTC",
            	    "Name": "Evertec, Inc."
            	  },
            	  {
            	    "Symbol": "EVDY",
            	    "Name": "Everyday Health, Inc."
            	  },
            	  {
            	    "Symbol": "EVGN",
            	    "Name": "Evogene Ltd."
            	  },
            	  {
            	    "Symbol": "EVOK",
            	    "Name": "Evoke Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "EVH",
            	    "Name": "Evolent Health, Inc"
            	  },
            	  {
            	    "Symbol": "EPM",
            	    "Name": "Evolution Petroleum Corporation, Inc."
            	  },
            	  {
            	    "Symbol": "EPM^A",
            	    "Name": "Evolution Petroleum Corporation, Inc."
            	  },
            	  {
            	    "Symbol": "EVOL",
            	    "Name": "Evolving Systems, Inc."
            	  },
            	  {
            	    "Symbol": "EXA",
            	    "Name": "Exa Corporation"
            	  },
            	  {
            	    "Symbol": "EXAC",
            	    "Name": "Exactech, Inc."
            	  },
            	  {
            	    "Symbol": "EXAM",
            	    "Name": "ExamWorks Group, Inc."
            	  },
            	  {
            	    "Symbol": "EXAR",
            	    "Name": "Exar Corporation"
            	  },
            	  {
            	    "Symbol": "EXEL",
            	    "Name": "Exelixis, Inc."
            	  },
            	  {
            	    "Symbol": "EXC",
            	    "Name": "Exelon Corporation"
            	  },
            	  {
            	    "Symbol": "EXCU",
            	    "Name": "Exelon Corporation"
            	  },
            	  {
            	    "Symbol": "XRA",
            	    "Name": "Exeter Resource Corporation"
            	  },
            	  {
            	    "Symbol": "EXLS",
            	    "Name": "ExlService Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "EXPE",
            	    "Name": "Expedia, Inc."
            	  },
            	  {
            	    "Symbol": "EXPD",
            	    "Name": "Expeditors International of Washington, Inc."
            	  },
            	  {
            	    "Symbol": "EXPO",
            	    "Name": "Exponent, Inc."
            	  },
            	  {
            	    "Symbol": "ESRX",
            	    "Name": "Express Scripts Holding Company"
            	  },
            	  {
            	    "Symbol": "EXPR",
            	    "Name": "Express, Inc."
            	  },
            	  {
            	    "Symbol": "STAY",
            	    "Name": "Extended Stay America, Inc."
            	  },
            	  {
            	    "Symbol": "EXTN",
            	    "Name": "Exterran Corporation"
            	  },
            	  {
            	    "Symbol": "EXR",
            	    "Name": "Extra Space Storage Inc"
            	  },
            	  {
            	    "Symbol": "EXTR",
            	    "Name": "Extreme Networks, Inc."
            	  },
            	  {
            	    "Symbol": "XOM",
            	    "Name": "Exxon Mobil Corporation"
            	  },
            	  {
            	    "Symbol": "EYEG",
            	    "Name": "Eyegate Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "EYEGW",
            	    "Name": "Eyegate Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "FNB",
            	    "Name": "F.N.B. Corporation"
            	  },
            	  {
            	    "Symbol": "FNB^E",
            	    "Name": "F.N.B. Corporation"
            	  },
            	  {
            	    "Symbol": "FFIV",
            	    "Name": "F5 Networks, Inc."
            	  },
            	  {
            	    "Symbol": "FARO",
            	    "Name": "FARO Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "FFG",
            	    "Name": "FBL Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "FBRC",
            	    "Name": "FBR & Co"
            	  },
            	  {
            	    "Symbol": "FCB",
            	    "Name": "FCB Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "FEIC",
            	    "Name": "FEI Company"
            	  },
            	  {
            	    "Symbol": "FRC",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^A",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^B",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^C",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^D",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^E",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^F",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FRC^G",
            	    "Name": "FIRST REPUBLIC BANK"
            	  },
            	  {
            	    "Symbol": "FLIR",
            	    "Name": "FLIR Systems, Inc."
            	  },
            	  {
            	    "Symbol": "FMC",
            	    "Name": "FMC Corporation"
            	  },
            	  {
            	    "Symbol": "FTI",
            	    "Name": "FMC Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "FRPH",
            	    "Name": "FRP Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "FSBW",
            	    "Name": "FS Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "FSIC",
            	    "Name": "FS Investment Corporation"
            	  },
            	  {
            	    "Symbol": "FTD",
            	    "Name": "FTD Companies, Inc."
            	  },
            	  {
            	    "Symbol": "FCN",
            	    "Name": "FTI Consulting, Inc."
            	  },
            	  {
            	    "Symbol": "FXCM",
            	    "Name": "FXCM Inc."
            	  },
            	  {
            	    "Symbol": "FN",
            	    "Name": "Fabrinet"
            	  },
            	  {
            	    "Symbol": "FB",
            	    "Name": "Facebook, Inc."
            	  },
            	  {
            	    "Symbol": "FDS",
            	    "Name": "FactSet Research Systems Inc."
            	  },
            	  {
            	    "Symbol": "FICO",
            	    "Name": "Fair Isaac Corporation"
            	  },
            	  {
            	    "Symbol": "FRP",
            	    "Name": "FairPoint Communications, Inc."
            	  },
            	  {
            	    "Symbol": "FCS",
            	    "Name": "Fairchild Semiconductor International, Inc."
            	  },
            	  {
            	    "Symbol": "FMSA",
            	    "Name": "Fairmount Santrol Holdings Inc."
            	  },
            	  {
            	    "Symbol": "FWM",
            	    "Name": "Fairway Group Holdings Corp."
            	  },
            	  {
            	    "Symbol": "FALC",
            	    "Name": "FalconStor Software, Inc."
            	  },
            	  {
            	    "Symbol": "DAVE",
            	    "Name": "Famous Dave&#39;s of America, Inc."
            	  },
            	  {
            	    "Symbol": "FARM",
            	    "Name": "Farmer Brothers Company"
            	  },
            	  {
            	    "Symbol": "FFKT",
            	    "Name": "Farmers Capital Bank Corporation"
            	  },
            	  {
            	    "Symbol": "FMNB",
            	    "Name": "Farmers National Banc Corp."
            	  },
            	  {
            	    "Symbol": "FPI",
            	    "Name": "Farmland Partners Inc."
            	  },
            	  {
            	    "Symbol": "FAST",
            	    "Name": "Fastenal Company"
            	  },
            	  {
            	    "Symbol": "FATE",
            	    "Name": "Fate Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "FBSS",
            	    "Name": "Fauquier Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "FDX",
            	    "Name": "FedEx Corporation"
            	  },
            	  {
            	    "Symbol": "AGM",
            	    "Name": "Federal Agricultural Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "AGM.A",
            	    "Name": "Federal Agricultural Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "AGM^A",
            	    "Name": "Federal Agricultural Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "AGM^B",
            	    "Name": "Federal Agricultural Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "AGM^C",
            	    "Name": "Federal Agricultural Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "FRT",
            	    "Name": "Federal Realty Investment Trust"
            	  },
            	  {
            	    "Symbol": "FSS",
            	    "Name": "Federal Signal Corporation"
            	  },
            	  {
            	    "Symbol": "FDML",
            	    "Name": "Federal-Mogul Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "FII",
            	    "Name": "Federated Investors, Inc."
            	  },
            	  {
            	    "Symbol": "FNHC",
            	    "Name": "Federated National Holding Company"
            	  },
            	  {
            	    "Symbol": "FPT",
            	    "Name": "Federated Premier Intermediate Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "FMN",
            	    "Name": "Federated Premier Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "FCH",
            	    "Name": "FelCor Lodging Trust Incorporated"
            	  },
            	  {
            	    "Symbol": "FCH^A",
            	    "Name": "FelCor Lodging Trust Incorporated"
            	  },
            	  {
            	    "Symbol": "FHCO",
            	    "Name": "Female Health Company (The)"
            	  },
            	  {
            	    "Symbol": "FENX",
            	    "Name": "Fenix Parts, Inc."
            	  },
            	  {
            	    "Symbol": "RACE",
            	    "Name": "Ferrari N.V."
            	  },
            	  {
            	    "Symbol": "FGP",
            	    "Name": "Ferrellgas Partners, L.P."
            	  },
            	  {
            	    "Symbol": "FOE",
            	    "Name": "Ferro Corporation"
            	  },
            	  {
            	    "Symbol": "GSM",
            	    "Name": "Ferroglobe PLC"
            	  },
            	  {
            	    "Symbol": "FCAM",
            	    "Name": "Fiat Chrysler Automobiles N.V."
            	  },
            	  {
            	    "Symbol": "FCAU",
            	    "Name": "Fiat Chrysler Automobiles N.V."
            	  },
            	  {
            	    "Symbol": "FBR",
            	    "Name": "Fibria Celulose S.A."
            	  },
            	  {
            	    "Symbol": "FGEN",
            	    "Name": "FibroGen, Inc"
            	  },
            	  {
            	    "Symbol": "FCSC",
            	    "Name": "Fibrocell Science Inc"
            	  },
            	  {
            	    "Symbol": "ONEQ",
            	    "Name": "Fidelity Nasdaq Composite Index Tracking Stock"
            	  },
            	  {
            	    "Symbol": "FNF",
            	    "Name": "Fidelity National Financial, Inc."
            	  },
            	  {
            	    "Symbol": "FNFV",
            	    "Name": "Fidelity National Financial, Inc."
            	  },
            	  {
            	    "Symbol": "FIS",
            	    "Name": "Fidelity National Information Services, Inc."
            	  },
            	  {
            	    "Symbol": "LION",
            	    "Name": "Fidelity Southern Corporation"
            	  },
            	  {
            	    "Symbol": "FGL",
            	    "Name": "Fidelity and Guaranty Life"
            	  },
            	  {
            	    "Symbol": "FMO",
            	    "Name": "Fiduciary\/Claymore MLP Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "FDUS",
            	    "Name": "Fidus Investment Corporation"
            	  },
            	  {
            	    "Symbol": "FPP",
            	    "Name": "FieldPoint Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "FPP.WS",
            	    "Name": "FieldPoint Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "FRGI",
            	    "Name": "Fiesta Restaurant Group, Inc."
            	  },
            	  {
            	    "Symbol": "FSAM",
            	    "Name": "Fifth Street Asset Management Inc."
            	  },
            	  {
            	    "Symbol": "FSC",
            	    "Name": "Fifth Street Finance Corp."
            	  },
            	  {
            	    "Symbol": "FSCE",
            	    "Name": "Fifth Street Finance Corp."
            	  },
            	  {
            	    "Symbol": "FSCFL",
            	    "Name": "Fifth Street Finance Corp."
            	  },
            	  {
            	    "Symbol": "FSFR",
            	    "Name": "Fifth Street Senior Floating Rate Corp."
            	  },
            	  {
            	    "Symbol": "FITB",
            	    "Name": "Fifth Third Bancorp"
            	  },
            	  {
            	    "Symbol": "FITBI",
            	    "Name": "Fifth Third Bancorp"
            	  },
            	  {
            	    "Symbol": "FNTC",
            	    "Name": "FinTech Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "FNTCU",
            	    "Name": "FinTech Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "FNTCW",
            	    "Name": "FinTech Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "FNGN",
            	    "Name": "Financial Engines, Inc."
            	  },
            	  {
            	    "Symbol": "FISI",
            	    "Name": "Financial Institutions, Inc."
            	  },
            	  {
            	    "Symbol": "FNSR",
            	    "Name": "Finisar Corporation"
            	  },
            	  {
            	    "Symbol": "FNJN",
            	    "Name": "Finjan Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "FEYE",
            	    "Name": "FireEye, Inc."
            	  },
            	  {
            	    "Symbol": "FAC",
            	    "Name": "First Acceptance Corporation"
            	  },
            	  {
            	    "Symbol": "FAF",
            	    "Name": "First American Corporation (The)"
            	  },
            	  {
            	    "Symbol": "FBP",
            	    "Name": "First BanCorp."
            	  },
            	  {
            	    "Symbol": "FBNC",
            	    "Name": "First Bancorp"
            	  },
            	  {
            	    "Symbol": "FNLC",
            	    "Name": "First Bancorp, Inc (ME)"
            	  },
            	  {
            	    "Symbol": "FRBA",
            	    "Name": "First Bank"
            	  },
            	  {
            	    "Symbol": "BUSE",
            	    "Name": "First Busey Corporation"
            	  },
            	  {
            	    "Symbol": "FBIZ",
            	    "Name": "First Business Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "FCAP",
            	    "Name": "First Capital, Inc."
            	  },
            	  {
            	    "Symbol": "FCFS",
            	    "Name": "First Cash Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "FCNCA",
            	    "Name": "First Citizens BancShares, Inc."
            	  },
            	  {
            	    "Symbol": "FCLF",
            	    "Name": "First Clover Leaf Financial Corp."
            	  },
            	  {
            	    "Symbol": "FCF",
            	    "Name": "First Commonwealth Financial Corporation"
            	  },
            	  {
            	    "Symbol": "FCBC",
            	    "Name": "First Community Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "FCCO",
            	    "Name": "First Community Corporation"
            	  },
            	  {
            	    "Symbol": "FCFP",
            	    "Name": "First Community Financial Partners, Inc."
            	  },
            	  {
            	    "Symbol": "FBNK",
            	    "Name": "First Connecticut Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "FDC",
            	    "Name": "First Data Corporation"
            	  },
            	  {
            	    "Symbol": "FDEF",
            	    "Name": "First Defiance Financial Corp."
            	  },
            	  {
            	    "Symbol": "FFBC",
            	    "Name": "First Financial Bancorp."
            	  },
            	  {
            	    "Symbol": "FFBCW",
            	    "Name": "First Financial Bancorp."
            	  },
            	  {
            	    "Symbol": "FFIN",
            	    "Name": "First Financial Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "THFF",
            	    "Name": "First Financial Corporation Indiana"
            	  },
            	  {
            	    "Symbol": "FFNW",
            	    "Name": "First Financial Northwest, Inc."
            	  },
            	  {
            	    "Symbol": "FFWM",
            	    "Name": "First Foundation Inc."
            	  },
            	  {
            	    "Symbol": "FGBI",
            	    "Name": "First Guaranty Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "FHN",
            	    "Name": "First Horizon National Corporation"
            	  },
            	  {
            	    "Symbol": "FHN^A",
            	    "Name": "First Horizon National Corporation"
            	  },
            	  {
            	    "Symbol": "FR",
            	    "Name": "First Industrial Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "INBK",
            	    "Name": "First Internet Bancorp"
            	  },
            	  {
            	    "Symbol": "FIBK",
            	    "Name": "First Interstate BancSystem, Inc."
            	  },
            	  {
            	    "Symbol": "AG",
            	    "Name": "First Majestic Silver Corp."
            	  },
            	  {
            	    "Symbol": "FMD",
            	    "Name": "First Marblehead Corporation (The)"
            	  },
            	  {
            	    "Symbol": "FRME",
            	    "Name": "First Merchants Corporation"
            	  },
            	  {
            	    "Symbol": "FMBH",
            	    "Name": "First Mid-Illinois Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "FMBI",
            	    "Name": "First Midwest Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "FNBC",
            	    "Name": "First NBC Bank Holding Company"
            	  },
            	  {
            	    "Symbol": "FNFG",
            	    "Name": "First Niagara Financial Group Inc."
            	  },
            	  {
            	    "Symbol": "FNFG^B",
            	    "Name": "First Niagara Financial Group Inc."
            	  },
            	  {
            	    "Symbol": "FNWB",
            	    "Name": "First Northwest Bancorp"
            	  },
            	  {
            	    "Symbol": "FPO",
            	    "Name": "First Potomac Realty Trust"
            	  },
            	  {
            	    "Symbol": "FPO^A",
            	    "Name": "First Potomac Realty Trust"
            	  },
            	  {
            	    "Symbol": "FSFG",
            	    "Name": "First Savings Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "FSLR",
            	    "Name": "First Solar, Inc."
            	  },
            	  {
            	    "Symbol": "FSBK",
            	    "Name": "First South Bancorp Inc"
            	  },
            	  {
            	    "Symbol": "FFA",
            	    "Name": "First Trust"
            	  },
            	  {
            	    "Symbol": "FMY",
            	    "Name": "First Trust"
            	  },
            	  {
            	    "Symbol": "FPA",
            	    "Name": "First Trust Asia Pacific Ex-Japan AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "BICK",
            	    "Name": "First Trust BICK Index Fund"
            	  },
            	  {
            	    "Symbol": "FBZ",
            	    "Name": "First Trust Brazil AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FCAN",
            	    "Name": "First Trust Canada AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FTCS",
            	    "Name": "First Trust Capital Strength ETF"
            	  },
            	  {
            	    "Symbol": "FCA",
            	    "Name": "First Trust China AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FDT",
            	    "Name": "First Trust Developed Markets Ex-US AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FDTS",
            	    "Name": "First Trust Developed Markets ex-US Small Cap AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FAV",
            	    "Name": "First Trust Dividend and Income Fund"
            	  },
            	  {
            	    "Symbol": "FVC",
            	    "Name": "First Trust Dorsey Wright Dynamic Focus 5 ETF"
            	  },
            	  {
            	    "Symbol": "FV",
            	    "Name": "First Trust Dorsey Wright Focus 5 ETF"
            	  },
            	  {
            	    "Symbol": "IFV",
            	    "Name": "First Trust Dorsey Wright International Focus 5 ETF"
            	  },
            	  {
            	    "Symbol": "FDEU",
            	    "Name": "First Trust Dynamic Europe Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "FEM",
            	    "Name": "First Trust Emerging Markets AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FEMB",
            	    "Name": "First Trust Emerging Markets Local Currency Bond ETF"
            	  },
            	  {
            	    "Symbol": "FEMS",
            	    "Name": "First Trust Emerging Markets Small Cap AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FEN",
            	    "Name": "First Trust Energy Income and Growth Fund"
            	  },
            	  {
            	    "Symbol": "FIF",
            	    "Name": "First Trust Energy Infrastructure Fund"
            	  },
            	  {
            	    "Symbol": "FTSM",
            	    "Name": "First Trust Enhanced Short Maturity ETF"
            	  },
            	  {
            	    "Symbol": "FEP",
            	    "Name": "First Trust Europe AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FEUZ",
            	    "Name": "First Trust Eurozone AlphaDEX ETF"
            	  },
            	  {
            	    "Symbol": "FGM",
            	    "Name": "First Trust Germany AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FTGC",
            	    "Name": "First Trust Global Tactical Commodity Strategy Fund"
            	  },
            	  {
            	    "Symbol": "FTHI",
            	    "Name": "First Trust High Income ETF"
            	  },
            	  {
            	    "Symbol": "FSD",
            	    "Name": "First Trust High Income Long Short Fund"
            	  },
            	  {
            	    "Symbol": "HYLS",
            	    "Name": "First Trust High Yield Long\/Short ETF"
            	  },
            	  {
            	    "Symbol": "FHK",
            	    "Name": "First Trust Hong Kong AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "SKYY",
            	    "Name": "First Trust ISE Cloud Computing Index Fund"
            	  },
            	  {
            	    "Symbol": "FTAG",
            	    "Name": "First Trust Indxx Global Agriculture ETF"
            	  },
            	  {
            	    "Symbol": "FTRI",
            	    "Name": "First Trust Indxx Global Natural Resources Income ETF"
            	  },
            	  {
            	    "Symbol": "FPF",
            	    "Name": "First Trust Intermediate Duration Preferred & Income Fund"
            	  },
            	  {
            	    "Symbol": "FPXI",
            	    "Name": "First Trust International IPO ETF"
            	  },
            	  {
            	    "Symbol": "YDIV",
            	    "Name": "First Trust International Multi-Asset Diversified Income Index"
            	  },
            	  {
            	    "Symbol": "FJP",
            	    "Name": "First Trust Japan AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FLN",
            	    "Name": "First Trust Latin America AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FTLB",
            	    "Name": "First Trust Low Beta Income ETF"
            	  },
            	  {
            	    "Symbol": "LMBS",
            	    "Name": "First Trust Low Duration Opportunities ETF"
            	  },
            	  {
            	    "Symbol": "FEI",
            	    "Name": "First Trust MLP and Energy Income Fund"
            	  },
            	  {
            	    "Symbol": "FMB",
            	    "Name": "First Trust Managed Municipal ETF"
            	  },
            	  {
            	    "Symbol": "MDIV",
            	    "Name": "First Trust Multi-Asset Diversified Income Index Fund"
            	  },
            	  {
            	    "Symbol": "QABA",
            	    "Name": "First Trust NASDAQ ABA Community Bank Index Fund"
            	  },
            	  {
            	    "Symbol": "QCLN",
            	    "Name": "First Trust NASDAQ Clean Edge Green Energy Index Fund"
            	  },
            	  {
            	    "Symbol": "GRID",
            	    "Name": "First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index"
            	  },
            	  {
            	    "Symbol": "CIBR",
            	    "Name": "First Trust NASDAQ Cybersecurity ETF"
            	  },
            	  {
            	    "Symbol": "CARZ",
            	    "Name": "First Trust NASDAQ Global Auto Index Fund"
            	  },
            	  {
            	    "Symbol": "RDVY",
            	    "Name": "First Trust NASDAQ Rising Dividend Achievers ETF"
            	  },
            	  {
            	    "Symbol": "FONE",
            	    "Name": "First Trust NASDAQ Smartphone Index Fund"
            	  },
            	  {
            	    "Symbol": "TDIV",
            	    "Name": "First Trust NASDAQ Technology Dividend Index Fund"
            	  },
            	  {
            	    "Symbol": "QQEW",
            	    "Name": "First Trust NASDAQ-100 Equal Weighted Index Fund"
            	  },
            	  {
            	    "Symbol": "QQXT",
            	    "Name": "First Trust NASDAQ-100 Ex-Technology Sector Index Fund"
            	  },
            	  {
            	    "Symbol": "QTEC",
            	    "Name": "First Trust NASDAQ-100- Technology Index Fund"
            	  },
            	  {
            	    "Symbol": "FPL",
            	    "Name": "First Trust New Opportunities MLP & Energy Fund"
            	  },
            	  {
            	    "Symbol": "AIRR",
            	    "Name": "First Trust RBA American Industrial Renaissance ETF"
            	  },
            	  {
            	    "Symbol": "QINC",
            	    "Name": "First Trust RBA Quality Income ETF"
            	  },
            	  {
            	    "Symbol": "FCVT",
            	    "Name": "First Trust SSI Strategic Convertible Securities ETF"
            	  },
            	  {
            	    "Symbol": "FCT",
            	    "Name": "First Trust Senior Floating Rate Income Fund II"
            	  },
            	  {
            	    "Symbol": "FTSL",
            	    "Name": "First Trust Senior Loan Fund ETF"
            	  },
            	  {
            	    "Symbol": "FKO",
            	    "Name": "First Trust South Korea AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FGB",
            	    "Name": "First Trust Specialty Finance and Financial Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "FHY",
            	    "Name": "First Trust Strategic High Income Fund II"
            	  },
            	  {
            	    "Symbol": "FDIV",
            	    "Name": "First Trust Strategic Income ETF"
            	  },
            	  {
            	    "Symbol": "FSZ",
            	    "Name": "First Trust Switzerland AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FTW",
            	    "Name": "First Trust Taiwan AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "TUSA",
            	    "Name": "First Trust Total US Market AlphaDEX ETF"
            	  },
            	  {
            	    "Symbol": "FKU",
            	    "Name": "First Trust United Kingdom AlphaDEX Fund"
            	  },
            	  {
            	    "Symbol": "FEO",
            	    "Name": "First Trust\/Aberdeen Emerging Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "FAM",
            	    "Name": "First Trust\/Aberdeen Global Opportunity Income Fund"
            	  },
            	  {
            	    "Symbol": "FUNC",
            	    "Name": "First United Corporation"
            	  },
            	  {
            	    "Symbol": "FE",
            	    "Name": "FirstEnergy Corporation"
            	  },
            	  {
            	    "Symbol": "FMER",
            	    "Name": "FirstMerit Corporation"
            	  },
            	  {
            	    "Symbol": "FMER^A",
            	    "Name": "FirstMerit Corporation"
            	  },
            	  {
            	    "Symbol": "FSV",
            	    "Name": "FirstService Corporation"
            	  },
            	  {
            	    "Symbol": "SVVC",
            	    "Name": "Firsthand Technology Value Fund, Inc."
            	  },
            	  {
            	    "Symbol": "FISV",
            	    "Name": "Fiserv, Inc."
            	  },
            	  {
            	    "Symbol": "FIT",
            	    "Name": "Fitbit, Inc."
            	  },
            	  {
            	    "Symbol": "FIVE",
            	    "Name": "Five Below, Inc."
            	  },
            	  {
            	    "Symbol": "OAKS",
            	    "Name": "Five Oaks Investment Corp."
            	  },
            	  {
            	    "Symbol": "OAKS^A",
            	    "Name": "Five Oaks Investment Corp."
            	  },
            	  {
            	    "Symbol": "FPRX",
            	    "Name": "Five Prime Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "FVE",
            	    "Name": "Five Star Quality Care, Inc."
            	  },
            	  {
            	    "Symbol": "FIVN",
            	    "Name": "Five9, Inc."
            	  },
            	  {
            	    "Symbol": "FBC",
            	    "Name": "Flagstar Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "DFP",
            	    "Name": "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "PFD",
            	    "Name": "Flaherty & Crumrine Preferred Income Fund Incorporated"
            	  },
            	  {
            	    "Symbol": "PFO",
            	    "Name": "Flaherty & Crumrine Preferred Income Opportunity Fund Inc"
            	  },
            	  {
            	    "Symbol": "FFC",
            	    "Name": "Flaherty & Crumrine Preferred Securities Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "FLC",
            	    "Name": "Flaherty & Crumrine Total Return Fund Inc"
            	  },
            	  {
            	    "Symbol": "FLML",
            	    "Name": "Flamel Technologies S.A."
            	  },
            	  {
            	    "Symbol": "BDL",
            	    "Name": "Flanigan&#39;s Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "FLT",
            	    "Name": "FleetCor Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "FLTX",
            	    "Name": "Fleetmatics Group PLC"
            	  },
            	  {
            	    "Symbol": "FLKS",
            	    "Name": "Flex Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "SKOR",
            	    "Name": "FlexShares Credit-Scored US Corporate Bond Index Fund"
            	  },
            	  {
            	    "Symbol": "LKOR",
            	    "Name": "FlexShares Credit-Scored US Long Corporate Bond Index Fund"
            	  },
            	  {
            	    "Symbol": "MBSD",
            	    "Name": "FlexShares Disciplined Duration MBS Index Fund"
            	  },
            	  {
            	    "Symbol": "ASET",
            	    "Name": "FlexShares Real Assets Allocation Index Fund"
            	  },
            	  {
            	    "Symbol": "QLC",
            	    "Name": "FlexShares US Quality Large Cap Index Fund"
            	  },
            	  {
            	    "Symbol": "FSI",
            	    "Name": "Flexible Solutions International Inc."
            	  },
            	  {
            	    "Symbol": "FLXN",
            	    "Name": "Flexion Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "FLXS",
            	    "Name": "Flexsteel Industries, Inc."
            	  },
            	  {
            	    "Symbol": "FLEX",
            	    "Name": "Flextronics International Ltd."
            	  },
            	  {
            	    "Symbol": "FTK",
            	    "Name": "Flotek Industries, Inc."
            	  },
            	  {
            	    "Symbol": "FLO",
            	    "Name": "Flowers Foods, Inc."
            	  },
            	  {
            	    "Symbol": "FLS",
            	    "Name": "Flowserve Corporation"
            	  },
            	  {
            	    "Symbol": "FLDM",
            	    "Name": "Fluidigm Corporation"
            	  },
            	  {
            	    "Symbol": "FLR",
            	    "Name": "Fluor Corporation"
            	  },
            	  {
            	    "Symbol": "FFIC",
            	    "Name": "Flushing Financial Corporation"
            	  },
            	  {
            	    "Symbol": "FLY",
            	    "Name": "Fly Leasing Limited"
            	  },
            	  {
            	    "Symbol": "FOMX",
            	    "Name": "Foamix Pharmaceuticals Ltd."
            	  },
            	  {
            	    "Symbol": "FOGO",
            	    "Name": "Fogo de Chao, Inc."
            	  },
            	  {
            	    "Symbol": "FMX",
            	    "Name": "Fomento Economico Mexicano S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "FONR",
            	    "Name": "Fonar Corporation"
            	  },
            	  {
            	    "Symbol": "FL",
            	    "Name": "Foot Locker, Inc."
            	  },
            	  {
            	    "Symbol": "FES",
            	    "Name": "Forbes Energy Services Ltd"
            	  },
            	  {
            	    "Symbol": "F",
            	    "Name": "Ford Motor Company"
            	  },
            	  {
            	    "Symbol": "FELP",
            	    "Name": "Foresight Energy LP"
            	  },
            	  {
            	    "Symbol": "FCE.A",
            	    "Name": "Forest City Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "FCE.B",
            	    "Name": "Forest City Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "FOR",
            	    "Name": "Forestar Group Inc"
            	  },
            	  {
            	    "Symbol": "FORM",
            	    "Name": "FormFactor, Inc."
            	  },
            	  {
            	    "Symbol": "FORTY",
            	    "Name": "Formula Systems (1985) Ltd."
            	  },
            	  {
            	    "Symbol": "FORR",
            	    "Name": "Forrester Research, Inc."
            	  },
            	  {
            	    "Symbol": "FDI",
            	    "Name": "Fort Dearborn Income Securities, Inc."
            	  },
            	  {
            	    "Symbol": "FTNT",
            	    "Name": "Fortinet, Inc."
            	  },
            	  {
            	    "Symbol": "FBIO",
            	    "Name": "Fortress Biotech, Inc."
            	  },
            	  {
            	    "Symbol": "FIG",
            	    "Name": "Fortress Investment Group LLC"
            	  },
            	  {
            	    "Symbol": "FTAI",
            	    "Name": "Fortress Transportation and Infrastructure Investors LLC"
            	  },
            	  {
            	    "Symbol": "FSM",
            	    "Name": "Fortuna Silver Mines Inc."
            	  },
            	  {
            	    "Symbol": "FBHS",
            	    "Name": "Fortune Brands Home & Security, Inc."
            	  },
            	  {
            	    "Symbol": "FET",
            	    "Name": "Forum Energy Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "FWRD",
            	    "Name": "Forward Air Corporation"
            	  },
            	  {
            	    "Symbol": "FORD",
            	    "Name": "Forward Industries, Inc."
            	  },
            	  {
            	    "Symbol": "FWP",
            	    "Name": "Forward Pharma A\/S"
            	  },
            	  {
            	    "Symbol": "FOSL",
            	    "Name": "Fossil Group, Inc."
            	  },
            	  {
            	    "Symbol": "FMI",
            	    "Name": "Foundation Medicine, Inc."
            	  },
            	  {
            	    "Symbol": "FCPT",
            	    "Name": "Four Corners Property Trust, Inc."
            	  },
            	  {
            	    "Symbol": "FXCB",
            	    "Name": "Fox Chase Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "FOXF",
            	    "Name": "Fox Factory Holding Corp."
            	  },
            	  {
            	    "Symbol": "FRAN",
            	    "Name": "Francesca&#39;s Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "FNV",
            	    "Name": "Franco-Nevada Corporation"
            	  },
            	  {
            	    "Symbol": "FI",
            	    "Name": "Frank&#39;s International N.V."
            	  },
            	  {
            	    "Symbol": "FC",
            	    "Name": "Franklin Covey Company"
            	  },
            	  {
            	    "Symbol": "FELE",
            	    "Name": "Franklin Electric Co., Inc."
            	  },
            	  {
            	    "Symbol": "FSB",
            	    "Name": "Franklin Financial Network, Inc."
            	  },
            	  {
            	    "Symbol": "FTF",
            	    "Name": "Franklin Limited Duration Income Trust"
            	  },
            	  {
            	    "Symbol": "BEN",
            	    "Name": "Franklin Resources, Inc."
            	  },
            	  {
            	    "Symbol": "FSP",
            	    "Name": "Franklin Street Properties Corp."
            	  },
            	  {
            	    "Symbol": "FT",
            	    "Name": "Franklin Universal Trust"
            	  },
            	  {
            	    "Symbol": "FRED",
            	    "Name": "Fred&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "FREE",
            	    "Name": "FreeSeas Inc."
            	  },
            	  {
            	    "Symbol": "FCX",
            	    "Name": "Freeport-McMoran, Inc."
            	  },
            	  {
            	    "Symbol": "RAIL",
            	    "Name": "Freightcar America, Inc."
            	  },
            	  {
            	    "Symbol": "FEIM",
            	    "Name": "Frequency Electronics, Inc."
            	  },
            	  {
            	    "Symbol": "FMS",
            	    "Name": "Fresenius Medical Care Corporation"
            	  },
            	  {
            	    "Symbol": "FDP",
            	    "Name": "Fresh Del Monte Produce, Inc."
            	  },
            	  {
            	    "Symbol": "FRPT",
            	    "Name": "Freshpet, Inc."
            	  },
            	  {
            	    "Symbol": "FRD",
            	    "Name": "Friedman Industries Inc."
            	  },
            	  {
            	    "Symbol": "FTR",
            	    "Name": "Frontier Communications Corporation"
            	  },
            	  {
            	    "Symbol": "FTRPR",
            	    "Name": "Frontier Communications Corporation"
            	  },
            	  {
            	    "Symbol": "FRO",
            	    "Name": "Frontline Ltd."
            	  },
            	  {
            	    "Symbol": "FSYS",
            	    "Name": "Fuel Systems Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "FTEK",
            	    "Name": "Fuel Tech, Inc."
            	  },
            	  {
            	    "Symbol": "FCEL",
            	    "Name": "FuelCell Energy, Inc."
            	  },
            	  {
            	    "Symbol": "FORK",
            	    "Name": "Fuling Global Inc."
            	  },
            	  {
            	    "Symbol": "FULL",
            	    "Name": "Full Circle Capital Corporation"
            	  },
            	  {
            	    "Symbol": "FULLL",
            	    "Name": "Full Circle Capital Corporation"
            	  },
            	  {
            	    "Symbol": "FLL",
            	    "Name": "Full House Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "FULT",
            	    "Name": "Fulton Financial Corporation"
            	  },
            	  {
            	    "Symbol": "FSNN",
            	    "Name": "Fusion Telecommunications International, Inc."
            	  },
            	  {
            	    "Symbol": "FF",
            	    "Name": "FutureFuel Corp."
            	  },
            	  {
            	    "Symbol": "FFHL",
            	    "Name": "Fuwei Films (Holdings) Co., Ltd."
            	  },
            	  {
            	    "Symbol": "GK",
            	    "Name": "G&K Services, Inc."
            	  },
            	  {
            	    "Symbol": "GIII",
            	    "Name": "G-III Apparel Group, LTD."
            	  },
            	  {
            	    "Symbol": "WILC",
            	    "Name": "G. Willi-Food International,  Ltd."
            	  },
            	  {
            	    "Symbol": "GCAP",
            	    "Name": "GAIN Capital Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "GGN",
            	    "Name": "GAMCO Global Gold, Natural Reources & Income Trust"
            	  },
            	  {
            	    "Symbol": "GGN^B",
            	    "Name": "GAMCO Global Gold, Natural Reources & Income Trust"
            	  },
            	  {
            	    "Symbol": "GNT",
            	    "Name": "GAMCO Natural Resources, Gold & Income Tust"
            	  },
            	  {
            	    "Symbol": "GMT",
            	    "Name": "GATX Corporation"
            	  },
            	  {
            	    "Symbol": "GCP",
            	    "Name": "GCP Applied Technologies Inc."
            	  },
            	  {
            	    "Symbol": "GBT",
            	    "Name": "GLOBAL BLOOD THERAPEUTICS, INC."
            	  },
            	  {
            	    "Symbol": "GNC",
            	    "Name": "GNC Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "GPIA",
            	    "Name": "GP Investments Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "GPIAU",
            	    "Name": "GP Investments Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "GPIAW",
            	    "Name": "GP Investments Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "GPX",
            	    "Name": "GP Strategies Corporation"
            	  },
            	  {
            	    "Symbol": "GRVY",
            	    "Name": "GRAVITY Co., Ltd."
            	  },
            	  {
            	    "Symbol": "GVP",
            	    "Name": "GSE Systems, Inc."
            	  },
            	  {
            	    "Symbol": "GSIG",
            	    "Name": "GSI Group, Inc."
            	  },
            	  {
            	    "Symbol": "GSIT",
            	    "Name": "GSI Technology, Inc."
            	  },
            	  {
            	    "Symbol": "GSVC",
            	    "Name": "GSV Capital Corp"
            	  },
            	  {
            	    "Symbol": "GTT",
            	    "Name": "GTT Communications, Inc."
            	  },
            	  {
            	    "Symbol": "GTXI",
            	    "Name": "GTx, Inc."
            	  },
            	  {
            	    "Symbol": "GWPH",
            	    "Name": "GW Pharmaceuticals Plc"
            	  },
            	  {
            	    "Symbol": "GWGH",
            	    "Name": "GWG Holdings, Inc"
            	  },
            	  {
            	    "Symbol": "GCV",
            	    "Name": "Gabelli Convertible and Income Securities Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GCV^B",
            	    "Name": "Gabelli Convertible and Income Securities Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GDV",
            	    "Name": "Gabelli Dividend"
            	  },
            	  {
            	    "Symbol": "GDV^A",
            	    "Name": "Gabelli Dividend"
            	  },
            	  {
            	    "Symbol": "GDV^D",
            	    "Name": "Gabelli Dividend"
            	  },
            	  {
            	    "Symbol": "GAB",
            	    "Name": "Gabelli Equity Trust, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GAB^D",
            	    "Name": "Gabelli Equity Trust, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GAB^G",
            	    "Name": "Gabelli Equity Trust, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GAB^H",
            	    "Name": "Gabelli Equity Trust, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GGZ",
            	    "Name": "Gabelli Global Small and Mid Cap Value Trust (The)"
            	  },
            	  {
            	    "Symbol": "GGT",
            	    "Name": "Gabelli Multi-Media Trust Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GGT^B",
            	    "Name": "Gabelli Multi-Media Trust Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GUT",
            	    "Name": "Gabelli Utility Trust (The)"
            	  },
            	  {
            	    "Symbol": "GUT^A",
            	    "Name": "Gabelli Utility Trust (The)"
            	  },
            	  {
            	    "Symbol": "GFA",
            	    "Name": "Gafisa SA"
            	  },
            	  {
            	    "Symbol": "GAIA",
            	    "Name": "Gaiam, Inc."
            	  },
            	  {
            	    "Symbol": "GLPG",
            	    "Name": "Galapagos NV"
            	  },
            	  {
            	    "Symbol": "GALT",
            	    "Name": "Galectin Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "GALTU",
            	    "Name": "Galectin Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "GALTW",
            	    "Name": "Galectin Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "GALE",
            	    "Name": "Galena Biopharma, Inc."
            	  },
            	  {
            	    "Symbol": "GLMD",
            	    "Name": "Galmed Pharmaceuticals Ltd."
            	  },
            	  {
            	    "Symbol": "GBL",
            	    "Name": "Gamco Investors, Inc."
            	  },
            	  {
            	    "Symbol": "GME",
            	    "Name": "Gamestop Corporation"
            	  },
            	  {
            	    "Symbol": "GPIC",
            	    "Name": "Gaming Partners International Corporation"
            	  },
            	  {
            	    "Symbol": "GLPI",
            	    "Name": "Gaming and Leisure Properties, Inc."
            	  },
            	  {
            	    "Symbol": "GPS",
            	    "Name": "Gap, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GRMN",
            	    "Name": "Garmin Ltd."
            	  },
            	  {
            	    "Symbol": "GGAC",
            	    "Name": "Garnero Group Acquisition Company"
            	  },
            	  {
            	    "Symbol": "GGACR",
            	    "Name": "Garnero Group Acquisition Company"
            	  },
            	  {
            	    "Symbol": "GGACU",
            	    "Name": "Garnero Group Acquisition Company"
            	  },
            	  {
            	    "Symbol": "GGACW",
            	    "Name": "Garnero Group Acquisition Company"
            	  },
            	  {
            	    "Symbol": "GARS",
            	    "Name": "Garrison Capital Inc."
            	  },
            	  {
            	    "Symbol": "IT",
            	    "Name": "Gartner, Inc."
            	  },
            	  {
            	    "Symbol": "EGAS",
            	    "Name": "Gas Natural Inc."
            	  },
            	  {
            	    "Symbol": "GLOG",
            	    "Name": "GasLog LP."
            	  },
            	  {
            	    "Symbol": "GLOG^A",
            	    "Name": "GasLog LP."
            	  },
            	  {
            	    "Symbol": "GLOP",
            	    "Name": "GasLog Partners LP"
            	  },
            	  {
            	    "Symbol": "GST",
            	    "Name": "Gastar Exploration Inc."
            	  },
            	  {
            	    "Symbol": "GST^A",
            	    "Name": "Gastar Exploration Inc."
            	  },
            	  {
            	    "Symbol": "GST^B",
            	    "Name": "Gastar Exploration Inc."
            	  },
            	  {
            	    "Symbol": "GZT",
            	    "Name": "Gazit-Globe Ltd."
            	  },
            	  {
            	    "Symbol": "GNMK",
            	    "Name": "GenMark Diagnostics, Inc."
            	  },
            	  {
            	    "Symbol": "GNVC",
            	    "Name": "GenVec, Inc."
            	  },
            	  {
            	    "Symbol": "GNK",
            	    "Name": "Genco Shipping & Trading Limited Warrants Expiring 12\/31\/2021"
            	  },
            	  {
            	    "Symbol": "GENC",
            	    "Name": "Gencor Industries Inc."
            	  },
            	  {
            	    "Symbol": "GNRT",
            	    "Name": "Gener8 Maritime, Inc."
            	  },
            	  {
            	    "Symbol": "GNRC",
            	    "Name": "Generac Holdlings Inc."
            	  },
            	  {
            	    "Symbol": "GAM",
            	    "Name": "General American Investors, Inc."
            	  },
            	  {
            	    "Symbol": "GAM^B",
            	    "Name": "General American Investors, Inc."
            	  },
            	  {
            	    "Symbol": "BGC",
            	    "Name": "General Cable Corporation"
            	  },
            	  {
            	    "Symbol": "GNCMA",
            	    "Name": "General Communication, Inc."
            	  },
            	  {
            	    "Symbol": "GD",
            	    "Name": "General Dynamics Corporation"
            	  },
            	  {
            	    "Symbol": "GEH",
            	    "Name": "General Electric Capital Corporation"
            	  },
            	  {
            	    "Symbol": "GEK",
            	    "Name": "General Electric Capital Corporation"
            	  },
            	  {
            	    "Symbol": "GE",
            	    "Name": "General Electric Company"
            	  },
            	  {
            	    "Symbol": "GEB",
            	    "Name": "General Electric Company"
            	  },
            	  {
            	    "Symbol": "JOB",
            	    "Name": "General Employment Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "GFN",
            	    "Name": "General Finance Corporation"
            	  },
            	  {
            	    "Symbol": "GFNCP",
            	    "Name": "General Finance Corporation"
            	  },
            	  {
            	    "Symbol": "GFNSL",
            	    "Name": "General Finance Corporation"
            	  },
            	  {
            	    "Symbol": "GGP",
            	    "Name": "General Growth Properties, Inc."
            	  },
            	  {
            	    "Symbol": "GGP^A",
            	    "Name": "General Growth Properties, Inc."
            	  },
            	  {
            	    "Symbol": "GIS",
            	    "Name": "General Mills, Inc."
            	  },
            	  {
            	    "Symbol": "GMO",
            	    "Name": "General Moly, Inc"
            	  },
            	  {
            	    "Symbol": "GM",
            	    "Name": "General Motors Company"
            	  },
            	  {
            	    "Symbol": "GM.WS.A",
            	    "Name": "General Motors Company"
            	  },
            	  {
            	    "Symbol": "GM.WS.B",
            	    "Name": "General Motors Company"
            	  },
            	  {
            	    "Symbol": "GSI",
            	    "Name": "General Steel Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "GCO",
            	    "Name": "Genesco Inc."
            	  },
            	  {
            	    "Symbol": "GWR",
            	    "Name": "Genesee & Wyoming, Inc."
            	  },
            	  {
            	    "Symbol": "GEL",
            	    "Name": "Genesis Energy, L.P."
            	  },
            	  {
            	    "Symbol": "GEN",
            	    "Name": "Genesis Healthcare, Inc."
            	  },
            	  {
            	    "Symbol": "GENE",
            	    "Name": "Genetic Technologies Ltd"
            	  },
            	  {
            	    "Symbol": "GNE",
            	    "Name": "Genie Energy Ltd."
            	  },
            	  {
            	    "Symbol": "GNE^A",
            	    "Name": "Genie Energy Ltd."
            	  },
            	  {
            	    "Symbol": "GNCA",
            	    "Name": "Genocea Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "GHDX",
            	    "Name": "Genomic Health, Inc."
            	  },
            	  {
            	    "Symbol": "G",
            	    "Name": "Genpact Limited"
            	  },
            	  {
            	    "Symbol": "GNTX",
            	    "Name": "Gentex Corporation"
            	  },
            	  {
            	    "Symbol": "THRM",
            	    "Name": "Gentherm Inc"
            	  },
            	  {
            	    "Symbol": "GPC",
            	    "Name": "Genuine Parts Company"
            	  },
            	  {
            	    "Symbol": "GNW",
            	    "Name": "Genworth Financial Inc"
            	  },
            	  {
            	    "Symbol": "GEO",
            	    "Name": "Geo Group Inc (The)"
            	  },
            	  {
            	    "Symbol": "GPRK",
            	    "Name": "Geopark Ltd"
            	  },
            	  {
            	    "Symbol": "GTWN",
            	    "Name": "Georgetown Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GPE^A",
            	    "Name": "Georgia Power Company"
            	  },
            	  {
            	    "Symbol": "GEOS",
            	    "Name": "Geospace Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "GGB",
            	    "Name": "Gerdau S.A."
            	  },
            	  {
            	    "Symbol": "GABC",
            	    "Name": "German American Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GERN",
            	    "Name": "Geron Corporation"
            	  },
            	  {
            	    "Symbol": "GTY",
            	    "Name": "Getty Realty Corporation"
            	  },
            	  {
            	    "Symbol": "GEVO",
            	    "Name": "Gevo, Inc."
            	  },
            	  {
            	    "Symbol": "ROCK",
            	    "Name": "Gibraltar Industries, Inc."
            	  },
            	  {
            	    "Symbol": "GIG",
            	    "Name": "GigOptix, Inc."
            	  },
            	  {
            	    "Symbol": "GIGA",
            	    "Name": "Giga-tronics Incorporated"
            	  },
            	  {
            	    "Symbol": "GIGM",
            	    "Name": "GigaMedia Limited"
            	  },
            	  {
            	    "Symbol": "GIMO",
            	    "Name": "Gigamon Inc."
            	  },
            	  {
            	    "Symbol": "GILT",
            	    "Name": "Gilat Satellite Networks Ltd."
            	  },
            	  {
            	    "Symbol": "GIL",
            	    "Name": "Gildan Activewear, Inc."
            	  },
            	  {
            	    "Symbol": "GILD",
            	    "Name": "Gilead Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "GBCI",
            	    "Name": "Glacier Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GLAD",
            	    "Name": "Gladstone Capital Corporation"
            	  },
            	  {
            	    "Symbol": "GLADO",
            	    "Name": "Gladstone Capital Corporation"
            	  },
            	  {
            	    "Symbol": "GOOD",
            	    "Name": "Gladstone Commercial Corporation"
            	  },
            	  {
            	    "Symbol": "GOODN",
            	    "Name": "Gladstone Commercial Corporation"
            	  },
            	  {
            	    "Symbol": "GOODO",
            	    "Name": "Gladstone Commercial Corporation"
            	  },
            	  {
            	    "Symbol": "GOODP",
            	    "Name": "Gladstone Commercial Corporation"
            	  },
            	  {
            	    "Symbol": "GAIN",
            	    "Name": "Gladstone Investment Corporation"
            	  },
            	  {
            	    "Symbol": "GAINN",
            	    "Name": "Gladstone Investment Corporation"
            	  },
            	  {
            	    "Symbol": "GAINO",
            	    "Name": "Gladstone Investment Corporation"
            	  },
            	  {
            	    "Symbol": "GAINP",
            	    "Name": "Gladstone Investment Corporation"
            	  },
            	  {
            	    "Symbol": "LAND",
            	    "Name": "Gladstone Land Corporation"
            	  },
            	  {
            	    "Symbol": "GLT",
            	    "Name": "Glatfelter"
            	  },
            	  {
            	    "Symbol": "GKOS",
            	    "Name": "Glaukos Corporation"
            	  },
            	  {
            	    "Symbol": "GSK",
            	    "Name": "GlaxoSmithKline PLC"
            	  },
            	  {
            	    "Symbol": "GLBZ",
            	    "Name": "Glen Burnie Bancorp"
            	  },
            	  {
            	    "Symbol": "BRSS",
            	    "Name": "Global Brass and Copper Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ENT",
            	    "Name": "Global Eagle Entertainment Inc."
            	  },
            	  {
            	    "Symbol": "GHI",
            	    "Name": "Global High Income Dollar Fund, Inc."
            	  },
            	  {
            	    "Symbol": "GBLI",
            	    "Name": "Global Indemnity plc"
            	  },
            	  {
            	    "Symbol": "GBLIZ",
            	    "Name": "Global Indemnity plc"
            	  },
            	  {
            	    "Symbol": "GNL",
            	    "Name": "Global Net Lease, Inc."
            	  },
            	  {
            	    "Symbol": "GPAC",
            	    "Name": "Global Partner Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "GPACU",
            	    "Name": "Global Partner Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "GPACW",
            	    "Name": "Global Partner Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "GLP",
            	    "Name": "Global Partners LP"
            	  },
            	  {
            	    "Symbol": "GPN",
            	    "Name": "Global Payments Inc."
            	  },
            	  {
            	    "Symbol": "GLPW",
            	    "Name": "Global Power Equipment Group Inc"
            	  },
            	  {
            	    "Symbol": "SELF",
            	    "Name": "Global Self Storage, Inc."
            	  },
            	  {
            	    "Symbol": "GSL",
            	    "Name": "Global Ship Lease, Inc."
            	  },
            	  {
            	    "Symbol": "GSL^B",
            	    "Name": "Global Ship Lease, Inc."
            	  },
            	  {
            	    "Symbol": "GSOL",
            	    "Name": "Global Sources Ltd."
            	  },
            	  {
            	    "Symbol": "ACTX",
            	    "Name": "Global X Guru Activist ETF"
            	  },
            	  {
            	    "Symbol": "QQQC",
            	    "Name": "Global X NASDAQ China Technology ETF"
            	  },
            	  {
            	    "Symbol": "SOCL",
            	    "Name": "Global X Social Media Index ETF"
            	  },
            	  {
            	    "Symbol": "ALTY",
            	    "Name": "Global X SuperDividend Alternatives ETF"
            	  },
            	  {
            	    "Symbol": "SRET",
            	    "Name": "Global X SuperDividend REIT ETF"
            	  },
            	  {
            	    "Symbol": "YLCO",
            	    "Name": "Global X Yieldco Index ETF"
            	  },
            	  {
            	    "Symbol": "GSB",
            	    "Name": "GlobalSCAPE, Inc."
            	  },
            	  {
            	    "Symbol": "GSAT",
            	    "Name": "Globalstar, Inc."
            	  },
            	  {
            	    "Symbol": "GLOB",
            	    "Name": "Globant S.A."
            	  },
            	  {
            	    "Symbol": "GBIM",
            	    "Name": "GlobeImmune, Inc."
            	  },
            	  {
            	    "Symbol": "GLBS",
            	    "Name": "Globus Maritime Limited"
            	  },
            	  {
            	    "Symbol": "GMED",
            	    "Name": "Globus Medical, Inc."
            	  },
            	  {
            	    "Symbol": "GLRI",
            	    "Name": "Glori Energy Inc"
            	  },
            	  {
            	    "Symbol": "GLOW",
            	    "Name": "Glowpoint, Inc."
            	  },
            	  {
            	    "Symbol": "GLUU",
            	    "Name": "Glu Mobile Inc."
            	  },
            	  {
            	    "Symbol": "GLYC",
            	    "Name": "GlycoMimetics, Inc."
            	  },
            	  {
            	    "Symbol": "GDDY",
            	    "Name": "GoDaddy Inc."
            	  },
            	  {
            	    "Symbol": "GPRO",
            	    "Name": "GoPro, Inc."
            	  },
            	  {
            	    "Symbol": "GOGO",
            	    "Name": "Gogo Inc."
            	  },
            	  {
            	    "Symbol": "GOL",
            	    "Name": "Gol Linhas Aereas Inteligentes S.A."
            	  },
            	  {
            	    "Symbol": "GLNG",
            	    "Name": "Golar LNG Limited"
            	  },
            	  {
            	    "Symbol": "GMLP",
            	    "Name": "Golar LNG Partners LP"
            	  },
            	  {
            	    "Symbol": "GFI",
            	    "Name": "Gold Fields Limited"
            	  },
            	  {
            	    "Symbol": "GORO",
            	    "Name": "Gold Resource Corporation"
            	  },
            	  {
            	    "Symbol": "GSV",
            	    "Name": "Gold Standard Ventures Corporation"
            	  },
            	  {
            	    "Symbol": "GG",
            	    "Name": "Goldcorp Inc."
            	  },
            	  {
            	    "Symbol": "GLDC",
            	    "Name": "Golden Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "GDEN",
            	    "Name": "Golden Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "AUMN",
            	    "Name": "Golden Minerals Company"
            	  },
            	  {
            	    "Symbol": "GOGL",
            	    "Name": "Golden Ocean Group Limited"
            	  },
            	  {
            	    "Symbol": "GSS",
            	    "Name": "Golden Star Resources, Ltd"
            	  },
            	  {
            	    "Symbol": "GV",
            	    "Name": "Goldfield Corporation (The)"
            	  },
            	  {
            	    "Symbol": "GSBD",
            	    "Name": "Goldman Sachs BDC, Inc."
            	  },
            	  {
            	    "Symbol": "GS",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GSJ",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^A",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^B",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^C",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^D",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^I",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^J",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^K",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GS^N",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "TFG",
            	    "Name": "Goldman Sachs Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GER",
            	    "Name": "Goldman Sachs MLP Energy Renaissance Fund"
            	  },
            	  {
            	    "Symbol": "GMZ",
            	    "Name": "Goldman Sachs MLP Income Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "GBDC",
            	    "Name": "Golub Capital BDC, Inc."
            	  },
            	  {
            	    "Symbol": "GTIM",
            	    "Name": "Good Times Restaurants Inc."
            	  },
            	  {
            	    "Symbol": "GMAN",
            	    "Name": "Gordmans Stores, Inc."
            	  },
            	  {
            	    "Symbol": "GRSH",
            	    "Name": "Gores Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "GRSHU",
            	    "Name": "Gores Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "GRSHW",
            	    "Name": "Gores Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "GRC",
            	    "Name": "Gorman-Rupp Company (The)"
            	  },
            	  {
            	    "Symbol": "GOV",
            	    "Name": "Government Properties Income Trust"
            	  },
            	  {
            	    "Symbol": "GGG",
            	    "Name": "Graco Inc."
            	  },
            	  {
            	    "Symbol": "GHM",
            	    "Name": "Graham Corporation"
            	  },
            	  {
            	    "Symbol": "GHC",
            	    "Name": "Graham Holdings Company"
            	  },
            	  {
            	    "Symbol": "GPT",
            	    "Name": "Gramercy Property Trust"
            	  },
            	  {
            	    "Symbol": "GPT^A",
            	    "Name": "Gramercy Property Trust Inc."
            	  },
            	  {
            	    "Symbol": "GTE",
            	    "Name": "Gran Tierra Energy Inc."
            	  },
            	  {
            	    "Symbol": "GRAM",
            	    "Name": "Grana y Montero S.A.A."
            	  },
            	  {
            	    "Symbol": "LOPE",
            	    "Name": "Grand Canyon Education, Inc."
            	  },
            	  {
            	    "Symbol": "GVA",
            	    "Name": "Granite Construction Incorporated"
            	  },
            	  {
            	    "Symbol": "GRP.U",
            	    "Name": "Granite Real Estate Inc."
            	  },
            	  {
            	    "Symbol": "GPK",
            	    "Name": "Graphic Packaging Holding Company"
            	  },
            	  {
            	    "Symbol": "GTN",
            	    "Name": "Gray Television, Inc."
            	  },
            	  {
            	    "Symbol": "GTN.A",
            	    "Name": "Gray Television, Inc."
            	  },
            	  {
            	    "Symbol": "AJX",
            	    "Name": "Great Ajax Corp."
            	  },
            	  {
            	    "Symbol": "GBSN",
            	    "Name": "Great Basin Scientific, Inc."
            	  },
            	  {
            	    "Symbol": "GLDD",
            	    "Name": "Great Lakes Dredge & Dock Corporation"
            	  },
            	  {
            	    "Symbol": "GPL",
            	    "Name": "Great Panther Silver Limited"
            	  },
            	  {
            	    "Symbol": "GXP",
            	    "Name": "Great Plains Energy Inc"
            	  },
            	  {
            	    "Symbol": "GXP^A",
            	    "Name": "Great Plains Energy Inc"
            	  },
            	  {
            	    "Symbol": "GXP^D",
            	    "Name": "Great Plains Energy Inc"
            	  },
            	  {
            	    "Symbol": "GXP^E",
            	    "Name": "Great Plains Energy Inc"
            	  },
            	  {
            	    "Symbol": "GSBC",
            	    "Name": "Great Southern Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GWB",
            	    "Name": "Great Western Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GB",
            	    "Name": "Greatbatch, Inc."
            	  },
            	  {
            	    "Symbol": "GNBC",
            	    "Name": "Green Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GRBK",
            	    "Name": "Green Brick Partners, Inc."
            	  },
            	  {
            	    "Symbol": "GDOT",
            	    "Name": "Green Dot Corporation"
            	  },
            	  {
            	    "Symbol": "GPP",
            	    "Name": "Green Plains Partners LP"
            	  },
            	  {
            	    "Symbol": "GPRE",
            	    "Name": "Green Plains, Inc."
            	  },
            	  {
            	    "Symbol": "GBX",
            	    "Name": "Greenbrier Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GCBC",
            	    "Name": "Greene County Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "GHL",
            	    "Name": "Greenhill & Co., Inc."
            	  },
            	  {
            	    "Symbol": "GLRE",
            	    "Name": "Greenlight Reinsurance, Ltd."
            	  },
            	  {
            	    "Symbol": "GEF",
            	    "Name": "Greif Bros. Corporation"
            	  },
            	  {
            	    "Symbol": "GEF.B",
            	    "Name": "Greif Bros. Corporation"
            	  },
            	  {
            	    "Symbol": "GRIF",
            	    "Name": "Griffin Industrial Realty, Inc."
            	  },
            	  {
            	    "Symbol": "GFF",
            	    "Name": "Griffon Corporation"
            	  },
            	  {
            	    "Symbol": "GRFS",
            	    "Name": "Grifols, S.A."
            	  },
            	  {
            	    "Symbol": "GPI",
            	    "Name": "Group 1 Automotive, Inc."
            	  },
            	  {
            	    "Symbol": "GRPN",
            	    "Name": "Groupon, Inc."
            	  },
            	  {
            	    "Symbol": "GRUB",
            	    "Name": "GrubHub Inc."
            	  },
            	  {
            	    "Symbol": "PAC",
            	    "Name": "Grupo Aeroportuario Del Pacifico, S.A. de C.V."
            	  },
            	  {
            	    "Symbol": "OMAB",
            	    "Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V."
            	  },
            	  {
            	    "Symbol": "ASR",
            	    "Name": "Grupo Aeroportuario del Sureste, S.A. de C.V."
            	  },
            	  {
            	    "Symbol": "AVAL",
            	    "Name": "Grupo Aval Acciones y Valores S.A."
            	  },
            	  {
            	    "Symbol": "GGAL",
            	    "Name": "Grupo Financiero Galicia S.A."
            	  },
            	  {
            	    "Symbol": "BSMX",
            	    "Name": "Grupo Financiero Santander Mexico S.A. B. de C.V."
            	  },
            	  {
            	    "Symbol": "SIM",
            	    "Name": "Grupo Simec, S.A. de C.V."
            	  },
            	  {
            	    "Symbol": "TV",
            	    "Name": "Grupo Televisa S.A."
            	  },
            	  {
            	    "Symbol": "GSH",
            	    "Name": "Guangshen Railway Company Limited"
            	  },
            	  {
            	    "Symbol": "GBNK",
            	    "Name": "Guaranty Bancorp"
            	  },
            	  {
            	    "Symbol": "GFED",
            	    "Name": "Guaranty Federal Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "GES",
            	    "Name": "Guess?, Inc."
            	  },
            	  {
            	    "Symbol": "GBAB",
            	    "Name": "Guggenheim Build America Bonds Managed Duration Trust"
            	  },
            	  {
            	    "Symbol": "GGM",
            	    "Name": "Guggenheim Credit Allocation Fund"
            	  },
            	  {
            	    "Symbol": "GPM",
            	    "Name": "Guggenheim Enhanced Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "GGE",
            	    "Name": "Guggenheim Enhanced Equity Strategy Fund"
            	  },
            	  {
            	    "Symbol": "GEQ",
            	    "Name": "Guggenheim Equal Weight Enhanced Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "GOF",
            	    "Name": "Guggenheim Strategic Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "GUID",
            	    "Name": "Guidance Software, Inc."
            	  },
            	  {
            	    "Symbol": "GWRE",
            	    "Name": "Guidewire Software, Inc."
            	  },
            	  {
            	    "Symbol": "GIFI",
            	    "Name": "Gulf Island Fabrication, Inc."
            	  },
            	  {
            	    "Symbol": "GUA",
            	    "Name": "Gulf Power Company"
            	  },
            	  {
            	    "Symbol": "GURE",
            	    "Name": "Gulf Resources, Inc."
            	  },
            	  {
            	    "Symbol": "GLF",
            	    "Name": "GulfMark Offshore, Inc."
            	  },
            	  {
            	    "Symbol": "GPOR",
            	    "Name": "Gulfport Energy Corporation"
            	  },
            	  {
            	    "Symbol": "GYRO",
            	    "Name": "Gyrodyne , LLC"
            	  },
            	  {
            	    "Symbol": "HEES",
            	    "Name": "H&E Equipment Services, Inc."
            	  },
            	  {
            	    "Symbol": "HRB",
            	    "Name": "H&R Block, Inc."
            	  },
            	  {
            	    "Symbol": "FUL",
            	    "Name": "H. B. Fuller Company"
            	  },
            	  {
            	    "Symbol": "HCHC",
            	    "Name": "HC2 Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HCA",
            	    "Name": "HCA Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HCI",
            	    "Name": "HCI Group, Inc."
            	  },
            	  {
            	    "Symbol": "HCJ",
            	    "Name": "HCI Group, Inc."
            	  },
            	  {
            	    "Symbol": "HCP",
            	    "Name": "HCP, Inc."
            	  },
            	  {
            	    "Symbol": "HDS",
            	    "Name": "HD Supply Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HDB",
            	    "Name": "HDFC Bank Limited"
            	  },
            	  {
            	    "Symbol": "HFFC",
            	    "Name": "HF Financial Corp."
            	  },
            	  {
            	    "Symbol": "HF",
            	    "Name": "HFF, Inc."
            	  },
            	  {
            	    "Symbol": "HGG",
            	    "Name": "HHGregg, Inc."
            	  },
            	  {
            	    "Symbol": "HMG",
            	    "Name": "HMG\/Courtland Properties, Inc."
            	  },
            	  {
            	    "Symbol": "HMNF",
            	    "Name": "HMN Financial, Inc."
            	  },
            	  {
            	    "Symbol": "HMSY",
            	    "Name": "HMS Holdings Corp"
            	  },
            	  {
            	    "Symbol": "HNI",
            	    "Name": "HNI Corporation"
            	  },
            	  {
            	    "Symbol": "HPQ",
            	    "Name": "HP Inc."
            	  },
            	  {
            	    "Symbol": "HRG",
            	    "Name": "HRG Group, Inc."
            	  },
            	  {
            	    "Symbol": "HSBC",
            	    "Name": "HSBC Holdings plc"
            	  },
            	  {
            	    "Symbol": "HSBC^A",
            	    "Name": "HSBC Holdings plc"
            	  },
            	  {
            	    "Symbol": "HSEA",
            	    "Name": "HSBC Holdings plc"
            	  },
            	  {
            	    "Symbol": "HSEB",
            	    "Name": "HSBC Holdings plc"
            	  },
            	  {
            	    "Symbol": "HUSI^F",
            	    "Name": "HSBC USA, Inc."
            	  },
            	  {
            	    "Symbol": "HUSI^G",
            	    "Name": "HSBC USA, Inc."
            	  },
            	  {
            	    "Symbol": "HUSI^H",
            	    "Name": "HSBC USA, Inc."
            	  },
            	  {
            	    "Symbol": "HSNI",
            	    "Name": "HSN, Inc."
            	  },
            	  {
            	    "Symbol": "HTGM",
            	    "Name": "HTG Molecular Diagnostics, Inc."
            	  },
            	  {
            	    "Symbol": "HAE",
            	    "Name": "Haemonetics Corporation"
            	  },
            	  {
            	    "Symbol": "HLG",
            	    "Name": "Hailiang Education Group Inc."
            	  },
            	  {
            	    "Symbol": "HK",
            	    "Name": "Halcon Resources Corporation"
            	  },
            	  {
            	    "Symbol": "HNRG",
            	    "Name": "Hallador Energy Company"
            	  },
            	  {
            	    "Symbol": "HAL",
            	    "Name": "Halliburton Company"
            	  },
            	  {
            	    "Symbol": "HALL",
            	    "Name": "Hallmark Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "HALO",
            	    "Name": "Halozyme Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "HYH",
            	    "Name": "Halyard Health, Inc."
            	  },
            	  {
            	    "Symbol": "HBK",
            	    "Name": "Hamilton Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "HMPR",
            	    "Name": "Hampton Roads Bankshares Inc"
            	  },
            	  {
            	    "Symbol": "HBHC",
            	    "Name": "Hancock Holding Company"
            	  },
            	  {
            	    "Symbol": "HBHCL",
            	    "Name": "Hancock Holding Company"
            	  },
            	  {
            	    "Symbol": "HNH",
            	    "Name": "Handy & Harman Ltd."
            	  },
            	  {
            	    "Symbol": "HBI",
            	    "Name": "Hanesbrands Inc."
            	  },
            	  {
            	    "Symbol": "HAFC",
            	    "Name": "Hanmi Financial Corporation"
            	  },
            	  {
            	    "Symbol": "HASI",
            	    "Name": "Hannon Armstrong Sustainable Infrastructure Capital, Inc."
            	  },
            	  {
            	    "Symbol": "HNSN",
            	    "Name": "Hansen Medical, Inc."
            	  },
            	  {
            	    "Symbol": "HQCL",
            	    "Name": "Hanwha Q CELLS Co., Ltd."
            	  },
            	  {
            	    "Symbol": "HDNG",
            	    "Name": "Hardinge, Inc."
            	  },
            	  {
            	    "Symbol": "HOG",
            	    "Name": "Harley-Davidson, Inc."
            	  },
            	  {
            	    "Symbol": "HAR",
            	    "Name": "Harman International Industries, Incorporated"
            	  },
            	  {
            	    "Symbol": "HLIT",
            	    "Name": "Harmonic Inc."
            	  },
            	  {
            	    "Symbol": "HMY",
            	    "Name": "Harmony Gold Mining Company Limited"
            	  },
            	  {
            	    "Symbol": "HRMN",
            	    "Name": "Harmony Merger Corp."
            	  },
            	  {
            	    "Symbol": "HRMNU",
            	    "Name": "Harmony Merger Corp."
            	  },
            	  {
            	    "Symbol": "HRMNW",
            	    "Name": "Harmony Merger Corp."
            	  },
            	  {
            	    "Symbol": "TINY",
            	    "Name": "Harris & Harris Group, Inc."
            	  },
            	  {
            	    "Symbol": "HRS",
            	    "Name": "Harris Corporation"
            	  },
            	  {
            	    "Symbol": "HSC",
            	    "Name": "Harsco Corporation"
            	  },
            	  {
            	    "Symbol": "HHS",
            	    "Name": "Harte-Hanks, Inc."
            	  },
            	  {
            	    "Symbol": "HGH",
            	    "Name": "Hartford Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "HIG",
            	    "Name": "Hartford Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "HIG.WS",
            	    "Name": "Hartford Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "HART",
            	    "Name": "Harvard Apparatus Regenerative Technology, Inc."
            	  },
            	  {
            	    "Symbol": "HBIO",
            	    "Name": "Harvard Bioscience, Inc."
            	  },
            	  {
            	    "Symbol": "HCAP",
            	    "Name": "Harvest Capital Credit Corporation"
            	  },
            	  {
            	    "Symbol": "HCAPL",
            	    "Name": "Harvest Capital Credit Corporation"
            	  },
            	  {
            	    "Symbol": "HNR",
            	    "Name": "Harvest Natural Resources Inc"
            	  },
            	  {
            	    "Symbol": "HAS",
            	    "Name": "Hasbro, Inc."
            	  },
            	  {
            	    "Symbol": "HTS",
            	    "Name": "Hatteras Financial Corp"
            	  },
            	  {
            	    "Symbol": "HTS^A",
            	    "Name": "Hatteras Financial Corp"
            	  },
            	  {
            	    "Symbol": "HVT",
            	    "Name": "Haverty Furniture Companies, Inc."
            	  },
            	  {
            	    "Symbol": "HVT.A",
            	    "Name": "Haverty Furniture Companies, Inc."
            	  },
            	  {
            	    "Symbol": "HE",
            	    "Name": "Hawaiian Electric Industries, Inc."
            	  },
            	  {
            	    "Symbol": "HE^U",
            	    "Name": "Hawaiian Electric Industries, Inc."
            	  },
            	  {
            	    "Symbol": "HA",
            	    "Name": "Hawaiian Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HCOM",
            	    "Name": "Hawaiian Telcom Holdco, Inc."
            	  },
            	  {
            	    "Symbol": "HWKN",
            	    "Name": "Hawkins, Inc."
            	  },
            	  {
            	    "Symbol": "HWBK",
            	    "Name": "Hawthorn Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "HAYN",
            	    "Name": "Haynes International, Inc."
            	  },
            	  {
            	    "Symbol": "HW",
            	    "Name": "Headwaters Incorporated"
            	  },
            	  {
            	    "Symbol": "HIIQ",
            	    "Name": "Health Insurance Innovations, Inc."
            	  },
            	  {
            	    "Symbol": "HNT",
            	    "Name": "Health Net Inc."
            	  },
            	  {
            	    "Symbol": "HQY",
            	    "Name": "HealthEquity, Inc."
            	  },
            	  {
            	    "Symbol": "HLS",
            	    "Name": "HealthSouth Corporation"
            	  },
            	  {
            	    "Symbol": "HLS.WS",
            	    "Name": "HealthSouth Corporation"
            	  },
            	  {
            	    "Symbol": "HSTM",
            	    "Name": "HealthStream, Inc."
            	  },
            	  {
            	    "Symbol": "HR",
            	    "Name": "Healthcare Realty Trust Incorporated"
            	  },
            	  {
            	    "Symbol": "HCSG",
            	    "Name": "Healthcare Services Group, Inc."
            	  },
            	  {
            	    "Symbol": "HTA",
            	    "Name": "Healthcare Trust of America, Inc."
            	  },
            	  {
            	    "Symbol": "HWAY",
            	    "Name": "Healthways, Inc."
            	  },
            	  {
            	    "Symbol": "HTLD",
            	    "Name": "Heartland Express, Inc."
            	  },
            	  {
            	    "Symbol": "HTLF",
            	    "Name": "Heartland Financial USA, Inc."
            	  },
            	  {
            	    "Symbol": "HPY",
            	    "Name": "Heartland Payment Systems, Inc."
            	  },
            	  {
            	    "Symbol": "HTWR",
            	    "Name": "Heartware International, Inc."
            	  },
            	  {
            	    "Symbol": "HTBX",
            	    "Name": "Heat Biologics, Inc."
            	  },
            	  {
            	    "Symbol": "HL",
            	    "Name": "Hecla Mining Company"
            	  },
            	  {
            	    "Symbol": "HL^B",
            	    "Name": "Hecla Mining Company"
            	  },
            	  {
            	    "Symbol": "HEI",
            	    "Name": "Heico Corporation"
            	  },
            	  {
            	    "Symbol": "HEI.A",
            	    "Name": "Heico Corporation"
            	  },
            	  {
            	    "Symbol": "HSII",
            	    "Name": "Heidrick & Struggles International, Inc."
            	  },
            	  {
            	    "Symbol": "HELE",
            	    "Name": "Helen of Troy Limited"
            	  },
            	  {
            	    "Symbol": "HMNY",
            	    "Name": "Helios and Matheson Analytics Inc"
            	  },
            	  {
            	    "Symbol": "HLX",
            	    "Name": "Helix Energy Solutions Group, Inc."
            	  },
            	  {
            	    "Symbol": "HP",
            	    "Name": "Helmerich & Payne, Inc."
            	  },
            	  {
            	    "Symbol": "HMTV",
            	    "Name": "Hemisphere Media Group, Inc."
            	  },
            	  {
            	    "Symbol": "HEB",
            	    "Name": "Hemispherx BioPharma, Inc."
            	  },
            	  {
            	    "Symbol": "HNNA",
            	    "Name": "Hennessy Advisors, Inc."
            	  },
            	  {
            	    "Symbol": "HCAC",
            	    "Name": "Hennessy Capital Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "HCACU",
            	    "Name": "Hennessy Capital Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "HCACW",
            	    "Name": "Hennessy Capital Acquisition Corp. II"
            	  },
            	  {
            	    "Symbol": "HSIC",
            	    "Name": "Henry Schein, Inc."
            	  },
            	  {
            	    "Symbol": "HLF",
            	    "Name": "Herbalife LTD."
            	  },
            	  {
            	    "Symbol": "HTGC",
            	    "Name": "Hercules Capital, Inc."
            	  },
            	  {
            	    "Symbol": "HTGX",
            	    "Name": "Hercules Capital, Inc."
            	  },
            	  {
            	    "Symbol": "HTGY",
            	    "Name": "Hercules Capital, Inc."
            	  },
            	  {
            	    "Symbol": "HTGZ",
            	    "Name": "Hercules Capital, Inc."
            	  },
            	  {
            	    "Symbol": "HERO",
            	    "Name": "Hercules Offshore, Inc."
            	  },
            	  {
            	    "Symbol": "HTBK",
            	    "Name": "Heritage Commerce Corp"
            	  },
            	  {
            	    "Symbol": "HFWA",
            	    "Name": "Heritage Financial Corporation"
            	  },
            	  {
            	    "Symbol": "HRTG",
            	    "Name": "Heritage Insurance Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HEOP",
            	    "Name": "Heritage Oaks Bancorp"
            	  },
            	  {
            	    "Symbol": "HCCI",
            	    "Name": "Heritage-Crystal Clean, Inc."
            	  },
            	  {
            	    "Symbol": "MLHR",
            	    "Name": "Herman Miller, Inc."
            	  },
            	  {
            	    "Symbol": "HRTX",
            	    "Name": "Heron Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "HT",
            	    "Name": "Hersha Hospitality Trust"
            	  },
            	  {
            	    "Symbol": "HT^B",
            	    "Name": "Hersha Hospitality Trust"
            	  },
            	  {
            	    "Symbol": "HT^C",
            	    "Name": "Hersha Hospitality Trust"
            	  },
            	  {
            	    "Symbol": "HSY",
            	    "Name": "Hershey Company (The)"
            	  },
            	  {
            	    "Symbol": "HTZ",
            	    "Name": "Hertz Global Holdings, Inc"
            	  },
            	  {
            	    "Symbol": "HSKA",
            	    "Name": "Heska Corporation"
            	  },
            	  {
            	    "Symbol": "HES",
            	    "Name": "Hess Corporation"
            	  },
            	  {
            	    "Symbol": "HES^A",
            	    "Name": "Hess Corporation"
            	  },
            	  {
            	    "Symbol": "HPE",
            	    "Name": "Hewlett Packard Enterprise Company"
            	  },
            	  {
            	    "Symbol": "HXL",
            	    "Name": "Hexcel Corporation"
            	  },
            	  {
            	    "Symbol": "HCLP",
            	    "Name": "Hi-Crush Partners LP"
            	  },
            	  {
            	    "Symbol": "HIBB",
            	    "Name": "Hibbett Sports, Inc."
            	  },
            	  {
            	    "Symbol": "ONE",
            	    "Name": "Higher One Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "HPJ",
            	    "Name": "Highpower International Inc"
            	  },
            	  {
            	    "Symbol": "HIHO",
            	    "Name": "Highway Holdings Limited"
            	  },
            	  {
            	    "Symbol": "HIW",
            	    "Name": "Highwoods Properties, Inc."
            	  },
            	  {
            	    "Symbol": "HIL",
            	    "Name": "Hill International, Inc."
            	  },
            	  {
            	    "Symbol": "HRC",
            	    "Name": "Hill-Rom Holdings Inc"
            	  },
            	  {
            	    "Symbol": "HI",
            	    "Name": "Hillenbrand Inc"
            	  },
            	  {
            	    "Symbol": "HLM^",
            	    "Name": "Hillman Group Capital Trust"
            	  },
            	  {
            	    "Symbol": "HTH",
            	    "Name": "Hilltop Holdings Inc."
            	  },
            	  {
            	    "Symbol": "HLT",
            	    "Name": "Hilton Worldwide Holdings Inc."
            	  },
            	  {
            	    "Symbol": "HIMX",
            	    "Name": "Himax Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "HIFS",
            	    "Name": "Hingham Institution for Savings"
            	  },
            	  {
            	    "Symbol": "HSGX",
            	    "Name": "Histogenics Corporation"
            	  },
            	  {
            	    "Symbol": "HMLP",
            	    "Name": "Hoegh LNG Partners LP"
            	  },
            	  {
            	    "Symbol": "HEP",
            	    "Name": "Holly Energy Partners, L.P."
            	  },
            	  {
            	    "Symbol": "HFC",
            	    "Name": "HollyFrontier Corporation"
            	  },
            	  {
            	    "Symbol": "HOLI",
            	    "Name": "Hollysys Automation Technologies, Ltd."
            	  },
            	  {
            	    "Symbol": "HOLX",
            	    "Name": "Hologic, Inc."
            	  },
            	  {
            	    "Symbol": "HOMB",
            	    "Name": "Home BancShares, Inc."
            	  },
            	  {
            	    "Symbol": "HBCP",
            	    "Name": "Home Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "HD",
            	    "Name": "Home Depot, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "HFBL",
            	    "Name": "Home Federal Bancorp, Inc. of Louisiana"
            	  },
            	  {
            	    "Symbol": "HMST",
            	    "Name": "HomeStreet, Inc."
            	  },
            	  {
            	    "Symbol": "HTBI",
            	    "Name": "HomeTrust Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "HMIN",
            	    "Name": "Homeinns Hotel Group"
            	  },
            	  {
            	    "Symbol": "HMC",
            	    "Name": "Honda Motor Company, Ltd."
            	  },
            	  {
            	    "Symbol": "HON",
            	    "Name": "Honeywell International Inc."
            	  },
            	  {
            	    "Symbol": "CETC",
            	    "Name": "Hongli Clean Energy Technologies Corp."
            	  },
            	  {
            	    "Symbol": "HOFT",
            	    "Name": "Hooker Furniture Corporation"
            	  },
            	  {
            	    "Symbol": "HH",
            	    "Name": "Hooper Holmes, Inc."
            	  },
            	  {
            	    "Symbol": "HFBC",
            	    "Name": "HopFed Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "HMN",
            	    "Name": "Horace Mann Educators Corporation"
            	  },
            	  {
            	    "Symbol": "HBNC",
            	    "Name": "Horizon Bancorp (IN)"
            	  },
            	  {
            	    "Symbol": "HZN",
            	    "Name": "Horizon Global Corporation"
            	  },
            	  {
            	    "Symbol": "HZNP",
            	    "Name": "Horizon Pharma plc"
            	  },
            	  {
            	    "Symbol": "HRZN",
            	    "Name": "Horizon Technology Finance Corporation"
            	  },
            	  {
            	    "Symbol": "HTF",
            	    "Name": "Horizon Technology Finance Corporation"
            	  },
            	  {
            	    "Symbol": "HRL",
            	    "Name": "Hormel Foods Corporation"
            	  },
            	  {
            	    "Symbol": "HOS",
            	    "Name": "Hornbeck Offshore Services"
            	  },
            	  {
            	    "Symbol": "HDP",
            	    "Name": "Hortonworks, Inc."
            	  },
            	  {
            	    "Symbol": "HPT",
            	    "Name": "Hospitality Properties Trust"
            	  },
            	  {
            	    "Symbol": "HPT^D",
            	    "Name": "Hospitality Properties Trust"
            	  },
            	  {
            	    "Symbol": "HST",
            	    "Name": "Host Hotels & Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "HMHC",
            	    "Name": "Houghton Mifflin Harcourt Company"
            	  },
            	  {
            	    "Symbol": "HLI",
            	    "Name": "Houlihan Lokey, Inc."
            	  },
            	  {
            	    "Symbol": "HSFC^B",
            	    "Name": "Household Finance Corp"
            	  },
            	  {
            	    "Symbol": "HUSA",
            	    "Name": "Houston American Energy Corporation"
            	  },
            	  {
            	    "Symbol": "HWCC",
            	    "Name": "Houston Wire & Cable Company"
            	  },
            	  {
            	    "Symbol": "HOV",
            	    "Name": "Hovnanian Enterprises Inc"
            	  },
            	  {
            	    "Symbol": "HOVNP",
            	    "Name": "Hovnanian Enterprises Inc"
            	  },
            	  {
            	    "Symbol": "HBMD",
            	    "Name": "Howard Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "HHC",
            	    "Name": "Howard Hughes Corporation (The)"
            	  },
            	  {
            	    "Symbol": "HNP",
            	    "Name": "Huaneng Power International, Inc."
            	  },
            	  {
            	    "Symbol": "HUBG",
            	    "Name": "Hub Group, Inc."
            	  },
            	  {
            	    "Symbol": "HUBS",
            	    "Name": "HubSpot, Inc."
            	  },
            	  {
            	    "Symbol": "HUBB",
            	    "Name": "Hubbell Inc"
            	  },
            	  {
            	    "Symbol": "HBM",
            	    "Name": "HudBay Minerals Inc"
            	  },
            	  {
            	    "Symbol": "HBM.WS",
            	    "Name": "HudBay Minerals Inc"
            	  },
            	  {
            	    "Symbol": "HSON",
            	    "Name": "Hudson Global, Inc."
            	  },
            	  {
            	    "Symbol": "HPP",
            	    "Name": "Hudson Pacific Properties, Inc."
            	  },
            	  {
            	    "Symbol": "HDSN",
            	    "Name": "Hudson Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "HGT",
            	    "Name": "Hugoton Royalty Trust"
            	  },
            	  {
            	    "Symbol": "HUM",
            	    "Name": "Humana Inc."
            	  },
            	  {
            	    "Symbol": "HBAN",
            	    "Name": "Huntington Bancshares Incorporated"
            	  },
            	  {
            	    "Symbol": "HBANP",
            	    "Name": "Huntington Bancshares Incorporated"
            	  },
            	  {
            	    "Symbol": "HII",
            	    "Name": "Huntington Ingalls Industries, Inc."
            	  },
            	  {
            	    "Symbol": "HUN",
            	    "Name": "Huntsman Corporation"
            	  },
            	  {
            	    "Symbol": "HURC",
            	    "Name": "Hurco Companies, Inc."
            	  },
            	  {
            	    "Symbol": "HURN",
            	    "Name": "Huron Consulting Group Inc."
            	  },
            	  {
            	    "Symbol": "HTCH",
            	    "Name": "Hutchinson Technology Incorporated"
            	  },
            	  {
            	    "Symbol": "HCM",
            	    "Name": "Hutchison China MediTech Limited"
            	  },
            	  {
            	    "Symbol": "HBP",
            	    "Name": "Huttig Building Products, Inc."
            	  },
            	  {
            	    "Symbol": "H",
            	    "Name": "Hyatt Hotels Corporation"
            	  },
            	  {
            	    "Symbol": "HDRA",
            	    "Name": "Hydra Industries Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "HDRAR",
            	    "Name": "Hydra Industries Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "HDRAU",
            	    "Name": "Hydra Industries Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "HDRAW",
            	    "Name": "Hydra Industries Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "HYGS",
            	    "Name": "Hydrogenics Corporation"
            	  },
            	  {
            	    "Symbol": "HY",
            	    "Name": "Hyster-Yale Materials Handling, Inc."
            	  },
            	  {
            	    "Symbol": "IDSY",
            	    "Name": "I.D. Systems, Inc."
            	  },
            	  {
            	    "Symbol": "IAC",
            	    "Name": "IAC\/InterActiveCorp"
            	  },
            	  {
            	    "Symbol": "IBKC",
            	    "Name": "IBERIABANK Corporation"
            	  },
            	  {
            	    "Symbol": "IBKCP",
            	    "Name": "IBERIABANK Corporation"
            	  },
            	  {
            	    "Symbol": "IBO",
            	    "Name": "IBO (Listing Market - NYSE Amex Network B F)"
            	  },
            	  {
            	    "Symbol": "ICFI",
            	    "Name": "ICF International, Inc."
            	  },
            	  {
            	    "Symbol": "IBN",
            	    "Name": "ICICI Bank Limited"
            	  },
            	  {
            	    "Symbol": "ICLR",
            	    "Name": "ICON plc"
            	  },
            	  {
            	    "Symbol": "ICUI",
            	    "Name": "ICU Medical, Inc."
            	  },
            	  {
            	    "Symbol": "IDA",
            	    "Name": "IDACORP, Inc."
            	  },
            	  {
            	    "Symbol": "IEX",
            	    "Name": "IDEX Corporation"
            	  },
            	  {
            	    "Symbol": "IDXX",
            	    "Name": "IDEXX Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "IDI",
            	    "Name": "IDI, Inc."
            	  },
            	  {
            	    "Symbol": "IDT",
            	    "Name": "IDT Corporation"
            	  },
            	  {
            	    "Symbol": "IEC",
            	    "Name": "IEC Electronics Corp."
            	  },
            	  {
            	    "Symbol": "IROQ",
            	    "Name": "IF Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "IHS",
            	    "Name": "IHS Inc."
            	  },
            	  {
            	    "Symbol": "IIVI",
            	    "Name": "II-VI Incorporated"
            	  },
            	  {
            	    "Symbol": "IMS",
            	    "Name": "IMS Health Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "INCR",
            	    "Name": "INC Research Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IND",
            	    "Name": "ING Group, N.V."
            	  },
            	  {
            	    "Symbol": "ING",
            	    "Name": "ING Group, N.V."
            	  },
            	  {
            	    "Symbol": "INZ",
            	    "Name": "ING Group, N.V."
            	  },
            	  {
            	    "Symbol": "ISF",
            	    "Name": "ING Group, N.V."
            	  },
            	  {
            	    "Symbol": "ISG",
            	    "Name": "ING Group, N.V."
            	  },
            	  {
            	    "Symbol": "ISP",
            	    "Name": "ING Group, N.V."
            	  },
            	  {
            	    "Symbol": "INTL",
            	    "Name": "INTL FCStone Inc."
            	  },
            	  {
            	    "Symbol": "INTLL",
            	    "Name": "INTL FCStone Inc."
            	  },
            	  {
            	    "Symbol": "IVR",
            	    "Name": "INVESCO MORTGAGE CAPITAL INC"
            	  },
            	  {
            	    "Symbol": "IVR^B",
            	    "Name": "INVESCO MORTGAGE CAPITAL INC"
            	  },
            	  {
            	    "Symbol": "IPGP",
            	    "Name": "IPG Photonics Corporation"
            	  },
            	  {
            	    "Symbol": "IRIX",
            	    "Name": "IRIDEX Corporation"
            	  },
            	  {
            	    "Symbol": "IRS",
            	    "Name": "IRSA Inversiones Y Representaciones S.A."
            	  },
            	  {
            	    "Symbol": "IRCP",
            	    "Name": "IRSA Propiedades Comerciales S.A."
            	  },
            	  {
            	    "Symbol": "ITC",
            	    "Name": "ITC Holdings Corp."
            	  },
            	  {
            	    "Symbol": "ITT",
            	    "Name": "ITT Corporation"
            	  },
            	  {
            	    "Symbol": "ESI",
            	    "Name": "ITT Educational Services, Inc."
            	  },
            	  {
            	    "Symbol": "ITUS",
            	    "Name": "ITUS Corporation"
            	  },
            	  {
            	    "Symbol": "IXYS",
            	    "Name": "IXYS Corporation"
            	  },
            	  {
            	    "Symbol": "IZEA",
            	    "Name": "IZEA Inc."
            	  },
            	  {
            	    "Symbol": "IAG",
            	    "Name": "Iamgold Corporation"
            	  },
            	  {
            	    "Symbol": "IKGH",
            	    "Name": "Iao Kun Group Holding Company Limited"
            	  },
            	  {
            	    "Symbol": "IEP",
            	    "Name": "Icahn Enterprises L.P."
            	  },
            	  {
            	    "Symbol": "ICON",
            	    "Name": "Iconix Brand Group, Inc."
            	  },
            	  {
            	    "Symbol": "IPWR",
            	    "Name": "Ideal Power Inc."
            	  },
            	  {
            	    "Symbol": "INVE",
            	    "Name": "Identiv, Inc."
            	  },
            	  {
            	    "Symbol": "IDRA",
            	    "Name": "Idera Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "IRG",
            	    "Name": "Ignite Restaurant Group, Inc."
            	  },
            	  {
            	    "Symbol": "RXDX",
            	    "Name": "Ignyta, Inc."
            	  },
            	  {
            	    "Symbol": "IKNX",
            	    "Name": "Ikonics Corporation"
            	  },
            	  {
            	    "Symbol": "ITW",
            	    "Name": "Illinois Tool Works Inc."
            	  },
            	  {
            	    "Symbol": "ILMN",
            	    "Name": "Illumina, Inc."
            	  },
            	  {
            	    "Symbol": "ISNS",
            	    "Name": "Image Sensing Systems, Inc."
            	  },
            	  {
            	    "Symbol": "IMN",
            	    "Name": "Imation Corporation"
            	  },
            	  {
            	    "Symbol": "IMAX",
            	    "Name": "Imax Corporation"
            	  },
            	  {
            	    "Symbol": "IMMR",
            	    "Name": "Immersion Corporation"
            	  },
            	  {
            	    "Symbol": "ICCC",
            	    "Name": "ImmuCell Corporation"
            	  },
            	  {
            	    "Symbol": "IMDZ",
            	    "Name": "Immune Design Corp."
            	  },
            	  {
            	    "Symbol": "IMNP",
            	    "Name": "Immune Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "IMUC",
            	    "Name": "ImmunoCellular Therapeutics, Ltd."
            	  },
            	  {
            	    "Symbol": "IMGN",
            	    "Name": "ImmunoGen, Inc."
            	  },
            	  {
            	    "Symbol": "IMMU",
            	    "Name": "Immunomedics, Inc."
            	  },
            	  {
            	    "Symbol": "IMH",
            	    "Name": "Impac Mortgage Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IPXL",
            	    "Name": "Impax Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "IMO",
            	    "Name": "Imperial Oil Limited"
            	  },
            	  {
            	    "Symbol": "IMPV",
            	    "Name": "Imperva, Inc."
            	  },
            	  {
            	    "Symbol": "IMMY",
            	    "Name": "Imprimis Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "IMPR",
            	    "Name": "Imprivata, Inc."
            	  },
            	  {
            	    "Symbol": "NVIV",
            	    "Name": "InVivo Therapeutics Holdings Corp."
            	  },
            	  {
            	    "Symbol": "IOT",
            	    "Name": "Income Opportunity Realty Investors, Inc."
            	  },
            	  {
            	    "Symbol": "INCY",
            	    "Name": "Incyte Corporation"
            	  },
            	  {
            	    "Symbol": "ICD",
            	    "Name": "Independence Contract Drilling, Inc."
            	  },
            	  {
            	    "Symbol": "IHC",
            	    "Name": "Independence Holding Company"
            	  },
            	  {
            	    "Symbol": "IRT",
            	    "Name": "Independence Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "INDB",
            	    "Name": "Independent Bank Corp."
            	  },
            	  {
            	    "Symbol": "IBCP",
            	    "Name": "Independent Bank Corporation"
            	  },
            	  {
            	    "Symbol": "IBTX",
            	    "Name": "Independent Bank Group, Inc"
            	  },
            	  {
            	    "Symbol": "IFN",
            	    "Name": "India Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "IGC",
            	    "Name": "India Globalization Capital Inc."
            	  },
            	  {
            	    "Symbol": "IDSA",
            	    "Name": "Industrial Services of America, Inc."
            	  },
            	  {
            	    "Symbol": "IBA",
            	    "Name": "Industrias Bachoco, S.A. de C.V."
            	  },
            	  {
            	    "Symbol": "INFN",
            	    "Name": "Infinera Corporation"
            	  },
            	  {
            	    "Symbol": "INFI",
            	    "Name": "Infinity Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "IPCC",
            	    "Name": "Infinity Property and Casualty Corporation"
            	  },
            	  {
            	    "Symbol": "IFON",
            	    "Name": "InfoSonics Corp"
            	  },
            	  {
            	    "Symbol": "BLOX",
            	    "Name": "Infoblox Inc."
            	  },
            	  {
            	    "Symbol": "III",
            	    "Name": "Information Services Group, Inc."
            	  },
            	  {
            	    "Symbol": "INFY",
            	    "Name": "Infosys Limited"
            	  },
            	  {
            	    "Symbol": "HIFR",
            	    "Name": "InfraREIT, Inc."
            	  },
            	  {
            	    "Symbol": "INFU",
            	    "Name": "InfuSystems Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IR",
            	    "Name": "Ingersoll-Rand plc (Ireland)"
            	  },
            	  {
            	    "Symbol": "IMKTA",
            	    "Name": "Ingles Markets, Incorporated"
            	  },
            	  {
            	    "Symbol": "IM",
            	    "Name": "Ingram Micro Inc."
            	  },
            	  {
            	    "Symbol": "INGR",
            	    "Name": "Ingredion Incorporated"
            	  },
            	  {
            	    "Symbol": "IRC",
            	    "Name": "Inland Real Estate Corporation"
            	  },
            	  {
            	    "Symbol": "IRC^A",
            	    "Name": "Inland Real Estate Corporation"
            	  },
            	  {
            	    "Symbol": "IRC^B",
            	    "Name": "Inland Real Estate Corporation"
            	  },
            	  {
            	    "Symbol": "IHT",
            	    "Name": "InnSuites Hospitality Trust"
            	  },
            	  {
            	    "Symbol": "INWK",
            	    "Name": "InnerWorkings, Inc."
            	  },
            	  {
            	    "Symbol": "INNL",
            	    "Name": "Innocoll Holdings"
            	  },
            	  {
            	    "Symbol": "INOD",
            	    "Name": "Innodata Inc."
            	  },
            	  {
            	    "Symbol": "IPHS",
            	    "Name": "Innophos Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IOSP",
            	    "Name": "Innospec Inc."
            	  },
            	  {
            	    "Symbol": "ISSC",
            	    "Name": "Innovative Solutions and Support, Inc."
            	  },
            	  {
            	    "Symbol": "INVA",
            	    "Name": "Innoviva, Inc."
            	  },
            	  {
            	    "Symbol": "INGN",
            	    "Name": "Inogen, Inc"
            	  },
            	  {
            	    "Symbol": "ITEK",
            	    "Name": "Inotek Pharmaceuticals Corporation"
            	  },
            	  {
            	    "Symbol": "INOV",
            	    "Name": "Inovalon Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "INO",
            	    "Name": "Inovio Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "IPHI",
            	    "Name": "Inphi Corporation"
            	  },
            	  {
            	    "Symbol": "NSIT",
            	    "Name": "Insight Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "ISIG",
            	    "Name": "Insignia Systems, Inc."
            	  },
            	  {
            	    "Symbol": "INSM",
            	    "Name": "Insmed, Inc."
            	  },
            	  {
            	    "Symbol": "NSP",
            	    "Name": "Insperity, Inc."
            	  },
            	  {
            	    "Symbol": "NSPR",
            	    "Name": "InspireMD, Inc."
            	  },
            	  {
            	    "Symbol": "IBP",
            	    "Name": "Installed Building Products, Inc."
            	  },
            	  {
            	    "Symbol": "IIIN",
            	    "Name": "Insteel Industries, Inc."
            	  },
            	  {
            	    "Symbol": "IFMI",
            	    "Name": "Institutional Financial Markets, Inc."
            	  },
            	  {
            	    "Symbol": "INST",
            	    "Name": "Instructure, Inc."
            	  },
            	  {
            	    "Symbol": "PODD",
            	    "Name": "Insulet Corporation"
            	  },
            	  {
            	    "Symbol": "INSY",
            	    "Name": "Insys Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "NTEC",
            	    "Name": "Intec Pharma Ltd."
            	  },
            	  {
            	    "Symbol": "IART",
            	    "Name": "Integra LifeSciences Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "IDTI",
            	    "Name": "Integrated Device Technology, Inc."
            	  },
            	  {
            	    "Symbol": "IESC",
            	    "Name": "Integrated Electrical Services, Inc."
            	  },
            	  {
            	    "Symbol": "INTC",
            	    "Name": "Intel Corporation"
            	  },
            	  {
            	    "Symbol": "IQNT",
            	    "Name": "Inteliquent, Inc."
            	  },
            	  {
            	    "Symbol": "IDN",
            	    "Name": "Intellicheck Mobilisa, Inc."
            	  },
            	  {
            	    "Symbol": "INS",
            	    "Name": "Intelligent Systems Corporation"
            	  },
            	  {
            	    "Symbol": "IPCI",
            	    "Name": "Intellipharmaceutics International Inc."
            	  },
            	  {
            	    "Symbol": "I",
            	    "Name": "Intelsat S.A."
            	  },
            	  {
            	    "Symbol": "I^A",
            	    "Name": "Intelsat S.A."
            	  },
            	  {
            	    "Symbol": "IPAR",
            	    "Name": "Inter Parfums, Inc."
            	  },
            	  {
            	    "Symbol": "ICLD",
            	    "Name": "InterCloud Systems, Inc"
            	  },
            	  {
            	    "Symbol": "ICLDW",
            	    "Name": "InterCloud Systems, Inc"
            	  },
            	  {
            	    "Symbol": "IDCC",
            	    "Name": "InterDigital, Inc."
            	  },
            	  {
            	    "Symbol": "IOC",
            	    "Name": "InterOil Corporation"
            	  },
            	  {
            	    "Symbol": "INXN",
            	    "Name": "InterXion Holding N.V."
            	  },
            	  {
            	    "Symbol": "IBKR",
            	    "Name": "Interactive Brokers Group, Inc."
            	  },
            	  {
            	    "Symbol": "ININ",
            	    "Name": "Interactive Intelligence Group, Inc."
            	  },
            	  {
            	    "Symbol": "ICPT",
            	    "Name": "Intercept Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ICE",
            	    "Name": "Intercontinental Exchange Inc."
            	  },
            	  {
            	    "Symbol": "IHG",
            	    "Name": "Intercontinental Hotels Group"
            	  },
            	  {
            	    "Symbol": "TILE",
            	    "Name": "Interface, Inc."
            	  },
            	  {
            	    "Symbol": "IMI",
            	    "Name": "Intermolecular, Inc."
            	  },
            	  {
            	    "Symbol": "INAP",
            	    "Name": "Internap Corporation"
            	  },
            	  {
            	    "Symbol": "IFF",
            	    "Name": "Internationa Flavors & Fragrances, Inc."
            	  },
            	  {
            	    "Symbol": "IBOC",
            	    "Name": "International Bancshares Corporation"
            	  },
            	  {
            	    "Symbol": "IBM",
            	    "Name": "International Business Machines Corporation"
            	  },
            	  {
            	    "Symbol": "IGT",
            	    "Name": "International Game Technology"
            	  },
            	  {
            	    "Symbol": "IP",
            	    "Name": "International Paper Company"
            	  },
            	  {
            	    "Symbol": "ISCA",
            	    "Name": "International Speedway Corporation"
            	  },
            	  {
            	    "Symbol": "THM",
            	    "Name": "International Tower Hill Mines Ltd"
            	  },
            	  {
            	    "Symbol": "IGLD",
            	    "Name": "Internet Gold Golden Lines Ltd."
            	  },
            	  {
            	    "Symbol": "IIJI",
            	    "Name": "Internet Initiative Japan, Inc."
            	  },
            	  {
            	    "Symbol": "IDXG",
            	    "Name": "Interpace Diagnostics Group, Inc."
            	  },
            	  {
            	    "Symbol": "IPG",
            	    "Name": "Interpublic Group of Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "XENT",
            	    "Name": "Intersect ENT, Inc."
            	  },
            	  {
            	    "Symbol": "INTX",
            	    "Name": "Intersections, Inc."
            	  },
            	  {
            	    "Symbol": "ISIL",
            	    "Name": "Intersil Corporation"
            	  },
            	  {
            	    "Symbol": "IPL^D",
            	    "Name": "Interstate Power and Light Company"
            	  },
            	  {
            	    "Symbol": "IILG",
            	    "Name": "Interval Leisure Group, Inc."
            	  },
            	  {
            	    "Symbol": "IVAC",
            	    "Name": "Intevac, Inc."
            	  },
            	  {
            	    "Symbol": "ITCI",
            	    "Name": "Intra-Cellular Therapies Inc."
            	  },
            	  {
            	    "Symbol": "IL",
            	    "Name": "IntraLinks Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SNOW",
            	    "Name": "Intrawest Resorts Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "IPI",
            	    "Name": "Intrepid Potash, Inc"
            	  },
            	  {
            	    "Symbol": "XON",
            	    "Name": "Intrexon Corporation"
            	  },
            	  {
            	    "Symbol": "IIN",
            	    "Name": "IntriCon Corporation"
            	  },
            	  {
            	    "Symbol": "INTU",
            	    "Name": "Intuit Inc."
            	  },
            	  {
            	    "Symbol": "ISRG",
            	    "Name": "Intuitive Surgical, Inc."
            	  },
            	  {
            	    "Symbol": "INUV",
            	    "Name": "Inuvo, Inc"
            	  },
            	  {
            	    "Symbol": "IVC",
            	    "Name": "Invacare Corporation"
            	  },
            	  {
            	    "Symbol": "INVN",
            	    "Name": "InvenSense, Inc."
            	  },
            	  {
            	    "Symbol": "INVT",
            	    "Name": "Inventergy Global, Inc."
            	  },
            	  {
            	    "Symbol": "SNAK",
            	    "Name": "Inventure Foods, Inc."
            	  },
            	  {
            	    "Symbol": "VKI",
            	    "Name": "Invesco Advantage Municipal Income Trust II"
            	  },
            	  {
            	    "Symbol": "VBF",
            	    "Name": "Invesco Bond Fund"
            	  },
            	  {
            	    "Symbol": "VCV",
            	    "Name": "Invesco California Value Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "VTA",
            	    "Name": "Invesco Credit Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "VLT",
            	    "Name": "Invesco High Income Trust II"
            	  },
            	  {
            	    "Symbol": "IVR^A",
            	    "Name": "Invesco Mortgage Capital Inc."
            	  },
            	  {
            	    "Symbol": "OIA",
            	    "Name": "Invesco Municipal Income Opportunities Trust"
            	  },
            	  {
            	    "Symbol": "VMO",
            	    "Name": "Invesco Municipal Opportunity Trust"
            	  },
            	  {
            	    "Symbol": "VKQ",
            	    "Name": "Invesco Municipal Trust"
            	  },
            	  {
            	    "Symbol": "VPV",
            	    "Name": "Invesco Pennsylvania Value Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "IVZ",
            	    "Name": "Invesco Plc"
            	  },
            	  {
            	    "Symbol": "IQI",
            	    "Name": "Invesco Quality Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "VVR",
            	    "Name": "Invesco Senior Income Trust"
            	  },
            	  {
            	    "Symbol": "VTN",
            	    "Name": "Invesco Trust  for Investment Grade New York Municipal"
            	  },
            	  {
            	    "Symbol": "VGM",
            	    "Name": "Invesco Trust for Investment Grade Municipals"
            	  },
            	  {
            	    "Symbol": "IIM",
            	    "Name": "Invesco Value Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "ISTR",
            	    "Name": "Investar Holding Corporation"
            	  },
            	  {
            	    "Symbol": "ITG",
            	    "Name": "Investment Technology Group, Inc."
            	  },
            	  {
            	    "Symbol": "ISBC",
            	    "Name": "Investors Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "IRET",
            	    "Name": "Investors Real Estate Trust"
            	  },
            	  {
            	    "Symbol": "IRET^",
            	    "Name": "Investors Real Estate Trust"
            	  },
            	  {
            	    "Symbol": "IRET^B",
            	    "Name": "Investors Real Estate Trust"
            	  },
            	  {
            	    "Symbol": "ITIC",
            	    "Name": "Investors Title Company"
            	  },
            	  {
            	    "Symbol": "NVTA",
            	    "Name": "Invitae Corporation"
            	  },
            	  {
            	    "Symbol": "IVTY",
            	    "Name": "Invuity, Inc."
            	  },
            	  {
            	    "Symbol": "IO",
            	    "Name": "Ion Geophysical Corporation"
            	  },
            	  {
            	    "Symbol": "IONS",
            	    "Name": "Ionis Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "IRDM",
            	    "Name": "Iridium Communications Inc"
            	  },
            	  {
            	    "Symbol": "IRDMB",
            	    "Name": "Iridium Communications Inc"
            	  },
            	  {
            	    "Symbol": "IRM",
            	    "Name": "Iron Mountain Incorporated"
            	  },
            	  {
            	    "Symbol": "IRWD",
            	    "Name": "Ironwood Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ISLE",
            	    "Name": "Isle of Capri Casinos, Inc."
            	  },
            	  {
            	    "Symbol": "ISR",
            	    "Name": "IsoRay, Inc."
            	  },
            	  {
            	    "Symbol": "ICL",
            	    "Name": "Israel Chemicals Shs"
            	  },
            	  {
            	    "Symbol": "ISRL",
            	    "Name": "Isramco, Inc."
            	  },
            	  {
            	    "Symbol": "ISDR",
            	    "Name": "Issuer Direct Corporation"
            	  },
            	  {
            	    "Symbol": "ITUB",
            	    "Name": "Itau Unibanco Banco Holding SA"
            	  },
            	  {
            	    "Symbol": "ITI",
            	    "Name": "Iteris, Inc."
            	  },
            	  {
            	    "Symbol": "ITRI",
            	    "Name": "Itron, Inc."
            	  },
            	  {
            	    "Symbol": "ITRN",
            	    "Name": "Ituran Location and Control Ltd."
            	  },
            	  {
            	    "Symbol": "IVH",
            	    "Name": "Ivy High Income Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "XXIA",
            	    "Name": "Ixia"
            	  },
            	  {
            	    "Symbol": "JJSF",
            	    "Name": "J & J Snack Foods Corp."
            	  },
            	  {
            	    "Symbol": "JPM",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM.WS",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^A",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^B",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^D",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^E",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^F",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^G",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JPM^H",
            	    "Name": "J P Morgan Chase & Co"
            	  },
            	  {
            	    "Symbol": "JAX",
            	    "Name": "J. Alexander&#39;s Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "MAYS",
            	    "Name": "J. W. Mays, Inc."
            	  },
            	  {
            	    "Symbol": "JBHT",
            	    "Name": "J.B. Hunt Transport Services, Inc."
            	  },
            	  {
            	    "Symbol": "JCP",
            	    "Name": "J.C. Penney Company, Inc. Holding Company"
            	  },
            	  {
            	    "Symbol": "JGW",
            	    "Name": "J.G. Wentworth Company (The)"
            	  },
            	  {
            	    "Symbol": "SJM",
            	    "Name": "J.M. Smucker Company (The)"
            	  },
            	  {
            	    "Symbol": "JASO",
            	    "Name": "JA Solar Holdings, Co., Ltd."
            	  },
            	  {
            	    "Symbol": "JAKK",
            	    "Name": "JAKKS Pacific, Inc."
            	  },
            	  {
            	    "Symbol": "JD",
            	    "Name": "JD.com, Inc."
            	  },
            	  {
            	    "Symbol": "WYIG",
            	    "Name": "JM Global Holding Company"
            	  },
            	  {
            	    "Symbol": "WYIGU",
            	    "Name": "JM Global Holding Company"
            	  },
            	  {
            	    "Symbol": "WYIGW",
            	    "Name": "JM Global Holding Company"
            	  },
            	  {
            	    "Symbol": "JMP",
            	    "Name": "JMP Group LLC"
            	  },
            	  {
            	    "Symbol": "JMPB",
            	    "Name": "JMP Group LLC"
            	  },
            	  {
            	    "Symbol": "JMPC",
            	    "Name": "JMP Group LLC"
            	  },
            	  {
            	    "Symbol": "JPEP",
            	    "Name": "JP Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "JFC",
            	    "Name": "JPMorgan China Region Fund, Inc."
            	  },
            	  {
            	    "Symbol": "JRJR",
            	    "Name": "JRjr33, Inc."
            	  },
            	  {
            	    "Symbol": "JBL",
            	    "Name": "Jabil Circuit, Inc."
            	  },
            	  {
            	    "Symbol": "JKHY",
            	    "Name": "Jack Henry & Associates, Inc."
            	  },
            	  {
            	    "Symbol": "JACK",
            	    "Name": "Jack In The Box Inc."
            	  },
            	  {
            	    "Symbol": "JXSB",
            	    "Name": "Jacksonville Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "JEC",
            	    "Name": "Jacobs Engineering Group Inc."
            	  },
            	  {
            	    "Symbol": "JAGX",
            	    "Name": "Jaguar Animal Health, Inc."
            	  },
            	  {
            	    "Symbol": "JMBA",
            	    "Name": "Jamba, Inc."
            	  },
            	  {
            	    "Symbol": "JHX",
            	    "Name": "James Hardie Industries plc."
            	  },
            	  {
            	    "Symbol": "JRVR",
            	    "Name": "James River Group Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "JNS",
            	    "Name": "Janus Capital Group, Inc"
            	  },
            	  {
            	    "Symbol": "JSML",
            	    "Name": "Janus Small Cap Growth Alpha ETF"
            	  },
            	  {
            	    "Symbol": "JSMD",
            	    "Name": "Janus Small\/Mid Cap Growth Alpha ETF"
            	  },
            	  {
            	    "Symbol": "JOF",
            	    "Name": "Japan Smaller Capitalization Fund Inc"
            	  },
            	  {
            	    "Symbol": "JAH",
            	    "Name": "Jarden Corporation"
            	  },
            	  {
            	    "Symbol": "JASN",
            	    "Name": "Jason Industries, Inc."
            	  },
            	  {
            	    "Symbol": "JASNW",
            	    "Name": "Jason Industries, Inc."
            	  },
            	  {
            	    "Symbol": "JMI",
            	    "Name": "Javelin Mortgage Investment Corp."
            	  },
            	  {
            	    "Symbol": "JAZZ",
            	    "Name": "Jazz Pharmaceuticals plc"
            	  },
            	  {
            	    "Symbol": "JSYNU",
            	    "Name": "Jensyn Acquistion Corp."
            	  },
            	  {
            	    "Symbol": "JCAP",
            	    "Name": "Jernigan Capital, Inc."
            	  },
            	  {
            	    "Symbol": "JBLU",
            	    "Name": "JetBlue Airways Corporation"
            	  },
            	  {
            	    "Symbol": "JTPY",
            	    "Name": "JetPay Corporation"
            	  },
            	  {
            	    "Symbol": "JCTCF",
            	    "Name": "Jewett-Cameron Trading Company"
            	  },
            	  {
            	    "Symbol": "DATE",
            	    "Name": "Jiayuan.com International Ltd."
            	  },
            	  {
            	    "Symbol": "JKS",
            	    "Name": "JinkoSolar Holding Company Limited"
            	  },
            	  {
            	    "Symbol": "JST",
            	    "Name": "Jinpan International Limited"
            	  },
            	  {
            	    "Symbol": "JIVE",
            	    "Name": "Jive Software, Inc."
            	  },
            	  {
            	    "Symbol": "JBSS",
            	    "Name": "John B. Sanfilippo & Son, Inc."
            	  },
            	  {
            	    "Symbol": "JBT",
            	    "Name": "John Bean Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "BTO",
            	    "Name": "John Hancock Financial Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "HEQ",
            	    "Name": "John Hancock Hedged Equity & Income Fund"
            	  },
            	  {
            	    "Symbol": "JHS",
            	    "Name": "John Hancock Income Securities Trust"
            	  },
            	  {
            	    "Symbol": "JHI",
            	    "Name": "John Hancock Investors Trust"
            	  },
            	  {
            	    "Symbol": "HPF",
            	    "Name": "John Hancock Pfd Income Fund II"
            	  },
            	  {
            	    "Symbol": "HPI",
            	    "Name": "John Hancock Preferred Income Fund"
            	  },
            	  {
            	    "Symbol": "HPS",
            	    "Name": "John Hancock Preferred Income Fund III"
            	  },
            	  {
            	    "Symbol": "PDT",
            	    "Name": "John Hancock Premium Dividend Fund"
            	  },
            	  {
            	    "Symbol": "HTD",
            	    "Name": "John Hancock Tax Advantaged Dividend Income Fund"
            	  },
            	  {
            	    "Symbol": "HTY",
            	    "Name": "John Hancock Tax-Advantaged Global Shareholder Yield Fund"
            	  },
            	  {
            	    "Symbol": "JW.A",
            	    "Name": "John Wiley & Sons, Inc."
            	  },
            	  {
            	    "Symbol": "JW.B",
            	    "Name": "John Wiley & Sons, Inc."
            	  },
            	  {
            	    "Symbol": "JNJ",
            	    "Name": "Johnson & Johnson"
            	  },
            	  {
            	    "Symbol": "JCI",
            	    "Name": "Johnson Controls, Inc."
            	  },
            	  {
            	    "Symbol": "JOUT",
            	    "Name": "Johnson Outdoors Inc."
            	  },
            	  {
            	    "Symbol": "JONE",
            	    "Name": "Jones Energy, Inc."
            	  },
            	  {
            	    "Symbol": "JLL",
            	    "Name": "Jones Lang LaSalle Incorporated"
            	  },
            	  {
            	    "Symbol": "JMG",
            	    "Name": "Journal Media Group, Inc."
            	  },
            	  {
            	    "Symbol": "JOY",
            	    "Name": "Joy Global Inc."
            	  },
            	  {
            	    "Symbol": "JMEI",
            	    "Name": "Jumei International Holding Limited"
            	  },
            	  {
            	    "Symbol": "JNPR",
            	    "Name": "Juniper Networks, Inc."
            	  },
            	  {
            	    "Symbol": "JNP",
            	    "Name": "Juniper Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "JUNO",
            	    "Name": "Juno Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "JP",
            	    "Name": "Jupai Holdings Limited"
            	  },
            	  {
            	    "Symbol": "JE",
            	    "Name": "Just Energy Group, Inc."
            	  },
            	  {
            	    "Symbol": "LRN",
            	    "Name": "K12 Inc"
            	  },
            	  {
            	    "Symbol": "KTWO",
            	    "Name": "K2M Group Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "KAR",
            	    "Name": "KAR Auction Services, Inc"
            	  },
            	  {
            	    "Symbol": "KB",
            	    "Name": "KB Financial Group Inc"
            	  },
            	  {
            	    "Symbol": "KBH",
            	    "Name": "KB Home"
            	  },
            	  {
            	    "Symbol": "KBR",
            	    "Name": "KBR, Inc."
            	  },
            	  {
            	    "Symbol": "KBSF",
            	    "Name": "KBS Fashion Group Limited"
            	  },
            	  {
            	    "Symbol": "KAP",
            	    "Name": "KCAP Financial, Inc."
            	  },
            	  {
            	    "Symbol": "KCAP",
            	    "Name": "KCAP Financial, Inc."
            	  },
            	  {
            	    "Symbol": "KCG",
            	    "Name": "KCG Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "KKR",
            	    "Name": "KKR & Co. L.P."
            	  },
            	  {
            	    "Symbol": "KFH",
            	    "Name": "KKR Financial Holdings LLC"
            	  },
            	  {
            	    "Symbol": "KFI",
            	    "Name": "KKR Financial Holdings LLC"
            	  },
            	  {
            	    "Symbol": "KFN^",
            	    "Name": "KKR Financial Holdings LLC"
            	  },
            	  {
            	    "Symbol": "KIO",
            	    "Name": "KKR Income Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "KLAC",
            	    "Name": "KLA-Tencor Corporation"
            	  },
            	  {
            	    "Symbol": "KLREU",
            	    "Name": "KLR Energy Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "KLXI",
            	    "Name": "KLX Inc."
            	  },
            	  {
            	    "Symbol": "KMG",
            	    "Name": "KMG Chemicals, Inc."
            	  },
            	  {
            	    "Symbol": "KNOP",
            	    "Name": "KNOT Offshore Partners LP"
            	  },
            	  {
            	    "Symbol": "KT",
            	    "Name": "KT Corporation"
            	  },
            	  {
            	    "Symbol": "KVHI",
            	    "Name": "KVH Industries, Inc."
            	  },
            	  {
            	    "Symbol": "KAI",
            	    "Name": "Kadant Inc"
            	  },
            	  {
            	    "Symbol": "KALU",
            	    "Name": "Kaiser Aluminum Corporation"
            	  },
            	  {
            	    "Symbol": "KMDA",
            	    "Name": "Kamada Ltd."
            	  },
            	  {
            	    "Symbol": "KAMN",
            	    "Name": "Kaman Corporation"
            	  },
            	  {
            	    "Symbol": "KNDI",
            	    "Name": "Kandi Technologies Group, Inc."
            	  },
            	  {
            	    "Symbol": "KSU",
            	    "Name": "Kansas City Southern"
            	  },
            	  {
            	    "Symbol": "KSU^",
            	    "Name": "Kansas City Southern"
            	  },
            	  {
            	    "Symbol": "KS",
            	    "Name": "KapStone Paper and Packaging Corporation"
            	  },
            	  {
            	    "Symbol": "KPTI",
            	    "Name": "Karyopharm Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "KATE",
            	    "Name": "Kate Spade & Company"
            	  },
            	  {
            	    "Symbol": "KED",
            	    "Name": "Kayne Anderson Energy Development Company"
            	  },
            	  {
            	    "Symbol": "KYE",
            	    "Name": "Kayne Anderson Energy Total Return Fund, Inc."
            	  },
            	  {
            	    "Symbol": "KYN",
            	    "Name": "Kayne Anderson MLP Investment Company"
            	  },
            	  {
            	    "Symbol": "KYN^F",
            	    "Name": "Kayne Anderson MLP Investment Company"
            	  },
            	  {
            	    "Symbol": "KYN^G",
            	    "Name": "Kayne Anderson MLP Investment Company"
            	  },
            	  {
            	    "Symbol": "KMF",
            	    "Name": "Kayne Anderson Midstream Energy Fund, Inc"
            	  },
            	  {
            	    "Symbol": "KRNY",
            	    "Name": "Kearny Financial"
            	  },
            	  {
            	    "Symbol": "K",
            	    "Name": "Kellogg Company"
            	  },
            	  {
            	    "Symbol": "KELYA",
            	    "Name": "Kelly Services, Inc."
            	  },
            	  {
            	    "Symbol": "KELYB",
            	    "Name": "Kelly Services, Inc."
            	  },
            	  {
            	    "Symbol": "KIQ",
            	    "Name": "Kelso Technologies Inc"
            	  },
            	  {
            	    "Symbol": "KMPH",
            	    "Name": "KemPharm, Inc."
            	  },
            	  {
            	    "Symbol": "KEM",
            	    "Name": "Kemet Corporation"
            	  },
            	  {
            	    "Symbol": "KMPA",
            	    "Name": "Kemper Corporation"
            	  },
            	  {
            	    "Symbol": "KMPR",
            	    "Name": "Kemper Corporation"
            	  },
            	  {
            	    "Symbol": "KMT",
            	    "Name": "Kennametal Inc."
            	  },
            	  {
            	    "Symbol": "KW",
            	    "Name": "Kennedy-Wilson Holdings Inc."
            	  },
            	  {
            	    "Symbol": "KWN",
            	    "Name": "Kennedy-Wilson Holdings Inc."
            	  },
            	  {
            	    "Symbol": "KEN",
            	    "Name": "Kenon Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "KFFB",
            	    "Name": "Kentucky First Federal Bancorp"
            	  },
            	  {
            	    "Symbol": "KERX",
            	    "Name": "Keryx Biopharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "KEQU",
            	    "Name": "Kewaunee Scientific Corporation"
            	  },
            	  {
            	    "Symbol": "KEG",
            	    "Name": "Key Energy Services, Inc."
            	  },
            	  {
            	    "Symbol": "KTEC",
            	    "Name": "Key Technology, Inc."
            	  },
            	  {
            	    "Symbol": "KTCC",
            	    "Name": "Key Tronic Corporation"
            	  },
            	  {
            	    "Symbol": "KEY",
            	    "Name": "KeyCorp"
            	  },
            	  {
            	    "Symbol": "KEY^G",
            	    "Name": "KeyCorp"
            	  },
            	  {
            	    "Symbol": "KEYS",
            	    "Name": "Keysight Technologies Inc."
            	  },
            	  {
            	    "Symbol": "KFRC",
            	    "Name": "Kforce, Inc."
            	  },
            	  {
            	    "Symbol": "KRC",
            	    "Name": "Kilroy Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KRC^G",
            	    "Name": "Kilroy Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KRC^H",
            	    "Name": "Kilroy Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KE",
            	    "Name": "Kimball Electronics, Inc."
            	  },
            	  {
            	    "Symbol": "KBAL",
            	    "Name": "Kimball International, Inc."
            	  },
            	  {
            	    "Symbol": "KMB",
            	    "Name": "Kimberly-Clark Corporation"
            	  },
            	  {
            	    "Symbol": "KIM",
            	    "Name": "Kimco Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KIM^I",
            	    "Name": "Kimco Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KIM^J",
            	    "Name": "Kimco Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KIM^K",
            	    "Name": "Kimco Realty Corporation"
            	  },
            	  {
            	    "Symbol": "KMI",
            	    "Name": "Kinder Morgan, Inc."
            	  },
            	  {
            	    "Symbol": "KMI.WS",
            	    "Name": "Kinder Morgan, Inc."
            	  },
            	  {
            	    "Symbol": "KMI^A",
            	    "Name": "Kinder Morgan, Inc."
            	  },
            	  {
            	    "Symbol": "KIN",
            	    "Name": "Kindred Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "KND",
            	    "Name": "Kindred Healthcare, Inc."
            	  },
            	  {
            	    "Symbol": "KGJI",
            	    "Name": "Kingold Jewelry Inc."
            	  },
            	  {
            	    "Symbol": "KINS",
            	    "Name": "Kingstone Companies, Inc"
            	  },
            	  {
            	    "Symbol": "KFS",
            	    "Name": "Kingsway Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "KONE",
            	    "Name": "Kingtone Wirelessinfo Solution Holding Ltd"
            	  },
            	  {
            	    "Symbol": "KGC",
            	    "Name": "Kinross Gold Corporation"
            	  },
            	  {
            	    "Symbol": "KEX",
            	    "Name": "Kirby Corporation"
            	  },
            	  {
            	    "Symbol": "KIRK",
            	    "Name": "Kirkland&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "KITE",
            	    "Name": "Kite Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "KRG",
            	    "Name": "Kite Realty Group Trust"
            	  },
            	  {
            	    "Symbol": "KTOV",
            	    "Name": "Kitov Pharamceuticals Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "KTOVW",
            	    "Name": "Kitov Pharamceuticals Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "KLDX",
            	    "Name": "Klondex Mines Ltd."
            	  },
            	  {
            	    "Symbol": "KNX",
            	    "Name": "Knight Transportation, Inc."
            	  },
            	  {
            	    "Symbol": "KNL",
            	    "Name": "Knoll, Inc."
            	  },
            	  {
            	    "Symbol": "KN",
            	    "Name": "Knowles Corporation"
            	  },
            	  {
            	    "Symbol": "KSS",
            	    "Name": "Kohl&#39;s Corporation"
            	  },
            	  {
            	    "Symbol": "KONA",
            	    "Name": "Kona Grill, Inc."
            	  },
            	  {
            	    "Symbol": "KZ",
            	    "Name": "KongZhong Corporation"
            	  },
            	  {
            	    "Symbol": "PHG",
            	    "Name": "Koninklijke Philips N.V."
            	  },
            	  {
            	    "Symbol": "KOPN",
            	    "Name": "Kopin Corporation"
            	  },
            	  {
            	    "Symbol": "KOP",
            	    "Name": "Koppers Holdings Inc."
            	  },
            	  {
            	    "Symbol": "KEP",
            	    "Name": "Korea Electric Power Corporation"
            	  },
            	  {
            	    "Symbol": "KEF",
            	    "Name": "Korea Equity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "KF",
            	    "Name": "Korea Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "KFY",
            	    "Name": "Korn\/Ferry International"
            	  },
            	  {
            	    "Symbol": "KRNT",
            	    "Name": "Kornit Digital Ltd."
            	  },
            	  {
            	    "Symbol": "KOS",
            	    "Name": "Kosmos Energy Ltd."
            	  },
            	  {
            	    "Symbol": "KOSS",
            	    "Name": "Koss Corporation"
            	  },
            	  {
            	    "Symbol": "KWEB",
            	    "Name": "KraneShares CSI China Internet ETF"
            	  },
            	  {
            	    "Symbol": "KRA",
            	    "Name": "Kraton Performance Polymers, Inc"
            	  },
            	  {
            	    "Symbol": "KTOS",
            	    "Name": "Kratos Defense & Security Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "KKD",
            	    "Name": "Krispy Kreme Doughnuts, Inc."
            	  },
            	  {
            	    "Symbol": "KR",
            	    "Name": "Kroger Company (The)"
            	  },
            	  {
            	    "Symbol": "KRO",
            	    "Name": "Kronos Worldwide Inc"
            	  },
            	  {
            	    "Symbol": "KUTV",
            	    "Name": "Ku6 Media Co., Ltd."
            	  },
            	  {
            	    "Symbol": "KLIC",
            	    "Name": "Kulicke and Soffa Industries, Inc."
            	  },
            	  {
            	    "Symbol": "KURA",
            	    "Name": "Kura Oncology, Inc."
            	  },
            	  {
            	    "Symbol": "KYO",
            	    "Name": "Kyocera Corporation"
            	  },
            	  {
            	    "Symbol": "LB",
            	    "Name": "L Brands, Inc."
            	  },
            	  {
            	    "Symbol": "LLL",
            	    "Name": "L-3 Communications Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "FSTR",
            	    "Name": "L.B. Foster Company"
            	  },
            	  {
            	    "Symbol": "SCX",
            	    "Name": "L.S. Starrett Company (The)"
            	  },
            	  {
            	    "Symbol": "LFL",
            	    "Name": "LATAM Airlines Group S.A."
            	  },
            	  {
            	    "Symbol": "LCNB",
            	    "Name": "LCNB Corporation"
            	  },
            	  {
            	    "Symbol": "LDRH",
            	    "Name": "LDR Holding Corporation"
            	  },
            	  {
            	    "Symbol": "LPL",
            	    "Name": "LG Display Co., Ltd."
            	  },
            	  {
            	    "Symbol": "LGIH",
            	    "Name": "LGI Homes, Inc."
            	  },
            	  {
            	    "Symbol": "LGL",
            	    "Name": "LGL Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "LHCG",
            	    "Name": "LHC Group"
            	  },
            	  {
            	    "Symbol": "LKQ",
            	    "Name": "LKQ Corporation"
            	  },
            	  {
            	    "Symbol": "LMFA",
            	    "Name": "LM Funding America, Inc."
            	  },
            	  {
            	    "Symbol": "LMFAW",
            	    "Name": "LM Funding America, Inc."
            	  },
            	  {
            	    "Symbol": "LMIA",
            	    "Name": "LMI Aerospace, Inc."
            	  },
            	  {
            	    "Symbol": "SCD",
            	    "Name": "LMP Capital and Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "TLI",
            	    "Name": "LMP Corporate Loan Fund Inc"
            	  },
            	  {
            	    "Symbol": "RIT",
            	    "Name": "LMP Real Estate Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "LPLA",
            	    "Name": "LPL Financial Holdings Inc."
            	  },
            	  {
            	    "Symbol": "LRAD",
            	    "Name": "LRAD Corporation"
            	  },
            	  {
            	    "Symbol": "LYTS",
            	    "Name": "LSI Industries Inc."
            	  },
            	  {
            	    "Symbol": "LTC",
            	    "Name": "LTC Properties, Inc."
            	  },
            	  {
            	    "Symbol": "LJPC",
            	    "Name": "La Jolla Pharmaceutical Company"
            	  },
            	  {
            	    "Symbol": "LQ",
            	    "Name": "La Quinta Holdings Inc."
            	  },
            	  {
            	    "Symbol": "LZB",
            	    "Name": "La-Z-Boy Incorporated"
            	  },
            	  {
            	    "Symbol": "LPSB",
            	    "Name": "LaPorte Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "LHO",
            	    "Name": "LaSalle Hotel Properties"
            	  },
            	  {
            	    "Symbol": "LHO^H",
            	    "Name": "LaSalle Hotel Properties"
            	  },
            	  {
            	    "Symbol": "LHO^I",
            	    "Name": "LaSalle Hotel Properties"
            	  },
            	  {
            	    "Symbol": "DRIO",
            	    "Name": "LabStyle Innovations Corp."
            	  },
            	  {
            	    "Symbol": "DRIOW",
            	    "Name": "LabStyle Innovations Corp."
            	  },
            	  {
            	    "Symbol": "LH",
            	    "Name": "Laboratory Corporation of America Holdings"
            	  },
            	  {
            	    "Symbol": "LG",
            	    "Name": "Laclede Group, Inc."
            	  },
            	  {
            	    "Symbol": "LADR",
            	    "Name": "Ladder Capital Corp"
            	  },
            	  {
            	    "Symbol": "LTS",
            	    "Name": "Ladenburg Thalmann Financial Services Inc"
            	  },
            	  {
            	    "Symbol": "LTS^A",
            	    "Name": "Ladenburg Thalmann Financial Services Inc"
            	  },
            	  {
            	    "Symbol": "LSBK",
            	    "Name": "Lake Shore Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "LSG",
            	    "Name": "Lake Shore Gold Corp"
            	  },
            	  {
            	    "Symbol": "LSBG",
            	    "Name": "Lake Sunapee Bank Group"
            	  },
            	  {
            	    "Symbol": "LBAI",
            	    "Name": "Lakeland Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "LKFN",
            	    "Name": "Lakeland Financial Corporation"
            	  },
            	  {
            	    "Symbol": "LAKE",
            	    "Name": "Lakeland Industries, Inc."
            	  },
            	  {
            	    "Symbol": "LRCX",
            	    "Name": "Lam Research Corporation"
            	  },
            	  {
            	    "Symbol": "LAMR",
            	    "Name": "Lamar Advertising Company"
            	  },
            	  {
            	    "Symbol": "LANC",
            	    "Name": "Lancaster Colony Corporation"
            	  },
            	  {
            	    "Symbol": "LDR",
            	    "Name": "Landauer, Inc."
            	  },
            	  {
            	    "Symbol": "LNDC",
            	    "Name": "Landec Corporation"
            	  },
            	  {
            	    "Symbol": "LARK",
            	    "Name": "Landmark Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "LMRK",
            	    "Name": "Landmark Infrastructure Partners LP"
            	  },
            	  {
            	    "Symbol": "LE",
            	    "Name": "Lands&#39; End, Inc."
            	  },
            	  {
            	    "Symbol": "LSTR",
            	    "Name": "Landstar System, Inc."
            	  },
            	  {
            	    "Symbol": "LCI",
            	    "Name": "Lannett Co Inc"
            	  },
            	  {
            	    "Symbol": "LNTH",
            	    "Name": "Lantheus Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "LTRX",
            	    "Name": "Lantronix, Inc."
            	  },
            	  {
            	    "Symbol": "LPI",
            	    "Name": "Laredo Petroleum, Inc."
            	  },
            	  {
            	    "Symbol": "LVS",
            	    "Name": "Las Vegas Sands Corp."
            	  },
            	  {
            	    "Symbol": "LAQ",
            	    "Name": "Latin America Equity Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "LDF",
            	    "Name": "Latin American Discovery Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "LSCC",
            	    "Name": "Lattice Semiconductor Corporation"
            	  },
            	  {
            	    "Symbol": "LAWS",
            	    "Name": "Lawson Products, Inc."
            	  },
            	  {
            	    "Symbol": "LAYN",
            	    "Name": "Layne Christensen Company"
            	  },
            	  {
            	    "Symbol": "LGI",
            	    "Name": "Lazard Global Total Return and Income Fund"
            	  },
            	  {
            	    "Symbol": "LAZ",
            	    "Name": "Lazard Ltd."
            	  },
            	  {
            	    "Symbol": "LOR",
            	    "Name": "Lazard World Dividend & Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "LMAT",
            	    "Name": "LeMaitre Vascular, Inc."
            	  },
            	  {
            	    "Symbol": "LBIX",
            	    "Name": "Leading Brands Inc"
            	  },
            	  {
            	    "Symbol": "LF",
            	    "Name": "Leapfrog Enterprises Inc"
            	  },
            	  {
            	    "Symbol": "LEA",
            	    "Name": "Lear Corporation"
            	  },
            	  {
            	    "Symbol": "LEE",
            	    "Name": "Lee Enterprises, Incorporated"
            	  },
            	  {
            	    "Symbol": "LGCY",
            	    "Name": "Legacy Reserves LP"
            	  },
            	  {
            	    "Symbol": "LGCYO",
            	    "Name": "Legacy Reserves LP"
            	  },
            	  {
            	    "Symbol": "LGCYP",
            	    "Name": "Legacy Reserves LP"
            	  },
            	  {
            	    "Symbol": "LTXB",
            	    "Name": "LegacyTexas Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "BWG",
            	    "Name": "Legg Mason BW Global Income Opportunities Fund Inc."
            	  },
            	  {
            	    "Symbol": "DDBI",
            	    "Name": "Legg Mason Developed EX-US Diversified Core ETF"
            	  },
            	  {
            	    "Symbol": "EDBI",
            	    "Name": "Legg Mason Emerging Markets Diversified Core ETF"
            	  },
            	  {
            	    "Symbol": "LVHD",
            	    "Name": "Legg Mason Low Volatility High Dividend ETF"
            	  },
            	  {
            	    "Symbol": "UDBI",
            	    "Name": "Legg Mason US Diversified Core ETF"
            	  },
            	  {
            	    "Symbol": "LM",
            	    "Name": "Legg Mason, Inc."
            	  },
            	  {
            	    "Symbol": "LEG",
            	    "Name": "Leggett & Platt, Incorporated"
            	  },
            	  {
            	    "Symbol": "CVB",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "JBK",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "KCC",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "KTH",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "KTN",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "KTP",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "XKE",
            	    "Name": "Lehman ABS Corporation"
            	  },
            	  {
            	    "Symbol": "LDOS",
            	    "Name": "Leidos Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "LEJU",
            	    "Name": "Leju Holdings Limited"
            	  },
            	  {
            	    "Symbol": "LC",
            	    "Name": "LendingClub Corporation"
            	  },
            	  {
            	    "Symbol": "TREE",
            	    "Name": "LendingTree, Inc."
            	  },
            	  {
            	    "Symbol": "LEN",
            	    "Name": "Lennar Corporation"
            	  },
            	  {
            	    "Symbol": "LEN.B",
            	    "Name": "Lennar Corporation"
            	  },
            	  {
            	    "Symbol": "LII",
            	    "Name": "Lennox International, Inc."
            	  },
            	  {
            	    "Symbol": "LUK",
            	    "Name": "Leucadia National Corporation"
            	  },
            	  {
            	    "Symbol": "LVLT",
            	    "Name": "Level 3 Communications, Inc."
            	  },
            	  {
            	    "Symbol": "LXRX",
            	    "Name": "Lexicon Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "LXP",
            	    "Name": "Lexington Realty Trust"
            	  },
            	  {
            	    "Symbol": "LXP^C",
            	    "Name": "Lexington Realty Trust"
            	  },
            	  {
            	    "Symbol": "LXK",
            	    "Name": "Lexmark International, Inc."
            	  },
            	  {
            	    "Symbol": "LBY",
            	    "Name": "Libbey, Inc."
            	  },
            	  {
            	    "Symbol": "USA",
            	    "Name": "Liberty All-Star Equity Fund"
            	  },
            	  {
            	    "Symbol": "ASG",
            	    "Name": "Liberty All-Star Growth Fund, Inc."
            	  },
            	  {
            	    "Symbol": "LBRDA",
            	    "Name": "Liberty Broadband Corporation"
            	  },
            	  {
            	    "Symbol": "LBRDK",
            	    "Name": "Liberty Broadband Corporation"
            	  },
            	  {
            	    "Symbol": "LBTYA",
            	    "Name": "Liberty Global plc"
            	  },
            	  {
            	    "Symbol": "LBTYB",
            	    "Name": "Liberty Global plc"
            	  },
            	  {
            	    "Symbol": "LBTYK",
            	    "Name": "Liberty Global plc"
            	  },
            	  {
            	    "Symbol": "LILA",
            	    "Name": "Liberty Global plc"
            	  },
            	  {
            	    "Symbol": "LILAK",
            	    "Name": "Liberty Global plc"
            	  },
            	  {
            	    "Symbol": "LVNTA",
            	    "Name": "Liberty Interactive Corporation"
            	  },
            	  {
            	    "Symbol": "LVNTB",
            	    "Name": "Liberty Interactive Corporation"
            	  },
            	  {
            	    "Symbol": "QVCA",
            	    "Name": "Liberty Interactive Corporation"
            	  },
            	  {
            	    "Symbol": "QVCB",
            	    "Name": "Liberty Interactive Corporation"
            	  },
            	  {
            	    "Symbol": "LMCA",
            	    "Name": "Liberty Media Corporation"
            	  },
            	  {
            	    "Symbol": "LMCB",
            	    "Name": "Liberty Media Corporation"
            	  },
            	  {
            	    "Symbol": "LMCK",
            	    "Name": "Liberty Media Corporation"
            	  },
            	  {
            	    "Symbol": "LPT",
            	    "Name": "Liberty Property Trust"
            	  },
            	  {
            	    "Symbol": "TAX",
            	    "Name": "Liberty Tax, Inc."
            	  },
            	  {
            	    "Symbol": "LTRPA",
            	    "Name": "Liberty TripAdvisor Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "LTRPB",
            	    "Name": "Liberty TripAdvisor Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "LOCK",
            	    "Name": "LifeLock, Inc."
            	  },
            	  {
            	    "Symbol": "LPNT",
            	    "Name": "LifePoint Health, Inc."
            	  },
            	  {
            	    "Symbol": "LCUT",
            	    "Name": "Lifetime Brands, Inc."
            	  },
            	  {
            	    "Symbol": "LFVN",
            	    "Name": "Lifevantage Corporation"
            	  },
            	  {
            	    "Symbol": "LWAY",
            	    "Name": "Lifeway Foods, Inc."
            	  },
            	  {
            	    "Symbol": "LGND",
            	    "Name": "Ligand Pharmaceuticals Incorporated"
            	  },
            	  {
            	    "Symbol": "LITB",
            	    "Name": "LightInTheBox Holding Co., Ltd."
            	  },
            	  {
            	    "Symbol": "LPTH",
            	    "Name": "LightPath Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "LTBR",
            	    "Name": "Lightbridge Corporation"
            	  },
            	  {
            	    "Symbol": "LLEX",
            	    "Name": "Lilis Energy, Inc."
            	  },
            	  {
            	    "Symbol": "LIME",
            	    "Name": "Lime Energy Co."
            	  },
            	  {
            	    "Symbol": "LLNW",
            	    "Name": "Limelight Networks, Inc."
            	  },
            	  {
            	    "Symbol": "LMNR",
            	    "Name": "Limoneira Co"
            	  },
            	  {
            	    "Symbol": "LINC",
            	    "Name": "Lincoln Educational Services Corporation"
            	  },
            	  {
            	    "Symbol": "LECO",
            	    "Name": "Lincoln Electric Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "LNC",
            	    "Name": "Lincoln National Corporation"
            	  },
            	  {
            	    "Symbol": "LNC.WS",
            	    "Name": "Lincoln National Corporation"
            	  },
            	  {
            	    "Symbol": "LIND",
            	    "Name": "Lindblad Expeditions Holdings Inc."
            	  },
            	  {
            	    "Symbol": "LINDW",
            	    "Name": "Lindblad Expeditions Holdings Inc."
            	  },
            	  {
            	    "Symbol": "LNN",
            	    "Name": "Lindsay Corporation"
            	  },
            	  {
            	    "Symbol": "LLTC",
            	    "Name": "Linear Technology Corporation"
            	  },
            	  {
            	    "Symbol": "LNKD",
            	    "Name": "LinkedIn Corporation"
            	  },
            	  {
            	    "Symbol": "LNCO",
            	    "Name": "Linn Co, LLC"
            	  },
            	  {
            	    "Symbol": "LINE",
            	    "Name": "Linn Energy, LLC"
            	  },
            	  {
            	    "Symbol": "LBIO",
            	    "Name": "Lion Biotechnologies, Inc."
            	  },
            	  {
            	    "Symbol": "LIOX",
            	    "Name": "Lionbridge Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "LGF",
            	    "Name": "Lions Gate Entertainment Corporation"
            	  },
            	  {
            	    "Symbol": "LPCN",
            	    "Name": "Lipocine Inc."
            	  },
            	  {
            	    "Symbol": "LIQT",
            	    "Name": "LiqTech International, Inc."
            	  },
            	  {
            	    "Symbol": "LQDT",
            	    "Name": "Liquidity Services, Inc."
            	  },
            	  {
            	    "Symbol": "LAD",
            	    "Name": "Lithia Motors, Inc."
            	  },
            	  {
            	    "Symbol": "LFUS",
            	    "Name": "Littelfuse, Inc."
            	  },
            	  {
            	    "Symbol": "LIVN",
            	    "Name": "LivaNova PLC"
            	  },
            	  {
            	    "Symbol": "LYV",
            	    "Name": "Live Nation Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "LOB",
            	    "Name": "Live Oak Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "LIVE",
            	    "Name": "Live Ventures Incorporated"
            	  },
            	  {
            	    "Symbol": "LPSN",
            	    "Name": "LivePerson, Inc."
            	  },
            	  {
            	    "Symbol": "LYG",
            	    "Name": "Lloyds Banking Group Plc"
            	  },
            	  {
            	    "Symbol": "LMT",
            	    "Name": "Lockheed Martin Corporation"
            	  },
            	  {
            	    "Symbol": "L",
            	    "Name": "Loews Corporation"
            	  },
            	  {
            	    "Symbol": "LOGM",
            	    "Name": "LogMein, Inc."
            	  },
            	  {
            	    "Symbol": "LOGI",
            	    "Name": "Logitech International S.A."
            	  },
            	  {
            	    "Symbol": "EVAR",
            	    "Name": "Lombard Medical, Inc."
            	  },
            	  {
            	    "Symbol": "CNCR",
            	    "Name": "Loncar Cancer Immunotherapy ETF"
            	  },
            	  {
            	    "Symbol": "LORL",
            	    "Name": "Loral Space and Communications, Inc."
            	  },
            	  {
            	    "Symbol": "LPX",
            	    "Name": "Louisiana-Pacific Corporation"
            	  },
            	  {
            	    "Symbol": "LOW",
            	    "Name": "Lowe&#39;s Companies, Inc."
            	  },
            	  {
            	    "Symbol": "LOXO",
            	    "Name": "Loxo Oncology, Inc."
            	  },
            	  {
            	    "Symbol": "LPTN",
            	    "Name": "Lpath, Inc."
            	  },
            	  {
            	    "Symbol": "LXU",
            	    "Name": "Lsb Industries Inc."
            	  },
            	  {
            	    "Symbol": "LUB",
            	    "Name": "Luby&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "LEI",
            	    "Name": "Lucas Energy, Inc."
            	  },
            	  {
            	    "Symbol": "LL",
            	    "Name": "Lumber Liquidators Holdings, Inc"
            	  },
            	  {
            	    "Symbol": "LITE",
            	    "Name": "Lumentum Holdings Inc."
            	  },
            	  {
            	    "Symbol": "LMNX",
            	    "Name": "Luminex Corporation"
            	  },
            	  {
            	    "Symbol": "LMOS",
            	    "Name": "Lumos Networks Corp."
            	  },
            	  {
            	    "Symbol": "LUNA",
            	    "Name": "Luna Innovations Incorporated"
            	  },
            	  {
            	    "Symbol": "LXFR",
            	    "Name": "Luxfer Holdings PLC"
            	  },
            	  {
            	    "Symbol": "LXFT",
            	    "Name": "Luxoft Holding, Inc."
            	  },
            	  {
            	    "Symbol": "LUX",
            	    "Name": "Luxottica Group, S.p.A."
            	  },
            	  {
            	    "Symbol": "LDL",
            	    "Name": "Lydall, Inc."
            	  },
            	  {
            	    "Symbol": "WLH",
            	    "Name": "Lyon William Homes"
            	  },
            	  {
            	    "Symbol": "LYB",
            	    "Name": "LyondellBasell Industries NV"
            	  },
            	  {
            	    "Symbol": "MBTF",
            	    "Name": "M B T Financial Corp"
            	  },
            	  {
            	    "Symbol": "MTB",
            	    "Name": "M&T Bank Corporation"
            	  },
            	  {
            	    "Symbol": "MTB.WS",
            	    "Name": "M&T Bank Corporation"
            	  },
            	  {
            	    "Symbol": "MTB^",
            	    "Name": "M&T Bank Corporation"
            	  },
            	  {
            	    "Symbol": "MTB^C",
            	    "Name": "M&T Bank Corporation"
            	  },
            	  {
            	    "Symbol": "MDC",
            	    "Name": "M.D.C. Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "MTSI",
            	    "Name": "M\/A-COM Technology Solutions Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "MHO",
            	    "Name": "M\/I Homes, Inc."
            	  },
            	  {
            	    "Symbol": "MHO^A",
            	    "Name": "M\/I Homes, Inc."
            	  },
            	  {
            	    "Symbol": "MCUR",
            	    "Name": "MACROCURE LTD."
            	  },
            	  {
            	    "Symbol": "MAMS",
            	    "Name": "MAM Software Group, Inc."
            	  },
            	  {
            	    "Symbol": "MBFI",
            	    "Name": "MB Financial Inc."
            	  },
            	  {
            	    "Symbol": "MBFIP",
            	    "Name": "MB Financial Inc."
            	  },
            	  {
            	    "Symbol": "MBI",
            	    "Name": "MBIA, Inc."
            	  },
            	  {
            	    "Symbol": "MCFT",
            	    "Name": "MCBC Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "MDCA",
            	    "Name": "MDC Partners Inc."
            	  },
            	  {
            	    "Symbol": "MDU",
            	    "Name": "MDU Resources Group, Inc."
            	  },
            	  {
            	    "Symbol": "MED",
            	    "Name": "MEDIFAST INC"
            	  },
            	  {
            	    "Symbol": "MEIP",
            	    "Name": "MEI Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "MTSL",
            	    "Name": "MER Telemanagement Solutions Ltd."
            	  },
            	  {
            	    "Symbol": "MFA",
            	    "Name": "MFA Financial, Inc."
            	  },
            	  {
            	    "Symbol": "MFA^B",
            	    "Name": "MFA Financial, Inc."
            	  },
            	  {
            	    "Symbol": "MFO",
            	    "Name": "MFA Financial, Inc."
            	  },
            	  {
            	    "Symbol": "MFCB",
            	    "Name": "MFC Bancorp Ltd."
            	  },
            	  {
            	    "Symbol": "MFRI",
            	    "Name": "MFRI, Inc."
            	  },
            	  {
            	    "Symbol": "CCA",
            	    "Name": "MFS California Insured Municipal Trust"
            	  },
            	  {
            	    "Symbol": "MCR",
            	    "Name": "MFS Charter Income Trust"
            	  },
            	  {
            	    "Symbol": "MGF",
            	    "Name": "MFS Government Markets Income Trust"
            	  },
            	  {
            	    "Symbol": "MIN",
            	    "Name": "MFS Intermediate Income Trust"
            	  },
            	  {
            	    "Symbol": "MMT",
            	    "Name": "MFS Multimarket Income Trust"
            	  },
            	  {
            	    "Symbol": "MFM",
            	    "Name": "MFS Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "MFV",
            	    "Name": "MFS Special Value Trust"
            	  },
            	  {
            	    "Symbol": "MGCD",
            	    "Name": "MGC Diagnostics Corporation"
            	  },
            	  {
            	    "Symbol": "MGEE",
            	    "Name": "MGE Energy Inc."
            	  },
            	  {
            	    "Symbol": "MTG",
            	    "Name": "MGIC Investment Corporation"
            	  },
            	  {
            	    "Symbol": "MGM",
            	    "Name": "MGM Resorts International"
            	  },
            	  {
            	    "Symbol": "MGPI",
            	    "Name": "MGP Ingredients, Inc."
            	  },
            	  {
            	    "Symbol": "MGT",
            	    "Name": "MGT Capital Investments Inc"
            	  },
            	  {
            	    "Symbol": "MNDO",
            	    "Name": "MIND C.T.I. Ltd."
            	  },
            	  {
            	    "Symbol": "MB",
            	    "Name": "MINDBODY, Inc."
            	  },
            	  {
            	    "Symbol": "MSON",
            	    "Name": "MISONIX, Inc."
            	  },
            	  {
            	    "Symbol": "MKSI",
            	    "Name": "MKS Instruments, Inc."
            	  },
            	  {
            	    "Symbol": "MMAC",
            	    "Name": "MMA Capital Management, LLC"
            	  },
            	  {
            	    "Symbol": "MOCO",
            	    "Name": "MOCON, Inc."
            	  },
            	  {
            	    "Symbol": "MOLG",
            	    "Name": "MOL Global, Inc."
            	  },
            	  {
            	    "Symbol": "MPLX",
            	    "Name": "MPLX LP"
            	  },
            	  {
            	    "Symbol": "MRC",
            	    "Name": "MRC Global Inc."
            	  },
            	  {
            	    "Symbol": "MRVC",
            	    "Name": "MRV Communications, Inc."
            	  },
            	  {
            	    "Symbol": "ICB",
            	    "Name": "MS Income Securities, Inc."
            	  },
            	  {
            	    "Symbol": "HJV",
            	    "Name": "MS Structured Asset Corp Saturns GE Cap Corp Series 2002-14"
            	  },
            	  {
            	    "Symbol": "MSA",
            	    "Name": "MSA Safety Incorporporated"
            	  },
            	  {
            	    "Symbol": "MSBF",
            	    "Name": "MSB Financial Corp."
            	  },
            	  {
            	    "Symbol": "MSM",
            	    "Name": "MSC Industrial Direct Company, Inc."
            	  },
            	  {
            	    "Symbol": "MSCI",
            	    "Name": "MSCI Inc"
            	  },
            	  {
            	    "Symbol": "MSG",
            	    "Name": "MSG Networks Inc."
            	  },
            	  {
            	    "Symbol": "MSG",
            	    "Name": "MSG Networks Inc."
            	  },
            	  {
            	    "Symbol": "MSGN",
            	    "Name": "MSG Networks Inc."
            	  },
            	  {
            	    "Symbol": "MTSC",
            	    "Name": "MTS Systems Corporation"
            	  },
            	  {
            	    "Symbol": "MWA",
            	    "Name": "MUELLER WATER PRODUCTS"
            	  },
            	  {
            	    "Symbol": "MVO",
            	    "Name": "MV Oil Trust"
            	  },
            	  {
            	    "Symbol": "MVC",
            	    "Name": "MVC Capital, Inc."
            	  },
            	  {
            	    "Symbol": "MVCB",
            	    "Name": "MVC Capital, Inc."
            	  },
            	  {
            	    "Symbol": "MYOS",
            	    "Name": "MYOS RENS Technology Inc."
            	  },
            	  {
            	    "Symbol": "MYRG",
            	    "Name": "MYR Group, Inc."
            	  },
            	  {
            	    "Symbol": "MCBC",
            	    "Name": "Macatawa Bank Corporation"
            	  },
            	  {
            	    "Symbol": "MAC",
            	    "Name": "Macerich Company (The)"
            	  },
            	  {
            	    "Symbol": "CLI",
            	    "Name": "Mack-Cali Realty Corporation"
            	  },
            	  {
            	    "Symbol": "MFNC",
            	    "Name": "Mackinac Financial Corporation"
            	  },
            	  {
            	    "Symbol": "MGU",
            	    "Name": "Macquarie Global Infrastructure Total Return Fund Inc."
            	  },
            	  {
            	    "Symbol": "MIC",
            	    "Name": "Macquarie Infrastructure Company"
            	  },
            	  {
            	    "Symbol": "MFD",
            	    "Name": "Macquarie\/First Trust Global"
            	  },
            	  {
            	    "Symbol": "BMA",
            	    "Name": "Macro Bank Inc."
            	  },
            	  {
            	    "Symbol": "MGNX",
            	    "Name": "MacroGenics, Inc."
            	  },
            	  {
            	    "Symbol": "M",
            	    "Name": "Macy&#39;s Inc"
            	  },
            	  {
            	    "Symbol": "MCZ",
            	    "Name": "Mad Catz Interactive Inc"
            	  },
            	  {
            	    "Symbol": "MCN",
            	    "Name": "Madison Covered Call & Equity Strategy Fund"
            	  },
            	  {
            	    "Symbol": "MSP",
            	    "Name": "Madison Strategic Sector Premium Fund"
            	  },
            	  {
            	    "Symbol": "MVG",
            	    "Name": "Mag Silver Corporation"
            	  },
            	  {
            	    "Symbol": "MAGS",
            	    "Name": "Magal Security Systems Ltd."
            	  },
            	  {
            	    "Symbol": "MGLN",
            	    "Name": "Magellan Health, Inc."
            	  },
            	  {
            	    "Symbol": "MMP",
            	    "Name": "Magellan Midstream Partners L.P."
            	  },
            	  {
            	    "Symbol": "MPET",
            	    "Name": "Magellan Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "MGIC",
            	    "Name": "Magic Software Enterprises Ltd."
            	  },
            	  {
            	    "Symbol": "MGA",
            	    "Name": "Magna International, Inc."
            	  },
            	  {
            	    "Symbol": "MX",
            	    "Name": "MagnaChip Semiconductor Corporation"
            	  },
            	  {
            	    "Symbol": "MNGA",
            	    "Name": "MagneGas Corporation"
            	  },
            	  {
            	    "Symbol": "MGYR",
            	    "Name": "Magyar Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "MHLD",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MHLDO",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MHNA",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MHNB",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MHNC",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MH^A",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MH^C",
            	    "Name": "Maiden Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MAIN",
            	    "Name": "Main Street Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MSCA",
            	    "Name": "Main Street Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MSFG",
            	    "Name": "MainSource Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "MMD",
            	    "Name": "MainStay DefinedTerm Municipal Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "MJCO",
            	    "Name": "Majesco"
            	  },
            	  {
            	    "Symbol": "COOL",
            	    "Name": "Majesco Entertainment Company"
            	  },
            	  {
            	    "Symbol": "MMYT",
            	    "Name": "MakeMyTrip Limited"
            	  },
            	  {
            	    "Symbol": "MBUU",
            	    "Name": "Malibu Boats, Inc."
            	  },
            	  {
            	    "Symbol": "MNK",
            	    "Name": "Mallinckrodt plc"
            	  },
            	  {
            	    "Symbol": "MLVF",
            	    "Name": "Malvern Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "MANT",
            	    "Name": "ManTech International Corporation"
            	  },
            	  {
            	    "Symbol": "MZF",
            	    "Name": "Managed Duration Investment Grade Municipal Fund"
            	  },
            	  {
            	    "Symbol": "HYF",
            	    "Name": "Managed High Yield Plus Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MANU",
            	    "Name": "Manchester United Ltd."
            	  },
            	  {
            	    "Symbol": "MANH",
            	    "Name": "Manhattan Associates, Inc."
            	  },
            	  {
            	    "Symbol": "LOAN",
            	    "Name": "Manhattan Bridge Capital, Inc"
            	  },
            	  {
            	    "Symbol": "MNTX",
            	    "Name": "Manitex International, Inc."
            	  },
            	  {
            	    "Symbol": "MTW",
            	    "Name": "Manitowoc Company, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "MFS",
            	    "Name": "Manitowoc Food Service, Inc."
            	  },
            	  {
            	    "Symbol": "MNKD",
            	    "Name": "MannKind Corporation"
            	  },
            	  {
            	    "Symbol": "MTEX",
            	    "Name": "Mannatech, Incorporated"
            	  },
            	  {
            	    "Symbol": "MN",
            	    "Name": "Manning & Napier, Inc."
            	  },
            	  {
            	    "Symbol": "MAN",
            	    "Name": "ManpowerGroup"
            	  },
            	  {
            	    "Symbol": "MFC",
            	    "Name": "Manulife Financial Corp"
            	  },
            	  {
            	    "Symbol": "MRO",
            	    "Name": "Marathon Oil Corporation"
            	  },
            	  {
            	    "Symbol": "MARA",
            	    "Name": "Marathon Patent Group, Inc."
            	  },
            	  {
            	    "Symbol": "MPC",
            	    "Name": "Marathon Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "MCHX",
            	    "Name": "Marchex, Inc."
            	  },
            	  {
            	    "Symbol": "MMI",
            	    "Name": "Marcus & Millichap, Inc."
            	  },
            	  {
            	    "Symbol": "MCS",
            	    "Name": "Marcus Corporation (The)"
            	  },
            	  {
            	    "Symbol": "MRIN",
            	    "Name": "Marin Software Incorporated"
            	  },
            	  {
            	    "Symbol": "MHG",
            	    "Name": "Marine Harvest ASA"
            	  },
            	  {
            	    "Symbol": "MARPS",
            	    "Name": "Marine Petroleum Trust"
            	  },
            	  {
            	    "Symbol": "MPX",
            	    "Name": "Marine Products Corporation"
            	  },
            	  {
            	    "Symbol": "HZO",
            	    "Name": "MarineMax, Inc."
            	  },
            	  {
            	    "Symbol": "MRNS",
            	    "Name": "Marinus Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "MKL",
            	    "Name": "Markel Corporation"
            	  },
            	  {
            	    "Symbol": "BBH",
            	    "Name": "Market Vectors Biotech ETF"
            	  },
            	  {
            	    "Symbol": "GNRX",
            	    "Name": "Market Vectors Generic Drugs ETF"
            	  },
            	  {
            	    "Symbol": "PPH",
            	    "Name": "Market Vectors Pharmaceutical ETF"
            	  },
            	  {
            	    "Symbol": "MKTX",
            	    "Name": "MarketAxess Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "MKTO",
            	    "Name": "Marketo, Inc."
            	  },
            	  {
            	    "Symbol": "MRKT",
            	    "Name": "Markit Ltd."
            	  },
            	  {
            	    "Symbol": "MRLN",
            	    "Name": "Marlin Business Services Corp."
            	  },
            	  {
            	    "Symbol": "VAC",
            	    "Name": "Marriot Vacations Worldwide Corporation"
            	  },
            	  {
            	    "Symbol": "MAR",
            	    "Name": "Marriott International"
            	  },
            	  {
            	    "Symbol": "MBII",
            	    "Name": "Marrone Bio Innovations, Inc."
            	  },
            	  {
            	    "Symbol": "MMC",
            	    "Name": "Marsh & McLennan Companies, Inc."
            	  },
            	  {
            	    "Symbol": "MRTN",
            	    "Name": "Marten Transport, Ltd."
            	  },
            	  {
            	    "Symbol": "MLM",
            	    "Name": "Martin Marietta Materials, Inc."
            	  },
            	  {
            	    "Symbol": "MMLP",
            	    "Name": "Martin Midstream Partners L.P."
            	  },
            	  {
            	    "Symbol": "MRVL",
            	    "Name": "Marvell Technology Group Ltd."
            	  },
            	  {
            	    "Symbol": "MTZ",
            	    "Name": "MasTec, Inc."
            	  },
            	  {
            	    "Symbol": "MAS",
            	    "Name": "Masco Corporation"
            	  },
            	  {
            	    "Symbol": "MASI",
            	    "Name": "Masimo Corporation"
            	  },
            	  {
            	    "Symbol": "DOOR",
            	    "Name": "Masonite International Corporation"
            	  },
            	  {
            	    "Symbol": "MSTX",
            	    "Name": "Mast Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "MHH",
            	    "Name": "Mastech Holdings, Inc"
            	  },
            	  {
            	    "Symbol": "MA",
            	    "Name": "Mastercard Incorporated"
            	  },
            	  {
            	    "Symbol": "MTDR",
            	    "Name": "Matador Resources Company"
            	  },
            	  {
            	    "Symbol": "MTCH",
            	    "Name": "Match Group, Inc."
            	  },
            	  {
            	    "Symbol": "MTLS",
            	    "Name": "Materialise NV"
            	  },
            	  {
            	    "Symbol": "MTRN",
            	    "Name": "Materion Corporation"
            	  },
            	  {
            	    "Symbol": "MTRX",
            	    "Name": "Matrix Service Company"
            	  },
            	  {
            	    "Symbol": "MATX",
            	    "Name": "Matson, Inc."
            	  },
            	  {
            	    "Symbol": "MAT",
            	    "Name": "Mattel, Inc."
            	  },
            	  {
            	    "Symbol": "MATR",
            	    "Name": "Mattersight Corporation"
            	  },
            	  {
            	    "Symbol": "MATW",
            	    "Name": "Matthews International Corporation"
            	  },
            	  {
            	    "Symbol": "MFRM",
            	    "Name": "Mattress Firm Holding Corp."
            	  },
            	  {
            	    "Symbol": "MTSN",
            	    "Name": "Mattson Technology, Inc."
            	  },
            	  {
            	    "Symbol": "MLP",
            	    "Name": "Maui Land & Pineapple Company, Inc."
            	  },
            	  {
            	    "Symbol": "MXL",
            	    "Name": "MaxLinear, Inc"
            	  },
            	  {
            	    "Symbol": "MXPT",
            	    "Name": "MaxPoint Interactive, Inc."
            	  },
            	  {
            	    "Symbol": "MXIM",
            	    "Name": "Maxim Integrated Products, Inc."
            	  },
            	  {
            	    "Symbol": "MMS",
            	    "Name": "Maximus, Inc."
            	  },
            	  {
            	    "Symbol": "MXWL",
            	    "Name": "Maxwell Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "MZOR",
            	    "Name": "Mazor Robotics Ltd."
            	  },
            	  {
            	    "Symbol": "MNI",
            	    "Name": "McClatchy Company (The)"
            	  },
            	  {
            	    "Symbol": "MKC",
            	    "Name": "McCormick & Company, Incorporated"
            	  },
            	  {
            	    "Symbol": "MKC.V",
            	    "Name": "McCormick & Company, Incorporated"
            	  },
            	  {
            	    "Symbol": "MDR",
            	    "Name": "McDermott International, Inc."
            	  },
            	  {
            	    "Symbol": "MCD",
            	    "Name": "McDonald&#39;s Corporation"
            	  },
            	  {
            	    "Symbol": "MUX",
            	    "Name": "McEwen Mining Inc."
            	  },
            	  {
            	    "Symbol": "MGRC",
            	    "Name": "McGrath RentCorp"
            	  },
            	  {
            	    "Symbol": "MHFI",
            	    "Name": "McGraw Hill Financial, Inc."
            	  },
            	  {
            	    "Symbol": "MCK",
            	    "Name": "McKesson Corporation"
            	  },
            	  {
            	    "Symbol": "MJN",
            	    "Name": "Mead Johnson Nutrition Company"
            	  },
            	  {
            	    "Symbol": "MTL",
            	    "Name": "Mechel OAO"
            	  },
            	  {
            	    "Symbol": "MTL^",
            	    "Name": "Mechel OAO"
            	  },
            	  {
            	    "Symbol": "MCOX",
            	    "Name": "Mecox Lane Limited"
            	  },
            	  {
            	    "Symbol": "TAXI",
            	    "Name": "Medallion Financial Corp."
            	  },
            	  {
            	    "Symbol": "MDGN",
            	    "Name": "Medgenics, Inc."
            	  },
            	  {
            	    "Symbol": "MDGN.WS",
            	    "Name": "Medgenics, Inc."
            	  },
            	  {
            	    "Symbol": "MDWD",
            	    "Name": "MediWound Ltd."
            	  },
            	  {
            	    "Symbol": "MEG",
            	    "Name": "Media General, Inc."
            	  },
            	  {
            	    "Symbol": "MPW",
            	    "Name": "Medical Properties Trust, Inc."
            	  },
            	  {
            	    "Symbol": "MTBC",
            	    "Name": "Medical Transcription Billing, Corp."
            	  },
            	  {
            	    "Symbol": "MTBCP",
            	    "Name": "Medical Transcription Billing, Corp."
            	  },
            	  {
            	    "Symbol": "MNOV",
            	    "Name": "MediciNova, Inc."
            	  },
            	  {
            	    "Symbol": "MDSO",
            	    "Name": "Medidata Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "MDGS",
            	    "Name": "Medigus Ltd."
            	  },
            	  {
            	    "Symbol": "MDVN",
            	    "Name": "Medivation, Inc."
            	  },
            	  {
            	    "Symbol": "MCC",
            	    "Name": "Medley Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MCQ",
            	    "Name": "Medley Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MCV",
            	    "Name": "Medley Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MCX",
            	    "Name": "Medley Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MDLY",
            	    "Name": "Medley Management Inc."
            	  },
            	  {
            	    "Symbol": "MD",
            	    "Name": "Mednax, Inc"
            	  },
            	  {
            	    "Symbol": "MDVX",
            	    "Name": "Medovex Corp."
            	  },
            	  {
            	    "Symbol": "MDVXW",
            	    "Name": "Medovex Corp."
            	  },
            	  {
            	    "Symbol": "MDT",
            	    "Name": "Medtronic plc"
            	  },
            	  {
            	    "Symbol": "MEET",
            	    "Name": "MeetMe, Inc."
            	  },
            	  {
            	    "Symbol": "MPEL",
            	    "Name": "Melco Crown Entertainment Limited"
            	  },
            	  {
            	    "Symbol": "MLNX",
            	    "Name": "Mellanox Technologies, Ltd."
            	  },
            	  {
            	    "Symbol": "MELR",
            	    "Name": "Melrose Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "MEMP",
            	    "Name": "Memorial Production Partners LP"
            	  },
            	  {
            	    "Symbol": "MRD",
            	    "Name": "Memorial Resource Development Corp."
            	  },
            	  {
            	    "Symbol": "MENT",
            	    "Name": "Mentor Graphics Corporation"
            	  },
            	  {
            	    "Symbol": "MELI",
            	    "Name": "MercadoLibre, Inc."
            	  },
            	  {
            	    "Symbol": "MBWM",
            	    "Name": "Mercantile Bank Corporation"
            	  },
            	  {
            	    "Symbol": "MERC",
            	    "Name": "Mercer International Inc."
            	  },
            	  {
            	    "Symbol": "MBVT",
            	    "Name": "Merchants Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "MRK",
            	    "Name": "Merck & Company, Inc."
            	  },
            	  {
            	    "Symbol": "MCY",
            	    "Name": "Mercury General Corporation"
            	  },
            	  {
            	    "Symbol": "MRCY",
            	    "Name": "Mercury Systems Inc"
            	  },
            	  {
            	    "Symbol": "MDP",
            	    "Name": "Meredith Corporation"
            	  },
            	  {
            	    "Symbol": "EBSB",
            	    "Name": "Meridian Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "VIVO",
            	    "Name": "Meridian Bioscience Inc."
            	  },
            	  {
            	    "Symbol": "MMSI",
            	    "Name": "Merit Medical Systems, Inc."
            	  },
            	  {
            	    "Symbol": "MTH",
            	    "Name": "Meritage Corporation"
            	  },
            	  {
            	    "Symbol": "MTOR",
            	    "Name": "Meritor, Inc."
            	  },
            	  {
            	    "Symbol": "IPB",
            	    "Name": "Merrill Lynch & Co., Inc."
            	  },
            	  {
            	    "Symbol": "MER^K",
            	    "Name": "Merrill Lynch & Co., Inc."
            	  },
            	  {
            	    "Symbol": "MER^M",
            	    "Name": "Merrill Lynch & Co., Inc."
            	  },
            	  {
            	    "Symbol": "MER^P",
            	    "Name": "Merrill Lynch & Co., Inc."
            	  },
            	  {
            	    "Symbol": "PIY",
            	    "Name": "Merrill Lynch Depositor, Inc."
            	  },
            	  {
            	    "Symbol": "MACK",
            	    "Name": "Merrimack Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "MSLI",
            	    "Name": "Merus Labs International Inc."
            	  },
            	  {
            	    "Symbol": "MLAB",
            	    "Name": "Mesa Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "MTR",
            	    "Name": "Mesa Royalty Trust"
            	  },
            	  {
            	    "Symbol": "MSB",
            	    "Name": "Mesabi Trust"
            	  },
            	  {
            	    "Symbol": "MESO",
            	    "Name": "Mesoblast Limited"
            	  },
            	  {
            	    "Symbol": "MET",
            	    "Name": "MetLife, Inc."
            	  },
            	  {
            	    "Symbol": "MET^A",
            	    "Name": "MetLife, Inc."
            	  },
            	  {
            	    "Symbol": "CASH",
            	    "Name": "Meta Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "MBLX",
            	    "Name": "Metabolix, Inc."
            	  },
            	  {
            	    "Symbol": "MPG",
            	    "Name": "Metaldyne Performance Group Inc."
            	  },
            	  {
            	    "Symbol": "MEOH",
            	    "Name": "Methanex Corporation"
            	  },
            	  {
            	    "Symbol": "MEI",
            	    "Name": "Methode Electronics, Inc."
            	  },
            	  {
            	    "Symbol": "MTD",
            	    "Name": "Mettler-Toledo International, Inc."
            	  },
            	  {
            	    "Symbol": "MXC",
            	    "Name": "Mexco Energy Corporation"
            	  },
            	  {
            	    "Symbol": "MXE",
            	    "Name": "Mexico Equity and Income Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "MXF",
            	    "Name": "Mexico Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "MDXG",
            	    "Name": "MiMedx Group, Inc"
            	  },
            	  {
            	    "Symbol": "MIXT",
            	    "Name": "MiX Telematics Limited"
            	  },
            	  {
            	    "Symbol": "KORS",
            	    "Name": "Michael Kors Holdings Limited"
            	  },
            	  {
            	    "Symbol": "MSTR",
            	    "Name": "MicroStrategy Incorporated"
            	  },
            	  {
            	    "Symbol": "MCHP",
            	    "Name": "Microchip Technology Incorporated"
            	  },
            	  {
            	    "Symbol": "MU",
            	    "Name": "Micron Technology, Inc."
            	  },
            	  {
            	    "Symbol": "MICT",
            	    "Name": "Micronet Enertec Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "MICTW",
            	    "Name": "Micronet Enertec Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "MSCC",
            	    "Name": "Microsemi Corporation"
            	  },
            	  {
            	    "Symbol": "MSFT",
            	    "Name": "Microsoft Corporation"
            	  },
            	  {
            	    "Symbol": "MVIS",
            	    "Name": "Microvision, Inc."
            	  },
            	  {
            	    "Symbol": "MPB",
            	    "Name": "Mid Penn Bancorp"
            	  },
            	  {
            	    "Symbol": "MAA",
            	    "Name": "Mid-America Apartment Communities, Inc."
            	  },
            	  {
            	    "Symbol": "MCEP",
            	    "Name": "Mid-Con Energy Partners, LP"
            	  },
            	  {
            	    "Symbol": "MSL",
            	    "Name": "MidSouth Bancorp"
            	  },
            	  {
            	    "Symbol": "MOFG",
            	    "Name": "MidWestOne Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "MTP",
            	    "Name": "Midatech Pharma PLC"
            	  },
            	  {
            	    "Symbol": "MEP",
            	    "Name": "Midcoast Energy Partners, L.P."
            	  },
            	  {
            	    "Symbol": "MBRG",
            	    "Name": "Middleburg Financial Corporation"
            	  },
            	  {
            	    "Symbol": "MBCN",
            	    "Name": "Middlefield Banc Corp."
            	  },
            	  {
            	    "Symbol": "MSEX",
            	    "Name": "Middlesex Water Company"
            	  },
            	  {
            	    "Symbol": "MCRN",
            	    "Name": "Milacron Holdings Corp."
            	  },
            	  {
            	    "Symbol": "MLSS",
            	    "Name": "Milestone Scientific, Inc."
            	  },
            	  {
            	    "Symbol": "MLR",
            	    "Name": "Miller Industries, Inc."
            	  },
            	  {
            	    "Symbol": "HIE",
            	    "Name": "Miller\/Howard High Income Equity Fund"
            	  },
            	  {
            	    "Symbol": "MIME",
            	    "Name": "Mimecast Limited"
            	  },
            	  {
            	    "Symbol": "MGH",
            	    "Name": "Minco Gold Corporation"
            	  },
            	  {
            	    "Symbol": "MTX",
            	    "Name": "Minerals Technologies Inc."
            	  },
            	  {
            	    "Symbol": "NERV",
            	    "Name": "Minerva Neurosciences, Inc"
            	  },
            	  {
            	    "Symbol": "MGN",
            	    "Name": "Mines Management, Inc."
            	  },
            	  {
            	    "Symbol": "MRTX",
            	    "Name": "Mirati Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "MIRN",
            	    "Name": "Mirna Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "MP^D",
            	    "Name": "Mississippi Power Company"
            	  },
            	  {
            	    "Symbol": "MG",
            	    "Name": "Mistras Group Inc"
            	  },
            	  {
            	    "Symbol": "MIND",
            	    "Name": "Mitcham Industries, Inc."
            	  },
            	  {
            	    "Symbol": "MITK",
            	    "Name": "Mitek Systems, Inc."
            	  },
            	  {
            	    "Symbol": "MITL",
            	    "Name": "Mitel Networks Corporation"
            	  },
            	  {
            	    "Symbol": "MTU",
            	    "Name": "Mitsubishi UFJ Financial Group Inc"
            	  },
            	  {
            	    "Symbol": "MFG",
            	    "Name": "Mizuho Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "MOSY",
            	    "Name": "MoSys, Inc."
            	  },
            	  {
            	    "Symbol": "MINI",
            	    "Name": "Mobile Mini, Inc."
            	  },
            	  {
            	    "Symbol": "MBT",
            	    "Name": "Mobile TeleSystems OJSC"
            	  },
            	  {
            	    "Symbol": "MOBL",
            	    "Name": "MobileIron, Inc."
            	  },
            	  {
            	    "Symbol": "MBLY",
            	    "Name": "Mobileye N.V."
            	  },
            	  {
            	    "Symbol": "MDSY",
            	    "Name": "ModSys International Ltd."
            	  },
            	  {
            	    "Symbol": "MODN",
            	    "Name": "Model N, Inc."
            	  },
            	  {
            	    "Symbol": "MOD",
            	    "Name": "Modine Manufacturing Company"
            	  },
            	  {
            	    "Symbol": "MLNK",
            	    "Name": "ModusLink Global Solutions, Inc"
            	  },
            	  {
            	    "Symbol": "MC",
            	    "Name": "Moelis & Company"
            	  },
            	  {
            	    "Symbol": "MHK",
            	    "Name": "Mohawk Industries, Inc."
            	  },
            	  {
            	    "Symbol": "MOKO",
            	    "Name": "Moko Social Media Ltd."
            	  },
            	  {
            	    "Symbol": "MOH",
            	    "Name": "Molina Healthcare Inc"
            	  },
            	  {
            	    "Symbol": "TAP",
            	    "Name": "Molson Coors Brewing  Company"
            	  },
            	  {
            	    "Symbol": "TAP.A",
            	    "Name": "Molson Coors Brewing  Company"
            	  },
            	  {
            	    "Symbol": "MNTA",
            	    "Name": "Momenta Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "MOMO",
            	    "Name": "Momo Inc."
            	  },
            	  {
            	    "Symbol": "MCRI",
            	    "Name": "Monarch Casino & Resort, Inc."
            	  },
            	  {
            	    "Symbol": "MNRK",
            	    "Name": "Monarch Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "MDLZ",
            	    "Name": "Mondelez International, Inc."
            	  },
            	  {
            	    "Symbol": "MGI",
            	    "Name": "Moneygram International, Inc."
            	  },
            	  {
            	    "Symbol": "MNR",
            	    "Name": "Monmouth Real Estate Investment Corporation"
            	  },
            	  {
            	    "Symbol": "MNR^A",
            	    "Name": "Monmouth Real Estate Investment Corporation"
            	  },
            	  {
            	    "Symbol": "MNR^B",
            	    "Name": "Monmouth Real Estate Investment Corporation"
            	  },
            	  {
            	    "Symbol": "MORE",
            	    "Name": "Monogram Residential Trust, Inc."
            	  },
            	  {
            	    "Symbol": "MPWR",
            	    "Name": "Monolithic Power Systems, Inc."
            	  },
            	  {
            	    "Symbol": "TYPE",
            	    "Name": "Monotype Imaging Holdings Inc."
            	  },
            	  {
            	    "Symbol": "MNRO",
            	    "Name": "Monro Muffler Brake, Inc."
            	  },
            	  {
            	    "Symbol": "MRCC",
            	    "Name": "Monroe Capital Corporation"
            	  },
            	  {
            	    "Symbol": "MON",
            	    "Name": "Monsanto Company"
            	  },
            	  {
            	    "Symbol": "MNST",
            	    "Name": "Monster Beverage Corporation"
            	  },
            	  {
            	    "Symbol": "MWW",
            	    "Name": "Monster Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "MCO",
            	    "Name": "Moody&#39;s Corporation"
            	  },
            	  {
            	    "Symbol": "MOG.A",
            	    "Name": "Moog Inc."
            	  },
            	  {
            	    "Symbol": "MOG.B",
            	    "Name": "Moog Inc."
            	  },
            	  {
            	    "Symbol": "MS",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MSK",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MS^A",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MS^E",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MS^F",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MS^G",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MS^I",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MWG",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MWO",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "MWR",
            	    "Name": "Morgan Stanley"
            	  },
            	  {
            	    "Symbol": "APF",
            	    "Name": "Morgan Stanley Asia-Pacific Fund, Inc."
            	  },
            	  {
            	    "Symbol": "CAF",
            	    "Name": "Morgan Stanley China A Share Fund Inc."
            	  },
            	  {
            	    "Symbol": "MSD",
            	    "Name": "Morgan Stanley Emerging Markets Debt Fund, Inc."
            	  },
            	  {
            	    "Symbol": "EDD",
            	    "Name": "Morgan Stanley Emerging Markets Domestic Debt Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MSF",
            	    "Name": "Morgan Stanley Emerging Markets Fund, Inc."
            	  },
            	  {
            	    "Symbol": "IIF",
            	    "Name": "Morgan Stanley India Investment Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MHGC",
            	    "Name": "Morgans Hotel Group Co."
            	  },
            	  {
            	    "Symbol": "MORN",
            	    "Name": "Morningstar, Inc."
            	  },
            	  {
            	    "Symbol": "MOS",
            	    "Name": "Mosaic Company (The)"
            	  },
            	  {
            	    "Symbol": "MPAA",
            	    "Name": "Motorcar Parts of America, Inc."
            	  },
            	  {
            	    "Symbol": "MSI",
            	    "Name": "Motorola Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "MDM",
            	    "Name": "Mountain Province Diamonds Inc."
            	  },
            	  {
            	    "Symbol": "MOV",
            	    "Name": "Movado Group Inc."
            	  },
            	  {
            	    "Symbol": "MLI",
            	    "Name": "Mueller Industries, Inc."
            	  },
            	  {
            	    "Symbol": "MPSX",
            	    "Name": "Multi Packaging Solutions International Limited"
            	  },
            	  {
            	    "Symbol": "LABL",
            	    "Name": "Multi-Color Corporation"
            	  },
            	  {
            	    "Symbol": "MFLX",
            	    "Name": "Multi-Fineline Electronix, Inc."
            	  },
            	  {
            	    "Symbol": "MVF",
            	    "Name": "MuniVest Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MZA",
            	    "Name": "MuniYield Arizona Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MUR",
            	    "Name": "Murphy Oil Corporation"
            	  },
            	  {
            	    "Symbol": "MUSA",
            	    "Name": "Murphy USA Inc."
            	  },
            	  {
            	    "Symbol": "MFSF",
            	    "Name": "MutualFirst Financial Inc."
            	  },
            	  {
            	    "Symbol": "MYE",
            	    "Name": "Myers Industries, Inc."
            	  },
            	  {
            	    "Symbol": "MYL",
            	    "Name": "Mylan N.V."
            	  },
            	  {
            	    "Symbol": "MYOK",
            	    "Name": "MyoKardia, Inc."
            	  },
            	  {
            	    "Symbol": "MYGN",
            	    "Name": "Myriad Genetics, Inc."
            	  },
            	  {
            	    "Symbol": "NC",
            	    "Name": "NACCO Industries, Inc."
            	  },
            	  {
            	    "Symbol": "NSSC",
            	    "Name": "NAPCO Security Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "NBTB",
            	    "Name": "NBT Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "NCS",
            	    "Name": "NCI Building Systems, Inc."
            	  },
            	  {
            	    "Symbol": "NCIT",
            	    "Name": "NCI, Inc."
            	  },
            	  {
            	    "Symbol": "NCR",
            	    "Name": "NCR Corporation"
            	  },
            	  {
            	    "Symbol": "NTGR",
            	    "Name": "NETGEAR, Inc."
            	  },
            	  {
            	    "Symbol": "NGD",
            	    "Name": "NEW GOLD INC."
            	  },
            	  {
            	    "Symbol": "NFEC",
            	    "Name": "NF Energy Saving Corporation"
            	  },
            	  {
            	    "Symbol": "NGL",
            	    "Name": "NGL ENERGY PARTNERS LP"
            	  },
            	  {
            	    "Symbol": "EGOV",
            	    "Name": "NIC Inc."
            	  },
            	  {
            	    "Symbol": "NICE",
            	    "Name": "NICE-Systems Limited"
            	  },
            	  {
            	    "Symbol": "NIHD",
            	    "Name": "NII Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "NL",
            	    "Name": "NL Industries, Inc."
            	  },
            	  {
            	    "Symbol": "NMIH",
            	    "Name": "NMI Holdings Inc"
            	  },
            	  {
            	    "Symbol": "NNBR",
            	    "Name": "NN, Inc."
            	  },
            	  {
            	    "Symbol": "DNOW",
            	    "Name": "NOW Inc."
            	  },
            	  {
            	    "Symbol": "NQ",
            	    "Name": "NQ Mobile Inc."
            	  },
            	  {
            	    "Symbol": "NRG",
            	    "Name": "NRG Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NYLD",
            	    "Name": "NRG Yield, Inc."
            	  },
            	  {
            	    "Symbol": "NYLD.A",
            	    "Name": "NRG Yield, Inc."
            	  },
            	  {
            	    "Symbol": "NTLS",
            	    "Name": "NTELOS Holdings Corp."
            	  },
            	  {
            	    "Symbol": "NTN",
            	    "Name": "NTN Buzztime, Inc."
            	  },
            	  {
            	    "Symbol": "DCM",
            	    "Name": "NTT DOCOMO, Inc"
            	  },
            	  {
            	    "Symbol": "NVEE",
            	    "Name": "NV5 Global, Inc."
            	  },
            	  {
            	    "Symbol": "NVEC",
            	    "Name": "NVE Corporation"
            	  },
            	  {
            	    "Symbol": "NVDA",
            	    "Name": "NVIDIA Corporation"
            	  },
            	  {
            	    "Symbol": "NVR",
            	    "Name": "NVR, Inc."
            	  },
            	  {
            	    "Symbol": "NXPI",
            	    "Name": "NXP Semiconductors N.V."
            	  },
            	  {
            	    "Symbol": "NXTD",
            	    "Name": "NXT-ID Inc."
            	  },
            	  {
            	    "Symbol": "NXTDW",
            	    "Name": "NXT-ID Inc."
            	  },
            	  {
            	    "Symbol": "NBR",
            	    "Name": "Nabors Industries Ltd."
            	  },
            	  {
            	    "Symbol": "NBRV",
            	    "Name": "Nabriva Therapeutics AG"
            	  },
            	  {
            	    "Symbol": "NAKD",
            	    "Name": "Naked Brand Group Inc."
            	  },
            	  {
            	    "Symbol": "NTP",
            	    "Name": "Nam Tai Property Inc."
            	  },
            	  {
            	    "Symbol": "NNDM",
            	    "Name": "Nano Dimension Ltd."
            	  },
            	  {
            	    "Symbol": "NSTG",
            	    "Name": "NanoString Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "NNVC",
            	    "Name": "NanoViricides, Inc."
            	  },
            	  {
            	    "Symbol": "NANO",
            	    "Name": "Nanometrics Incorporated"
            	  },
            	  {
            	    "Symbol": "NSPH",
            	    "Name": "Nanosphere, Inc."
            	  },
            	  {
            	    "Symbol": "NK",
            	    "Name": "NantKwest, Inc."
            	  },
            	  {
            	    "Symbol": "NDAQ",
            	    "Name": "Nasdaq, Inc."
            	  },
            	  {
            	    "Symbol": "NTRA",
            	    "Name": "Natera, Inc."
            	  },
            	  {
            	    "Symbol": "NATH",
            	    "Name": "Nathan&#39;s Famous, Inc."
            	  },
            	  {
            	    "Symbol": "NAUH",
            	    "Name": "National American University Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "NBHC",
            	    "Name": "National Bank Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "NKSH",
            	    "Name": "National Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "FIZZ",
            	    "Name": "National Beverage Corp."
            	  },
            	  {
            	    "Symbol": "NCMI",
            	    "Name": "National CineMedia, Inc."
            	  },
            	  {
            	    "Symbol": "NCOM",
            	    "Name": "National Commerce Corporation"
            	  },
            	  {
            	    "Symbol": "NFG",
            	    "Name": "National Fuel Gas Company"
            	  },
            	  {
            	    "Symbol": "NGHC",
            	    "Name": "National General Holdings Corp"
            	  },
            	  {
            	    "Symbol": "NGHCO",
            	    "Name": "National General Holdings Corp"
            	  },
            	  {
            	    "Symbol": "NGHCP",
            	    "Name": "National General Holdings Corp"
            	  },
            	  {
            	    "Symbol": "NGHCZ",
            	    "Name": "National General Holdings Corp"
            	  },
            	  {
            	    "Symbol": "NGG",
            	    "Name": "National Grid Transco, PLC"
            	  },
            	  {
            	    "Symbol": "NHI",
            	    "Name": "National Health Investors, Inc."
            	  },
            	  {
            	    "Symbol": "NHC",
            	    "Name": "National HealthCare Corporation"
            	  },
            	  {
            	    "Symbol": "NHLD",
            	    "Name": "National Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "NATI",
            	    "Name": "National Instruments Corporation"
            	  },
            	  {
            	    "Symbol": "NATL",
            	    "Name": "National Interstate Corporation"
            	  },
            	  {
            	    "Symbol": "NOV",
            	    "Name": "National Oilwell Varco, Inc."
            	  },
            	  {
            	    "Symbol": "NPBC",
            	    "Name": "National Penn Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "NPK",
            	    "Name": "National Presto Industries, Inc."
            	  },
            	  {
            	    "Symbol": "NRCIA",
            	    "Name": "National Research Corporation"
            	  },
            	  {
            	    "Symbol": "NRCIB",
            	    "Name": "National Research Corporation"
            	  },
            	  {
            	    "Symbol": "NNN",
            	    "Name": "National Retail Properties"
            	  },
            	  {
            	    "Symbol": "NNN^D",
            	    "Name": "National Retail Properties"
            	  },
            	  {
            	    "Symbol": "NNN^E",
            	    "Name": "National Retail Properties"
            	  },
            	  {
            	    "Symbol": "NSEC",
            	    "Name": "National Security Group, Inc."
            	  },
            	  {
            	    "Symbol": "SID",
            	    "Name": "National Steel Company"
            	  },
            	  {
            	    "Symbol": "NSA",
            	    "Name": "National Storage Affiliates Trust"
            	  },
            	  {
            	    "Symbol": "NWLI",
            	    "Name": "National Western Life Group, Inc."
            	  },
            	  {
            	    "Symbol": "NSM",
            	    "Name": "Nationstar Mortgage Holdings Inc."
            	  },
            	  {
            	    "Symbol": "NW^C",
            	    "Name": "Natl Westminster Pfd"
            	  },
            	  {
            	    "Symbol": "NAII",
            	    "Name": "Natural Alternatives International, Inc."
            	  },
            	  {
            	    "Symbol": "NGS",
            	    "Name": "Natural Gas Services Group, Inc."
            	  },
            	  {
            	    "Symbol": "NGVC",
            	    "Name": "Natural Grocers by Vitamin Cottage, Inc."
            	  },
            	  {
            	    "Symbol": "NHTC",
            	    "Name": "Natural Health Trends Corp."
            	  },
            	  {
            	    "Symbol": "NRP",
            	    "Name": "Natural Resource Partners LP"
            	  },
            	  {
            	    "Symbol": "NATR",
            	    "Name": "Nature&#39;s Sunshine Products, Inc."
            	  },
            	  {
            	    "Symbol": "BABY",
            	    "Name": "Natus Medical Incorporated"
            	  },
            	  {
            	    "Symbol": "NTZ",
            	    "Name": "Natuzzi, S.p.A."
            	  },
            	  {
            	    "Symbol": "NLS",
            	    "Name": "Nautilus Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "NAVB",
            	    "Name": "Navidea Biopharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "NAVI",
            	    "Name": "Navient Corporation"
            	  },
            	  {
            	    "Symbol": "NCI",
            	    "Name": "Navigant Consulting, Inc."
            	  },
            	  {
            	    "Symbol": "NVGS",
            	    "Name": "Navigator Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "NNA",
            	    "Name": "Navios Maritime Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "NM",
            	    "Name": "Navios Maritime Holdings Inc."
            	  },
            	  {
            	    "Symbol": "NM^G",
            	    "Name": "Navios Maritime Holdings Inc."
            	  },
            	  {
            	    "Symbol": "NM^H",
            	    "Name": "Navios Maritime Holdings Inc."
            	  },
            	  {
            	    "Symbol": "NAP",
            	    "Name": "Navios Maritime Midstream Partners LP"
            	  },
            	  {
            	    "Symbol": "NMM",
            	    "Name": "Navios Maritime Partners LP"
            	  },
            	  {
            	    "Symbol": "NAV",
            	    "Name": "Navistar International Corporation"
            	  },
            	  {
            	    "Symbol": "NAV^D",
            	    "Name": "Navistar International Corporation"
            	  },
            	  {
            	    "Symbol": "NP",
            	    "Name": "Neenah Paper, Inc."
            	  },
            	  {
            	    "Symbol": "NEFF",
            	    "Name": "Neff Corporation"
            	  },
            	  {
            	    "Symbol": "NKTR",
            	    "Name": "Nektar Therapeutics"
            	  },
            	  {
            	    "Symbol": "NNI",
            	    "Name": "Nelnet, Inc."
            	  },
            	  {
            	    "Symbol": "NEO",
            	    "Name": "NeoGenomics, Inc."
            	  },
            	  {
            	    "Symbol": "NPTN",
            	    "Name": "NeoPhotonics Corporation"
            	  },
            	  {
            	    "Symbol": "NEOG",
            	    "Name": "Neogen Corporation"
            	  },
            	  {
            	    "Symbol": "NEON",
            	    "Name": "Neonode Inc."
            	  },
            	  {
            	    "Symbol": "NEOS",
            	    "Name": "Neos Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "NEOT",
            	    "Name": "Neothetics, Inc."
            	  },
            	  {
            	    "Symbol": "NVCN",
            	    "Name": "Neovasc Inc."
            	  },
            	  {
            	    "Symbol": "NRX",
            	    "Name": "NephroGenex, Inc."
            	  },
            	  {
            	    "Symbol": "NEPT",
            	    "Name": "Neptune Technologies & Bioresources Inc"
            	  },
            	  {
            	    "Symbol": "UEPS",
            	    "Name": "Net 1 UEPS Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "NETE",
            	    "Name": "Net Element, Inc."
            	  },
            	  {
            	    "Symbol": "NTAP",
            	    "Name": "NetApp, Inc."
            	  },
            	  {
            	    "Symbol": "NTES",
            	    "Name": "NetEase, Inc."
            	  },
            	  {
            	    "Symbol": "NTCT",
            	    "Name": "NetScout Systems, Inc."
            	  },
            	  {
            	    "Symbol": "NTWK",
            	    "Name": "NetSol Technologies Inc."
            	  },
            	  {
            	    "Symbol": "NFLX",
            	    "Name": "Netflix, Inc."
            	  },
            	  {
            	    "Symbol": "NLST",
            	    "Name": "Netlist, Inc."
            	  },
            	  {
            	    "Symbol": "N",
            	    "Name": "Netsuite Inc"
            	  },
            	  {
            	    "Symbol": "NTIP",
            	    "Name": "Network-1 Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "NBW",
            	    "Name": "Neuberger Berman California Intermediate Municipal Fund Inc."
            	  },
            	  {
            	    "Symbol": "NHS",
            	    "Name": "Neuberger Berman High Yield Strategies Fund"
            	  },
            	  {
            	    "Symbol": "NBH",
            	    "Name": "Neuberger Berman Intermediate Municipal Fund Inc."
            	  },
            	  {
            	    "Symbol": "NML",
            	    "Name": "Neuberger Berman MLP Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "NBO",
            	    "Name": "Neuberger Berman New York Intermediate Municipal Fund Inc."
            	  },
            	  {
            	    "Symbol": "NRO",
            	    "Name": "Neuberger Berman Real Estate Securities Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "CUR",
            	    "Name": "Neuralstem, Inc."
            	  },
            	  {
            	    "Symbol": "NDRM",
            	    "Name": "NeuroDerm Ltd."
            	  },
            	  {
            	    "Symbol": "NURO",
            	    "Name": "NeuroMetrix, Inc."
            	  },
            	  {
            	    "Symbol": "NUROW",
            	    "Name": "NeuroMetrix, Inc."
            	  },
            	  {
            	    "Symbol": "NBIX",
            	    "Name": "Neurocrine Biosciences, Inc."
            	  },
            	  {
            	    "Symbol": "NSR",
            	    "Name": "Neustar, Inc."
            	  },
            	  {
            	    "Symbol": "UWN",
            	    "Name": "Nevada Gold & Casinos, Inc."
            	  },
            	  {
            	    "Symbol": "NVRO",
            	    "Name": "Nevro Corp."
            	  },
            	  {
            	    "Symbol": "NSU",
            	    "Name": "Nevsun Resources Ltd"
            	  },
            	  {
            	    "Symbol": "HYB",
            	    "Name": "New America High Income Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "GBR",
            	    "Name": "New Concept Energy, Inc"
            	  },
            	  {
            	    "Symbol": "NEN",
            	    "Name": "New England Realty Associates Limited Partnership"
            	  },
            	  {
            	    "Symbol": "GF",
            	    "Name": "New Germany Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "NWHM",
            	    "Name": "New Home Company Inc. (The)"
            	  },
            	  {
            	    "Symbol": "IRL",
            	    "Name": "New Ireland Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "NEWM",
            	    "Name": "New Media Investment Group Inc."
            	  },
            	  {
            	    "Symbol": "NMFC",
            	    "Name": "New Mountain Finance Corporation"
            	  },
            	  {
            	    "Symbol": "EDU",
            	    "Name": "New Oriental Education & Technology Group, Inc."
            	  },
            	  {
            	    "Symbol": "NEWR",
            	    "Name": "New Relic, Inc."
            	  },
            	  {
            	    "Symbol": "NRZ",
            	    "Name": "New Residential Investment Corp."
            	  },
            	  {
            	    "Symbol": "SNR",
            	    "Name": "New Senior Investment Group Inc."
            	  },
            	  {
            	    "Symbol": "NWY",
            	    "Name": "New York & Company, Inc."
            	  },
            	  {
            	    "Symbol": "NYCB",
            	    "Name": "New York Community Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "NYCB^U",
            	    "Name": "New York Community Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "NYMT",
            	    "Name": "New York Mortgage Trust, Inc."
            	  },
            	  {
            	    "Symbol": "NYMTO",
            	    "Name": "New York Mortgage Trust, Inc."
            	  },
            	  {
            	    "Symbol": "NYMTP",
            	    "Name": "New York Mortgage Trust, Inc."
            	  },
            	  {
            	    "Symbol": "NYRT",
            	    "Name": "New York REIT, Inc."
            	  },
            	  {
            	    "Symbol": "NYT",
            	    "Name": "New York Times Company (The)"
            	  },
            	  {
            	    "Symbol": "NJR",
            	    "Name": "NewJersey Resources Corporation"
            	  },
            	  {
            	    "Symbol": "NLNK",
            	    "Name": "NewLink Genetics Corporation"
            	  },
            	  {
            	    "Symbol": "NEU",
            	    "Name": "NewMarket Corporation"
            	  },
            	  {
            	    "Symbol": "NEWS",
            	    "Name": "NewStar Financial, Inc."
            	  },
            	  {
            	    "Symbol": "NCT",
            	    "Name": "Newcastle Investment Corporation"
            	  },
            	  {
            	    "Symbol": "NCT^B",
            	    "Name": "Newcastle Investment Corporation"
            	  },
            	  {
            	    "Symbol": "NCT^C",
            	    "Name": "Newcastle Investment Corporation"
            	  },
            	  {
            	    "Symbol": "NCT^D",
            	    "Name": "Newcastle Investment Corporation"
            	  },
            	  {
            	    "Symbol": "NWL",
            	    "Name": "Newell Rubbermaid Inc."
            	  },
            	  {
            	    "Symbol": "NFX",
            	    "Name": "Newfield Exploration Company"
            	  },
            	  {
            	    "Symbol": "NEM",
            	    "Name": "Newmont Mining Corporation"
            	  },
            	  {
            	    "Symbol": "NR",
            	    "Name": "Newpark Resources, Inc."
            	  },
            	  {
            	    "Symbol": "NEWP",
            	    "Name": "Newport Corporation"
            	  },
            	  {
            	    "Symbol": "NWS",
            	    "Name": "News Corporation"
            	  },
            	  {
            	    "Symbol": "NWSA",
            	    "Name": "News Corporation"
            	  },
            	  {
            	    "Symbol": "NEWT",
            	    "Name": "Newtek Business Services Corp."
            	  },
            	  {
            	    "Symbol": "NEWTZ",
            	    "Name": "Newtek Business Services Corp."
            	  },
            	  {
            	    "Symbol": "NHF",
            	    "Name": "NexPoint Credit Stategies Fund"
            	  },
            	  {
            	    "Symbol": "NXRT",
            	    "Name": "NexPoint Residential Trust, Inc."
            	  },
            	  {
            	    "Symbol": "NXST",
            	    "Name": "Nexstar Broadcasting Group, Inc."
            	  },
            	  {
            	    "Symbol": "NEP",
            	    "Name": "NextEra Energy Partners, LP"
            	  },
            	  {
            	    "Symbol": "NEE",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^C",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^G",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^H",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^I",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^J",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^P",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NEE^Q",
            	    "Name": "NextEra Energy, Inc."
            	  },
            	  {
            	    "Symbol": "NVET",
            	    "Name": "Nexvet Biopharma plc"
            	  },
            	  {
            	    "Symbol": "NI",
            	    "Name": "NiSource, Inc"
            	  },
            	  {
            	    "Symbol": "NMK^B",
            	    "Name": "Niagara Mohawk Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "NMK^C",
            	    "Name": "Niagara Mohawk Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "NICK",
            	    "Name": "Nicholas Financial, Inc."
            	  },
            	  {
            	    "Symbol": "NCBS",
            	    "Name": "Nicolet Bankshares Inc."
            	  },
            	  {
            	    "Symbol": "NJ",
            	    "Name": "Nidec Corporation (Nihon Densan Kabushiki Kaisha)"
            	  },
            	  {
            	    "Symbol": "NLSN",
            	    "Name": "Nielsen N.V."
            	  },
            	  {
            	    "Symbol": "NKE",
            	    "Name": "Nike, Inc."
            	  },
            	  {
            	    "Symbol": "NMBL",
            	    "Name": "Nimble Storage, Inc."
            	  },
            	  {
            	    "Symbol": "NTT",
            	    "Name": "Nippon Telegraph and Telephone Corporation"
            	  },
            	  {
            	    "Symbol": "NKA",
            	    "Name": "Niska Gas Storage Partners LLC"
            	  },
            	  {
            	    "Symbol": "NVLS",
            	    "Name": "Nivalis Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "NOAH",
            	    "Name": "Noah Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "HLTH",
            	    "Name": "Nobilis Health Corp."
            	  },
            	  {
            	    "Symbol": "NE",
            	    "Name": "Noble Corporation"
            	  },
            	  {
            	    "Symbol": "NBL",
            	    "Name": "Noble Energy Inc."
            	  },
            	  {
            	    "Symbol": "NOK",
            	    "Name": "Nokia Corporation"
            	  },
            	  {
            	    "Symbol": "NOMD",
            	    "Name": "Nomad Foods Limited"
            	  },
            	  {
            	    "Symbol": "NMR",
            	    "Name": "Nomura Holdings Inc ADR"
            	  },
            	  {
            	    "Symbol": "NDLS",
            	    "Name": "Noodles & Company"
            	  },
            	  {
            	    "Symbol": "OSB",
            	    "Name": "Norbord Inc."
            	  },
            	  {
            	    "Symbol": "NORD",
            	    "Name": "Nord Anglia Education, Inc."
            	  },
            	  {
            	    "Symbol": "NAO",
            	    "Name": "Nordic American Offshore Ltd"
            	  },
            	  {
            	    "Symbol": "NAT",
            	    "Name": "Nordic American Tankers Limited"
            	  },
            	  {
            	    "Symbol": "NDSN",
            	    "Name": "Nordson Corporation"
            	  },
            	  {
            	    "Symbol": "JWN",
            	    "Name": "Nordstrom, Inc."
            	  },
            	  {
            	    "Symbol": "NSC",
            	    "Name": "Norfolk Souther Corporation"
            	  },
            	  {
            	    "Symbol": "NSAT",
            	    "Name": "Norsat International Inc."
            	  },
            	  {
            	    "Symbol": "NSYS",
            	    "Name": "Nortech Systems Incorporated"
            	  },
            	  {
            	    "Symbol": "NTK",
            	    "Name": "Nortek Inc."
            	  },
            	  {
            	    "Symbol": "NTL",
            	    "Name": "Nortel Inversora SA"
            	  },
            	  {
            	    "Symbol": "NOA",
            	    "Name": "North American Energy Partners, Inc."
            	  },
            	  {
            	    "Symbol": "NADL",
            	    "Name": "North Atlantic Drilling Ltd."
            	  },
            	  {
            	    "Symbol": "NRT",
            	    "Name": "North European Oil Royality Trust"
            	  },
            	  {
            	    "Symbol": "NSAM",
            	    "Name": "NorthStar Asset Management Group, Inc."
            	  },
            	  {
            	    "Symbol": "NRE",
            	    "Name": "NorthStar Realty Europe Corp."
            	  },
            	  {
            	    "Symbol": "NWE",
            	    "Name": "NorthWestern Corporation"
            	  },
            	  {
            	    "Symbol": "NBN",
            	    "Name": "Northeast Bancorp"
            	  },
            	  {
            	    "Symbol": "NAK",
            	    "Name": "Northern Dynasty Minerals, Ltd."
            	  },
            	  {
            	    "Symbol": "NOG",
            	    "Name": "Northern Oil and Gas, Inc."
            	  },
            	  {
            	    "Symbol": "NTIC",
            	    "Name": "Northern Technologies International Corporation"
            	  },
            	  {
            	    "Symbol": "NTI",
            	    "Name": "Northern Tier Energy LP"
            	  },
            	  {
            	    "Symbol": "NTRS",
            	    "Name": "Northern Trust Corporation"
            	  },
            	  {
            	    "Symbol": "NTRSP",
            	    "Name": "Northern Trust Corporation"
            	  },
            	  {
            	    "Symbol": "NFBK",
            	    "Name": "Northfield Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "NRIM",
            	    "Name": "Northrim BanCorp Inc"
            	  },
            	  {
            	    "Symbol": "NOC",
            	    "Name": "Northrop Grumman Corporation"
            	  },
            	  {
            	    "Symbol": "NRF",
            	    "Name": "Northstar Realty Finance Corp."
            	  },
            	  {
            	    "Symbol": "NRF^A",
            	    "Name": "Northstar Realty Finance Corp."
            	  },
            	  {
            	    "Symbol": "NRF^B",
            	    "Name": "Northstar Realty Finance Corp."
            	  },
            	  {
            	    "Symbol": "NRF^C",
            	    "Name": "Northstar Realty Finance Corp."
            	  },
            	  {
            	    "Symbol": "NRF^D",
            	    "Name": "Northstar Realty Finance Corp."
            	  },
            	  {
            	    "Symbol": "NRF^E",
            	    "Name": "Northstar Realty Finance Corp."
            	  },
            	  {
            	    "Symbol": "NWBI",
            	    "Name": "Northwest Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "NWBO",
            	    "Name": "Northwest Biotherapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "NWBOW",
            	    "Name": "Northwest Biotherapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "NWN",
            	    "Name": "Northwest Natural Gas Company"
            	  },
            	  {
            	    "Symbol": "NWPX",
            	    "Name": "Northwest Pipe Company"
            	  },
            	  {
            	    "Symbol": "NCLH",
            	    "Name": "Norwegian Cruise Line Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "NWFL",
            	    "Name": "Norwood Financial Corp."
            	  },
            	  {
            	    "Symbol": "NVFY",
            	    "Name": "Nova Lifestyle, Inc"
            	  },
            	  {
            	    "Symbol": "NVMI",
            	    "Name": "Nova Measuring Instruments Ltd."
            	  },
            	  {
            	    "Symbol": "NBY",
            	    "Name": "NovaBay Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "NCQ",
            	    "Name": "NovaCopper Inc."
            	  },
            	  {
            	    "Symbol": "NVDQ",
            	    "Name": "Novadaq Technologies Inc"
            	  },
            	  {
            	    "Symbol": "NG",
            	    "Name": "Novagold Resources Inc."
            	  },
            	  {
            	    "Symbol": "NVS",
            	    "Name": "Novartis AG"
            	  },
            	  {
            	    "Symbol": "MIFI",
            	    "Name": "Novatel Wireless, Inc."
            	  },
            	  {
            	    "Symbol": "NVAX",
            	    "Name": "Novavax, Inc."
            	  },
            	  {
            	    "Symbol": "NVO",
            	    "Name": "Novo Nordisk A\/S"
            	  },
            	  {
            	    "Symbol": "NVCR",
            	    "Name": "NovoCure Limited"
            	  },
            	  {
            	    "Symbol": "NVGN",
            	    "Name": "Novogen Limited"
            	  },
            	  {
            	    "Symbol": "NUS",
            	    "Name": "Nu Skin Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "NSS",
            	    "Name": "NuStar Logistics, L.P."
            	  },
            	  {
            	    "Symbol": "NUVA",
            	    "Name": "NuVasive, Inc."
            	  },
            	  {
            	    "Symbol": "NUAN",
            	    "Name": "Nuance Communications, Inc."
            	  },
            	  {
            	    "Symbol": "NUE",
            	    "Name": "Nucor Corporation"
            	  },
            	  {
            	    "Symbol": "NMRX",
            	    "Name": "Numerex Corp."
            	  },
            	  {
            	    "Symbol": "NS",
            	    "Name": "Nustar Energy L.P."
            	  },
            	  {
            	    "Symbol": "NSH",
            	    "Name": "Nustar GP Holdings, LLC"
            	  },
            	  {
            	    "Symbol": "NUTR",
            	    "Name": "Nutraceutical International Corporation"
            	  },
            	  {
            	    "Symbol": "NTRI",
            	    "Name": "NutriSystem Inc"
            	  },
            	  {
            	    "Symbol": "NVTR",
            	    "Name": "Nuvectra Corporation"
            	  },
            	  {
            	    "Symbol": "NEA",
            	    "Name": "Nuveen AMT-Free Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "NUV",
            	    "Name": "Nuveen AMT-Free Municipal Value Fund"
            	  },
            	  {
            	    "Symbol": "NUW",
            	    "Name": "Nuveen AMT-Free Municipal Value Fund"
            	  },
            	  {
            	    "Symbol": "JMLP",
            	    "Name": "Nuveen All Cap Energy MLP Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "NAZ",
            	    "Name": "Nuveen Arizona Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NBB",
            	    "Name": "Nuveen Build America Bond Fund"
            	  },
            	  {
            	    "Symbol": "NBD",
            	    "Name": "Nuveen Build America Bond Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "NKX",
            	    "Name": "Nuveen California AMT-Free Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "NAC",
            	    "Name": "Nuveen California Dividend Advantage Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NVX",
            	    "Name": "Nuveen California Dividend Advantage Municipal Fund 2"
            	  },
            	  {
            	    "Symbol": "NZH",
            	    "Name": "Nuveen California Dividend Advantage Municipal Fund 3"
            	  },
            	  {
            	    "Symbol": "NCB",
            	    "Name": "Nuveen California Municipal Value Fund 2"
            	  },
            	  {
            	    "Symbol": "NCA",
            	    "Name": "Nuveen California Municipal Value Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NTC",
            	    "Name": "Nuveen Connecticut Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "JCE",
            	    "Name": "Nuveen Core Equity Alpha Fund"
            	  },
            	  {
            	    "Symbol": "JQC",
            	    "Name": "Nuveen Credit Strategies Income Fund"
            	  },
            	  {
            	    "Symbol": "CFD",
            	    "Name": "Nuveen Diversified Commodity Fund"
            	  },
            	  {
            	    "Symbol": "JDD",
            	    "Name": "Nuveen Diversified Dividend and Income Fund"
            	  },
            	  {
            	    "Symbol": "NAD",
            	    "Name": "Nuveen Dividend Advantage Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NXZ",
            	    "Name": "Nuveen Dividend Advantage Municipal Fund 2"
            	  },
            	  {
            	    "Symbol": "NZF",
            	    "Name": "Nuveen Dividend Advantage Municipal Fund 3"
            	  },
            	  {
            	    "Symbol": "NVG",
            	    "Name": "Nuveen Dividend Advantage Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "DIAX",
            	    "Name": "Nuveen Dow 30SM Dynamic Overwrite Fund"
            	  },
            	  {
            	    "Symbol": "JMF",
            	    "Name": "Nuveen Energy MLP Total Return Fund"
            	  },
            	  {
            	    "Symbol": "NEV",
            	    "Name": "Nuveen Enhanced Municipal Value Fund"
            	  },
            	  {
            	    "Symbol": "JPW",
            	    "Name": "Nuveen Flexible Investment Income Fund"
            	  },
            	  {
            	    "Symbol": "JFR",
            	    "Name": "Nuveen Floating Rate Income Fund"
            	  },
            	  {
            	    "Symbol": "JRO",
            	    "Name": "Nuveen Floating Rate Income Opportuntiy Fund"
            	  },
            	  {
            	    "Symbol": "NKG",
            	    "Name": "Nuveen Georgia Dividend Advantage Municipal Fund 2"
            	  },
            	  {
            	    "Symbol": "JGV",
            	    "Name": "Nuveen Global Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "JGH",
            	    "Name": "Nuveen Global High Income Fund"
            	  },
            	  {
            	    "Symbol": "JHA",
            	    "Name": "Nuveen High Income 2020 Target Term Fund"
            	  },
            	  {
            	    "Symbol": "JHY",
            	    "Name": "Nuveen High Income 2020 Target Term Fund"
            	  },
            	  {
            	    "Symbol": "NXC",
            	    "Name": "Nuveen Insured California Select Tax-Free Income Portfolio"
            	  },
            	  {
            	    "Symbol": "NXN",
            	    "Name": "Nuveen Insured New York Select Tax-Free Income Portfolio"
            	  },
            	  {
            	    "Symbol": "NID",
            	    "Name": "Nuveen Intermediate Duration Municipal Term Fund"
            	  },
            	  {
            	    "Symbol": "NQM",
            	    "Name": "Nuveen Investment Quality Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "CTF",
            	    "Name": "Nuveen Long\/Short Commodity Total Return Fund"
            	  },
            	  {
            	    "Symbol": "NMY",
            	    "Name": "Nuveen Maryland Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NMT",
            	    "Name": "Nuveen Massachusetts Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NUM",
            	    "Name": "Nuveen Michigan Quality Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NMS",
            	    "Name": "Nuveen Minnesota Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "NOM",
            	    "Name": "Nuveen Missouri Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "JLS",
            	    "Name": "Nuveen Mortgage Opportunity Term Fund"
            	  },
            	  {
            	    "Symbol": "JMM",
            	    "Name": "Nuveen Multi-Market Income Fund"
            	  },
            	  {
            	    "Symbol": "NHA",
            	    "Name": "Nuveen Municipal 2021 Target Term Fund"
            	  },
            	  {
            	    "Symbol": "NMA",
            	    "Name": "Nuveen Municipal Advantage Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NMZ",
            	    "Name": "Nuveen Municipal High Income Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "NMI",
            	    "Name": "Nuveen Municipal Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NMO",
            	    "Name": "Nuveen Municipal Market Opportunity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NIO",
            	    "Name": "Nuveen Municipal Opportunity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "QQQX",
            	    "Name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund"
            	  },
            	  {
            	    "Symbol": "NXJ",
            	    "Name": "Nuveen New Jersey Dividend Advantage Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NJV",
            	    "Name": "Nuveen New Jersey Municipal Value Fund"
            	  },
            	  {
            	    "Symbol": "NRK",
            	    "Name": "Nuveen New York AMT-Free Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "NAN",
            	    "Name": "Nuveen New York Dividend Advantage Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NYV",
            	    "Name": "Nuveen New York Municipal Value Fund 2"
            	  },
            	  {
            	    "Symbol": "NNY",
            	    "Name": "Nuveen New York Municipal Value Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NNC",
            	    "Name": "Nuveen North Carolina Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NUO",
            	    "Name": "Nuveen Ohio Quality Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NQP",
            	    "Name": "Nuveen Pennsylvania Investment Quality Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NPN",
            	    "Name": "Nuveen Pennsylvania Municipal Value Fund"
            	  },
            	  {
            	    "Symbol": "NPP",
            	    "Name": "Nuveen Performance Plus Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "JPC",
            	    "Name": "Nuveen Preferred Income Opportunites Fund"
            	  },
            	  {
            	    "Symbol": "JPI",
            	    "Name": "Nuveen Preferred and Income Term Fund"
            	  },
            	  {
            	    "Symbol": "NPF",
            	    "Name": "Nuveen Premier Municipal Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NPM",
            	    "Name": "Nuveen Premium Income Municipal Fund II, Inc."
            	  },
            	  {
            	    "Symbol": "NPT",
            	    "Name": "Nuveen Premium Income Municipal Fund IV, Inc."
            	  },
            	  {
            	    "Symbol": "NPI",
            	    "Name": "Nuveen Premium Income Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NQU",
            	    "Name": "Nuveen Quality Income Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NQI",
            	    "Name": "Nuveen Quality Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "JTP",
            	    "Name": "Nuveen Quality Preferred Income Fund"
            	  },
            	  {
            	    "Symbol": "JPS",
            	    "Name": "Nuveen Quality Preferred Income Fund 2"
            	  },
            	  {
            	    "Symbol": "JHP",
            	    "Name": "Nuveen Quality Preferred Income Fund 3"
            	  },
            	  {
            	    "Symbol": "JRI",
            	    "Name": "Nuveen Real Asset Income and Growth Fund"
            	  },
            	  {
            	    "Symbol": "JRS",
            	    "Name": "Nuveen Real Estate Fund"
            	  },
            	  {
            	    "Symbol": "BXMX",
            	    "Name": "Nuveen S&P 500 Buy-Write Income Fund"
            	  },
            	  {
            	    "Symbol": "SPXX",
            	    "Name": "Nuveen S&P 500 Dynamic Overwrite Fund"
            	  },
            	  {
            	    "Symbol": "NIM",
            	    "Name": "Nuveen Select Maturities Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NQS",
            	    "Name": "Nuveen Select Quality Municipal Fund, Inc."
            	  },
            	  {
            	    "Symbol": "NXP",
            	    "Name": "Nuveen Select Tax Free Income Portfolio"
            	  },
            	  {
            	    "Symbol": "NXQ",
            	    "Name": "Nuveen Select Tax Free Income Portfolio II"
            	  },
            	  {
            	    "Symbol": "NXR",
            	    "Name": "Nuveen Select Tax Free Income Portfolio III"
            	  },
            	  {
            	    "Symbol": "NSL",
            	    "Name": "Nuveen Senior Income Fund"
            	  },
            	  {
            	    "Symbol": "JSD",
            	    "Name": "Nuveen Short Duration Credit Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "JTD",
            	    "Name": "Nuveen Tax-Advantaged Dividend Growth Fund"
            	  },
            	  {
            	    "Symbol": "JTA",
            	    "Name": "Nuveen Tax-Advantaged Total Return Strategy Fund"
            	  },
            	  {
            	    "Symbol": "NTX",
            	    "Name": "Nuveen Texas Quality Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NPV",
            	    "Name": "Nuveen Virginia Premium Income Municipal Fund"
            	  },
            	  {
            	    "Symbol": "NIQ",
            	    "Name": "Nuveenn Intermediate Duration Quality Municipal Term Fund"
            	  },
            	  {
            	    "Symbol": "JMT",
            	    "Name": "Nuven Mortgage Opportunity Term Fund 2"
            	  },
            	  {
            	    "Symbol": "NXTM",
            	    "Name": "NxStage Medical, Inc."
            	  },
            	  {
            	    "Symbol": "NYMX",
            	    "Name": "Nymox Pharmaceutical Corporation"
            	  },
            	  {
            	    "Symbol": "ORLY",
            	    "Name": "O&#39;Reilly Automotive, Inc."
            	  },
            	  {
            	    "Symbol": "OIIM",
            	    "Name": "O2Micro International Limited"
            	  },
            	  {
            	    "Symbol": "OCIP",
            	    "Name": "OCI Partners LP"
            	  },
            	  {
            	    "Symbol": "OFG",
            	    "Name": "OFG Bancorp"
            	  },
            	  {
            	    "Symbol": "OFG^A",
            	    "Name": "OFG Bancorp"
            	  },
            	  {
            	    "Symbol": "OFG^B",
            	    "Name": "OFG Bancorp"
            	  },
            	  {
            	    "Symbol": "OFG^D",
            	    "Name": "OFG Bancorp"
            	  },
            	  {
            	    "Symbol": "OFS",
            	    "Name": "OFS Capital Corporation"
            	  },
            	  {
            	    "Symbol": "OGE",
            	    "Name": "OGE Energy Corporation"
            	  },
            	  {
            	    "Symbol": "OHAI",
            	    "Name": "OHA Investment Corporation"
            	  },
            	  {
            	    "Symbol": "OMAM",
            	    "Name": "OM Asset Management plc"
            	  },
            	  {
            	    "Symbol": "OMN",
            	    "Name": "OMNOVA Solutions Inc."
            	  },
            	  {
            	    "Symbol": "ON",
            	    "Name": "ON Semiconductor Corporation"
            	  },
            	  {
            	    "Symbol": "OGS",
            	    "Name": "ONE Gas, Inc."
            	  },
            	  {
            	    "Symbol": "OKS",
            	    "Name": "ONEOK Partners, L.P."
            	  },
            	  {
            	    "Symbol": "OKE",
            	    "Name": "ONEOK, Inc."
            	  },
            	  {
            	    "Symbol": "ORBC",
            	    "Name": "ORBCOMM Inc."
            	  },
            	  {
            	    "Symbol": "OSIS",
            	    "Name": "OSI Systems, Inc."
            	  },
            	  {
            	    "Symbol": "OUT",
            	    "Name": "OUTFRONT Media Inc."
            	  },
            	  {
            	    "Symbol": "OXGN",
            	    "Name": "OXiGENE, Inc."
            	  },
            	  {
            	    "Symbol": "OVLY",
            	    "Name": "Oak Valley Bancorp (CA)"
            	  },
            	  {
            	    "Symbol": "OAK",
            	    "Name": "Oaktree Capital Group, LLC"
            	  },
            	  {
            	    "Symbol": "OAS",
            	    "Name": "Oasis Petroleum Inc."
            	  },
            	  {
            	    "Symbol": "OASM",
            	    "Name": "Oasmia Pharmaceutical AB"
            	  },
            	  {
            	    "Symbol": "OXY",
            	    "Name": "Occidental Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "OBCI",
            	    "Name": "Ocean Bio-Chem, Inc."
            	  },
            	  {
            	    "Symbol": "OPTT",
            	    "Name": "Ocean Power Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "ORIG",
            	    "Name": "Ocean Rig UDW Inc."
            	  },
            	  {
            	    "Symbol": "OSHC",
            	    "Name": "Ocean Shore Holding Co."
            	  },
            	  {
            	    "Symbol": "OCFC",
            	    "Name": "OceanFirst Financial Corp."
            	  },
            	  {
            	    "Symbol": "OII",
            	    "Name": "Oceaneering International, Inc."
            	  },
            	  {
            	    "Symbol": "OCRX",
            	    "Name": "Ocera Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "OZM",
            	    "Name": "Och-Ziff Capital Management Group LLC"
            	  },
            	  {
            	    "Symbol": "OCLR",
            	    "Name": "Oclaro, Inc."
            	  },
            	  {
            	    "Symbol": "OFED",
            	    "Name": "Oconee Federal Financial Corp."
            	  },
            	  {
            	    "Symbol": "OCUL",
            	    "Name": "Ocular Therapeutix, Inc."
            	  },
            	  {
            	    "Symbol": "OCLS",
            	    "Name": "Oculus Innovative Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "OCLSW",
            	    "Name": "Oculus Innovative Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "OCN",
            	    "Name": "Ocwen Financial Corporation"
            	  },
            	  {
            	    "Symbol": "OMEX",
            	    "Name": "Odyssey Marine Exploration, Inc."
            	  },
            	  {
            	    "Symbol": "ODP",
            	    "Name": "Office Depot, Inc."
            	  },
            	  {
            	    "Symbol": "OVBC",
            	    "Name": "Ohio Valley Banc Corp."
            	  },
            	  {
            	    "Symbol": "OHRP",
            	    "Name": "Ohr Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "OIBR",
            	    "Name": "Oi S.A."
            	  },
            	  {
            	    "Symbol": "OIBR.C",
            	    "Name": "Oi S.A."
            	  },
            	  {
            	    "Symbol": "OIS",
            	    "Name": "Oil States International, Inc."
            	  },
            	  {
            	    "Symbol": "ODC",
            	    "Name": "Oil-Dri Corporation Of America"
            	  },
            	  {
            	    "Symbol": "ODFL",
            	    "Name": "Old Dominion Freight Line, Inc."
            	  },
            	  {
            	    "Symbol": "OLBK",
            	    "Name": "Old Line Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "ONB",
            	    "Name": "Old National Bancorp"
            	  },
            	  {
            	    "Symbol": "OPOF",
            	    "Name": "Old Point Financial Corporation"
            	  },
            	  {
            	    "Symbol": "ORI",
            	    "Name": "Old Republic International Corporation"
            	  },
            	  {
            	    "Symbol": "OSBC",
            	    "Name": "Old Second Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "OSBCP",
            	    "Name": "Old Second Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "OLN",
            	    "Name": "Olin Corporation"
            	  },
            	  {
            	    "Symbol": "OLLI",
            	    "Name": "Ollie&#39;s Bargain Outlet Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ZEUS",
            	    "Name": "Olympic Steel, Inc."
            	  },
            	  {
            	    "Symbol": "OFLX",
            	    "Name": "Omega Flex, Inc."
            	  },
            	  {
            	    "Symbol": "OHI",
            	    "Name": "Omega Healthcare Investors, Inc."
            	  },
            	  {
            	    "Symbol": "OME",
            	    "Name": "Omega Protein Corporation"
            	  },
            	  {
            	    "Symbol": "OMER",
            	    "Name": "Omeros Corporation"
            	  },
            	  {
            	    "Symbol": "OMCL",
            	    "Name": "Omnicell, Inc."
            	  },
            	  {
            	    "Symbol": "OMC",
            	    "Name": "Omnicom Group Inc."
            	  },
            	  {
            	    "Symbol": "ASGN",
            	    "Name": "On Assignment, Inc."
            	  },
            	  {
            	    "Symbol": "ONDK",
            	    "Name": "On Deck Capital, Inc."
            	  },
            	  {
            	    "Symbol": "OTIV",
            	    "Name": "On Track Innovations Ltd"
            	  },
            	  {
            	    "Symbol": "OCX",
            	    "Name": "OncoCyte Corporation"
            	  },
            	  {
            	    "Symbol": "OGXI",
            	    "Name": "OncoGenex Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "OMED",
            	    "Name": "OncoMed Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ONCS",
            	    "Name": "OncoSec Medical Incorporated"
            	  },
            	  {
            	    "Symbol": "ONTX",
            	    "Name": "Onconova Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ONTY",
            	    "Name": "Oncothyreon Inc."
            	  },
            	  {
            	    "Symbol": "OHGI",
            	    "Name": "One Horizon Group, Inc."
            	  },
            	  {
            	    "Symbol": "OLP",
            	    "Name": "One Liberty Properties, Inc."
            	  },
            	  {
            	    "Symbol": "OB",
            	    "Name": "OneBeacon Insurance Group, Ltd."
            	  },
            	  {
            	    "Symbol": "OMF",
            	    "Name": "OneMain Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ONVI",
            	    "Name": "Onvia, Inc."
            	  },
            	  {
            	    "Symbol": "OOMA",
            	    "Name": "Ooma, Inc."
            	  },
            	  {
            	    "Symbol": "OPGN",
            	    "Name": "OpGen, Inc."
            	  },
            	  {
            	    "Symbol": "OPGNW",
            	    "Name": "OpGen, Inc."
            	  },
            	  {
            	    "Symbol": "OTEX",
            	    "Name": "Open Text Corporation"
            	  },
            	  {
            	    "Symbol": "OPXA",
            	    "Name": "Opexa Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "OPXAW",
            	    "Name": "Opexa Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "OPHT",
            	    "Name": "Ophthotech Corporation"
            	  },
            	  {
            	    "Symbol": "OPK",
            	    "Name": "Opko Health Inc"
            	  },
            	  {
            	    "Symbol": "OPWR",
            	    "Name": "Opower, Inc."
            	  },
            	  {
            	    "Symbol": "OPY",
            	    "Name": "Oppenheimer Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "OBAS",
            	    "Name": "Optibase Ltd."
            	  },
            	  {
            	    "Symbol": "OCC",
            	    "Name": "Optical Cable Corporation"
            	  },
            	  {
            	    "Symbol": "OPHC",
            	    "Name": "OptimumBank Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "OPB",
            	    "Name": "Opus Bank"
            	  },
            	  {
            	    "Symbol": "OSUR",
            	    "Name": "OraSure Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "ORCL",
            	    "Name": "Oracle Corporation"
            	  },
            	  {
            	    "Symbol": "OGEN",
            	    "Name": "Oragenics, Inc."
            	  },
            	  {
            	    "Symbol": "ORMP",
            	    "Name": "Oramed Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "ORAN",
            	    "Name": "Orange"
            	  },
            	  {
            	    "Symbol": "OA",
            	    "Name": "Orbital ATK, Inc."
            	  },
            	  {
            	    "Symbol": "ORBK",
            	    "Name": "Orbotech Ltd."
            	  },
            	  {
            	    "Symbol": "ORC",
            	    "Name": "Orchid Island Capital, Inc."
            	  },
            	  {
            	    "Symbol": "TIS",
            	    "Name": "Orchids Paper Products Company"
            	  },
            	  {
            	    "Symbol": "OREX",
            	    "Name": "Orexigen Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "ONVO",
            	    "Name": "Organovo Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ONP",
            	    "Name": "Orient Paper, Inc."
            	  },
            	  {
            	    "Symbol": "SEED",
            	    "Name": "Origin Agritech Limited"
            	  },
            	  {
            	    "Symbol": "OESX",
            	    "Name": "Orion Energy Systems, Inc."
            	  },
            	  {
            	    "Symbol": "OEC",
            	    "Name": "Orion Engineered Carbons S.A"
            	  },
            	  {
            	    "Symbol": "ORN",
            	    "Name": "Orion Marine Group Inc"
            	  },
            	  {
            	    "Symbol": "ORIT",
            	    "Name": "Oritani Financial Corp."
            	  },
            	  {
            	    "Symbol": "IX",
            	    "Name": "Orix Corp Ads"
            	  },
            	  {
            	    "Symbol": "ORA",
            	    "Name": "Ormat Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "ORRF",
            	    "Name": "Orrstown Financial Services Inc"
            	  },
            	  {
            	    "Symbol": "OFIX",
            	    "Name": "Orthofix International N.V."
            	  },
            	  {
            	    "Symbol": "OSK",
            	    "Name": "Oshkosh Corporation"
            	  },
            	  {
            	    "Symbol": "OSIR",
            	    "Name": "Osiris Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "OSN",
            	    "Name": "Ossen Innovation Co., Ltd."
            	  },
            	  {
            	    "Symbol": "OTEL",
            	    "Name": "Otelco Inc."
            	  },
            	  {
            	    "Symbol": "OTIC",
            	    "Name": "Otonomy, Inc."
            	  },
            	  {
            	    "Symbol": "OTTR",
            	    "Name": "Otter Tail Corporation"
            	  },
            	  {
            	    "Symbol": "OUTR",
            	    "Name": "Outerwall Inc."
            	  },
            	  {
            	    "Symbol": "OVAS",
            	    "Name": "Ovascience Inc."
            	  },
            	  {
            	    "Symbol": "OSG",
            	    "Name": "Overseas Shipholding Group, Inc."
            	  },
            	  {
            	    "Symbol": "OSGB",
            	    "Name": "Overseas Shipholding Group, Inc."
            	  },
            	  {
            	    "Symbol": "OSTK",
            	    "Name": "Overstock.com, Inc."
            	  },
            	  {
            	    "Symbol": "OMI",
            	    "Name": "Owens & Minor, Inc."
            	  },
            	  {
            	    "Symbol": "OC",
            	    "Name": "Owens Corning Inc"
            	  },
            	  {
            	    "Symbol": "ORM",
            	    "Name": "Owens Realty Mortgage, Inc."
            	  },
            	  {
            	    "Symbol": "OI",
            	    "Name": "Owens-Illinois, Inc."
            	  },
            	  {
            	    "Symbol": "OXBR",
            	    "Name": "Oxbridge Re Holdings Limited"
            	  },
            	  {
            	    "Symbol": "OXBRW",
            	    "Name": "Oxbridge Re Holdings Limited"
            	  },
            	  {
            	    "Symbol": "OXFD",
            	    "Name": "Oxford Immunotec Global PLC"
            	  },
            	  {
            	    "Symbol": "OXM",
            	    "Name": "Oxford Industries, Inc."
            	  },
            	  {
            	    "Symbol": "OXLC",
            	    "Name": "Oxford Lane Capital Corp."
            	  },
            	  {
            	    "Symbol": "OXLCN",
            	    "Name": "Oxford Lane Capital Corp."
            	  },
            	  {
            	    "Symbol": "OXLCO",
            	    "Name": "Oxford Lane Capital Corp."
            	  },
            	  {
            	    "Symbol": "PFIN",
            	    "Name": "P & F Industries, Inc."
            	  },
            	  {
            	    "Symbol": "PTSI",
            	    "Name": "P.A.M. Transportation Services, Inc."
            	  },
            	  {
            	    "Symbol": "PCAR",
            	    "Name": "PACCAR Inc."
            	  },
            	  {
            	    "Symbol": "PAR",
            	    "Name": "PAR Technology Corporation"
            	  },
            	  {
            	    "Symbol": "PRXL",
            	    "Name": "PAREXEL International Corporation"
            	  },
            	  {
            	    "Symbol": "PBBI",
            	    "Name": "PB Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PBF",
            	    "Name": "PBF Energy Inc."
            	  },
            	  {
            	    "Symbol": "PBFX",
            	    "Name": "PBF Logistics LP"
            	  },
            	  {
            	    "Symbol": "PCCC",
            	    "Name": "PC Connection, Inc."
            	  },
            	  {
            	    "Symbol": "PCTI",
            	    "Name": "PC-Tel, Inc."
            	  },
            	  {
            	    "Symbol": "PCMI",
            	    "Name": "PCM, Inc."
            	  },
            	  {
            	    "Symbol": "PDCE",
            	    "Name": "PDC Energy, Inc."
            	  },
            	  {
            	    "Symbol": "PDFS",
            	    "Name": "PDF Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "PDLI",
            	    "Name": "PDL BioPharma, Inc."
            	  },
            	  {
            	    "Symbol": "POM",
            	    "Name": "PEPCO Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PFSW",
            	    "Name": "PFSweb, Inc."
            	  },
            	  {
            	    "Symbol": "PGTI",
            	    "Name": "PGT, Inc."
            	  },
            	  {
            	    "Symbol": "PHH",
            	    "Name": "PHH Corp"
            	  },
            	  {
            	    "Symbol": "PHII",
            	    "Name": "PHI, Inc."
            	  },
            	  {
            	    "Symbol": "PHIIK",
            	    "Name": "PHI, Inc."
            	  },
            	  {
            	    "Symbol": "PICO",
            	    "Name": "PICO Holdings Inc."
            	  },
            	  {
            	    "Symbol": "PCQ",
            	    "Name": "PIMCO California Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "PZC",
            	    "Name": "PIMCO California Municipal Income Fund III"
            	  },
            	  {
            	    "Symbol": "PCM",
            	    "Name": "PIMCO Commercial Mortgage Securities Trust, Inc."
            	  },
            	  {
            	    "Symbol": "PCI",
            	    "Name": "PIMCO Dynamic Credit Income Fund"
            	  },
            	  {
            	    "Symbol": "PDI",
            	    "Name": "PIMCO Dynamic Income Fund"
            	  },
            	  {
            	    "Symbol": "PFL",
            	    "Name": "PIMCO Income Strategy Fund"
            	  },
            	  {
            	    "Symbol": "PFN",
            	    "Name": "PIMCO Income Strategy Fund II"
            	  },
            	  {
            	    "Symbol": "PMF",
            	    "Name": "PIMCO Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "PMX",
            	    "Name": "PIMCO Municipal Income Fund III"
            	  },
            	  {
            	    "Symbol": "PNF",
            	    "Name": "PIMCO New York Municipal Income Fund"
            	  },
            	  {
            	    "Symbol": "PYN",
            	    "Name": "PIMCO New York Municipal Income Fund III"
            	  },
            	  {
            	    "Symbol": "RCS",
            	    "Name": "PIMCO Strategic Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "PJT",
            	    "Name": "PJT Partners Inc."
            	  },
            	  {
            	    "Symbol": "PNC",
            	    "Name": "PNC Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "PNC.WS",
            	    "Name": "PNC Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "PNC^P",
            	    "Name": "PNC Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "PNC^Q",
            	    "Name": "PNC Financial Services Group, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "PNM",
            	    "Name": "PNM Resources, Inc. (Holding Co.)"
            	  },
            	  {
            	    "Symbol": "PKX",
            	    "Name": "POSCO"
            	  },
            	  {
            	    "Symbol": "PPG",
            	    "Name": "PPG Industries, Inc."
            	  },
            	  {
            	    "Symbol": "PPX",
            	    "Name": "PPL Capital Funding, Inc."
            	  },
            	  {
            	    "Symbol": "PPL",
            	    "Name": "PPL Corporation"
            	  },
            	  {
            	    "Symbol": "PYS",
            	    "Name": "PPlus Trust"
            	  },
            	  {
            	    "Symbol": "PYT",
            	    "Name": "PPlus Trust"
            	  },
            	  {
            	    "Symbol": "PRAA",
            	    "Name": "PRA Group, Inc."
            	  },
            	  {
            	    "Symbol": "PRAH",
            	    "Name": "PRA Health Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "PRGX",
            	    "Name": "PRGX Global, Inc."
            	  },
            	  {
            	    "Symbol": "PRO",
            	    "Name": "PROS Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PSTG",
            	    "Name": "PROTOSTAR I LTD"
            	  },
            	  {
            	    "Symbol": "PSB",
            	    "Name": "PS Business Parks, Inc."
            	  },
            	  {
            	    "Symbol": "PSB^S",
            	    "Name": "PS Business Parks, Inc."
            	  },
            	  {
            	    "Symbol": "PSB^T",
            	    "Name": "PS Business Parks, Inc."
            	  },
            	  {
            	    "Symbol": "PSB^U",
            	    "Name": "PS Business Parks, Inc."
            	  },
            	  {
            	    "Symbol": "PSB^V",
            	    "Name": "PS Business Parks, Inc."
            	  },
            	  {
            	    "Symbol": "TLK",
            	    "Name": "PT Telekomunikasi Indonesia, Tbk"
            	  },
            	  {
            	    "Symbol": "PTC",
            	    "Name": "PTC Inc."
            	  },
            	  {
            	    "Symbol": "PTCT",
            	    "Name": "PTC Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "PVH",
            	    "Name": "PVH Corp."
            	  },
            	  {
            	    "Symbol": "PACW",
            	    "Name": "PacWest Bancorp"
            	  },
            	  {
            	    "Symbol": "PACE",
            	    "Name": "Pace Holdings Corp."
            	  },
            	  {
            	    "Symbol": "PACEU",
            	    "Name": "Pace Holdings Corp."
            	  },
            	  {
            	    "Symbol": "PACEW",
            	    "Name": "Pace Holdings Corp."
            	  },
            	  {
            	    "Symbol": "PHF",
            	    "Name": "Pacholder High Yield Fund, Inc."
            	  },
            	  {
            	    "Symbol": "PAI",
            	    "Name": "Pacific American Income Shares, Inc."
            	  },
            	  {
            	    "Symbol": "PACB",
            	    "Name": "Pacific Biosciences of California, Inc."
            	  },
            	  {
            	    "Symbol": "PBM",
            	    "Name": "Pacific Booker Minerals Inc"
            	  },
            	  {
            	    "Symbol": "ROYT",
            	    "Name": "Pacific Coast Oil Trust"
            	  },
            	  {
            	    "Symbol": "PCBK",
            	    "Name": "Pacific Continental Corporation (Ore)"
            	  },
            	  {
            	    "Symbol": "PACD",
            	    "Name": "Pacific Drilling S.A."
            	  },
            	  {
            	    "Symbol": "PEIX",
            	    "Name": "Pacific Ethanol, Inc."
            	  },
            	  {
            	    "Symbol": "PCG",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^A",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^B",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^C",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^D",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^E",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^G",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^H",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PCG^I",
            	    "Name": "Pacific Gas & Electric Co."
            	  },
            	  {
            	    "Symbol": "PMBC",
            	    "Name": "Pacific Mercantile Bancorp"
            	  },
            	  {
            	    "Symbol": "PPBI",
            	    "Name": "Pacific Premier Bancorp Inc"
            	  },
            	  {
            	    "Symbol": "PAAC",
            	    "Name": "Pacific Special Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "PAACR",
            	    "Name": "Pacific Special Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "PAACU",
            	    "Name": "Pacific Special Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "PAACW",
            	    "Name": "Pacific Special Acquisition Corp."
            	  },
            	  {
            	    "Symbol": "PSUN",
            	    "Name": "Pacific Sunwear of California, Inc."
            	  },
            	  {
            	    "Symbol": "PCRX",
            	    "Name": "Pacira Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "PKG",
            	    "Name": "Packaging Corporation of America"
            	  },
            	  {
            	    "Symbol": "PTIE",
            	    "Name": "Pain Therapeutics"
            	  },
            	  {
            	    "Symbol": "PTN",
            	    "Name": "Palatin Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "PANW",
            	    "Name": "Palo Alto Networks, Inc."
            	  },
            	  {
            	    "Symbol": "PAM",
            	    "Name": "Pampa Energia S.A."
            	  },
            	  {
            	    "Symbol": "PAAS",
            	    "Name": "Pan American Silver Corp."
            	  },
            	  {
            	    "Symbol": "P",
            	    "Name": "Pandora Media, Inc."
            	  },
            	  {
            	    "Symbol": "PNRA",
            	    "Name": "Panera Bread Company"
            	  },
            	  {
            	    "Symbol": "PANL",
            	    "Name": "Pangaea Logistics Solutions Ltd."
            	  },
            	  {
            	    "Symbol": "PHX",
            	    "Name": "Panhandle Royalty Company"
            	  },
            	  {
            	    "Symbol": "PZZA",
            	    "Name": "Papa John&#39;S International, Inc."
            	  },
            	  {
            	    "Symbol": "FRSH",
            	    "Name": "Papa Murphy&#39;s Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PARR",
            	    "Name": "Par Pacific Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PRGN",
            	    "Name": "Paragon Shipping Inc."
            	  },
            	  {
            	    "Symbol": "PRGNL",
            	    "Name": "Paragon Shipping Inc."
            	  },
            	  {
            	    "Symbol": "PZG",
            	    "Name": "Paramount Gold Nevada Corp."
            	  },
            	  {
            	    "Symbol": "PGRE",
            	    "Name": "Paramount Group, Inc."
            	  },
            	  {
            	    "Symbol": "PRTK",
            	    "Name": "Paratek Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "PCYG",
            	    "Name": "Park City Group, Inc."
            	  },
            	  {
            	    "Symbol": "PKE",
            	    "Name": "Park Electrochemical Corporation"
            	  },
            	  {
            	    "Symbol": "PRK",
            	    "Name": "Park National Corporation"
            	  },
            	  {
            	    "Symbol": "PSTB",
            	    "Name": "Park Sterling Corporation"
            	  },
            	  {
            	    "Symbol": "PKOH",
            	    "Name": "Park-Ohio Holdings Corp."
            	  },
            	  {
            	    "Symbol": "PKBK",
            	    "Name": "Parke Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PKD",
            	    "Name": "Parker Drilling Company"
            	  },
            	  {
            	    "Symbol": "PH",
            	    "Name": "Parker-Hannifin Corporation"
            	  },
            	  {
            	    "Symbol": "PRKR",
            	    "Name": "ParkerVision, Inc."
            	  },
            	  {
            	    "Symbol": "PKY",
            	    "Name": "Parkway Properties, Inc."
            	  },
            	  {
            	    "Symbol": "PARN",
            	    "Name": "Parnell Pharmaceuticals Holdings Ltd"
            	  },
            	  {
            	    "Symbol": "PE",
            	    "Name": "Parsley Energy, Inc."
            	  },
            	  {
            	    "Symbol": "PTNR",
            	    "Name": "Partner Communications Company Ltd."
            	  },
            	  {
            	    "Symbol": "PRE^D",
            	    "Name": "PartnerRe Ltd."
            	  },
            	  {
            	    "Symbol": "PRE^E",
            	    "Name": "PartnerRe Ltd."
            	  },
            	  {
            	    "Symbol": "PRE^F",
            	    "Name": "PartnerRe Ltd."
            	  },
            	  {
            	    "Symbol": "PRTY",
            	    "Name": "Party City Holdco Inc."
            	  },
            	  {
            	    "Symbol": "PBHC",
            	    "Name": "Pathfinder Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PATK",
            	    "Name": "Patrick Industries, Inc."
            	  },
            	  {
            	    "Symbol": "PNBK",
            	    "Name": "Patriot National Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "PN",
            	    "Name": "Patriot National, Inc."
            	  },
            	  {
            	    "Symbol": "PATI",
            	    "Name": "Patriot Transportation Holding, Inc."
            	  },
            	  {
            	    "Symbol": "PEGI",
            	    "Name": "Pattern Energy Group Inc."
            	  },
            	  {
            	    "Symbol": "PDCO",
            	    "Name": "Patterson Companies, Inc."
            	  },
            	  {
            	    "Symbol": "PTEN",
            	    "Name": "Patterson-UTI Energy, Inc."
            	  },
            	  {
            	    "Symbol": "PYPL",
            	    "Name": "PayPal Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PAYX",
            	    "Name": "Paychex, Inc."
            	  },
            	  {
            	    "Symbol": "PAYC",
            	    "Name": "Paycom Software, Inc."
            	  },
            	  {
            	    "Symbol": "PCTY",
            	    "Name": "Paylocity Holding Corporation"
            	  },
            	  {
            	    "Symbol": "PYDS",
            	    "Name": "Payment Data Systems, Inc."
            	  },
            	  {
            	    "Symbol": "BTU",
            	    "Name": "Peabody Energy Corporation"
            	  },
            	  {
            	    "Symbol": "SKIS",
            	    "Name": "Peak Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "PGC",
            	    "Name": "Peapack-Gladstone Financial Corporation"
            	  },
            	  {
            	    "Symbol": "PSO",
            	    "Name": "Pearson, Plc"
            	  },
            	  {
            	    "Symbol": "PEB",
            	    "Name": "Pebblebrook Hotel Trust"
            	  },
            	  {
            	    "Symbol": "PEB^B",
            	    "Name": "Pebblebrook Hotel Trust"
            	  },
            	  {
            	    "Symbol": "PEB^C",
            	    "Name": "Pebblebrook Hotel Trust"
            	  },
            	  {
            	    "Symbol": "PED",
            	    "Name": "Pedevco Corp."
            	  },
            	  {
            	    "Symbol": "PEGA",
            	    "Name": "Pegasystems Inc."
            	  },
            	  {
            	    "Symbol": "PBA",
            	    "Name": "Pembina Pipeline Corp."
            	  },
            	  {
            	    "Symbol": "PCO",
            	    "Name": "Pendrell Corporation"
            	  },
            	  {
            	    "Symbol": "PGH",
            	    "Name": "Pengrowth Energy Corporation"
            	  },
            	  {
            	    "Symbol": "PENN",
            	    "Name": "Penn National Gaming, Inc."
            	  },
            	  {
            	    "Symbol": "PWE",
            	    "Name": "Penn West Petroleum Ltd"
            	  },
            	  {
            	    "Symbol": "PTXP",
            	    "Name": "PennTex Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "PFLT",
            	    "Name": "PennantPark Floating Rate Capital Ltd."
            	  },
            	  {
            	    "Symbol": "PNNT",
            	    "Name": "PennantPark Investment Corporation"
            	  },
            	  {
            	    "Symbol": "PNTA",
            	    "Name": "PennantPark Investment Corporation"
            	  },
            	  {
            	    "Symbol": "PWOD",
            	    "Name": "Penns Woods Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PEI",
            	    "Name": "Pennsylvania Real Estate Investment Trust"
            	  },
            	  {
            	    "Symbol": "PEI^A",
            	    "Name": "Pennsylvania Real Estate Investment Trust"
            	  },
            	  {
            	    "Symbol": "PEI^B",
            	    "Name": "Pennsylvania Real Estate Investment Trust"
            	  },
            	  {
            	    "Symbol": "PFSI",
            	    "Name": "PennyMac Financial Services, Inc."
            	  },
            	  {
            	    "Symbol": "PMT",
            	    "Name": "PennyMac Mortgage Investment Trust"
            	  },
            	  {
            	    "Symbol": "PAG",
            	    "Name": "Penske Automotive Group, Inc."
            	  },
            	  {
            	    "Symbol": "PNR",
            	    "Name": "Pentair plc."
            	  },
            	  {
            	    "Symbol": "PEN",
            	    "Name": "Penumbra, Inc."
            	  },
            	  {
            	    "Symbol": "PBCT",
            	    "Name": "People&#39;s United Financial, Inc."
            	  },
            	  {
            	    "Symbol": "PUB",
            	    "Name": "People&#39;s Utah Bancorp"
            	  },
            	  {
            	    "Symbol": "PEBO",
            	    "Name": "Peoples Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "PEBK",
            	    "Name": "Peoples Bancorp of North Carolina, Inc."
            	  },
            	  {
            	    "Symbol": "PFBX",
            	    "Name": "Peoples Financial Corporation"
            	  },
            	  {
            	    "Symbol": "PFIS",
            	    "Name": "Peoples Financial Services Corp."
            	  },
            	  {
            	    "Symbol": "PEP",
            	    "Name": "Pepsico, Inc."
            	  },
            	  {
            	    "Symbol": "PRCP",
            	    "Name": "Perceptron, Inc."
            	  },
            	  {
            	    "Symbol": "PPHM",
            	    "Name": "Peregrine Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "PPHMP",
            	    "Name": "Peregrine Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "PRFT",
            	    "Name": "Perficient, Inc."
            	  },
            	  {
            	    "Symbol": "PFGC",
            	    "Name": "Performance Food Group Company"
            	  },
            	  {
            	    "Symbol": "PSG",
            	    "Name": "Performance Sports Group Ltd"
            	  },
            	  {
            	    "Symbol": "PFMT",
            	    "Name": "Performant Financial Corporation"
            	  },
            	  {
            	    "Symbol": "PERF",
            	    "Name": "Perfumania Holdings, Inc"
            	  },
            	  {
            	    "Symbol": "PERI",
            	    "Name": "Perion Network Ltd"
            	  },
            	  {
            	    "Symbol": "PKI",
            	    "Name": "PerkinElmer, Inc."
            	  },
            	  {
            	    "Symbol": "PESI",
            	    "Name": "Perma-Fix Environmental Services, Inc."
            	  },
            	  {
            	    "Symbol": "PBT",
            	    "Name": "Permian Basin Royalty Trust"
            	  },
            	  {
            	    "Symbol": "PTX",
            	    "Name": "Pernix Therapeutics Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PRGO",
            	    "Name": "Perrigo Company"
            	  },
            	  {
            	    "Symbol": "PERY",
            	    "Name": "Perry Ellis International Inc."
            	  },
            	  {
            	    "Symbol": "PGLC",
            	    "Name": "Pershing Gold Corporation"
            	  },
            	  {
            	    "Symbol": "PETS",
            	    "Name": "PetMed Express, Inc."
            	  },
            	  {
            	    "Symbol": "PTR",
            	    "Name": "PetroChina Company Limited"
            	  },
            	  {
            	    "Symbol": "PZE",
            	    "Name": "Petrobras Argentina S.A."
            	  },
            	  {
            	    "Symbol": "PBR",
            	    "Name": "Petroleo Brasileiro S.A.- Petrobras"
            	  },
            	  {
            	    "Symbol": "PBR.A",
            	    "Name": "Petroleo Brasileiro S.A.- Petrobras"
            	  },
            	  {
            	    "Symbol": "PQ",
            	    "Name": "Petroquest Energy Inc"
            	  },
            	  {
            	    "Symbol": "PFNX",
            	    "Name": "Pfenex Inc."
            	  },
            	  {
            	    "Symbol": "PFE",
            	    "Name": "Pfizer, Inc."
            	  },
            	  {
            	    "Symbol": "PIP",
            	    "Name": "PharmAthene, Inc"
            	  },
            	  {
            	    "Symbol": "PMC",
            	    "Name": "Pharmerica Corporation"
            	  },
            	  {
            	    "Symbol": "PAHC",
            	    "Name": "Phibro Animal Health Corporation"
            	  },
            	  {
            	    "Symbol": "PM",
            	    "Name": "Philip Morris International Inc"
            	  },
            	  {
            	    "Symbol": "PHI",
            	    "Name": "Philippine Long Distance Telephone Company"
            	  },
            	  {
            	    "Symbol": "PSX",
            	    "Name": "Phillips 66"
            	  },
            	  {
            	    "Symbol": "PSXP",
            	    "Name": "Phillips 66 Partners LP"
            	  },
            	  {
            	    "Symbol": "PFX",
            	    "Name": "Phoenix Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "PNX",
            	    "Name": "Phoenix Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "FENG",
            	    "Name": "Phoenix New Media Limited"
            	  },
            	  {
            	    "Symbol": "PHMD",
            	    "Name": "PhotoMedex, Inc."
            	  },
            	  {
            	    "Symbol": "PLAB",
            	    "Name": "Photronics, Inc."
            	  },
            	  {
            	    "Symbol": "DOC",
            	    "Name": "Physicians Realty Trust"
            	  },
            	  {
            	    "Symbol": "PNY",
            	    "Name": "Piedmont Natural Gas Company, Inc."
            	  },
            	  {
            	    "Symbol": "PDM",
            	    "Name": "Piedmont Office Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "PIR",
            	    "Name": "Pier 1 Imports, Inc."
            	  },
            	  {
            	    "Symbol": "PIRS",
            	    "Name": "Pieris Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "PPC",
            	    "Name": "Pilgrim&#39;s Pride Corporation"
            	  },
            	  {
            	    "Symbol": "PCK",
            	    "Name": "Pimco California Municipal Income Fund II"
            	  },
            	  {
            	    "Symbol": "PTY",
            	    "Name": "Pimco Corporate & Income Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "PCN",
            	    "Name": "Pimco Corporate & Income Stategy Fund"
            	  },
            	  {
            	    "Symbol": "PGP",
            	    "Name": "Pimco Global Stocksplus & Income Fund"
            	  },
            	  {
            	    "Symbol": "PHK",
            	    "Name": "Pimco High Income Fund"
            	  },
            	  {
            	    "Symbol": "PKO",
            	    "Name": "Pimco Income Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "PML",
            	    "Name": "Pimco Municipal Income Fund II"
            	  },
            	  {
            	    "Symbol": "PNI",
            	    "Name": "Pimco New York Municipal Income Fund II"
            	  },
            	  {
            	    "Symbol": "PME",
            	    "Name": "Pingtan Marine Enterprise Ltd."
            	  },
            	  {
            	    "Symbol": "PNK",
            	    "Name": "Pinnacle Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "PNFP",
            	    "Name": "Pinnacle Financial Partners, Inc."
            	  },
            	  {
            	    "Symbol": "PF",
            	    "Name": "Pinnacle Foods, Inc."
            	  },
            	  {
            	    "Symbol": "PNW",
            	    "Name": "Pinnacle West Capital Corporation"
            	  },
            	  {
            	    "Symbol": "HNW",
            	    "Name": "Pioneer Diversified High Income Trust"
            	  },
            	  {
            	    "Symbol": "PES",
            	    "Name": "Pioneer Energy Services Corp."
            	  },
            	  {
            	    "Symbol": "PHD",
            	    "Name": "Pioneer Floating Rate Trust"
            	  },
            	  {
            	    "Symbol": "PHT",
            	    "Name": "Pioneer High Income Trust"
            	  },
            	  {
            	    "Symbol": "MAV",
            	    "Name": "Pioneer Municipal High Income Advantage Trust"
            	  },
            	  {
            	    "Symbol": "MHI",
            	    "Name": "Pioneer Municipal High Income Trust"
            	  },
            	  {
            	    "Symbol": "PXD",
            	    "Name": "Pioneer Natural Resources Company"
            	  },
            	  {
            	    "Symbol": "PPSI",
            	    "Name": "Pioneer Power Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "PJC",
            	    "Name": "Piper Jaffray Companies"
            	  },
            	  {
            	    "Symbol": "PBI",
            	    "Name": "Pitney Bowes Inc."
            	  },
            	  {
            	    "Symbol": "PBI^B",
            	    "Name": "Pitney Bowes Inc."
            	  },
            	  {
            	    "Symbol": "PXLW",
            	    "Name": "Pixelworks, Inc."
            	  },
            	  {
            	    "Symbol": "PAA",
            	    "Name": "Plains All American Pipeline, L.P."
            	  },
            	  {
            	    "Symbol": "PAGP",
            	    "Name": "Plains Group Holdings, L.P."
            	  },
            	  {
            	    "Symbol": "PLNT",
            	    "Name": "Planet Fitness, Inc."
            	  },
            	  {
            	    "Symbol": "PLPM",
            	    "Name": "Planet Payment, Inc."
            	  },
            	  {
            	    "Symbol": "PLT",
            	    "Name": "Plantronics, Inc."
            	  },
            	  {
            	    "Symbol": "PAH",
            	    "Name": "Platform Specialty Products Corporation"
            	  },
            	  {
            	    "Symbol": "PLG",
            	    "Name": "Platinum Group Metals Ltd."
            	  },
            	  {
            	    "Symbol": "PLXS",
            	    "Name": "Plexus Corp."
            	  },
            	  {
            	    "Symbol": "PLUG",
            	    "Name": "Plug Power, Inc."
            	  },
            	  {
            	    "Symbol": "PLBC",
            	    "Name": "Plumas Bancorp"
            	  },
            	  {
            	    "Symbol": "PSTI",
            	    "Name": "Pluristem Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "PGEM",
            	    "Name": "Ply Gem Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PBSK",
            	    "Name": "Poage Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "PNTR",
            	    "Name": "Pointer Telocation Ltd."
            	  },
            	  {
            	    "Symbol": "PCOM",
            	    "Name": "Points International, Ltd."
            	  },
            	  {
            	    "Symbol": "PII",
            	    "Name": "Polaris Industries Inc."
            	  },
            	  {
            	    "Symbol": "POL",
            	    "Name": "PolyOne Corporation"
            	  },
            	  {
            	    "Symbol": "PLCM",
            	    "Name": "Polycom, Inc."
            	  },
            	  {
            	    "Symbol": "PLM",
            	    "Name": "Polymet Mining Corp."
            	  },
            	  {
            	    "Symbol": "POOL",
            	    "Name": "Pool Corporation"
            	  },
            	  {
            	    "Symbol": "POPE",
            	    "Name": "Pope Resources"
            	  },
            	  {
            	    "Symbol": "PLKI",
            	    "Name": "Popeyes Louisiana Kitchen, Inc."
            	  },
            	  {
            	    "Symbol": "BPOP",
            	    "Name": "Popular, Inc."
            	  },
            	  {
            	    "Symbol": "BPOPM",
            	    "Name": "Popular, Inc."
            	  },
            	  {
            	    "Symbol": "BPOPN",
            	    "Name": "Popular, Inc."
            	  },
            	  {
            	    "Symbol": "PBIB",
            	    "Name": "Porter Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "POR",
            	    "Name": "Portland General Electric Company"
            	  },
            	  {
            	    "Symbol": "PTLA",
            	    "Name": "Portola Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "POST",
            	    "Name": "Post Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PPS",
            	    "Name": "Post Properties, Inc."
            	  },
            	  {
            	    "Symbol": "PPS^A",
            	    "Name": "Post Properties, Inc."
            	  },
            	  {
            	    "Symbol": "POT",
            	    "Name": "Potash Corporation of Saskatchewan Inc."
            	  },
            	  {
            	    "Symbol": "PBPB",
            	    "Name": "Potbelly Corporation"
            	  },
            	  {
            	    "Symbol": "PCH",
            	    "Name": "Potlatch Corporation"
            	  },
            	  {
            	    "Symbol": "POWL",
            	    "Name": "Powell Industries, Inc."
            	  },
            	  {
            	    "Symbol": "POWI",
            	    "Name": "Power Integrations, Inc."
            	  },
            	  {
            	    "Symbol": "PW",
            	    "Name": "Power REIT"
            	  },
            	  {
            	    "Symbol": "PW^A",
            	    "Name": "Power REIT"
            	  },
            	  {
            	    "Symbol": "PSIX",
            	    "Name": "Power Solutions International, Inc."
            	  },
            	  {
            	    "Symbol": "POWR",
            	    "Name": "PowerSecure International, Inc"
            	  },
            	  {
            	    "Symbol": "PDBC",
            	    "Name": "PowerShares DB Optimum Yield Diversified Commodity Strategy Po"
            	  },
            	  {
            	    "Symbol": "DWIN",
            	    "Name": "PowerShares DWA Tactical Multi-Asset Income Portfolio"
            	  },
            	  {
            	    "Symbol": "DWTR",
            	    "Name": "PowerShares DWA Tactical Sector Rotation Portfolio"
            	  },
            	  {
            	    "Symbol": "IDLB",
            	    "Name": "PowerShares FTSE International Low Beta Equal Weight Portfolio"
            	  },
            	  {
            	    "Symbol": "PRFZ",
            	    "Name": "PowerShares FTSE RAFI US 1500 Small-Mid Portfolio"
            	  },
            	  {
            	    "Symbol": "PAGG",
            	    "Name": "PowerShares Global Agriculture Portfolio"
            	  },
            	  {
            	    "Symbol": "PSAU",
            	    "Name": "PowerShares Global Gold & Precious Metals Portfolio"
            	  },
            	  {
            	    "Symbol": "IPKW",
            	    "Name": "PowerShares International BuyBack Achievers Portfolio"
            	  },
            	  {
            	    "Symbol": "LDRI",
            	    "Name": "PowerShares LadderRite 0-5 Year Corporate Bond Portfolio"
            	  },
            	  {
            	    "Symbol": "LALT",
            	    "Name": "PowerShares Multi-Strategy Alternative Portfolio"
            	  },
            	  {
            	    "Symbol": "PNQI",
            	    "Name": "PowerShares Nasdaq Internet Portfolio"
            	  },
            	  {
            	    "Symbol": "QQQ",
            	    "Name": "PowerShares QQQ Trust, Series 1"
            	  },
            	  {
            	    "Symbol": "USLB",
            	    "Name": "PowerShares Russell 1000 Low Beta Equal Weight Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCD",
            	    "Name": "PowerShares S&P SmallCap Consumer Discretionary Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCC",
            	    "Name": "PowerShares S&P SmallCap Consumer Staples Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCE",
            	    "Name": "PowerShares S&P SmallCap Energy Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCF",
            	    "Name": "PowerShares S&P SmallCap Financials Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCH",
            	    "Name": "PowerShares S&P SmallCap Health Care Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCI",
            	    "Name": "PowerShares S&P SmallCap Industrials Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCT",
            	    "Name": "PowerShares S&P SmallCap Information Technology Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCM",
            	    "Name": "PowerShares S&P SmallCap Materials Portfolio"
            	  },
            	  {
            	    "Symbol": "PSCU",
            	    "Name": "PowerShares S&P SmallCap Utilities Portfolio"
            	  },
            	  {
            	    "Symbol": "PRAN",
            	    "Name": "Prana Biotechnology Ltd"
            	  },
            	  {
            	    "Symbol": "PX",
            	    "Name": "Praxair, Inc."
            	  },
            	  {
            	    "Symbol": "PDS",
            	    "Name": "Precision Drilling Corporation"
            	  },
            	  {
            	    "Symbol": "APTS",
            	    "Name": "Preferred Apartment Communities, Inc."
            	  },
            	  {
            	    "Symbol": "PFBC",
            	    "Name": "Preferred Bank"
            	  },
            	  {
            	    "Symbol": "PJS",
            	    "Name": "Preferred Plus Trust Ser QWS 2 Tr Ctf"
            	  },
            	  {
            	    "Symbol": "PLPC",
            	    "Name": "Preformed Line Products Company"
            	  },
            	  {
            	    "Symbol": "PFBI",
            	    "Name": "Premier Financial Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PINC",
            	    "Name": "Premier, Inc."
            	  },
            	  {
            	    "Symbol": "LENS",
            	    "Name": "Presbia PLC"
            	  },
            	  {
            	    "Symbol": "PGND",
            	    "Name": "Press Ganey Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PBH",
            	    "Name": "Prestige Brand Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PVG",
            	    "Name": "Pretium Resources, Inc."
            	  },
            	  {
            	    "Symbol": "PSMT",
            	    "Name": "PriceSmart, Inc."
            	  },
            	  {
            	    "Symbol": "PBMD",
            	    "Name": "Prima BioMed Ltd"
            	  },
            	  {
            	    "Symbol": "PNRG",
            	    "Name": "PrimeEnergy Corporation"
            	  },
            	  {
            	    "Symbol": "PRI",
            	    "Name": "Primerica, Inc."
            	  },
            	  {
            	    "Symbol": "PPP",
            	    "Name": "Primero Mining Corp"
            	  },
            	  {
            	    "Symbol": "PRMW",
            	    "Name": "Primo Water Corporation"
            	  },
            	  {
            	    "Symbol": "PRIM",
            	    "Name": "Primoris Services Corporation"
            	  },
            	  {
            	    "Symbol": "PFG",
            	    "Name": "Principal Financial Group Inc"
            	  },
            	  {
            	    "Symbol": "PSET",
            	    "Name": "Principal Price Setters Index ETF"
            	  },
            	  {
            	    "Symbol": "PGZ",
            	    "Name": "Principal Real Estate Income Fund"
            	  },
            	  {
            	    "Symbol": "PY",
            	    "Name": "Principal Shareholder Yield Index ETF"
            	  },
            	  {
            	    "Symbol": "PRZM",
            	    "Name": "Prism Technologies Group, Inc."
            	  },
            	  {
            	    "Symbol": "PVTB",
            	    "Name": "PrivateBancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PVTBP",
            	    "Name": "PrivateBancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PVTD",
            	    "Name": "PrivateBancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PDEX",
            	    "Name": "Pro-Dex, Inc."
            	  },
            	  {
            	    "Symbol": "PRA",
            	    "Name": "ProAssurance Corporation"
            	  },
            	  {
            	    "Symbol": "PLD",
            	    "Name": "ProLogis, Inc."
            	  },
            	  {
            	    "Symbol": "DNAI",
            	    "Name": "ProNAi Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "PRPH",
            	    "Name": "ProPhase Labs, Inc."
            	  },
            	  {
            	    "Symbol": "PRQR",
            	    "Name": "ProQR Therapeutics N.V."
            	  },
            	  {
            	    "Symbol": "BIB",
            	    "Name": "ProShares Ultra Nasdaq Biotechnology"
            	  },
            	  {
            	    "Symbol": "TQQQ",
            	    "Name": "ProShares UltraPro QQQ"
            	  },
            	  {
            	    "Symbol": "ZBIO",
            	    "Name": "ProShares UltraPro Short NASDAQ Biotechnology"
            	  },
            	  {
            	    "Symbol": "SQQQ",
            	    "Name": "ProShares UltraPro Short QQQ"
            	  },
            	  {
            	    "Symbol": "BIS",
            	    "Name": "ProShares UltraShort Nasdaq Biotechnology"
            	  },
            	  {
            	    "Symbol": "PG",
            	    "Name": "Procter & Gamble Company (The)"
            	  },
            	  {
            	    "Symbol": "IPDN",
            	    "Name": "Professional Diversity Network, Inc."
            	  },
            	  {
            	    "Symbol": "PFIE",
            	    "Name": "Profire Energy, Inc."
            	  },
            	  {
            	    "Symbol": "PGNX",
            	    "Name": "Progenics Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "PRGS",
            	    "Name": "Progress Software Corporation"
            	  },
            	  {
            	    "Symbol": "PGR",
            	    "Name": "Progressive Corporation (The)"
            	  },
            	  {
            	    "Symbol": "BIN",
            	    "Name": "Progressive Waste Solutions Ltd."
            	  },
            	  {
            	    "Symbol": "PFPT",
            	    "Name": "Proofpoint, Inc."
            	  },
            	  {
            	    "Symbol": "UBIO",
            	    "Name": "Proshares UltraPro Nasdaq Biotechnology"
            	  },
            	  {
            	    "Symbol": "PBB",
            	    "Name": "Prospect Capital Corporation"
            	  },
            	  {
            	    "Symbol": "PSEC",
            	    "Name": "Prospect Capital Corporation"
            	  },
            	  {
            	    "Symbol": "PB",
            	    "Name": "Prosperity Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "PLX",
            	    "Name": "Protalix BioTherapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "PL^C",
            	    "Name": "Protective Life Corporation"
            	  },
            	  {
            	    "Symbol": "PL^E",
            	    "Name": "Protective Life Corporation"
            	  },
            	  {
            	    "Symbol": "PRTO",
            	    "Name": "Proteon Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "PTI",
            	    "Name": "Proteostasis Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "PRTA",
            	    "Name": "Prothena Corporation plc"
            	  },
            	  {
            	    "Symbol": "PRLB",
            	    "Name": "Proto Labs, Inc."
            	  },
            	  {
            	    "Symbol": "PVCT",
            	    "Name": "Provectus Biopharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "PVCT.WS",
            	    "Name": "Provectus Biopharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "PWX",
            	    "Name": "Providence and Worcester Railroad Company"
            	  },
            	  {
            	    "Symbol": "PVBC",
            	    "Name": "Provident Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PROV",
            	    "Name": "Provident Financial Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "PFS",
            	    "Name": "Provident Financial Services, Inc"
            	  },
            	  {
            	    "Symbol": "PBIP",
            	    "Name": "Prudential Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "PFK",
            	    "Name": "Prudential Financial, Inc."
            	  },
            	  {
            	    "Symbol": "PJH",
            	    "Name": "Prudential Financial, Inc."
            	  },
            	  {
            	    "Symbol": "PRH",
            	    "Name": "Prudential Financial, Inc."
            	  },
            	  {
            	    "Symbol": "PRU",
            	    "Name": "Prudential Financial, Inc."
            	  },
            	  {
            	    "Symbol": "GHY",
            	    "Name": "Prudential Global Short Duration High Yield Fund, Inc."
            	  },
            	  {
            	    "Symbol": "PUK",
            	    "Name": "Prudential Public Limited Company"
            	  },
            	  {
            	    "Symbol": "PUK^",
            	    "Name": "Prudential Public Limited Company"
            	  },
            	  {
            	    "Symbol": "PUK^A",
            	    "Name": "Prudential Public Limited Company"
            	  },
            	  {
            	    "Symbol": "ISD",
            	    "Name": "Prudential Short Duration High Yield Fund, Inc."
            	  },
            	  {
            	    "Symbol": "PMD",
            	    "Name": "Psychemedics Corporation"
            	  },
            	  {
            	    "Symbol": "PEG",
            	    "Name": "Public Service Enterprise Group Incorporated"
            	  },
            	  {
            	    "Symbol": "PSA",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^A",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^B",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^Q.CL",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^R",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^S",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^T",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^U",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^V",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^W",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^X",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^Y",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PSA^Z",
            	    "Name": "Public Storage"
            	  },
            	  {
            	    "Symbol": "PULB",
            	    "Name": "Pulaski Financial Corp."
            	  },
            	  {
            	    "Symbol": "PULM",
            	    "Name": "Pulmatrix, Inc."
            	  },
            	  {
            	    "Symbol": "PHM",
            	    "Name": "PulteGroup, Inc."
            	  },
            	  {
            	    "Symbol": "PBYI",
            	    "Name": "Puma Biotechnology Inc"
            	  },
            	  {
            	    "Symbol": "PCYO",
            	    "Name": "Pure Cycle Corporation"
            	  },
            	  {
            	    "Symbol": "PCF",
            	    "Name": "Putnam High Income Bond Fund"
            	  },
            	  {
            	    "Symbol": "PMM",
            	    "Name": "Putnam Managed Municipal Income Trust"
            	  },
            	  {
            	    "Symbol": "PIM",
            	    "Name": "Putnam Master Intermediate Income Trust"
            	  },
            	  {
            	    "Symbol": "PMO",
            	    "Name": "Putnam Municipal Opportunities Trust"
            	  },
            	  {
            	    "Symbol": "PPT",
            	    "Name": "Putnam Premier Income Trust"
            	  },
            	  {
            	    "Symbol": "PXS",
            	    "Name": "Pyxis Tankers Inc."
            	  },
            	  {
            	    "Symbol": "PZN",
            	    "Name": "Pzena Investment Management Inc"
            	  },
            	  {
            	    "Symbol": "QTWO",
            	    "Name": "Q2 Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "QADA",
            	    "Name": "QAD Inc."
            	  },
            	  {
            	    "Symbol": "QADB",
            	    "Name": "QAD Inc."
            	  },
            	  {
            	    "Symbol": "QCRH",
            	    "Name": "QCR Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "QEP",
            	    "Name": "QEP Resources, Inc."
            	  },
            	  {
            	    "Symbol": "QIWI",
            	    "Name": "QIWI plc"
            	  },
            	  {
            	    "Symbol": "QKLS",
            	    "Name": "QKL Stores, Inc."
            	  },
            	  {
            	    "Symbol": "QLTI",
            	    "Name": "QLT Inc."
            	  },
            	  {
            	    "Symbol": "QLGC",
            	    "Name": "QLogic Corporation"
            	  },
            	  {
            	    "Symbol": "QTS",
            	    "Name": "QTS Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "QCOM",
            	    "Name": "QUALCOMM Incorporated"
            	  },
            	  {
            	    "Symbol": "QGEN",
            	    "Name": "Qiagen N.V."
            	  },
            	  {
            	    "Symbol": "QIHU",
            	    "Name": "Qihoo 360 Technology Co. Ltd."
            	  },
            	  {
            	    "Symbol": "QLIK",
            	    "Name": "Qlik Technologies Inc."
            	  },
            	  {
            	    "Symbol": "QRVO",
            	    "Name": "Qorvo, Inc."
            	  },
            	  {
            	    "Symbol": "QUAD",
            	    "Name": "Quad Graphics, Inc"
            	  },
            	  {
            	    "Symbol": "KWR",
            	    "Name": "Quaker Chemical Corporation"
            	  },
            	  {
            	    "Symbol": "QSII",
            	    "Name": "Quality Systems, Inc."
            	  },
            	  {
            	    "Symbol": "QBAK",
            	    "Name": "Qualstar Corporation"
            	  },
            	  {
            	    "Symbol": "QLYS",
            	    "Name": "Qualys, Inc."
            	  },
            	  {
            	    "Symbol": "NX",
            	    "Name": "Quanex Building Products Corporation"
            	  },
            	  {
            	    "Symbol": "PWR",
            	    "Name": "Quanta Services, Inc."
            	  },
            	  {
            	    "Symbol": "QTM",
            	    "Name": "Quantum Corporation"
            	  },
            	  {
            	    "Symbol": "QTWW",
            	    "Name": "Quantum Fuel Systems Technologies Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "DGX",
            	    "Name": "Quest Diagnostics Incorporated"
            	  },
            	  {
            	    "Symbol": "QRHC",
            	    "Name": "Quest Resource Holding Corporation."
            	  },
            	  {
            	    "Symbol": "STR",
            	    "Name": "Questar Corporation"
            	  },
            	  {
            	    "Symbol": "QUIK",
            	    "Name": "QuickLogic Corporation"
            	  },
            	  {
            	    "Symbol": "QDEL",
            	    "Name": "Quidel Corporation"
            	  },
            	  {
            	    "Symbol": "QNST",
            	    "Name": "QuinStreet, Inc."
            	  },
            	  {
            	    "Symbol": "QPAC",
            	    "Name": "Quinpario Acquisition Corp. 2"
            	  },
            	  {
            	    "Symbol": "QPACU",
            	    "Name": "Quinpario Acquisition Corp. 2"
            	  },
            	  {
            	    "Symbol": "QPACW",
            	    "Name": "Quinpario Acquisition Corp. 2"
            	  },
            	  {
            	    "Symbol": "Q",
            	    "Name": "Quintiles Transitional Holdings Inc."
            	  },
            	  {
            	    "Symbol": "QUMU",
            	    "Name": "Qumu Corporation"
            	  },
            	  {
            	    "Symbol": "QUNR",
            	    "Name": "Qunar Cayman Islands Limited"
            	  },
            	  {
            	    "Symbol": "QTNT",
            	    "Name": "Quotient Limited"
            	  },
            	  {
            	    "Symbol": "QUOT",
            	    "Name": "Quotient Technology Inc."
            	  },
            	  {
            	    "Symbol": "CTAA",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTQ",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTU",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTV",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTW",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTX",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTY",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "CTZ",
            	    "Name": "Qwest Corporation"
            	  },
            	  {
            	    "Symbol": "RRD",
            	    "Name": "R.R. Donnelley & Sons Company"
            	  },
            	  {
            	    "Symbol": "RAS",
            	    "Name": "RAIT Financial Trust"
            	  },
            	  {
            	    "Symbol": "RAS^A",
            	    "Name": "RAIT Financial Trust"
            	  },
            	  {
            	    "Symbol": "RAS^B",
            	    "Name": "RAIT Financial Trust"
            	  },
            	  {
            	    "Symbol": "RAS^C",
            	    "Name": "RAIT Financial Trust"
            	  },
            	  {
            	    "Symbol": "RFT",
            	    "Name": "RAIT Financial Trust"
            	  },
            	  {
            	    "Symbol": "RFTA",
            	    "Name": "RAIT Financial Trust"
            	  },
            	  {
            	    "Symbol": "ROLL",
            	    "Name": "RBC Bearings Incorporated"
            	  },
            	  {
            	    "Symbol": "RICK",
            	    "Name": "RCI Hospitality Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "RCMT",
            	    "Name": "RCM Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "RMAX",
            	    "Name": "RE\/MAX Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "RGNX",
            	    "Name": "REGENXBIO Inc."
            	  },
            	  {
            	    "Symbol": "RWC",
            	    "Name": "RELM Wireless Corporation"
            	  },
            	  {
            	    "Symbol": "RENX",
            	    "Name": "RELX N.V."
            	  },
            	  {
            	    "Symbol": "RELX",
            	    "Name": "RELX PLC"
            	  },
            	  {
            	    "Symbol": "RCG",
            	    "Name": "RENN Fund, Inc."
            	  },
            	  {
            	    "Symbol": "REX",
            	    "Name": "REX American Resources Corporation"
            	  },
            	  {
            	    "Symbol": "RFIL",
            	    "Name": "RF Industries, Ltd."
            	  },
            	  {
            	    "Symbol": "RGCO",
            	    "Name": "RGC Resources Inc."
            	  },
            	  {
            	    "Symbol": "RITT",
            	    "Name": "RIT Technologies Ltd."
            	  },
            	  {
            	    "Symbol": "RITTW",
            	    "Name": "RIT Technologies Ltd."
            	  },
            	  {
            	    "Symbol": "RLI",
            	    "Name": "RLI Corp."
            	  },
            	  {
            	    "Symbol": "RLJE",
            	    "Name": "RLJ Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "RLJ",
            	    "Name": "RLJ Lodging Trust"
            	  },
            	  {
            	    "Symbol": "RMGN",
            	    "Name": "RMG Networks Holding Corporation"
            	  },
            	  {
            	    "Symbol": "RIF",
            	    "Name": "RMR Real Estate Income Fund."
            	  },
            	  {
            	    "Symbol": "ROBO",
            	    "Name": "ROBO Global Robotics and Automation Index ETF"
            	  },
            	  {
            	    "Symbol": "RES",
            	    "Name": "RPC, Inc."
            	  },
            	  {
            	    "Symbol": "RPM",
            	    "Name": "RPM International Inc."
            	  },
            	  {
            	    "Symbol": "RPXC",
            	    "Name": "RPX Corporation"
            	  },
            	  {
            	    "Symbol": "RRM",
            	    "Name": "RR Media Ltd."
            	  },
            	  {
            	    "Symbol": "RSPP",
            	    "Name": "RSP Permian, Inc."
            	  },
            	  {
            	    "Symbol": "RTIX",
            	    "Name": "RTI Surgical, Inc."
            	  },
            	  {
            	    "Symbol": "RXII",
            	    "Name": "RXI Pharmaceuticals Corporation"
            	  },
            	  {
            	    "Symbol": "RAX",
            	    "Name": "Rackspace Hosting, Inc"
            	  },
            	  {
            	    "Symbol": "RDNT",
            	    "Name": "RadNet, Inc."
            	  },
            	  {
            	    "Symbol": "RADA",
            	    "Name": "Rada Electronics Industries Limited"
            	  },
            	  {
            	    "Symbol": "RDCM",
            	    "Name": "Radcom Ltd."
            	  },
            	  {
            	    "Symbol": "RSYS",
            	    "Name": "RadiSys Corporation"
            	  },
            	  {
            	    "Symbol": "RDN",
            	    "Name": "Radian Group Inc."
            	  },
            	  {
            	    "Symbol": "RLGT",
            	    "Name": "Radiant Logistics, Inc."
            	  },
            	  {
            	    "Symbol": "RLGT^A",
            	    "Name": "Radiant Logistics, Inc."
            	  },
            	  {
            	    "Symbol": "ROIA",
            	    "Name": "Radio One, Inc."
            	  },
            	  {
            	    "Symbol": "ROIAK",
            	    "Name": "Radio One, Inc."
            	  },
            	  {
            	    "Symbol": "RDUS",
            	    "Name": "Radius Health, Inc."
            	  },
            	  {
            	    "Symbol": "RDWR",
            	    "Name": "Radware Ltd."
            	  },
            	  {
            	    "Symbol": "RL",
            	    "Name": "Ralph Lauren Corporation"
            	  },
            	  {
            	    "Symbol": "RMBS",
            	    "Name": "Rambus, Inc."
            	  },
            	  {
            	    "Symbol": "RPT",
            	    "Name": "Ramco-Gershenson Properties Trust"
            	  },
            	  {
            	    "Symbol": "RPT^D",
            	    "Name": "Ramco-Gershenson Properties Trust"
            	  },
            	  {
            	    "Symbol": "RAND",
            	    "Name": "Rand Capital Corporation"
            	  },
            	  {
            	    "Symbol": "RLOG",
            	    "Name": "Rand Logistics, Inc."
            	  },
            	  {
            	    "Symbol": "GOLD",
            	    "Name": "Randgold Resources Limited"
            	  },
            	  {
            	    "Symbol": "RRC",
            	    "Name": "Range Resources Corporation"
            	  },
            	  {
            	    "Symbol": "RPD",
            	    "Name": "Rapid7, Inc."
            	  },
            	  {
            	    "Symbol": "RPTP",
            	    "Name": "Raptor Pharmaceutical Corp."
            	  },
            	  {
            	    "Symbol": "RAVE",
            	    "Name": "Rave Restaurant Group, Inc."
            	  },
            	  {
            	    "Symbol": "RAVN",
            	    "Name": "Raven Industries, Inc."
            	  },
            	  {
            	    "Symbol": "RJD",
            	    "Name": "Raymond James Financial, Inc."
            	  },
            	  {
            	    "Symbol": "RJF",
            	    "Name": "Raymond James Financial, Inc."
            	  },
            	  {
            	    "Symbol": "RYAM",
            	    "Name": "Rayonier Advanced Materials Inc."
            	  },
            	  {
            	    "Symbol": "RYN",
            	    "Name": "Rayonier Inc."
            	  },
            	  {
            	    "Symbol": "RTN",
            	    "Name": "Raytheon Company"
            	  },
            	  {
            	    "Symbol": "RWLK",
            	    "Name": "ReWalk Robotics Ltd"
            	  },
            	  {
            	    "Symbol": "RLOC",
            	    "Name": "ReachLocal, Inc."
            	  },
            	  {
            	    "Symbol": "RDI",
            	    "Name": "Reading International Inc"
            	  },
            	  {
            	    "Symbol": "RDIB",
            	    "Name": "Reading International Inc"
            	  },
            	  {
            	    "Symbol": "RGSE",
            	    "Name": "Real Goods Solar, Inc."
            	  },
            	  {
            	    "Symbol": "RELY",
            	    "Name": "Real Industry, Inc."
            	  },
            	  {
            	    "Symbol": "RNWK",
            	    "Name": "RealNetworks, Inc."
            	  },
            	  {
            	    "Symbol": "RP",
            	    "Name": "RealPage, Inc."
            	  },
            	  {
            	    "Symbol": "RLGY",
            	    "Name": "Realogy Holdings Corp."
            	  },
            	  {
            	    "Symbol": "O",
            	    "Name": "Realty Income Corporation"
            	  },
            	  {
            	    "Symbol": "O^F",
            	    "Name": "Realty Income Corporation"
            	  },
            	  {
            	    "Symbol": "UTES",
            	    "Name": "Reaves Utilities ETF"
            	  },
            	  {
            	    "Symbol": "UTG",
            	    "Name": "Reaves Utility Income Fund"
            	  },
            	  {
            	    "Symbol": "DAX",
            	    "Name": "Recon Capital DAX Germany ETF"
            	  },
            	  {
            	    "Symbol": "QYLD",
            	    "Name": "Recon Capital NASDAQ-100 Covered Call ETF"
            	  },
            	  {
            	    "Symbol": "RCON",
            	    "Name": "Recon Technology, Ltd."
            	  },
            	  {
            	    "Symbol": "REPH",
            	    "Name": "Recro Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "RHT",
            	    "Name": "Red Hat, Inc."
            	  },
            	  {
            	    "Symbol": "RLH",
            	    "Name": "Red Lion Hotels Corporation"
            	  },
            	  {
            	    "Symbol": "RRGB",
            	    "Name": "Red Robin Gourmet Burgers, Inc."
            	  },
            	  {
            	    "Symbol": "RDHL",
            	    "Name": "Redhill Biopharma Ltd."
            	  },
            	  {
            	    "Symbol": "REDF",
            	    "Name": "Rediff.com India Limited"
            	  },
            	  {
            	    "Symbol": "RWT",
            	    "Name": "Redwood Trust, Inc."
            	  },
            	  {
            	    "Symbol": "REED",
            	    "Name": "Reeds, Inc."
            	  },
            	  {
            	    "Symbol": "RBC",
            	    "Name": "Regal Beloit Corporation"
            	  },
            	  {
            	    "Symbol": "RGC",
            	    "Name": "Regal Entertainment Group"
            	  },
            	  {
            	    "Symbol": "REG",
            	    "Name": "Regency Centers Corporation"
            	  },
            	  {
            	    "Symbol": "REG^F",
            	    "Name": "Regency Centers Corporation"
            	  },
            	  {
            	    "Symbol": "REG^G",
            	    "Name": "Regency Centers Corporation"
            	  },
            	  {
            	    "Symbol": "REGN",
            	    "Name": "Regeneron Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "RM",
            	    "Name": "Regional Management Corp."
            	  },
            	  {
            	    "Symbol": "RF",
            	    "Name": "Regions Financial Corporation"
            	  },
            	  {
            	    "Symbol": "RF^A",
            	    "Name": "Regions Financial Corporation"
            	  },
            	  {
            	    "Symbol": "RF^B",
            	    "Name": "Regions Financial Corporation"
            	  },
            	  {
            	    "Symbol": "RGS",
            	    "Name": "Regis Corporation"
            	  },
            	  {
            	    "Symbol": "RGLS",
            	    "Name": "Regulus Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "RGA",
            	    "Name": "Reinsurance Group of America, Incorporated"
            	  },
            	  {
            	    "Symbol": "RZA",
            	    "Name": "Reinsurance Group of America, Incorporated"
            	  },
            	  {
            	    "Symbol": "REIS",
            	    "Name": "Reis, Inc"
            	  },
            	  {
            	    "Symbol": "RS",
            	    "Name": "Reliance Steel & Aluminum Co."
            	  },
            	  {
            	    "Symbol": "RELV",
            	    "Name": "Reliv&#39; International, Inc."
            	  },
            	  {
            	    "Symbol": "RLYP",
            	    "Name": "Relypsa, Inc."
            	  },
            	  {
            	    "Symbol": "MARK",
            	    "Name": "Remark Media, Inc."
            	  },
            	  {
            	    "Symbol": "RNR",
            	    "Name": "RenaissanceRe Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "RNR^C",
            	    "Name": "RenaissanceRe Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "RNR^E",
            	    "Name": "RenaissanceRe Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "RNST",
            	    "Name": "Renasant Corporation"
            	  },
            	  {
            	    "Symbol": "SOL",
            	    "Name": "Renesola Ltd."
            	  },
            	  {
            	    "Symbol": "REGI",
            	    "Name": "Renewable Energy Group, Inc."
            	  },
            	  {
            	    "Symbol": "RNVA",
            	    "Name": "Rennova Health, Inc."
            	  },
            	  {
            	    "Symbol": "RNVAW",
            	    "Name": "Rennova Health, Inc."
            	  },
            	  {
            	    "Symbol": "RENN",
            	    "Name": "Renren Inc."
            	  },
            	  {
            	    "Symbol": "RCII",
            	    "Name": "Rent-A-Center Inc."
            	  },
            	  {
            	    "Symbol": "RNF",
            	    "Name": "Rentech Nitrogen Partners, L.P."
            	  },
            	  {
            	    "Symbol": "RTK",
            	    "Name": "Rentech, Inc."
            	  },
            	  {
            	    "Symbol": "RGEN",
            	    "Name": "Repligen Corporation"
            	  },
            	  {
            	    "Symbol": "RPRX",
            	    "Name": "Repros Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "RBCAA",
            	    "Name": "Republic Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "FRBK",
            	    "Name": "Republic First Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "RSG",
            	    "Name": "Republic Services, Inc."
            	  },
            	  {
            	    "Symbol": "RMD",
            	    "Name": "ResMed Inc."
            	  },
            	  {
            	    "Symbol": "REFR",
            	    "Name": "Research Frontiers Incorporated"
            	  },
            	  {
            	    "Symbol": "REN",
            	    "Name": "Resolute Energy Corporation"
            	  },
            	  {
            	    "Symbol": "RFP",
            	    "Name": "Resolute Forest Products Inc."
            	  },
            	  {
            	    "Symbol": "RESN",
            	    "Name": "Resonant Inc."
            	  },
            	  {
            	    "Symbol": "REXI",
            	    "Name": "Resource America, Inc."
            	  },
            	  {
            	    "Symbol": "RSO",
            	    "Name": "Resource Capital Corp."
            	  },
            	  {
            	    "Symbol": "RSO^A",
            	    "Name": "Resource Capital Corp."
            	  },
            	  {
            	    "Symbol": "RSO^B",
            	    "Name": "Resource Capital Corp."
            	  },
            	  {
            	    "Symbol": "RSO^C",
            	    "Name": "Resource Capital Corp."
            	  },
            	  {
            	    "Symbol": "RECN",
            	    "Name": "Resources Connection, Inc."
            	  },
            	  {
            	    "Symbol": "QSR",
            	    "Name": "Restaurant Brands International Inc."
            	  },
            	  {
            	    "Symbol": "RH",
            	    "Name": "Restoration Hardware Holdings Inc."
            	  },
            	  {
            	    "Symbol": "ROIC",
            	    "Name": "Retail Opportunity Investments Corp."
            	  },
            	  {
            	    "Symbol": "RPAI",
            	    "Name": "Retail Properties of America, Inc."
            	  },
            	  {
            	    "Symbol": "RPAI^A",
            	    "Name": "Retail Properties of America, Inc."
            	  },
            	  {
            	    "Symbol": "SALE",
            	    "Name": "RetailMeNot, Inc."
            	  },
            	  {
            	    "Symbol": "RVP",
            	    "Name": "Retractable Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "RTRX",
            	    "Name": "Retrophin, Inc."
            	  },
            	  {
            	    "Symbol": "RVNC",
            	    "Name": "Revance Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "REV",
            	    "Name": "Revlon, Inc."
            	  },
            	  {
            	    "Symbol": "RVLT",
            	    "Name": "Revolution Lighting Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "REXX",
            	    "Name": "Rex Energy Corporation"
            	  },
            	  {
            	    "Symbol": "RNN",
            	    "Name": "Rexahn Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "REXR",
            	    "Name": "Rexford Industrial Realty, Inc."
            	  },
            	  {
            	    "Symbol": "RXN",
            	    "Name": "Rexnord Corporation"
            	  },
            	  {
            	    "Symbol": "RAI",
            	    "Name": "Reynolds American Inc"
            	  },
            	  {
            	    "Symbol": "RICE",
            	    "Name": "Rice Energy Inc."
            	  },
            	  {
            	    "Symbol": "RMP",
            	    "Name": "Rice Midstream Partners LP"
            	  },
            	  {
            	    "Symbol": "RIBT",
            	    "Name": "RiceBran Technologies"
            	  },
            	  {
            	    "Symbol": "RIBTW",
            	    "Name": "RiceBran Technologies"
            	  },
            	  {
            	    "Symbol": "RELL",
            	    "Name": "Richardson Electronics, Ltd."
            	  },
            	  {
            	    "Symbol": "RIC",
            	    "Name": "Richmont Mines, Inc."
            	  },
            	  {
            	    "Symbol": "RNET",
            	    "Name": "RigNet, Inc."
            	  },
            	  {
            	    "Symbol": "RIGL",
            	    "Name": "Rigel Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "NAME",
            	    "Name": "Rightside Group, Ltd."
            	  },
            	  {
            	    "Symbol": "REI",
            	    "Name": "Ring Energy, Inc."
            	  },
            	  {
            	    "Symbol": "RNG",
            	    "Name": "Ringcentral, Inc."
            	  },
            	  {
            	    "Symbol": "RIO",
            	    "Name": "Rio Tinto Plc"
            	  },
            	  {
            	    "Symbol": "RBA",
            	    "Name": "Ritchie Bros. Auctioneers Incorporated"
            	  },
            	  {
            	    "Symbol": "RAD",
            	    "Name": "Rite Aid Corporation"
            	  },
            	  {
            	    "Symbol": "RTTR",
            	    "Name": "Ritter Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "RIV",
            	    "Name": "RiverNorth Opportunities Fund, Inc."
            	  },
            	  {
            	    "Symbol": "RVSB",
            	    "Name": "Riverview Bancorp Inc"
            	  },
            	  {
            	    "Symbol": "RRTS",
            	    "Name": "Roadrunner Transportation Systems, Inc"
            	  },
            	  {
            	    "Symbol": "RHI",
            	    "Name": "Robert Half International Inc."
            	  },
            	  {
            	    "Symbol": "FUEL",
            	    "Name": "Rocket Fuel Inc."
            	  },
            	  {
            	    "Symbol": "ROK",
            	    "Name": "Rockwell Automation, Inc."
            	  },
            	  {
            	    "Symbol": "COL",
            	    "Name": "Rockwell Collins, Inc."
            	  },
            	  {
            	    "Symbol": "RMTI",
            	    "Name": "Rockwell Medical, Inc."
            	  },
            	  {
            	    "Symbol": "RCKY",
            	    "Name": "Rocky Brands, Inc."
            	  },
            	  {
            	    "Symbol": "RMCF",
            	    "Name": "Rocky Mountain Chocolate Factory, Inc."
            	  },
            	  {
            	    "Symbol": "RSTI",
            	    "Name": "Rofin-Sinar Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "RCI",
            	    "Name": "Rogers Communication, Inc."
            	  },
            	  {
            	    "Symbol": "ROG",
            	    "Name": "Rogers Corporation"
            	  },
            	  {
            	    "Symbol": "ROKA",
            	    "Name": "Roka Bioscience, Inc."
            	  },
            	  {
            	    "Symbol": "ROL",
            	    "Name": "Rollins, Inc."
            	  },
            	  {
            	    "Symbol": "ROP",
            	    "Name": "Roper Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "RRMS",
            	    "Name": "Rose Rock Midstream, L.P."
            	  },
            	  {
            	    "Symbol": "ROSG",
            	    "Name": "Rosetta Genomics Ltd."
            	  },
            	  {
            	    "Symbol": "RST",
            	    "Name": "Rosetta Stone"
            	  },
            	  {
            	    "Symbol": "ROST",
            	    "Name": "Ross Stores, Inc."
            	  },
            	  {
            	    "Symbol": "RSE",
            	    "Name": "Rouse Properties, Inc."
            	  },
            	  {
            	    "Symbol": "ROVI",
            	    "Name": "Rovi Corporation"
            	  },
            	  {
            	    "Symbol": "RDC",
            	    "Name": "Rowan Companies plc"
            	  },
            	  {
            	    "Symbol": "RBPAA",
            	    "Name": "Royal Bancshares of Pennsylvania, Inc."
            	  },
            	  {
            	    "Symbol": "RY",
            	    "Name": "Royal Bank Of Canada"
            	  },
            	  {
            	    "Symbol": "RY^S",
            	    "Name": "Royal Bank Of Canada"
            	  },
            	  {
            	    "Symbol": "RY^T",
            	    "Name": "Royal Bank Of Canada"
            	  },
            	  {
            	    "Symbol": "RBS",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^E",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^F",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^G",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^H",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^I",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^L",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^R",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^S",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RBS^T",
            	    "Name": "Royal Bank Scotland plc (The)"
            	  },
            	  {
            	    "Symbol": "RCL",
            	    "Name": "Royal Caribbean Cruises Ltd."
            	  },
            	  {
            	    "Symbol": "RDS.A",
            	    "Name": "Royal Dutch Shell PLC"
            	  },
            	  {
            	    "Symbol": "RDS.B",
            	    "Name": "Royal Dutch Shell PLC"
            	  },
            	  {
            	    "Symbol": "RGLD",
            	    "Name": "Royal Gold, Inc."
            	  },
            	  {
            	    "Symbol": "RGT",
            	    "Name": "Royce Global Value Trust, Inc."
            	  },
            	  {
            	    "Symbol": "RMT",
            	    "Name": "Royce Micro-Cap Trust, Inc."
            	  },
            	  {
            	    "Symbol": "RVT",
            	    "Name": "Royce Value Trust, Inc."
            	  },
            	  {
            	    "Symbol": "RBCN",
            	    "Name": "Rubicon Technology, Inc."
            	  },
            	  {
            	    "Symbol": "RT",
            	    "Name": "Ruby Tuesday, Inc."
            	  },
            	  {
            	    "Symbol": "RKUS",
            	    "Name": "Ruckus Wireless, Inc."
            	  },
            	  {
            	    "Symbol": "RTEC",
            	    "Name": "Rudolph Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "RUSHA",
            	    "Name": "Rush Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "RUSHB",
            	    "Name": "Rush Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "RUTH",
            	    "Name": "Ruth&#39;s Hospitality Group, Inc."
            	  },
            	  {
            	    "Symbol": "RYAAY",
            	    "Name": "Ryanair Holdings plc"
            	  },
            	  {
            	    "Symbol": "R",
            	    "Name": "Ryder System, Inc."
            	  },
            	  {
            	    "Symbol": "RYI",
            	    "Name": "Ryerson Holding Corporation"
            	  },
            	  {
            	    "Symbol": "RHP",
            	    "Name": "Ryman Hospitality Properties, Inc."
            	  },
            	  {
            	    "Symbol": "STBA",
            	    "Name": "S&T Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SANW",
            	    "Name": "S&W Seed Company"
            	  },
            	  {
            	    "Symbol": "SAEX",
            	    "Name": "SAExploration Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SAP",
            	    "Name": "SAP SE"
            	  },
            	  {
            	    "Symbol": "SBFG",
            	    "Name": "SB Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "SBFGP",
            	    "Name": "SB Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "SBAC",
            	    "Name": "SBA Communications Corporation"
            	  },
            	  {
            	    "Symbol": "SAIC",
            	    "Name": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION"
            	  },
            	  {
            	    "Symbol": "SCYX",
            	    "Name": "SCYNEXIS, Inc."
            	  },
            	  {
            	    "Symbol": "CKH",
            	    "Name": "SEACOR Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SEIC",
            	    "Name": "SEI Investments Company"
            	  },
            	  {
            	    "Symbol": "SGOC",
            	    "Name": "SGOCO Group, Ltd"
            	  },
            	  {
            	    "Symbol": "SIFI",
            	    "Name": "SI Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "SIF",
            	    "Name": "SIFCO Industries, Inc."
            	  },
            	  {
            	    "Symbol": "SHI",
            	    "Name": "SINOPEC Shangai Petrochemical Company, Ltd."
            	  },
            	  {
            	    "Symbol": "SITO",
            	    "Name": "SITO Mobile, Ltd."
            	  },
            	  {
            	    "Symbol": "SJW",
            	    "Name": "SJW Corporation"
            	  },
            	  {
            	    "Symbol": "SKM",
            	    "Name": "SK Telecom Co., Ltd."
            	  },
            	  {
            	    "Symbol": "SLG",
            	    "Name": "SL Green Realty Corporation"
            	  },
            	  {
            	    "Symbol": "SLG^I",
            	    "Name": "SL Green Realty Corporation"
            	  },
            	  {
            	    "Symbol": "SLI",
            	    "Name": "SL Industries, Inc."
            	  },
            	  {
            	    "Symbol": "ISM",
            	    "Name": "SLM Corporation"
            	  },
            	  {
            	    "Symbol": "JSM",
            	    "Name": "SLM Corporation"
            	  },
            	  {
            	    "Symbol": "OSM",
            	    "Name": "SLM Corporation"
            	  },
            	  {
            	    "Symbol": "SLM",
            	    "Name": "SLM Corporation"
            	  },
            	  {
            	    "Symbol": "SLMAP",
            	    "Name": "SLM Corporation"
            	  },
            	  {
            	    "Symbol": "SLMBP",
            	    "Name": "SLM Corporation"
            	  },
            	  {
            	    "Symbol": "SM",
            	    "Name": "SM Energy Company"
            	  },
            	  {
            	    "Symbol": "SMT",
            	    "Name": "SMART Technologies Inc."
            	  },
            	  {
            	    "Symbol": "SMTX",
            	    "Name": "SMTC Corporation"
            	  },
            	  {
            	    "Symbol": "SORL",
            	    "Name": "SORL Auto Parts, Inc."
            	  },
            	  {
            	    "Symbol": "SP",
            	    "Name": "SP Plus Corporation"
            	  },
            	  {
            	    "Symbol": "SGRP",
            	    "Name": "SPAR Group, Inc."
            	  },
            	  {
            	    "Symbol": "SPI",
            	    "Name": "SPI Energy Co., Ltd."
            	  },
            	  {
            	    "Symbol": "SPSC",
            	    "Name": "SPS Commerce, Inc."
            	  },
            	  {
            	    "Symbol": "SPXC",
            	    "Name": "SPX Corporation"
            	  },
            	  {
            	    "Symbol": "FLOW",
            	    "Name": "SPX FLOW, Inc."
            	  },
            	  {
            	    "Symbol": "SSNC",
            	    "Name": "SS&C Technologies Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "STAA",
            	    "Name": "STAAR Surgical Company"
            	  },
            	  {
            	    "Symbol": "STWD",
            	    "Name": "STARWOOD PROPERTY TRUST, INC."
            	  },
            	  {
            	    "Symbol": "STE",
            	    "Name": "STERIS plc"
            	  },
            	  {
            	    "Symbol": "STM",
            	    "Name": "STMicroelectronics N.V."
            	  },
            	  {
            	    "Symbol": "STOR",
            	    "Name": "STORE Capital Corporation"
            	  },
            	  {
            	    "Symbol": "GJH",
            	    "Name": "STRATS Trust"
            	  },
            	  {
            	    "Symbol": "GJO",
            	    "Name": "STRATS Trust"
            	  },
            	  {
            	    "Symbol": "GJS",
            	    "Name": "STRATS Trust"
            	  },
            	  {
            	    "Symbol": "SIVB",
            	    "Name": "SVB Financial Group"
            	  },
            	  {
            	    "Symbol": "SIVBO",
            	    "Name": "SVB Financial Group"
            	  },
            	  {
            	    "Symbol": "SBR",
            	    "Name": "Sabine Royalty Trust"
            	  },
            	  {
            	    "Symbol": "SBRA",
            	    "Name": "Sabra Healthcare REIT, Inc."
            	  },
            	  {
            	    "Symbol": "SBRAP",
            	    "Name": "Sabra Healthcare REIT, Inc."
            	  },
            	  {
            	    "Symbol": "SABR",
            	    "Name": "Sabre Corporation"
            	  },
            	  {
            	    "Symbol": "SB",
            	    "Name": "Safe Bulkers, Inc"
            	  },
            	  {
            	    "Symbol": "SB^B",
            	    "Name": "Safe Bulkers, Inc"
            	  },
            	  {
            	    "Symbol": "SB^C",
            	    "Name": "Safe Bulkers, Inc"
            	  },
            	  {
            	    "Symbol": "SB^D",
            	    "Name": "Safe Bulkers, Inc"
            	  },
            	  {
            	    "Symbol": "SFE",
            	    "Name": "Safeguard Scientifics, Inc."
            	  },
            	  {
            	    "Symbol": "SAFT",
            	    "Name": "Safety Insurance Group, Inc."
            	  },
            	  {
            	    "Symbol": "SGA",
            	    "Name": "Saga Communications, Inc."
            	  },
            	  {
            	    "Symbol": "SAGE",
            	    "Name": "Sage Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "SGNT",
            	    "Name": "Sagent Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SAIA",
            	    "Name": "Saia, Inc."
            	  },
            	  {
            	    "Symbol": "SAJA",
            	    "Name": "Sajan, Inc."
            	  },
            	  {
            	    "Symbol": "SALM",
            	    "Name": "Salem Media Group, Inc."
            	  },
            	  {
            	    "Symbol": "CRM",
            	    "Name": "Salesforce.com Inc"
            	  },
            	  {
            	    "Symbol": "SMM",
            	    "Name": "Salient Midstream & MLP Fund"
            	  },
            	  {
            	    "Symbol": "SAL",
            	    "Name": "Salisbury Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SBH",
            	    "Name": "Sally Beauty Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SSN",
            	    "Name": "Samson Oil & Gas Limited"
            	  },
            	  {
            	    "Symbol": "SJT",
            	    "Name": "San Juan Basin Royalty Trust"
            	  },
            	  {
            	    "Symbol": "SNDK",
            	    "Name": "SanDisk Corporation"
            	  },
            	  {
            	    "Symbol": "SN",
            	    "Name": "Sanchez Energy Corporation"
            	  },
            	  {
            	    "Symbol": "SPP",
            	    "Name": "Sanchez Production Partners LP"
            	  },
            	  {
            	    "Symbol": "SDT",
            	    "Name": "SandRidge Mississippian Trust I"
            	  },
            	  {
            	    "Symbol": "SDR",
            	    "Name": "SandRidge Mississippian Trust II"
            	  },
            	  {
            	    "Symbol": "PER",
            	    "Name": "SandRidge Permian Trust"
            	  },
            	  {
            	    "Symbol": "SAFM",
            	    "Name": "Sanderson Farms, Inc."
            	  },
            	  {
            	    "Symbol": "SAND",
            	    "Name": "Sandstorm Gold Ltd"
            	  },
            	  {
            	    "Symbol": "SASR",
            	    "Name": "Sandy Spring Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SGMO",
            	    "Name": "Sangamo BioSciences, Inc."
            	  },
            	  {
            	    "Symbol": "SANM",
            	    "Name": "Sanmina Corporation"
            	  },
            	  {
            	    "Symbol": "GCVRZ",
            	    "Name": "Sanofi"
            	  },
            	  {
            	    "Symbol": "SNY",
            	    "Name": "Sanofi"
            	  },
            	  {
            	    "Symbol": "SC",
            	    "Name": "Santander Consumer USA Holdings Inc."
            	  },
            	  {
            	    "Symbol": "SOV^C",
            	    "Name": "Santander Holdings USA, Inc."
            	  },
            	  {
            	    "Symbol": "SPNS",
            	    "Name": "Sapiens International Corporation N.V."
            	  },
            	  {
            	    "Symbol": "SAQ",
            	    "Name": "Saratoga Investment Corp"
            	  },
            	  {
            	    "Symbol": "SAR",
            	    "Name": "Saratoga Investment Corp"
            	  },
            	  {
            	    "Symbol": "SRPT",
            	    "Name": "Sarepta Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "SSL",
            	    "Name": "Sasol Ltd."
            	  },
            	  {
            	    "Symbol": "BFS",
            	    "Name": "Saul Centers, Inc."
            	  },
            	  {
            	    "Symbol": "BFS^C",
            	    "Name": "Saul Centers, Inc."
            	  },
            	  {
            	    "Symbol": "SCSC",
            	    "Name": "ScanSource, Inc."
            	  },
            	  {
            	    "Symbol": "SCG",
            	    "Name": "Scana Corporation"
            	  },
            	  {
            	    "Symbol": "SLB",
            	    "Name": "Schlumberger N.V."
            	  },
            	  {
            	    "Symbol": "SMIT",
            	    "Name": "Schmitt Industries, Inc."
            	  },
            	  {
            	    "Symbol": "SCHN",
            	    "Name": "Schnitzer Steel Industries, Inc."
            	  },
            	  {
            	    "Symbol": "SCHL",
            	    "Name": "Scholastic Corporation"
            	  },
            	  {
            	    "Symbol": "SWM",
            	    "Name": "Schweitzer-Mauduit International, Inc."
            	  },
            	  {
            	    "Symbol": "SCLN",
            	    "Name": "SciClone Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SQI",
            	    "Name": "SciQuest, Inc."
            	  },
            	  {
            	    "Symbol": "SGMS",
            	    "Name": "Scientific Games Corp"
            	  },
            	  {
            	    "Symbol": "SALT",
            	    "Name": "Scorpio Bulkers Inc."
            	  },
            	  {
            	    "Symbol": "SLTB",
            	    "Name": "Scorpio Bulkers Inc."
            	  },
            	  {
            	    "Symbol": "SBNA",
            	    "Name": "Scorpio Tankers Inc."
            	  },
            	  {
            	    "Symbol": "SBNB",
            	    "Name": "Scorpio Tankers Inc."
            	  },
            	  {
            	    "Symbol": "STNG",
            	    "Name": "Scorpio Tankers Inc."
            	  },
            	  {
            	    "Symbol": "SMG",
            	    "Name": "Scotts Miracle-Gro Company (The)"
            	  },
            	  {
            	    "Symbol": "SNI",
            	    "Name": "Scripps Networks Interactive, Inc"
            	  },
            	  {
            	    "Symbol": "LBF",
            	    "Name": "Scudder Global High Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "KHI",
            	    "Name": "Scudder High Income Trust"
            	  },
            	  {
            	    "Symbol": "KMM",
            	    "Name": "Scudder Multi-Market Income Trust"
            	  },
            	  {
            	    "Symbol": "KTF",
            	    "Name": "Scudder Municiple Income Trust"
            	  },
            	  {
            	    "Symbol": "KST",
            	    "Name": "Scudder Strategic Income Trust"
            	  },
            	  {
            	    "Symbol": "KSM",
            	    "Name": "Scudder Strategic Municiple Income Trust"
            	  },
            	  {
            	    "Symbol": "SEAC",
            	    "Name": "SeaChange International, Inc."
            	  },
            	  {
            	    "Symbol": "SPNE",
            	    "Name": "SeaSpine Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "SEAS",
            	    "Name": "SeaWorld Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "SEB",
            	    "Name": "Seaboard Corporation"
            	  },
            	  {
            	    "Symbol": "SA",
            	    "Name": "Seabridge Gold, Inc."
            	  },
            	  {
            	    "Symbol": "SBCF",
            	    "Name": "Seacoast Banking Corporation of Florida"
            	  },
            	  {
            	    "Symbol": "SDRL",
            	    "Name": "Seadrill Limited"
            	  },
            	  {
            	    "Symbol": "SDLP",
            	    "Name": "Seadrill Partners LLC"
            	  },
            	  {
            	    "Symbol": "STX",
            	    "Name": "Seagate Technology PLC"
            	  },
            	  {
            	    "Symbol": "SEE",
            	    "Name": "Sealed Air Corporation"
            	  },
            	  {
            	    "Symbol": "SHIP",
            	    "Name": "Seanergy Maritime Holdings Corp"
            	  },
            	  {
            	    "Symbol": "SRSC",
            	    "Name": "Sears Canada Inc."
            	  },
            	  {
            	    "Symbol": "SHLD",
            	    "Name": "Sears Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "SHLDW",
            	    "Name": "Sears Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "SHOS",
            	    "Name": "Sears Hometown and Outlet Stores, Inc."
            	  },
            	  {
            	    "Symbol": "SSW",
            	    "Name": "Seaspan Corporation"
            	  },
            	  {
            	    "Symbol": "SSWN",
            	    "Name": "Seaspan Corporation"
            	  },
            	  {
            	    "Symbol": "SSW^C",
            	    "Name": "Seaspan Corporation"
            	  },
            	  {
            	    "Symbol": "SSW^D",
            	    "Name": "Seaspan Corporation"
            	  },
            	  {
            	    "Symbol": "SSW^E",
            	    "Name": "Seaspan Corporation"
            	  },
            	  {
            	    "Symbol": "SGEN",
            	    "Name": "Seattle Genetics, Inc."
            	  },
            	  {
            	    "Symbol": "EYES",
            	    "Name": "Second Sight Medical Products, Inc."
            	  },
            	  {
            	    "Symbol": "SNFCA",
            	    "Name": "Security National Financial Corporation"
            	  },
            	  {
            	    "Symbol": "JBN",
            	    "Name": "Select Asset Inc."
            	  },
            	  {
            	    "Symbol": "JBR",
            	    "Name": "Select Asset Inc."
            	  },
            	  {
            	    "Symbol": "SLCT",
            	    "Name": "Select Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SCSS",
            	    "Name": "Select Comfort Corporation"
            	  },
            	  {
            	    "Symbol": "SIR",
            	    "Name": "Select Income REIT"
            	  },
            	  {
            	    "Symbol": "SEM",
            	    "Name": "Select Medical Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "SGZA",
            	    "Name": "Selective Insurance Group, Inc."
            	  },
            	  {
            	    "Symbol": "SIGI",
            	    "Name": "Selective Insurance Group, Inc."
            	  },
            	  {
            	    "Symbol": "SEMG",
            	    "Name": "Semgroup Corporation"
            	  },
            	  {
            	    "Symbol": "LEDS",
            	    "Name": "SemiLEDS Corporation"
            	  },
            	  {
            	    "Symbol": "SMI",
            	    "Name": "Semiconductor  Manufacturing International Corporation"
            	  },
            	  {
            	    "Symbol": "SMLR",
            	    "Name": "Semler Scientific, Inc."
            	  },
            	  {
            	    "Symbol": "SRE",
            	    "Name": "Sempra Energy"
            	  },
            	  {
            	    "Symbol": "SMTC",
            	    "Name": "Semtech Corporation"
            	  },
            	  {
            	    "Symbol": "SENEA",
            	    "Name": "Seneca Foods Corp."
            	  },
            	  {
            	    "Symbol": "SENEB",
            	    "Name": "Seneca Foods Corp."
            	  },
            	  {
            	    "Symbol": "SNH",
            	    "Name": "Senior Housing Properties Trust"
            	  },
            	  {
            	    "Symbol": "SNHN",
            	    "Name": "Senior Housing Properties Trust"
            	  },
            	  {
            	    "Symbol": "SNHO",
            	    "Name": "Senior Housing Properties Trust"
            	  },
            	  {
            	    "Symbol": "SNMX",
            	    "Name": "Senomyx, Inc."
            	  },
            	  {
            	    "Symbol": "ST",
            	    "Name": "Sensata Technologies Holding N.V."
            	  },
            	  {
            	    "Symbol": "SENS",
            	    "Name": "Senseonics Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SXT",
            	    "Name": "Sensient Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "SQNS",
            	    "Name": "Sequans Communications S.A."
            	  },
            	  {
            	    "Symbol": "SQNM",
            	    "Name": "Sequenom, Inc."
            	  },
            	  {
            	    "Symbol": "SQBG",
            	    "Name": "Sequential Brands Group, Inc."
            	  },
            	  {
            	    "Symbol": "MCRB",
            	    "Name": "Seres Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "SRG",
            	    "Name": "Seritage Growth Properties"
            	  },
            	  {
            	    "Symbol": "SCI",
            	    "Name": "Service Corporation International"
            	  },
            	  {
            	    "Symbol": "SERV",
            	    "Name": "ServiceMaster Global Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "NOW",
            	    "Name": "ServiceNow, Inc."
            	  },
            	  {
            	    "Symbol": "SREV",
            	    "Name": "ServiceSource International, Inc."
            	  },
            	  {
            	    "Symbol": "SFBS",
            	    "Name": "ServisFirst Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "SVT",
            	    "Name": "Servotronics, Inc."
            	  },
            	  {
            	    "Symbol": "SEV",
            	    "Name": "Sevcon, Inc."
            	  },
            	  {
            	    "Symbol": "SSE",
            	    "Name": "Seventy Seven Energy Inc."
            	  },
            	  {
            	    "Symbol": "SVBI",
            	    "Name": "Severn Bancorp Inc"
            	  },
            	  {
            	    "Symbol": "SHAK",
            	    "Name": "Shake Shack, Inc."
            	  },
            	  {
            	    "Symbol": "SHSP",
            	    "Name": "SharpSpring, Inc."
            	  },
            	  {
            	    "Symbol": "SMED",
            	    "Name": "Sharps Compliance Corp"
            	  },
            	  {
            	    "Symbol": "SJR",
            	    "Name": "Shaw Communications Inc."
            	  },
            	  {
            	    "Symbol": "SHLX",
            	    "Name": "Shell Midstream Partners, L.P."
            	  },
            	  {
            	    "Symbol": "SHEN",
            	    "Name": "Shenandoah Telecommunications Co"
            	  },
            	  {
            	    "Symbol": "SHW",
            	    "Name": "Sherwin-Williams Company (The)"
            	  },
            	  {
            	    "Symbol": "SHLO",
            	    "Name": "Shiloh Industries, Inc."
            	  },
            	  {
            	    "Symbol": "SHG",
            	    "Name": "Shinhan Financial Group Co Ltd"
            	  },
            	  {
            	    "Symbol": "SFL",
            	    "Name": "Ship Finance International Limited"
            	  },
            	  {
            	    "Symbol": "SHPG",
            	    "Name": "Shire plc"
            	  },
            	  {
            	    "Symbol": "SCVL",
            	    "Name": "Shoe Carnival, Inc."
            	  },
            	  {
            	    "Symbol": "SHOP",
            	    "Name": "Shopify Inc."
            	  },
            	  {
            	    "Symbol": "SHBI",
            	    "Name": "Shore Bancshares Inc"
            	  },
            	  {
            	    "Symbol": "SHOR",
            	    "Name": "ShoreTel, Inc."
            	  },
            	  {
            	    "Symbol": "SFLY",
            	    "Name": "Shutterfly, Inc."
            	  },
            	  {
            	    "Symbol": "SSTK",
            	    "Name": "Shutterstock, Inc."
            	  },
            	  {
            	    "Symbol": "SBGL",
            	    "Name": "Sibanye Gold Limited"
            	  },
            	  {
            	    "Symbol": "SIEB",
            	    "Name": "Siebert Financial Corp."
            	  },
            	  {
            	    "Symbol": "SIEN",
            	    "Name": "Sientra, Inc."
            	  },
            	  {
            	    "Symbol": "BSRR",
            	    "Name": "Sierra Bancorp"
            	  },
            	  {
            	    "Symbol": "SWIR",
            	    "Name": "Sierra Wireless, Inc."
            	  },
            	  {
            	    "Symbol": "SIFY",
            	    "Name": "Sify Technologies Limited"
            	  },
            	  {
            	    "Symbol": "SIGM",
            	    "Name": "Sigma Designs, Inc."
            	  },
            	  {
            	    "Symbol": "SGMA",
            	    "Name": "SigmaTron International, Inc."
            	  },
            	  {
            	    "Symbol": "SGNL",
            	    "Name": "Signal Genetics, Inc."
            	  },
            	  {
            	    "Symbol": "SBNY",
            	    "Name": "Signature Bank"
            	  },
            	  {
            	    "Symbol": "SBNYW",
            	    "Name": "Signature Bank"
            	  },
            	  {
            	    "Symbol": "SIG",
            	    "Name": "Signet Jewelers Limited"
            	  },
            	  {
            	    "Symbol": "SLGN",
            	    "Name": "Silgan Holdings Inc."
            	  },
            	  {
            	    "Symbol": "SILC",
            	    "Name": "Silicom Ltd"
            	  },
            	  {
            	    "Symbol": "SGI",
            	    "Name": "Silicon Graphics International Corp"
            	  },
            	  {
            	    "Symbol": "SLAB",
            	    "Name": "Silicon Laboratories, Inc."
            	  },
            	  {
            	    "Symbol": "SIMO",
            	    "Name": "Silicon Motion Technology Corporation"
            	  },
            	  {
            	    "Symbol": "SPIL",
            	    "Name": "Siliconware Precision Industries Company, Ltd."
            	  },
            	  {
            	    "Symbol": "SBY",
            	    "Name": "Silver Bay Realty Trust Corp."
            	  },
            	  {
            	    "Symbol": "SRAQU",
            	    "Name": "Silver Run Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "SSNI",
            	    "Name": "Silver Spring Networks, Inc."
            	  },
            	  {
            	    "Symbol": "SSRI",
            	    "Name": "Silver Standard Resources Inc."
            	  },
            	  {
            	    "Symbol": "SLW",
            	    "Name": "Silver Wheaton Corp"
            	  },
            	  {
            	    "Symbol": "SAMG",
            	    "Name": "Silvercrest Asset Management Group Inc."
            	  },
            	  {
            	    "Symbol": "SFNC",
            	    "Name": "Simmons First National Corporation"
            	  },
            	  {
            	    "Symbol": "SPG",
            	    "Name": "Simon Property Group, Inc."
            	  },
            	  {
            	    "Symbol": "SPG^J",
            	    "Name": "Simon Property Group, Inc."
            	  },
            	  {
            	    "Symbol": "SSD",
            	    "Name": "Simpson Manufacturing Company, Inc."
            	  },
            	  {
            	    "Symbol": "SLP",
            	    "Name": "Simulations Plus, Inc."
            	  },
            	  {
            	    "Symbol": "SINA",
            	    "Name": "Sina Corporation"
            	  },
            	  {
            	    "Symbol": "SBGI",
            	    "Name": "Sinclair Broadcast Group, Inc."
            	  },
            	  {
            	    "Symbol": "SINO",
            	    "Name": "Sino-Global Shipping America, Ltd."
            	  },
            	  {
            	    "Symbol": "SVA",
            	    "Name": "Sinovac Biotech, Ltd."
            	  },
            	  {
            	    "Symbol": "SIRI",
            	    "Name": "Sirius XM Holdings Inc."
            	  },
            	  {
            	    "Symbol": "SIX",
            	    "Name": "Six Flags Entertainment Corporation New"
            	  },
            	  {
            	    "Symbol": "SZMK",
            	    "Name": "Sizmek Inc."
            	  },
            	  {
            	    "Symbol": "SKX",
            	    "Name": "Skechers U.S.A., Inc."
            	  },
            	  {
            	    "Symbol": "SKUL",
            	    "Name": "Skullcandy, Inc."
            	  },
            	  {
            	    "Symbol": "SKYS",
            	    "Name": "Sky Solar Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "MOBI",
            	    "Name": "Sky-mobi Limited"
            	  },
            	  {
            	    "Symbol": "SPU",
            	    "Name": "SkyPeople Fruit Juice, Inc."
            	  },
            	  {
            	    "Symbol": "SKYW",
            	    "Name": "SkyWest, Inc."
            	  },
            	  {
            	    "Symbol": "SKY",
            	    "Name": "Skyline Corporation"
            	  },
            	  {
            	    "Symbol": "SKLN",
            	    "Name": "Skyline Medical Inc."
            	  },
            	  {
            	    "Symbol": "SWKS",
            	    "Name": "Skyworks Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "SFS",
            	    "Name": "Smart"
            	  },
            	  {
            	    "Symbol": "SMBK",
            	    "Name": "SmartFinancial, Inc."
            	  },
            	  {
            	    "Symbol": "SNN",
            	    "Name": "Smith & Nephew SNATS, Inc."
            	  },
            	  {
            	    "Symbol": "SWHC",
            	    "Name": "Smith & Wesson Holding Corporation"
            	  },
            	  {
            	    "Symbol": "AOS",
            	    "Name": "Smith (A.O.) Corporation"
            	  },
            	  {
            	    "Symbol": "SMSI",
            	    "Name": "Smith Micro Software, Inc."
            	  },
            	  {
            	    "Symbol": "SNA",
            	    "Name": "Snap-On Incorporated"
            	  },
            	  {
            	    "Symbol": "LNCE",
            	    "Name": "Snyder&#39;s-Lance, Inc."
            	  },
            	  {
            	    "Symbol": "SQM",
            	    "Name": "Sociedad Quimica y Minera S.A."
            	  },
            	  {
            	    "Symbol": "SODA",
            	    "Name": "SodaStream International Ltd."
            	  },
            	  {
            	    "Symbol": "SOHU",
            	    "Name": "Sohu.com Inc."
            	  },
            	  {
            	    "Symbol": "SLRA",
            	    "Name": "Solar Capital Ltd."
            	  },
            	  {
            	    "Symbol": "SLRC",
            	    "Name": "Solar Capital Ltd."
            	  },
            	  {
            	    "Symbol": "SUNS",
            	    "Name": "Solar Senior Capital Ltd."
            	  },
            	  {
            	    "Symbol": "SCTY",
            	    "Name": "SolarCity Corporation"
            	  },
            	  {
            	    "Symbol": "SEDG",
            	    "Name": "SolarEdge Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "SZYM",
            	    "Name": "Solazyme, Inc."
            	  },
            	  {
            	    "Symbol": "XPL",
            	    "Name": "Solitario Exploration & Royalty Corp"
            	  },
            	  {
            	    "Symbol": "SAH",
            	    "Name": "Sonic Automotive, Inc."
            	  },
            	  {
            	    "Symbol": "SONC",
            	    "Name": "Sonic Corp."
            	  },
            	  {
            	    "Symbol": "SOFO",
            	    "Name": "Sonic Foundry, Inc."
            	  },
            	  {
            	    "Symbol": "SON",
            	    "Name": "Sonoco Products Company"
            	  },
            	  {
            	    "Symbol": "SONS",
            	    "Name": "Sonus Networks, Inc."
            	  },
            	  {
            	    "Symbol": "SNE",
            	    "Name": "Sony Corp Ord"
            	  },
            	  {
            	    "Symbol": "SPHS",
            	    "Name": "Sophiris Bio, Inc."
            	  },
            	  {
            	    "Symbol": "SRNE",
            	    "Name": "Sorrento Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "BID",
            	    "Name": "Sotheby&#39;s"
            	  },
            	  {
            	    "Symbol": "SOHO",
            	    "Name": "Sotherly Hotels Inc."
            	  },
            	  {
            	    "Symbol": "SOHOL",
            	    "Name": "Sotherly Hotels LP"
            	  },
            	  {
            	    "Symbol": "SOHOM",
            	    "Name": "Sotherly Hotels LP"
            	  },
            	  {
            	    "Symbol": "SFUN",
            	    "Name": "SouFun Holdings Limited"
            	  },
            	  {
            	    "Symbol": "SFBC",
            	    "Name": "Sound Financial Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SOR",
            	    "Name": "Source Capital, Inc."
            	  },
            	  {
            	    "Symbol": "SJI",
            	    "Name": "South Jersey Industries, Inc."
            	  },
            	  {
            	    "Symbol": "SSB",
            	    "Name": "South State Corporation"
            	  },
            	  {
            	    "Symbol": "SOCB",
            	    "Name": "Southcoast Financial Corporation"
            	  },
            	  {
            	    "Symbol": "SXE",
            	    "Name": "Southcross Energy Partners, L.P."
            	  },
            	  {
            	    "Symbol": "SCE^B",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^C",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^D",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^E",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^F",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^G",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^H",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^J",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SCE^K",
            	    "Name": "Southern California Edison Company"
            	  },
            	  {
            	    "Symbol": "SO",
            	    "Name": "Southern Company (The)"
            	  },
            	  {
            	    "Symbol": "SOJA",
            	    "Name": "Southern Company (The)"
            	  },
            	  {
            	    "Symbol": "SCCO",
            	    "Name": "Southern Copper Corporation"
            	  },
            	  {
            	    "Symbol": "SFST",
            	    "Name": "Southern First Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "SMBC",
            	    "Name": "Southern Missouri Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SONA",
            	    "Name": "Southern National Bancorp of Virginia, Inc."
            	  },
            	  {
            	    "Symbol": "SBSI",
            	    "Name": "Southside Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "LUV",
            	    "Name": "Southwest Airlines Company"
            	  },
            	  {
            	    "Symbol": "OKSB",
            	    "Name": "Southwest Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SWX",
            	    "Name": "Southwest Gas Corporation"
            	  },
            	  {
            	    "Symbol": "SGB",
            	    "Name": "Southwest Georgia Financial Corporation"
            	  },
            	  {
            	    "Symbol": "SWN",
            	    "Name": "Southwestern Energy Company"
            	  },
            	  {
            	    "Symbol": "SWNC",
            	    "Name": "Southwestern Energy Company"
            	  },
            	  {
            	    "Symbol": "SSS",
            	    "Name": "Sovran Self Storage, Inc."
            	  },
            	  {
            	    "Symbol": "SPAN",
            	    "Name": "Span-America Medical Systems, Inc."
            	  },
            	  {
            	    "Symbol": "SBSA",
            	    "Name": "Spanish Broadcasting System, Inc."
            	  },
            	  {
            	    "Symbol": "SPKE",
            	    "Name": "Spark Energy, Inc."
            	  },
            	  {
            	    "Symbol": "LOV",
            	    "Name": "Spark Networks, Inc."
            	  },
            	  {
            	    "Symbol": "ONCE",
            	    "Name": "Spark Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "SPAR",
            	    "Name": "Spartan Motors, Inc."
            	  },
            	  {
            	    "Symbol": "SPTN",
            	    "Name": "SpartanNash Company"
            	  },
            	  {
            	    "Symbol": "SPA",
            	    "Name": "Sparton Corporation"
            	  },
            	  {
            	    "Symbol": "SPE",
            	    "Name": "Special Opportunities Fund Inc."
            	  },
            	  {
            	    "Symbol": "SE",
            	    "Name": "Spectra Energy Corp"
            	  },
            	  {
            	    "Symbol": "SEP",
            	    "Name": "Spectra Energy Partners, LP"
            	  },
            	  {
            	    "Symbol": "SPB",
            	    "Name": "Spectrum Brands Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SPPI",
            	    "Name": "Spectrum Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "TRK",
            	    "Name": "Speedway Motorsports, Inc."
            	  },
            	  {
            	    "Symbol": "ANY",
            	    "Name": "Sphere 3D Corp."
            	  },
            	  {
            	    "Symbol": "SPEX",
            	    "Name": "Spherix Incorporated"
            	  },
            	  {
            	    "Symbol": "SPR",
            	    "Name": "Spirit Aerosystems Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SAVE",
            	    "Name": "Spirit Airlines, Inc."
            	  },
            	  {
            	    "Symbol": "SRC",
            	    "Name": "Spirit Realty Capital, Inc."
            	  },
            	  {
            	    "Symbol": "SPLK",
            	    "Name": "Splunk Inc."
            	  },
            	  {
            	    "Symbol": "SPOK",
            	    "Name": "Spok Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SPWH",
            	    "Name": "Sportsman&#39;s Warehouse Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "SRLP",
            	    "Name": "Sprague Resources LP"
            	  },
            	  {
            	    "Symbol": "SBPH",
            	    "Name": "Spring Bank Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "S",
            	    "Name": "Sprint Corporation"
            	  },
            	  {
            	    "Symbol": "FUND",
            	    "Name": "Sprott Focus Trust, Inc."
            	  },
            	  {
            	    "Symbol": "SFM",
            	    "Name": "Sprouts Farmers Market, Inc."
            	  },
            	  {
            	    "Symbol": "SQ",
            	    "Name": "Square, Inc."
            	  },
            	  {
            	    "Symbol": "JOE",
            	    "Name": "St. Joe Company (The)"
            	  },
            	  {
            	    "Symbol": "STJ",
            	    "Name": "St. Jude Medical, Inc."
            	  },
            	  {
            	    "Symbol": "STAF",
            	    "Name": "Staffing 360 Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "STAG",
            	    "Name": "Stag Industrial, Inc."
            	  },
            	  {
            	    "Symbol": "STAG^A",
            	    "Name": "Stag Industrial, Inc."
            	  },
            	  {
            	    "Symbol": "STAG^B",
            	    "Name": "Stag Industrial, Inc."
            	  },
            	  {
            	    "Symbol": "STAG^C",
            	    "Name": "Stag Industrial, Inc."
            	  },
            	  {
            	    "Symbol": "SSI",
            	    "Name": "Stage Stores, Inc."
            	  },
            	  {
            	    "Symbol": "STMP",
            	    "Name": "Stamps.com Inc."
            	  },
            	  {
            	    "Symbol": "SMP",
            	    "Name": "Standard Motor Products, Inc."
            	  },
            	  {
            	    "Symbol": "SXI",
            	    "Name": "Standex International Corporation"
            	  },
            	  {
            	    "Symbol": "SWH",
            	    "Name": "Stanley Black & Decker, Inc."
            	  },
            	  {
            	    "Symbol": "SWJ",
            	    "Name": "Stanley Black & Decker, Inc."
            	  },
            	  {
            	    "Symbol": "SWK",
            	    "Name": "Stanley Black & Decker, Inc."
            	  },
            	  {
            	    "Symbol": "STLY",
            	    "Name": "Stanley Furniture Company, Inc."
            	  },
            	  {
            	    "Symbol": "STN",
            	    "Name": "Stantec Inc"
            	  },
            	  {
            	    "Symbol": "SPLS",
            	    "Name": "Staples, Inc."
            	  },
            	  {
            	    "Symbol": "SBLK",
            	    "Name": "Star Bulk Carriers Corp."
            	  },
            	  {
            	    "Symbol": "SBLKL",
            	    "Name": "Star Bulk Carriers Corp."
            	  },
            	  {
            	    "Symbol": "SGU",
            	    "Name": "Star Gas Partners, L.P."
            	  },
            	  {
            	    "Symbol": "SRT",
            	    "Name": "StarTek, Inc."
            	  },
            	  {
            	    "Symbol": "SBUX",
            	    "Name": "Starbucks Corporation"
            	  },
            	  {
            	    "Symbol": "HOT",
            	    "Name": "Starwood Hotels & Resorts Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "STRZA",
            	    "Name": "Starz"
            	  },
            	  {
            	    "Symbol": "STRZB",
            	    "Name": "Starz"
            	  },
            	  {
            	    "Symbol": "STFC",
            	    "Name": "State Auto Financial Corporation"
            	  },
            	  {
            	    "Symbol": "STBZ",
            	    "Name": "State Bank Financial Corporation."
            	  },
            	  {
            	    "Symbol": "SNC",
            	    "Name": "State National Companies, Inc."
            	  },
            	  {
            	    "Symbol": "STT",
            	    "Name": "State Street Corporation"
            	  },
            	  {
            	    "Symbol": "STT^C",
            	    "Name": "State Street Corporation"
            	  },
            	  {
            	    "Symbol": "STT^D",
            	    "Name": "State Street Corporation"
            	  },
            	  {
            	    "Symbol": "STT^E",
            	    "Name": "State Street Corporation"
            	  },
            	  {
            	    "Symbol": "STO",
            	    "Name": "Statoil ASA"
            	  },
            	  {
            	    "Symbol": "STDY",
            	    "Name": "SteadyMed Ltd."
            	  },
            	  {
            	    "Symbol": "GASS",
            	    "Name": "StealthGas, Inc."
            	  },
            	  {
            	    "Symbol": "STLD",
            	    "Name": "Steel Dynamics, Inc."
            	  },
            	  {
            	    "Symbol": "SXCL",
            	    "Name": "Steel Excel Inc."
            	  },
            	  {
            	    "Symbol": "SPLP",
            	    "Name": "Steel Partners Holdings LP"
            	  },
            	  {
            	    "Symbol": "SCS",
            	    "Name": "Steelcase Inc."
            	  },
            	  {
            	    "Symbol": "SMRT",
            	    "Name": "Stein Mart, Inc."
            	  },
            	  {
            	    "Symbol": "SBOT",
            	    "Name": "Stellar Biotechnologies, Inc."
            	  },
            	  {
            	    "Symbol": "SCM",
            	    "Name": "Stellus Capital Investment Corporation"
            	  },
            	  {
            	    "Symbol": "SCQ",
            	    "Name": "Stellus Capital Investment Corporation"
            	  },
            	  {
            	    "Symbol": "STEM",
            	    "Name": "StemCells, Inc."
            	  },
            	  {
            	    "Symbol": "STML",
            	    "Name": "Stemline Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "SCL",
            	    "Name": "Stepan Company"
            	  },
            	  {
            	    "Symbol": "STXS",
            	    "Name": "Stereotaxis, Inc."
            	  },
            	  {
            	    "Symbol": "SRCL",
            	    "Name": "Stericycle, Inc."
            	  },
            	  {
            	    "Symbol": "SRCLP",
            	    "Name": "Stericycle, Inc."
            	  },
            	  {
            	    "Symbol": "STL",
            	    "Name": "Sterling Bancorp"
            	  },
            	  {
            	    "Symbol": "STRL",
            	    "Name": "Sterling Construction Company Inc"
            	  },
            	  {
            	    "Symbol": "SHOO",
            	    "Name": "Steven Madden, Ltd."
            	  },
            	  {
            	    "Symbol": "SSFN",
            	    "Name": "Stewardship Financial Corp"
            	  },
            	  {
            	    "Symbol": "STC",
            	    "Name": "Stewart Information Services Corporation"
            	  },
            	  {
            	    "Symbol": "SF",
            	    "Name": "Stifel Financial Corporation"
            	  },
            	  {
            	    "Symbol": "SFN",
            	    "Name": "Stifel Financial Corporation"
            	  },
            	  {
            	    "Symbol": "SWC",
            	    "Name": "Stillwater Mining Company"
            	  },
            	  {
            	    "Symbol": "SYBT",
            	    "Name": "Stock Yards Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SGY",
            	    "Name": "Stone Energy Corporation"
            	  },
            	  {
            	    "Symbol": "EDF",
            	    "Name": "Stone Harbor Emerging Markets Income Fund"
            	  },
            	  {
            	    "Symbol": "EDI",
            	    "Name": "Stone Harbor Emerging Markets Total Income Fund"
            	  },
            	  {
            	    "Symbol": "BANX",
            	    "Name": "StoneCastle Financial Corp"
            	  },
            	  {
            	    "Symbol": "STON",
            	    "Name": "StoneMor Partners L.P."
            	  },
            	  {
            	    "Symbol": "SGBK",
            	    "Name": "Stonegate Bank"
            	  },
            	  {
            	    "Symbol": "SGM",
            	    "Name": "Stonegate Mortgage Corporation"
            	  },
            	  {
            	    "Symbol": "SRI",
            	    "Name": "Stoneridge, Inc."
            	  },
            	  {
            	    "Symbol": "STRP",
            	    "Name": "Straight Path Communications Inc."
            	  },
            	  {
            	    "Symbol": "SSKN",
            	    "Name": "Strata Skin Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "SSYS",
            	    "Name": "Stratasys, Ltd."
            	  },
            	  {
            	    "Symbol": "SGL",
            	    "Name": "Strategic Global Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "STRT",
            	    "Name": "Strattec Security Corporation"
            	  },
            	  {
            	    "Symbol": "STRS",
            	    "Name": "Stratus Properties, Inc."
            	  },
            	  {
            	    "Symbol": "STRA",
            	    "Name": "Strayer Education, Inc."
            	  },
            	  {
            	    "Symbol": "STRM",
            	    "Name": "Streamline Health Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "SBBP",
            	    "Name": "Strongbridge Biopharma plc"
            	  },
            	  {
            	    "Symbol": "SYK",
            	    "Name": "Stryker Corporation"
            	  },
            	  {
            	    "Symbol": "STB",
            	    "Name": "Student Transportation Inc"
            	  },
            	  {
            	    "Symbol": "RGR",
            	    "Name": "Sturm, Ruger & Company, Inc."
            	  },
            	  {
            	    "Symbol": "SPH",
            	    "Name": "Suburban Propane Partners, L.P."
            	  },
            	  {
            	    "Symbol": "SCMP",
            	    "Name": "Sucampo Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SCNB",
            	    "Name": "Suffolk Bancorp"
            	  },
            	  {
            	    "Symbol": "SMFG",
            	    "Name": "Sumitomo Mitsui Financial Group Inc"
            	  },
            	  {
            	    "Symbol": "SUMR",
            	    "Name": "Summer Infant, Inc."
            	  },
            	  {
            	    "Symbol": "SMMF",
            	    "Name": "Summit Financial Group, Inc."
            	  },
            	  {
            	    "Symbol": "INN",
            	    "Name": "Summit Hotel Properties, Inc."
            	  },
            	  {
            	    "Symbol": "INN^A",
            	    "Name": "Summit Hotel Properties, Inc."
            	  },
            	  {
            	    "Symbol": "INN^B",
            	    "Name": "Summit Hotel Properties, Inc."
            	  },
            	  {
            	    "Symbol": "INN^C",
            	    "Name": "Summit Hotel Properties, Inc."
            	  },
            	  {
            	    "Symbol": "SUM",
            	    "Name": "Summit Materials, Inc."
            	  },
            	  {
            	    "Symbol": "SMLP",
            	    "Name": "Summit Midstream Partners, LP"
            	  },
            	  {
            	    "Symbol": "SSBI",
            	    "Name": "Summit State Bank"
            	  },
            	  {
            	    "Symbol": "SMMT",
            	    "Name": "Summit Therapeutics plc"
            	  },
            	  {
            	    "Symbol": "SNBC",
            	    "Name": "Sun Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SUI",
            	    "Name": "Sun Communities, Inc."
            	  },
            	  {
            	    "Symbol": "SUI^A",
            	    "Name": "Sun Communities, Inc."
            	  },
            	  {
            	    "Symbol": "SNHY",
            	    "Name": "Sun Hydraulics Corporation"
            	  },
            	  {
            	    "Symbol": "SLF",
            	    "Name": "Sun Life Financial Inc."
            	  },
            	  {
            	    "Symbol": "SXCP",
            	    "Name": "SunCoke Energy Partners, L.P."
            	  },
            	  {
            	    "Symbol": "SXC",
            	    "Name": "SunCoke Energy, Inc."
            	  },
            	  {
            	    "Symbol": "SEMI",
            	    "Name": "SunEdison Semiconductor Limited"
            	  },
            	  {
            	    "Symbol": "SUNE",
            	    "Name": "SunEdison, Inc."
            	  },
            	  {
            	    "Symbol": "SSY",
            	    "Name": "SunLink Health Systems, Inc."
            	  },
            	  {
            	    "Symbol": "STKL",
            	    "Name": "SunOpta, Inc."
            	  },
            	  {
            	    "Symbol": "SPWR",
            	    "Name": "SunPower Corporation"
            	  },
            	  {
            	    "Symbol": "STI",
            	    "Name": "SunTrust Banks, Inc."
            	  },
            	  {
            	    "Symbol": "STI.WS.A",
            	    "Name": "SunTrust Banks, Inc."
            	  },
            	  {
            	    "Symbol": "STI.WS.B",
            	    "Name": "SunTrust Banks, Inc."
            	  },
            	  {
            	    "Symbol": "STI^A",
            	    "Name": "SunTrust Banks, Inc."
            	  },
            	  {
            	    "Symbol": "STI^E",
            	    "Name": "SunTrust Banks, Inc."
            	  },
            	  {
            	    "Symbol": "SU",
            	    "Name": "Suncor Energy  Inc."
            	  },
            	  {
            	    "Symbol": "SNSS",
            	    "Name": "Sunesis Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SUN",
            	    "Name": "Sunoco LP"
            	  },
            	  {
            	    "Symbol": "SXL",
            	    "Name": "Sunoco Logistics Partners LP"
            	  },
            	  {
            	    "Symbol": "RUN",
            	    "Name": "Sunrun Inc."
            	  },
            	  {
            	    "Symbol": "SBCP",
            	    "Name": "Sunshine Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "SSH",
            	    "Name": "Sunshine Heart Inc"
            	  },
            	  {
            	    "Symbol": "SHO",
            	    "Name": "Sunstone Hotel Investors, Inc."
            	  },
            	  {
            	    "Symbol": "SHO^D.CL",
            	    "Name": "Sunstone Hotel Investors, Inc."
            	  },
            	  {
            	    "Symbol": "SHO^E",
            	    "Name": "Sunstone Hotel Investors, Inc."
            	  },
            	  {
            	    "Symbol": "SUNW",
            	    "Name": "Sunworks, Inc."
            	  },
            	  {
            	    "Symbol": "SMCI",
            	    "Name": "Super Micro Computer, Inc."
            	  },
            	  {
            	    "Symbol": "SPCB",
            	    "Name": "SuperCom, Ltd."
            	  },
            	  {
            	    "Symbol": "SVU",
            	    "Name": "SuperValu Inc."
            	  },
            	  {
            	    "Symbol": "SCON",
            	    "Name": "Superconductor Technologies Inc."
            	  },
            	  {
            	    "Symbol": "SDPI",
            	    "Name": "Superior Drilling Products, Inc."
            	  },
            	  {
            	    "Symbol": "SPN",
            	    "Name": "Superior Energy Services, Inc."
            	  },
            	  {
            	    "Symbol": "SUP",
            	    "Name": "Superior Industries International, Inc."
            	  },
            	  {
            	    "Symbol": "SGC",
            	    "Name": "Superior Uniform Group, Inc."
            	  },
            	  {
            	    "Symbol": "SUPN",
            	    "Name": "Supernus Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "STS",
            	    "Name": "Supreme Industries, Inc."
            	  },
            	  {
            	    "Symbol": "SRDX",
            	    "Name": "SurModics, Inc."
            	  },
            	  {
            	    "Symbol": "SGRY",
            	    "Name": "Surgery Partners, Inc."
            	  },
            	  {
            	    "Symbol": "SCAI",
            	    "Name": "Surgical Care Affiliates, Inc."
            	  },
            	  {
            	    "Symbol": "SBBX",
            	    "Name": "Sussex Bancorp"
            	  },
            	  {
            	    "Symbol": "SWFT",
            	    "Name": "Swift Transportation Company"
            	  },
            	  {
            	    "Symbol": "SWZ",
            	    "Name": "Swiss Helvetia Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "SYKE",
            	    "Name": "Sykes Enterprises, Incorporated"
            	  },
            	  {
            	    "Symbol": "SYMC",
            	    "Name": "Symantec Corporation"
            	  },
            	  {
            	    "Symbol": "SSRG",
            	    "Name": "Symmetry Surgical Inc."
            	  },
            	  {
            	    "Symbol": "SYNC",
            	    "Name": "Synacor, Inc."
            	  },
            	  {
            	    "Symbol": "SYNL",
            	    "Name": "Synalloy Corporation"
            	  },
            	  {
            	    "Symbol": "SYNA",
            	    "Name": "Synaptics Incorporated"
            	  },
            	  {
            	    "Symbol": "SNCR",
            	    "Name": "Synchronoss Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "SYF",
            	    "Name": "Synchrony Financial"
            	  },
            	  {
            	    "Symbol": "SNDX",
            	    "Name": "Syndax Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SGYP",
            	    "Name": "Synergy Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SGYPU",
            	    "Name": "Synergy Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SGYPW",
            	    "Name": "Synergy Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "SYRG",
            	    "Name": "Synergy Resources Corporation"
            	  },
            	  {
            	    "Symbol": "ELOS",
            	    "Name": "Syneron Medical Ltd."
            	  },
            	  {
            	    "Symbol": "SYT",
            	    "Name": "Syngenta AG"
            	  },
            	  {
            	    "Symbol": "SNX",
            	    "Name": "Synnex Corporation"
            	  },
            	  {
            	    "Symbol": "SNPS",
            	    "Name": "Synopsys, Inc."
            	  },
            	  {
            	    "Symbol": "SNV",
            	    "Name": "Synovus Financial Corp."
            	  },
            	  {
            	    "Symbol": "SNV^C",
            	    "Name": "Synovus Financial Corp."
            	  },
            	  {
            	    "Symbol": "SNTA",
            	    "Name": "Synta Pharmaceuticals Corp."
            	  },
            	  {
            	    "Symbol": "SYNT",
            	    "Name": "Syntel, Inc."
            	  },
            	  {
            	    "Symbol": "SYMX",
            	    "Name": "Synthesis Energy Systems, Inc."
            	  },
            	  {
            	    "Symbol": "SYN",
            	    "Name": "Synthetic Biologics, Inc"
            	  },
            	  {
            	    "Symbol": "GJP",
            	    "Name": "Synthetic Fixed-Income Securities, Inc."
            	  },
            	  {
            	    "Symbol": "GJR",
            	    "Name": "Synthetic Fixed-Income Securities, Inc."
            	  },
            	  {
            	    "Symbol": "GJT",
            	    "Name": "Synthetic Fixed-Income Securities, Inc."
            	  },
            	  {
            	    "Symbol": "GJV",
            	    "Name": "Synthetic Fixed-Income Securities, Inc."
            	  },
            	  {
            	    "Symbol": "SYUT",
            	    "Name": "Synutra International, Inc."
            	  },
            	  {
            	    "Symbol": "SYPR",
            	    "Name": "Sypris Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "SYY",
            	    "Name": "Sysco Corporation"
            	  },
            	  {
            	    "Symbol": "SYRX",
            	    "Name": "Sysorex Global"
            	  },
            	  {
            	    "Symbol": "SYX",
            	    "Name": "Systemax Inc."
            	  },
            	  {
            	    "Symbol": "TMUS",
            	    "Name": "T-Mobile US, Inc."
            	  },
            	  {
            	    "Symbol": "TMUSP",
            	    "Name": "T-Mobile US, Inc."
            	  },
            	  {
            	    "Symbol": "TROW",
            	    "Name": "T. Rowe Price Group, Inc."
            	  },
            	  {
            	    "Symbol": "TTOO",
            	    "Name": "T2 Biosystems, Inc."
            	  },
            	  {
            	    "Symbol": "XRS",
            	    "Name": "TAL Education Group"
            	  },
            	  {
            	    "Symbol": "TAL",
            	    "Name": "TAL International Group, Inc."
            	  },
            	  {
            	    "Symbol": "TASR",
            	    "Name": "TASER International, Inc."
            	  },
            	  {
            	    "Symbol": "TATT",
            	    "Name": "TAT Technologies Ltd."
            	  },
            	  {
            	    "Symbol": "TCP",
            	    "Name": "TC PipeLines, LP"
            	  },
            	  {
            	    "Symbol": "TCB",
            	    "Name": "TCF Financial Corporation"
            	  },
            	  {
            	    "Symbol": "TCB.WS",
            	    "Name": "TCF Financial Corporation"
            	  },
            	  {
            	    "Symbol": "TCB^B",
            	    "Name": "TCF Financial Corporation"
            	  },
            	  {
            	    "Symbol": "TCB^C",
            	    "Name": "TCF Financial Corporation"
            	  },
            	  {
            	    "Symbol": "TCPC",
            	    "Name": "TCP Capital Corp."
            	  },
            	  {
            	    "Symbol": "TCPI",
            	    "Name": "TCP International Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "TSI",
            	    "Name": "TCW Strategic Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "AMTD",
            	    "Name": "TD Ameritrade Holding Corporation"
            	  },
            	  {
            	    "Symbol": "TEL",
            	    "Name": "TE Connectivity Ltd."
            	  },
            	  {
            	    "Symbol": "TE",
            	    "Name": "TECO Energy, Inc."
            	  },
            	  {
            	    "Symbol": "GCI",
            	    "Name": "TEGNA Inc."
            	  },
            	  {
            	    "Symbol": "TGNA",
            	    "Name": "TEGNA Inc."
            	  },
            	  {
            	    "Symbol": "TU",
            	    "Name": "TELUS Corporation"
            	  },
            	  {
            	    "Symbol": "TSRO",
            	    "Name": "TESARO, Inc."
            	  },
            	  {
            	    "Symbol": "TESS",
            	    "Name": "TESSCO Technologies Incorporated"
            	  },
            	  {
            	    "Symbol": "TFSL",
            	    "Name": "TFS Financial Corporation"
            	  },
            	  {
            	    "Symbol": "TGTX",
            	    "Name": "TG Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "TSLF",
            	    "Name": "THL Credit Senior Loan Fund"
            	  },
            	  {
            	    "Symbol": "TCRD",
            	    "Name": "THL Credit, Inc."
            	  },
            	  {
            	    "Symbol": "TCRX",
            	    "Name": "THL Credit, Inc."
            	  },
            	  {
            	    "Symbol": "TCRZ",
            	    "Name": "THL Credit, Inc."
            	  },
            	  {
            	    "Symbol": "TICC",
            	    "Name": "TICC Capital Corp."
            	  },
            	  {
            	    "Symbol": "TIER",
            	    "Name": "TIER REIT, Inc."
            	  },
            	  {
            	    "Symbol": "TSU",
            	    "Name": "TIM Participacoes S.A."
            	  },
            	  {
            	    "Symbol": "TJX",
            	    "Name": "TJX Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "TOPS",
            	    "Name": "TOP Ships Inc."
            	  },
            	  {
            	    "Symbol": "TORM",
            	    "Name": "TOR Minerals International Inc"
            	  },
            	  {
            	    "Symbol": "TSLX",
            	    "Name": "TPG Specialty Lending, Inc."
            	  },
            	  {
            	    "Symbol": "TCON",
            	    "Name": "TRACON Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "TRR",
            	    "Name": "TRC Companies, Inc."
            	  },
            	  {
            	    "Symbol": "TPH",
            	    "Name": "TRI Pointe Group, Inc."
            	  },
            	  {
            	    "Symbol": "TSRI",
            	    "Name": "TSR, Inc."
            	  },
            	  {
            	    "Symbol": "TTMI",
            	    "Name": "TTM Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "DATA",
            	    "Name": "Tableau Software, Inc."
            	  },
            	  {
            	    "Symbol": "TAHO",
            	    "Name": "Tahoe Resources, Inc."
            	  },
            	  {
            	    "Symbol": "TLRD",
            	    "Name": "Tailored Brands, Inc."
            	  },
            	  {
            	    "Symbol": "TAIT",
            	    "Name": "Taitron Components Incorporated"
            	  },
            	  {
            	    "Symbol": "TWN",
            	    "Name": "Taiwan Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "TSM",
            	    "Name": "Taiwan Semiconductor Manufacturing Company Ltd."
            	  },
            	  {
            	    "Symbol": "TTWO",
            	    "Name": "Take-Two Interactive Software, Inc."
            	  },
            	  {
            	    "Symbol": "TLN",
            	    "Name": "Talen Energy Corporation"
            	  },
            	  {
            	    "Symbol": "TEGP",
            	    "Name": "Tallgrass Energy GP, LP"
            	  },
            	  {
            	    "Symbol": "TEP",
            	    "Name": "Tallgrass Energy Partners, LP"
            	  },
            	  {
            	    "Symbol": "TLMR",
            	    "Name": "Talmer Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "TNDM",
            	    "Name": "Tandem Diabetes Care, Inc."
            	  },
            	  {
            	    "Symbol": "TLF",
            	    "Name": "Tandy Leather Factory, Inc."
            	  },
            	  {
            	    "Symbol": "SKT",
            	    "Name": "Tanger Factory Outlet Centers, Inc."
            	  },
            	  {
            	    "Symbol": "TNGO",
            	    "Name": "Tangoe, Inc."
            	  },
            	  {
            	    "Symbol": "TANH",
            	    "Name": "Tantech Holdings Ltd."
            	  },
            	  {
            	    "Symbol": "TRX",
            	    "Name": "Tanzanian Royalty Exploration Corporation"
            	  },
            	  {
            	    "Symbol": "TAOM",
            	    "Name": "Taomee Holdings Limited"
            	  },
            	  {
            	    "Symbol": "TEDU",
            	    "Name": "Tarena International, Inc."
            	  },
            	  {
            	    "Symbol": "NGLS^A",
            	    "Name": "Targa Resources Partners LP"
            	  },
            	  {
            	    "Symbol": "TRGP",
            	    "Name": "Targa Resources, Inc."
            	  },
            	  {
            	    "Symbol": "TGT",
            	    "Name": "Target Corporation"
            	  },
            	  {
            	    "Symbol": "TARO",
            	    "Name": "Taro Pharmaceutical Industries Ltd."
            	  },
            	  {
            	    "Symbol": "TGB",
            	    "Name": "Taseko Mines Limited"
            	  },
            	  {
            	    "Symbol": "TTM",
            	    "Name": "Tata Motors Ltd"
            	  },
            	  {
            	    "Symbol": "TCO",
            	    "Name": "Taubman Centers, Inc."
            	  },
            	  {
            	    "Symbol": "TCO^J",
            	    "Name": "Taubman Centers, Inc."
            	  },
            	  {
            	    "Symbol": "TCO^K",
            	    "Name": "Taubman Centers, Inc."
            	  },
            	  {
            	    "Symbol": "TAYD",
            	    "Name": "Taylor Devices, Inc."
            	  },
            	  {
            	    "Symbol": "TMHC",
            	    "Name": "Taylor Morrison Home Corporation"
            	  },
            	  {
            	    "Symbol": "TMH",
            	    "Name": "Team Health Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "TISI",
            	    "Name": "Team, Inc."
            	  },
            	  {
            	    "Symbol": "TEAR",
            	    "Name": "TearLab Corporation"
            	  },
            	  {
            	    "Symbol": "TECD",
            	    "Name": "Tech Data Corporation"
            	  },
            	  {
            	    "Symbol": "TTGT",
            	    "Name": "TechTarget, Inc."
            	  },
            	  {
            	    "Symbol": "TCCO",
            	    "Name": "Technical Communications Corporation"
            	  },
            	  {
            	    "Symbol": "TCK",
            	    "Name": "Teck Resources Ltd"
            	  },
            	  {
            	    "Symbol": "TGLS",
            	    "Name": "Tecnoglass Inc."
            	  },
            	  {
            	    "Symbol": "TGEN",
            	    "Name": "Tecogen Inc."
            	  },
            	  {
            	    "Symbol": "TK",
            	    "Name": "Teekay Corporation"
            	  },
            	  {
            	    "Symbol": "TGP",
            	    "Name": "Teekay LNG Partners L.P."
            	  },
            	  {
            	    "Symbol": "TOO",
            	    "Name": "Teekay Offshore Partners L.P."
            	  },
            	  {
            	    "Symbol": "TOO^A",
            	    "Name": "Teekay Offshore Partners L.P."
            	  },
            	  {
            	    "Symbol": "TOO^B",
            	    "Name": "Teekay Offshore Partners L.P."
            	  },
            	  {
            	    "Symbol": "TNK",
            	    "Name": "Teekay Tankers Ltd."
            	  },
            	  {
            	    "Symbol": "TRC",
            	    "Name": "Tejon Ranch Co"
            	  },
            	  {
            	    "Symbol": "HQH",
            	    "Name": "Tekla Healthcare Investors"
            	  },
            	  {
            	    "Symbol": "THQ",
            	    "Name": "Tekla Healthcare Opportunies Fund"
            	  },
            	  {
            	    "Symbol": "HQL",
            	    "Name": "Tekla Life Sciences Investors"
            	  },
            	  {
            	    "Symbol": "THW",
            	    "Name": "Tekla World Healthcare Fund"
            	  },
            	  {
            	    "Symbol": "TIK",
            	    "Name": "Tel-Instrument Electronics Corp."
            	  },
            	  {
            	    "Symbol": "TDOC",
            	    "Name": "Teladoc, Inc."
            	  },
            	  {
            	    "Symbol": "TNAV",
            	    "Name": "TeleNav, Inc."
            	  },
            	  {
            	    "Symbol": "TTEC",
            	    "Name": "TeleTech Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "TEO",
            	    "Name": "Telecom Argentina Stet - France Telecom S.A."
            	  },
            	  {
            	    "Symbol": "TI",
            	    "Name": "Telecom Italia S.P.A."
            	  },
            	  {
            	    "Symbol": "TI.A",
            	    "Name": "Telecom Italia S.P.A."
            	  },
            	  {
            	    "Symbol": "TDY",
            	    "Name": "Teledyne Technologies Incorporated"
            	  },
            	  {
            	    "Symbol": "TFX",
            	    "Name": "Teleflex Incorporated"
            	  },
            	  {
            	    "Symbol": "VIV",
            	    "Name": "Telefonica Brasil S.A."
            	  },
            	  {
            	    "Symbol": "TEF",
            	    "Name": "Telefonica SA"
            	  },
            	  {
            	    "Symbol": "TDA",
            	    "Name": "Telephone and Data Systems, Inc."
            	  },
            	  {
            	    "Symbol": "TDE",
            	    "Name": "Telephone and Data Systems, Inc."
            	  },
            	  {
            	    "Symbol": "TDI",
            	    "Name": "Telephone and Data Systems, Inc."
            	  },
            	  {
            	    "Symbol": "TDJ",
            	    "Name": "Telephone and Data Systems, Inc."
            	  },
            	  {
            	    "Symbol": "TDS",
            	    "Name": "Telephone and Data Systems, Inc."
            	  },
            	  {
            	    "Symbol": "TLGT",
            	    "Name": "Teligent, Inc."
            	  },
            	  {
            	    "Symbol": "TDF",
            	    "Name": "Templeton Dragon Fund, Inc."
            	  },
            	  {
            	    "Symbol": "EMF",
            	    "Name": "Templeton Emerging Markets Fund"
            	  },
            	  {
            	    "Symbol": "TEI",
            	    "Name": "Templeton Emerging Markets Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "GIM",
            	    "Name": "Templeton Global Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "TPX",
            	    "Name": "Tempur Sealy International, Inc."
            	  },
            	  {
            	    "Symbol": "TS",
            	    "Name": "Tenaris S.A."
            	  },
            	  {
            	    "Symbol": "TENX",
            	    "Name": "Tenax Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "THC",
            	    "Name": "Tenet Healthcare Corporation"
            	  },
            	  {
            	    "Symbol": "TGC",
            	    "Name": "Tengasco, Inc."
            	  },
            	  {
            	    "Symbol": "TNC",
            	    "Name": "Tennant Company"
            	  },
            	  {
            	    "Symbol": "TEN",
            	    "Name": "Tenneco Inc."
            	  },
            	  {
            	    "Symbol": "TVC",
            	    "Name": "Tennessee Valley Authority"
            	  },
            	  {
            	    "Symbol": "TVE",
            	    "Name": "Tennessee Valley Authority"
            	  },
            	  {
            	    "Symbol": "TDC",
            	    "Name": "Teradata Corporation"
            	  },
            	  {
            	    "Symbol": "TER",
            	    "Name": "Teradyne, Inc."
            	  },
            	  {
            	    "Symbol": "TEX",
            	    "Name": "Terex Corporation"
            	  },
            	  {
            	    "Symbol": "TX",
            	    "Name": "Ternium S.A."
            	  },
            	  {
            	    "Symbol": "TNH",
            	    "Name": "Terra Nitrogen Company, L.P."
            	  },
            	  {
            	    "Symbol": "GLBL",
            	    "Name": "TerraForm Global, Inc."
            	  },
            	  {
            	    "Symbol": "TERP",
            	    "Name": "TerraForm Power, Inc."
            	  },
            	  {
            	    "Symbol": "TRTL",
            	    "Name": "Terrapin 3 Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "TRTLU",
            	    "Name": "Terrapin 3 Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "TRTLW",
            	    "Name": "Terrapin 3 Acquisition Corporation"
            	  },
            	  {
            	    "Symbol": "TRNO",
            	    "Name": "Terreno Realty Corporation"
            	  },
            	  {
            	    "Symbol": "TRNO^A",
            	    "Name": "Terreno Realty Corporation"
            	  },
            	  {
            	    "Symbol": "TBNK",
            	    "Name": "Territorial Bancorp Inc."
            	  },
            	  {
            	    "Symbol": "TESO",
            	    "Name": "Tesco Corporation"
            	  },
            	  {
            	    "Symbol": "TSLA",
            	    "Name": "Tesla Motors, Inc."
            	  },
            	  {
            	    "Symbol": "TSO",
            	    "Name": "Tesoro Corporation"
            	  },
            	  {
            	    "Symbol": "TLLP",
            	    "Name": "Tesoro Logistics LP"
            	  },
            	  {
            	    "Symbol": "TSRA",
            	    "Name": "Tessera Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "TTEK",
            	    "Name": "Tetra Tech, Inc."
            	  },
            	  {
            	    "Symbol": "TTI",
            	    "Name": "Tetra Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "TLOG",
            	    "Name": "TetraLogic Pharmaceuticals Corporation"
            	  },
            	  {
            	    "Symbol": "TTPH",
            	    "Name": "Tetraphase Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "TEVA",
            	    "Name": "Teva Pharmaceutical Industries Limited"
            	  },
            	  {
            	    "Symbol": "TCBI",
            	    "Name": "Texas Capital Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "TCBIL",
            	    "Name": "Texas Capital Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "TCBIP",
            	    "Name": "Texas Capital Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "TCBIW",
            	    "Name": "Texas Capital Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "TXN",
            	    "Name": "Texas Instruments Incorporated"
            	  },
            	  {
            	    "Symbol": "TPL",
            	    "Name": "Texas Pacific Land Trust"
            	  },
            	  {
            	    "Symbol": "TXRH",
            	    "Name": "Texas Roadhouse, Inc."
            	  },
            	  {
            	    "Symbol": "TGH",
            	    "Name": "Textainer Group Holdings Limited"
            	  },
            	  {
            	    "Symbol": "TXT",
            	    "Name": "Textron Inc."
            	  },
            	  {
            	    "Symbol": "TXTR",
            	    "Name": "Textura Corporation"
            	  },
            	  {
            	    "Symbol": "TTF",
            	    "Name": "Thai Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "AES",
            	    "Name": "The AES Corporation"
            	  },
            	  {
            	    "Symbol": "AES^C",
            	    "Name": "The AES Corporation"
            	  },
            	  {
            	    "Symbol": "ABCO",
            	    "Name": "The Advisory Board Company"
            	  },
            	  {
            	    "Symbol": "ANDE",
            	    "Name": "The Andersons, Inc."
            	  },
            	  {
            	    "Symbol": "TBBK",
            	    "Name": "The Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "BX",
            	    "Name": "The Blackstone Group L.P."
            	  },
            	  {
            	    "Symbol": "BONT",
            	    "Name": "The Bon-Ton Stores, Inc."
            	  },
            	  {
            	    "Symbol": "CG",
            	    "Name": "The Carlyle Group L.P."
            	  },
            	  {
            	    "Symbol": "SCHW",
            	    "Name": "The Charles Schwab Corporation"
            	  },
            	  {
            	    "Symbol": "SCHW^B",
            	    "Name": "The Charles Schwab Corporation"
            	  },
            	  {
            	    "Symbol": "SCHW^C",
            	    "Name": "The Charles Schwab Corporation"
            	  },
            	  {
            	    "Symbol": "SCHW^D",
            	    "Name": "The Charles Schwab Corporation"
            	  },
            	  {
            	    "Symbol": "CAKE",
            	    "Name": "The Cheesecake Factory Incorporated"
            	  },
            	  {
            	    "Symbol": "CHEF",
            	    "Name": "The Chefs&#39; Warehouse, Inc."
            	  },
            	  {
            	    "Symbol": "TCFC",
            	    "Name": "The Community Financial Corporation"
            	  },
            	  {
            	    "Symbol": "SRV",
            	    "Name": "The Cushing MLP Total Return Fund"
            	  },
            	  {
            	    "Symbol": "DSGX",
            	    "Name": "The Descartes Systems Group Inc."
            	  },
            	  {
            	    "Symbol": "DXYN",
            	    "Name": "The Dixie Group, Inc."
            	  },
            	  {
            	    "Symbol": "ENSG",
            	    "Name": "The Ensign Group, Inc."
            	  },
            	  {
            	    "Symbol": "XONE",
            	    "Name": "The ExOne Company"
            	  },
            	  {
            	    "Symbol": "FINL",
            	    "Name": "The Finish Line, Inc."
            	  },
            	  {
            	    "Symbol": "FBMS",
            	    "Name": "The First Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "FLIC",
            	    "Name": "The First of Long Island Corporation"
            	  },
            	  {
            	    "Symbol": "TFM",
            	    "Name": "The Fresh Market, Inc."
            	  },
            	  {
            	    "Symbol": "GDL",
            	    "Name": "The GDL Fund"
            	  },
            	  {
            	    "Symbol": "GDL^B",
            	    "Name": "The GDL Fund"
            	  },
            	  {
            	    "Symbol": "GLU",
            	    "Name": "The Gabelli Global Utility and Income Trust"
            	  },
            	  {
            	    "Symbol": "GLU^A",
            	    "Name": "The Gabelli Global Utility and Income Trust"
            	  },
            	  {
            	    "Symbol": "GRX",
            	    "Name": "The Gabelli Healthcare & Wellness Trust"
            	  },
            	  {
            	    "Symbol": "GRX^A",
            	    "Name": "The Gabelli Healthcare & Wellness Trust"
            	  },
            	  {
            	    "Symbol": "GRX^B",
            	    "Name": "The Gabelli Healthcare & Wellness Trust"
            	  },
            	  {
            	    "Symbol": "GT",
            	    "Name": "The Goodyear Tire & Rubber Company"
            	  },
            	  {
            	    "Symbol": "HABT",
            	    "Name": "The Habit Restaurants, Inc."
            	  },
            	  {
            	    "Symbol": "HCKT",
            	    "Name": "The Hackett Group, Inc."
            	  },
            	  {
            	    "Symbol": "HAIN",
            	    "Name": "The Hain Celestial Group, Inc."
            	  },
            	  {
            	    "Symbol": "THG",
            	    "Name": "The Hanover Insurance Group, Inc."
            	  },
            	  {
            	    "Symbol": "THGA",
            	    "Name": "The Hanover Insurance Group, Inc."
            	  },
            	  {
            	    "Symbol": "CUBA",
            	    "Name": "The Herzfeld Caribbean Basin Fund, Inc."
            	  },
            	  {
            	    "Symbol": "INTG",
            	    "Name": "The Intergroup Corporation"
            	  },
            	  {
            	    "Symbol": "JYNT",
            	    "Name": "The Joint Corp."
            	  },
            	  {
            	    "Symbol": "KEYW",
            	    "Name": "The KEYW Holding Corporation"
            	  },
            	  {
            	    "Symbol": "KHC",
            	    "Name": "The Kraft Heinz Company"
            	  },
            	  {
            	    "Symbol": "MDCO",
            	    "Name": "The Medicines Company"
            	  },
            	  {
            	    "Symbol": "MIK",
            	    "Name": "The Michaels Companies, Inc."
            	  },
            	  {
            	    "Symbol": "MIDD",
            	    "Name": "The Middleby Corporation"
            	  },
            	  {
            	    "Symbol": "NAVG",
            	    "Name": "The Navigators Group, Inc."
            	  },
            	  {
            	    "Symbol": "STKS",
            	    "Name": "The ONE Group Hospitality, Inc."
            	  },
            	  {
            	    "Symbol": "PCLN",
            	    "Name": "The Priceline Group Inc."
            	  },
            	  {
            	    "Symbol": "PRSC",
            	    "Name": "The Providence Service Corporation"
            	  },
            	  {
            	    "Symbol": "RMR",
            	    "Name": "The RMR Group Inc."
            	  },
            	  {
            	    "Symbol": "BITE",
            	    "Name": "The Restaurant ETF"
            	  },
            	  {
            	    "Symbol": "RUBI",
            	    "Name": "The Rubicon Project, Inc."
            	  },
            	  {
            	    "Symbol": "SPNC",
            	    "Name": "The Spectranetics Corporation"
            	  },
            	  {
            	    "Symbol": "TRV",
            	    "Name": "The Travelers Companies, Inc."
            	  },
            	  {
            	    "Symbol": "ULTI",
            	    "Name": "The Ultimate Software Group, Inc."
            	  },
            	  {
            	    "Symbol": "YORW",
            	    "Name": "The York Water Company"
            	  },
            	  {
            	    "Symbol": "NCTY",
            	    "Name": "The9 Limited"
            	  },
            	  {
            	    "Symbol": "TST",
            	    "Name": "TheStreet, Inc."
            	  },
            	  {
            	    "Symbol": "TXMD",
            	    "Name": "TherapeuticsMD, Inc."
            	  },
            	  {
            	    "Symbol": "TBPH",
            	    "Name": "Theravance Biopharma, Inc."
            	  },
            	  {
            	    "Symbol": "TMO",
            	    "Name": "Thermo Fisher Scientific Inc"
            	  },
            	  {
            	    "Symbol": "THR",
            	    "Name": "Thermon Group Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "TPRE",
            	    "Name": "Third Point Reinsurance Ltd."
            	  },
            	  {
            	    "Symbol": "TRI",
            	    "Name": "Thomson Reuters Corp"
            	  },
            	  {
            	    "Symbol": "THO",
            	    "Name": "Thor Industries, Inc."
            	  },
            	  {
            	    "Symbol": "THLD",
            	    "Name": "Threshold Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "TIVO",
            	    "Name": "TiVo Inc."
            	  },
            	  {
            	    "Symbol": "TPI",
            	    "Name": "Tianyin Pharmaceutical Co., Inc."
            	  },
            	  {
            	    "Symbol": "TDW",
            	    "Name": "Tidewater Inc."
            	  },
            	  {
            	    "Symbol": "TIF",
            	    "Name": "Tiffany & Co."
            	  },
            	  {
            	    "Symbol": "TTS",
            	    "Name": "Tile Shop Hldgs, Inc."
            	  },
            	  {
            	    "Symbol": "TIL",
            	    "Name": "Till Capital Ltd."
            	  },
            	  {
            	    "Symbol": "TLYS",
            	    "Name": "Tilly&#39;s, Inc."
            	  },
            	  {
            	    "Symbol": "TSBK",
            	    "Name": "Timberland Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "TIME",
            	    "Name": "Time Inc."
            	  },
            	  {
            	    "Symbol": "TWC",
            	    "Name": "Time Warner Cable Inc"
            	  },
            	  {
            	    "Symbol": "TWX",
            	    "Name": "Time Warner Inc."
            	  },
            	  {
            	    "Symbol": "TKR",
            	    "Name": "Timken Company (The)"
            	  },
            	  {
            	    "Symbol": "TMST",
            	    "Name": "Timken Steel Corporation"
            	  },
            	  {
            	    "Symbol": "TGD",
            	    "Name": "Timmons Gold Corp"
            	  },
            	  {
            	    "Symbol": "TIPT",
            	    "Name": "Tiptree Financial Inc."
            	  },
            	  {
            	    "Symbol": "TWI",
            	    "Name": "Titan International, Inc."
            	  },
            	  {
            	    "Symbol": "TITN",
            	    "Name": "Titan Machinery Inc."
            	  },
            	  {
            	    "Symbol": "TTNP",
            	    "Name": "Titan Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "TBRA",
            	    "Name": "Tobira Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "TOF",
            	    "Name": "Tofutti Brands Inc."
            	  },
            	  {
            	    "Symbol": "TKAI",
            	    "Name": "Tokai Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "TOL",
            	    "Name": "Toll Brothers Inc."
            	  },
            	  {
            	    "Symbol": "TMP",
            	    "Name": "Tompkins Financial Corporation"
            	  },
            	  {
            	    "Symbol": "TNXP",
            	    "Name": "Tonix Pharmaceuticals Holding Corp."
            	  },
            	  {
            	    "Symbol": "TR",
            	    "Name": "Tootsie Roll Industries, Inc."
            	  },
            	  {
            	    "Symbol": "TISA",
            	    "Name": "Top Image Systems, Ltd."
            	  },
            	  {
            	    "Symbol": "BLD",
            	    "Name": "TopBuild Corp."
            	  },
            	  {
            	    "Symbol": "TRCH",
            	    "Name": "Torchlight Energy Resources, Inc."
            	  },
            	  {
            	    "Symbol": "TMK",
            	    "Name": "Torchmark Corporation"
            	  },
            	  {
            	    "Symbol": "TMK^B",
            	    "Name": "Torchmark Corporation"
            	  },
            	  {
            	    "Symbol": "TTC",
            	    "Name": "Toro Company (The)"
            	  },
            	  {
            	    "Symbol": "TD",
            	    "Name": "Toronto Dominion Bank (The)"
            	  },
            	  {
            	    "Symbol": "NDP",
            	    "Name": "Tortoise Energy Independence Fund, Inc."
            	  },
            	  {
            	    "Symbol": "TYG",
            	    "Name": "Tortoise Energy Infrastructure Corporation"
            	  },
            	  {
            	    "Symbol": "NTG",
            	    "Name": "Tortoise MLP Fund, Inc."
            	  },
            	  {
            	    "Symbol": "TTP",
            	    "Name": "Tortoise Pipeline & Energy Fund, Inc."
            	  },
            	  {
            	    "Symbol": "TPZ",
            	    "Name": "Tortoise Power and Energy Infrastructure Fund, Inc"
            	  },
            	  {
            	    "Symbol": "TSS",
            	    "Name": "Total System Services, Inc."
            	  },
            	  {
            	    "Symbol": "TOT",
            	    "Name": "TotalFinaElf, S.A."
            	  },
            	  {
            	    "Symbol": "TOWR",
            	    "Name": "Tower International, Inc."
            	  },
            	  {
            	    "Symbol": "TSEM",
            	    "Name": "Tower Semiconductor Ltd."
            	  },
            	  {
            	    "Symbol": "TWER",
            	    "Name": "Towerstream Corporation"
            	  },
            	  {
            	    "Symbol": "CLUB",
            	    "Name": "Town Sports International Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "TOWN",
            	    "Name": "Towne Bank"
            	  },
            	  {
            	    "Symbol": "TSQ",
            	    "Name": "Townsquare Media, Inc."
            	  },
            	  {
            	    "Symbol": "TM",
            	    "Name": "Toyota Motor Corp Ltd Ord"
            	  },
            	  {
            	    "Symbol": "TSCO",
            	    "Name": "Tractor Supply Company"
            	  },
            	  {
            	    "Symbol": "TWMC",
            	    "Name": "Trans World Entertainment Corp."
            	  },
            	  {
            	    "Symbol": "TACT",
            	    "Name": "TransAct Technologies Incorporated"
            	  },
            	  {
            	    "Symbol": "TAC",
            	    "Name": "TransAlta Corporation"
            	  },
            	  {
            	    "Symbol": "TRP",
            	    "Name": "TransCanada Corporation"
            	  },
            	  {
            	    "Symbol": "TRXC",
            	    "Name": "TransEnterix, Inc."
            	  },
            	  {
            	    "Symbol": "TRU",
            	    "Name": "TransUnion"
            	  },
            	  {
            	    "Symbol": "TAT",
            	    "Name": "Transatlantic Petroleum Ltd"
            	  },
            	  {
            	    "Symbol": "TRNS",
            	    "Name": "Transcat, Inc."
            	  },
            	  {
            	    "Symbol": "TCI",
            	    "Name": "Transcontinental Realty Investors, Inc."
            	  },
            	  {
            	    "Symbol": "TDG",
            	    "Name": "Transdigm Group Incorporated"
            	  },
            	  {
            	    "Symbol": "TBIO",
            	    "Name": "Transgenomic, Inc."
            	  },
            	  {
            	    "Symbol": "TGA",
            	    "Name": "Transglobe Energy Corp"
            	  },
            	  {
            	    "Symbol": "TTHI",
            	    "Name": "Transition Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "TLP",
            	    "Name": "Transmontaigne Partners L.P."
            	  },
            	  {
            	    "Symbol": "RIG",
            	    "Name": "Transocean Ltd."
            	  },
            	  {
            	    "Symbol": "RIGP",
            	    "Name": "Transocean Partners LLC"
            	  },
            	  {
            	    "Symbol": "TGS",
            	    "Name": "Transportadora De Gas Sa Ord B"
            	  },
            	  {
            	    "Symbol": "TA",
            	    "Name": "TravelCenters of America LLC"
            	  },
            	  {
            	    "Symbol": "TANN",
            	    "Name": "TravelCenters of America LLC"
            	  },
            	  {
            	    "Symbol": "TANO",
            	    "Name": "TravelCenters of America LLC"
            	  },
            	  {
            	    "Symbol": "TANP",
            	    "Name": "TravelCenters of America LLC"
            	  },
            	  {
            	    "Symbol": "TVPT",
            	    "Name": "Travelport Worldwide Limited"
            	  },
            	  {
            	    "Symbol": "TZOO",
            	    "Name": "Travelzoo Inc."
            	  },
            	  {
            	    "Symbol": "TREC",
            	    "Name": "Trecora Resources"
            	  },
            	  {
            	    "Symbol": "TG",
            	    "Name": "Tredegar Corporation"
            	  },
            	  {
            	    "Symbol": "THS",
            	    "Name": "Treehouse Foods, Inc."
            	  },
            	  {
            	    "Symbol": "TRMR",
            	    "Name": "Tremor Video, Inc."
            	  },
            	  {
            	    "Symbol": "TRVN",
            	    "Name": "Trevena, Inc."
            	  },
            	  {
            	    "Symbol": "TREX",
            	    "Name": "Trex Company, Inc."
            	  },
            	  {
            	    "Symbol": "TY",
            	    "Name": "Tri Continental Corporation"
            	  },
            	  {
            	    "Symbol": "TY^",
            	    "Name": "Tri Continental Corporation"
            	  },
            	  {
            	    "Symbol": "TCBK",
            	    "Name": "TriCo Bancshares"
            	  },
            	  {
            	    "Symbol": "TRS",
            	    "Name": "TriMas Corporation"
            	  },
            	  {
            	    "Symbol": "TNET",
            	    "Name": "TriNet Group, Inc."
            	  },
            	  {
            	    "Symbol": "TSC",
            	    "Name": "TriState Capital Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "TCAP",
            	    "Name": "Triangle Capital Corporation"
            	  },
            	  {
            	    "Symbol": "TCCA",
            	    "Name": "Triangle Capital Corporation"
            	  },
            	  {
            	    "Symbol": "TCCB",
            	    "Name": "Triangle Capital Corporation"
            	  },
            	  {
            	    "Symbol": "TPLM",
            	    "Name": "Triangle Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "TRCO",
            	    "Name": "Tribune Media Company"
            	  },
            	  {
            	    "Symbol": "TPUB",
            	    "Name": "Tribune Publishing Company"
            	  },
            	  {
            	    "Symbol": "TRIL",
            	    "Name": "Trillium Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "TRMB",
            	    "Name": "Trimble Navigation Limited"
            	  },
            	  {
            	    "Symbol": "TSL",
            	    "Name": "Trina Solar Limited"
            	  },
            	  {
            	    "Symbol": "TRIB",
            	    "Name": "Trinity Biotech plc"
            	  },
            	  {
            	    "Symbol": "TRN",
            	    "Name": "Trinity Industries, Inc."
            	  },
            	  {
            	    "Symbol": "TPHS",
            	    "Name": "Trinity Place Holdings Inc."
            	  },
            	  {
            	    "Symbol": "TSE",
            	    "Name": "Trinseo S.A."
            	  },
            	  {
            	    "Symbol": "TRT",
            	    "Name": "Trio-Tech International"
            	  },
            	  {
            	    "Symbol": "TRIP",
            	    "Name": "TripAdvisor, Inc."
            	  },
            	  {
            	    "Symbol": "GTS",
            	    "Name": "Triple-S Management Corporation"
            	  },
            	  {
            	    "Symbol": "TPVG",
            	    "Name": "TriplePoint Venture Growth BDC Corp."
            	  },
            	  {
            	    "Symbol": "TPVZ",
            	    "Name": "TriplePoint Venture Growth BDC Corp."
            	  },
            	  {
            	    "Symbol": "TBK",
            	    "Name": "Triumph Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "TGI",
            	    "Name": "Triumph Group, Inc."
            	  },
            	  {
            	    "Symbol": "TROX",
            	    "Name": "Tronox Limited"
            	  },
            	  {
            	    "Symbol": "TROV",
            	    "Name": "TrovaGene, Inc."
            	  },
            	  {
            	    "Symbol": "TROVU",
            	    "Name": "TrovaGene, Inc."
            	  },
            	  {
            	    "Symbol": "TROVW",
            	    "Name": "TrovaGene, Inc."
            	  },
            	  {
            	    "Symbol": "TBI",
            	    "Name": "TrueBlue, Inc."
            	  },
            	  {
            	    "Symbol": true,
            	    "Name": "TrueCar, Inc."
            	  },
            	  {
            	    "Symbol": "THST",
            	    "Name": "Truett-Hurst, Inc."
            	  },
            	  {
            	    "Symbol": "TRUP",
            	    "Name": "Trupanion, Inc."
            	  },
            	  {
            	    "Symbol": "TRST",
            	    "Name": "TrustCo Bank Corp NY"
            	  },
            	  {
            	    "Symbol": "TRMK",
            	    "Name": "Trustmark Corporation"
            	  },
            	  {
            	    "Symbol": "TNP",
            	    "Name": "Tsakos Energy Navigation Ltd"
            	  },
            	  {
            	    "Symbol": "TNP^B",
            	    "Name": "Tsakos Energy Navigation Ltd"
            	  },
            	  {
            	    "Symbol": "TNP^C",
            	    "Name": "Tsakos Energy Navigation Ltd"
            	  },
            	  {
            	    "Symbol": "TNP^D",
            	    "Name": "Tsakos Energy Navigation Ltd"
            	  },
            	  {
            	    "Symbol": "TUBE",
            	    "Name": "TubeMogul, Inc."
            	  },
            	  {
            	    "Symbol": "TCX",
            	    "Name": "Tucows Inc."
            	  },
            	  {
            	    "Symbol": "TUES",
            	    "Name": "Tuesday Morning Corp."
            	  },
            	  {
            	    "Symbol": "TUMI",
            	    "Name": "Tumi Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "TOUR",
            	    "Name": "Tuniu Corporation"
            	  },
            	  {
            	    "Symbol": "TUP",
            	    "Name": "Tupperware Brands Corporation"
            	  },
            	  {
            	    "Symbol": "TKC",
            	    "Name": "Turkcell Iletisim Hizmetleri AS"
            	  },
            	  {
            	    "Symbol": "TKF",
            	    "Name": "Turkish Investment Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "TRQ",
            	    "Name": "Turquoise Hill Resources Ltd."
            	  },
            	  {
            	    "Symbol": "HEAR",
            	    "Name": "Turtle Beach Corporation"
            	  },
            	  {
            	    "Symbol": "TPC",
            	    "Name": "Tutor Perini Corporation"
            	  },
            	  {
            	    "Symbol": "TUTI",
            	    "Name": "Tuttle Tactical Management Multi-Strategy Income ETF"
            	  },
            	  {
            	    "Symbol": "TUTT",
            	    "Name": "Tuttle Tactical Management U.S. Core ETF"
            	  },
            	  {
            	    "Symbol": "FOX",
            	    "Name": "Twenty-First Century Fox, Inc."
            	  },
            	  {
            	    "Symbol": "FOXA",
            	    "Name": "Twenty-First Century Fox, Inc."
            	  },
            	  {
            	    "Symbol": "TWIN",
            	    "Name": "Twin Disc, Incorporated"
            	  },
            	  {
            	    "Symbol": "TWTR",
            	    "Name": "Twitter, Inc."
            	  },
            	  {
            	    "Symbol": "TWO",
            	    "Name": "Two Harbors Investments Corp"
            	  },
            	  {
            	    "Symbol": "TRCB",
            	    "Name": "Two River Bancorp"
            	  },
            	  {
            	    "Symbol": "TYC",
            	    "Name": "Tyco International plc"
            	  },
            	  {
            	    "Symbol": "TYL",
            	    "Name": "Tyler Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "TSN",
            	    "Name": "Tyson Foods, Inc."
            	  },
            	  {
            	    "Symbol": "TSNU",
            	    "Name": "Tyson Foods, Inc."
            	  },
            	  {
            	    "Symbol": "USCR",
            	    "Name": "U S Concrete, Inc."
            	  },
            	  {
            	    "Symbol": "PRTS",
            	    "Name": "U.S. Auto Parts Network, Inc."
            	  },
            	  {
            	    "Symbol": "USB",
            	    "Name": "U.S. Bancorp"
            	  },
            	  {
            	    "Symbol": "USB^A",
            	    "Name": "U.S. Bancorp"
            	  },
            	  {
            	    "Symbol": "USB^H",
            	    "Name": "U.S. Bancorp"
            	  },
            	  {
            	    "Symbol": "USB^M",
            	    "Name": "U.S. Bancorp"
            	  },
            	  {
            	    "Symbol": "USB^N",
            	    "Name": "U.S. Bancorp"
            	  },
            	  {
            	    "Symbol": "USB^O",
            	    "Name": "U.S. Bancorp"
            	  },
            	  {
            	    "Symbol": "USEG",
            	    "Name": "U.S. Energy Corp."
            	  },
            	  {
            	    "Symbol": "HTM",
            	    "Name": "U.S. Geothermal Inc."
            	  },
            	  {
            	    "Symbol": "GROW",
            	    "Name": "U.S. Global Investors, Inc."
            	  },
            	  {
            	    "Symbol": "USPH",
            	    "Name": "U.S. Physical Therapy, Inc."
            	  },
            	  {
            	    "Symbol": "SLCA",
            	    "Name": "U.S. Silica Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "UBIC",
            	    "Name": "UBIC, Inc."
            	  },
            	  {
            	    "Symbol": "UBS",
            	    "Name": "UBS AG"
            	  },
            	  {
            	    "Symbol": "UBS^D",
            	    "Name": "UBS AG"
            	  },
            	  {
            	    "Symbol": "UCP",
            	    "Name": "UCP, Inc."
            	  },
            	  {
            	    "Symbol": "UFPT",
            	    "Name": "UFP Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "UGI",
            	    "Name": "UGI Corporation"
            	  },
            	  {
            	    "Symbol": "UMBF",
            	    "Name": "UMB Financial Corporation"
            	  },
            	  {
            	    "Symbol": "UMH",
            	    "Name": "UMH Properties, Inc."
            	  },
            	  {
            	    "Symbol": "UMH^A",
            	    "Name": "UMH Properties, Inc."
            	  },
            	  {
            	    "Symbol": "UMH^B",
            	    "Name": "UMH Properties, Inc."
            	  },
            	  {
            	    "Symbol": "UTL",
            	    "Name": "UNITIL Corporation"
            	  },
            	  {
            	    "Symbol": "UVE",
            	    "Name": "UNIVERSAL INSURANCE HOLDINGS INC"
            	  },
            	  {
            	    "Symbol": "UQM",
            	    "Name": "UQM TECHNOLOGIES INC"
            	  },
            	  {
            	    "Symbol": "ECOL",
            	    "Name": "US Ecology, Inc."
            	  },
            	  {
            	    "Symbol": "USAC",
            	    "Name": "USA Compression Partners, LP"
            	  },
            	  {
            	    "Symbol": "USAT",
            	    "Name": "USA Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "USATP",
            	    "Name": "USA Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "USAK",
            	    "Name": "USA Truck, Inc."
            	  },
            	  {
            	    "Symbol": "USNA",
            	    "Name": "USANA Health Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "USDP",
            	    "Name": "USD Partners LP"
            	  },
            	  {
            	    "Symbol": "USG",
            	    "Name": "USG Corporation"
            	  },
            	  {
            	    "Symbol": "BIF",
            	    "Name": "USLIFE Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "USMD",
            	    "Name": "USMD Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "UTSI",
            	    "Name": "UTStarcom Holdings Corp"
            	  },
            	  {
            	    "Symbol": "UBNT",
            	    "Name": "Ubiquiti Networks, Inc."
            	  },
            	  {
            	    "Symbol": "ULTA",
            	    "Name": "Ulta Salon, Cosmetics & Fragrance, Inc."
            	  },
            	  {
            	    "Symbol": "UCTT",
            	    "Name": "Ultra Clean Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "UPL",
            	    "Name": "Ultra Petroleum Corp."
            	  },
            	  {
            	    "Symbol": "RARE",
            	    "Name": "Ultragenyx Pharmaceutical Inc."
            	  },
            	  {
            	    "Symbol": "ULBI",
            	    "Name": "Ultralife Corporation"
            	  },
            	  {
            	    "Symbol": "UGP",
            	    "Name": "Ultrapar Participacoes S.A."
            	  },
            	  {
            	    "Symbol": "ULTR",
            	    "Name": "Ultrapetrol (Bahamas) Limited"
            	  },
            	  {
            	    "Symbol": "UTEK",
            	    "Name": "Ultratech, Inc."
            	  },
            	  {
            	    "Symbol": "UMPQ",
            	    "Name": "Umpqua Holdings Corporation"
            	  },
            	  {
            	    "Symbol": "UA",
            	    "Name": "Under Armour, Inc."
            	  },
            	  {
            	    "Symbol": "UNXL",
            	    "Name": "Uni-Pixel, Inc."
            	  },
            	  {
            	    "Symbol": "UNAM",
            	    "Name": "Unico American Corporation"
            	  },
            	  {
            	    "Symbol": "UFI",
            	    "Name": "Unifi, Inc."
            	  },
            	  {
            	    "Symbol": "UNF",
            	    "Name": "Unifirst Corporation"
            	  },
            	  {
            	    "Symbol": "UN",
            	    "Name": "Unilever NV"
            	  },
            	  {
            	    "Symbol": "UL",
            	    "Name": "Unilever PLC"
            	  },
            	  {
            	    "Symbol": "UNIS",
            	    "Name": "Unilife Corporation"
            	  },
            	  {
            	    "Symbol": "UBSH",
            	    "Name": "Union Bankshares Corporation"
            	  },
            	  {
            	    "Symbol": "UNB",
            	    "Name": "Union Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "UNP",
            	    "Name": "Union Pacific Corporation"
            	  },
            	  {
            	    "Symbol": "UFAB",
            	    "Name": "Unique Fabricating, Inc."
            	  },
            	  {
            	    "Symbol": "UIS",
            	    "Name": "Unisys Corporation"
            	  },
            	  {
            	    "Symbol": "UNT",
            	    "Name": "Unit Corporation"
            	  },
            	  {
            	    "Symbol": "UBCP",
            	    "Name": "United Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "UBOH",
            	    "Name": "United Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "UBSI",
            	    "Name": "United Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "UCBA",
            	    "Name": "United Community Bancorp"
            	  },
            	  {
            	    "Symbol": "UCBI",
            	    "Name": "United Community Banks, Inc."
            	  },
            	  {
            	    "Symbol": "UCFC",
            	    "Name": "United Community Financial Corp."
            	  },
            	  {
            	    "Symbol": "UAL",
            	    "Name": "United Continental Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "UDF",
            	    "Name": "United Development Funding IV"
            	  },
            	  {
            	    "Symbol": "UDR",
            	    "Name": "United Dominion Realty Trust, Inc."
            	  },
            	  {
            	    "Symbol": "UBNK",
            	    "Name": "United Financial Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "UFCS",
            	    "Name": "United Fire Group, Inc"
            	  },
            	  {
            	    "Symbol": "UIHC",
            	    "Name": "United Insurance Holdings Corp."
            	  },
            	  {
            	    "Symbol": "UMC",
            	    "Name": "United Microelectronics Corporation"
            	  },
            	  {
            	    "Symbol": "UNFI",
            	    "Name": "United Natural Foods, Inc."
            	  },
            	  {
            	    "Symbol": "UNTD",
            	    "Name": "United Online, Inc."
            	  },
            	  {
            	    "Symbol": "UPS",
            	    "Name": "United Parcel Service, Inc."
            	  },
            	  {
            	    "Symbol": "URI",
            	    "Name": "United Rentals, Inc."
            	  },
            	  {
            	    "Symbol": "UBFO",
            	    "Name": "United Security Bancshares"
            	  },
            	  {
            	    "Symbol": "USBI",
            	    "Name": "United Security Bancshares, Inc."
            	  },
            	  {
            	    "Symbol": "UAMY",
            	    "Name": "United States Antimony Corporation"
            	  },
            	  {
            	    "Symbol": "USM",
            	    "Name": "United States Cellular Corporation"
            	  },
            	  {
            	    "Symbol": "UZA",
            	    "Name": "United States Cellular Corporation"
            	  },
            	  {
            	    "Symbol": "UZB",
            	    "Name": "United States Cellular Corporation"
            	  },
            	  {
            	    "Symbol": "UZC",
            	    "Name": "United States Cellular Corporation"
            	  },
            	  {
            	    "Symbol": "USLM",
            	    "Name": "United States Lime & Minerals, Inc."
            	  },
            	  {
            	    "Symbol": "X",
            	    "Name": "United States Steel Corporation"
            	  },
            	  {
            	    "Symbol": "UTX",
            	    "Name": "United Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "UTHR",
            	    "Name": "United Therapeutics Corporation"
            	  },
            	  {
            	    "Symbol": "UG",
            	    "Name": "United-Guardian, Inc."
            	  },
            	  {
            	    "Symbol": "UNH",
            	    "Name": "UnitedHealth Group Incorporated"
            	  },
            	  {
            	    "Symbol": "UNTY",
            	    "Name": "Unity Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "UNVR",
            	    "Name": "Univar Inc."
            	  },
            	  {
            	    "Symbol": "UAM",
            	    "Name": "Universal American Corp."
            	  },
            	  {
            	    "Symbol": "UVV",
            	    "Name": "Universal Corporation"
            	  },
            	  {
            	    "Symbol": "OLED",
            	    "Name": "Universal Display Corporation"
            	  },
            	  {
            	    "Symbol": "UEIC",
            	    "Name": "Universal Electronics Inc."
            	  },
            	  {
            	    "Symbol": "UFPI",
            	    "Name": "Universal Forest Products, Inc."
            	  },
            	  {
            	    "Symbol": "UHT",
            	    "Name": "Universal Health Realty Income Trust"
            	  },
            	  {
            	    "Symbol": "UHS",
            	    "Name": "Universal Health Services, Inc."
            	  },
            	  {
            	    "Symbol": "UUU",
            	    "Name": "Universal Security Instruments, Inc."
            	  },
            	  {
            	    "Symbol": "USAP",
            	    "Name": "Universal Stainless & Alloy Products, Inc."
            	  },
            	  {
            	    "Symbol": "UTI",
            	    "Name": "Universal Technical Institute Inc"
            	  },
            	  {
            	    "Symbol": "UACL",
            	    "Name": "Universal Truckload Services, Inc."
            	  },
            	  {
            	    "Symbol": "UVSP",
            	    "Name": "Univest Corporation of Pennsylvania"
            	  },
            	  {
            	    "Symbol": "UNM",
            	    "Name": "Unum Group"
            	  },
            	  {
            	    "Symbol": "UPIP",
            	    "Name": "Unwired Planet, Inc."
            	  },
            	  {
            	    "Symbol": "UPLD",
            	    "Name": "Upland Software, Inc."
            	  },
            	  {
            	    "Symbol": "URG",
            	    "Name": "Ur Energy Inc"
            	  },
            	  {
            	    "Symbol": "UEC",
            	    "Name": "Uranium Energy Corp."
            	  },
            	  {
            	    "Symbol": "URRE",
            	    "Name": "Uranium Resources, Inc."
            	  },
            	  {
            	    "Symbol": "UE",
            	    "Name": "Urban Edge Properties"
            	  },
            	  {
            	    "Symbol": "URBN",
            	    "Name": "Urban Outfitters, Inc."
            	  },
            	  {
            	    "Symbol": "UBA",
            	    "Name": "Urstadt Biddle Properties Inc."
            	  },
            	  {
            	    "Symbol": "UBP",
            	    "Name": "Urstadt Biddle Properties Inc."
            	  },
            	  {
            	    "Symbol": "UBP^F",
            	    "Name": "Urstadt Biddle Properties Inc."
            	  },
            	  {
            	    "Symbol": "UBP^G",
            	    "Name": "Urstadt Biddle Properties Inc."
            	  },
            	  {
            	    "Symbol": "UTMD",
            	    "Name": "Utah Medical Products, Inc."
            	  },
            	  {
            	    "Symbol": "VFC",
            	    "Name": "V.F. Corporation"
            	  },
            	  {
            	    "Symbol": "VALE",
            	    "Name": "VALE S.A."
            	  },
            	  {
            	    "Symbol": "VALE.P",
            	    "Name": "VALE S.A."
            	  },
            	  {
            	    "Symbol": "VDSI",
            	    "Name": "VASCO Data Security International, Inc."
            	  },
            	  {
            	    "Symbol": "VBIV",
            	    "Name": "VBI Vaccines Inc."
            	  },
            	  {
            	    "Symbol": "WOOF",
            	    "Name": "VCA Inc."
            	  },
            	  {
            	    "Symbol": "VER",
            	    "Name": "VEREIT Inc."
            	  },
            	  {
            	    "Symbol": "VER^F",
            	    "Name": "VEREIT Inc."
            	  },
            	  {
            	    "Symbol": "VVUS",
            	    "Name": "VIVUS, Inc."
            	  },
            	  {
            	    "Symbol": "VOC",
            	    "Name": "VOC Energy Trust"
            	  },
            	  {
            	    "Symbol": "VOXX",
            	    "Name": "VOXX International Corporation"
            	  },
            	  {
            	    "Symbol": "VSEC",
            	    "Name": "VSE Corporation"
            	  },
            	  {
            	    "Symbol": "VTTI",
            	    "Name": "VTTI Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "VWR",
            	    "Name": "VWR Corporation"
            	  },
            	  {
            	    "Symbol": "EGY",
            	    "Name": "Vaalco Energy Inc"
            	  },
            	  {
            	    "Symbol": "MTN",
            	    "Name": "Vail Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "VRX",
            	    "Name": "Valeant Pharmaceuticals International, Inc."
            	  },
            	  {
            	    "Symbol": "VLO",
            	    "Name": "Valero Energy Corporation"
            	  },
            	  {
            	    "Symbol": "VLP",
            	    "Name": "Valero Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "VHI",
            	    "Name": "Valhi, Inc."
            	  },
            	  {
            	    "Symbol": "VALX",
            	    "Name": "Validea Market Legends ETF"
            	  },
            	  {
            	    "Symbol": "VR",
            	    "Name": "Validus Holdings, Ltd."
            	  },
            	  {
            	    "Symbol": "VLY",
            	    "Name": "Valley National Bancorp"
            	  },
            	  {
            	    "Symbol": "VLY.WS",
            	    "Name": "Valley National Bancorp"
            	  },
            	  {
            	    "Symbol": "VLY^A",
            	    "Name": "Valley National Bancorp"
            	  },
            	  {
            	    "Symbol": "VMI",
            	    "Name": "Valmont Industries, Inc."
            	  },
            	  {
            	    "Symbol": "VAL",
            	    "Name": "Valspar Corporation (The)"
            	  },
            	  {
            	    "Symbol": "VALU",
            	    "Name": "Value Line, Inc."
            	  },
            	  {
            	    "Symbol": "VNDA",
            	    "Name": "Vanda Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "VWOB",
            	    "Name": "Vanguard Emerging Markets Government Bond ETF"
            	  },
            	  {
            	    "Symbol": "VNQI",
            	    "Name": "Vanguard Global ex-U.S. Real Estate ETF"
            	  },
            	  {
            	    "Symbol": "VGIT",
            	    "Name": "Vanguard Intermediate -Term Government Bond ETF"
            	  },
            	  {
            	    "Symbol": "VCIT",
            	    "Name": "Vanguard Intermediate-Term Corporate Bond ETF"
            	  },
            	  {
            	    "Symbol": "VIGI",
            	    "Name": "Vanguard International Dividend Appreciation ETF"
            	  },
            	  {
            	    "Symbol": "VYMI",
            	    "Name": "Vanguard International High Dividend Yield ETF"
            	  },
            	  {
            	    "Symbol": "VCLT",
            	    "Name": "Vanguard Long-Term Corporate Bond ETF"
            	  },
            	  {
            	    "Symbol": "VGLT",
            	    "Name": "Vanguard Long-Term Government Bond ETF"
            	  },
            	  {
            	    "Symbol": "VMBS",
            	    "Name": "Vanguard Mortgage-Backed Securities ETF"
            	  },
            	  {
            	    "Symbol": "VNR",
            	    "Name": "Vanguard Natural Resources LLC"
            	  },
            	  {
            	    "Symbol": "VNRAP",
            	    "Name": "Vanguard Natural Resources LLC"
            	  },
            	  {
            	    "Symbol": "VNRBP",
            	    "Name": "Vanguard Natural Resources LLC"
            	  },
            	  {
            	    "Symbol": "VNRCP",
            	    "Name": "Vanguard Natural Resources LLC"
            	  },
            	  {
            	    "Symbol": "VONE",
            	    "Name": "Vanguard Russell 1000 ETF"
            	  },
            	  {
            	    "Symbol": "VONG",
            	    "Name": "Vanguard Russell 1000 Growth ETF"
            	  },
            	  {
            	    "Symbol": "VONV",
            	    "Name": "Vanguard Russell 1000 Value ETF"
            	  },
            	  {
            	    "Symbol": "VTWO",
            	    "Name": "Vanguard Russell 2000 ETF"
            	  },
            	  {
            	    "Symbol": "VTWG",
            	    "Name": "Vanguard Russell 2000 Growth ETF"
            	  },
            	  {
            	    "Symbol": "VTWV",
            	    "Name": "Vanguard Russell 2000 Value ETF"
            	  },
            	  {
            	    "Symbol": "VTHR",
            	    "Name": "Vanguard Russell 3000 ETF"
            	  },
            	  {
            	    "Symbol": "VCSH",
            	    "Name": "Vanguard Short-Term Corporate Bond ETF"
            	  },
            	  {
            	    "Symbol": "VGSH",
            	    "Name": "Vanguard Short-Term Government ETF"
            	  },
            	  {
            	    "Symbol": "VTIP",
            	    "Name": "Vanguard Short-Term Inflation-Protected Securities Index Fund"
            	  },
            	  {
            	    "Symbol": "BNDX",
            	    "Name": "Vanguard Total International Bond ETF"
            	  },
            	  {
            	    "Symbol": "VXUS",
            	    "Name": "Vanguard Total International Stock ETF"
            	  },
            	  {
            	    "Symbol": "VNTV",
            	    "Name": "Vantiv, Inc."
            	  },
            	  {
            	    "Symbol": "VAR",
            	    "Name": "Varian Medical Systems, Inc."
            	  },
            	  {
            	    "Symbol": "VRNS",
            	    "Name": "Varonis Systems, Inc."
            	  },
            	  {
            	    "Symbol": "VBLT",
            	    "Name": "Vascular Biogenics Ltd."
            	  },
            	  {
            	    "Symbol": "VASC",
            	    "Name": "Vascular Solutions, Inc."
            	  },
            	  {
            	    "Symbol": "VGR",
            	    "Name": "Vector Group Ltd."
            	  },
            	  {
            	    "Symbol": "VVC",
            	    "Name": "Vectren Corporation"
            	  },
            	  {
            	    "Symbol": "VEC",
            	    "Name": "Vectrus, Inc."
            	  },
            	  {
            	    "Symbol": "VEDL",
            	    "Name": "Vedanta  Limited"
            	  },
            	  {
            	    "Symbol": "VECO",
            	    "Name": "Veeco Instruments Inc."
            	  },
            	  {
            	    "Symbol": "VEEV",
            	    "Name": "Veeva Systems Inc."
            	  },
            	  {
            	    "Symbol": "APPY",
            	    "Name": "Venaxis, Inc."
            	  },
            	  {
            	    "Symbol": "VTRB",
            	    "Name": "Ventas Realty, Limited Partnership \/\/ Ventas Capital Corporati"
            	  },
            	  {
            	    "Symbol": "VTR",
            	    "Name": "Ventas, Inc."
            	  },
            	  {
            	    "Symbol": "VRA",
            	    "Name": "Vera Bradley, Inc."
            	  },
            	  {
            	    "Symbol": "VCYT",
            	    "Name": "Veracyte, Inc."
            	  },
            	  {
            	    "Symbol": "VSTM",
            	    "Name": "Verastem, Inc."
            	  },
            	  {
            	    "Symbol": "VRSN",
            	    "Name": "VeriSign, Inc."
            	  },
            	  {
            	    "Symbol": "VCEL",
            	    "Name": "Vericel Corporation"
            	  },
            	  {
            	    "Symbol": "PAY",
            	    "Name": "Verifone Systems, Inc."
            	  },
            	  {
            	    "Symbol": "VRNT",
            	    "Name": "Verint Systems Inc."
            	  },
            	  {
            	    "Symbol": "VRSK",
            	    "Name": "Verisk Analytics, Inc."
            	  },
            	  {
            	    "Symbol": "VBTX",
            	    "Name": "Veritex Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "VRTV",
            	    "Name": "Veritiv Corporation"
            	  },
            	  {
            	    "Symbol": "VZ",
            	    "Name": "Verizon Communications Inc."
            	  },
            	  {
            	    "Symbol": "VZA",
            	    "Name": "Verizon Communications Inc."
            	  },
            	  {
            	    "Symbol": "VET",
            	    "Name": "Vermilion Energy Inc."
            	  },
            	  {
            	    "Symbol": "VRML",
            	    "Name": "Vermillion, Inc."
            	  },
            	  {
            	    "Symbol": "VSR",
            	    "Name": "Versar, Inc."
            	  },
            	  {
            	    "Symbol": "VSAR",
            	    "Name": "Versartis, Inc."
            	  },
            	  {
            	    "Symbol": "VTNR",
            	    "Name": "Vertex Energy, Inc"
            	  },
            	  {
            	    "Symbol": "VRTX",
            	    "Name": "Vertex Pharmaceuticals Incorporated"
            	  },
            	  {
            	    "Symbol": "VRTB",
            	    "Name": "Vestin Realty Mortgage II, Inc."
            	  },
            	  {
            	    "Symbol": "VSAT",
            	    "Name": "ViaSat, Inc."
            	  },
            	  {
            	    "Symbol": "VIA",
            	    "Name": "Viacom Inc."
            	  },
            	  {
            	    "Symbol": "VIAB",
            	    "Name": "Viacom Inc."
            	  },
            	  {
            	    "Symbol": "VVI",
            	    "Name": "Viad Corp"
            	  },
            	  {
            	    "Symbol": "VIAV",
            	    "Name": "Viavi Solutions Inc."
            	  },
            	  {
            	    "Symbol": "VICL",
            	    "Name": "Vical Incorporated"
            	  },
            	  {
            	    "Symbol": "VII",
            	    "Name": "Vicon Industries, Inc."
            	  },
            	  {
            	    "Symbol": "VICR",
            	    "Name": "Vicor Corporation"
            	  },
            	  {
            	    "Symbol": "CIZ",
            	    "Name": "Victory CEMP Developed Enhanced Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CID",
            	    "Name": "Victory CEMP International High Div Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CIL",
            	    "Name": "Victory CEMP International Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CFO",
            	    "Name": "Victory CEMP US 500 Enhanced Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CFA",
            	    "Name": "Victory CEMP US 500 Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CSF",
            	    "Name": "Victory CEMP US Discovery Enhanced Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CDC",
            	    "Name": "Victory CEMP US EQ Income Enhanced Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CDL",
            	    "Name": "Victory CEMP US Large Cap High Div Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CSB",
            	    "Name": "Victory CEMP US Small Cap High Div Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "CSA",
            	    "Name": "Victory CEMP US Small Cap Volatility Wtd Index ETF"
            	  },
            	  {
            	    "Symbol": "VBND",
            	    "Name": "Vident Core U.S. Bond Strategy Fund"
            	  },
            	  {
            	    "Symbol": "VUSE",
            	    "Name": "Vident Core US Equity ETF"
            	  },
            	  {
            	    "Symbol": "VIDI",
            	    "Name": "Vident International Equity Fund"
            	  },
            	  {
            	    "Symbol": "VDTH",
            	    "Name": "Videocon d2h Limited"
            	  },
            	  {
            	    "Symbol": "VKTX",
            	    "Name": "Viking Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "VBFC",
            	    "Name": "Village Bank and Trust Financial Corp."
            	  },
            	  {
            	    "Symbol": "VLGEA",
            	    "Name": "Village Super Market, Inc."
            	  },
            	  {
            	    "Symbol": "VIP",
            	    "Name": "VimpelCom Ltd."
            	  },
            	  {
            	    "Symbol": "VCO",
            	    "Name": "Vina Concha Y Toro"
            	  },
            	  {
            	    "Symbol": "VNCE",
            	    "Name": "Vince Holding Corp."
            	  },
            	  {
            	    "Symbol": "VMEM",
            	    "Name": "Violin Memory, Inc."
            	  },
            	  {
            	    "Symbol": "VNOM",
            	    "Name": "Viper Energy Partners LP"
            	  },
            	  {
            	    "Symbol": "VIPS",
            	    "Name": "Vipshop Holdings Limited"
            	  },
            	  {
            	    "Symbol": "VIRC",
            	    "Name": "Virco Manufacturing Corporation"
            	  },
            	  {
            	    "Symbol": "VA",
            	    "Name": "Virgin America Inc."
            	  },
            	  {
            	    "Symbol": "VHC",
            	    "Name": "VirnetX Holding Corp"
            	  },
            	  {
            	    "Symbol": "VIRT",
            	    "Name": "Virtu Financial, Inc."
            	  },
            	  {
            	    "Symbol": "VSCP",
            	    "Name": "VirtualScopics, Inc."
            	  },
            	  {
            	    "Symbol": "VGI",
            	    "Name": "Virtus Global Multi-Sector Income Fund"
            	  },
            	  {
            	    "Symbol": "VRTS",
            	    "Name": "Virtus Investment Partners, Inc."
            	  },
            	  {
            	    "Symbol": "DCA",
            	    "Name": "Virtus Total Return Fund"
            	  },
            	  {
            	    "Symbol": "VRTU",
            	    "Name": "Virtusa Corporation"
            	  },
            	  {
            	    "Symbol": "V",
            	    "Name": "Visa Inc."
            	  },
            	  {
            	    "Symbol": "VSH",
            	    "Name": "Vishay Intertechnology, Inc."
            	  },
            	  {
            	    "Symbol": "VPG",
            	    "Name": "Vishay Precision Group, Inc."
            	  },
            	  {
            	    "Symbol": "VISN",
            	    "Name": "VisionChina Media, Inc."
            	  },
            	  {
            	    "Symbol": "VGZ",
            	    "Name": "Vista Gold Corporation"
            	  },
            	  {
            	    "Symbol": "VSTO",
            	    "Name": "Vista Outdoor Inc."
            	  },
            	  {
            	    "Symbol": "VC",
            	    "Name": "Visteon Corporation"
            	  },
            	  {
            	    "Symbol": "VTAE",
            	    "Name": "Vitae Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "VTL",
            	    "Name": "Vital Therapies, Inc."
            	  },
            	  {
            	    "Symbol": "VSI",
            	    "Name": "Vitamin Shoppe, Inc"
            	  },
            	  {
            	    "Symbol": "VSLR",
            	    "Name": "Vivint Solar, Inc."
            	  },
            	  {
            	    "Symbol": "VMW",
            	    "Name": "Vmware, Inc."
            	  },
            	  {
            	    "Symbol": "VCRA",
            	    "Name": "Vocera Communications, Inc."
            	  },
            	  {
            	    "Symbol": "VOD",
            	    "Name": "Vodafone Group Plc"
            	  },
            	  {
            	    "Symbol": "VNRX",
            	    "Name": "VolitionRX Limited"
            	  },
            	  {
            	    "Symbol": "VISI",
            	    "Name": "Volt Information Sciences, Inc."
            	  },
            	  {
            	    "Symbol": "VLTC",
            	    "Name": "Voltari Corporation"
            	  },
            	  {
            	    "Symbol": "VG",
            	    "Name": "Vonage Holdings Corp."
            	  },
            	  {
            	    "Symbol": "VNO",
            	    "Name": "Vornado Realty Trust"
            	  },
            	  {
            	    "Symbol": "VNO^G",
            	    "Name": "Vornado Realty Trust"
            	  },
            	  {
            	    "Symbol": "VNO^I",
            	    "Name": "Vornado Realty Trust"
            	  },
            	  {
            	    "Symbol": "VNO^J",
            	    "Name": "Vornado Realty Trust"
            	  },
            	  {
            	    "Symbol": "VNO^K",
            	    "Name": "Vornado Realty Trust"
            	  },
            	  {
            	    "Symbol": "VNO^L",
            	    "Name": "Vornado Realty Trust"
            	  },
            	  {
            	    "Symbol": "IAE",
            	    "Name": "Voya Asia Pacific High Dividend Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "IHD",
            	    "Name": "Voya Emerging Markets High Income Dividend Equity Fund"
            	  },
            	  {
            	    "Symbol": "VOYA",
            	    "Name": "Voya Financial, Inc."
            	  },
            	  {
            	    "Symbol": "IGA",
            	    "Name": "Voya Global Advantage and Premium Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "IGD",
            	    "Name": "Voya Global Equity Dividend and Premium Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "IDE",
            	    "Name": "Voya Infrastructure, Industrials and Materials Fund"
            	  },
            	  {
            	    "Symbol": "IID",
            	    "Name": "Voya International High Dividend Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "IRR",
            	    "Name": "Voya Natural Resources Equity Income Fund"
            	  },
            	  {
            	    "Symbol": "PPR",
            	    "Name": "Voya Prime Rate Trust"
            	  },
            	  {
            	    "Symbol": "VYGR",
            	    "Name": "Voyager Therapeutics, Inc."
            	  },
            	  {
            	    "Symbol": "VRNG",
            	    "Name": "Vringo, Inc."
            	  },
            	  {
            	    "Symbol": "VMC",
            	    "Name": "Vulcan Materials Company"
            	  },
            	  {
            	    "Symbol": "VUZI",
            	    "Name": "Vuzix Corporation"
            	  },
            	  {
            	    "Symbol": "WTI",
            	    "Name": "W&T Offshore, Inc."
            	  },
            	  {
            	    "Symbol": "WPC",
            	    "Name": "W.P. Carey Inc."
            	  },
            	  {
            	    "Symbol": "WRB",
            	    "Name": "W.R. Berkley Corporation"
            	  },
            	  {
            	    "Symbol": "WRB^B",
            	    "Name": "W.R. Berkley Corporation"
            	  },
            	  {
            	    "Symbol": "WRB^C",
            	    "Name": "W.R. Berkley Corporation"
            	  },
            	  {
            	    "Symbol": "GRA",
            	    "Name": "W.R. Grace & Co."
            	  },
            	  {
            	    "Symbol": "GWW",
            	    "Name": "W.W. Grainger, Inc."
            	  },
            	  {
            	    "Symbol": "WVE",
            	    "Name": "WAVE Life Sciences Ltd."
            	  },
            	  {
            	    "Symbol": "WCIC",
            	    "Name": "WCI Communities, Inc."
            	  },
            	  {
            	    "Symbol": "WDFC",
            	    "Name": "WD-40 Company"
            	  },
            	  {
            	    "Symbol": "WEC",
            	    "Name": "WEC Energy Group, Inc."
            	  },
            	  {
            	    "Symbol": "WCC",
            	    "Name": "WESCO International, Inc."
            	  },
            	  {
            	    "Symbol": "WEX",
            	    "Name": "WEX Inc."
            	  },
            	  {
            	    "Symbol": "WGL",
            	    "Name": "WGL Holdings Inc"
            	  },
            	  {
            	    "Symbol": "WLRH",
            	    "Name": "WL Ross Holding Corp."
            	  },
            	  {
            	    "Symbol": "WLRHU",
            	    "Name": "WL Ross Holding Corp."
            	  },
            	  {
            	    "Symbol": "WLRHW",
            	    "Name": "WL Ross Holding Corp."
            	  },
            	  {
            	    "Symbol": "WMIH",
            	    "Name": "WMIH Corp."
            	  },
            	  {
            	    "Symbol": "WNS",
            	    "Name": "WNS (Holdings) Limited"
            	  },
            	  {
            	    "Symbol": "WPG",
            	    "Name": "WP Glimcher Inc."
            	  },
            	  {
            	    "Symbol": "WPG^H",
            	    "Name": "WP Glimcher Inc."
            	  },
            	  {
            	    "Symbol": "WPG^I",
            	    "Name": "WP Glimcher Inc."
            	  },
            	  {
            	    "Symbol": "WPCS",
            	    "Name": "WPCS International Incorporated"
            	  },
            	  {
            	    "Symbol": "WPPGY",
            	    "Name": "WPP plc"
            	  },
            	  {
            	    "Symbol": "WPX",
            	    "Name": "WPX Energy, Inc."
            	  },
            	  {
            	    "Symbol": "WPXP",
            	    "Name": "WPX Energy, Inc."
            	  },
            	  {
            	    "Symbol": "WSFS",
            	    "Name": "WSFS Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WSFSL",
            	    "Name": "WSFS Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WSCI",
            	    "Name": "WSI Industries Inc."
            	  },
            	  {
            	    "Symbol": "WVFC",
            	    "Name": "WVS Financial Corp."
            	  },
            	  {
            	    "Symbol": "WNC",
            	    "Name": "Wabash National Corporation"
            	  },
            	  {
            	    "Symbol": "WBC",
            	    "Name": "Wabco Holdings Inc."
            	  },
            	  {
            	    "Symbol": "WDR",
            	    "Name": "Waddell & Reed Financial, Inc."
            	  },
            	  {
            	    "Symbol": "WGBS",
            	    "Name": "WaferGen Bio-systems, Inc."
            	  },
            	  {
            	    "Symbol": "WAGE",
            	    "Name": "WageWorks, Inc."
            	  },
            	  {
            	    "Symbol": "WMT",
            	    "Name": "Wal-Mart Stores, Inc."
            	  },
            	  {
            	    "Symbol": "WBA",
            	    "Name": "Walgreens Boots Alliance, Inc."
            	  },
            	  {
            	    "Symbol": "WD",
            	    "Name": "Walker & Dunlop, Inc."
            	  },
            	  {
            	    "Symbol": "DIS",
            	    "Name": "Walt Disney Company (The)"
            	  },
            	  {
            	    "Symbol": "WAC",
            	    "Name": "Walter Investment Management Corp."
            	  },
            	  {
            	    "Symbol": "WRES",
            	    "Name": "Warren Resources, Inc."
            	  },
            	  {
            	    "Symbol": "WAFD",
            	    "Name": "Washington Federal, Inc."
            	  },
            	  {
            	    "Symbol": "WAFDW",
            	    "Name": "Washington Federal, Inc."
            	  },
            	  {
            	    "Symbol": "WRE",
            	    "Name": "Washington Real Estate Investment Trust"
            	  },
            	  {
            	    "Symbol": "WASH",
            	    "Name": "Washington Trust Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "WFBI",
            	    "Name": "WashingtonFirst Bankshares Inc"
            	  },
            	  {
            	    "Symbol": "WCN",
            	    "Name": "Waste Connections, Inc."
            	  },
            	  {
            	    "Symbol": "WM",
            	    "Name": "Waste Management, Inc."
            	  },
            	  {
            	    "Symbol": "WAT",
            	    "Name": "Waters Corporation"
            	  },
            	  {
            	    "Symbol": "WSBF",
            	    "Name": "Waterstone Financial, Inc."
            	  },
            	  {
            	    "Symbol": "WSO",
            	    "Name": "Watsco, Inc."
            	  },
            	  {
            	    "Symbol": "WSO.B",
            	    "Name": "Watsco, Inc."
            	  },
            	  {
            	    "Symbol": "WTS",
            	    "Name": "Watts Water Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "W",
            	    "Name": "Wayfair Inc."
            	  },
            	  {
            	    "Symbol": "WAYN",
            	    "Name": "Wayne Savings Bancshares Inc."
            	  },
            	  {
            	    "Symbol": "WSTG",
            	    "Name": "Wayside Technology Group, Inc."
            	  },
            	  {
            	    "Symbol": "FLAG",
            	    "Name": "WeatherStorm Forensic Accounting Long Short ETF"
            	  },
            	  {
            	    "Symbol": "WFT",
            	    "Name": "Weatherford International plc"
            	  },
            	  {
            	    "Symbol": "WEB",
            	    "Name": "Web.com Group, Inc."
            	  },
            	  {
            	    "Symbol": "WBMD",
            	    "Name": "WebMD Health Corp"
            	  },
            	  {
            	    "Symbol": "WBS",
            	    "Name": "Webster Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WBS^E",
            	    "Name": "Webster Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WB",
            	    "Name": "Weibo Corporation"
            	  },
            	  {
            	    "Symbol": "WTW",
            	    "Name": "Weight Watchers International Inc"
            	  },
            	  {
            	    "Symbol": "WRI",
            	    "Name": "Weingarten Realty Investors"
            	  },
            	  {
            	    "Symbol": "WMK",
            	    "Name": "Weis Markets, Inc."
            	  },
            	  {
            	    "Symbol": "WCG",
            	    "Name": "WellCare Health Plans, Inc."
            	  },
            	  {
            	    "Symbol": "WEBK",
            	    "Name": "Wellesley Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "WFC",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC.WS",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^J",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^L",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^N",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^O",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^P",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^Q",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^R",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^T",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^V",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFC^W",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "WFE^A",
            	    "Name": "Wells Fargo & Company"
            	  },
            	  {
            	    "Symbol": "EOD",
            	    "Name": "Wells Fargo Global Dividend Opportunity Fund"
            	  },
            	  {
            	    "Symbol": "EAD",
            	    "Name": "Wells Fargo Income Opportunities Fund"
            	  },
            	  {
            	    "Symbol": "ERC",
            	    "Name": "Wells Fargo Multi-Sector Income Fund"
            	  },
            	  {
            	    "Symbol": "ERH",
            	    "Name": "Wells Fargo Utilities and High Income Fund"
            	  },
            	  {
            	    "Symbol": "HCN",
            	    "Name": "Welltower Inc."
            	  },
            	  {
            	    "Symbol": "HCN^I",
            	    "Name": "Welltower Inc."
            	  },
            	  {
            	    "Symbol": "HCN^J",
            	    "Name": "Welltower Inc."
            	  },
            	  {
            	    "Symbol": "WEN",
            	    "Name": "Wendy&#39;s Company (The)"
            	  },
            	  {
            	    "Symbol": "WERN",
            	    "Name": "Werner Enterprises, Inc."
            	  },
            	  {
            	    "Symbol": "WSBC",
            	    "Name": "WesBanco, Inc."
            	  },
            	  {
            	    "Symbol": "WAIR",
            	    "Name": "Wesco Aircraft Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "WTBA",
            	    "Name": "West Bancorporation"
            	  },
            	  {
            	    "Symbol": "WSTC",
            	    "Name": "West Corporation"
            	  },
            	  {
            	    "Symbol": "WMAR",
            	    "Name": "West Marine, Inc."
            	  },
            	  {
            	    "Symbol": "WST",
            	    "Name": "West Pharmaceutical Services, Inc."
            	  },
            	  {
            	    "Symbol": "WABC",
            	    "Name": "Westamerica Bancorporation"
            	  },
            	  {
            	    "Symbol": "WR",
            	    "Name": "Westar Energy, Inc."
            	  },
            	  {
            	    "Symbol": "WBB",
            	    "Name": "Westbury Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "WSTL",
            	    "Name": "Westell Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "WAL",
            	    "Name": "Western Alliance Bancorporation"
            	  },
            	  {
            	    "Symbol": "WEA",
            	    "Name": "Western Asset Bond Fund"
            	  },
            	  {
            	    "Symbol": "ESD",
            	    "Name": "Western Asset Emerging Markets Debt Fund Inc"
            	  },
            	  {
            	    "Symbol": "EMD",
            	    "Name": "Western Asset Emerging Markets Income Fund, Inc"
            	  },
            	  {
            	    "Symbol": "GDO",
            	    "Name": "Western Asset Global Corporate Defined Opportunity Fund Inc."
            	  },
            	  {
            	    "Symbol": "EHI",
            	    "Name": "Western Asset Global High Income Fund Inc"
            	  },
            	  {
            	    "Symbol": "GDF",
            	    "Name": "Western Asset Global Partners Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "HIX",
            	    "Name": "Western Asset High Income Fund II Inc."
            	  },
            	  {
            	    "Symbol": "HIO",
            	    "Name": "Western Asset High Income Opportunity Fund, Inc."
            	  },
            	  {
            	    "Symbol": "HYI",
            	    "Name": "Western Asset High Yield Defined Opportunity Fund Inc."
            	  },
            	  {
            	    "Symbol": "SBI",
            	    "Name": "Western Asset Intermediate Muni Fund Inc"
            	  },
            	  {
            	    "Symbol": "IGI",
            	    "Name": "Western Asset Investment Grade Defined Opportunity Trust Inc."
            	  },
            	  {
            	    "Symbol": "MHY",
            	    "Name": "Western Asset Managed High Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MMU",
            	    "Name": "Western Asset Managed Municipals Fund, Inc."
            	  },
            	  {
            	    "Symbol": "WMC",
            	    "Name": "Western Asset Mortgage Capital Corporation"
            	  },
            	  {
            	    "Symbol": "DMO",
            	    "Name": "Western Asset Mortgage Defined Opportunity Fund Inc"
            	  },
            	  {
            	    "Symbol": "MTT",
            	    "Name": "Western Asset Municipal Defined Opportunity Trust Inc"
            	  },
            	  {
            	    "Symbol": "MHF",
            	    "Name": "Western Asset Municipal High Income Fund, Inc."
            	  },
            	  {
            	    "Symbol": "MNP",
            	    "Name": "Western Asset Municipal Partners Fund, Inc."
            	  },
            	  {
            	    "Symbol": "GFY",
            	    "Name": "Western Asset Variable Rate Strategic Fund Inc."
            	  },
            	  {
            	    "Symbol": "SBW",
            	    "Name": "Western Asset Worldwide Income Fund Inc."
            	  },
            	  {
            	    "Symbol": "WIW",
            	    "Name": "Western Asset\/Claymore U.S Treasury Inflation Prot Secs Fd 2"
            	  },
            	  {
            	    "Symbol": "WIA",
            	    "Name": "Western Asset\/Claymore U.S. Treasury Inflation Prot Secs Fd"
            	  },
            	  {
            	    "Symbol": "WRN",
            	    "Name": "Western Copper and Gold Corporation"
            	  },
            	  {
            	    "Symbol": "WDC",
            	    "Name": "Western Digital Corporation"
            	  },
            	  {
            	    "Symbol": "WGP",
            	    "Name": "Western Gas Equity Partners, LP"
            	  },
            	  {
            	    "Symbol": "WES",
            	    "Name": "Western Gas Partners, LP"
            	  },
            	  {
            	    "Symbol": "WNRL",
            	    "Name": "Western Refining Logistics, LP"
            	  },
            	  {
            	    "Symbol": "WNR",
            	    "Name": "Western Refining, Inc."
            	  },
            	  {
            	    "Symbol": "WU",
            	    "Name": "Western Union Company (The)"
            	  },
            	  {
            	    "Symbol": "WFD",
            	    "Name": "Westfield Financial, Inc."
            	  },
            	  {
            	    "Symbol": "WAB",
            	    "Name": "Westinghouse Air Brake Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "WLK",
            	    "Name": "Westlake Chemical Corporation"
            	  },
            	  {
            	    "Symbol": "WLKP",
            	    "Name": "Westlake Chemical Partners LP"
            	  },
            	  {
            	    "Symbol": "WLB",
            	    "Name": "Westmoreland Coal Company"
            	  },
            	  {
            	    "Symbol": "WMLP",
            	    "Name": "Westmoreland Resource Partners, LP"
            	  },
            	  {
            	    "Symbol": "WBK",
            	    "Name": "Westpac Banking Corporation"
            	  },
            	  {
            	    "Symbol": "WPRT",
            	    "Name": "Westport Innovations Inc"
            	  },
            	  {
            	    "Symbol": "WRK",
            	    "Name": "Westrock Company"
            	  },
            	  {
            	    "Symbol": "WHG",
            	    "Name": "Westwood Holdings Group Inc"
            	  },
            	  {
            	    "Symbol": "WEYS",
            	    "Name": "Weyco Group, Inc."
            	  },
            	  {
            	    "Symbol": "WY",
            	    "Name": "Weyerhaeuser Company"
            	  },
            	  {
            	    "Symbol": "WY^A",
            	    "Name": "Weyerhaeuser Company"
            	  },
            	  {
            	    "Symbol": "WHLR",
            	    "Name": "Wheeler Real Estate Investment Trust, Inc."
            	  },
            	  {
            	    "Symbol": "WHLRP",
            	    "Name": "Wheeler Real Estate Investment Trust, Inc."
            	  },
            	  {
            	    "Symbol": "WHLRW",
            	    "Name": "Wheeler Real Estate Investment Trust, Inc."
            	  },
            	  {
            	    "Symbol": "WHR",
            	    "Name": "Whirlpool Corporation"
            	  },
            	  {
            	    "Symbol": "WTM",
            	    "Name": "White Mountains Insurance Group, Ltd."
            	  },
            	  {
            	    "Symbol": "WHF",
            	    "Name": "WhiteHorse Finance, Inc."
            	  },
            	  {
            	    "Symbol": "WHFBL",
            	    "Name": "WhiteHorse Finance, Inc."
            	  },
            	  {
            	    "Symbol": "WSR",
            	    "Name": "Whitestone REIT"
            	  },
            	  {
            	    "Symbol": "WWAV",
            	    "Name": "Whitewave Foods Company (The)"
            	  },
            	  {
            	    "Symbol": "WLL",
            	    "Name": "Whiting Petroleum Corporation"
            	  },
            	  {
            	    "Symbol": "WFM",
            	    "Name": "Whole Foods Market, Inc."
            	  },
            	  {
            	    "Symbol": "WILN",
            	    "Name": "Wi-Lan Inc"
            	  },
            	  {
            	    "Symbol": "WYY",
            	    "Name": "WidePoint Corporation"
            	  },
            	  {
            	    "Symbol": "WHLM",
            	    "Name": "Wilhelmina International, Inc."
            	  },
            	  {
            	    "Symbol": "WVVI",
            	    "Name": "Willamette Valley Vineyards, Inc."
            	  },
            	  {
            	    "Symbol": "WVVIP",
            	    "Name": "Willamette Valley Vineyards, Inc."
            	  },
            	  {
            	    "Symbol": "WG",
            	    "Name": "Willbros Group, Inc."
            	  },
            	  {
            	    "Symbol": "WLDN",
            	    "Name": "Willdan Group, Inc."
            	  },
            	  {
            	    "Symbol": "WMB",
            	    "Name": "Williams Companies, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "WPZ",
            	    "Name": "Williams Partners LP"
            	  },
            	  {
            	    "Symbol": "WSM",
            	    "Name": "Williams-Sonoma, Inc."
            	  },
            	  {
            	    "Symbol": "WLFC",
            	    "Name": "Willis Lease Finance Corporation"
            	  },
            	  {
            	    "Symbol": "WLTW",
            	    "Name": "Willis Towers Watson Public Limited Company"
            	  },
            	  {
            	    "Symbol": "WIBC",
            	    "Name": "Wilshire Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "WIN",
            	    "Name": "Windstream Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "WING",
            	    "Name": "Wingstop Inc."
            	  },
            	  {
            	    "Symbol": "WINA",
            	    "Name": "Winmark Corporation"
            	  },
            	  {
            	    "Symbol": "WGO",
            	    "Name": "Winnebago Industries, Inc."
            	  },
            	  {
            	    "Symbol": "WINS",
            	    "Name": "Wins Finance Holdings Inc."
            	  },
            	  {
            	    "Symbol": "FUR",
            	    "Name": "Winthrop Realty Trust"
            	  },
            	  {
            	    "Symbol": "WTFC",
            	    "Name": "Wintrust Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WTFCM",
            	    "Name": "Wintrust Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WTFCW",
            	    "Name": "Wintrust Financial Corporation"
            	  },
            	  {
            	    "Symbol": "WIT",
            	    "Name": "Wipro Limited"
            	  },
            	  {
            	    "Symbol": "WTT",
            	    "Name": "Wireless Telecom Group,  Inc."
            	  },
            	  {
            	    "Symbol": "AGND",
            	    "Name": "WisdomTree Barclays U.S. Aggregate Bond Negative Duration Fund"
            	  },
            	  {
            	    "Symbol": "AGZD",
            	    "Name": "WisdomTree Barclays U.S. Aggregate Bond Zero Duration Fund"
            	  },
            	  {
            	    "Symbol": "HYND",
            	    "Name": "WisdomTree BofA Merrill Lynch High Yield Bond Negative Duratio"
            	  },
            	  {
            	    "Symbol": "HYZD",
            	    "Name": "WisdomTree BofA Merrill Lynch High Yield Bond Zero Duration Fu"
            	  },
            	  {
            	    "Symbol": "CXSE",
            	    "Name": "WisdomTree China ex-State-Owned Enterprises Fund"
            	  },
            	  {
            	    "Symbol": "EMCG",
            	    "Name": "WisdomTree Emerging Markets Consumer Growth Fund"
            	  },
            	  {
            	    "Symbol": "EMCB",
            	    "Name": "WisdomTree Emerging Markets Corporate Bond Fund"
            	  },
            	  {
            	    "Symbol": "DGRE",
            	    "Name": "WisdomTree Emerging Markets Quality Dividend Growth Fund"
            	  },
            	  {
            	    "Symbol": "DXGE",
            	    "Name": "WisdomTree Germany Hedged Equity Fund"
            	  },
            	  {
            	    "Symbol": "WETF",
            	    "Name": "WisdomTree Investments, Inc."
            	  },
            	  {
            	    "Symbol": "DXJS",
            	    "Name": "WisdomTree Japan Hedged SmallCap Equity Fund"
            	  },
            	  {
            	    "Symbol": "JGBB",
            	    "Name": "WisdomTree Japan Interest Rate Strategy Fund"
            	  },
            	  {
            	    "Symbol": "DXKW",
            	    "Name": "WisdomTree Korea Hedged Equity Fund"
            	  },
            	  {
            	    "Symbol": "GULF",
            	    "Name": "WisdomTree Middle East Dividend Fund"
            	  },
            	  {
            	    "Symbol": "CRDT",
            	    "Name": "WisdomTree Strategic Corporate Bond Fund"
            	  },
            	  {
            	    "Symbol": "DGRW",
            	    "Name": "WisdomTree U.S. Quality Dividend Growth Fund"
            	  },
            	  {
            	    "Symbol": "DGRS",
            	    "Name": "WisdomTree U.S. SmallCap Quality Dividend Growth Fund"
            	  },
            	  {
            	    "Symbol": "DXPS",
            	    "Name": "WisdomTree United Kingdom Hedged Equity Fund"
            	  },
            	  {
            	    "Symbol": "UBND",
            	    "Name": "WisdomTree Western Asset Unconstrained Bond Fund"
            	  },
            	  {
            	    "Symbol": "WIX",
            	    "Name": "Wix.com Ltd."
            	  },
            	  {
            	    "Symbol": "WBKC",
            	    "Name": "Wolverine Bancorp, Inc."
            	  },
            	  {
            	    "Symbol": "WWW",
            	    "Name": "Wolverine World Wide, Inc."
            	  },
            	  {
            	    "Symbol": "WWD",
            	    "Name": "Woodward, Inc."
            	  },
            	  {
            	    "Symbol": "WF",
            	    "Name": "Woori Bank"
            	  },
            	  {
            	    "Symbol": "WDAY",
            	    "Name": "Workday, Inc."
            	  },
            	  {
            	    "Symbol": "WKHS",
            	    "Name": "Workhorse Group, Inc."
            	  },
            	  {
            	    "Symbol": "WK",
            	    "Name": "Workiva Inc."
            	  },
            	  {
            	    "Symbol": "WRLD",
            	    "Name": "World Acceptance Corporation"
            	  },
            	  {
            	    "Symbol": "INT",
            	    "Name": "World Fuel Services Corporation"
            	  },
            	  {
            	    "Symbol": "WPT",
            	    "Name": "World Point Terminals, LP"
            	  },
            	  {
            	    "Symbol": "WWE",
            	    "Name": "World Wrestling Entertainment, Inc."
            	  },
            	  {
            	    "Symbol": "WOR",
            	    "Name": "Worthington Industries, Inc."
            	  },
            	  {
            	    "Symbol": "WOWO",
            	    "Name": "Wowo Limited"
            	  },
            	  {
            	    "Symbol": "WMGI",
            	    "Name": "Wright Medical Group N.V."
            	  },
            	  {
            	    "Symbol": "WMGIZ",
            	    "Name": "Wright Medical Group N.V."
            	  },
            	  {
            	    "Symbol": "WYN",
            	    "Name": "Wyndham Worldwide Corp"
            	  },
            	  {
            	    "Symbol": "WYNN",
            	    "Name": "Wynn Resorts, Limited"
            	  },
            	  {
            	    "Symbol": "XBIT",
            	    "Name": "XBiotech Inc."
            	  },
            	  {
            	    "Symbol": "XGTI",
            	    "Name": "XG Technology, Inc"
            	  },
            	  {
            	    "Symbol": "XGTIW",
            	    "Name": "XG Technology, Inc"
            	  },
            	  {
            	    "Symbol": "XL",
            	    "Name": "XL Group plc"
            	  },
            	  {
            	    "Symbol": "XOXO",
            	    "Name": "XO Group, Inc."
            	  },
            	  {
            	    "Symbol": "XOMA",
            	    "Name": "XOMA Corporation"
            	  },
            	  {
            	    "Symbol": "XPO",
            	    "Name": "XPO Logistics, Inc."
            	  },
            	  {
            	    "Symbol": "XTLB",
            	    "Name": "XTL Biopharmaceuticals Ltd."
            	  },
            	  {
            	    "Symbol": "XTLY",
            	    "Name": "Xactly Corporation"
            	  },
            	  {
            	    "Symbol": "XELB",
            	    "Name": "Xcel Brands, Inc"
            	  },
            	  {
            	    "Symbol": "XEL",
            	    "Name": "Xcel Energy Inc."
            	  },
            	  {
            	    "Symbol": "XCRA",
            	    "Name": "Xcerra Corporation"
            	  },
            	  {
            	    "Symbol": "XNCR",
            	    "Name": "Xencor, Inc."
            	  },
            	  {
            	    "Symbol": "XHR",
            	    "Name": "Xenia Hotels & Resorts, Inc."
            	  },
            	  {
            	    "Symbol": "XBKS",
            	    "Name": "Xenith Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "XNPT",
            	    "Name": "XenoPort, Inc."
            	  },
            	  {
            	    "Symbol": "XENE",
            	    "Name": "Xenon Pharmaceuticals Inc."
            	  },
            	  {
            	    "Symbol": "XRM",
            	    "Name": "Xerium Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "XRX",
            	    "Name": "Xerox Corporation"
            	  },
            	  {
            	    "Symbol": "XLNX",
            	    "Name": "Xilinx, Inc."
            	  },
            	  {
            	    "Symbol": "XIN",
            	    "Name": "Xinyuan Real Estate Co Ltd"
            	  },
            	  {
            	    "Symbol": "XPLR",
            	    "Name": "Xplore Technologies Corp"
            	  },
            	  {
            	    "Symbol": "XTNT",
            	    "Name": "Xtant Medical Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "XCOM",
            	    "Name": "Xtera Communications, Inc."
            	  },
            	  {
            	    "Symbol": "XUE",
            	    "Name": "Xueda Education Group"
            	  },
            	  {
            	    "Symbol": "XNET",
            	    "Name": "Xunlei Limited"
            	  },
            	  {
            	    "Symbol": "MESG",
            	    "Name": "Xura, Inc."
            	  },
            	  {
            	    "Symbol": "XYL",
            	    "Name": "Xylem Inc."
            	  },
            	  {
            	    "Symbol": "YPF",
            	    "Name": "YPF Sociedad Anonima"
            	  },
            	  {
            	    "Symbol": "YRCW",
            	    "Name": "YRC Worldwide, Inc."
            	  },
            	  {
            	    "Symbol": "YY",
            	    "Name": "YY Inc."
            	  },
            	  {
            	    "Symbol": "YDKN",
            	    "Name": "Yadkin Financial Corporation"
            	  },
            	  {
            	    "Symbol": "YHOO",
            	    "Name": "Yahoo! Inc."
            	  },
            	  {
            	    "Symbol": "AUY",
            	    "Name": "Yamana Gold Inc."
            	  },
            	  {
            	    "Symbol": "YNDX",
            	    "Name": "Yandex N.V."
            	  },
            	  {
            	    "Symbol": "YZC",
            	    "Name": "Yanzhou Coal Mining Company Limited"
            	  },
            	  {
            	    "Symbol": "YELP",
            	    "Name": "Yelp Inc."
            	  },
            	  {
            	    "Symbol": "YGE",
            	    "Name": "Yingli Green Energy Holding Company Limited"
            	  },
            	  {
            	    "Symbol": "YRD",
            	    "Name": "Yirendai Ltd."
            	  },
            	  {
            	    "Symbol": "YOD",
            	    "Name": "You On Demand Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "YOKU",
            	    "Name": "Youku Tudou Inc."
            	  },
            	  {
            	    "Symbol": "YCB",
            	    "Name": "Your Community Bankshares, Inc."
            	  },
            	  {
            	    "Symbol": "YUME",
            	    "Name": "YuMe, Inc."
            	  },
            	  {
            	    "Symbol": "YECO",
            	    "Name": "Yulong Eco-Materials Limited"
            	  },
            	  {
            	    "Symbol": "YUM",
            	    "Name": "Yum! Brands, Inc."
            	  },
            	  {
            	    "Symbol": "YUMA",
            	    "Name": "Yuma Energy, Inc."
            	  },
            	  {
            	    "Symbol": "YUMA^A",
            	    "Name": "Yuma Energy, Inc."
            	  },
            	  {
            	    "Symbol": "ZAGG",
            	    "Name": "ZAGG Inc"
            	  },
            	  {
            	    "Symbol": "ZFC",
            	    "Name": "ZAIS Financial Corp."
            	  },
            	  {
            	    "Symbol": "ZAIS",
            	    "Name": "ZAIS Group Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ZLTQ",
            	    "Name": "ZELTIQ Aesthetics, Inc."
            	  },
            	  {
            	    "Symbol": "ZIOP",
            	    "Name": "ZIOPHARM Oncology Inc"
            	  },
            	  {
            	    "Symbol": "ZFGN",
            	    "Name": "Zafgen, Inc."
            	  },
            	  {
            	    "Symbol": "ZAYO",
            	    "Name": "Zayo Group Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ZBRA",
            	    "Name": "Zebra Technologies Corporation"
            	  },
            	  {
            	    "Symbol": "ZEN",
            	    "Name": "Zendesk, Inc."
            	  },
            	  {
            	    "Symbol": "ZPIN",
            	    "Name": "Zhaopin Limited"
            	  },
            	  {
            	    "Symbol": "ZHNE",
            	    "Name": "Zhone Technologies, Inc."
            	  },
            	  {
            	    "Symbol": "Z",
            	    "Name": "Zillow Group, Inc."
            	  },
            	  {
            	    "Symbol": "ZG",
            	    "Name": "Zillow Group, Inc."
            	  },
            	  {
            	    "Symbol": "ZBH",
            	    "Name": "Zimmer Biomet Holdings, Inc."
            	  },
            	  {
            	    "Symbol": "ZN",
            	    "Name": "Zion Oil & Gas Inc"
            	  },
            	  {
            	    "Symbol": "ZNWAA",
            	    "Name": "Zion Oil & Gas Inc"
            	  },
            	  {
            	    "Symbol": "ZBK",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZB^A",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZB^F",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZB^G",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZB^H",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZION",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZIONW",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZIONZ",
            	    "Name": "Zions Bancorporation"
            	  },
            	  {
            	    "Symbol": "ZIXI",
            	    "Name": "Zix Corporation"
            	  },
            	  {
            	    "Symbol": "ZOES",
            	    "Name": "Zoe&#39;s Kitchen, Inc."
            	  },
            	  {
            	    "Symbol": "ZTS",
            	    "Name": "Zoetis Inc."
            	  },
            	  {
            	    "Symbol": "ZGNX",
            	    "Name": "Zogenix, Inc."
            	  },
            	  {
            	    "Symbol": "ZSAN",
            	    "Name": "Zosano Pharma Corporation"
            	  },
            	  {
            	    "Symbol": "ZUMZ",
            	    "Name": "Zumiez Inc."
            	  },
            	  {
            	    "Symbol": "ZF",
            	    "Name": "Zweig Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "ZTR",
            	    "Name": "Zweig Total Return Fund, Inc. (The)"
            	  },
            	  {
            	    "Symbol": "ZYNE",
            	    "Name": "Zynerba Pharmaceuticals, Inc."
            	  },
            	  {
            	    "Symbol": "ZNGA",
            	    "Name": "Zynga Inc."
            	  },
            	  {
            	    "Symbol": "LIFE",
            	    "Name": "aTyr Pharma, Inc."
            	  },
            	  {
            	    "Symbol": "ATHN",
            	    "Name": "athenahealth, Inc."
            	  },
            	  {
            	    "Symbol": "BEBE",
            	    "Name": "bebe stores, inc."
            	  },
            	  {
            	    "Symbol": "BLUE",
            	    "Name": "bluebird bio, Inc."
            	  },
            	  {
            	    "Symbol": "SCOR",
            	    "Name": "comScore, Inc."
            	  },
            	  {
            	    "Symbol": "EBAY",
            	    "Name": "eBay Inc."
            	  },
            	  {
            	    "Symbol": "EBAYL",
            	    "Name": "eBay Inc."
            	  },
            	  {
            	    "Symbol": "EFUT",
            	    "Name": "eFuture Holding Inc."
            	  },
            	  {
            	    "Symbol": "EGAN",
            	    "Name": "eGain Corporation"
            	  },
            	  {
            	    "Symbol": "EHTH",
            	    "Name": "eHealth, Inc."
            	  },
            	  {
            	    "Symbol": "EHIC",
            	    "Name": "eHi Car Services Limited"
            	  },
            	  {
            	    "Symbol": "LONG",
            	    "Name": "eLong, Inc."
            	  },
            	  {
            	    "Symbol": "EMAN",
            	    "Name": "eMagin Corporation"
            	  },
            	  {
            	    "Symbol": "PLUS",
            	    "Name": "ePlus inc."
            	  },
            	  {
            	    "Symbol": "IBIO",
            	    "Name": "iBio, Inc."
            	  },
            	  {
            	    "Symbol": "DSKY",
            	    "Name": "iDreamSky Technology Limited"
            	  },
            	  {
            	    "Symbol": "KANG",
            	    "Name": "iKang Healthcare Group, Inc."
            	  },
            	  {
            	    "Symbol": "IPAS",
            	    "Name": "iPass Inc."
            	  },
            	  {
            	    "Symbol": "IRMD",
            	    "Name": "iRadimed Corporation"
            	  },
            	  {
            	    "Symbol": "IRBT",
            	    "Name": "iRobot Corporation"
            	  },
            	  {
            	    "Symbol": "SLQD",
            	    "Name": "iShares 0-5 Year Investment Grade Corporate Bond ETF"
            	  },
            	  {
            	    "Symbol": "TLT",
            	    "Name": "iShares 20+ Year Treasury Bond ETF"
            	  },
            	  {
            	    "Symbol": "AIA",
            	    "Name": "iShares Asia 50 ETF"
            	  },
            	  {
            	    "Symbol": "COMT",
            	    "Name": "iShares Commodities Select Strategy ETF"
            	  },
            	  {
            	    "Symbol": "IXUS",
            	    "Name": "iShares Core MSCI Total International Stock ETF"
            	  },
            	  {
            	    "Symbol": "IFEU",
            	    "Name": "iShares FTSE EPRA\/NAREIT Europe Index Fund"
            	  },
            	  {
            	    "Symbol": "IFGL",
            	    "Name": "iShares FTSE EPRA\/NAREIT Global Real Estate ex-U.S. Index Fund"
            	  },
            	  {
            	    "Symbol": "GNMA",
            	    "Name": "iShares GNMA Bond ETF"
            	  },
            	  {
            	    "Symbol": "IGF",
            	    "Name": "iShares Global Infrastructure ETF"
            	  },
            	  {
            	    "Symbol": "ACWI",
            	    "Name": "iShares MSCI ACWI Index Fund"
            	  },
            	  {
            	    "Symbol": "ACWX",
            	    "Name": "iShares MSCI ACWI ex US Index Fund"
            	  },
            	  {
            	    "Symbol": "AAXJ",
            	    "Name": "iShares MSCI All Country Asia ex Japan Index Fund"
            	  },
            	  {
            	    "Symbol": "EWZS",
            	    "Name": "iShares MSCI Brazil Small-Cap ETF"
            	  },
            	  {
            	    "Symbol": "MCHI",
            	    "Name": "iShares MSCI China ETF"
            	  },
            	  {
            	    "Symbol": "SCZ",
            	    "Name": "iShares MSCI EAFE Small-Cap ETF"
            	  },
            	  {
            	    "Symbol": "EEMA",
            	    "Name": "iShares MSCI Emerging Markets Asia Index Fund"
            	  },
            	  {
            	    "Symbol": "EEML",
            	    "Name": "iShares MSCI Emerging Markets Latin America Index Fund"
            	  },
            	  {
            	    "Symbol": "EUFN",
            	    "Name": "iShares MSCI Europe Financials Sector Index Fund"
            	  },
            	  {
            	    "Symbol": "IEUS",
            	    "Name": "iShares MSCI Europe Small-Cap ETF"
            	  },
            	  {
            	    "Symbol": "ENZL",
            	    "Name": "iShares MSCI New Zealand Capped ETF"
            	  },
            	  {
            	    "Symbol": "QAT",
            	    "Name": "iShares MSCI Qatar Capped ETF"
            	  },
            	  {
            	    "Symbol": "UAE",
            	    "Name": "iShares MSCI UAE Capped ETF"
            	  },
            	  {
            	    "Symbol": "JKI",
            	    "Name": "iShares Morningstar Mid-Cap ETF"
            	  },
            	  {
            	    "Symbol": "IBB",
            	    "Name": "iShares Nasdaq Biotechnology Index Fund"
            	  },
            	  {
            	    "Symbol": "SOXX",
            	    "Name": "iShares PHLX SOX Semiconductor Sector Index Fund"
            	  },
            	  {
            	    "Symbol": "EMIF",
            	    "Name": "iShares S&P Emerging Markets Infrastructure Index Fund"
            	  },
            	  {
            	    "Symbol": "ICLN",
            	    "Name": "iShares S&P Global Clean Energy Index Fund"
            	  },
            	  {
            	    "Symbol": "WOOD",
            	    "Name": "iShares S&P Global Timber & Forestry Index Fund"
            	  },
            	  {
            	    "Symbol": "INDY",
            	    "Name": "iShares S&P India Nifty 50 Index Fund"
            	  },
            	  {
            	    "Symbol": "ISHG",
            	    "Name": "iShares S&P\/Citigroup 1-3 Year International Treasury Bond Fun"
            	  },
            	  {
            	    "Symbol": "IGOV",
            	    "Name": "iShares S&P\/Citigroup International Treasury Bond Fund"
            	  },
            	  {
            	    "Symbol": "STAR",
            	    "Name": "iStar Financial Inc."
            	  },
            	  {
            	    "Symbol": "STAR^D",
            	    "Name": "iStar Financial Inc."
            	  },
            	  {
            	    "Symbol": "STAR^E",
            	    "Name": "iStar Financial Inc."
            	  },
            	  {
            	    "Symbol": "STAR^F",
            	    "Name": "iStar Financial Inc."
            	  },
            	  {
            	    "Symbol": "STAR^G",
            	    "Name": "iStar Financial Inc."
            	  },
            	  {
            	    "Symbol": "STAR^I",
            	    "Name": "iStar Financial Inc."
            	  },
            	  {
            	    "Symbol": "ICAD",
            	    "Name": "icad inc."
            	  },
            	  {
            	    "Symbol": "SAAS",
            	    "Name": "inContact, Inc."
            	  },
            	  {
            	    "Symbol": "INTT",
            	    "Name": "inTest Corporation"
            	  },
            	  {
            	    "Symbol": "JCOM",
            	    "Name": "j2 Global, Inc."
            	  },
            	  {
            	    "Symbol": "LULU",
            	    "Name": "lululemon athletica inc."
            	  },
            	  {
            	    "Symbol": "CALL",
            	    "Name": "magicJack VocalTec Ltd"
            	  },
            	  {
            	    "Symbol": "PSDV",
            	    "Name": "pSivida Corp."
            	  },
            	  {
            	    "Symbol": "PDVW",
            	    "Name": "pdvWireless, Inc."
            	  },
            	  {
            	    "Symbol": "DFVL",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DFVS",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DGLD",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DLBL",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DLBS",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DSLV",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DTUL",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DTUS",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DTYL",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "DTYS",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "FLAT",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "SLVO",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "STPP",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "TAPR",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "TVIX",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "TVIZ",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "UGLD",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "USLV",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "VIIX",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "VIIZ",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "XIV",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "ZIV",
            	    "Name": "region"
            	  },
            	  {
            	    "Symbol": "SPRT",
            	    "Name": "support.com, Inc."
            	  },
            	  {
            	    "Symbol": "QURE",
            	    "Name": "uniQure N.V."
            	  },
            	  {
            	    "Symbol": "VTVT",
            	    "Name": "vTv Therapeutics Inc."
            	  },
            	  {
            	    "Symbol": "VJET",
            	    "Name": "voxeljet AG"
            	  }
            	]
	return companies;
}

function autoComplete(){
	var companies = getCompanies();
	var symbols = new Array();
	
	for(var i = 0; i <companies.length ; i++){{
		var symbol = companies[i].Symbol;
		//console.log(symbol);
		symbols[i] = symbol;
		//console.log(symbols[i]);
		
	}}
	
    $( "#companySymbol" ).autocomplete({
        source: symbols,
        select: function(event, ui) {
            if(ui.item){
                console.log(ui.item);
                testMethod();
            }
        }
      });
}