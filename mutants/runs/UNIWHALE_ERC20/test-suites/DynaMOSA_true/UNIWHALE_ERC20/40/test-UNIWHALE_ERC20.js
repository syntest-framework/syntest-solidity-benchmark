const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20YgPYhbQ = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressr1PDJmO = accounts[3]
		const uint2E3ckw = BigInt("1242")
		const uinttUSpqVa = BigInt("816")
		const uintbUvqoTU = BigInt("405")
		const uintgfuXsYC = BigInt("1329")
		const uintwpZsBAT = BigInt("1852")
		const addresso2A20JP = accounts[4]
		const boolLc9dipf = await UNIWHALE_ERC20YgPYhbQ.tokenSale.call(addressr1PDJmO, {from: accounts[0]});
		const uint256EBzqkaJ = await UNIWHALE_ERC20YgPYhbQ.startSale.call(uintwpZsBAT, uintgfuXsYC, uintbUvqoTU, uinttUSpqVa, uint2E3ckw, {from: accounts[2]});
		const boolAlryZqY = await UNIWHALE_ERC20YgPYhbQ.tokenSale.call(addresso2A20JP, {from: accounts[0]});
		await UNIWHALE_ERC20YgPYhbQ.clearETH.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20YgPYhbQ.tokenSale.call(addressr1PDJmO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20MD5sCXY = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmIXWeI = BigInt("2001")
		const uintxzxDNNm = BigInt("1711")
		const uintVYoSaS = BigInt("1025")
		const uintiwkjO6T = BigInt("135")
		const uintqkyM2BH = BigInt("251")
		const uintXFq7Xj4 = BigInt("73")
		const uinttrkl0xS = BigInt("783")
		const uintGDEQ2wK = BigInt("50")
		const uintDSyNcti = BigInt("174")
		const uint256CSZKL1R = await UNIWHALE_ERC20MD5sCXY.startAirdrop.call(uintiwkjO6T, uintVYoSaS, uintxzxDNNm, uintmIXWeI, {from: accounts[1]});
		await UNIWHALE_ERC20MD5sCXY.clearETH.call({from: accounts[0]});
		const uint256VGrniEx = await UNIWHALE_ERC20MD5sCXY.startSale.call(uintDSyNcti, uintGDEQ2wK, uinttrkl0xS, uintXFq7Xj4, uintqkyM2BH, {from: accounts[0]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC205w1uQn = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressqcGygW = accounts[0]
		const uintXQo1DUi = BigInt("0")
		const uintATtl1s1 = BigInt("1907")
		const uintCc6HVsX = BigInt("337")
		const uintvafIbOj = BigInt("1546")
		const uintRICJDWU = BigInt("1408")
		const uint256Qde5yJq = await UNIWHALE_ERC205w1uQn.viewAirdrop.call({from: accounts[4]});
		const booltIKBn0v = await UNIWHALE_ERC205w1uQn.tokenSale.call(addressqcGygW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BX9WTT3 = await UNIWHALE_ERC205w1uQn.startSale.call(uintRICJDWU, uintvafIbOj, uintCc6HVsX, uintATtl1s1, uintXQo1DUi, {from: accounts[5]});

		await expect(UNIWHALE_ERC205w1uQn.tokenSale.call(addressqcGygW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20I8H0CVy = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintw4mAlZD = BigInt("542")
		const uinteAMTkmh = BigInt("1503")
		const uintzO6mJDa = BigInt("1945")
		const uintlRIoC8f = BigInt("654")
		const uintyFYIAvd = BigInt("1272")
		const addressJ84iCI5 = accounts[0]
		const uintuJqdHMH = BigInt("1767")
		const uintRzBcNHM = BigInt("1573")
		const uinthJ6qAtY = BigInt("102")
		const uintBlScUXu = BigInt("968")
		const uint256UXoa3ue = await UNIWHALE_ERC20I8H0CVy.startSale.call(uintyFYIAvd, uintlRIoC8f, uintzO6mJDa, uinteAMTkmh, uintw4mAlZD, {from: accounts[1]});
		const uint256eSVoGJ3 = await UNIWHALE_ERC20I8H0CVy.viewAirdrop.call({from: accounts[1]});
		const boolSu9xDXd = await UNIWHALE_ERC20I8H0CVy.tokenSale.call(addressJ84iCI5, {from: accounts[3]});
		const uint256imbmaU4 = await UNIWHALE_ERC20I8H0CVy.startAirdrop.call(uintBlScUXu, uinthJ6qAtY, uintRzBcNHM, uintuJqdHMH, {from: accounts[1]});

		await expect(UNIWHALE_ERC20I8H0CVy.tokenSale.call(addressJ84iCI5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC205w1uQn = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintks2Izhm = BigInt("83")
		const uintMaGc7TF = BigInt("1199")
		const uintL08CM1c = BigInt("424")
		const uintbyyr4qM = BigInt("1204")
		const uintQERfxig = BigInt("232")
		const addressPdFRBKj = accounts[0]
		const uintQ67bgCD = BigInt("0")
		const uintObWskp = BigInt("1907")
		const uintqjGxS41 = BigInt("337")
		const uintWhzdfvV = BigInt("1546")
		const uintIfQIdNV = BigInt("1408")
		const uint256Qde5yJq = await UNIWHALE_ERC205w1uQn.viewAirdrop.call({from: accounts[4]});
		const uint256nDczjIm = await UNIWHALE_ERC205w1uQn.viewSale.call({from: accounts[1]});
		const uint256Wgzrk4R = await UNIWHALE_ERC205w1uQn.startSale.call(uintQERfxig, uintbyyr4qM, uintL08CM1c, uintMaGc7TF, uintks2Izhm, {from: accounts[3]});
		const booltIKBn0v = await UNIWHALE_ERC205w1uQn.tokenSale.call(addressPdFRBKj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BX9WTT3 = await UNIWHALE_ERC205w1uQn.startSale.call(uintIfQIdNV, uintWhzdfvV, uintqjGxS41, uintObWskp, uintQ67bgCD, {from: accounts[5]});

		await expect(UNIWHALE_ERC205w1uQn.startSale.call(uintQERfxig, uintbyyr4qM, uintL08CM1c, uintMaGc7TF, uintks2Izhm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TqagtTc = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressfJJSbmM = accounts[5]
		const addressB7axNrh = "0x0000000000000000000000000000000000000001"
		const addressXVwyBx9 = "0x0000000000000000000000000000000000000001"
		const uintnhmBBNR = BigInt("365")
		const uintvZoN3Tt = BigInt("481")
		const uintTfFix3F = BigInt("1575")
		const uintWDRtuvH = BigInt("19")
		const boolZ55x94 = await UNIWHALE_ERC20TqagtTc.getAirdrop.call(addressfJJSbmM, {from: accounts[5]});
		const boolMdeyr0v = await UNIWHALE_ERC20TqagtTc.tokenSale.call(addressB7axNrh, {from: accounts[3]});
		const boolY4HKZLE = await UNIWHALE_ERC20TqagtTc.tokenSale.call(addressXVwyBx9, {from: accounts[3]});
		const uint256aJ4qtwr = await UNIWHALE_ERC20TqagtTc.startAirdrop.call(uintWDRtuvH, uintTfFix3F, uintvZoN3Tt, uintnhmBBNR, {from: accounts[0]});

		await expect(UNIWHALE_ERC20TqagtTc.getAirdrop.call(addressfJJSbmM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20dBMY4bw = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintnT8Yya9 = BigInt("1213")
		const uinthLawMI2 = BigInt("1108")
		const uintMkOsFOx = BigInt("440")
		const uintDfDjQCo = BigInt("453")
		const uintBCszs50 = BigInt("708")
		const uintM8yGbin = BigInt("1738")
		const uintOEBgho = BigInt("1940")
		const uintkjmKZe = BigInt("1269")
		const uintAWsJkz = BigInt("1395")
		const uintVKIAIUt = BigInt("2014")
		const uintBzr5bIa = BigInt("1432")
		const uintES5gGEr = BigInt("520")
		const uintsITiULl = BigInt("1189")
		const uintloTYU4 = BigInt("421")
		const uintKflyxwV = BigInt("945")
		const uintRvEPGP = BigInt("977")
		const uintIBSgOQ2 = BigInt("1166")
		const uintvcmXglr = BigInt("35")
		const uint256U2QpGSy = await UNIWHALE_ERC20dBMY4bw.viewAirdrop.call({from: accounts[5]});
		const uint256d63Alrw = await UNIWHALE_ERC20dBMY4bw.viewSale.call({from: accounts[0]});
		const uint256TPFf9Up = await UNIWHALE_ERC20dBMY4bw.startSale.call(uintBCszs50, uintDfDjQCo, uintMkOsFOx, uinthLawMI2, uintnT8Yya9, {from: accounts[4]});
		const uint256VaDlIwC = await UNIWHALE_ERC20dBMY4bw.startAirdrop.call(uintAWsJkz, uintkjmKZe, uintOEBgho, uintM8yGbin, {from: accounts[4]});
		const uint256yqLmSzE = await UNIWHALE_ERC20dBMY4bw.startAirdrop.call(uintsITiULl, uintES5gGEr, uintBzr5bIa, uintVKIAIUt, {from: accounts[1]});
		const uint256XnEd7Ot = await UNIWHALE_ERC20dBMY4bw.startSale.call(uintvcmXglr, uintIBSgOQ2, uintRvEPGP, uintKflyxwV, uintloTYU4, {from: accounts[3]});

		await expect(UNIWHALE_ERC20dBMY4bw.startAirdrop.call(uintsITiULl, uintES5gGEr, uintBzr5bIa, uintVKIAIUt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC205w1uQn = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressJHlVoyS = accounts[0]
		const uintqtnAq5 = BigInt("0")
		const uinthGqsxLA = BigInt("1907")
		const uintFZCPeM = BigInt("337")
		const uintZfHmt1 = BigInt("1546")
		const uintwb9c05A = BigInt("1408")
		const uint256Qde5yJq = await UNIWHALE_ERC205w1uQn.viewAirdrop.call({from: accounts[4]});
		await UNIWHALE_ERC205w1uQn.clearETH.call({from: accounts[0]});
		const booltIKBn0v = await UNIWHALE_ERC205w1uQn.tokenSale.call(addressJHlVoyS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RXODD75 = await UNIWHALE_ERC205w1uQn.viewSale.call({from: accounts[0]});
		const uint256BX9WTT3 = await UNIWHALE_ERC205w1uQn.startSale.call(uintwb9c05A, uintZfHmt1, uintFZCPeM, uinthGqsxLA, uintqtnAq5, {from: accounts[5]});

		await expect(UNIWHALE_ERC205w1uQn.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})