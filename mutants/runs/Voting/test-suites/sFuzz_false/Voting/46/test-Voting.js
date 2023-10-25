const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressUgTAMXR = accounts[0]
		const VotingtDQqlfw = await Voting.new(addressUgTAMXR, {from: accounts[1]});
		const uintmNKo0Bm = BigInt("1359")
		const address9CQ25X = accounts[4]
		const addressteVZzqV = accounts[4]
		const addressUoddBUi = accounts[2]
		const stringQ0YA4r = "VmMQnOMWFFxkPrbtgSdbidzUCGUM4vjT05mNjcxmUceq7Lvg4KSrqUiwgcemDTTac98d4Lwn"
		const stringoISpRG7 = "GswRbFIf3SpngAm9X6JCCHMeJenGiQTNQ4y9aDN9msO5jQYqEyhSLE9ilkkT6yytJ3muW2CfG"
		const stringheTcoId = "LSwB76rBrRemsljXgkHtYKiX2r1uJB7TsZOuX0gXXg58N6hq629Wp9ml6IGhBW"
		const byteQtzlpKl = "0x191a14"
		const addressbKILNEJ = accounts[4]
		const boolL4I4RcN = await VotingtDQqlfw.transferFrom.call(addressteVZzqV, address9CQ25X, uintmNKo0Bm, {from: accounts[0]});
		await VotingtDQqlfw.requiresLiquidityTokenSnapshotAccess.call({from: accounts[1]});
		const boolgRyp3sv = await VotingtDQqlfw.isVotingSystem.call(addressUoddBUi, {from: accounts[1]});
		const 
rMfxO24 = await VotingtDQqlfw.createProposal.call(addressbKILNEJ, byteQtzlpKl, stringheTcoId, stringoISpRG7, stringQ0YA4r, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressu9a5ZqJ = accounts[2]
		const Votingdrpr2Sr = await Voting.new(addressu9a5ZqJ, {from: accounts[4]});
		const uintBnvWUlG = BigInt("1437")
		const addressh2qiWWP = accounts[3]
		const addressKfjxIEV = accounts[0]
		const uint256dm4jodV = await Votingdrpr2Sr.pause.call(uintBnvWUlG, {from: accounts[4]});
		const boolQnfDJ3p = await Votingdrpr2Sr.isValidOracleAddress.call(addressh2qiWWP, {from: accounts[3]});
		const boolpYMps7H = await Votingdrpr2Sr.isExchangeFactory.call(addressKfjxIEV, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingNSdaBQX = await Voting.new({from: accounts[4]});
		const uint0XLHGy = BigInt("316")
		const addressEr5aPSC = accounts[2]
		const addressaVhEjm8 = accounts[1]
		const addressiaoSSO = "0x0000000000000000000000000000000000000001"
		const address4fnxeh = accounts[3]
		const uintKGEFx2t = BigInt("1463")
		const uintDirlDOK = BigInt("1297")
		const addressfnHWgrO = accounts[1]
		const boolqDiv0EA = await VotingNSdaBQX.transferFrom.call(addressaVhEjm8, addressEr5aPSC, uint0XLHGy, {from: accounts[2]});
		const uint256UcSXXP5 = await VotingNSdaBQX.allowance.call(address4fnxeh, addressiaoSSO, {from: accounts[5]});
		await VotingNSdaBQX.onlyMessageProcessor.call({from: accounts[2]});
		const uint256ROoWj3F = await VotingNSdaBQX.approve.call(uintKGEFx2t, {from: accounts[1]});
		const boolc44hPR = await VotingNSdaBQX.decreaseAllowance.call(addressfnHWgrO, uintDirlDOK, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresstR8TZB = accounts[0]
		const VotinghQcLUsY = await Voting.new(addresstR8TZB, {from: accounts[5]});
		const uintpBcPba6 = BigInt("1447")
		const address138Nyt = accounts[5]
		await VotinghQcLUsY.renounceOwnership.call({from: accounts[4]});
		const boolEqPhcDk = await VotinghQcLUsY.transfer.call(address138Nyt, uintpBcPba6, {from: accounts[3]});
		const stringwLvEHDR = await VotinghQcLUsY.name.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressoC2SUMA = accounts[1]
		const Voting9VoLvR = await Voting.new(addressoC2SUMA, {from: accounts[4]});
		const uintMfaLB88 = BigInt("1790")
		const uintNBwjMwf = BigInt("871")
		const addressfAyMFrS = "0x0000000000000000000000000000000000000001"
		const uintXzbl4Kw = BigInt("1794")
		const uint256DWSD3Ii = await Voting9VoLvR.resolve.call(uintMfaLB88, {from: accounts[0]});
		await Voting9VoLvR.onlyExchangeFactory.call({from: accounts[4]});
		const uint256n03u6eH = await Voting9VoLvR.balanceOfAt.call(addressfAyMFrS, uintNBwjMwf, {from: accounts[0]});
		const uint2564f4wzS = await Voting9VoLvR.burn.call(uintXzbl4Kw, {from: accounts[0]});
		await Voting9VoLvR.renounceMinter.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressjE5obHX = accounts[3]
		const VotingqxDfKnH = await Voting.new(addressjE5obHX, {from: accounts[4]});
		const boolOOpenYb = false
		const uintWxlIh97 = BigInt("739")
		const uint256Dfcy4uh = await VotingqxDfKnH.vote.call(uintWxlIh97, boolOOpenYb, {from: accounts[5]});
		const stringpPNIm3U = await VotingqxDfKnH.name.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressKoxFN7G = accounts[2]
		const VotinguvyxID9 = await Voting.new(addressKoxFN7G, {from: accounts[0]});
		const uintNBADxIQ = BigInt("990")
		const addressCnncKwz = accounts[4]
		const addressFL5ey0E = accounts[4]
		const uinte1gaBj2 = BigInt("284")
		const addresstrpxGmY = accounts[2]
		const addressDrLW31s = accounts[1]
		const boolizww66x = await VotinguvyxID9.approve.call(addressCnncKwz, uintNBADxIQ, {from: accounts[1]});
		const uint256vLs5pBb = await VotinguvyxID9.snapshot.call({from: accounts[3]});
		const boolOAzqSs4 = await VotinguvyxID9.isValidStamperAddress.call(addressFL5ey0E, {from: accounts[1]});
		await VotinguvyxID9.onlyExchangeFactory.call({from: accounts[1]});
		const uint256JDv5bHw = await VotinguvyxID9.balanceOfAt.call(addresstrpxGmY, uinte1gaBj2, {from: accounts[5]});
		const addressxXEeTfa = await VotinguvyxID9.updateRegistry.call(addressDrLW31s, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressHPo4ojg = accounts[3]
		const VotingqxDfKnH = await Voting.new(addressHPo4ojg, {from: accounts[4]});
		const addressauzDl1A = accounts[1]
		const uintdV7BFv = BigInt("41")
		const boolle15ymE = await VotingqxDfKnH.didAddressVote.call(uintdV7BFv, addressauzDl1A, {from: accounts[5]});
		await VotingqxDfKnH.nonReentrant.call({from: accounts[5]});
		const stringpPNIm3U = await VotingqxDfKnH.name.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressf3L4Nqp = accounts[3]
		const VotingU2aRvRf = await Voting.new(addressf3L4Nqp, {from: accounts[0]});
		const addressp7kUWlM = accounts[4]
		const uintcdzXYIJ = BigInt("264")
		const uintQQJMXQY = BigInt("1284")
		const addressPS70JOw = accounts[0]
		const addressWPdBLt = accounts[1]
		const addressPz96D5Y = accounts[0]
		const boolcZI5WEp = await VotingU2aRvRf.isValidStamperAddress.call(addressp7kUWlM, {from: accounts[3]});
		const uint256tG4kpvG = await VotingU2aRvRf.approve.call(uintcdzXYIJ, {from: accounts[3]});
		await VotingU2aRvRf.requiresLiquidityTokenSnapshotAccess.call({from: "0x0000000000000000000000000000000000000001"});
		const boolW4UmX1J = await VotingU2aRvRf.transferFrom.call(addressWPdBLt, addressPS70JOw, uintQQJMXQY, {from: accounts[2]});
		const boolG16igZc = await VotingU2aRvRf.isValidOracleAddress.call(addressPz96D5Y, {from: accounts[3]});
		const uint256GAyYcfE = await VotingU2aRvRf.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingHms01pI = await Voting.new({from: accounts[3]});
		const stringV084Jdi = await VotingHms01pI.name.call({from: accounts[0]});
		const addressIfMeR1s = await VotingHms01pI.getRegistryAddress.call({from: accounts[1]});
		await VotingHms01pI.onlyExchangeFactoryOrVotingSystem.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingyG3deuS = await Voting.new({from: accounts[0]});
		const uintBYQuIyz = BigInt("1190")
		const addressGsILb3C = accounts[0]
		const addresspOQWla5 = accounts[5]
		const uint256XBT8FV7 = await VotingyG3deuS.veto.call(uintBYQuIyz, {from: accounts[1]});
		const addressodEq2Yl = await VotingyG3deuS.transferOwnership.call(addressGsILb3C, {from: accounts[1]});
		const boolTxTYNO = await VotingyG3deuS.isValidStamperAddress.call(addresspOQWla5, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressu6SxIxg = accounts[1]
		const VotingxMJaJBg = await Voting.new(addressu6SxIxg, {from: accounts[3]});
		const addressjpcG2IH = accounts[0]
		const uintRhr5SDw = BigInt("438")
		const addressHRH1J4 = accounts[4]
		const uintgRG1m8S = BigInt("1321")
		const addressfV8eCzj = accounts[5]
		const boolZkYe6o = await VotingxMJaJBg.isVotingSystem.call(addressjpcG2IH, {from: accounts[4]});
		const boolmoRerX0 = await VotingxMJaJBg.transfer.call(addressHRH1J4, uintRhr5SDw, {from: accounts[3]});
		const uint256fT43rJ4 = await VotingxMJaJBg.balanceOfAt.call(addressfV8eCzj, uintgRG1m8S, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressedi4fxL = accounts[0]
		const VotingwqouHWU = await Voting.new(addressedi4fxL, {from: accounts[1]});
		const addressw4OCfRE = accounts[4]
		const uintGvUp1uw = BigInt("975")
		const uintdb5DLAC = BigInt("549")
		const addressvS1A5b = accounts[0]
		const boolkHly9ZV = await VotingwqouHWU.isValidOracleAddress.call(addressw4OCfRE, {from: accounts[2]});
		const uint256uazjUYI = await VotingwqouHWU.resolve.call(uintGvUp1uw, {from: accounts[2]});
		const boolJGVMpnn = await VotingwqouHWU.approve.call(addressvS1A5b, uintdb5DLAC, {from: accounts[0]});
		await VotingwqouHWU.renounceMinter.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingM8tVbog = await Voting.new({from: accounts[1]});
		const uinthLwOiYF = BigInt("1592")
		const addressRjjIBr = accounts[3]
		const address6n50X3 = accounts[1]
		const uintVlwAEoR = BigInt("798")
		const addressofSDhMu = accounts[4]
		const uintrd28XF8 = BigInt("1764")
		const addressunVw7Sw = accounts[2]
		const addressYurOW61 = accounts[1]
		const uintngB3L9K = BigInt("1627")
		const addresssUIofy8 = accounts[4]
		const uint256uKxcRBn = await VotingM8tVbog.balanceOfAt.call(addressRjjIBr, uinthLwOiYF, {from: "0x0000000000000000000000000000000000000001"});
		const boolAOmmS9v = await VotingM8tVbog.isMinter.call(address6n50X3, {from: accounts[1]});
		const boolpOqnxWd = await VotingM8tVbog.transfer.call(addressofSDhMu, uintVlwAEoR, {from: "0x0000000000000000000000000000000000000001"});
		const boolh6X2DV1 = await VotingM8tVbog.transferFrom.call(addressYurOW61, addressunVw7Sw, uintrd28XF8, {from: accounts[2]});
		const boolnQkLM3m = await VotingM8tVbog.increaseAllowance.call(addresssUIofy8, uintngB3L9K, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingnXFfHQ = await Voting.new({from: accounts[2]});
		const addressopLI9he = accounts[3]
		const addressbvRunGB = accounts[0]
		const uintsogNe3N = BigInt("619")
		const addressilmmUfW = accounts[4]
		const addressxOgftM = await VotingnXFfHQ.ownableUpgrade.call(addressopLI9he, {from: "0x0000000000000000000000000000000000000001"});
		const boolQFTlzuw = await VotingnXFfHQ.isVotingSystem.call(addressbvRunGB, {from: accounts[0]});
		const uint256Tndc5Se = await VotingnXFfHQ.approve.call(uintsogNe3N, {from: accounts[4]});
		const boolU3bfjQe = await VotingnXFfHQ.isMinter.call(addressilmmUfW, {from: accounts[5]});
	});
})