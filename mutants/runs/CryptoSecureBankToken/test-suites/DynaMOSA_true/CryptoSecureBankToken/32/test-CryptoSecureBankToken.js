const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenJoBUJ1R = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintAQLd83h = BigInt("922")
		const addressjkqLvRO = accounts[0]
		const addressvbyX68M = accounts[4]
		const uintwCMQ6RW = BigInt("651")
		const addressEqfLUTl = accounts[2]
		const uinthxmGcuh = BigInt("1024")
		const addresseg0Cs9O = accounts[4]
		const boolZ1cNyyB = await CryptoSecureBankTokenJoBUJ1R.transferFrom.call(addressvbyX68M, addressjkqLvRO, uintAQLd83h, {from: accounts[3]});
		const boolfhLkP5L = await CryptoSecureBankTokenJoBUJ1R.approve.call(addressEqfLUTl, uintwCMQ6RW, {from: accounts[3]});
		const boolFTlElJp = await CryptoSecureBankTokenJoBUJ1R.approve.call(addresseg0Cs9O, uinthxmGcuh, {from: accounts[5]});

		await expect(CryptoSecureBankTokenJoBUJ1R.transferFrom.call(addressvbyX68M, addressjkqLvRO, uintAQLd83h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeniIShnHj = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintGxP2Irb = BigInt("1287")
		const addressQMC3WE = accounts[2]
		const addressimLlhN5 = accounts[2]
		const uintvU1L6n = BigInt("1050")
		const addressCis5xtb = accounts[5]
		const addressUNLNBd = "0x0000000000000000000000000000000000000001"
		const addressNVIHLvS = await CryptoSecureBankTokeniIShnHj.getOwner.call({from: accounts[0]});
		const boolyBmo3dd = await CryptoSecureBankTokeniIShnHj.transferFrom.call(addressimLlhN5, addressQMC3WE, uintGxP2Irb, {from: accounts[2]});
		const boolpSnN6Wb = await CryptoSecureBankTokeniIShnHj.transferFrom.call(addressUNLNBd, addressCis5xtb, uintvU1L6n, {from: accounts[2]});

		assert.equal(addressNVIHLvS, 0xDf16f1ad1014635B9dfeB9fba9b4c19CA25dEDC7)
		await expect(CryptoSecureBankTokeniIShnHj.transferFrom.call(addressimLlhN5, addressQMC3WE, uintGxP2Irb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVHeBzwf = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintZAXQLyS = BigInt("585")
		const uintEEv5FcE = BigInt("1313")
		const addressvy6tz76 = accounts[4]
		const addressaATFEXr = "0x0000000000000000000000000000000000000001"
		const uintNKZwI6f = BigInt("779")
		const addressQNWJyeD = accounts[0]
		const boolMa7pYpn = await CryptoSecureBankTokenVHeBzwf.redeem.call(uintZAXQLyS, {from: accounts[3]});
		const boolVcOzrxV = await CryptoSecureBankTokenVHeBzwf.approve.call(addressvy6tz76, uintEEv5FcE, {from: accounts[0]});
		const addressqMkU92S = await CryptoSecureBankTokenVHeBzwf.transferOwnership.call(addressaATFEXr, {from: accounts[2]});
		const uintxr18JNF = await CryptoSecureBankTokenVHeBzwf.totalSupply.call({from: accounts[0]});
		const boolq8wKXfP = await CryptoSecureBankTokenVHeBzwf.transfer.call(addressQNWJyeD, uintNKZwI6f, {from: accounts[3]});

		await expect(CryptoSecureBankTokenVHeBzwf.redeem.call(uintZAXQLyS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenogGnWu = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintRhbpOkP = BigInt("1899")
		const uintmiwi0j = BigInt("1320")
		const addressG8hqSPg = accounts[4]
		const addressQejpf9 = accounts[2]
		await CryptoSecureBankTokenogGnWu.pause.call({from: accounts[0]});
		const boolBkZkYY = await CryptoSecureBankTokenogGnWu.redeem.call(uintRhbpOkP, {from: accounts[2]});
		await CryptoSecureBankTokenogGnWu.whenPaused.call({from: accounts[0]});
		await CryptoSecureBankTokenogGnWu.pause.call({from: accounts[4]});
		const boolnMN2XQy = await CryptoSecureBankTokenogGnWu.transferFrom.call(addressQejpf9, addressG8hqSPg, uintmiwi0j, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenogGnWu.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNeVqNIb = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressYYNQ2O8 = accounts[0]
		const uintnnxC53j = BigInt("1822")
		const addressIybYFEs = accounts[1]
		const addressRVp5lF = accounts[5]
		const uintaIN4vfc = await CryptoSecureBankTokenNeVqNIb.balanceOf.call(addressYYNQ2O8, {from: accounts[4]});
		const bool1jnZQQ = await CryptoSecureBankTokenNeVqNIb.transfer.call(addressIybYFEs, uintnnxC53j, {from: accounts[4]});
		await CryptoSecureBankTokenNeVqNIb.whenPaused.call({from: accounts[4]});
		const address2p1cAQ = await CryptoSecureBankTokenNeVqNIb.getOwner.call({from: accounts[0]});
		const boolmJDexkT = await CryptoSecureBankTokenNeVqNIb.getBlackListStatus.call(addressRVp5lF, {from: accounts[3]});
		await CryptoSecureBankTokenNeVqNIb.whenNotPaused.call({from: accounts[3]});

		assert.equal(uintaIN4vfc, BigInt("0"))
		await expect(CryptoSecureBankTokenNeVqNIb.transfer.call(addressIybYFEs, uintnnxC53j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRGCyvG5 = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpEYZCKZ = BigInt("1149")
		const addresshjACce = accounts[3]
		const addressouqhaeu = accounts[2]
		const uintzWrQ3wt = BigInt("845")
		const addressTEv7OL0 = accounts[4]
		const addressm4W5Zl = "0x0000000000000000000000000000000000000001"
		const uintTqjWCCJ = await CryptoSecureBankTokenRGCyvG5.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenRGCyvG5.whenNotPaused.call({from: accounts[1]});
		const boolZGTalad = await CryptoSecureBankTokenRGCyvG5.transferFrom.call(addressouqhaeu, addresshjACce, uintpEYZCKZ, {from: accounts[2]});
		const boolh2QWUJY = await CryptoSecureBankTokenRGCyvG5.transferFrom.call(addressm4W5Zl, addressTEv7OL0, uintzWrQ3wt, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokencps7kon = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressA2hpKPo = "0x0000000000000000000000000000000000000001"
		const uintkP2hgud = BigInt("1022")
		const uintaNA9ZrR = BigInt("702")
		const addressuyM5abV = "0x0000000000000000000000000000000000000001"
		const addressBfaLe9k = await CryptoSecureBankTokencps7kon.transferOwnership.call(addressA2hpKPo, {from: accounts[4]});
		await CryptoSecureBankTokencps7kon.pause.call({from: accounts[2]});
		const uintGQkeYg9 = await CryptoSecureBankTokencps7kon.totalSupply.call({from: accounts[0]});
		const uintJrRkiUE = await CryptoSecureBankTokencps7kon.setParams.call(uintaNA9ZrR, uintkP2hgud, {from: accounts[0]});
		await CryptoSecureBankTokencps7kon.whenPaused.call({from: accounts[1]});
		const uintLP7Inav = await CryptoSecureBankTokencps7kon.balanceOf.call(addressuyM5abV, {from: accounts[3]});

		await expect(CryptoSecureBankTokencps7kon.transferOwnership.call(addressA2hpKPo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenogGnWu = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintiXVO1R = BigInt("1320")
		const addressd33IbL = accounts[4]
		const addressUkDEDH4 = accounts[2]
		await CryptoSecureBankTokenogGnWu.pause.call({from: accounts[0]});
		await CryptoSecureBankTokenogGnWu.whenPaused.call({from: accounts[0]});
		await CryptoSecureBankTokenogGnWu.pause.call({from: accounts[4]});
		const boolnMN2XQy = await CryptoSecureBankTokenogGnWu.transferFrom.call(addressUkDEDH4, addressd33IbL, uintiXVO1R, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenogGnWu.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNeVqNIb = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressYULfhLK = accounts[1]
		const addresswntjVuM = "0x0000000000000000000000000000000000000001"
		const uintQqfEMYm = BigInt("1822")
		const addresswki0Bl = accounts[1]
		const uintWrTGQe1 = BigInt("262")
		const addressAI5hsN = accounts[2]
		const addressarxZxIR = accounts[6]
		const uintaIN4vfc = await CryptoSecureBankTokenNeVqNIb.balanceOf.call(addressYULfhLK, {from: accounts[4]});
		const addresstYOCbD2 = await CryptoSecureBankTokenNeVqNIb.removeBlackList.call(addresswntjVuM, {from: accounts[1]});
		const bool1jnZQQ = await CryptoSecureBankTokenNeVqNIb.transfer.call(addresswki0Bl, uintQqfEMYm, {from: accounts[4]});
		const booliqbZ3OT = await CryptoSecureBankTokenNeVqNIb.approve.call(addressAI5hsN, uintWrTGQe1, {from: accounts[4]});
		await CryptoSecureBankTokenNeVqNIb.whenPaused.call({from: accounts[4]});
		const boolmJDexkT = await CryptoSecureBankTokenNeVqNIb.getBlackListStatus.call(addressarxZxIR, {from: accounts[3]});
		await CryptoSecureBankTokenNeVqNIb.whenNotPaused.call({from: accounts[3]});

		assert.equal(uintaIN4vfc, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenNeVqNIb.transfer.call(addresswki0Bl, uintQqfEMYm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMVPx3wX = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressA5DpmwF = accounts[4]
		const addressdW3jTd = accounts[4]
		const uintsjPT4eh = BigInt("1655")
		const uintN8aN9uO = BigInt("968")
		const address8ByhTY = accounts[1]
		const addressG61yTtj = accounts[0]
		const uintb41mJX = await CryptoSecureBankTokenMVPx3wX.allowance.call(addressdW3jTd, addressA5DpmwF, {from: accounts[3]});
		const uintjBkeNtd = await CryptoSecureBankTokenMVPx3wX.setParams.call(uintN8aN9uO, uintsjPT4eh, {from: accounts[1]});
		const uinthRW5XUq = await CryptoSecureBankTokenMVPx3wX.allowance.call(addressG61yTtj, address8ByhTY, {from: accounts[1]});

		assert.equal(uintb41mJX, BigInt("0"))
		await expect(CryptoSecureBankTokenMVPx3wX.setParams.call(uintN8aN9uO, uintsjPT4eh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNeVqNIb = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressOdRajN = accounts[1]
		const uintyEGN5Pv = BigInt("294")
		const addressy8oE9GC = accounts[4]
		const uintwV3H5Mq = BigInt("1822")
		const addresszHp2Qhf = accounts[1]
		const addressBnCUSO = accounts[5]
		const addressQCNLJe = accounts[2]
		const uinteiCrMze = BigInt("1702")
		const addresshvPDiS = accounts[2]
		const uintaIN4vfc = await CryptoSecureBankTokenNeVqNIb.balanceOf.call(addressOdRajN, {from: accounts[4]});
		const boolG9FWsYG = await CryptoSecureBankTokenNeVqNIb.approve.call(addressy8oE9GC, uintyEGN5Pv, {from: accounts[2]});
		const bool1jnZQQ = await CryptoSecureBankTokenNeVqNIb.transfer.call(addresszHp2Qhf, uintwV3H5Mq, {from: accounts[4]});
		const boolmJDexkT = await CryptoSecureBankTokenNeVqNIb.getBlackListStatus.call(addressBnCUSO, {from: accounts[3]});
		await CryptoSecureBankTokenNeVqNIb.whenNotPaused.call({from: accounts[3]});
		const addressBMKhdC0 = await CryptoSecureBankTokenNeVqNIb.removeBlackList.call(addressQCNLJe, {from: accounts[3]});
		const booluya028u = await CryptoSecureBankTokenNeVqNIb.transfer.call(addresshvPDiS, uinteiCrMze, {from: accounts[1]});

		assert.equal(boolG9FWsYG, true)
		assert.equal(uintaIN4vfc, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenNeVqNIb.transfer.call(addresszHp2Qhf, uintwV3H5Mq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNeVqNIb = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintd1y37na = BigInt("1069")
		const addressiyDwPGV = accounts[0]
		const addressdV4MAMM = accounts[1]
		const addressaqHC603 = accounts[4]
		const uintMtFwVo8 = BigInt("1828")
		const addressoDP4PP9 = accounts[1]
		const uintem0weO = BigInt("1485")
		const addressHtKB8eP = accounts[0]
		const addressVPjGcr = accounts[4]
		const addressqKzwxUC = accounts[5]
		const boolFOtpTl = await CryptoSecureBankTokenNeVqNIb.approve.call(addressiyDwPGV, uintd1y37na, {from: accounts[3]});
		const uintaIN4vfc = await CryptoSecureBankTokenNeVqNIb.balanceOf.call(addressdV4MAMM, {from: accounts[4]});
		const boolp0Pkb8E = await CryptoSecureBankTokenNeVqNIb.getBlackListStatus.call(addressaqHC603, {from: accounts[2]});
		const bool1jnZQQ = await CryptoSecureBankTokenNeVqNIb.transfer.call(addressoDP4PP9, uintMtFwVo8, {from: accounts[4]});
		const boolaQiRBJ = await CryptoSecureBankTokenNeVqNIb.transferFrom.call(addressVPjGcr, addressHtKB8eP, uintem0weO, {from: accounts[0]});
		await CryptoSecureBankTokenNeVqNIb.unpause.call({from: accounts[1]});
		const boolmJDexkT = await CryptoSecureBankTokenNeVqNIb.getBlackListStatus.call(addressqKzwxUC, {from: accounts[3]});
		await CryptoSecureBankTokenNeVqNIb.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolFOtpTl, true)
		assert.equal(boolp0Pkb8E, false)
		assert.equal(uintaIN4vfc, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenNeVqNIb.transfer.call(addressoDP4PP9, uintMtFwVo8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZmOoyYZ = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressXDA5aZc = "0x0000000000000000000000000000000000000001"
		const uintjBEjatJ = BigInt("1174")
		const addresshyON9uk = accounts[3]
		const uintTpjYLbY = await CryptoSecureBankTokenZmOoyYZ.totalSupply.call({from: accounts[5]});
		const uintfmzioEE = await CryptoSecureBankTokenZmOoyYZ.balanceOf.call(addressXDA5aZc, {from: accounts[2]});
		const booln8bbuBI = await CryptoSecureBankTokenZmOoyYZ.transfer.call(addresshyON9uk, uintjBEjatJ, {from: accounts[2]});

		assert.equal(uintTpjYLbY, BigInt("100000000000000000000000000"))
		assert.equal(uintfmzioEE, BigInt("0"))
		await expect(CryptoSecureBankTokenZmOoyYZ.transfer.call(addresshyON9uk, uintjBEjatJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokencps7kon = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressHA9soCV = "0x00000000000000000000000000000000000000-1"
		const addressmT0a81H = "0x0000000000000000000000000000000000000001"
		const addressBfaLe9k = await CryptoSecureBankTokencps7kon.transferOwnership.call(addressHA9soCV, {from: accounts[4]});
		await CryptoSecureBankTokencps7kon.whenPaused.call({from: accounts[1]});
		const uintLP7Inav = await CryptoSecureBankTokencps7kon.balanceOf.call(addressmT0a81H, {from: accounts[3]});

		await expect(CryptoSecureBankTokencps7kon.transferOwnership.call(addressHA9soCV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBmv4isw = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresswtX73fi = accounts[3]
		const boolIfiICzR = await CryptoSecureBankTokenBmv4isw.deprecate.call(addresswtX73fi, {from: accounts[1]});
		const uintry6kRNb = await CryptoSecureBankTokenBmv4isw.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenBmv4isw.unpause.call({from: accounts[4]});

		assert.equal(boolIfiICzR, true)
		assert.equal(uintry6kRNb, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenBmv4isw.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUjpO9f9 = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressOmLEzJJ = accounts[1]
		const uintitbtuFp = BigInt("715")
		const uintw0eWbsz = BigInt("295")
		const uintMKu1JsY = await CryptoSecureBankTokenUjpO9f9.totalSupply.call({from: accounts[2]});
		const addressRLpV5aS = await CryptoSecureBankTokenUjpO9f9.removeBlackList.call(addressOmLEzJJ, {from: accounts[2]});
		const boolif8r0C = await CryptoSecureBankTokenUjpO9f9.redeem.call(uintitbtuFp, {from: accounts[2]});
		const uintrxuvWMO = await CryptoSecureBankTokenUjpO9f9.onlyPayloadSize.call(uintw0eWbsz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolif8r0C, true)
		assert.equal(uintMKu1JsY, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenUjpO9f9.onlyPayloadSize.call(uintw0eWbsz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokencps7kon = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressfEtXCaZ = "0x00000000000000000000000000000000000000-1"
		const uintMOUU4pz = BigInt("1968")
		const addressWKsSWE = accounts[5]
		const addressGm6tQPj = accounts[1]
		const uintLP7Inav = await CryptoSecureBankTokencps7kon.balanceOf.call(addressfEtXCaZ, {from: accounts[3]});
		const boolFZpnklA = await CryptoSecureBankTokencps7kon.transferFrom.call(addressGm6tQPj, addressWKsSWE, uintMOUU4pz, {from: accounts[3]});

		await expect(CryptoSecureBankTokencps7kon.balanceOf.call(addressfEtXCaZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfMx1MAT = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresseQpm5NA = accounts[3]
		const addressrmsM4O9 = accounts[1]
		const addressLAsTHX3 = await CryptoSecureBankTokenfMx1MAT.transferOwnership.call(addresseQpm5NA, {from: accounts[5]});
		const addressBoEJlrl = await CryptoSecureBankTokenfMx1MAT.setOwner2.call(addressrmsM4O9, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenfMx1MAT.pause.call({from: accounts[5]});

		await expect(CryptoSecureBankTokenfMx1MAT.setOwner2.call(addressrmsM4O9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFaSUgoo = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresslrutVG = accounts[4]
		const addressTBXG5EE = "0x0000000000000000000000000000000000000001"
		const uintqR9jqto = BigInt("677")
		const addressKQ8CAPz = accounts[3]
		const addressz3dLDiG = accounts[3]
		const uintD9XbKEp = BigInt("719")
		const addressKgVGIZu = accounts[3]
		const addressCeR8FoN = await CryptoSecureBankTokenFaSUgoo.setOwner2.call(addresslrutVG, {from: accounts[4]});
		const uintM0fwuP1 = await CryptoSecureBankTokenFaSUgoo.balanceOf.call(addressTBXG5EE, {from: accounts[5]});
		const bool4r7rTS = await CryptoSecureBankTokenFaSUgoo.transferFrom.call(addressz3dLDiG, addressKQ8CAPz, uintqR9jqto, {from: "0x0000000000000000000000000000000000000001"});
		const boolaJwr6fq = await CryptoSecureBankTokenFaSUgoo.transfer.call(addressKgVGIZu, uintD9XbKEp, {from: accounts[4]});

		assert.equal(uintM0fwuP1, BigInt("0"))
		await expect(CryptoSecureBankTokenFaSUgoo.transferFrom.call(addressz3dLDiG, addressKQ8CAPz, uintqR9jqto, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFaSUgoo = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintJwx28Zo = BigInt("494")
		const addressheq5RBv = accounts[2]
		const addressY003c6R = accounts[0]
		const uintkMYtopR = BigInt("1997")
		const uintb2V8GY2 = BigInt("1534")
		const uintpFN5LiP = BigInt("677")
		const address31o89r = accounts[2]
		const addressywa8RCa = accounts[3]
		const boolKOvs5A = await CryptoSecureBankTokenFaSUgoo.transfer.call(addressheq5RBv, uintJwx28Zo, {from: accounts[4]});
		const boolhcCLSxv = await CryptoSecureBankTokenFaSUgoo.deprecate.call(addressY003c6R, {from: accounts[2]});
		const uintXfstIli = await CryptoSecureBankTokenFaSUgoo.setParams.call(uintb2V8GY2, uintkMYtopR, {from: accounts[1]});
		const bool4r7rTS = await CryptoSecureBankTokenFaSUgoo.transferFrom.call(addressywa8RCa, address31o89r, uintpFN5LiP, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenFaSUgoo.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolKOvs5A, true)
		await expect(CryptoSecureBankTokenFaSUgoo.deprecate.call(addressY003c6R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFaSUgoo = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintTn4vMt = BigInt("494")
		const addresse2IZQQa = accounts[2]
		const uintng2oJZO = BigInt("1596")
		const uintqU6RQNf = BigInt("700")
		const uinttB6GSFE = BigInt("1294")
		const addresspG0R40A = accounts[0]
		const addresskH89erC = accounts[0]
		const uintvAMnaye = BigInt("1997")
		const uintsbi2s9C = BigInt("1531")
		const uintWuGHpZn = BigInt("677")
		const addressYnnM1oJ = accounts[2]
		const addressKGPRjE5 = accounts[3]
		const boolKOvs5A = await CryptoSecureBankTokenFaSUgoo.transfer.call(addresse2IZQQa, uintTn4vMt, {from: accounts[4]});
		const uintUZ7Tnbi = await CryptoSecureBankTokenFaSUgoo.setParams.call(uintqU6RQNf, uintng2oJZO, {from: accounts[4]});
		const boolftGirn7 = await CryptoSecureBankTokenFaSUgoo.approve.call(addresspG0R40A, uinttB6GSFE, {from: accounts[2]});
		const boolhcCLSxv = await CryptoSecureBankTokenFaSUgoo.deprecate.call(addresskH89erC, {from: accounts[2]});
		const uintXfstIli = await CryptoSecureBankTokenFaSUgoo.setParams.call(uintsbi2s9C, uintvAMnaye, {from: accounts[1]});
		const bool4r7rTS = await CryptoSecureBankTokenFaSUgoo.transferFrom.call(addressKGPRjE5, addressYnnM1oJ, uintWuGHpZn, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenFaSUgoo.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolKOvs5A, true)
		await expect(CryptoSecureBankTokenFaSUgoo.setParams.call(uintqU6RQNf, uintng2oJZO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMVPx3wX = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressfncxP3S = accounts[6]
		const addresssZSuvT = accounts[4]
		const address04PE9a = accounts[4]
		const uintqXSzrJV = BigInt("596")
		const addressQx7obDe = accounts[3]
		const addresswC1Zu9l = "0x0000000000000000000000000000000000000001"
		const uintb41mJX = await CryptoSecureBankTokenMVPx3wX.allowance.call(addresssZSuvT, addressfncxP3S, {from: accounts[3]});
		const addressbLvxWgw = await CryptoSecureBankTokenMVPx3wX.addBlackList.call(address04PE9a, {from: accounts[5]});
		const boolltNnmsh = await CryptoSecureBankTokenMVPx3wX.transferFrom.call(addresswC1Zu9l, addressQx7obDe, uintqXSzrJV, {from: accounts[0]});

		assert.equal(uintb41mJX, BigInt("0"))
		await expect(CryptoSecureBankTokenMVPx3wX.transferFrom.call(addresswC1Zu9l, addressQx7obDe, uintqXSzrJV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFaSUgoo = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintkrFPqbN = BigInt("494")
		const addressYfqORBo = accounts[2]
		const address4S2jkV = accounts[3]
		const boolKOvs5A = await CryptoSecureBankTokenFaSUgoo.transfer.call(addressYfqORBo, uintkrFPqbN, {from: accounts[4]});
		const addressqjoBNot = await CryptoSecureBankTokenFaSUgoo.destroyBlackFunds.call(address4S2jkV, {from: accounts[4]});
		await CryptoSecureBankTokenFaSUgoo.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolKOvs5A, true)
		await expect(CryptoSecureBankTokenFaSUgoo.destroyBlackFunds.call(address4S2jkV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})