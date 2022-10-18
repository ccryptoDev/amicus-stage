/**
 * factorTrust.js
 */
const testData = {
	ApplicationID: '1 Rf Test',
	MobileNumber: '6784803240',
	FirstName: 'JULIANNE',
	LastName: 'EETR',
	EmailAddress: 'test@factortrust.com',
	IPAddress: '74.95.29.134',
	DLNumber: '',
	DLNumberIssueState: '',
	DateOfBirth: '03/01/1996',
	Address1: 'franklin street',
	Address2: '',
	City: 'Newark',
	State: 'NJ',
	Zip: '07102',
	Country: 'US',
	MonthsAtAddress: '',
	AlternateZip: '',
	HomePhone: '',
	SSN: '666664907',
	SSNIssueState: '',
	AccountABA: '',
	AccountDDA: '',
	AccountType: 'C', // C=Checking, D=Debit, S=Savings
	EmployerName: 'Race Cars 4 life',
	LengthOfEmployment: '',
	MonthlyIncome: '3333.00',
	PayrollType: 'D', // D=Direct Deposit; P=Paper Check
	PayrollFrequency: 'W', // W=Weekly, B=Bi-Weekly, S=Semi-Monthly, M=Monthly
	PayrollGarnishment: '',
	RequestedLoanAmount: '0',
	RequestedEffectiveDate: '',
	RequestedDueDate: '',
	HasBankruptcy: '',
	ProductType: 'PER',
	LeadType: '', // (Not Used At This Time)
	LeadSource: '', // (Not Used At This Time)
	BlackBox: '', // (Provided via the iOvation installation software)
	ECOACode: 'I',
	PortfolioType: 'I',
	PointOfOrigination: 'V', // R=Retail, V=Virtual
	SecuritizationType: 'U',
	OtherIncome: '',
	LoanPaymentAmount: '',
	OtherPayments: '',
	LoanFees: '',
	TermsDuration: '',
	TermsFrequency: '',
	HousingExpenses: '',
	IsHomeOwner: '',
	LivingExpenses: '',
	CreditCardNumber: ''
}
module.exports.factorTrust = {
	lendProtect: getFactorTrustLendProtectConfig(),
	truValidate: getFactorTrustTruValidateConfig
};
/**
 * Factor Trust - Lend Protect Credit Report
 * @returns {{password: string, testData: {Zip: string, TermsFrequency: string, LengthOfEmployment: string, ECOACode: string, HousingExpenses: string, RequestedDueDate: string, LeadType: string, PortfolioType: string, DLNumberIssueState: string, DLNumber: string, TermsDuration: string, RequestedEffectiveDate: string, PointOfOrigination: string, ApplicationID: string, MonthlyIncome: string, DateOfBirth: string, LoanPaymentAmount: string, ProductType: string, City: string, EmailAddress: string, OtherPayments: string, SSNIssueState: string, LeadSource: string, BlackBox: string, State: string, SecuritizationType: string, Country: string, LastName: string, LoanFees: string, RequestedLoanAmount: string, AlternateZip: string, PayrollGarnishment: string, CreditCardNumber: string, LivingExpenses: string, IsHomeOwner: string, FirstName: string, Address2: string, OtherIncome: string, Address1: string, AccountType: string, SSN: string, MobileNumber: string, HomePhone: string, MonthsAtAddress: string, AccountDDA: string, IPAddress: string, AccountABA: string, PayrollType: string, EmployerName: string, PayrollFrequency: string, HasBankruptcy: string}, apiUrl: string, merchantId: string, storeId: string, channelId: string, enabled: boolean, username: string}}
 */
function getFactorTrustLendProtectConfig() {
	const lendProtect = {
		apiUrl: "https://stage.factortrust.com/WebServices/LendProtectRequest.aspx?version=3.3",
		username: "ALCHEMYTECHST3",
		password: "Zb7tR5@@DQdt",
		channelId: "",
		merchantId: "54545",
		storeId: "0003",
		testData: testData,
		productType: "PER", // ??
		ecoaCode: "I", // ??
		portfolioType: "I", // ??
		securitizationType: "U", // ??
		scorecards: { // ??
			"M1100_STL_FT": "Conversion",
			"M1101_INS_FT": "FcraFraud",
			"M1150_STL_FT_TU": "Risk",
			"M1151_INS_FT_TU": "Profitability"
		},
		atap01_dti: 45, // ??
		enabled: true,
	};
	
	
	
	
	if( process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
		lendProtect.apiUrl = "https://www.factortrust.com/WebServices/LendProtectRequest.aspx?version=3.3";
		lendProtect.username = 'AMICUSST1API';
		lendProtect.password = 'kLiO89RY@6@tYR4j';
		lendProtect.storeId = '0001';
		lendProtect.merchantId = '40525';
		lendProtect.enabled = true;
	}
	
	return lendProtect;
}

function getFactorTrustTruValidateConfig(strategy) {
	const getCredentialsTestCase = (strategy) => {
		const stagingConfig = {
			device: {
				username: "Amicus_Lending1_TestSite",
				password: "3a47ca0d574e4d44a07a93a813caea16",
				secretKey: "e7c2dc4b740e4bcd98230156fcc6fd9d",
				publicKey: "5599451daf7345a087cbcc72656b67d7",
				url: "https://app.trustev.com/api/v2.0",
			},
			identity: {
				username: "Amicus_Lending2_TestSite",
				password: "63b5a91ef19348ce8cf6dc38e0291e59",
				secretKey: "a7db786ea6f94bd3adfee808c8861df4",
				publicKey: "a64afa89bc6d4fb08aef94d08f5ef9e2",
				url: "https://app.trustev.com/api/v2.0",
			},
			kba_otp: {
				username: "Amicus_Lending3_TestSite",
				password: "8433f3fa1b114ca8967a08cde18f794f",
				secretKey: "5e3cf8cb275846efba30695f95bbafc2",
				publicKey: "a0dcb3de430e4504a95ca3ea36506de9",
				url: "https://app.trustev.com/api/v2.0",
			},
		}

		const prodConfig = {
			device: {
			  username: "Amicus_Lending1_ProdSite",
			  password: "f7babc65835b439da3e2c0821f4104b5",
			  secretKey: "e647e40a70464415bdddd224ddd06e82",
			  publicKey: "ea7cb845c3f041a082f9c6c56bd062db",
			  url: "https://app.trustev.com/api/v2.0",
			},
			identity: {
			  username: "Amicus_Lending2_ProdSite",
			  password: "710aa31938934e8ba22179a127b59880",
			  secretKey: "46f2cb24f55242ca87560ae941ad88b8",
			  publicKey: "39af405cd70b492dbb2062f71ae0e58e",
			  url: "https://app.trustev.com/api/v2.0",
			},
			kba_otp: {
			  username: "Amicus_Lending3_ProdSite",
			  password: "f7e27c489ccc433ea9969554a5c4a00b",
			  secretKey: "7e09106ffb444e3d802035d899b3e42c",
			  publicKey: "6d675b16c9ed44ee9c72177949d8d8cc",
			  url: "https://app.trustev.com/api/v2.0",
			},
		  };
	  
		  const isProd =
			process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";
	  
		  const credentials = isProd ? prodConfig[strategy] : stagingConfig[strategy];

		if (credentials) {
			return credentials;
		}

		throw new Error(`Invalid test case: ${strategy}`);
	}
	
	// const trueValidate = {
	// 	username: "Patria_Lending_Test",
	// 	password: "79f8ea522b2043c099fb5d68b28863e6",
	// 	secretKey: "a65487d01cbd4bf1a07e6ace775c2c32",
	// 	publicKey: "1f2dc512f2004000a64416531c4661ff",
	// 	url: "https://app.trustev.com/api/v2.0",
	// };

	// if( process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
	// 	trueValidate.url = "https://app-eu.trustev.com/api/v2.0";
	// }

	return getCredentialsTestCase(strategy); // change parameter for different test cases
}

/*
Patria _ STAGE
Username: PATRIASTAGE1
Password: CHangeme123!!
Merchant ID: 54545
Store ID: 1212
Authentication token - c2nN0MBn
 */
