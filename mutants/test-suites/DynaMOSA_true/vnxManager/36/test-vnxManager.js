const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManageryZhFvhK = await vnxManager.new({from: accounts[0]});
		const uintcoA6uAw = BigInt("1851")
		const addressC66s5l = accounts[0]
		const uintqEKajU = BigInt("1729")
		const stringIMxLpB6 = "BRO8P5USa4mCkK1pSYJpLD8e2sPwfIlcuJkctJSa7NaKJOSMV0mdmcfdE1irY2yuCNeQgBr5BgmXCGRdPpeu0c92V5DYzJ2"
		const addresspkI09d4 = accounts[2]
		const addresshXWx5tB = accounts[1]
		const addresskoKcdWH = accounts[4]
		const addressvrS1oZP = accounts[3]
//		const addressTKLEXz = await vnxManageryZhFvhK.addBearer.call(addressC66s5l, uintcoA6uAw, {from: accounts[3]});
//		const addressi6vbwbo = await vnxManageryZhFvhK.owner.call({from: accounts[3]});
//		const uint256cvyOGmm = await vnxManageryZhFvhK.addRole.call(stringIMxLpB6, uintqEKajU, {from: accounts[0]});
//		const boolYLvHK3Z = await vnxManageryZhFvhK.transferContractOwnership.call(addresshXWx5tB, addresspkI09d4, {from: accounts[2]});
//		const bool5xQbpZ = await vnxManageryZhFvhK.transferContractOwnership.call(addressvrS1oZP, addresskoKcdWH, {from: accounts[3]});

		await expect(vnxManageryZhFvhK.addBearer.call(addressC66s5l, uintcoA6uAw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerIohkBzj = await vnxManager.new({from: accounts[3]});
		const stringkKqw8gY = "0EYt1iCKPyazPN2si4g75uvcDLW4UOAL6zrQfLh1wcL4P8wg9hZVuxpTLmVHLG"
		const uintHi3X93Y = BigInt("688")
		const addressCWu6qk = accounts[5]
		const uintuV8e0h = BigInt("851")
		const addressOpzDexY = "0x0000000000000000000000000000000000000001"
		const uint256Wz1UvXw = await vnxManagerIohkBzj.addRootRole.call(stringkKqw8gY, {from: accounts[3]});
//		await vnxManagerIohkBzj.onlyAdmin.call({from: accounts[0]});
//		await vnxManagerIohkBzj.onlyOwner.call({from: accounts[2]});
//		const addressC0phWYj = await vnxManagerIohkBzj.removeBearer.call(addressCWu6qk, uintHi3X93Y, {from: accounts[3]});
//		const boolIJ1uE8B = await vnxManagerIohkBzj.hasRole.call(addressOpzDexY, uintuV8e0h, {from: accounts[3]});
//		const boolBxWF3qZ = await vnxManagerIohkBzj.isOwner.call({from: accounts[2]});

		assert.equal(uint256Wz1UvXw, BigInt("0"))
		await expect(vnxManagerIohkBzj.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerDF9rqag = await vnxManager.new({from: accounts[4]});
		const uintilKCXJb = BigInt("1042")
		const addressMxokmhv = accounts[1]
		const uintC5BXtw = BigInt("1446")
		const addressBkrbmFv = accounts[4]
		const stringgcF0TrW = "lkeC75vPhb8bG3lyhexPdxbYIM96182LjWCb76pwyzDTqVlSpKvynNd58cskDpUoqwRCAmKhaVLRjQCxV9JPfIL"
		const booldhhToST = await vnxManagerDF9rqag.hasRole.call(addressMxokmhv, uintilKCXJb, {from: accounts[0]});
//		const addressleEYh4 = await vnxManagerDF9rqag.addBearer.call(addressBkrbmFv, uintC5BXtw, {from: accounts[4]});
//		await vnxManagerDF9rqag.onlyOwner.call({from: accounts[5]});
//		await vnxManagerDF9rqag.renounceOwnership.call({from: accounts[5]});
//		const uint256JFQ8Iq = await vnxManagerDF9rqag.addRootRole.call(stringgcF0TrW, {from: accounts[4]});
//		await vnxManagerDF9rqag.renounceOwnership.call({from: accounts[5]});

		assert.equal(booldhhToST, false)
		await expect(vnxManagerDF9rqag.addBearer.call(addressBkrbmFv, uintC5BXtw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerejY4KmG = await vnxManager.new({from: accounts[0]});
		const stringbLbr4yK = "3U89eDf9K7cCHQQlrqWvaAKPut1c63zLvVOKXF4"
		const uint256VSFNKY1 = await vnxManagerejY4KmG.addRootRole.call(stringbLbr4yK, {from: accounts[1]});
		const boolazPskV = await vnxManagerejY4KmG.isAdmin.call({from: accounts[0]});

		assert.equal(boolazPskV, true)
		assert.equal(uint256VSFNKY1, BigInt("0"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerRvUOVoq = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBKsTWsW = BigInt("312")
		const addressJ9fqHjh = accounts[0]
		await vnxManagerRvUOVoq.onlyAdmin.call({from: accounts[1]});
		const boolUwseGDc = await vnxManagerRvUOVoq.hasRole.call(addressJ9fqHjh, uintBKsTWsW, {from: accounts[1]});
	});

	it('test for vnxManager', async () => {
		const vnxManageryZhFvhK = await vnxManager.new({from: accounts[0]});
		const uintfBkdzwY = BigInt("1235")
		const stringbDQpln = "r71b5OEpiPuPiPowtIko0vQIJKbstjsRBevucStovqKgWxZkygWMqVeopqi5lg2JUEorzyV4W84PlFuDRvo9kJ"
		const uintY80TfO = BigInt("1851")
		const addresswPGObB = accounts[1]
		const uintu8X8pHk = BigInt("1729")
		const stringIMxLpB6 = "BRO8P5USa4mCkK1pSYJpLD8e2sPwfIlcuJkctJSa7NaKJOSMV0mdmcfdE1irY2yuCNeQgBr5BgmXCGRdPpeu0c92V5DYzJ2"
		const addressbMZG5eL = accounts[2]
		const addressor8sv2T = accounts[1]
		const addressixC28jn = accounts[4]
		const addresszXgq3Pp = accounts[3]
//		const uint256kB39c97 = await vnxManageryZhFvhK.addRole.call(stringbDQpln, uintfBkdzwY, {from: accounts[4]});
//		const addressTKLEXz = await vnxManageryZhFvhK.addBearer.call(addresswPGObB, uintY80TfO, {from: accounts[3]});
//		const addressi6vbwbo = await vnxManageryZhFvhK.owner.call({from: accounts[3]});
//		const uint256cvyOGmm = await vnxManageryZhFvhK.addRole.call(stringIMxLpB6, uintu8X8pHk, {from: accounts[0]});
//		const boolYLvHK3Z = await vnxManageryZhFvhK.transferContractOwnership.call(addressor8sv2T, addressbMZG5eL, {from: accounts[2]});
//		const bool5xQbpZ = await vnxManageryZhFvhK.transferContractOwnership.call(addresszXgq3Pp, addressixC28jn, {from: accounts[3]});

		await expect(vnxManageryZhFvhK.addRole.call(stringbDQpln, uintfBkdzwY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerDF9rqag = await vnxManager.new({from: accounts[4]});
		const uintWcLaVxd = BigInt("1042")
		const addressrBe4VIQ = accounts[1]
		const uintTC3lg0J = BigInt("1446")
		const addressPYEdd8a = accounts[4]
		const uintPHyZuIf = BigInt("165")
		const stringvOkT9QG = "Qvffa4fBVkVE0TSudc2ow8y2V9bE"
		const addressSAi8eqz = accounts[2]
		const stringgcF0TrW = "lkeC75vPhb8bG3lyhexPdxbYIM96182LjWCb76pwyzDTqVlSpKvynNd58cskDpUoqwRCAmKhaVLRjQCxV9JPfIL"
		const booldhhToST = await vnxManagerDF9rqag.hasRole.call(addressrBe4VIQ, uintWcLaVxd, {from: accounts[0]});
//		await vnxManagerDF9rqag.renounceOwnership.call({from: accounts[3]});
//		const addressleEYh4 = await vnxManagerDF9rqag.addBearer.call(addressPYEdd8a, uintTC3lg0J, {from: accounts[4]});
//		await vnxManagerDF9rqag.onlyOwner.call({from: accounts[5]});
//		await vnxManagerDF9rqag.renounceOwnership.call({from: accounts[5]});
//		const uint256LQkVbT1 = await vnxManagerDF9rqag.addRole.call(stringvOkT9QG, uintPHyZuIf, {from: accounts[0]});
//		const address7lsMBe = await vnxManagerDF9rqag.transferOwnership.call(addressSAi8eqz, {from: accounts[0]});
//		const uint256JFQ8Iq = await vnxManagerDF9rqag.addRootRole.call(stringgcF0TrW, {from: accounts[4]});
//		await vnxManagerDF9rqag.renounceOwnership.call({from: accounts[5]});

		assert.equal(booldhhToST, false)
		await expect(vnxManagerDF9rqag.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageryZhFvhK = await vnxManager.new({from: accounts[0]});
		const uintzJgw7yz = BigInt("1729")
		const stringIMxLpB6 = "BRO8P5USa4mCkK1pSYJpLD8e2sPwfIlcuJkctJSa7NaKJOSMV0mdmcfdE1irY2yuCNeQgBr5BgmXCGRdPpeu0c92V5DYzJ2"
		const addressuNQCyyO = accounts[2]
		const addressCSHjDHy = accounts[1]
		const addressehDVRKY = accounts[4]
		const addresssyduQQ3 = accounts[3]
		const addressi6vbwbo = await vnxManageryZhFvhK.owner.call({from: accounts[3]});
//		const uint256cvyOGmm = await vnxManageryZhFvhK.addRole.call(stringIMxLpB6, uintzJgw7yz, {from: accounts[0]});
//		const boolYLvHK3Z = await vnxManageryZhFvhK.transferContractOwnership.call(addressCSHjDHy, addressuNQCyyO, {from: accounts[2]});
//		const bool5xQbpZ = await vnxManageryZhFvhK.transferContractOwnership.call(addresssyduQQ3, addressehDVRKY, {from: accounts[3]});

		assert.equal(addressi6vbwbo, 0x879dbE49EE9c3941b6AE636d17C4b7B12048dE3e)
		await expect(vnxManageryZhFvhK.addRole.call(stringIMxLpB6, uintzJgw7yz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerde1Tvgg = await vnxManager.new({from: accounts[2]});
		const addressaayfm2 = accounts[1]
		const address2SKxvT = accounts[1]
		const address5pDBqt = accounts[1]
//		const boolVhEENOX = await vnxManagerde1Tvgg.transferContractOwnership.call(address2SKxvT, addressaayfm2, {from: accounts[2]});
//		await vnxManagerde1Tvgg.onlyOwner.call({from: accounts[3]});
//		const boolwyiVSU4 = await vnxManagerde1Tvgg.isOwner.call({from: accounts[5]});
//		const addressWOTcudt = await vnxManagerde1Tvgg.transferOwnership.call(address5pDBqt, {from: accounts[2]});

		await expect(vnxManagerde1Tvgg.transferContractOwnership.call(address2SKxvT, addressaayfm2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNtTTmvA = await vnxManager.new({from: accounts[0]});
		const uintol0bpUl = BigInt("1988")
		const addressEm7JRQ6 = accounts[2]
		const addressqb87iV = accounts[5]
		const addressWnYiKrY = accounts[4]
		const uintjgum5gm = BigInt("1057")
		const stringWYG924d = "llWgQDFzWjzXd977ncoT4aACVwxo1lsaSmTistBSzuik7bbpcdOVugcmImMTVaIg6FuyKnjF1QNUVy33mVi7baLVw6g0GERk"
		const uint256gJeVc6Q = await vnxManagerNtTTmvA.totalRoles.call({from: accounts[4]});
		const booluVeWkTF = await vnxManagerNtTTmvA.hasRole.call(addressEm7JRQ6, uintol0bpUl, {from: accounts[3]});
		const boolrvtmVD3 = await vnxManagerNtTTmvA.isAdmin.call({from: accounts[0]});
//		const booleEtFz65 = await vnxManagerNtTTmvA.transferContractOwnership.call(addressWnYiKrY, addressqb87iV, {from: accounts[3]});
//		const uint256YllIE2j = await vnxManagerNtTTmvA.addRole.call(stringWYG924d, uintjgum5gm, {from: accounts[4]});

		assert.equal(boolrvtmVD3, true)
		assert.equal(booluVeWkTF, false)
		assert.equal(uint256gJeVc6Q, BigInt("1"))
		await expect(vnxManagerNtTTmvA.transferContractOwnership.call(addressWnYiKrY, addressqb87iV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerde1Tvgg = await vnxManager.new({from: accounts[2]});
		const addresscnb3VAY = accounts[1]
		const boolwyiVSU4 = await vnxManagerde1Tvgg.isOwner.call({from: accounts[5]});
		const uint256Z7LPwKP = await vnxManagerde1Tvgg.totalRoles.call({from: accounts[1]});
		const addressWOTcudt = await vnxManagerde1Tvgg.transferOwnership.call(addresscnb3VAY, {from: accounts[2]});

		assert.equal(boolwyiVSU4, false)
		assert.equal(uint256Z7LPwKP, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerde1Tvgg = await vnxManager.new({from: accounts[2]});
		const uintV5xbWJl = BigInt("1341")
		const addressC2ojAQC = accounts[4]
		const addressbCmxFxn = accounts[2]
		const addressAfVMHH = accounts[2]
//		const addressbLK7sQ = await vnxManagerde1Tvgg.removeBearer.call(addressC2ojAQC, uintV5xbWJl, {from: accounts[3]});
//		const boolVhEENOX = await vnxManagerde1Tvgg.transferContractOwnership.call(addressAfVMHH, addressbCmxFxn, {from: accounts[2]});

		await expect(vnxManagerde1Tvgg.removeBearer.call(addressC2ojAQC, uintV5xbWJl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerde1Tvgg = await vnxManager.new({from: accounts[2]});
		const addresstjx9cPv = accounts[1]
		const addressKchOJmo = accounts[2]
//		await vnxManagerde1Tvgg.renounceOwnership.call({from: accounts[2]});
//		const boolVhEENOX = await vnxManagerde1Tvgg.transferContractOwnership.call(addressKchOJmo, addresstjx9cPv, {from: accounts[2]});

		await expect(vnxManagerde1Tvgg.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})