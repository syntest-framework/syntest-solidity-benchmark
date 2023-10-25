const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringG0HJUxe = "d7yp28vHfAIcPvaMmpSJCe73bKhSK15t8PkgjSQN9HSTf5py04CURJ1Kyqq1vCUq4tlLJRn0MuleBMcL7PKYKPYsGDDkLO664"
		const string7FWtx0 = "931hkNMBenOcz7yERFHObFxxIjpi2VKy8CaUsAuUigxF5wyPSdZNAOiC9p2xwlBWOAaB0IP5flC"
		const uintLEbgMon = BigInt("247")
		const BACMARSLPTOKENPoolNRugYeq = await BACMARSLPTOKENPool.new(stringG0HJUxe, string7FWtx0, uintLEbgMon, {from: accounts[3]});
		const addressCRHHhS2 = accounts[5]
		const byte7TYpuc = "0x0d0b1f190b09150a1b031b0f03180f0902101218121d131e0602120b0707121d"
		const bytexEf10VM = "0x1c000b08200c0c0302150d0112030a0e1319131a1e172011121917110a051b0f"
		const uintAf6yrRZ = BigInt("203")
		const uintRGc60A7 = BigInt("698")
		const uintydS8Lz7 = BigInt("1135")
		const uint256G46zb3Z = await BACMARSLPTOKENPoolNRugYeq.earned.call(addressCRHHhS2, {from: accounts[5]});
		await BACMARSLPTOKENPoolNRugYeq.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256gNAXbHi = await BACMARSLPTOKENPoolNRugYeq.stakeWithPermit.call(uintydS8Lz7, uintRGc60A7, uintAf6yrRZ, bytexEf10VM, byte7TYpuc, {from: accounts[2]});
		await BACMARSLPTOKENPoolNRugYeq.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolNRugYeq.nonReentrant.call({from: accounts[1]});
		const uint8KcFiVIF = await BACMARSLPTOKENPoolNRugYeq.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdYFL5Rx = accounts[2]
		const addressOwovJlW = accounts[4]
		const addressZxs57lz = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressdYFL5Rx, addressOwovJlW, addressZxs57lz, {from: accounts[0]});
		const uintfwKMktN = BigInt("115")
//		const uint256WPqzFNX = await BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintfwKMktN, {from: accounts[1]});
//		const uint256UOgKGGw = await BACMARSLPTOKENPoolBerdRZY.rewardPerToken.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});
//		const uint256Z1ViUcO = await BACMARSLPTOKENPoolBerdRZY.totalSupply.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintfwKMktN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressIqkI2Qe = accounts[1]
		const addressOQ6tqjj = accounts[4]
		const addressZlNJyf = accounts[2]
		const BACMARSLPTOKENPoolFA4D54d = await BACMARSLPTOKENPool.new(addressIqkI2Qe, addressOQ6tqjj, addressZlNJyf, {from: accounts[1]});
//		const stringsYbZvZ = await BACMARSLPTOKENPoolFA4D54d.symbol.call({from: accounts[2]});
//		const stringiPsOKSi = await BACMARSLPTOKENPoolFA4D54d.name.call({from: accounts[3]});
//		const uint256y1f0BfF = await BACMARSLPTOKENPoolFA4D54d.totalSupply.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolFA4D54d.symbol.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhGVkq0N = "ty2q8mXB5o6auUUvG9yr7IISHUEo74XthtYis5rh52GhX9sedA"
		const stringMdKdAZK = "GwexW97tJgpAOb1WmMWWYnk8gIVHJaxzN988nPct3m6hLGkzxU6dghT5RVmv584VEa0SPrF9lHsA1dHXmB5k"
		const uintCiYVDoW = BigInt("200")
		const BACMARSLPTOKENPoolAyTFGRY = await BACMARSLPTOKENPool.new(stringhGVkq0N, stringMdKdAZK, uintCiYVDoW, {from: accounts[5]});
		const addressossgybJ = accounts[2]
		const addressf61MJZG = "0x0000000000000000000000000000000000000001"
		const uint256spd5oKt = await BACMARSLPTOKENPoolAyTFGRY.getRewardForDuration.call({from: accounts[4]});
		const uint256yvYtSO = await BACMARSLPTOKENPoolAyTFGRY.earned.call(addressossgybJ, {from: accounts[3]});
		await BACMARSLPTOKENPoolAyTFGRY.getReward.call({from: accounts[2]});
		const uint256LEQYxAY = await BACMARSLPTOKENPoolAyTFGRY.earned.call(addressf61MJZG, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOTtRQgi = accounts[5]
		const addressCTeiZmd = accounts[2]
		const addressMDHnr7U = accounts[4]
		const BACMARSLPTOKENPoolZrCKUtU = await BACMARSLPTOKENPool.new(addressOTtRQgi, addressCTeiZmd, addressMDHnr7U, {from: "0x0000000000000000000000000000000000000001"});
		const addressKSlATBj = "0x0000000000000000000000000000000000000001"
		const addressBcb40GQ = await BACMARSLPTOKENPoolZrCKUtU.updateReward.call(addressKSlATBj, {from: accounts[4]});
		const uint256YEqX4zE = await BACMARSLPTOKENPoolZrCKUtU.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolZrCKUtU.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL20FzVI = "bJfjT9ceaKOXJ7ZXMiEWfFssuuc9jFeY6sZe0Xq38fuUnQlPnpMF"
		const stringw67nxW1 = "xQCXyEyxHmw5vwO1siT4AoLUESxGqLPCP3gPWxxkP7tEVvzeUGJhl2n"
		const uinthRjtSwm = BigInt("106")
		const BACMARSLPTOKENPoolAtzFEv2 = await BACMARSLPTOKENPool.new(stringL20FzVI, stringw67nxW1, uinthRjtSwm, {from: accounts[4]});
		const uintiHzshU7 = BigInt("609")
		const uint8XwXdSXz = await BACMARSLPTOKENPoolAtzFEv2.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolAtzFEv2.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolAtzFEv2.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPoolAtzFEv2.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256MFzJ2db = await BACMARSLPTOKENPoolAtzFEv2.notifyRewardAmount.call(uintiHzshU7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnicL0a0 = "OHzfWQbEtlz7O64nrl1pg9NKXyCkkdpn9totePBVa8C3mDSfJuzYYmuShBMQJ90ckNdP1"
		const stringWcbXYvS = "xVUjrbWflhIzl7nLGZq4ndL2HxlgDYX4KGxWhnVToEo7RgqmJbbO6S4fUuXSQsvepZWyFahs6wcmIepm8nJdEg03sib5uC2Q"
		const uintbfrERgp = BigInt("11")
		const BACMARSLPTOKENPoolyPtoKtx = await BACMARSLPTOKENPool.new(stringnicL0a0, stringWcbXYvS, uintbfrERgp, {from: accounts[2]});
		const uintJXQL2SV = BigInt("544")
		const uintGERsg4 = BigInt("1112")
		const uint2566AlloL = await BACMARSLPTOKENPoolyPtoKtx.notifyRewardAmount.call(uintJXQL2SV, {from: accounts[2]});
		await BACMARSLPTOKENPoolyPtoKtx.getReward.call({from: accounts[3]});
		const uint256rk3Drix = await BACMARSLPTOKENPoolyPtoKtx.stake.call(uintGERsg4, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressBsdSTmn = accounts[2]
		const addressoF2bzuZ = accounts[4]
		const addressmjSge9f = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressBsdSTmn, addressoF2bzuZ, addressmjSge9f, {from: accounts[0]});
		const addressbVMwdBQ = accounts[2]
		const uintqdKJlRa = BigInt("115")
		const uint256jKaVHNn = await BACMARSLPTOKENPoolBerdRZY.balanceOf.call(addressbVMwdBQ, {from: accounts[2]});
//		const uint256WPqzFNX = await BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintqdKJlRa, {from: accounts[1]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});
//		const uint256Z1ViUcO = await BACMARSLPTOKENPoolBerdRZY.totalSupply.call({from: accounts[4]});
//		const uint256WcRAChQ = await BACMARSLPTOKENPoolBerdRZY.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint8soFmkf = await BACMARSLPTOKENPoolBerdRZY.decimals.call({from: accounts[5]});

		assert.equal(uint256jKaVHNn, BigInt("0"))
		await expect(BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintqdKJlRa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqgzb9yf = accounts[2]
		const addressFpAw6u6 = accounts[4]
		const addresszy7sISG = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressqgzb9yf, addressFpAw6u6, addresszy7sISG, {from: accounts[0]});
		const uintPAZT0Pc = BigInt("115")
//		await BACMARSLPTOKENPoolBerdRZY.exit.call({from: accounts[3]});
//		const uint256WPqzFNX = await BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintPAZT0Pc, {from: accounts[1]});
//		const uint256UOgKGGw = await BACMARSLPTOKENPoolBerdRZY.rewardPerToken.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});
//		const uint256Z1ViUcO = await BACMARSLPTOKENPoolBerdRZY.totalSupply.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolBerdRZY.onlyRewardsDistribution.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolBerdRZY.exit.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolBerdRZY.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTC1jzJa = accounts[1]
		const addressWzgQVJf = accounts[4]
		const addressoC4IWyW = accounts[2]
		const BACMARSLPTOKENPoolFA4D54d = await BACMARSLPTOKENPool.new(addressTC1jzJa, addressWzgQVJf, addressoC4IWyW, {from: accounts[1]});
		const byteeNMsqeW = "0x16131d03071b12121813051a200a13060b17101c0a0b1410100007040b130d07"
		const bytezd3RIP0 = "0x1a12120c0b1610061a11101a131c171a0e130319071711051c0a140d1a071d0a"
		const uintuasLoqo = BigInt("14")
		const uintkUEDmTo = BigInt("488")
		const uintck24QdP = BigInt("641")
//		const uint256l0M6Ux0 = await BACMARSLPTOKENPoolFA4D54d.stakeWithPermit.call(uintck24QdP, uintkUEDmTo, uintuasLoqo, bytezd3RIP0, byteeNMsqeW, {from: accounts[3]});
//		const stringiPsOKSi = await BACMARSLPTOKENPoolFA4D54d.name.call({from: accounts[3]});
//		const uint256y1f0BfF = await BACMARSLPTOKENPoolFA4D54d.totalSupply.call({from: accounts[1]});
//		const uint256ODhhsEX = await BACMARSLPTOKENPoolFA4D54d.getRewardForDuration.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolFA4D54d.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolFA4D54d.stakeWithPermit.call(uintck24QdP, uintkUEDmTo, uintuasLoqo, bytezd3RIP0, byteeNMsqeW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address2eu90X = accounts[2]
		const addressrcF0ZO5 = accounts[4]
		const addressq3qe23v = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(address2eu90X, addressrcF0ZO5, addressq3qe23v, {from: accounts[0]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolBerdRZY.nonReentrant.call({from: accounts[1]});
//		const uint256Z1ViUcO = await BACMARSLPTOKENPoolBerdRZY.totalSupply.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressi978cwi = accounts[2]
		const addresstqltTxa = accounts[4]
		const addressgcoGYQx = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressi978cwi, addresstqltTxa, addressgcoGYQx, {from: accounts[0]});
		const uintk7n5JiO = BigInt("86")
//		const uint256WPqzFNX = await BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintk7n5JiO, {from: accounts[1]});
//		await BACMARSLPTOKENPoolBerdRZY.exit.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolBerdRZY.onlyRewardsDistribution.call({from: accounts[5]});
//		const uint256Z1ViUcO = await BACMARSLPTOKENPoolBerdRZY.totalSupply.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolBerdRZY.withdraw.call(uintk7n5JiO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYhUwR9N = "uOzHUQ6NJ0tqSIn8BpZlBO32UNf"
		const stringA8Wxrha = "lOOG9eAtN3tkzgRwMwW2zGLRAf"
		const uint2Wh6HX = BigInt("116")
		const BACMARSLPTOKENPoolT3EClIo = await BACMARSLPTOKENPool.new(stringYhUwR9N, stringA8Wxrha, uint2Wh6HX, {from: accounts[5]});
		const uintAEx8eiO = BigInt("1244")
		const addressYy4JgFh = accounts[2]
		const uint256hCWte5r = await BACMARSLPTOKENPoolT3EClIo.notifyRewardAmount.call(uintAEx8eiO, {from: accounts[5]});
		await BACMARSLPTOKENPoolT3EClIo.getReward.call({from: accounts[3]});
		await BACMARSLPTOKENPoolT3EClIo.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolT3EClIo.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qsqL2BO = await BACMARSLPTOKENPoolT3EClIo.balanceOf.call(addressYy4JgFh, {from: accounts[1]});
		const uint8Zo81FPx = await BACMARSLPTOKENPoolT3EClIo.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmrtgmB6 = accounts[1]
		const address8Gwaxw = accounts[4]
		const addressaZRFNH = accounts[2]
		const BACMARSLPTOKENPoolFA4D54d = await BACMARSLPTOKENPool.new(addressmrtgmB6, address8Gwaxw, addressaZRFNH, {from: accounts[1]});
		const byteM9yRXxz = "0x16131d03071b12121813051a200a13060b17101c0a0b1410100007040b130d07"
		const bytelJY9C03 = "0x1a12120c0b1610061a11101a131c171a0e130319071711051c0a140d1a071d0a"
		const uint0DFYdd = BigInt("14")
		const uintsDuAMpX = BigInt("488")
		const uintD0ILyM = BigInt("641")
//		const uint256l0M6Ux0 = await BACMARSLPTOKENPoolFA4D54d.stakeWithPermit.call(uintD0ILyM, uintsDuAMpX, uint0DFYdd, bytelJY9C03, byteM9yRXxz, {from: accounts[3]});
//		const stringiPsOKSi = await BACMARSLPTOKENPoolFA4D54d.name.call({from: accounts[3]});
//		const uint256y1f0BfF = await BACMARSLPTOKENPoolFA4D54d.totalSupply.call({from: accounts[1]});
//		const uint256ODhhsEX = await BACMARSLPTOKENPoolFA4D54d.getRewardForDuration.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolFA4D54d.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolFA4D54d.stakeWithPermit.call(uintD0ILyM, uintsDuAMpX, uint0DFYdd, bytelJY9C03, byteM9yRXxz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringO9E6xj = "LgSBwxfxxTvceBbXvHudfQeMEE3qV2iEEKcwTEt"
		const stringIcb1oBi = "M1BqaHpJ9szhUVUQrPmmOgVJuW8TEoEJD3KmU0L1lcbpsbB1fr2oHYnUbaWjsYHWfYC75YvUaDo23kA1"
		const uinttmONvU = BigInt("35")
		const BACMARSLPTOKENPoolWBzQZDO = await BACMARSLPTOKENPool.new(stringO9E6xj, stringIcb1oBi, uinttmONvU, {from: accounts[3]});
		const addressm4gANtS = accounts[5]
		const addressV3mh7ng = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPoolWBzQZDO.exit.call({from: accounts[4]});
		const uint256qhwtdo = await BACMARSLPTOKENPoolWBzQZDO.balanceOf.call(addressm4gANtS, {from: accounts[5]});
		await BACMARSLPTOKENPoolWBzQZDO.exit.call({from: accounts[4]});
		const uint256k9h3M8V = await BACMARSLPTOKENPoolWBzQZDO.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256VdaT6RF = await BACMARSLPTOKENPoolWBzQZDO.earned.call(addressV3mh7ng, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKq50POj = accounts[2]
		const addressZkEwvHu = accounts[4]
		const addressINor7XQ = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressKq50POj, addressZkEwvHu, addressINor7XQ, {from: accounts[0]});
		const uint256kZ7fhll = await BACMARSLPTOKENPoolBerdRZY.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolBerdRZY.nonReentrant.call({from: accounts[1]});
//		const uint256Z1ViUcO = await BACMARSLPTOKENPoolBerdRZY.totalSupply.call({from: accounts[4]});

		assert.equal(uint256kZ7fhll, BigInt("0"))
		await expect(BACMARSLPTOKENPoolBerdRZY.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressisSvuV9 = accounts[1]
		const addressOIRYHR = accounts[4]
		const addressJ3vfuRO = accounts[2]
		const BACMARSLPTOKENPoolFA4D54d = await BACMARSLPTOKENPool.new(addressisSvuV9, addressOIRYHR, addressJ3vfuRO, {from: accounts[1]});
		const uint256y1f0BfF = await BACMARSLPTOKENPoolFA4D54d.totalSupply.call({from: accounts[1]});

		assert.equal(uint256y1f0BfF, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA7E4NbD = "cfFc"
		const stringC3JMlE = "RLTXwjXyeB5AYG8AcdEjEYE6kgynS2eyEsu6oEiduFwvISffU49tm9P"
		const uintIAQJgIy = BigInt("6")
		const BACMARSLPTOKENPoolIMqOBXj = await BACMARSLPTOKENPool.new(stringA7E4NbD, stringC3JMlE, uintIAQJgIy, {from: "0x0000000000000000000000000000000000000001"});
		const uint8MbFMUMx = await BACMARSLPTOKENPoolIMqOBXj.decimals.call({from: accounts[0]});
		const uint256cr0LcFj = await BACMARSLPTOKENPoolIMqOBXj.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmhxBPXC = accounts[2]
		const addressXSwVsI = accounts[4]
		const addresskHduwsj = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressmhxBPXC, addressXSwVsI, addresskHduwsj, {from: accounts[0]});
		const uinto90WVyB = BigInt("479")
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});
//		const uint256VNcbfG8 = await BACMARSLPTOKENPoolBerdRZY.notifyRewardAmount.call(uinto90WVyB, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUwqstLq = "J9fzXP6N1GgNSxm7cEExJ4yrNh8hXqgscqBgQHzYS"
		const stringlIE4B2F = "VZa6XrrDCRMmxzRkuerSunavfpTD8sbcygWPfwOS"
		const uintXj1Ixvq = BigInt("79")
		const BACMARSLPTOKENPoolCIF9xJ4 = await BACMARSLPTOKENPool.new(stringUwqstLq, stringlIE4B2F, uintXj1Ixvq, {from: accounts[1]});
		await BACMARSLPTOKENPoolCIF9xJ4.getReward.call({from: accounts[0]});
		const uint256JKTOyXT = await BACMARSLPTOKENPoolCIF9xJ4.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8pay1KuP = await BACMARSLPTOKENPoolCIF9xJ4.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolCIF9xJ4.exit.call({from: accounts[5]});
		const uint256r49daGy = await BACMARSLPTOKENPoolCIF9xJ4.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresss2FRMR7 = accounts[2]
		const addressAuETNU = accounts[4]
		const addressySnTqk9 = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addresss2FRMR7, addressAuETNU, addressySnTqk9, {from: accounts[0]});
		const uintbu9kPiK = BigInt("1860")
//		const uint256KMB2miY = await BACMARSLPTOKENPoolBerdRZY.stake.call(uintbu9kPiK, {from: accounts[3]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolBerdRZY.stake.call(uintbu9kPiK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJtexgw = accounts[2]
		const addressq4iChti = accounts[4]
		const addressmVY0haB = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addressJtexgw, addressq4iChti, addressmVY0haB, {from: accounts[0]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG3bAM7u = "o1KBJb2pbBVal0L1JAmdwMosLlLTH"
		const stringqauqJxv = "7IvujpibUASkgxSX2JlrjunIMsC7c4qk5MNdlGxhUsOd7gWB"
		const uinth1aeTV = BigInt("52")
		const BACMARSLPTOKENPoolrGa8Vlg = await BACMARSLPTOKENPool.new(stringG3bAM7u, stringqauqJxv, uinth1aeTV, {from: accounts[1]});
		const addressXVGexbI = accounts[0]
		const uint256REvS8ug = await BACMARSLPTOKENPoolrGa8Vlg.getRewardForDuration.call({from: accounts[0]});
		const uint256hJWw21t = await BACMARSLPTOKENPoolrGa8Vlg.earned.call(addressXVGexbI, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssiywQVx = accounts[2]
		const addressvAhW30c = accounts[4]
		const addressIlfNjD = accounts[2]
		const BACMARSLPTOKENPoolBerdRZY = await BACMARSLPTOKENPool.new(addresssiywQVx, addressvAhW30c, addressIlfNjD, {from: accounts[0]});
		const uintnAlFdoX = BigInt("1880")
		const addressOXimXLZ = accounts[0]
//		const uint256KMB2miY = await BACMARSLPTOKENPoolBerdRZY.stake.call(uintnAlFdoX, {from: accounts[3]});
//		const uint256Svzj0nJ = await BACMARSLPTOKENPoolBerdRZY.balanceOf.call(addressOXimXLZ, {from: accounts[4]});
//		await BACMARSLPTOKENPoolBerdRZY.nonReentrant.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolBerdRZY.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolBerdRZY.stake.call(uintnAlFdoX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBmVr3K5 = "roWuKwIjqERAGi"
		const stringxAKxLM5 = "j9VRTmNCM9ceDnPyqmqCdLENPKFu3TOvtYDqOGVdmnALdIUeEfh8QL5vOapULD7wOEjQuJ"
		const uintlGeuY58 = BigInt("134")
		const BACMARSLPTOKENPoolBf5utCd = await BACMARSLPTOKENPool.new(stringBmVr3K5, stringxAKxLM5, uintlGeuY58, {from: "0x0000000000000000000000000000000000000001"});
		const addressF5rW7Kf = accounts[0]
		await BACMARSLPTOKENPoolBf5utCd.nonReentrant.call({from: accounts[0]});
		const uint256soEN3gD = await BACMARSLPTOKENPoolBf5utCd.totalSupply.call({from: accounts[1]});
		const uint256acxovu = await BACMARSLPTOKENPoolBf5utCd.balanceOf.call(addressF5rW7Kf, {from: "0x0000000000000000000000000000000000000001"});
		const stringDmoS2nF = await BACMARSLPTOKENPoolBf5utCd.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyvMcPcX = "iN"
		const stringFZmGFoA = "AurxXorEUh5qh81dPDrbv6fInjiimZdf6xMOlXkfktIj1wzXyc7yNuc33SR2JZubCc2YpIlNHXqtfYwivbMzd"
		const uintPlCEDbQ = BigInt("255")
		const BACMARSLPTOKENPool0bwknF = await BACMARSLPTOKENPool.new(stringyvMcPcX, stringFZmGFoA, uintPlCEDbQ, {from: accounts[4]});
		const addressaiYqXU7 = accounts[2]
		const uint256YZjpEou = await BACMARSLPTOKENPool0bwknF.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256JuU9am5 = await BACMARSLPTOKENPool0bwknF.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPool0bwknF.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPool0bwknF.exit.call({from: accounts[1]});
		const uint256Bnla22F = await BACMARSLPTOKENPool0bwknF.earned.call(addressaiYqXU7, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfqVwhSU = "RCDEcUPBKVPC4aqb4z9pd5ziNv"
		const stringPM1FyAd = "NCISgfWpY9XFdz3e2RliuZQpwdYeHPaTh1rvrgRjsVpPgb7M5RvDbpLU4y5Ganm3GwMqBzlzP9UVu4xU3sOeCSJ"
		const uintcw3XnBb = BigInt("28")
		const BACMARSLPTOKENPoolYYqW8gT = await BACMARSLPTOKENPool.new(stringfqVwhSU, stringPM1FyAd, uintcw3XnBb, {from: accounts[0]});
		const uint256qUnP2MU = await BACMARSLPTOKENPoolYYqW8gT.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256vPoGUK = await BACMARSLPTOKENPoolYYqW8gT.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolYYqW8gT.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvIPylVA = "e1N5seQv7FqACYexw9WwrThyv3lP5cBwUiiMlUonC2XMq0LtBKStWrtQeGDh2bk9m1QracKYgwlkVS"
		const stringv0UoSaE = "jckIb9Bo5XdffmiY3kDoddXrEVJbfWaRZKVppphzXlcPTD49VK2gdCJPdUIJpnc9OVg"
		const uintnoUyJqG = BigInt("141")
		const BACMARSLPTOKENPoolDa18gqU = await BACMARSLPTOKENPool.new(stringvIPylVA, stringv0UoSaE, uintnoUyJqG, {from: "0x0000000000000000000000000000000000000001"});
		const addressWsjzVbD = accounts[1]
		const uint8kHwiRTJ = await BACMARSLPTOKENPoolDa18gqU.decimals.call({from: accounts[2]});
		const uint256JZc4czo = await BACMARSLPTOKENPoolDa18gqU.earned.call(addressWsjzVbD, {from: accounts[0]});
		const uint256Fhtb8gT = await BACMARSLPTOKENPoolDa18gqU.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const stringnQIrGEx = await BACMARSLPTOKENPoolDa18gqU.symbol.call({from: accounts[1]});
		const uint256IYpIZME = await BACMARSLPTOKENPoolDa18gqU.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolDa18gqU.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKlWczGF = "Nc98czclVuCXPJLgBcutw94dHTljMevjS85vafhXFSwOOq9a"
		const stringHsvuE7 = "xOPbTbcpAQX3gTk"
		const uintwUklKFB = BigInt("105")
		const BACMARSLPTOKENPoolUu0KBbI = await BACMARSLPTOKENPool.new(stringKlWczGF, stringHsvuE7, uintwUklKFB, {from: accounts[0]});
		const uintkOR0WXo = BigInt("75")
		const addressbTZupk1 = accounts[1]
		const uint256GYHCEIC = await BACMARSLPTOKENPoolUu0KBbI.withdraw.call(uintkOR0WXo, {from: accounts[0]});
		await BACMARSLPTOKENPoolUu0KBbI.exit.call({from: accounts[4]});
		const uint256YSaFaqS = await BACMARSLPTOKENPoolUu0KBbI.balanceOf.call(addressbTZupk1, {from: accounts[3]});
		await BACMARSLPTOKENPoolUu0KBbI.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256kHTa4DJ = await BACMARSLPTOKENPoolUu0KBbI.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringW28T23 = "4r2DXaakyfEhIUUpSWs0f9POZUzMFHinYMA5Ft3ZP6Kup6h9UrInKMBTpwTxHHcBsUkHeLB3lKJd2nTm5d4"
		const stringw7Ag1Da = "31zCzxa6LEJcUkvvFEe4EOzGT6oLPzCXye"
		const uintAcjACH4 = BigInt("22")
		const BACMARSLPTOKENPoolCr1EPRo = await BACMARSLPTOKENPool.new(stringW28T23, stringw7Ag1Da, uintAcjACH4, {from: accounts[2]});
		const uintfcPI70I = BigInt("1539")
		const byteTdke5uM = "0x16140b011b1a1e021a1f141d181f12190f020405081805040217201314180117"
		const bytenrXXIyg = "0x1717020f001710140a1e05041319090515031f1d181d111b0b160519001b1d05"
		const uintp2wrwYY = BigInt("209")
		const uintKKNoBB = BigInt("1369")
		const uintFsGVveh = BigInt("1968")
		const uint256uD1kowG = await BACMARSLPTOKENPoolCr1EPRo.notifyRewardAmount.call(uintfcPI70I, {from: accounts[1]});
		await BACMARSLPTOKENPoolCr1EPRo.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256ST00y0M = await BACMARSLPTOKENPoolCr1EPRo.stakeWithPermit.call(uintFsGVveh, uintKKNoBB, uintp2wrwYY, bytenrXXIyg, byteTdke5uM, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringW1aAB0d = "TRQVh6VPYEJzrFPFCNj1cCNrT3vmXNPHFjiC83n"
		const stringA2XdSRc = "AEmdQv4VeFmzPsz3hfAS3TpZaVR"
		const uintuV5xvvM = BigInt("78")
		const BACMARSLPTOKENPoolAXf71ML = await BACMARSLPTOKENPool.new(stringW1aAB0d, stringA2XdSRc, uintuV5xvvM, {from: accounts[0]});
		const addressU9lY3Ge = accounts[4]
		const uint256CAnbtrg = await BACMARSLPTOKENPoolAXf71ML.getRewardForDuration.call({from: accounts[2]});
		const uint256U8OFb6u = await BACMARSLPTOKENPoolAXf71ML.earned.call(addressU9lY3Ge, {from: accounts[0]});
		const uint256gid3Kud = await BACMARSLPTOKENPoolAXf71ML.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolAXf71ML.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKMGWuy8 = "mgU7IThpbWQMTuU2ShUOe1e5Q"
		const stringBbzzbG = "gJmuGc16bttlAZT4LdlrGe6srpW5dGXkKQaXgtbevgEUp7OH8t4UXsJt2fQTLC1ukmt0NpkcvWyuVma"
		const uintB3lEnYG = BigInt("50")
		const BACMARSLPTOKENPoolCC4BEH = await BACMARSLPTOKENPool.new(stringKMGWuy8, stringBbzzbG, uintB3lEnYG, {from: accounts[1]});
		const uintUbDV7L6 = BigInt("1211")
		const uintQeUNN6q = BigInt("1451")
		const uint256jv4DkgH = await BACMARSLPTOKENPoolCC4BEH.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolCC4BEH.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const stringdGVHN36 = await BACMARSLPTOKENPoolCC4BEH.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256tRcCdB = await BACMARSLPTOKENPoolCC4BEH.getRewardForDuration.call({from: accounts[2]});
		const uint256z81GvEl = await BACMARSLPTOKENPoolCC4BEH.withdraw.call(uintUbDV7L6, {from: accounts[0]});
		const uint256TOr0kXP = await BACMARSLPTOKENPoolCC4BEH.stake.call(uintQeUNN6q, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringujEo3pM = "zu5N5uKHzevXcN4nmPXWOlPCOWrOXWWmF5vQIClivMuZnDmWrMYs6Oshunycen461Vw"
		const stringjY0ifsY = "BmKgvodBTm8pUjxTKB9SNyCNo2b8z"
		const uintlQf71Bi = BigInt("189")
		const BACMARSLPTOKENPoolScDgvo = await BACMARSLPTOKENPool.new(stringujEo3pM, stringjY0ifsY, uintlQf71Bi, {from: accounts[4]});
		const addressEFHAhiW = accounts[4]
		const uint256DfZA33f = await BACMARSLPTOKENPoolScDgvo.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringHfpwF44 = await BACMARSLPTOKENPoolScDgvo.name.call({from: accounts[3]});
		const uint256Al9zDyJ = await BACMARSLPTOKENPoolScDgvo.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolScDgvo.nonReentrant.call({from: accounts[1]});
		const uint256XfqEOeg = await BACMARSLPTOKENPoolScDgvo.balanceOf.call(addressEFHAhiW, {from: accounts[2]});
		const uint256IPmqesj = await BACMARSLPTOKENPoolScDgvo.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTtiyzbT = "mFvYBefcODAWmfCvuyJjbRwqAeN1SY5gcJV2X"
		const stringRoaCNP = "1AGramomOQV9hL3jlLGpdcxN9vAqSDJbJLkZT8Ci7P8ukmVDk5DLoKFC4Lvih"
		const uintBHhFuF4 = BigInt("146")
		const BACMARSLPTOKENPoolQiAl5Um = await BACMARSLPTOKENPool.new(stringTtiyzbT, stringRoaCNP, uintBHhFuF4, {from: accounts[5]});
		const uinterLlU5s = BigInt("1257")
		const uint256VXAmFw = await BACMARSLPTOKENPoolQiAl5Um.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolQiAl5Um.getReward.call({from: accounts[3]});
		const uint256AEszpsH = await BACMARSLPTOKENPoolQiAl5Um.stake.call(uinterLlU5s, {from: accounts[2]});
		await BACMARSLPTOKENPoolQiAl5Um.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjHJxaQx = "T6bVtZVa"
		const stringLUseVpn = "iCr1QgLyOFmQrpQOdccsD7D"
		const uintVqDJRI = BigInt("253")
		const BACMARSLPTOKENPool8F35u2 = await BACMARSLPTOKENPool.new(stringjHJxaQx, stringLUseVpn, uintVqDJRI, {from: accounts[3]});
		const addressd22U4gj = accounts[0]
		const uintTgm0P06 = BigInt("1585")
		const bytefHfibO = "0x08190f08091b071a1c031a13040306091d020d05051616091315041802200814"
		const byteqE3RU8T = "0x1e11190c0212061e140f1b0a141e1e1c091f01121a1517130602010f0c11081b"
		const uinty48S1fA = BigInt("168")
		const uintp7JB6bV = BigInt("289")
		const uintNcgk9DY = BigInt("1242")
		const uint256C4ubsQ7 = await BACMARSLPTOKENPool8F35u2.earned.call(addressd22U4gj, {from: accounts[1]});
		await BACMARSLPTOKENPool8F35u2.exit.call({from: accounts[4]});
		const uint256R6qTani = await BACMARSLPTOKENPool8F35u2.stake.call(uintTgm0P06, {from: accounts[0]});
		const uint256FSd7Dk = await BACMARSLPTOKENPool8F35u2.stakeWithPermit.call(uintNcgk9DY, uintp7JB6bV, uinty48S1fA, byteqE3RU8T, bytefHfibO, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlw3V1uF = "L1i2z24yKJmeTSCRio9eilw4cIlAQZjwumVEDT7J4tXK6khjVnmymxuLIvKGEJdwlsteW2YHTYtjnDrO0ujjGoAv"
		const stringZ48T5H = "p1NVgTRxIs7QB022xWtPn1JEUjoRgo2hgtK4pN6vPJTwaXzfFGpxTtvo815J2RiSFM8zHUuXao9x1FofhzweyQ"
		const uintlweFzHP = BigInt("78")
		const BACMARSLPTOKENPoolpZheJWl = await BACMARSLPTOKENPool.new(stringlw3V1uF, stringZ48T5H, uintlweFzHP, {from: "0x0000000000000000000000000000000000000001"});
		const uintxGW05QQ = BigInt("1370")
		const uintYDgEIc = BigInt("1469")
		await BACMARSLPTOKENPoolpZheJWl.nonReentrant.call({from: accounts[1]});
		const uint256m3O71Fq = await BACMARSLPTOKENPoolpZheJWl.withdraw.call(uintxGW05QQ, {from: accounts[5]});
		const uint256E8Hqg9t = await BACMARSLPTOKENPoolpZheJWl.withdraw.call(uintYDgEIc, {from: accounts[1]});
		await BACMARSLPTOKENPoolpZheJWl.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlcR7xuw = "E4XgFqFYdCEKanhC4KuMlKkD3oQHw06lnI9T84fOJ2NRXA9TPXGhVKpdOFicefQR1A"
		const stringEzUMqD8 = "QMxAiKVokW2er2ypmupcz"
		const uintz83177L = BigInt("107")
		const BACMARSLPTOKENPooliBchUDC = await BACMARSLPTOKENPool.new(stringlcR7xuw, stringEzUMqD8, uintz83177L, {from: accounts[0]});
		const addressSYeHkWF = accounts[4]
		await BACMARSLPTOKENPooliBchUDC.exit.call({from: accounts[4]});
		const uint256h8h3v3o = await BACMARSLPTOKENPooliBchUDC.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mx1HAp4 = await BACMARSLPTOKENPooliBchUDC.rewardPerToken.call({from: accounts[1]});
		const uint256kGXdX7X = await BACMARSLPTOKENPooliBchUDC.balanceOf.call(addressSYeHkWF, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBHRIlXG = "V9R4O274xkSXOuN6nT77iHgtvCOQDuPhyWWiwQrk3bPFomlplEiyMsSJvqX1y7r9"
		const stringPrkn6MO = "HawvvKihvC8AJvKrtMSKo5VGKRHbAwNelFIivXPk6w5rmHBmhPnxPmzeGvTfyUsj35ZwWbVdDkO5WckMj5qct94FYZNjHcRTwM"
		const uintsjqrGgq = BigInt("1")
		const BACMARSLPTOKENPoolM6fWbg3 = await BACMARSLPTOKENPool.new(stringBHRIlXG, stringPrkn6MO, uintsjqrGgq, {from: accounts[0]});
		const addressQt8H8Uj = accounts[3]
		const uint256FwzSaQR = await BACMARSLPTOKENPoolM6fWbg3.rewardPerToken.call({from: accounts[0]});
		const uint256T8r5bIA = await BACMARSLPTOKENPoolM6fWbg3.balanceOf.call(addressQt8H8Uj, {from: accounts[4]});
		const uint256cNQH7Q8 = await BACMARSLPTOKENPoolM6fWbg3.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256nHI7TXS = await BACMARSLPTOKENPoolM6fWbg3.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8hZZRMgR = await BACMARSLPTOKENPoolM6fWbg3.decimals.call({from: accounts[0]});
		const uint256ld6b3rJ = await BACMARSLPTOKENPoolM6fWbg3.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIldDXBA = "TAhq5qrFkyoPXm9CL9NzVytDvEfcX5Tp7NTi7PTEll5rw6fjC8"
		const stringG1eaX8O = "HRdDL4naL0OdQqwgB51t48xNtv7LlmKgITpqPEN1RvnSoV9hF9SUeKTmu9oThNrSxBVZ47T4VDGcacDmR61uk1ttU"
		const uintwX2Epj = BigInt("141")
		const BACMARSLPTOKENPoolKSLM9Vh = await BACMARSLPTOKENPool.new(stringIldDXBA, stringG1eaX8O, uintwX2Epj, {from: accounts[1]});
		const uintox1wNSe = BigInt("3")
		const addressKwmXYUq = accounts[4]
		const byteDB4yd8F = "0x18190e01151a0c1e1503050e1711041318050d20161e050d13050b140b131d05"
		const bytekNUn3Dz = "0x170f100806120b0200070b0b151d18111e16081b190f06120b1e0c0207101f18"
		const uintUZvncHI = BigInt("206")
		const uintPPVigP9 = BigInt("356")
		const uintglp8PLy = BigInt("1454")
		const byteFJcUxPS = "0x0f0e1f0a03101e12111011140f0e00140001040c071e18201508011f1b09020e"
		const byteGlM9VXg = "0x18140e010e1a01041e1d181b041812091409101e060f11040307110f0e170e18"
		const uintoRHrGDm = BigInt("30")
		const uintItAy8b = BigInt("193")
		const uintJqHTX1e = BigInt("1890")
		const uint256PIvrToo = await BACMARSLPTOKENPoolKSLM9Vh.rewardPerToken.call({from: accounts[3]});
		const uint256m2Jx4ra = await BACMARSLPTOKENPoolKSLM9Vh.withdraw.call(uintox1wNSe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kD7LX2Y = await BACMARSLPTOKENPoolKSLM9Vh.balanceOf.call(addressKwmXYUq, {from: accounts[1]});
		const uint256lYqxZk4 = await BACMARSLPTOKENPoolKSLM9Vh.stakeWithPermit.call(uintglp8PLy, uintPPVigP9, uintUZvncHI, bytekNUn3Dz, byteDB4yd8F, {from: accounts[2]});
		const uint256nG2QnhI = await BACMARSLPTOKENPoolKSLM9Vh.stakeWithPermit.call(uintJqHTX1e, uintItAy8b, uintoRHrGDm, byteGlM9VXg, byteFJcUxPS, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMzCwXAH = "VfhR9xPMLS6G3Hl3DWvIwP4T76toYQMqDfOCihIG12sUkUFdhRYWojtEAc0OETZsp6xvXRRXaKT5stNsoCeFV"
		const stringPgcHljF = "wAQ45u3NMXE7lFKnpPd9w6ejNdh41o"
		const uintw9FVRM0 = BigInt("19")
		const BACMARSLPTOKENPoolTMnYGn = await BACMARSLPTOKENPool.new(stringMzCwXAH, stringPgcHljF, uintw9FVRM0, {from: accounts[3]});
		const addresseqfMCrl = accounts[4]
		const uintErjVR2F = BigInt("805")
		const uint256CExKcXG = await BACMARSLPTOKENPoolTMnYGn.balanceOf.call(addresseqfMCrl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HtTrW2t = await BACMARSLPTOKENPoolTMnYGn.withdraw.call(uintErjVR2F, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc7o7h1m = "kOnYzSHNieT8wQ"
		const stringi8bPGOC = "QqUjK53lv6ankwhiP2CO3xRj6HVB6x7dNrKeSQDOglTXxND3NJvt0hlfZSa0YNDxCY8n"
		const uintH525i4T = BigInt("59")
		const BACMARSLPTOKENPoolvtYh1P6 = await BACMARSLPTOKENPool.new(stringc7o7h1m, stringi8bPGOC, uintH525i4T, {from: "0x0000000000000000000000000000000000000001"});
		const uintFGHrM6i = BigInt("986")
		const byteqYNNrTh = "0x2019080f04171a13070d010f021e1b14171a171f010c04151108131506030303"
		const bytetA2Lr4 = "0x16180e161a1e1c17180e0c0a151b1f090b15010b130f060b161804031f1a0b1a"
		const uintY0wZ65p = BigInt("124")
		const uintP0fZYfX = BigInt("1004")
		const uintz0G12io = BigInt("311")
		const uint256VLrPG5F = await BACMARSLPTOKENPoolvtYh1P6.stake.call(uintFGHrM6i, {from: accounts[4]});
		await BACMARSLPTOKENPoolvtYh1P6.nonReentrant.call({from: accounts[5]});
		const uint256GfDbKeh = await BACMARSLPTOKENPoolvtYh1P6.stakeWithPermit.call(uintz0G12io, uintP0fZYfX, uintY0wZ65p, bytetA2Lr4, byteqYNNrTh, {from: accounts[4]});
		await BACMARSLPTOKENPoolvtYh1P6.exit.call({from: accounts[1]});
		const uint256VimA8ma = await BACMARSLPTOKENPoolvtYh1P6.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwZvhLC = "g7OkXmKlMUvBMMTjH225SupN89HnaiVDo5ZCHH9shRGCZUh9OFG80zHyFTGyYw3W95J2Zb63nMoyrB50MltTjsaOF4ldMQG5"
		const stringeXGxz4M = "3jPK0LJt8p8N7TwkdtVCNU17Gcz"
		const uintpNPCyKg = BigInt("104")
		const BACMARSLPTOKENPoolyHX7dar = await BACMARSLPTOKENPool.new(stringwZvhLC, stringeXGxz4M, uintpNPCyKg, {from: accounts[4]});
		const byteaAZecFl = "0x05051002020e081e14201b1514160911020a191708071b150c160d0909111f1a"
		const byter5QAKt1 = "0x071505151e0a1a170f1902001816190607071b0511171a121e1f1e1d09160110"
		const uinttibLu2F = BigInt("33")
		const uints8TFPP2 = BigInt("1097")
		const uintaWLskM6 = BigInt("1073")
		const addressqBNvKr4 = accounts[1]
		await BACMARSLPTOKENPoolyHX7dar.nonReentrant.call({from: accounts[5]});
		const uint256Fo9GAe0 = await BACMARSLPTOKENPoolyHX7dar.stakeWithPermit.call(uintaWLskM6, uints8TFPP2, uinttibLu2F, byter5QAKt1, byteaAZecFl, {from: accounts[0]});
		await BACMARSLPTOKENPoolyHX7dar.exit.call({from: accounts[5]});
		const uint256RjRyhQ = await BACMARSLPTOKENPoolyHX7dar.earned.call(addressqBNvKr4, {from: accounts[2]});
		await BACMARSLPTOKENPoolyHX7dar.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTSIVqKL = "Nq0VYCWm1jqCE7zRvXtm7WWH2LPx7c7KEvWIO2cg2j4PjibAE4phLFNoIUNfin15IgO7m"
		const stringbbU6WQO = "Q2xqJpWsyYQvcDofSgCgM7LAevGOKfDBBHVhxHz4OSy9X5clcM1OYVrq6c3N7KI11jB52muwOMWQ7LuGbKGmY2pSeJ9NdqLobZ"
		const uintdTzWiXg = BigInt("46")
		const BACMARSLPTOKENPoolIkwOuR0 = await BACMARSLPTOKENPool.new(stringTSIVqKL, stringbbU6WQO, uintdTzWiXg, {from: accounts[4]});
		const uintuX9LWnr = BigInt("697")
		const address7sObEO = "0x0000000000000000000000000000000000000001"
		const uint256UphDxCM = await BACMARSLPTOKENPoolIkwOuR0.totalSupply.call({from: accounts[3]});
		const uint256mwZ3H4O = await BACMARSLPTOKENPoolIkwOuR0.notifyRewardAmount.call(uintuX9LWnr, {from: accounts[1]});
		await BACMARSLPTOKENPoolIkwOuR0.exit.call({from: accounts[1]});
		const uint256CmoUxHM = await BACMARSLPTOKENPoolIkwOuR0.totalSupply.call({from: accounts[5]});
		const uint256pA1YnCk = await BACMARSLPTOKENPoolIkwOuR0.balanceOf.call(address7sObEO, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringANSdkRT = "MnA9VLcuSaUiN367o2bAaNaX1Efal6PhSQpj2Cv"
		const stringDXIKa8 = "3s7"
		const uintC5m2SbA = BigInt("31")
		const BACMARSLPTOKENPoolkXBrw17 = await BACMARSLPTOKENPool.new(stringANSdkRT, stringDXIKa8, uintC5m2SbA, {from: accounts[3]});
		const bytex5epJn = "0x1b0f191c102017160e1b11110b020c0e03120f1c1b13021a1e18151d1a05041d"
		const byte39TQjk = "0x150618201b05030b150b0b0903201c1e171d1a0503161b150d051b1d07131206"
		const uintxMNZDvf = BigInt("104")
		const uintpBUZn61 = BigInt("458")
		const uintJeWmmN = BigInt("1651")
		const uint256Hdc2OC = await BACMARSLPTOKENPoolkXBrw17.stakeWithPermit.call(uintJeWmmN, uintpBUZn61, uintxMNZDvf, byte39TQjk, bytex5epJn, {from: accounts[5]});
		const uint256Bh5iqzj = await BACMARSLPTOKENPoolkXBrw17.getRewardForDuration.call({from: accounts[4]});
		const uint256FqG8jEH = await BACMARSLPTOKENPoolkXBrw17.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolkXBrw17.exit.call({from: accounts[0]});
		const stringL8LRgfX = await BACMARSLPTOKENPoolkXBrw17.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQsdFjet = "1FI0kYJ2i6o5NkF8R8JlVYoupJoOkXEeUndBbiP"
		const stringNegTQCs = "1ul5jMw1lttpt2tydaq8LRjyz7OXNGHrpegr7YpfJKntx4oLnbJwh5zSLPzVuwrViGQ2j"
		const uintzYSWs77 = BigInt("89")
		const BACMARSLPTOKENPoolWDb3IS7 = await BACMARSLPTOKENPool.new(stringQsdFjet, stringNegTQCs, uintzYSWs77, {from: accounts[0]});
		const uintdzwECpW = BigInt("428")
		const uintcJrsLoK = BigInt("743")
		const uint256z4gfqaT = await BACMARSLPTOKENPoolWDb3IS7.withdraw.call(uintdzwECpW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ORNu99n = await BACMARSLPTOKENPoolWDb3IS7.withdraw.call(uintcJrsLoK, {from: accounts[3]});
		await BACMARSLPTOKENPoolWDb3IS7.exit.call({from: accounts[2]});
		const uint256RWBTWtP = await BACMARSLPTOKENPoolWDb3IS7.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolWDb3IS7.nonReentrant.call({from: accounts[1]});
		const stringtl2oaqu = await BACMARSLPTOKENPoolWDb3IS7.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNhwqzjk = "fKndv8VgxSeJWaHkhFag"
		const stringTb6lQSG = "j84w"
		const uinttZjlb33 = BigInt("70")
		const BACMARSLPTOKENPoolbeb1cTD = await BACMARSLPTOKENPool.new(stringNhwqzjk, stringTb6lQSG, uinttZjlb33, {from: accounts[4]});
		const uintiNU7Tp = BigInt("757")
		const addressSv8gK0A = accounts[5]
		const uint256ekmVoAk = await BACMARSLPTOKENPoolbeb1cTD.withdraw.call(uintiNU7Tp, {from: accounts[4]});
		await BACMARSLPTOKENPoolbeb1cTD.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256zQ6ZSq = await BACMARSLPTOKENPoolbeb1cTD.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressR4j7QH6 = await BACMARSLPTOKENPoolbeb1cTD.updateReward.call(addressSv8gK0A, {from: accounts[0]});
		await BACMARSLPTOKENPoolbeb1cTD.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqS1JFAA = "SHBqdo"
		const stringDTxXbf = "0TqQabhqQlRWAF0FRbcDDfe2QoKrzTY7nop"
		const uintHctAL1x = BigInt("4")
		const BACMARSLPTOKENPoolfxV5JPN = await BACMARSLPTOKENPool.new(stringqS1JFAA, stringDTxXbf, uintHctAL1x, {from: accounts[4]});
		const uintI0gDQ55 = BigInt("1598")
		const addressDDwG2fB = accounts[3]
		const byteaG2UxOH = "0x04121f14151611020c0a05170818051702180f041803050a071e0c0c0d1d191c"
		const byteitGISYm = "0x011404150518071b1b031c1c100c0e00060f190b000507140816120a1d040a15"
		const uintfyWbNze = BigInt("140")
		const uintFiT0PKE = BigInt("1503")
		const uintBvUNzMW = BigInt("1034")
		const addressQkaW9Kl = accounts[4]
		const uint256BFgEuU1 = await BACMARSLPTOKENPoolfxV5JPN.notifyRewardAmount.call(uintI0gDQ55, {from: accounts[4]});
		await BACMARSLPTOKENPoolfxV5JPN.nonReentrant.call({from: accounts[3]});
		const uint256MWy3ZaW = await BACMARSLPTOKENPoolfxV5JPN.balanceOf.call(addressDDwG2fB, {from: accounts[2]});
		const uint256t3SOtsx = await BACMARSLPTOKENPoolfxV5JPN.stakeWithPermit.call(uintBvUNzMW, uintFiT0PKE, uintfyWbNze, byteitGISYm, byteaG2UxOH, {from: accounts[0]});
		const addressfq2U81n = await BACMARSLPTOKENPoolfxV5JPN.updateReward.call(addressQkaW9Kl, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsWiQNyA = "xD1UftAuuYRzhfWYQFWvrYOnhpde5OfIKcptCPOS6XV6k4NYufLzXIaj9"
		const stringBAl69l = "Gdjmyhjh5lGXk46m4XwYxyoCwxcAnEyESuA3UCGO3VqFvEcAKBuOyvjzQaYsU3jYPoU11VnEVsltXtp6F5auvqAuhp602p4sL"
		const uintnHeZqW = BigInt("76")
		const BACMARSLPTOKENPoolgzQSYTc = await BACMARSLPTOKENPool.new(stringsWiQNyA, stringBAl69l, uintnHeZqW, {from: accounts[4]});
		const uintH4hWjdG = BigInt("2036")
		const uint256iOmDsZ1 = await BACMARSLPTOKENPoolgzQSYTc.stake.call(uintH4hWjdG, {from: accounts[1]});
		await BACMARSLPTOKENPoolgzQSYTc.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256cB6xi0f = await BACMARSLPTOKENPoolgzQSYTc.getRewardForDuration.call({from: accounts[0]});
		const uint256uo4yREi = await BACMARSLPTOKENPoolgzQSYTc.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqfzStgB = "cskoYI54Lay6CkgG4NATKAi3HlTwMt9Sj8PIGERXwbM98L4RKyJn2cU5KTdu1VvFfBSkhnlCGEzEd2XW9GhCPYde1pkDorH"
		const stringJWnkAzm = "gvsNq1TKVsVPycKKLCpOJ31ogdSL1xYDH3KhlC7Oq7rX7JchR1oU"
		const uintzfut0t = BigInt("190")
		const BACMARSLPTOKENPoolQo5Asg8 = await BACMARSLPTOKENPool.new(stringqfzStgB, stringJWnkAzm, uintzfut0t, {from: accounts[3]});
		const uintjPy0JA9 = BigInt("599")
		const addresszeqlBbN = accounts[3]
		const uintt6rzIeC = BigInt("1940")
		const uint256DLgcIk3 = await BACMARSLPTOKENPoolQo5Asg8.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolQo5Asg8.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HvH4OgP = await BACMARSLPTOKENPoolQo5Asg8.notifyRewardAmount.call(uintjPy0JA9, {from: accounts[0]});
		const uint256dHarV34 = await BACMARSLPTOKENPoolQo5Asg8.balanceOf.call(addresszeqlBbN, {from: accounts[4]});
		const uint256iRnMEhG = await BACMARSLPTOKENPoolQo5Asg8.stake.call(uintt6rzIeC, {from: accounts[5]});
		await BACMARSLPTOKENPoolQo5Asg8.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlfhd42X = "QI7OagNO8dUYhLABJNHtigp3KSG9wajfESOuDDGjokJ26l9W6Wvh"
		const stringMEAMKKP = "ipiG9pvNYe6BiYIajTiujNS1qCJrNIveULkFbimuNmUPXdk2n3AMR1H82chwwxDKJ97"
		const uintg7XmBn = BigInt("77")
		const BACMARSLPTOKENPoolEMXTH3L = await BACMARSLPTOKENPool.new(stringlfhd42X, stringMEAMKKP, uintg7XmBn, {from: accounts[3]});
		const uintYLOWC9p = BigInt("1236")
		const addressYlgAcjZ = accounts[0]
		const uint256WH0NTgF = await BACMARSLPTOKENPoolEMXTH3L.withdraw.call(uintYLOWC9p, {from: accounts[3]});
		const addressn91uVu1 = await BACMARSLPTOKENPoolEMXTH3L.updateReward.call(addressYlgAcjZ, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscPA6xMW = accounts[1]
		const addressoHlhXg = accounts[4]
		const addressIGg89X1 = accounts[2]
		const BACMARSLPTOKENPoolFA4D54d = await BACMARSLPTOKENPool.new(addresscPA6xMW, addressoHlhXg, addressIGg89X1, {from: accounts[1]});
		const uintHQD9yA8 = BigInt("856")
//		const uint256FmLAs29 = await BACMARSLPTOKENPoolFA4D54d.notifyRewardAmount.call(uintHQD9yA8, {from: accounts[1]});
//		const uint256y1f0BfF = await BACMARSLPTOKENPoolFA4D54d.totalSupply.call({from: accounts[1]});
//		const uint256lHltNlP = await BACMARSLPTOKENPoolFA4D54d.getRewardForDuration.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolFA4D54d.notifyRewardAmount.call(uintHQD9yA8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqPIOzc1 = "A1B2sptaZvA25jaOLEgY5bSG6ImdB1Abbqnnw1kmjdz6XwDMUVGKxa2m"
		const stringX9dGKwQ = "TM2GXkJuNipUF1GhyYiVQymnRs4Nm5plPXgDo2c1QPHP65i8vHIXUSfFPUhEHzHtT8JotSHpxIDYBGJyQRUmkzUISnsARfhh"
		const uintsAFr3gy = BigInt("27")
		const BACMARSLPTOKENPoolv44d27J = await BACMARSLPTOKENPool.new(stringqPIOzc1, stringX9dGKwQ, uintsAFr3gy, {from: accounts[5]});
		const addresstBGho8u = accounts[4]
		const uintkA8prqN = BigInt("893")
		const uint256p9NwSwS = await BACMARSLPTOKENPoolv44d27J.earned.call(addresstBGho8u, {from: accounts[1]});
		const uint256K4QCLT = await BACMARSLPTOKENPoolv44d27J.notifyRewardAmount.call(uintkA8prqN, {from: accounts[0]});
		const uint256xvNkX3B = await BACMARSLPTOKENPoolv44d27J.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolv44d27J.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringl5NXbn9 = ""
		const stringmkXY2Jc = "Pl5ekMmHFTqOJPIc0AWKevhrQ"
		const uintHUkr18z = BigInt("129")
		const BACMARSLPTOKENPoolRBr4BB = await BACMARSLPTOKENPool.new(stringl5NXbn9, stringmkXY2Jc, uintHUkr18z, {from: accounts[1]});
		const uintCa1P6S = BigInt("704")
		const uint256lmUOll1 = await BACMARSLPTOKENPoolRBr4BB.notifyRewardAmount.call(uintCa1P6S, {from: accounts[5]});
		const uint256j0wAEPb = await BACMARSLPTOKENPoolRBr4BB.rewardPerToken.call({from: accounts[1]});
		const uint256qqHJ1WM = await BACMARSLPTOKENPoolRBr4BB.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ek3JYS4 = await BACMARSLPTOKENPoolRBr4BB.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolRBr4BB.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpbYfzEK = "CjfmjyYYpNh3OQOGhim"
		const stringkJJtPql = "eusBu5kpj1UmhlTirBnUpAO9RIXLQwgNHzZfZ7rGnhogw6itc3K59418ifQgwXd7UQmfMEtJ3G"
		const uintDixBzdc = BigInt("75")
		const BACMARSLPTOKENPoolyvOwROb = await BACMARSLPTOKENPool.new(stringpbYfzEK, stringkJJtPql, uintDixBzdc, {from: accounts[1]});
		const addressagSWXCt = accounts[4]
		const uintLBVfML3 = BigInt("285")
		const uint256Qo0FzNv = await BACMARSLPTOKENPoolyvOwROb.earned.call(addressagSWXCt, {from: accounts[1]});
		const uint256qAWu6lx = await BACMARSLPTOKENPoolyvOwROb.totalSupply.call({from: accounts[0]});
		const uint8ezHw2gn = await BACMARSLPTOKENPoolyvOwROb.decimals.call({from: accounts[0]});
		const uint256Bap2EL9 = await BACMARSLPTOKENPoolyvOwROb.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256kitVj5E = await BACMARSLPTOKENPoolyvOwROb.stake.call(uintLBVfML3, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringf5RlBkb = "CVU5BC0GQaUVes2cU3p9RMdvxk7l3K0nU4TazSbAwKpliJEV7bT4OjhktVZpEfylqbYYPQHWiP34nSGLYR3ODo6YAxcdeEy"
		const stringakwIHk = "NKibqoTgqVRO6Dxc4C5qtOyjN4ir2pC"
		const uintJ7hlXr = BigInt("73")
		const BACMARSLPTOKENPoolWxWGSEU = await BACMARSLPTOKENPool.new(stringf5RlBkb, stringakwIHk, uintJ7hlXr, {from: accounts[3]});
		const address7118ao = accounts[2]
		const uint8au1NcUw = await BACMARSLPTOKENPoolWxWGSEU.decimals.call({from: accounts[4]});
		const uint256iSG0p3s = await BACMARSLPTOKENPoolWxWGSEU.earned.call(address7118ao, {from: accounts[3]});
		await BACMARSLPTOKENPoolWxWGSEU.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVubMi1p = "78F6ytWBfqhKowlnFlr7pjRsV0sQD5QxRakp7YJbBfGP5zOaH"
		const stringcywqxL = "4szPXHpC"
		const uintaL26HUu = BigInt("48")
		const BACMARSLPTOKENPoolSeOTmfP = await BACMARSLPTOKENPool.new(stringVubMi1p, stringcywqxL, uintaL26HUu, {from: accounts[0]});
		const uint256hszIaKZ = await BACMARSLPTOKENPoolSeOTmfP.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256UtlaVhK = await BACMARSLPTOKENPoolSeOTmfP.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhcks8A1 = "TBlWocS9zG7yulqIOY7lx4MLHGSVysAWOS3SmqwGsooYMsSR1QKVGhYRI1SzNfN9xy4IawKqvoB4JRNvVO4fVoAk6vNqwv4"
		const stringTrMwKVK = "BNe7mMCa56BBHBy7h0TyAzmx8qYhPznZzYfkKsTkWJoKRnoNutfUg5ab9uAQ"
		const uintwqYcLo = BigInt("53")
		const BACMARSLPTOKENPoolPuKHUWC = await BACMARSLPTOKENPool.new(stringhcks8A1, stringTrMwKVK, uintwqYcLo, {from: accounts[0]});
		const addressB2grK5Q = accounts[5]
		await BACMARSLPTOKENPoolPuKHUWC.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolPuKHUWC.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256MDK3XQd = await BACMARSLPTOKENPoolPuKHUWC.balanceOf.call(addressB2grK5Q, {from: accounts[4]});
		const uint256WkbYm3c = await BACMARSLPTOKENPoolPuKHUWC.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringPl8v2Pu = await BACMARSLPTOKENPoolPuKHUWC.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzRyHKcZ = "zbT86lZbeybNgo5nsqd7AJobwx4x1b7qfnDQfl2JOr8pt1stuzqlrZ2zwey3vck996I8uAYhjDx59Lcqc"
		const stringktuIcRR = "c0lJi1r9YvdXuIJkEGCG39"
		const uintxNN3Fap = BigInt("230")
		const BACMARSLPTOKENPoolSrp9uIx = await BACMARSLPTOKENPool.new(stringzRyHKcZ, stringktuIcRR, uintxNN3Fap, {from: accounts[4]});
		const uintD9P4rIR = BigInt("1782")
		const uintVKlx2OB = BigInt("1541")
		await BACMARSLPTOKENPoolSrp9uIx.nonReentrant.call({from: accounts[1]});
		const uint256UJLimbO = await BACMARSLPTOKENPoolSrp9uIx.rewardPerToken.call({from: accounts[0]});
		const uint256rf4dbr1 = await BACMARSLPTOKENPoolSrp9uIx.notifyRewardAmount.call(uintD9P4rIR, {from: accounts[0]});
		const uint256ZtBu9dE = await BACMARSLPTOKENPoolSrp9uIx.withdraw.call(uintVKlx2OB, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSK8SqF = "jOFJa5QK8gbvBVGXESA2iRS"
		const stringiCNFTs = "2G3MN1s7MlmOdJXKpGKWaPE3D8zL1gjGwQdcc9SzvBkTwtfrqqPyYJNIqnHWNnjxt7NiTHJX"
		const uintllArajz = BigInt("152")
		const BACMARSLPTOKENPoolmcudcl = await BACMARSLPTOKENPool.new(stringSK8SqF, stringiCNFTs, uintllArajz, {from: accounts[5]});
		const uint256IqVVnI = await BACMARSLPTOKENPoolmcudcl.rewardPerToken.call({from: accounts[2]});
		const uint256m8Fs5OZ = await BACMARSLPTOKENPoolmcudcl.getRewardForDuration.call({from: accounts[0]});
		const uint2563JZOWS = await BACMARSLPTOKENPoolmcudcl.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvO1gtue = "Y1SwV5s0VMCpiewIOOTwEsIuIAseXjD4o9pm5CA6Taa2wCBvloMyyFjQolGGqC9KxhGzKQFnQ9HTo"
		const stringuLyuZAy = "w"
		const uintdFjqIbN = BigInt("166")
		const BACMARSLPTOKENPoolq17NOkJ = await BACMARSLPTOKENPool.new(stringvO1gtue, stringuLyuZAy, uintdFjqIbN, {from: accounts[3]});
		const addressEupqBy = accounts[2]
		const uintbQJzdE0 = BigInt("590")
		await BACMARSLPTOKENPoolq17NOkJ.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolq17NOkJ.exit.call({from: accounts[4]});
		const stringy2ZW2bB = await BACMARSLPTOKENPoolq17NOkJ.name.call({from: accounts[0]});
		const uint256T8r4zjg = await BACMARSLPTOKENPoolq17NOkJ.earned.call(addressEupqBy, {from: accounts[4]});
		const uint256UguZRjC = await BACMARSLPTOKENPoolq17NOkJ.stake.call(uintbQJzdE0, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringriXJ8X3 = "d8bWn7yHERfgCXeedAuxoMXGIohQJa0s8lWG19KWLckUFoFDQJtszjAbX21gqMedvfqMC"
		const stringBA9GtyM = "ObKwg1EBIYzCo0iZ3MVY41iKMjfS05JCy8qEBFYO"
		const uintEFz3XEX = BigInt("77")
		const BACMARSLPTOKENPoolQ4KdRah = await BACMARSLPTOKENPool.new(stringriXJ8X3, stringBA9GtyM, uintEFz3XEX, {from: accounts[2]});
		const uintxGsMCU5 = BigInt("1740")
		await BACMARSLPTOKENPoolQ4KdRah.getReward.call({from: accounts[1]});
		const uint256pB73TJE = await BACMARSLPTOKENPoolQ4KdRah.rewardPerToken.call({from: accounts[3]});
		const uint256O5hiEX = await BACMARSLPTOKENPoolQ4KdRah.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256eTRVeDu = await BACMARSLPTOKENPoolQ4KdRah.withdraw.call(uintxGsMCU5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QGQ7CeR = await BACMARSLPTOKENPoolQ4KdRah.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringClnTv0i = "JRNRVz3vJH66YJMnFoDJTp5hCvwfQJcbmxUhEbr9ZqatEODv0mVK1SeO5ffG62w17zwKN78uSFxWi"
		const stringwLXHcb = "Cdwx0HdzSutIXMpNtFQIeQGfCWi5fPuJOB3fpKZvf1ZAwM1dvsZaui20f5fvs9WIObaXWl8qszRpMGnAg8cetU2Bvz6"
		const uinthzr854l = BigInt("61")
		const BACMARSLPTOKENPoolaObMBpZ = await BACMARSLPTOKENPool.new(stringClnTv0i, stringwLXHcb, uinthzr854l, {from: accounts[4]});
		const byteAtjXtnY = "0x090b0e111b07151b0d1018121e2003121e0c060b0e090b1a1e1115150f080f18"
		const bytefuazTmH = "0x05130d030c01101a0f1f171a1d11130e0f061d19010d081e0d11021e14031c1c"
		const uintjwtFJZS = BigInt("8")
		const uintyllZ4nj = BigInt("564")
		const uintwwiiEMA = BigInt("1287")
		const stringG7zm9m1 = await BACMARSLPTOKENPoolaObMBpZ.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolaObMBpZ.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256zm53mmK = await BACMARSLPTOKENPoolaObMBpZ.stakeWithPermit.call(uintwwiiEMA, uintyllZ4nj, uintjwtFJZS, bytefuazTmH, byteAtjXtnY, {from: accounts[0]});
		const uint256TlCbKB4 = await BACMARSLPTOKENPoolaObMBpZ.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKDr4Aop = "eKB5gquuLkLMBEit5jHNg59os7sFYei4lbpaELzT3"
		const stringtNuIzbU = "ZJM5z5yT5QdjMCpQKzTLAeEwS"
		const uintvpQkERi = BigInt("55")
		const BACMARSLPTOKENPoolc1Obv0t = await BACMARSLPTOKENPool.new(stringKDr4Aop, stringtNuIzbU, uintvpQkERi, {from: accounts[1]});
		const addressC2RHyYj = accounts[3]
		const uint256xXLj0d = await BACMARSLPTOKENPoolc1Obv0t.balanceOf.call(addressC2RHyYj, {from: accounts[1]});
		const uint256rKOmTpK = await BACMARSLPTOKENPoolc1Obv0t.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolc1Obv0t.getReward.call({from: accounts[2]});
		const uint256gYLBfsX = await BACMARSLPTOKENPoolc1Obv0t.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvG7VqXY = "cHuTk5Lk7sJnHTgdLJR9d"
		const stringpDMa8OK = "Jn9yBYGb9wXz7s08d3rcJyNjTlfjdtbukGPALGSqXrapve8dXFTbcG8X8XDfxRQc90m8FvyMfrAfiLmixmYUcg9I4cRz"
		const uintYe5kK03 = BigInt("90")
		const BACMARSLPTOKENPoolYtN5DE = await BACMARSLPTOKENPool.new(stringvG7VqXY, stringpDMa8OK, uintYe5kK03, {from: "0x0000000000000000000000000000000000000001"});
		const uintP7h9bYr = BigInt("649")
		const byteFnzKK3 = "0x180c0c150a1e090a16101c0c09010b1717040d0713090b1c180104110e16121c"
		const byteOXfPrn = "0x1413040f1f0407161a011311031d120f0d1c162015120b09140f161120030f0f"
		const uintasDMPF = BigInt("121")
		const uintydAVB7I = BigInt("1991")
		const uintmYmTxgI = BigInt("691")
		const uint2560Bv6nx = await BACMARSLPTOKENPoolYtN5DE.totalSupply.call({from: accounts[0]});
		const uint256z5QlLD = await BACMARSLPTOKENPoolYtN5DE.notifyRewardAmount.call(uintP7h9bYr, {from: accounts[3]});
		const uint256J4LKfpn = await BACMARSLPTOKENPoolYtN5DE.stakeWithPermit.call(uintmYmTxgI, uintydAVB7I, uintasDMPF, byteOXfPrn, byteFnzKK3, {from: accounts[2]});
		const uint256aRjS27s = await BACMARSLPTOKENPoolYtN5DE.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxpCWaW = "11R4Ii4czaYklkjIu1s0nYiRC1T8cz512vxNsBKXnREuBLhPy"
		const stringPczAJaU = "NqLUfZIBsyYTOVfvUzUPbJRQjNOsSTBXOvD"
		const uintZJ99Yao = BigInt("125")
		const BACMARSLPTOKENPoolXk52cOV = await BACMARSLPTOKENPool.new(stringxpCWaW, stringPczAJaU, uintZJ99Yao, {from: accounts[3]});
		const uintqGyX6Fu = BigInt("557")
		const uint8FgIdITD = await BACMARSLPTOKENPoolXk52cOV.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolXk52cOV.getReward.call({from: accounts[2]});
		const uint8c69Kb3k = await BACMARSLPTOKENPoolXk52cOV.decimals.call({from: accounts[2]});
		const uint256bc7p9a = await BACMARSLPTOKENPoolXk52cOV.notifyRewardAmount.call(uintqGyX6Fu, {from: accounts[3]});
	});
})