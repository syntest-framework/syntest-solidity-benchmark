const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerMC0bItG = await vnxManager.new({from: accounts[1]});
		const uintAQLbSMR = BigInt("819")
		const addressFCprYmN = "0x0000000000000000000000000000000000000001"
		const uintXLTYcDO = BigInt("1064")
		const addressPVYudox = "0x0000000000000000000000000000000000000001"
		const uintMTXHVR3 = BigInt("1193")
		const addressEhAiHBF = accounts[1]
		const uintkgVpSAE = BigInt("77")
		const addresshtftXgM = accounts[1]
		const addressKF9KSVv = await vnxManagerMC0bItG.addBearer.call(addressFCprYmN, uintAQLbSMR, {from: accounts[2]});
		const addressTPVHyEE = await vnxManagerMC0bItG.removeBearer.call(addressPVYudox, uintXLTYcDO, {from: accounts[2]});
		await vnxManagerMC0bItG.onlyOwner.call({from: accounts[0]});
		const boolwSiJGja = await vnxManagerMC0bItG.hasRole.call(addressEhAiHBF, uintMTXHVR3, {from: accounts[0]});
		const addressiwTYNCb = await vnxManagerMC0bItG.owner.call({from: accounts[5]});
		const boolDwVlrUM = await vnxManagerMC0bItG.hasRole.call(addresshtftXgM, uintkgVpSAE, {from: accounts[3]});

		await expect(vnxManagerMC0bItG.addBearer.call(addressFCprYmN, uintAQLbSMR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpnpyxJ1 = await vnxManager.new({from: accounts[2]});
		const uintHbqubbC = BigInt("718")
		const stringZ1yFh9a = "jJHDV9l8bBO78EGpARH5xLzXqlI9ts1QZ6nnP3YmNzHsT0v4V8VC"
		const addressvzBOVQ6 = "0x0000000000000000000000000000000000000001"
		const addressBqnJxUL = accounts[5]
		const addressqaa758n = accounts[0]
		const uint256F49rbnm = await vnxManagerpnpyxJ1.addRole.call(stringZ1yFh9a, uintHbqubbC, {from: accounts[4]});
		const boolCnejkB6 = await vnxManagerpnpyxJ1.transferContractOwnership.call(addressBqnJxUL, addressvzBOVQ6, {from: accounts[3]});
		await vnxManagerpnpyxJ1.renounceOwnership.call({from: accounts[0]});
		const addresslBJjGBq = await vnxManagerpnpyxJ1.transferOwnership.call(addressqaa758n, {from: accounts[5]});
		const addressVOp9YQB = await vnxManagerpnpyxJ1.owner.call({from: accounts[3]});

		await expect(vnxManagerpnpyxJ1.addRole.call(stringZ1yFh9a, uintHbqubbC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxoAy1xG = await vnxManager.new({from: accounts[0]});
		await vnxManagerxoAy1xG.onlyOwner.call({from: accounts[2]});
		const uint256OVBdOI = await vnxManagerxoAy1xG.totalRoles.call({from: accounts[1]});

		await expect(vnxManagerxoAy1xG.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerz9WQPIY = await vnxManager.new({from: accounts[5]});
		const addresstb76jVX = accounts[1]
		const addressqe5xRoz = accounts[3]
		const boolIa95NYt = await vnxManagerz9WQPIY.isOwner.call({from: accounts[3]});
		const addresseOQDG1 = await vnxManagerz9WQPIY.transferOwnership.call(addresstb76jVX, {from: accounts[2]});
		const addressWBLhbd = await vnxManagerz9WQPIY.transferOwnership.call(addressqe5xRoz, {from: accounts[1]});

		assert.equal(boolIa95NYt, false)
		await expect(vnxManagerz9WQPIY.transferOwnership.call(addresstb76jVX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpuPmc4X = await vnxManager.new({from: accounts[4]});
		const stringzAuoqBP = "8sGqTw9GqpkdKPtkQQ6tLovxN55SpX2AHDC7VSrqBKQDLBaCdJRc"
		const uintXvuC0Yc = BigInt("357")
		const addressJrBb9lT = accounts[4]
		const stringwf77xK6 = "zGqELBhOzMmnu8BEeApJms1oRlez9bDpGIGAWzrcj4NIE28xz4"
		const uint256cPA5It6 = await vnxManagerpuPmc4X.addRootRole.call(stringzAuoqBP, {from: accounts[4]});
		const addressVunbJmo = await vnxManagerpuPmc4X.removeBearer.call(addressJrBb9lT, uintXvuC0Yc, {from: accounts[3]});
		const uint256Qipy7Bn = await vnxManagerpuPmc4X.addRootRole.call(stringwf77xK6, {from: accounts[1]});

		assert.equal(uint256cPA5It6, BigInt("0"))
		await expect(vnxManagerpuPmc4X.removeBearer.call(addressJrBb9lT, uintXvuC0Yc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxoAy1xG = await vnxManager.new({from: accounts[0]});
		const uint256OVBdOI = await vnxManagerxoAy1xG.totalRoles.call({from: accounts[1]});

		assert.equal(uint256OVBdOI, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerpuPmc4X = await vnxManager.new({from: accounts[4]});
		const stringzAuoqBP = "8sGqTw9GqpkdKPtkQQ6tLovxN55SpX2AHDC7VSrqBKQDLBaCdJRc"
		const uintJo34psc = BigInt("366")
		const addressH6zdZFF = accounts[4]
		const stringwf77xK6 = "zGqELBhOzMmnu8BEeApJms1oRlez9bDpGIGAWzrcj4NIE28xz4"
		const uint256cPA5It6 = await vnxManagerpuPmc4X.addRootRole.call(stringzAuoqBP, {from: accounts[4]});
		const boolylI2GKK = await vnxManagerpuPmc4X.isAdmin.call({from: accounts[0]});
		const addressVunbJmo = await vnxManagerpuPmc4X.removeBearer.call(addressH6zdZFF, uintJo34psc, {from: accounts[3]});
		const uint256Qipy7Bn = await vnxManagerpuPmc4X.addRootRole.call(stringwf77xK6, {from: accounts[1]});

		assert.equal(boolylI2GKK, false)
		assert.equal(uint256cPA5It6, BigInt("0"))
		await expect(vnxManagerpuPmc4X.removeBearer.call(addressH6zdZFF, uintJo34psc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpuPmc4X = await vnxManager.new({from: accounts[4]});
		const stringzAuoqBP = "8sGqTw9GqpkdKPtkQQ6tLovxN55SpX2AHDC7VSrqBKQDLBaCdJRc"
		const addresshDFi6SJ = accounts[1]
		const addressHP1Qzdm = accounts[1]
		const uintTFcsyF6 = BigInt("788")
		const addressypSlSQ8 = accounts[4]
		const stringwf77xK6 = "zGqELBhOzMmnu8BEeApJms1oRlez9bDpGIGAWzrcj4NIE28xz4"
		const uint256cPA5It6 = await vnxManagerpuPmc4X.addRootRole.call(stringzAuoqBP, {from: accounts[4]});
		const boolPibOWBr = await vnxManagerpuPmc4X.transferContractOwnership.call(addressHP1Qzdm, addresshDFi6SJ, {from: accounts[2]});
		const addressVunbJmo = await vnxManagerpuPmc4X.removeBearer.call(addressypSlSQ8, uintTFcsyF6, {from: accounts[3]});
		const boolmcdEL5U = await vnxManagerpuPmc4X.isAdmin.call({from: accounts[4]});
		const uint256Qipy7Bn = await vnxManagerpuPmc4X.addRootRole.call(stringwf77xK6, {from: accounts[1]});

		assert.equal(uint256cPA5It6, BigInt("0"))
		await expect(vnxManagerpuPmc4X.transferContractOwnership.call(addressHP1Qzdm, addresshDFi6SJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpuPmc4X = await vnxManager.new({from: accounts[4]});
		const stringzAuoqBP = "8sGqTw9GqpkdKPtkQQ6tLovxN55SpX2AHDC7VSrqBKQDLBaCdJRc"
		const uinthy9zsz2 = BigInt("1627")
		const stringznS5FOj = "5bi42y3M79lOwcnUQKPu37tVhr0WeOCL8vPrfhESrFBgEs39sDbTXDEMEoPhWE9BkeMJUu"
		const uintzoIZoT7 = BigInt("366")
		const addressj2Cs50X = accounts[4]
		const stringwf77xK6 = "zGqELBhOzMmnu8BEeApJms1oRlez9bDpGIGAWzrcj4NIE28xz4"
		const uint256cPA5It6 = await vnxManagerpuPmc4X.addRootRole.call(stringzAuoqBP, {from: accounts[4]});
		const addressm7z7SnX = await vnxManagerpuPmc4X.owner.call({from: accounts[1]});
		const boolylI2GKK = await vnxManagerpuPmc4X.isAdmin.call({from: accounts[0]});
		const uint256IuIWUh3 = await vnxManagerpuPmc4X.addRole.call(stringznS5FOj, uinthy9zsz2, {from: accounts[2]});
		const addressVunbJmo = await vnxManagerpuPmc4X.removeBearer.call(addressj2Cs50X, uintzoIZoT7, {from: accounts[3]});
		const uint256Qipy7Bn = await vnxManagerpuPmc4X.addRootRole.call(stringwf77xK6, {from: accounts[1]});

		assert.equal(addressm7z7SnX, 0x9eCEc607A9085f8335b2480D5721EaB77a42fB6f)
		assert.equal(boolylI2GKK, false)
		assert.equal(uint256cPA5It6, BigInt("0"))
		await expect(vnxManagerpuPmc4X.addRole.call(stringznS5FOj, uinthy9zsz2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerKZMl5Iu = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDxXu5OD = BigInt("1335")
		const stringlKzNntS = "3V31i2O5WmtDz8wqXsVN3tXYoLW6k7Y8LAo94kDe9L39qolugqm16qCnAr90JS"
		const uint256bTPlFQC = await vnxManagerKZMl5Iu.addRole.call(stringlKzNntS, uintDxXu5OD, {from: accounts[2]});
		const booldlVSB9B = await vnxManagerKZMl5Iu.isAdmin.call({from: accounts[2]});
		await vnxManagerKZMl5Iu.renounceOwnership.call({from: accounts[5]});
		const boolXg3d1eT = await vnxManagerKZMl5Iu.isAdmin.call({from: accounts[3]});
		await vnxManagerKZMl5Iu.onlyOwner.call({from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerWjN5VpL = await vnxManager.new({from: accounts[0]});
		const uintilOWZmk = BigInt("901")
		const addressPFYHiuL = accounts[4]
		const addressRd0jeNq = accounts[5]
		const uintr9DVOV6 = BigInt("311")
		const addressMxAcBhg = accounts[2]
		const string4fxOFh = "AfP81LIsiVyx8PBNGOJJCHhTszDfzQYwzWBfmv011ACIy2Kf"
		const booluM4K0te = await vnxManagerWjN5VpL.hasRole.call(addressPFYHiuL, uintilOWZmk, {from: "0x0000000000000000000000000000000000000001"});
		const addressBDN2BfS = await vnxManagerWjN5VpL.transferOwnership.call(addressRd0jeNq, {from: accounts[0]});
		const addressAq8vCvd = await vnxManagerWjN5VpL.removeBearer.call(addressMxAcBhg, uintr9DVOV6, {from: accounts[4]});
		await vnxManagerWjN5VpL.onlyOwner.call({from: accounts[0]});
		const uint256lqnCGQk = await vnxManagerWjN5VpL.addRootRole.call(string4fxOFh, {from: accounts[4]});
		const addressyzVI3Bc = await vnxManagerWjN5VpL.owner.call({from: accounts[3]});

		assert.equal(booluM4K0te, false)
		await expect(vnxManagerWjN5VpL.removeBearer.call(addressMxAcBhg, uintr9DVOV6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxoAy1xG = await vnxManager.new({from: accounts[0]});
		const uintYyCRHoG = BigInt("911")
		const addresshJA0VFK = accounts[1]
		const uint256OVBdOI = await vnxManagerxoAy1xG.totalRoles.call({from: accounts[1]});
		await vnxManagerxoAy1xG.renounceOwnership.call({from: accounts[0]});
		const boolkyO8PiU = await vnxManagerxoAy1xG.hasRole.call(addresshJA0VFK, uintYyCRHoG, {from: accounts[0]});

		assert.equal(uint256OVBdOI, BigInt("1"))
		await expect(vnxManagerxoAy1xG.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxoAy1xG = await vnxManager.new({from: accounts[0]});
		const addressxpwjpMO = accounts[2]
		const addressceKbUT5 = accounts[0]
		const addressac3Ya9P = accounts[5]
		const addressZByiawf = accounts[4]
		const uint256OVBdOI = await vnxManagerxoAy1xG.totalRoles.call({from: accounts[1]});
		const boolJrQtgxb = await vnxManagerxoAy1xG.transferContractOwnership.call(addressceKbUT5, addressxpwjpMO, {from: accounts[0]});
		await vnxManagerxoAy1xG.onlyOwner.call({from: accounts[0]});
		await vnxManagerxoAy1xG.onlyAdmin.call({from: accounts[3]});
		const boolKYeLqef = await vnxManagerxoAy1xG.transferContractOwnership.call(addressZByiawf, addressac3Ya9P, {from: accounts[2]});

		assert.equal(uint256OVBdOI, BigInt("1"))
		await expect(vnxManagerxoAy1xG.transferContractOwnership.call(addressceKbUT5, addressxpwjpMO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})