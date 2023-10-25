const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagermkbAPPV = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHxl8JBr = BigInt("19")
		const addressFXxLI1p = accounts[3]
		const uintIOVycVP = BigInt("1500")
		const addressWeCcWh1 = accounts[1]
		const boolayIBBow = await vnxManagermkbAPPV.isOwner.call({from: accounts[0]});
		const boolGiKQCP = await vnxManagermkbAPPV.hasRole.call(addressFXxLI1p, uintHxl8JBr, {from: accounts[0]});
		await vnxManagermkbAPPV.onlyOwner.call({from: accounts[5]});
		const addressDuPVuXM = await vnxManagermkbAPPV.addBearer.call(addressWeCcWh1, uintIOVycVP, {from: accounts[0]});
		await vnxManagermkbAPPV.onlyOwner.call({from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const uintS4oH2d9 = BigInt("1237")
		const stringMUpLqZH = "x2O07GPf1EXPS1tP035YpX45EMyXjeIjESvGEMBDW6EQdsB8coVm0kq8Ux7"
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});
		const uint256y51GYPM = await vnxManagerGkepR4A.addRole.call(stringMUpLqZH, uintS4oH2d9, {from: accounts[2]});

		await expect(vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerJA9SMBg = await vnxManager.new({from: accounts[3]});
		const uintKjKVsB = BigInt("975")
		const stringoaU70N = "4lcZWvyNIvZGS"
		const uintPWlzbfY = BigInt("967")
		const addresscm78F3Y = accounts[1]
		const uint256N7vRXey = await vnxManagerJA9SMBg.addRole.call(stringoaU70N, uintKjKVsB, {from: accounts[3]});
		const uint256N3AY6J4 = await vnxManagerJA9SMBg.totalRoles.call({from: accounts[3]});
		await vnxManagerJA9SMBg.renounceOwnership.call({from: accounts[4]});
		const addressXG0FsvE = await vnxManagerJA9SMBg.removeBearer.call(addresscm78F3Y, uintPWlzbfY, {from: accounts[0]});

		await expect(vnxManagerJA9SMBg.addRole.call(stringoaU70N, uintKjKVsB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerHobVFM7 = await vnxManager.new({from: accounts[2]});
		const uintBVTujLf = BigInt("1221")
		const addressLvHrH5S = accounts[5]
		const uintmyUxamg = BigInt("1084")
		const stringtRrxax1 = "HImFzQ2pakIA7R5dkRiwdz905o64ipkvpvVg33XThLA9zOybA1Zz1c1IUoNTGb2GKW74"
		const addressAzWWB1i = await vnxManagerHobVFM7.addBearer.call(addressLvHrH5S, uintBVTujLf, {from: accounts[0]});
		const uint256IOedhK = await vnxManagerHobVFM7.addRole.call(stringtRrxax1, uintmyUxamg, {from: accounts[4]});
		await vnxManagerHobVFM7.renounceOwnership.call({from: accounts[2]});

		await expect(vnxManagerHobVFM7.addBearer.call(addressLvHrH5S, uintBVTujLf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerca9J3vC = await vnxManager.new({from: accounts[2]});
		const addressgTcIPKN = accounts[1]
		const uintZXDpbsL = BigInt("758")
		const addressyGykodX = accounts[0]
		const uintG7MgA43 = BigInt("240")
		const addressRlQPTvJ = "0x0000000000000000000000000000000000000001"
		const addressxFUUaD8 = await vnxManagerca9J3vC.transferOwnership.call(addressgTcIPKN, {from: accounts[0]});
		await vnxManagerca9J3vC.onlyAdmin.call({from: accounts[2]});
		const addressJ2tBo02 = await vnxManagerca9J3vC.addBearer.call(addressyGykodX, uintZXDpbsL, {from: accounts[1]});
		const addressZQ0qRI = await vnxManagerca9J3vC.addBearer.call(addressRlQPTvJ, uintG7MgA43, {from: accounts[4]});

		await expect(vnxManagerca9J3vC.transferOwnership.call(addressgTcIPKN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const uintiUVbIi1 = BigInt("1253")
		const stringMUpLqZH = "x2O07GPf1EXPS1tP035YpX45EMyXjeIjESvGEMBDW6EQdsB8coVm0kq8Ux7"
		await vnxManagerGkepR4A.renounceOwnership.call({from: accounts[1]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});
		const uint256y51GYPM = await vnxManagerGkepR4A.addRole.call(stringMUpLqZH, uintiUVbIi1, {from: accounts[2]});

		await expect(vnxManagerGkepR4A.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const uintdgSKenK = BigInt("1079")
		const addressVVl4DBP = accounts[5]
		const boolRuiPg0s = await vnxManagerGkepR4A.hasRole.call(addressVVl4DBP, uintdgSKenK, {from: accounts[1]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[2]});

		assert.equal(boolRuiPg0s, false)
		await expect(vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const uint256pLutUd = await vnxManagerGkepR4A.totalRoles.call({from: accounts[5]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256pLutUd, BigInt("1"))
		await expect(vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const addressKSVcOcN = accounts[3]
		const addressXQ2XuGy = "0x0000000000000000000000000000000000000001"
		const boolJBTLXKj = await vnxManagerGkepR4A.transferContractOwnership.call(addressXQ2XuGy, addressKSVcOcN, {from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerGkepR4A.renounceOwnership.call({from: accounts[0]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});

		await expect(vnxManagerGkepR4A.transferContractOwnership.call(addressXQ2XuGy, addressKSVcOcN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const addressw3yfuLx = accounts[0]
		const addressiN1Rvbk = accounts[0]
		const bool5a5chA = await vnxManagerGkepR4A.transferContractOwnership.call(addressiN1Rvbk, addressw3yfuLx, {from: accounts[1]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});

		await expect(vnxManagerGkepR4A.transferContractOwnership.call(addressiN1Rvbk, addressw3yfuLx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const addressb8BNutH = await vnxManagerGkepR4A.owner.call({from: accounts[0]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});

		assert.equal(addressb8BNutH, 0x54578eC98434802F22e2D0528700D62f1809AF7E)
		await expect(vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagersIuGmdP = await vnxManager.new({from: accounts[0]});
		const addressU8r5zx5 = accounts[4]
		const uintaNq6yfv = BigInt("31")
		const addressjz2q1jQ = accounts[3]
		const uintOis4Yo9 = BigInt("1275")
		const addressB3tGoZb = accounts[3]
		const uintPE4rwSc = BigInt("1514")
		const stringqQjXFXH = "3QVxlQPmDKJ6rktPeFx5qibdDwYr83RUPt4Ijf147Sc3x8a1WVhK16XxB9nzNumBJddVsS7"
		const addressth8i76 = await vnxManagersIuGmdP.transferOwnership.call(addressU8r5zx5, {from: accounts[0]});
		const addressdo7XFTI = await vnxManagersIuGmdP.addBearer.call(addressjz2q1jQ, uintaNq6yfv, {from: accounts[3]});
		const addressAKPhTg = await vnxManagersIuGmdP.addBearer.call(addressB3tGoZb, uintOis4Yo9, {from: accounts[0]});
		await vnxManagersIuGmdP.onlyAdmin.call({from: accounts[4]});
		const boolvdXuovu = await vnxManagersIuGmdP.isOwner.call({from: accounts[0]});
		const uint256YpqFldT = await vnxManagersIuGmdP.addRole.call(stringqQjXFXH, uintPE4rwSc, {from: accounts[0]});

		await expect(vnxManagersIuGmdP.addBearer.call(addressjz2q1jQ, uintaNq6yfv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGkepR4A = await vnxManager.new({from: accounts[1]});
		const uintaxnKtOu = BigInt("1274")
		const addressMeRCNXH = accounts[4]
		const uintgamDm0y = BigInt("1558")
		const addressHObXaFi = accounts[2]
		const address12VrxN = await vnxManagerGkepR4A.removeBearer.call(addressMeRCNXH, uintaxnKtOu, {from: "0x0000000000000000000000000000000000000001"});
		const addressAanj8PA = await vnxManagerGkepR4A.addBearer.call(addressHObXaFi, uintgamDm0y, {from: accounts[1]});
		await vnxManagerGkepR4A.onlyOwner.call({from: accounts[5]});

		await expect(vnxManagerGkepR4A.removeBearer.call(addressMeRCNXH, uintaxnKtOu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})