const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrocVMsEH = accounts[4]
		const FOSTERAddreFdmjm5 = accounts[0]
		const initialRatevMLH8KO = BigInt("1575")
		const initialPeriodC58yaxN = BigInt("1614")
		const initialOwnerBOUKd9p = "0x0000000000000000000000000000000000000001"
		const contractHBEo89 = await Reseller.new(USDTAddrocVMsEH, FOSTERAddreFdmjm5, initialRatevMLH8KO, initialPeriodC58yaxN, initialOwnerBOUKd9p, {from: accounts[5]});
		const accountZw1kFg = accounts[2]
		const newBoss3Oz1Oc6H = accounts[4]
		const newBoss3ootHmU8 = accounts[1]
		const level5ZVblxtA = BigInt("176")
		const level4STyFR9W = BigInt("232")
		const level3pDhdRlT = BigInt("17")
		const level2eYVkb8u = BigInt("170")
		const level1yZyKRJ9 = BigInt("132")
		const newFeeTI7sZy1 = BigInt("36")
		const nullLVWRQ0C = await contractHBEo89.balanceUSDT.call(accountZw1kFg, {from: accounts[5]});
		await contractHBEo89.deposeBoss3.call(newBoss3Oz1Oc6H, {from: accounts[0]});
		await contractHBEo89.deposeBoss3.call(newBoss3ootHmU8, {from: accounts[0]});
		await contractHBEo89.setRefBonus.call(level1yZyKRJ9, level2eYVkb8u, level3pDhdRlT, level4STyFR9W, level5ZVblxtA, {from: accounts[0]});
		await contractHBEo89.setFee.call(newFeeTI7sZy1, {from: accounts[3]});

		await expect(contractHBEo89.balanceUSDT.call(accountZw1kFg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAwjTNvl = accounts[1]
		const FOSTERAddrkDPFH2P = accounts[1]
		const initialRateD9Xky3 = BigInt("1201")
		const initialPerioddXuM4Ln = BigInt("564")
		const initialOwnerJOfgZ3G = accounts[4]
		const contractL1dwzH5 = await Reseller.new(USDTAddrAwjTNvl, FOSTERAddrkDPFH2P, initialRateD9Xky3, initialPerioddXuM4Ln, initialOwnerJOfgZ3G, {from: accounts[0]});
		const newFeeByDCvxJ = BigInt("35")
		const accountEsdxn1h = "0x0000000000000000000000000000000000000001"
		const newPeriodsoEzBG = BigInt("1479")
		const newBoss4dPwwQR = "0x0000000000000000000000000000000000000001"
		await contractL1dwzH5.setFee.call(newFeeByDCvxJ, {from: accounts[3]});
		const nullUt76UD7 = await contractL1dwzH5.balanceUSDT.call(accountEsdxn1h, {from: accounts[5]});
		await contractL1dwzH5.setPeriod.call(newPeriodsoEzBG, {from: accounts[1]});
		await contractL1dwzH5.deposeBoss4.call(newBoss4dPwwQR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractL1dwzH5.setFee.call(newFeeByDCvxJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjBvgh4N = accounts[2]
		const FOSTERAddrcasRRl = accounts[2]
		const initialRatesBta6B9 = BigInt("1075")
		const initialPeriodfpLZ9PG = BigInt("674")
		const initialOwnerTuJlUza = accounts[0]
		const contractd0RVRV = await Reseller.new(USDTAddrjBvgh4N, FOSTERAddrcasRRl, initialRatesBta6B9, initialPeriodfpLZ9PG, initialOwnerTuJlUza, {from: "0x0000000000000000000000000000000000000001"});
		const newFeerlssn5l = BigInt("203")
		const valueZmCPkNi = BigInt("807")
		const recipientRttTA1 = accounts[0]
		const ERC20TokenPjhS4A = accounts[0]
		const newBoss4Ag5qpub = accounts[2]
		const accountrRoG9db = accounts[1]
		const _ref5nR5aOae = accounts[2]
		const _ref4QsX0Tv = accounts[5]
		const _ref3SGzBGzG = "0x0000000000000000000000000000000000000001"
		const _ref2wCmbrEd = accounts[0]
		const _ref1Ae6vSN = accounts[3]
		const valueDOmGtRq = BigInt("1207")
		const newRateEQaU2u = BigInt("2001")
		await contractd0RVRV.setFee.call(newFeerlssn5l, {from: accounts[2]});
		await contractd0RVRV.withdrawERC20.call(ERC20TokenPjhS4A, recipientRttTA1, valueZmCPkNi, {from: accounts[2]});
		await contractd0RVRV.deposeBoss4.call(newBoss4Ag5qpub, {from: accounts[1]});
		const nullU47v04l = await contractd0RVRV.allowanceUSDT.call(accountrRoG9db, {from: accounts[4]});
		await contractd0RVRV.buy.call(valueDOmGtRq, _ref1Ae6vSN, _ref2wCmbrEd, _ref3SGzBGzG, _ref4QsX0Tv, _ref5nR5aOae, {from: accounts[4]});
		await contractd0RVRV.setRate.call(newRateEQaU2u, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrd35tshQ = accounts[2]
		const FOSTERAddrlzS3r8g = accounts[4]
		const initialRatepolu79I = BigInt("1142")
		const initialPeriodEDkf1Aq = BigInt("1839")
		const initialOwner1J9fYZ = accounts[0]
		const contractDxFuZMJ = await Reseller.new(USDTAddrd35tshQ, FOSTERAddrlzS3r8g, initialRatepolu79I, initialPeriodEDkf1Aq, initialOwner1J9fYZ, {from: accounts[0]});
		const _periodKVmSSU = BigInt("2046")
		const amountbEk3B9H = BigInt("1740")
		const recipient7lgmU4 = accounts[0]
		const newBoss3uSdc9gZ = accounts[3]
		const _ref5YBHYes7 = accounts[3]
		const _ref4ZwculM = accounts[4]
		const _ref3cp448kE = accounts[5]
		const _ref2EfqwXy4 = accounts[0]
		const _ref166Qc1m = accounts[4]
		const valuexeyWARF = BigInt("1329")
		await contractDxFuZMJ.freezeAndTransfer.call(recipient7lgmU4, amountbEk3B9H, _periodKVmSSU, {from: accounts[1]});
		await contractDxFuZMJ.deposeBoss3.call(newBoss3uSdc9gZ, {from: accounts[2]});
		await contractDxFuZMJ.buy.call(valuexeyWARF, _ref166Qc1m, _ref2EfqwXy4, _ref3cp448kE, _ref4ZwculM, _ref5YBHYes7, {from: accounts[1]});

		await expect(contractDxFuZMJ.freezeAndTransfer.call(recipient7lgmU4, amountbEk3B9H, _periodKVmSSU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrn02uV8P = accounts[4]
		const FOSTERAddrqOHeWGV = accounts[4]
		const initialRateCUdVD6t = BigInt("811")
		const initialPeriodDG35829 = BigInt("772")
		const initialOwnerhf2Rtca = accounts[1]
		const contractq3UzrQL = await Reseller.new(USDTAddrn02uV8P, FOSTERAddrqOHeWGV, initialRateCUdVD6t, initialPeriodDG35829, initialOwnerhf2Rtca, {from: accounts[1]});
		const accounth8hExin = accounts[0]
		const newPeriodrN84F5b = BigInt("1434")
		const accountcndTFl = accounts[1]
		const accountODlceyi = accounts[4]
		const nulleXYL9Kx = await contractq3UzrQL.balanceFOSTER.call(accounth8hExin, {from: accounts[4]});
		await contractq3UzrQL.setPeriod.call(newPeriodrN84F5b, {from: accounts[2]});
		const nulluBqxSvM = await contractq3UzrQL.balanceUSDT.call(accountcndTFl, {from: accounts[2]});
		const nullwIOldTZ = await contractq3UzrQL.allowanceUSDT.call(accountODlceyi, {from: accounts[5]});

		await expect(contractq3UzrQL.balanceFOSTER.call(accounth8hExin, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOLvBcxj = accounts[2]
		const FOSTERAddrOPPKWj2 = accounts[3]
		const initialRateyjOd0ec = BigInt("724")
		const initialPeriodu35c1RR = BigInt("1944")
		const initialOwnerxgyOLfG = accounts[1]
		const contractKHljHXF = await Reseller.new(USDTAddrOLvBcxj, FOSTERAddrOPPKWj2, initialRateyjOd0ec, initialPeriodu35c1RR, initialOwnerxgyOLfG, {from: accounts[4]});
		const valueO6T44JB = BigInt("1623")
		const newBoss4jGy6NjX = accounts[4]
		const accountVjDlSmV = accounts[1]
		await contractKHljHXF.withdraw.call(valueO6T44JB, {from: accounts[1]});
		await contractKHljHXF.deposeBoss4.call(newBoss4jGy6NjX, {from: accounts[0]});
		const nullg3OxrwX = await contractKHljHXF.balanceUSDT.call(accountVjDlSmV, {from: accounts[0]});

		await expect(contractKHljHXF.withdraw.call(valueO6T44JB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkX5GWy = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrqwqYi0b = accounts[1]
		const initialRates7Pl9uo = BigInt("1691")
		const initialPeriodexTzA7N = BigInt("1719")
		const initialOwnerm2F4XC0 = accounts[4]
		const contractLAKI4Fh = await Reseller.new(USDTAddrkX5GWy, FOSTERAddrqwqYi0b, initialRates7Pl9uo, initialPeriodexTzA7N, initialOwnerm2F4XC0, {from: accounts[2]});
		const _periodmGKjkyN = BigInt("886")
		const amountK0ZT2aC = BigInt("1534")
		const recipientPqlR5cK = accounts[4]
		const newBoss1M53nX8q = accounts[4]
		const _periodEK2UUmY = BigInt("1149")
		const amountZayN9pV = BigInt("1381")
		const recipientN40yxDb = accounts[5]
		const valuelHh2O9x = BigInt("1934")
		const recipientJhhJoB8 = accounts[4]
		const ERC20Tokenm72f5f3 = accounts[3]
		const accounteT1NBxc = accounts[2]
		await contractLAKI4Fh.freezeAndTransfer.call(recipientPqlR5cK, amountK0ZT2aC, _periodmGKjkyN, {from: accounts[4]});
		await contractLAKI4Fh.deposeBoss1.call(newBoss1M53nX8q, {from: accounts[4]});
		await contractLAKI4Fh.freezeAndTransfer.call(recipientN40yxDb, amountZayN9pV, _periodEK2UUmY, {from: accounts[3]});
		await contractLAKI4Fh.withdrawERC20.call(ERC20Tokenm72f5f3, recipientJhhJoB8, valuelHh2O9x, {from: accounts[2]});
		const nulllGUXWYz = await contractLAKI4Fh.allowanceFOSTER.call(accounteT1NBxc, {from: accounts[0]});

		await expect(contractLAKI4Fh.freezeAndTransfer.call(recipientPqlR5cK, amountK0ZT2aC, _periodmGKjkyN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQeU82jD = accounts[5]
		const FOSTERAddroca2waU = accounts[0]
		const initialRateENfMoHn = BigInt("1109")
		const initialPeriodrknFUSP = BigInt("400")
		const initialOwner3MyqJn = accounts[1]
		const contractsBsOD33 = await Reseller.new(USDTAddrQeU82jD, FOSTERAddroca2waU, initialRateENfMoHn, initialPeriodrknFUSP, initialOwner3MyqJn, {from: accounts[5]});
		const newPeriodylHC3ck = BigInt("77")
		const newPeriodEk4H7Jb = BigInt("953")
		const accountiHkhA6X = "0x0000000000000000000000000000000000000001"
		const commentr3XjM0J = "YiOApvWxMGBjOCLI6YiYuDlAqXuYSIToWpwTeMOAHe8vOT9ki8iG81xctpaVwBeQh60SxD9UcnkvwMifwLBqxCJ5Z6fsO"
		const _ref5v8GaB2g = accounts[0]
		const _ref4Q3Yx1xM = "0x0000000000000000000000000000000000000001"
		const _ref3BrWU3fj = accounts[2]
		const _ref2XWUvLwR = "0x0000000000000000000000000000000000000001"
		const _ref1LjDWvpB = accounts[4]
		const valuedFuTaTv = BigInt("987")
		const newMinimumxEzhi9S = BigInt("811")
		const valueJgS5zoK = BigInt("1")
		const recipientOTvK0rb = accounts[0]
		const ERC20Tokenrakeaz9 = accounts[0]
		await contractsBsOD33.setPeriod.call(newPeriodylHC3ck, {from: accounts[1]});
		await contractsBsOD33.setPeriod.call(newPeriodEk4H7Jb, {from: accounts[3]});
		const nullQ0HRwO = await contractsBsOD33.allowanceUSDT.call(accountiHkhA6X, {from: accounts[1]});
		await contractsBsOD33.purchase.call(valuedFuTaTv, _ref1LjDWvpB, _ref2XWUvLwR, _ref3BrWU3fj, _ref4Q3Yx1xM, _ref5v8GaB2g, commentr3XjM0J, {from: accounts[2]});
		await contractsBsOD33.setMinimum.call(newMinimumxEzhi9S, {from: accounts[2]});
		await contractsBsOD33.withdrawERC20.call(ERC20Tokenrakeaz9, recipientOTvK0rb, valueJgS5zoK, {from: accounts[0]});

		await expect(contractsBsOD33.setPeriod.call(newPeriodylHC3ck, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdB34CKW = accounts[3]
		const FOSTERAddrauY2cZ = accounts[5]
		const initialRatebQxhbkT = BigInt("971")
		const initialPeriodx3blNa = BigInt("1085")
		const initialOwnerPjiKGV4 = accounts[5]
		const contractK8fNeKJ = await Reseller.new(USDTAddrdB34CKW, FOSTERAddrauY2cZ, initialRatebQxhbkT, initialPeriodx3blNa, initialOwnerPjiKGV4, {from: accounts[0]});
		const newFeeB568fS5 = BigInt("103")
		const valueGZFLTg = BigInt("580")
		const recipientci9h1z9 = accounts[2]
		const ERC20Tokenhz0hw9r = accounts[3]
		await contractK8fNeKJ.switchState.call({from: accounts[1]});
		await contractK8fNeKJ.setFee.call(newFeeB568fS5, {from: accounts[3]});
		await contractK8fNeKJ.withdrawERC20.call(ERC20Tokenhz0hw9r, recipientci9h1z9, valueGZFLTg, {from: accounts[0]});

		await expect(contractK8fNeKJ.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrp6bVYEm = accounts[5]
		const FOSTERAddrJWDbT5N = accounts[4]
		const initialRatewtgYKGc = BigInt("1534")
		const initialPeriodpJQEPtQ = BigInt("1241")
		const initialOwnerPpvSBG = accounts[4]
		const contractRaPDjBM = await Reseller.new(USDTAddrp6bVYEm, FOSTERAddrJWDbT5N, initialRatewtgYKGc, initialPeriodpJQEPtQ, initialOwnerPpvSBG, {from: accounts[2]});
		const newBoss1a3YAbhR = accounts[2]
		const newBoss1frtwUvh = accounts[1]
		const accountxP0uzM = accounts[1]
		const newMinimumKibRhby = BigInt("311")
		await contractRaPDjBM.deposeBoss1.call(newBoss1a3YAbhR, {from: "0x0000000000000000000000000000000000000001"});
		await contractRaPDjBM.deposeBoss1.call(newBoss1frtwUvh, {from: accounts[3]});
		const nullIioQNnA = await contractRaPDjBM.allowanceFOSTER.call(accountxP0uzM, {from: accounts[3]});
		await contractRaPDjBM.switchState.call({from: accounts[5]});
		await contractRaPDjBM.setMinimum.call(newMinimumKibRhby, {from: accounts[2]});

		await expect(contractRaPDjBM.deposeBoss1.call(newBoss1a3YAbhR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxcmm6BE = accounts[2]
		const FOSTERAddrSD4q0Ir = accounts[3]
		const initialRateUZxni23 = BigInt("724")
		const initialPeriodRxltBsz = BigInt("1944")
		const initialOwnerpaKOOg = accounts[1]
		const contractOwMSIpT = await Reseller.new(USDTAddrxcmm6BE, FOSTERAddrSD4q0Ir, initialRateUZxni23, initialPeriodRxltBsz, initialOwnerpaKOOg, {from: accounts[4]});
		const level5k0CyEIR = BigInt("237")
		const level4zcrhrEH = BigInt("95")
		const level3GK7ewer = BigInt("152")
		const level2VPQ4GoS = BigInt("6")
		const level1SvLvfaX = BigInt("117")
		const newBoss4RQZzbw1 = accounts[6]
		const accountDcr9Die = accounts[1]
		const accountDVf3cvO = accounts[2]
		await contractOwMSIpT.setRefBonus.call(level1SvLvfaX, level2VPQ4GoS, level3GK7ewer, level4zcrhrEH, level5k0CyEIR, {from: accounts[3]});
		await contractOwMSIpT.deposeBoss4.call(newBoss4RQZzbw1, {from: accounts[0]});
		const nulloHFCabG = await contractOwMSIpT.balanceUSDT.call(accountDcr9Die, {from: accounts[0]});
		const nullA9HHXMA = await contractOwMSIpT.allowanceFOSTER.call(accountDVf3cvO, {from: accounts[0]});

		await expect(contractOwMSIpT.setRefBonus.call(level1SvLvfaX, level2VPQ4GoS, level3GK7ewer, level4zcrhrEH, level5k0CyEIR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrkyO3nw = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrTMfOtGw = "0x0000000000000000000000000000000000000001"
		const initialRatez8aIHZ = BigInt("1052")
		const initialPeriodVa3oF0g = BigInt("183")
		const initialOwnerk9VUBNO = accounts[2]
		const contractIh7idJV = await Reseller.new(USDTAddrrkyO3nw, FOSTERAddrTMfOtGw, initialRatez8aIHZ, initialPeriodVa3oF0g, initialOwnerk9VUBNO, {from: accounts[2]});
		const newBoss4M5jOOZR = accounts[2]
		const newBoss3Mx7KYn0 = accounts[4]
		const accountDRA8Ake = accounts[5]
		const level5SZ9718W = BigInt("112")
		const level48xjw3J = BigInt("160")
		const level3kqr1jtO = BigInt("185")
		const level2EdVvzv = BigInt("34")
		const level1CpJW0dB = BigInt("148")
		await contractIh7idJV.switchState.call({from: accounts[2]});
		await contractIh7idJV.deposeBoss4.call(newBoss4M5jOOZR, {from: accounts[0]});
		await contractIh7idJV.deposeBoss3.call(newBoss3Mx7KYn0, {from: accounts[2]});
		const nullO7xwVoH = await contractIh7idJV.balanceUSDT.call(accountDRA8Ake, {from: accounts[3]});
		await contractIh7idJV.setRefBonus.call(level1CpJW0dB, level2EdVvzv, level3kqr1jtO, level48xjw3J, level5SZ9718W, {from: accounts[3]});

		await expect(contractIh7idJV.switchState.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvedV1B6 = accounts[3]
		const FOSTERAddrwBkc6Y = accounts[5]
		const initialRateMl2GVPS = BigInt("971")
		const initialPeriodbmxxkd2 = BigInt("1085")
		const initialOwnerRqGSZgT = accounts[5]
		const contractTYO1VZ = await Reseller.new(USDTAddrvedV1B6, FOSTERAddrwBkc6Y, initialRateMl2GVPS, initialPeriodbmxxkd2, initialOwnerRqGSZgT, {from: accounts[0]});
		const newMinimum8T0MUz = BigInt("1772")
		const newFeedST3MS = BigInt("117")
		const valueLq8VPsT = BigInt("580")
		const recipientjWn4bMr = accounts[2]
		const ERC20TokenYAtGRfj = accounts[3]
		await contractTYO1VZ.setMinimum.call(newMinimum8T0MUz, {from: accounts[3]});
		await contractTYO1VZ.setFee.call(newFeedST3MS, {from: accounts[3]});
		await contractTYO1VZ.withdrawERC20.call(ERC20TokenYAtGRfj, recipientjWn4bMr, valueLq8VPsT, {from: accounts[0]});

		await expect(contractTYO1VZ.setMinimum.call(newMinimum8T0MUz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrd7sWvwS = accounts[1]
		const FOSTERAddrOONk4O = accounts[0]
		const initialRateyG0MBlF = BigInt("1142")
		const initialPeriodN3w4YlM = BigInt("669")
		const initialOwnergGY0GaT = accounts[1]
		const contracta0D1s63 = await Reseller.new(USDTAddrd7sWvwS, FOSTERAddrOONk4O, initialRateyG0MBlF, initialPeriodN3w4YlM, initialOwnergGY0GaT, {from: accounts[1]});
		const newMinimumrjuk1up = BigInt("525")
		const newPeriodwu34L7y = BigInt("618")
		const newBoss4N5YUKf8 = "0x0000000000000000000000000000000000000001"
		const _periodDqYbcmH = BigInt("653")
		const amounthczymiY = BigInt("1816")
		const recipientUWkFToA = accounts[0]
		await contracta0D1s63.setMinimum.call(newMinimumrjuk1up, {from: accounts[1]});
		await contracta0D1s63.setPeriod.call(newPeriodwu34L7y, {from: accounts[1]});
		await contracta0D1s63.deposeBoss4.call(newBoss4N5YUKf8, {from: accounts[0]});
		await contracta0D1s63.freezeAndTransfer.call(recipientUWkFToA, amounthczymiY, _periodDqYbcmH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracta0D1s63.setMinimum.call(newMinimumrjuk1up, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrudcRRut = accounts[2]
		const FOSTERAddrDCP8R1 = accounts[3]
		const initialRateyhnnDDm = BigInt("724")
		const initialPeriodNGqrhhN = BigInt("1944")
		const initialOwnerSgCLncn = accounts[1]
		const contractydORMH = await Reseller.new(USDTAddrudcRRut, FOSTERAddrDCP8R1, initialRateyhnnDDm, initialPeriodNGqrhhN, initialOwnerSgCLncn, {from: accounts[4]});
		const commentpqvONui = "SsTiqIPxZmbvjRkjaXpnZH5223c4dNtjGcOZhccco7WvZNoHUgGPD9ahYkTIW31pN"
		const _ref5mn4Zmiy = accounts[0]
		const _ref4K1UZAvS = accounts[4]
		const _ref3eRx4dmy = accounts[2]
		const _ref2k2D2LEE = accounts[4]
		const _ref1s3xItIQ = accounts[0]
		const valueOYt9IOz = BigInt("920")
		const valuezfJ0xzZ = BigInt("1623")
		const newBoss3ZuEcev = accounts[5]
		const accountIT7sXg = accounts[1]
		const newRatefqdDF2j = BigInt("352")
		await contractydORMH.purchase.call(valueOYt9IOz, _ref1s3xItIQ, _ref2k2D2LEE, _ref3eRx4dmy, _ref4K1UZAvS, _ref5mn4Zmiy, commentpqvONui, {from: accounts[5]});
		await contractydORMH.withdraw.call(valuezfJ0xzZ, {from: accounts[1]});
		await contractydORMH.deposeBoss3.call(newBoss3ZuEcev, {from: accounts[4]});
		const nullmFqgA7M = await contractydORMH.balanceUSDT.call(accountIT7sXg, {from: accounts[0]});
		await contractydORMH.setRate.call(newRatefqdDF2j, {from: accounts[1]});

		await expect(contractydORMH.purchase.call(valueOYt9IOz, _ref1s3xItIQ, _ref2k2D2LEE, _ref3eRx4dmy, _ref4K1UZAvS, _ref5mn4Zmiy, commentpqvONui, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVFHAb9q = accounts[1]
		const FOSTERAddrg6EMf0p = accounts[0]
		const initialRateUq2awfV = BigInt("1142")
		const initialPeriodFbGVewA = BigInt("669")
		const initialOwnerihlorZA = accounts[1]
		const contractdhLFXUg = await Reseller.new(USDTAddrVFHAb9q, FOSTERAddrg6EMf0p, initialRateUq2awfV, initialPeriodFbGVewA, initialOwnerihlorZA, {from: accounts[1]});
		const newMinimumMmTAUl = BigInt("525")
		const newBoss2rnwJq6w = accounts[2]
		const newPeriodg4TDicI = BigInt("618")
		const newBoss4D2swNKr = "0x0000000000000000000000000000000000000001"
		await contractdhLFXUg.setMinimum.call(newMinimumMmTAUl, {from: accounts[1]});
		await contractdhLFXUg.deposeBoss2.call(newBoss2rnwJq6w, {from: accounts[4]});
		await contractdhLFXUg.setPeriod.call(newPeriodg4TDicI, {from: accounts[1]});
		await contractdhLFXUg.switchState.call({from: accounts[5]});
		await contractdhLFXUg.deposeBoss4.call(newBoss4D2swNKr, {from: accounts[0]});

		await expect(contractdhLFXUg.setMinimum.call(newMinimumMmTAUl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwpECdST = accounts[3]
		const FOSTERAddrVQBwg10 = accounts[5]
		const initialRatetmajJW4 = BigInt("971")
		const initialPeriodwM1cRWP = BigInt("1085")
		const initialOwnerIkBDnY2 = accounts[5]
		const contractcVqR8Cq = await Reseller.new(USDTAddrwpECdST, FOSTERAddrVQBwg10, initialRatetmajJW4, initialPeriodwM1cRWP, initialOwnerIkBDnY2, {from: accounts[0]});
		const valuecOGrCDA = BigInt("999")
		const recipientbhnL6tB = "0x0000000000000000000000000000000000000001"
		const ERC20TokenirxfRim = accounts[0]
		const level5QpZAHp = BigInt("190")
		const level4eBUAo4p = BigInt("53")
		const level3p9TPT3W = BigInt("204")
		const level2f3lyafc = BigInt("143")
		const level1YAWiHD7 = BigInt("117")
		const newFeehMlCnv1 = BigInt("158")
		await contractcVqR8Cq.withdrawERC20.call(ERC20TokenirxfRim, recipientbhnL6tB, valuecOGrCDA, {from: accounts[0]});
		await contractcVqR8Cq.setRefBonus.call(level1YAWiHD7, level2f3lyafc, level3p9TPT3W, level4eBUAo4p, level5QpZAHp, {from: accounts[3]});
		await contractcVqR8Cq.setFee.call(newFeehMlCnv1, {from: accounts[3]});

		await expect(contractcVqR8Cq.withdrawERC20.call(ERC20TokenirxfRim, recipientbhnL6tB, valuecOGrCDA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr4xcDRy = accounts[2]
		const FOSTERAddrsHC0Fc0 = accounts[2]
		const initialRatevoW3LyF = BigInt("462")
		const initialPeriodvXqme6 = BigInt("120")
		const initialOwnerPgn0GPF = accounts[2]
		const contractxgxXi0E = await Reseller.new(USDTAddr4xcDRy, FOSTERAddrsHC0Fc0, initialRatevoW3LyF, initialPeriodvXqme6, initialOwnerPgn0GPF, {from: accounts[1]});
		const newBoss4m6hQHBM = accounts[5]
		const accountxQF1xSr = accounts[3]
		const valuemsGrldR = BigInt("936")
		const newBoss3CBklUpx = accounts[2]
		const newBoss3wfNlUU7 = accounts[3]
		await contractxgxXi0E.deposeBoss4.call(newBoss4m6hQHBM, {from: accounts[2]});
		const nulliR9IHDW = await contractxgxXi0E.allowanceUSDT.call(accountxQF1xSr, {from: accounts[4]});
		await contractxgxXi0E.withdraw.call(valuemsGrldR, {from: accounts[2]});
		await contractxgxXi0E.deposeBoss3.call(newBoss3CBklUpx, {from: accounts[1]});
		await contractxgxXi0E.deposeBoss3.call(newBoss3wfNlUU7, {from: accounts[1]});

		await expect(contractxgxXi0E.deposeBoss4.call(newBoss4m6hQHBM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYSnxFM = accounts[1]
		const FOSTERAddrICrTNYp = accounts[0]
		const initialRatevId4Svb = BigInt("1142")
		const initialPeriodIWo5zVc = BigInt("669")
		const initialOwnerDTN4uv = accounts[1]
		const contractYAY34yU = await Reseller.new(USDTAddrYSnxFM, FOSTERAddrICrTNYp, initialRatevId4Svb, initialPeriodIWo5zVc, initialOwnerDTN4uv, {from: accounts[1]});
		const newMinimumuVon8hg = BigInt("525")
		const newRatesw5nmI0 = BigInt("1782")
		const commentYiH02n1 = "50oML8VFbhCg3g9FbnVNrLa7aOXrsPu6CTAwxrCxn96Ponnd1pas8pybhGsypa4s51Y"
		const _ref5uBa59K = accounts[3]
		const _ref4KDoY5PQ = accounts[4]
		const _ref3dxZPatu = accounts[3]
		const _ref2t3oKGMu = accounts[0]
		const _ref1QZflDEP = accounts[1]
		const value3ESpZc = BigInt("1659")
		const newBoss2xuzhRIF = accounts[2]
		const newPeriodsLAEiSu = BigInt("618")
		const amountsLdx6xI = BigInt("320")
		const newBoss4QQJNu6m = "0x0000000000000000000000000000000000000001"
		await contractYAY34yU.setMinimum.call(newMinimumuVon8hg, {from: accounts[1]});
		await contractYAY34yU.setRate.call(newRatesw5nmI0, {from: accounts[0]});
		await contractYAY34yU.purchase.call(value3ESpZc, _ref1QZflDEP, _ref2t3oKGMu, _ref3dxZPatu, _ref4KDoY5PQ, _ref5uBa59K, commentYiH02n1, {from: accounts[1]});
		await contractYAY34yU.deposeBoss2.call(newBoss2xuzhRIF, {from: accounts[4]});
		await contractYAY34yU.setPeriod.call(newPeriodsLAEiSu, {from: accounts[1]});
		await contractYAY34yU.switchState.call({from: accounts[5]});
		const nullt83lOuY = await contractYAY34yU.getEstimation.call(amountsLdx6xI, {from: accounts[2]});
		await contractYAY34yU.deposeBoss4.call(newBoss4QQJNu6m, {from: accounts[0]});

		await expect(contractYAY34yU.setMinimum.call(newMinimumuVon8hg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruBeMvcg = accounts[2]
		const FOSTERAddriTYG714 = accounts[3]
		const initialRateK0zvox = BigInt("724")
		const initialPeriodp0VsvK = BigInt("1944")
		const initialOwnerGspOkAz = accounts[1]
		const contractaseB2s7 = await Reseller.new(USDTAddruBeMvcg, FOSTERAddriTYG714, initialRateK0zvox, initialPeriodp0VsvK, initialOwnerGspOkAz, {from: accounts[4]});
		const newBoss3AeVNDQF = accounts[3]
		const accounttQDLTSM = accounts[0]
		const newPeriodWWocsiB = BigInt("764")
		const level5PtWif32 = BigInt("116")
		const level4HCeB0Zc = BigInt("32")
		const level3AV4DkGK = BigInt("76")
		const level2WI5olV9 = BigInt("222")
		const level1I1fyw1W = BigInt("91")
		const valueEgQyQj = BigInt("1600")
		await contractaseB2s7.deposeBoss3.call(newBoss3AeVNDQF, {from: accounts[5]});
		const nullA7lKsK = await contractaseB2s7.allowanceFOSTER.call(accounttQDLTSM, {from: accounts[2]});
		await contractaseB2s7.setPeriod.call(newPeriodWWocsiB, {from: accounts[2]});
		await contractaseB2s7.setRefBonus.call(level1I1fyw1W, level2WI5olV9, level3AV4DkGK, level4HCeB0Zc, level5PtWif32, {from: accounts[3]});
		await contractaseB2s7.withdraw.call(valueEgQyQj, {from: accounts[1]});

		await expect(contractaseB2s7.deposeBoss3.call(newBoss3AeVNDQF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNho9ObJ = accounts[3]
		const FOSTERAddryK8brM = accounts[5]
		const initialRateycH75JE = BigInt("971")
		const initialPeriods2kQTnH = BigInt("1085")
		const initialOwnerP9EcciT = accounts[5]
		const contractH9tVm41 = await Reseller.new(USDTAddrNho9ObJ, FOSTERAddryK8brM, initialRateycH75JE, initialPeriods2kQTnH, initialOwnerP9EcciT, {from: accounts[0]});
		const amountOqOcC9R = BigInt("994")
		const newBoss2ZY8I6C = "0x0000000000000000000000000000000000000001"
		const newMinimumXwsGjgT = BigInt("411")
		const newFeedp0U6sF = BigInt("28")
		const nullIpeMhvf = await contractH9tVm41.getEstimation.call(amountOqOcC9R, {from: accounts[1]});
		await contractH9tVm41.deposeBoss2.call(newBoss2ZY8I6C, {from: accounts[0]});
		await contractH9tVm41.setMinimum.call(newMinimumXwsGjgT, {from: accounts[3]});
		await contractH9tVm41.setFee.call(newFeedp0U6sF, {from: accounts[3]});

		assert.equal(nullIpeMhvf, 965174)
		await expect(contractH9tVm41.deposeBoss2.call(newBoss2ZY8I6C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbied0n3 = accounts[1]
		const FOSTERAddrapyM4wT = accounts[0]
		const initialRateIJvVxxv = BigInt("1142")
		const initialPerioddicfZsx = BigInt("669")
		const initialOwnerUT1B3ix = accounts[1]
		const contractQpVcT2z = await Reseller.new(USDTAddrbied0n3, FOSTERAddrapyM4wT, initialRateIJvVxxv, initialPerioddicfZsx, initialOwnerUT1B3ix, {from: accounts[1]});
		const newMinimumyKf1gPO = BigInt("525")
		const commentCqfEB3y = "50oML8VFbhCg3g9FbnVNrLa7aOXrsPu6CTAwxrCxn96Ponnd1pas8pybhGsypa4s51Y"
		const _ref5E2rYUsB = accounts[3]
		const _ref4QUlu0ns = accounts[4]
		const _ref3amWEwd5 = accounts[3]
		const _ref2KoEXkpp = accounts[0]
		const _ref1rjFyMwC = accounts[1]
		const valueV9xj5Sc = BigInt("1659")
		const newBoss2rAN5DHs = accounts[2]
		const amountuJl47Y = BigInt("320")
		const newBoss4c9Tv1o7 = "0x0000000000000000000000000000000000000001"
		await contractQpVcT2z.setMinimum.call(newMinimumyKf1gPO, {from: accounts[1]});
		await contractQpVcT2z.purchase.call(valueV9xj5Sc, _ref1rjFyMwC, _ref2KoEXkpp, _ref3amWEwd5, _ref4QUlu0ns, _ref5E2rYUsB, commentCqfEB3y, {from: accounts[1]});
		await contractQpVcT2z.deposeBoss2.call(newBoss2rAN5DHs, {from: accounts[4]});
		await contractQpVcT2z.switchState.call({from: accounts[5]});
		const nullHPeILsE = await contractQpVcT2z.getEstimation.call(amountuJl47Y, {from: accounts[2]});
		await contractQpVcT2z.deposeBoss4.call(newBoss4c9Tv1o7, {from: accounts[0]});

		await expect(contractQpVcT2z.setMinimum.call(newMinimumyKf1gPO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYjxwpn = accounts[3]
		const FOSTERAddrvxckF9i = accounts[5]
		const initialRateYjBNaNV = BigInt("971")
		const initialPeriodAK1bSBu = BigInt("1085")
		const initialOwnerHIzGbl6 = accounts[5]
		const contractmVE2zOo = await Reseller.new(USDTAddrYjxwpn, FOSTERAddrvxckF9i, initialRateYjBNaNV, initialPeriodAK1bSBu, initialOwnerHIzGbl6, {from: accounts[0]});
		const accountK0ED56Y = accounts[3]
		const newFeeBEJpeLW = BigInt("125")
		const nullBLbyjBz = await contractmVE2zOo.allowanceFOSTER.call(accountK0ED56Y, {from: accounts[2]});
		await contractmVE2zOo.setFee.call(newFeeBEJpeLW, {from: accounts[3]});

		await expect(contractmVE2zOo.allowanceFOSTER.call(accountK0ED56Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrl7UbcwT = accounts[2]
		const FOSTERAddrmQZ41Y7 = accounts[3]
		const initialRatek34IWR = BigInt("724")
		const initialPeriodkxOgEfx = BigInt("1944")
		const initialOwnerbs78TaH = accounts[1]
		const contractifaq74w = await Reseller.new(USDTAddrl7UbcwT, FOSTERAddrmQZ41Y7, initialRatek34IWR, initialPeriodkxOgEfx, initialOwnerbs78TaH, {from: accounts[4]});
		const newBoss3n6vPdvt = accounts[4]
		const newPeriodlx3xj9H = BigInt("360")
		const valuefSFg7gw = BigInt("717")
		const recipientyYRV4TE = accounts[2]
		const ERC20TokenqSJdMwn = accounts[4]
		await contractifaq74w.deposeBoss3.call(newBoss3n6vPdvt, {from: accounts[1]});
		await contractifaq74w.setPeriod.call(newPeriodlx3xj9H, {from: accounts[4]});
		await contractifaq74w.withdrawERC20.call(ERC20TokenqSJdMwn, recipientyYRV4TE, valuefSFg7gw, {from: accounts[3]});

		await expect(contractifaq74w.deposeBoss3.call(newBoss3n6vPdvt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGJUAoPl = accounts[3]
		const FOSTERAddryYSTNCj = accounts[0]
		const initialRateOvC6Keg = BigInt("1895")
		const initialPeriodxwYgWZx = BigInt("880")
		const initialOwnerE8qigJZ = accounts[1]
		const contractPk95GJw = await Reseller.new(USDTAddrGJUAoPl, FOSTERAddryYSTNCj, initialRateOvC6Keg, initialPeriodxwYgWZx, initialOwnerE8qigJZ, {from: accounts[1]});
		const level5Mi4j1w4 = BigInt("28")
		const level4Pb7IwW = BigInt("226")
		const level3lqRR9YH = BigInt("149")
		const level2hysAiEz = BigInt("21")
		const level1kirv8co = BigInt("156")
		const newPeriodeOTmegH = BigInt("1583")
		const commentOIKv7xo = "9ByHdULJMDbUqLp9QC9v4kDTn5Kf"
		const _ref5ppJs6I = accounts[0]
		const _ref4bShq4WX = accounts[1]
		const _ref3ReAnk4N = accounts[4]
		const _ref2VnWmrF = accounts[4]
		const _ref1DrCaGnE = accounts[1]
		const valuerfRcaGn = BigInt("936")
		const newFeeMqIiPMo = BigInt("199")
		const _periodXuVdp8j = BigInt("91")
		const amountABwxv9Y = BigInt("65")
		const recipientSDWKbAn = accounts[1]
		await contractPk95GJw.setRefBonus.call(level1kirv8co, level2hysAiEz, level3lqRR9YH, level4Pb7IwW, level5Mi4j1w4, {from: accounts[1]});
		await contractPk95GJw.setPeriod.call(newPeriodeOTmegH, {from: accounts[2]});
		await contractPk95GJw.purchase.call(valuerfRcaGn, _ref1DrCaGnE, _ref2VnWmrF, _ref3ReAnk4N, _ref4bShq4WX, _ref5ppJs6I, commentOIKv7xo, {from: accounts[1]});
		await contractPk95GJw.setFee.call(newFeeMqIiPMo, {from: accounts[4]});
		await contractPk95GJw.freezeAndTransfer.call(recipientSDWKbAn, amountABwxv9Y, _periodXuVdp8j, {from: accounts[3]});

		await expect(contractPk95GJw.setRefBonus.call(level1kirv8co, level2hysAiEz, level3lqRR9YH, level4Pb7IwW, level5Mi4j1w4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNOD1ORx = accounts[2]
		const FOSTERAddrGqVOiyn = accounts[3]
		const initialRate6QgGV8 = BigInt("724")
		const initialPeriodXoDfOkW = BigInt("1944")
		const initialOwnerDvZSNWt = accounts[1]
		const contractRb5IxHf = await Reseller.new(USDTAddrNOD1ORx, FOSTERAddrGqVOiyn, initialRate6QgGV8, initialPeriodXoDfOkW, initialOwnerDvZSNWt, {from: accounts[4]});
		const newFeesDWld0M = BigInt("214")
		const valuem5w2uQj = BigInt("1580")
		await contractRb5IxHf.setFee.call(newFeesDWld0M, {from: accounts[1]});
		await contractRb5IxHf.withdraw.call(valuem5w2uQj, {from: accounts[1]});

		await expect(contractRb5IxHf.setFee.call(newFeesDWld0M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrY4hz4YK = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrGtoHtA = accounts[4]
		const initialRateEOFxE1a = BigInt("1795")
		const initialPeriodxKE4yTT = BigInt("58")
		const initialOwnerYhUBX3Z = accounts[5]
		const contractll319Gb = await Reseller.new(USDTAddrY4hz4YK, FOSTERAddrGtoHtA, initialRateEOFxE1a, initialPeriodxKE4yTT, initialOwnerYhUBX3Z, {from: accounts[5]});
		const _ref5K4FzcFT = accounts[2]
		const _ref4WHYEEjT = accounts[0]
		const _ref3iqATI6K = accounts[0]
		const _ref2UMxgMJM = accounts[4]
		const _ref1IIz0R5g = accounts[2]
		const value9s3cky = BigInt("3")
		const newBoss1l3V7jo = accounts[1]
		await contractll319Gb.buy.call(value9s3cky, _ref1IIz0R5g, _ref2UMxgMJM, _ref3iqATI6K, _ref4WHYEEjT, _ref5K4FzcFT, {from: accounts[0]});
		await contractll319Gb.deposeBoss1.call(newBoss1l3V7jo, {from: accounts[4]});

		await expect(contractll319Gb.buy.call(value9s3cky, _ref1IIz0R5g, _ref2UMxgMJM, _ref3iqATI6K, _ref4WHYEEjT, _ref5K4FzcFT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrc0oHkYr = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrVpgKRTY = accounts[4]
		const initialRateOXoTZp9 = BigInt("1795")
		const initialPeriodF7nyL4 = BigInt("58")
		const initialOwnerjbqerwJ = accounts[5]
		const contractu5LBLQ7 = await Reseller.new(USDTAddrc0oHkYr, FOSTERAddrVpgKRTY, initialRateOXoTZp9, initialPeriodF7nyL4, initialOwnerjbqerwJ, {from: accounts[5]});
		const newRateQ5OfT44 = BigInt("1209")
		const accountwWPjdl6 = accounts[4]
		const _ref5Ue7d97w = accounts[2]
		const _ref4zIcVxCY = accounts[0]
		const _ref3tNi5Chf = accounts[0]
		const _ref2BMi0cg = accounts[4]
		const _ref1ePKvdiq = accounts[2]
		const valueZLPaaFm = BigInt("0")
		await contractu5LBLQ7.setRate.call(newRateQ5OfT44, {from: accounts[5]});
		const nullcpOOmPE = await contractu5LBLQ7.balanceFOSTER.call(accountwWPjdl6, {from: accounts[0]});
		await contractu5LBLQ7.buy.call(valueZLPaaFm, _ref1ePKvdiq, _ref2BMi0cg, _ref3tNi5Chf, _ref4zIcVxCY, _ref5Ue7d97w, {from: accounts[0]});

		await expect(contractu5LBLQ7.setRate.call(newRateQ5OfT44, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})