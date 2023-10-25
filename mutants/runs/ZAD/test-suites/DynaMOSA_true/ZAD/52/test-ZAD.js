const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADSNwmSkv = await ZAD.new({from: accounts[3]});
		const uintlvsJsXO = BigInt("266")
		const addressMcugVPf = accounts[5]
		const uintlQyJ4ZZ = BigInt("1809")
		const addressVj9UmV = accounts[2]
		const addresseeTHSjL = accounts[3]
		const boolNnT4gTp = await ZADSNwmSkv.decreaseAllowance.call(addressMcugVPf, uintlvsJsXO, {from: accounts[2]});
		const boolA4v6E00 = await ZADSNwmSkv.transfer.call(addressVj9UmV, uintlQyJ4ZZ, {from: accounts[0]});
		const uint256kaGNucZ = await ZADSNwmSkv.totalSupply.call({from: accounts[2]});
		const uint256O5W7IpL = await ZADSNwmSkv.balanceOf.call(addresseeTHSjL, {from: accounts[2]});
		const stringfXlhGci = await ZADSNwmSkv.name.call({from: accounts[5]});

		await expect(ZADSNwmSkv.decreaseAllowance.call(addressMcugVPf, uintlvsJsXO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADwFYsMam = await ZAD.new({from: accounts[0]});
		const uintXn9vX5z = BigInt("837")
		const addressyBtiSBO = "0x0000000000000000000000000000000000000001"
		const uintbI2Mh6Q = BigInt("1903")
		const addresstFVZ2p3 = accounts[0]
		const uintqMQiP8s = BigInt("5")
		const addresskJd1cv9 = accounts[4]
		const uintnnS97nk = BigInt("1601")
		const addressMYhgoTE = accounts[2]
		const uintQWCFVLa = BigInt("965")
		const addressg3MuwHM = accounts[4]
		const booliowk4Um = await ZADwFYsMam.approve.call(addressyBtiSBO, uintXn9vX5z, {from: accounts[1]});
		const uint256DFGQ0ou = await ZADwFYsMam.totalSupply.call({from: accounts[2]});
		const booleFs7JIJ = await ZADwFYsMam.transfer.call(addresstFVZ2p3, uintbI2Mh6Q, {from: accounts[4]});
		const boolEUNUbq = await ZADwFYsMam.increaseAllowance.call(addresskJd1cv9, uintqMQiP8s, {from: accounts[4]});
		const boolLwbr6Zl = await ZADwFYsMam.decreaseAllowance.call(addressMYhgoTE, uintnnS97nk, {from: accounts[2]});
		const boolLWccGEM = await ZADwFYsMam.transfer.call(addressg3MuwHM, uintQWCFVLa, {from: accounts[1]});

		assert.equal(booliowk4Um, true)
		assert.equal(uint256DFGQ0ou, BigInt("100000000000000000000000000"))
		await expect(ZADwFYsMam.transfer.call(addresstFVZ2p3, uintbI2Mh6Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWe5RUGH = await ZAD.new({from: accounts[2]});
		const uintlGEarYe = BigInt("1147")
		const addressmuu7frD = accounts[2]
		const addressL4V5m9w = accounts[1]
		const addressHBdOtSt = "0x0000000000000000000000000000000000000001"
		const uintiAelrgu = BigInt("699")
		const addressLJmAQIL = accounts[1]
		const uintMUWDatY = BigInt("930")
		const boolaQxqcoF = await ZADWe5RUGH.transferFrom.call(addressL4V5m9w, addressmuu7frD, uintlGEarYe, {from: accounts[3]});
		const uint256hkS3qkq = await ZADWe5RUGH.balanceOf.call(addressHBdOtSt, {from: accounts[0]});
		const bool4nAFHZ = await ZADWe5RUGH.decreaseAllowance.call(addressLJmAQIL, uintiAelrgu, {from: accounts[4]});
		const uint256BFKiYaC = await ZADWe5RUGH._burn.call(uintMUWDatY, {from: accounts[1]});

		await expect(ZADWe5RUGH.transferFrom.call(addressL4V5m9w, addressmuu7frD, uintlGEarYe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlsT7s8s = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const stringCichXca = await ZADlsT7s8s.symbol.call({from: accounts[2]});
		const stringqetgrHR = await ZADlsT7s8s.symbol.call({from: accounts[1]});
		const uint8mHs5yp = await ZADlsT7s8s.decimals.call({from: accounts[0]});
		const stringBDmf0E9 = await ZADlsT7s8s.symbol.call({from: accounts[0]});
		const stringhe0jAg = await ZADlsT7s8s.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ZAD', async () => {
		const ZADL7cdb1g = await ZAD.new({from: accounts[2]});
		const uinthJgElJl = BigInt("1996")
		const addressBxW1cHt = accounts[4]
		const stringkYvsWB = await ZADL7cdb1g.name.call({from: accounts[1]});
		const boolwJRdkFT = await ZADL7cdb1g.approve.call(addressBxW1cHt, uinthJgElJl, {from: accounts[2]});
		const uint8gwahfxr = await ZADL7cdb1g.decimals.call({from: accounts[4]});
		const stringUCQxj6D = await ZADL7cdb1g.symbol.call({from: accounts[2]});
		const uint82TfzvP = await ZADL7cdb1g.decimals.call({from: accounts[1]});
		const stringYioXTsC = await ZADL7cdb1g.symbol.call({from: accounts[4]});

		assert.equal(boolwJRdkFT, true)
		assert.equal(stringUCQxj6D, "ZAD")
		assert.equal(stringYioXTsC, "ZAD")
		assert.equal(stringkYvsWB, "Zadkiel")
		assert.equal(uint82TfzvP, BigInt("18"))
		assert.equal(uint8gwahfxr, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADPqPzCv = await ZAD.new({from: accounts[0]});
		const uintkikSywN = BigInt("1969")
		const addressg7rixt = accounts[4]
		const uintbIN0vK = BigInt("1189")
		const addressqynDkyb = accounts[4]
		const boolb2mCNIp = await ZADPqPzCv.increaseAllowance.call(addressg7rixt, uintkikSywN, {from: accounts[4]});
		const uint8vI0Yuq = await ZADPqPzCv.decimals.call({from: accounts[0]});
		const boolFp6q3n = await ZADPqPzCv.approve.call(addressqynDkyb, uintbIN0vK, {from: accounts[3]});
		const stringSriIZc4 = await ZADPqPzCv.symbol.call({from: accounts[0]});
		const stringwKfUuBe = await ZADPqPzCv.name.call({from: accounts[2]});

		assert.equal(boolFp6q3n, true)
		assert.equal(boolb2mCNIp, true)
		assert.equal(stringSriIZc4, "ZAD")
		assert.equal(stringwKfUuBe, "Zadkiel")
		assert.equal(uint8vI0Yuq, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADkmofO7T = await ZAD.new({from: accounts[4]});
		const addressLuPotTn = accounts[0]
		const stringduLgus = await ZADkmofO7T.name.call({from: accounts[2]});
		const uint256SiSCyMD = await ZADkmofO7T.balanceOf.call(addressLuPotTn, {from: accounts[1]});

		assert.equal(stringduLgus, "Zadkiel")
		assert.equal(uint256SiSCyMD, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADiUTMG4g = await ZAD.new({from: accounts[1]});
		const addressnuUFn3R = accounts[0]
		const addressXwo0PPT = accounts[0]
		const uintjGmBcnM = BigInt("1396")
		const addressK5skJJV = accounts[1]
		const uintcGBjyc0 = BigInt("1926")
		const addressTm3ieJd = accounts[0]
		const uint256PTsJQIa = await ZADiUTMG4g.allowance.call(addressXwo0PPT, addressnuUFn3R, {from: accounts[1]});
		const stringADxHKvY = await ZADiUTMG4g.name.call({from: accounts[2]});
		const boolLaKLGcE = await ZADiUTMG4g.decreaseAllowance.call(addressK5skJJV, uintjGmBcnM, {from: accounts[0]});
		const boolgJJqj2 = await ZADiUTMG4g.decreaseAllowance.call(addressTm3ieJd, uintcGBjyc0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringADxHKvY, "Zadkiel")
		assert.equal(uint256PTsJQIa, BigInt("0"))
		await expect(ZADiUTMG4g.decreaseAllowance.call(addressK5skJJV, uintjGmBcnM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADoDyQZE4 = await ZAD.new({from: accounts[2]});
		const uintNSSlgpZ = BigInt("692")
		const addressz6Nb0fU = accounts[2]
		const addressc8o0xxz = accounts[4]
		const uintssuquiz = BigInt("1720")
		const addressEVYc4Ec = accounts[0]
		const uintl7hTrj8 = BigInt("1126")
		const uintusl5VSS = BigInt("389")
		const addressEJ6JPn = accounts[3]
		const uint256BiyfgUo = await ZADoDyQZE4._burn.call(uintNSSlgpZ, {from: accounts[4]});
		const uint256Bsouyk4 = await ZADoDyQZE4.allowance.call(addressc8o0xxz, addressz6Nb0fU, {from: accounts[0]});
		const boolpMOAkt9 = await ZADoDyQZE4.increaseAllowance.call(addressEVYc4Ec, uintssuquiz, {from: accounts[0]});
		const uint256SjsN09N = await ZADoDyQZE4._burn.call(uintl7hTrj8, {from: "0x0000000000000000000000000000000000000001"});
		const boolUBdFX4b = await ZADoDyQZE4.decreaseAllowance.call(addressEJ6JPn, uintusl5VSS, {from: accounts[3]});

		await expect(ZADoDyQZE4._burn.call(uintNSSlgpZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})