const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20oVrfz1 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintH7umzJL = BigInt("1083")
		const uintx1kGLUL = BigInt("184")
		const uintU4SAiHr = BigInt("116")
		const uintAoFKMXa = BigInt("1260")
		const uintTln0Mce = BigInt("1626")
		const addressXsFBDok = accounts[1]
		const uint256PEt7q3s = await UNIWHALE_ERC20oVrfz1.startSale.call(uintTln0Mce, uintAoFKMXa, uintU4SAiHr, uintx1kGLUL, uintH7umzJL, {from: accounts[4]});
		const uint256YfyEsAI = await UNIWHALE_ERC20oVrfz1.viewAirdrop.call({from: accounts[4]});
		const boolKY9fCf1 = await UNIWHALE_ERC20oVrfz1.tokenSale.call(addressXsFBDok, {from: accounts[2]});
		await UNIWHALE_ERC20oVrfz1.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256K4Na2T = await UNIWHALE_ERC20oVrfz1.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20oVrfz1.startSale.call(uintTln0Mce, uintAoFKMXa, uintU4SAiHr, uintx1kGLUL, uintH7umzJL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vesTOHT = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressV9I4kIs = accounts[0]
		const uintEx4cImi = BigInt("1253")
		const uinthwiQPm = BigInt("1969")
		const uintJBo4KJC = BigInt("952")
		const uintdlKeNH0 = BigInt("853")
		const uintDWTJRog = BigInt("1592")
		const uintLXcmVe2 = BigInt("1965")
		const uintJSPN5t7 = BigInt("905")
		const uintgTO6Ju = BigInt("701")
		const uintwEUUPl = BigInt("1618")
		const uintvztDCA = BigInt("1857")
		const uintQPvf5t = BigInt("1791")
		const uintGeu9iMa = BigInt("521")
		const uintbGUeQQT = BigInt("853")
		const boolvQg9MJy = await UNIWHALE_ERC20vesTOHT.getAirdrop.call(addressV9I4kIs, {from: accounts[1]});
		const uint256UBfPAdF = await UNIWHALE_ERC20vesTOHT.startAirdrop.call(uintdlKeNH0, uintJBo4KJC, uinthwiQPm, uintEx4cImi, {from: accounts[3]});
		const uint256mbCWyhL = await UNIWHALE_ERC20vesTOHT.startAirdrop.call(uintgTO6Ju, uintJSPN5t7, uintLXcmVe2, uintDWTJRog, {from: accounts[0]});
		const uint256CpRknsK = await UNIWHALE_ERC20vesTOHT.startSale.call(uintbGUeQQT, uintGeu9iMa, uintQPvf5t, uintvztDCA, uintwEUUPl, {from: accounts[1]});
		const uint256hq6P5l4 = await UNIWHALE_ERC20vesTOHT.viewSale.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20vesTOHT.getAirdrop.call(addressV9I4kIs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wNiN00L = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWHOuRqM = BigInt("246")
		const uintpv9EdLy = BigInt("240")
		const uint7mhzFM = BigInt("1162")
		const uintKPPf3Y9 = BigInt("548")
		const uintfCI8qU4 = BigInt("1449")
		const uintVDDSVRi = BigInt("116")
		const uintiJ1dHTw = BigInt("1864")
		const uintdpoZAAw = BigInt("500")
		const uintKwtr28x = BigInt("1592")
		const address0I3ilk = accounts[3]
		const uint256xxVUZy0 = await UNIWHALE_ERC20wNiN00L.startSale.call(uintfCI8qU4, uintKPPf3Y9, uint7mhzFM, uintpv9EdLy, uintWHOuRqM, {from: accounts[1]});
		const uint256z9Swpic = await UNIWHALE_ERC20wNiN00L.startAirdrop.call(uintKwtr28x, uintdpoZAAw, uintiJ1dHTw, uintVDDSVRi, {from: accounts[4]});
		const uint256liBmNQy = await UNIWHALE_ERC20wNiN00L.viewAirdrop.call({from: accounts[2]});
		const boolYiSX8kX = await UNIWHALE_ERC20wNiN00L.getAirdrop.call(address0I3ilk, {from: accounts[3]});
		const uint256iRCe8sR = await UNIWHALE_ERC20wNiN00L.viewSale.call({from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wJqVhAI = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressAQBCnuo = accounts[0]
		const uint256c55aPcT = await UNIWHALE_ERC20wJqVhAI.viewSale.call({from: accounts[4]});
		const boolpSoxBBb = await UNIWHALE_ERC20wJqVhAI.getAirdrop.call(addressAQBCnuo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hdvv4J = await UNIWHALE_ERC20wJqVhAI.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ry7wbio = await UNIWHALE_ERC20wJqVhAI.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20wJqVhAI.getAirdrop.call(addressAQBCnuo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wSCqVUG = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintuy0Lut8 = BigInt("1847")
		const uintEqbgLAH = BigInt("1703")
		const uintszzDq5o = BigInt("68")
		const uintS5gd5rC = BigInt("39")
		const uintSO1xnQ5 = BigInt("1937")
		const addressYzMgUvM = accounts[3]
		const uint256rdXcsvh = await UNIWHALE_ERC20wSCqVUG.viewAirdrop.call({from: accounts[1]});
		const uint256jLoefhL = await UNIWHALE_ERC20wSCqVUG.startSale.call(uintSO1xnQ5, uintS5gd5rC, uintszzDq5o, uintEqbgLAH, uintuy0Lut8, {from: accounts[5]});
		const uint256uPNUFWM = await UNIWHALE_ERC20wSCqVUG.viewAirdrop.call({from: accounts[4]});
		const uint256iigkro5 = await UNIWHALE_ERC20wSCqVUG.viewSale.call({from: accounts[2]});
		const boolscIuO7 = await UNIWHALE_ERC20wSCqVUG.tokenSale.call(addressYzMgUvM, {from: accounts[2]});

		await expect(UNIWHALE_ERC20wSCqVUG.startSale.call(uintSO1xnQ5, uintS5gd5rC, uintszzDq5o, uintEqbgLAH, uintuy0Lut8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20WkPgK32 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressNvIxso = accounts[1]
		const uintnLagMEf = BigInt("729")
		const uintBCH1yOU = BigInt("1316")
		const uintmIwzG1n = BigInt("804")
		const uintgmJDuJ1 = BigInt("1358")
		const boolzjQU3Wk = await UNIWHALE_ERC20WkPgK32.tokenSale.call(addressNvIxso, {from: accounts[1]});
		const uint256Uj24Qz0 = await UNIWHALE_ERC20WkPgK32.startAirdrop.call(uintgmJDuJ1, uintmIwzG1n, uintBCH1yOU, uintnLagMEf, {from: accounts[3]});

		await expect(UNIWHALE_ERC20WkPgK32.tokenSale.call(addressNvIxso, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ixkfd9 = await UNIWHALE_ERC20.new({from: accounts[3]});
		await UNIWHALE_ERC20ixkfd9.clearETH.call({from: accounts[3]});
		await UNIWHALE_ERC20ixkfd9.clearETH.call({from: accounts[4]});
		const uint256iJuJ5s = await UNIWHALE_ERC20ixkfd9.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20ixkfd9.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NuqrvVr = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintxWph5ev = BigInt("1943")
		const uintcg3DudE = BigInt("1906")
		const uintJyrhIQ5 = BigInt("1768")
		const uintVZkF117 = BigInt("1533")
		const uintpkNChZz = BigInt("1308")
		const uintvURFo2 = BigInt("1328")
		const uintzK2h4eB = BigInt("1901")
		const uintwQOPmK = BigInt("1645")
		const uint256sbV4ofD = await UNIWHALE_ERC20NuqrvVr.startAirdrop.call(uintVZkF117, uintJyrhIQ5, uintcg3DudE, uintxWph5ev, {from: accounts[2]});
		const uint256FpfRat0 = await UNIWHALE_ERC20NuqrvVr.viewSale.call({from: accounts[2]});
		const uint256tZWgjCL = await UNIWHALE_ERC20NuqrvVr.startAirdrop.call(uintwQOPmK, uintzK2h4eB, uintvURFo2, uintpkNChZz, {from: accounts[1]});
		const uint256Uoepwdw = await UNIWHALE_ERC20NuqrvVr.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20NuqrvVr.startAirdrop.call(uintwQOPmK, uintzK2h4eB, uintvURFo2, uintpkNChZz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NuqrvVr = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintnhy3I7F = BigInt("1171")
		const uintB61uyq = BigInt("1424")
		const uintSAImiX = BigInt("1119")
		const uintZBQxMhW = BigInt("1864")
		const uintpO6nmVJ = BigInt("340")
		const uintL1Q1Q9q = BigInt("1231")
		const uintUukWV6h = BigInt("627")
		const uintt9OqmV = BigInt("1312")
		const uintPW8JtUM = BigInt("95")
		const uintQOZR5pK = BigInt("935")
		const uintMRe2vYx = BigInt("1308")
		const uintbfe2Ooi = BigInt("1333")
		const uintTSPBwaF = BigInt("690")
		const uinth4Mi6n3 = BigInt("1664")
		const uint256sTPB6D7 = await UNIWHALE_ERC20NuqrvVr.startSale.call(uintpO6nmVJ, uintZBQxMhW, uintSAImiX, uintB61uyq, uintnhy3I7F, {from: accounts[2]});
		const uint256tlP6W5u = await UNIWHALE_ERC20NuqrvVr.startSale.call(uintQOZR5pK, uintPW8JtUM, uintt9OqmV, uintUukWV6h, uintL1Q1Q9q, {from: accounts[0]});
		const uint256tZWgjCL = await UNIWHALE_ERC20NuqrvVr.startAirdrop.call(uinth4Mi6n3, uintTSPBwaF, uintbfe2Ooi, uintMRe2vYx, {from: accounts[1]});

		await expect(UNIWHALE_ERC20NuqrvVr.startSale.call(uintQOZR5pK, uintPW8JtUM, uintt9OqmV, uintUukWV6h, uintL1Q1Q9q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})