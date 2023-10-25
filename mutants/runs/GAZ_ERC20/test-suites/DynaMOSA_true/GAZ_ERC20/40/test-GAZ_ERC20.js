const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20P5D6qxK = await GAZ_ERC20.new({from: accounts[4]});
		const addressdEdCEdp = accounts[4]
		const uintfrXnnPk = BigInt("817")
		const addressoXGaAMw = accounts[2]
		const uinta4X1VKg = BigInt("1700")
		const addresspOSa332 = accounts[2]
		const uintcc7lxbv = BigInt("1004")
		const addressichLE3K = accounts[4]
		const boolqvN0eR5 = await GAZ_ERC20P5D6qxK.approve.call(addressdEdCEdp, {from: "0x0000000000000000000000000000000000000001"});
		const boolJntZYkB = await GAZ_ERC20P5D6qxK.approve.call(addressoXGaAMw, uintfrXnnPk, {from: accounts[4]});
		const boolx440hd7 = await GAZ_ERC20P5D6qxK.approve.call(addresspOSa332, uinta4X1VKg, {from: accounts[0]});
		const boolH00iAoH = await GAZ_ERC20P5D6qxK.transfer.call(addressichLE3K, uintcc7lxbv, {from: accounts[4]});

		await expect(GAZ_ERC20P5D6qxK.approve.call(addressdEdCEdp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pPRC3VQ = await GAZ_ERC20.new({from: accounts[5]});
		const uintKuwAp8Q = BigInt("98")
		const addressm1NNV4 = accounts[1]
		const uintVQ5vAp = BigInt("1945")
		const addressW4fpyhk = accounts[5]
		const uintiWFD3Av = BigInt("154")
		const addressnJ5l9q = accounts[4]
		const addressEy1qlWM = accounts[1]
		const uintpYIE8MC = BigInt("1358")
		const addressU47Mpjd = accounts[3]
		const boolAPrEyyw = await GAZ_ERC20pPRC3VQ.approve.call(addressm1NNV4, uintKuwAp8Q, {from: accounts[1]});
		const boolIKYbuCx = await GAZ_ERC20pPRC3VQ.transfer.call(addressW4fpyhk, uintVQ5vAp, {from: accounts[0]});
		const boolJNI43Cm = await GAZ_ERC20pPRC3VQ.transferFrom.call(addressEy1qlWM, addressnJ5l9q, uintiWFD3Av, {from: accounts[2]});
		const boolWrpemQv = await GAZ_ERC20pPRC3VQ.approve.call(addressU47Mpjd, uintpYIE8MC, {from: accounts[4]});

		assert.equal(boolAPrEyyw, true)
		await expect(GAZ_ERC20pPRC3VQ.transfer.call(addressW4fpyhk, uintVQ5vAp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20HC72AHm = await GAZ_ERC20.new({from: accounts[3]});
		const addressz6i6fT4 = accounts[1]
		const uintrCs1msA = BigInt("559")
		const addressPu6nJYI = accounts[4]
		const uintES9LqIU = BigInt("1732")
		const addressSISEjWa = accounts[4]
		const uintgBSNSxA = BigInt("230")
		const addressbseXgBb = accounts[3]
		const boolIeM0VfP = await GAZ_ERC20HC72AHm.approve.call(addressz6i6fT4, {from: accounts[5]});
		const boolyPOdaAv = await GAZ_ERC20HC72AHm.approve.call(addressPu6nJYI, uintrCs1msA, {from: accounts[4]});
		const boolf4deul2 = await GAZ_ERC20HC72AHm.transfer.call(addressSISEjWa, uintES9LqIU, {from: accounts[0]});
		const boolQ77wvt5 = await GAZ_ERC20HC72AHm.approve.call(addressbseXgBb, uintgBSNSxA, {from: accounts[2]});

		await expect(GAZ_ERC20HC72AHm.approve.call(addressz6i6fT4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20mVLcKcv = await GAZ_ERC20.new({from: accounts[3]});
		const addressc91flNM = accounts[3]
		const uintQK2Gr6 = BigInt("1488")
		const addressCyoJ9tP = accounts[2]
		const booloZMualU = await GAZ_ERC20mVLcKcv.approve.call(addressc91flNM, {from: accounts[2]});
		const booltwfFoc5 = await GAZ_ERC20mVLcKcv.approve.call(addressCyoJ9tP, uintQK2Gr6, {from: accounts[3]});

		await expect(GAZ_ERC20mVLcKcv.approve.call(addressc91flNM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Ze5SUPH = await GAZ_ERC20.new({from: accounts[3]});
		const addressbDrqvpc = accounts[3]
		const uintmHVudPJ = BigInt("576")
		const addressp7fxs4A = accounts[4]
		const uintV17Vdi7 = BigInt("10")
		const addressHVOIMVz = accounts[3]
		const uintCUtNK6i = BigInt("1446")
		const addressjx0WmKW = accounts[0]
		const addressu7kZqxx = accounts[0]
		const uintXmxiUe = BigInt("1203")
		const addressjBmaJ5b = accounts[5]
		const uinteM7sARQ = BigInt("1443")
		const addressWPmKcEr = accounts[3]
		const addressPFtjQol = accounts[3]
		const uinte22uvPt = BigInt("1943")
		const addresslNgBROA = accounts[3]
		const booltFG10Tt = await GAZ_ERC20Ze5SUPH.approve.call(addressbDrqvpc, {from: accounts[3]});
		const boolBL36bOG = await GAZ_ERC20Ze5SUPH.transfer.call(addressp7fxs4A, uintmHVudPJ, {from: accounts[1]});
		const boolnuO6bpx = await GAZ_ERC20Ze5SUPH.approve.call(addressHVOIMVz, uintV17Vdi7, {from: accounts[5]});
		const boolFPOpbHj = await GAZ_ERC20Ze5SUPH.transfer.call(addressjx0WmKW, uintCUtNK6i, {from: accounts[5]});
		const boolUBoI1Vf = await GAZ_ERC20Ze5SUPH.approve.call(addressu7kZqxx, {from: accounts[3]});
		const boolXsBYOWW = await GAZ_ERC20Ze5SUPH.approve.call(addressjBmaJ5b, uintXmxiUe, {from: accounts[4]});
		const bool21g12f = await GAZ_ERC20Ze5SUPH.transferFrom.call(addressPFtjQol, addressWPmKcEr, uinteM7sARQ, {from: accounts[3]});
		const boolCAP4PJc = await GAZ_ERC20Ze5SUPH.approve.call(addresslNgBROA, uinte22uvPt, {from: accounts[5]});

		await expect(GAZ_ERC20Ze5SUPH.approve.call(addressbDrqvpc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pPRC3VQ = await GAZ_ERC20.new({from: accounts[5]});
		const uintXyetg3h = BigInt("98")
		const addressU3ZSqTb = accounts[1]
		const uintstKb4mY = BigInt("154")
		const addressC9rpDGG = accounts[4]
		const addressAGusawP = accounts[1]
		const uintBtbblg = BigInt("1358")
		const addressk6cV3s5 = accounts[3]
		const boolAPrEyyw = await GAZ_ERC20pPRC3VQ.approve.call(addressU3ZSqTb, uintXyetg3h, {from: accounts[1]});
		const boolJNI43Cm = await GAZ_ERC20pPRC3VQ.transferFrom.call(addressAGusawP, addressC9rpDGG, uintstKb4mY, {from: accounts[2]});
		const boolWrpemQv = await GAZ_ERC20pPRC3VQ.approve.call(addressk6cV3s5, uintBtbblg, {from: accounts[4]});

		assert.equal(boolAPrEyyw, true)
		await expect(GAZ_ERC20pPRC3VQ.transferFrom.call(addressAGusawP, addressC9rpDGG, uintstKb4mY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20FRspNgH = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMTkhXaW = BigInt("647")
		const addressYtiiN17 = accounts[5]
		const uintqdhOBOV = BigInt("1387")
		const addressXkRv8vJ = accounts[3]
		const boolgeYcX7i = await GAZ_ERC20FRspNgH.transfer.call(addressYtiiN17, uintMTkhXaW, {from: accounts[1]});
		const boolYbQgmI = await GAZ_ERC20FRspNgH.approve.call(addressXkRv8vJ, uintqdhOBOV, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pPRC3VQ = await GAZ_ERC20.new({from: accounts[5]});
		const uintbqengTb = BigInt("559")
		const addressnd83YbE = accounts[4]
		const uintFcgVVQA = BigInt("98")
		const addressAjaJ38S = accounts[2]
		const uintReBHIE5 = BigInt("278")
		const addressWRAQsJp = accounts[1]
		const uintRy7cwQ5 = BigInt("154")
		const addressvxVfL7P = accounts[4]
		const addressY7Gaan = accounts[1]
		const uintrDydfAo = BigInt("1358")
		const addressbNFzaq4 = accounts[3]
		const uintBfYITwf = BigInt("1174")
		const addressb1ODCNv = accounts[1]
		const booloNljYXN = await GAZ_ERC20pPRC3VQ.transfer.call(addressnd83YbE, uintbqengTb, {from: accounts[5]});
		const boolAPrEyyw = await GAZ_ERC20pPRC3VQ.approve.call(addressAjaJ38S, uintFcgVVQA, {from: accounts[1]});
		const boolXGhS9M = await GAZ_ERC20pPRC3VQ.approve.call(addressWRAQsJp, uintReBHIE5, {from: "0x0000000000000000000000000000000000000001"});
		const boolJNI43Cm = await GAZ_ERC20pPRC3VQ.transferFrom.call(addressY7Gaan, addressvxVfL7P, uintRy7cwQ5, {from: accounts[2]});
		const boolWrpemQv = await GAZ_ERC20pPRC3VQ.approve.call(addressbNFzaq4, uintrDydfAo, {from: accounts[4]});
		const boolsrlAFf9 = await GAZ_ERC20pPRC3VQ.transfer.call(addressb1ODCNv, uintBfYITwf, {from: accounts[3]});

		assert.equal(boolAPrEyyw, true)
		assert.equal(boolXGhS9M, true)
		assert.equal(booloNljYXN, true)
		await expect(GAZ_ERC20pPRC3VQ.transferFrom.call(addressY7Gaan, addressvxVfL7P, uintRy7cwQ5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pPRC3VQ = await GAZ_ERC20.new({from: accounts[5]});
		const uintV9dVCLx = BigInt("1499")
		const addressP4PReZ0 = accounts[0]
		const uintFKrM9h = BigInt("98")
		const addressINzDOxa = accounts[2]
		const address6u42lJ = accounts[1]
		const uintpXBD06Q = BigInt("154")
		const addressFxqKNyZ = accounts[4]
		const addressRwjI3V9 = accounts[1]
		const uintAPnig7V = BigInt("1358")
		const addressEdODysl = accounts[3]
		const boolIqzKMNq = await GAZ_ERC20pPRC3VQ.approve.call(addressP4PReZ0, uintV9dVCLx, {from: accounts[2]});
		const boolAPrEyyw = await GAZ_ERC20pPRC3VQ.approve.call(addressINzDOxa, uintFKrM9h, {from: accounts[1]});
		const boolohQ57BA = await GAZ_ERC20pPRC3VQ.approve.call(address6u42lJ, {from: accounts[4]});
		const boolJNI43Cm = await GAZ_ERC20pPRC3VQ.transferFrom.call(addressRwjI3V9, addressFxqKNyZ, uintpXBD06Q, {from: accounts[2]});
		const boolWrpemQv = await GAZ_ERC20pPRC3VQ.approve.call(addressEdODysl, uintAPnig7V, {from: accounts[4]});

		assert.equal(boolAPrEyyw, true)
		assert.equal(boolIqzKMNq, true)
		await expect(GAZ_ERC20pPRC3VQ.approve.call(address6u42lJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20t642TqQ = await GAZ_ERC20.new({from: accounts[2]});
		const uintxZCQ8cP = BigInt("495")
		const addressph5bNAO = accounts[0]
		const uintKVt9Tnf = BigInt("1653")
		const addressfUF0tE8 = accounts[4]
		const addressjWKj4c0 = accounts[0]
		const uintEGYfnUQ = BigInt("622")
		const addressLJBiSVD = accounts[4]
		const boolaTsTlyI = await GAZ_ERC20t642TqQ.approve.call(addressph5bNAO, uintxZCQ8cP, {from: accounts[3]});
		const booldFlsAlF = await GAZ_ERC20t642TqQ.approve.call(addressfUF0tE8, uintKVt9Tnf, {from: accounts[2]});
		const boolzcqtdgp = await GAZ_ERC20t642TqQ.approve.call(addressjWKj4c0, {from: accounts[0]});
		const boolBqRNrDN = await GAZ_ERC20t642TqQ.transfer.call(addressLJBiSVD, uintEGYfnUQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaTsTlyI, true)
		assert.equal(booldFlsAlF, true)
		await expect(GAZ_ERC20t642TqQ.approve.call(addressjWKj4c0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pPRC3VQ = await GAZ_ERC20.new({from: accounts[5]});
		const uintcRnTHI = BigInt("98")
		const addressc6m1h9 = accounts[1]
		const addressASuhVPq = accounts[3]
		const uintRfRPnPS = BigInt("1376")
		const addressS0Vk1RV = accounts[1]
		const uintlceAJkW = BigInt("154")
		const addressa94FIoK = accounts[5]
		const addressFFpOtlt = accounts[1]
		const uinteL7BmnW = BigInt("1925")
		const addressVht2VOO = accounts[3]
		const addressb7yK0bH = accounts[1]
		const uintwe6r28 = BigInt("1041")
		const addressdiI9Cpq = "0x0000000000000000000000000000000000000001"
		const uintYI7tf5 = BigInt("1358")
		const addresst7XI9g2 = accounts[4]
		const boolAPrEyyw = await GAZ_ERC20pPRC3VQ.approve.call(addressc6m1h9, uintcRnTHI, {from: accounts[1]});
		const boolV5AD5H4 = await GAZ_ERC20pPRC3VQ.approve.call(addressASuhVPq, {from: accounts[1]});
		const boolObvdbSG = await GAZ_ERC20pPRC3VQ.approve.call(addressS0Vk1RV, uintRfRPnPS, {from: accounts[2]});
		const boolJNI43Cm = await GAZ_ERC20pPRC3VQ.transferFrom.call(addressFFpOtlt, addressa94FIoK, uintlceAJkW, {from: accounts[2]});
		const boolpCOdaH9 = await GAZ_ERC20pPRC3VQ.transferFrom.call(addressb7yK0bH, addressVht2VOO, uinteL7BmnW, {from: accounts[3]});
		const boolQgv5EC = await GAZ_ERC20pPRC3VQ.transfer.call(addressdiI9Cpq, uintwe6r28, {from: accounts[1]});
		const boolWrpemQv = await GAZ_ERC20pPRC3VQ.approve.call(addresst7XI9g2, uintYI7tf5, {from: accounts[4]});

		assert.equal(boolAPrEyyw, true)
		await expect(GAZ_ERC20pPRC3VQ.approve.call(addressASuhVPq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})