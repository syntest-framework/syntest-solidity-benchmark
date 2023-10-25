const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressYbzICPx = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressYbzICPx, {from: accounts[4]});
		const uint0voBqG = BigInt("1213")
		const addressBP9Taqh = accounts[0]
		const uintTtq3Zos = BigInt("1686")
		const addressOi2E90j = accounts[5]
		const uint256usdXymc = await Votingnu8l6YM.balanceOfAt.call(addressBP9Taqh, uint0voBqG, {from: accounts[2]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
		const boolwptgCBg = await Votingnu8l6YM.approve.call(addressOi2E90j, uintTtq3Zos, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressbXT9FQx = accounts[2]
		const VotingowcyPhb = await Voting.new(addressbXT9FQx, {from: accounts[3]});
		const addressjTsRdpN = accounts[3]
		const addressLjHP7ZG = accounts[0]
		const boolMwvFalR = await VotingowcyPhb.isValidOracleAddress.call(addressjTsRdpN, {from: accounts[2]});
		await VotingowcyPhb.requiresWalletAcccess.call({from: accounts[2]});
		const uint256OixlTpT = await VotingowcyPhb.balanceOf.call(addressLjHP7ZG, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresskIJrF4 = accounts[2]
		const VotingUSyfmeV = await Voting.new(addresskIJrF4, {from: "0x0000000000000000000000000000000000000001"});
		const uintMVIaZhz = BigInt("1864")
		const addressWmF3P05 = accounts[4]
		const stringyh6MQ4U = "a1J9ntcNYXcsFlq8QM1k63yjyLyL8bfYNDq7XLi7vmmf5iu7cnI3d2q68l0V4h0GKXfjSb3v6mU6K2RpP8gU8FW2m7oYqacyWe"
		const stringB2KBqrf = "H3F9XyAT"
		const stringNXNRAQs = "vsF42rlKiMsmF22CuB"
		const bytef1vVEds = "0x0f0c0c1d1c1c08031c1d"
		const addressoxmq5ZS = accounts[3]
		const addressdeq1j9x = "0x0000000000000000000000000000000000000001"
		const uintkKesc3d = BigInt("1653")
		const uintTTjys4 = BigInt("616")
		const addressTsJhAGI = accounts[1]
		const boollLnCxgW = await VotingUSyfmeV.transfer.call(addressWmF3P05, uintMVIaZhz, {from: accounts[4]});
		const 
BsHRpgI = await VotingUSyfmeV.createProposal.call(addressoxmq5ZS, bytef1vVEds, stringNXNRAQs, stringB2KBqrf, stringyh6MQ4U, {from: "0x0000000000000000000000000000000000000001"});
		const addressR0T7dBV = await VotingUSyfmeV.ownableUpgrade.call(addressdeq1j9x, {from: accounts[4]});
		const uint25628Ztgk = await VotingUSyfmeV.resolve.call(uintkKesc3d, {from: accounts[4]});
		const boolba4QjB7 = await VotingUSyfmeV.approve.call(addressTsJhAGI, uintTTjys4, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingaqaPpI = await Voting.new({from: accounts[4]});
		const addressqocxAxn = accounts[1]
		const addressbnUPPIm = accounts[4]
		const uintdxtu68N = BigInt("1297")
		const addressIE33z8 = accounts[0]
		const boolIWPIUEG = await VotingaqaPpI.isOwner.call({from: accounts[1]});
		const addressa8VcE39 = await VotingaqaPpI.updateRegistry.call(addressqocxAxn, {from: accounts[4]});
		const boolFwx8Dbc = await VotingaqaPpI.isVotingSystem.call(addressbnUPPIm, {from: accounts[2]});
		const booljJkgton = await VotingaqaPpI.mint.call(addressIE33z8, uintdxtu68N, {from: accounts[0]});
		const uint256TJmerIY = await VotingaqaPpI.snapshot.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressBLvZFy = accounts[1]
		const VotingGqAfZ3M = await Voting.new(addressBLvZFy, {from: accounts[4]});
		await VotingGqAfZ3M.renounceOwnership.call({from: accounts[2]});
		const uint256ANc5Vh = await VotingGqAfZ3M.totalSupply.call({from: accounts[0]});
		await VotingGqAfZ3M.nonReentrant.call({from: accounts[4]});
		await VotingGqAfZ3M.onlyVotingSystem.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const Votingc17ioDK = await Voting.new({from: accounts[5]});
		const uintdbpq9HL = BigInt("1951")
		const addressez0povv = accounts[3]
		const uintyIesIpI = BigInt("1859")
		const addressNjHgBN3 = accounts[4]
		const uintcQwfhSU = BigInt("727")
		const addressIXuGziS = accounts[0]
		const addresslf1WzzS = accounts[2]
		const booljcSKYa = await Votingc17ioDK.decreaseAllowance.call(addressez0povv, uintdbpq9HL, {from: "0x0000000000000000000000000000000000000001"});
		const boolNRmCP3C = await Votingc17ioDK.isOwner.call({from: accounts[4]});
		const boolIytWBpD = await Votingc17ioDK.mint.call(addressNjHgBN3, uintyIesIpI, {from: accounts[2]});
		const boolQexobZT = await Votingc17ioDK.transferFrom.call(addresslf1WzzS, addressIXuGziS, uintcQwfhSU, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressLHZCyOJ = accounts[3]
		const VotingNP61zqI = await Voting.new(addressLHZCyOJ, {from: accounts[0]});
		const addressF9jLXlH = accounts[0]
		const addressZ6zp6br = accounts[3]
		const addressxfkKJF3 = accounts[3]
		const uintAQkZB0V = BigInt("1805")
		const addressxgvlit7 = accounts[4]
		const addressdxrPas = accounts[1]
		const bool240Pum = await VotingNP61zqI.isExchangeFactory.call(addressF9jLXlH, {from: accounts[0]});
		const uint256Z2cAelF = await VotingNP61zqI.allowance.call(addressxfkKJF3, addressZ6zp6br, {from: accounts[2]});
		const uint256CtqPet = await VotingNP61zqI.balanceOfAt.call(addressxgvlit7, uintAQkZB0V, {from: "0x0000000000000000000000000000000000000001"});
		const uint2563UsbD3 = await VotingNP61zqI.balanceOf.call(addressdxrPas, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressUV4Hdt = accounts[4]
		const VotingF2NO8IP = await Voting.new(addressUV4Hdt, {from: accounts[2]});
		const addressXTITDte = accounts[1]
		const uintumffpa5 = BigInt("1879")
		const addressVwtVoue = "0x0000000000000000000000000000000000000001"
		const uintA9qdMlm = BigInt("22")
		const booldCVYRW = await VotingF2NO8IP.isValidVerifierAddress.call(addressXTITDte, {from: accounts[0]});
		await VotingF2NO8IP.onlyOracle.call({from: accounts[0]});
		const addressN3L1eHo = await VotingF2NO8IP.burnFrom.call(addressVwtVoue, uintumffpa5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SX3AGrR = await VotingF2NO8IP.pause.call(uintA9qdMlm, {from: accounts[1]});
		await VotingF2NO8IP.onlyVotingSystem.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressM9V1di8 = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressM9V1di8, {from: accounts[4]});
		await Votingnu8l6YM.renounceOwnership.call({from: accounts[4]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressGqZFn9e = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressGqZFn9e, {from: accounts[4]});
		const addressTlvvm36 = await Votingnu8l6YM.owner.call({from: accounts[4]});
		const uint8EkRVWPQ = await Votingnu8l6YM.decimals.call({from: accounts[3]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressCXXhlaf = accounts[2]
		const VotingmiLrrgN = await Voting.new(addressCXXhlaf, {from: accounts[1]});
		const addresswKqEpUE = accounts[4]
		const addressNFkiLl7 = accounts[0]
		const addressWPLKOLN = accounts[2]
		const uintkY3Jbh7 = BigInt("1603")
		const booluGLKkGn = await VotingmiLrrgN.isVotingSystem.call(addresswKqEpUE, {from: accounts[2]});
		const addressepH5DPa = await VotingmiLrrgN.getRegistryAddress.call({from: accounts[0]});
		const boolOiWVTJS = await VotingmiLrrgN.isValidStamperAddress.call(addressNFkiLl7, {from: accounts[4]});
		const uint256jJ4uBrs = await VotingmiLrrgN.snapshot.call({from: accounts[3]});
		await VotingmiLrrgN.renounceMinter.call({from: accounts[0]});
		const boolNFioWbZ = await VotingmiLrrgN.didAddressVote.call(uintkY3Jbh7, addressWPLKOLN, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressZMLhdCm = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressZMLhdCm, {from: accounts[4]});
		const addressjNIIpy4 = accounts[4]
		const addresscvbUmYO = await Votingnu8l6YM.ownableUpgrade.call(addressjNIIpy4, {from: accounts[4]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const address8KR648 = accounts[3]
		const VotinglHcEj7O = await Voting.new(address8KR648, {from: accounts[5]});
		const addressCjqLTTa = accounts[1]
		const uintLXPMUrH = BigInt("1715")
		const boolxjn5Msr = await VotinglHcEj7O.didAddressVote.call(uintLXPMUrH, addressCjqLTTa, {from: accounts[2]});
		const addressA1bZzgg = await VotinglHcEj7O.getRegistryAddress.call({from: accounts[4]});
		const addressTIWDM2V = await VotinglHcEj7O.getRegistryAddress.call({from: accounts[4]});
		await VotinglHcEj7O.onlyOracle.call({from: accounts[4]});
		await VotinglHcEj7O.renounceMinter.call({from: accounts[3]});
		const addressuUErsaF = await VotinglHcEj7O.getRegistryAddress.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresshMimwLT = accounts[4]
		const Votingnu8l6YM = await Voting.new(addresshMimwLT, {from: accounts[4]});
		const uintUiBFMZi = BigInt("696")
		const uint256ilqtpHh = await Votingnu8l6YM.pause.call(uintUiBFMZi, {from: accounts[4]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressK773b7C = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressK773b7C, {from: accounts[4]});
		const uintnSp7zND = BigInt("1299")
		const uint256iIdDOl = await Votingnu8l6YM.resolve.call(uintnSp7zND, {from: accounts[1]});
		await Votingnu8l6YM.onlyVotingSystem.call({from: accounts[5]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressAlKwW8F = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressAlKwW8F, {from: accounts[4]});
		const addressj0zbiJ = accounts[2]
		const boolVdlc0Pf = await Votingnu8l6YM.isValidStamperAddress.call(addressj0zbiJ, {from: accounts[4]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressnpFkxtq = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressnpFkxtq, {from: accounts[4]});
		const uintOjO1SFK = BigInt("1546")
		const addressA9Og4h = "0x0000000000000000000000000000000000000001"
		const uint256m0rz3Dv = await Votingnu8l6YM.approve.call(uintOjO1SFK, {from: accounts[4]});
		const addresssTMXiSL = await Votingnu8l6YM.ownableUpgrade.call(addressA9Og4h, {from: accounts[5]});
		await Votingnu8l6YM.onlyExchange.call({from: "0x0000000000000000000000000000000000000001"});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressGvyGwd = accounts[0]
		const VotingYRivln0 = await Voting.new(addressGvyGwd, {from: accounts[4]});
		const addressFv3e65e = accounts[3]
		const addresszrTN9Xa = accounts[1]
		const addressVEpJqVa = accounts[2]
		const addressKBcz7wT = await VotingYRivln0.transferOwnership.call(addressFv3e65e, {from: accounts[4]});
		const addressCu5mG3E = await VotingYRivln0.transferOwnership.call(addresszrTN9Xa, {from: accounts[3]});
		const boolRDplUP = await VotingYRivln0.isValidOracleAddress.call(addressVEpJqVa, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressYfEtq9d = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressYfEtq9d, {from: accounts[4]});
		const stringvIddEc1 = "1Dmq3Xo8RTM7qYVtw66OYtLcbQ4c2P3D1bsbb8Cnbr1iNSrL"
		const stringZp5Vth6 = "ZKPwcGwKR7tS"
		const stringaI6RvC0 = "sCJ9S18ml9qoPnOYs1f"
		const byteHyliEN = "0x0a0a07190911081516060e141b091608130504101f1b111d17061a171d0809"
		const addressC3dsb93 = accounts[4]
		const uintqQ2pYRZ = BigInt("1907")
		const addressluAnGAI = accounts[4]
		const uintUbRYWt = BigInt("1373")
		const addressTQZ5h9u = accounts[1]
		const 
XirlwN = await Votingnu8l6YM.createProposal.call(addressC3dsb93, byteHyliEN, stringaI6RvC0, stringZp5Vth6, stringvIddEc1, {from: accounts[4]});
		const boolbYaiMFa = await Votingnu8l6YM.transfer.call(addressluAnGAI, uintqQ2pYRZ, {from: accounts[0]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
		const boolAbK0En = await Votingnu8l6YM.transfer.call(addressTQZ5h9u, uintUbRYWt, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingL5ifBc7 = await Voting.new({from: accounts[0]});
		const uint4Fur2p = BigInt("1126")
		const addresst99l5ih = accounts[3]
		const addressQSwKyrY = accounts[3]
		const boolDsoAPnf = await VotingL5ifBc7.decreaseAllowance.call(addresst99l5ih, uint4Fur2p, {from: accounts[3]});
		const stringawb4R8N = await VotingL5ifBc7.symbol.call({from: accounts[3]});
		const boolgd93Oo = await VotingL5ifBc7.isValidOracleAddress.call(addressQSwKyrY, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressE7dsH7w = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressE7dsH7w, {from: accounts[4]});
		const uintKA5Ybyb = BigInt("1078")
		const uint256O5kc9Wu = await Votingnu8l6YM.veto.call(uintKA5Ybyb, {from: accounts[4]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
		await Votingnu8l6YM.onlyOracle.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingoUwUFpo = await Voting.new({from: accounts[2]});
		const boolK1UpNCc = await VotingoUwUFpo.isOwner.call({from: accounts[5]});
		await VotingoUwUFpo.onRegistryRefresh.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressXdy32hu = accounts[4]
		const Votingnu8l6YM = await Voting.new(addressXdy32hu, {from: accounts[4]});
		const booloUCM1iX = false
		const uintxGIUsqi = BigInt("1999")
		const uintGrvTp0o = BigInt("1394")
		const uint256IxTWStD = await Votingnu8l6YM.vote.call(uintxGIUsqi, booloUCM1iX, {from: accounts[4]});
		const uint256mwT7diT = await Votingnu8l6YM.totalSupplyAt.call(uintGrvTp0o, {from: accounts[4]});
		await Votingnu8l6YM.onRegistryRefresh.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const Votingyt8UA02 = await Voting.new({from: accounts[3]});
		const uintHN4g2eV = BigInt("762")
		const addressHFINnPC = "0x0000000000000000000000000000000000000001"
		await Votingyt8UA02.onlyOwner.call({from: accounts[0]});
		await Votingyt8UA02.renounceMinter.call({from: accounts[3]});
		const boolaWM7Xi6 = await Votingyt8UA02.transfer.call(addressHFINnPC, uintHN4g2eV, {from: accounts[3]});
		await Votingyt8UA02.onlyMinter.call({from: accounts[3]});
	});
})