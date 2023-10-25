const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintE1TyV9B = BigInt("171")
		const BancorV2_ZapIn_General_V1_1AUecewU = await BancorV2_ZapIn_General_V1_1.new(uintE1TyV9B, {from: accounts[5]});
		const addressfxIoGmh = accounts[3]
		const uintzPsWr9 = BigInt("608")
		const bytewqbfAmV = "0x04111904171d0c"
		const addressQ2if4K2 = accounts[0]
		const addressltkP7Dy = "0x0000000000000000000000000000000000000001"
		const uintesMc78h = BigInt("503")
		const uinttmHXlLd = BigInt("1519")
		const addressqjODOK = accounts[0]
		const addressQ1KdBC0 = accounts[0]
		const addressfMBGPwn = accounts[3]
//		const addressj1s8Udn = await BancorV2_ZapIn_General_V1_1AUecewU.transferOwnership.call(addressfxIoGmh, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1AUecewU.nonReentrant.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1AUecewU.renounceOwnership.call({from: accounts[1]});
//		const uint16mF757u = await BancorV2_ZapIn_General_V1_1AUecewU.set_new_goodwill.call(uintzPsWr9, {from: accounts[3]});
//		const uint256Js2QLEy = await BancorV2_ZapIn_General_V1_1AUecewU.ZapInSingleSided.call(addressfMBGPwn, addressQ1KdBC0, addressqjODOK, uinttmHXlLd, uintesMc78h, addressltkP7Dy, addressQ2if4K2, bytewqbfAmV, {from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1AUecewU.transferOwnership.call(addressfxIoGmh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintIj5qoTt = BigInt("1514")
		const BancorV2_ZapIn_General_V1_1UF38NDl = await BancorV2_ZapIn_General_V1_1.new(uintIj5qoTt, {from: accounts[0]});
		const addressBDQaBDm = accounts[1]
		const byteQ68ImmP = "0x100c1701111c1b1a0e"
		const addressdpBI0nN = accounts[1]
		const addresszYQiMI = accounts[0]
		const uintdp8OD7Q = BigInt("1196")
		const uintfLm3e2Q = BigInt("611")
		const addressEZxGilv = accounts[1]
		const addressIkptWN6 = accounts[2]
		const addressLm2wkMv = accounts[0]
		const uintxYP9PkX = BigInt("1869")
//		const addressQQRYEWP = await BancorV2_ZapIn_General_V1_1UF38NDl.inCaseTokengetsStuck.call(addressBDQaBDm, {from: accounts[0]});
//		const uint256cMwV7AF = await BancorV2_ZapIn_General_V1_1UF38NDl.ZapInSingleSided.call(addressLm2wkMv, addressIkptWN6, addressEZxGilv, uintfLm3e2Q, uintdp8OD7Q, addresszYQiMI, addressdpBI0nN, byteQ68ImmP, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1UF38NDl.onlyOwner.call({from: accounts[2]});
//		const uint16GeoFnhk = await BancorV2_ZapIn_General_V1_1UF38NDl.set_new_goodwill.call(uintxYP9PkX, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1UF38NDl.inCaseTokengetsStuck.call(addressBDQaBDm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintXApnlt4 = BigInt("1408")
		const BancorV2_ZapIn_General_V1_1R43nsbM = await BancorV2_ZapIn_General_V1_1.new(uintXApnlt4, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1R43nsbM.toggleContractActive.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1R43nsbM.onlyOwner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1R43nsbM.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintVKzuLiz = BigInt("1103")
		const BancorV2_ZapIn_General_V1_1gcMOLAF = await BancorV2_ZapIn_General_V1_1.new(uintVKzuLiz, {from: accounts[1]});
		const byteS4qPqkZ = "0x1b1d18"
		const addressCFmabMT = accounts[1]
		const addressVixcQvE = accounts[1]
		const uintpCLABsc = BigInt("321")
		const uintHcmBTKK = BigInt("498")
		const addressGNf2dIn = accounts[5]
		const addressMimm7Ee = accounts[0]
		const addressI47EQE4 = accounts[3]
		const uintpTIcoHN = BigInt("66")
		const addressuUqqgnN = await BancorV2_ZapIn_General_V1_1gcMOLAF.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1gcMOLAF.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oWjCc9c = await BancorV2_ZapIn_General_V1_1gcMOLAF.ZapInSingleSided.call(addressI47EQE4, addressMimm7Ee, addressGNf2dIn, uintHcmBTKK, uintpCLABsc, addressVixcQvE, addressCFmabMT, byteS4qPqkZ, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1gcMOLAF.renounceOwnership.call({from: accounts[2]});
//		const uint16UUk3tx4 = await BancorV2_ZapIn_General_V1_1gcMOLAF.set_new_goodwill.call(uintpTIcoHN, {from: accounts[3]});

		assert.equal(addressuUqqgnN, 0x3d0214932CB4f94eE7e9260a73B12ef46aAfBFFb)
		await expect(BancorV2_ZapIn_General_V1_1gcMOLAF.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrNPQY3b = BigInt("1354")
		const BancorV2_ZapIn_General_V1_1V1d8ZiM = await BancorV2_ZapIn_General_V1_1.new(uintrNPQY3b, {from: accounts[2]});
		const uintPRsmS65 = BigInt("1336")
		const addressO3nxbT9 = accounts[0]
		const boolipRip2 = await BancorV2_ZapIn_General_V1_1V1d8ZiM.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint16IHVqYrd = await BancorV2_ZapIn_General_V1_1V1d8ZiM.set_new_goodwill.call(uintPRsmS65, {from: accounts[2]});
		const addresseOOsVtZ = await BancorV2_ZapIn_General_V1_1V1d8ZiM.transferOwnership.call(addressO3nxbT9, {from: accounts[2]});
		const boolsCI7db = await BancorV2_ZapIn_General_V1_1V1d8ZiM.isOwner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1V1d8ZiM.nonReentrant.call({from: accounts[0]});

		assert.equal(boolipRip2, false)
		assert.equal(boolsCI7db, false)
		await expect(BancorV2_ZapIn_General_V1_1V1d8ZiM.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUDAT97z = BigInt("1232")
		const BancorV2_ZapIn_General_V1_1nU6INrS = await BancorV2_ZapIn_General_V1_1.new(uintUDAT97z, {from: accounts[3]});
		const byteqS5VdaH = "0x1f1e1c030203091d1b00041a110d"
		const addressUZg2NXl = accounts[2]
		const addressirPcQWr = accounts[4]
		const uintSm2XRzG = BigInt("984")
		const uintcKEMFdN = BigInt("1134")
		const addresshc7AQbq = accounts[3]
		const addressyRU5OYB = accounts[0]
		const addressLndZs92 = accounts[1]
		const addressXku8U0e = accounts[2]
		const bytegNrPGMh = "0x0419010c0d04080e110c07070f1409160808010b0a1d1c0a"
		const addressA1jdCaW = accounts[3]
		const addressNNg5oo0 = accounts[2]
		const uintKxRSrbs = BigInt("1582")
		const uintPuLjQn4 = BigInt("352")
		const addressv5zgqIR = accounts[4]
		const addressY3GtXXR = accounts[0]
		const addressONrISB1 = accounts[1]
//		const uint2564zNblE = await BancorV2_ZapIn_General_V1_1nU6INrS.ZapInSingleSided.call(addressLndZs92, addressyRU5OYB, addresshc7AQbq, uintcKEMFdN, uintSm2XRzG, addressirPcQWr, addressUZg2NXl, byteqS5VdaH, {from: accounts[1]});
//		const addressIpex2RT = await BancorV2_ZapIn_General_V1_1nU6INrS.transferOwnership.call(addressXku8U0e, {from: accounts[4]});
//		const addressYQedHO = await BancorV2_ZapIn_General_V1_1nU6INrS.owner.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1nU6INrS.renounceOwnership.call({from: accounts[2]});
//		const uint256yF9NNYf = await BancorV2_ZapIn_General_V1_1nU6INrS.ZapInSingleSided.call(addressONrISB1, addressY3GtXXR, addressv5zgqIR, uintPuLjQn4, uintKxRSrbs, addressNNg5oo0, addressA1jdCaW, bytegNrPGMh, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1nU6INrS.ZapInSingleSided.call(addressLndZs92, addressyRU5OYB, addresshc7AQbq, uintcKEMFdN, uintSm2XRzG, addressirPcQWr, addressUZg2NXl, byteqS5VdaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintBXBJjiW = BigInt("1522")
		const BancorV2_ZapIn_General_V1_14vTu7J = await BancorV2_ZapIn_General_V1_1.new(uintBXBJjiW, {from: "0x0000000000000000000000000000000000000001"});
		const addressWKMrue6 = accounts[1]
		const addressqCIryDZ = await BancorV2_ZapIn_General_V1_14vTu7J.transferOwnership.call(addressWKMrue6, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_14vTu7J.nonReentrant.call({from: accounts[5]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJhABR0j = BigInt("1514")
		const BancorV2_ZapIn_General_V1_1UF38NDl = await BancorV2_ZapIn_General_V1_1.new(uintJhABR0j, {from: accounts[0]});
		const bytey88KMvj = "0x100c1701111c1b1a0e"
		const addressTGLtl4O = accounts[1]
		const addressn1Cc1h8 = accounts[0]
		const uintHLSyuw4 = BigInt("1196")
		const uintxuJzOwL = BigInt("611")
		const addresstrqqfO9 = accounts[1]
		const addressO7Sr166 = accounts[2]
		const addressp2yBtMa = accounts[0]
//		await BancorV2_ZapIn_General_V1_1UF38NDl.withdraw.call({from: accounts[0]});
//		const uint256cMwV7AF = await BancorV2_ZapIn_General_V1_1UF38NDl.ZapInSingleSided.call(addressp2yBtMa, addressO7Sr166, addresstrqqfO9, uintxuJzOwL, uintHLSyuw4, addressn1Cc1h8, addressTGLtl4O, bytey88KMvj, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1UF38NDl.onlyOwner.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1UF38NDl.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})