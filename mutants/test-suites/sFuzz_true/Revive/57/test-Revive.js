const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveMk8oLNL = await Revive.new({from: accounts[4]});
		const bytexPVWYem = "0x1a1c03201e141c09100501151c1818161f160c161d04081b1202010b061b141c"
		const addresswZ8h2zt = accounts[1]
		const byte9d3heo = "0x020a05020e1204111a051313001e010a0d011c20130c1b05191c1810121e120d"
		const addresskBftLoW = accounts[4]
		const uintcSLZ3gJ = BigInt("1758")
		const uintwd4dITk = BigInt("1224")
		const bytePLx8u5z = "0x1d000d152017031113091a1e040c15051311061615181b0e1501200d151a1105"
		const addressgQnXlxm = accounts[0]
		const addressak0wSX2 = accounts[3]
		const addressLLRz7OG = accounts[3]
		const uint256raX1ls1 = await ReviveMk8oLNL.tokensLocked.call(addresswZ8h2zt, bytexPVWYem, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VOv9vT = await ReviveMk8oLNL.tokensLocked.call(addresskBftLoW, byte9d3heo, {from: accounts[4]});
//		const boolbUmfhiK = await ReviveMk8oLNL.transferWithLock.call(addressgQnXlxm, bytePLx8u5z, uintwd4dITk, uintcSLZ3gJ, {from: accounts[1]});
//		const addressFjCv6Py = await ReviveMk8oLNL.transferOwnership.call(addressak0wSX2, {from: accounts[3]});
//		const uint256h1w9mEx = await ReviveMk8oLNL.totalBalanceOf.call(addressLLRz7OG, {from: accounts[0]});

		assert.equal(uint256VOv9vT, BigInt("0"))
		assert.equal(uint256raX1ls1, BigInt("0"))
		await expect(ReviveMk8oLNL.transferWithLock.call(addressgQnXlxm, bytePLx8u5z, uintwd4dITk, uintcSLZ3gJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqgNNTm = await Revive.new({from: accounts[3]});
		const addressfBdugZY = accounts[4]
		const uintcOsAYd0 = BigInt("313")
		const bytejY6OPZw = "0x02060d0f1313090d1c031b15041c12051c12100b170b190c01121214171b0c11"
		const addresszOeiZYZ = accounts[1]
		const addressXxOfmQ0 = accounts[0]
//		const addressxCNXbV = await ReviveqgNNTm.transferOwnership.call(addressfBdugZY, {from: accounts[1]});
//		const uint256sFTLwLI = await ReviveqgNNTm.tokensLockedAtTime.call(addresszOeiZYZ, bytejY6OPZw, uintcOsAYd0, {from: accounts[4]});
//		const uint256rOZDGbF = await ReviveqgNNTm.unlock.call(addressXxOfmQ0, {from: accounts[0]});

		await expect(ReviveqgNNTm.transferOwnership.call(addressfBdugZY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const byteEOcf0Zf = "0x1a15140a151f14190f1015061a081520140e10011d1014161207141203190209"
		const addressZLM2fbk = accounts[4]
		const uintHEmmvjH = BigInt("1229")
		const uintrthAiXp = BigInt("1856")
		const bytezL3qKQD = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addresst0dO7N0 = accounts[2]
		const uintWJVFV3c = BigInt("1206")
		const bytebRXeCWH = "0x0c0109030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
		const addressV4qs80v = accounts[2]
		const addressfYYGPv2 = "0x0000000000000000000000000000000000000001"
		const uint256CQl0HHY = await RevivesziNFUx.tokensUnlockable.call(addressZLM2fbk, byteEOcf0Zf, {from: accounts[0]});
		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addresst0dO7N0, bytezL3qKQD, uintrthAiXp, uintHEmmvjH, {from: accounts[4]});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(bytebRXeCWH, uintWJVFV3c, {from: accounts[2]});
//		const uint256nTvf84H = await RevivesziNFUx.allowance.call(addressfYYGPv2, addressV4qs80v, {from: accounts[1]});

		assert.equal(boolJZvXXDb, true)
		assert.equal(uint256CQl0HHY, BigInt("0"))
		await expect(RevivesziNFUx.extendLock.call(bytebRXeCWH, uintWJVFV3c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebFwLZ2F = await Revive.new({from: accounts[0]});
		const uintNNksT0s = BigInt("329")
		const uintu4T9gaG = BigInt("119")
		const addressxgVSpn7 = "0x0000000000000000000000000000000000000001"
		const addressfmQ4WSA = accounts[5]
		const uintVe9nq95 = BigInt("31")
		const addressHffx88 = accounts[1]
//		const uint256fF9BP6i = await RevivebFwLZ2F.recoverERC20.call(uintNNksT0s, {from: accounts[2]});
//		const boolEqFSRhu = await RevivebFwLZ2F.transfer.call(addressxgVSpn7, uintu4T9gaG, {from: accounts[3]});
//		const uint256DST1F0k = await RevivebFwLZ2F.totalBalanceOf.call(addressfmQ4WSA, {from: accounts[1]});
//		const addressjqelMiI = await RevivebFwLZ2F.recoverERC20.call(addressHffx88, uintVe9nq95, {from: accounts[3]});

		await expect(RevivebFwLZ2F.recoverERC20.call(uintNNksT0s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetteKkHi = await Revive.new({from: accounts[4]});
		const uintLOvMwyO = BigInt("1197")
		const addresslXgG55z = accounts[5]
		const addressLuzN1LB = "0x0000000000000000000000000000000000000001"
		const uintGeR7cAt = BigInt("134")
		const uintKEb8DtB = BigInt("297")
		const byteEJJg1e = "0x1a0e131809091407091b12141b190f121c1b110e0113010a1f1a141c06140709"
		const addressdVVF5BC = accounts[1]
//		const addressLanmq90 = await RevivetteKkHi.recoverERC20.call(addresslXgG55z, uintLOvMwyO, {from: accounts[4]});
//		const uint256QasEtH8 = await RevivetteKkHi.getUnlockableTokens.call(addressLuzN1LB, {from: accounts[2]});
//		const addressP4B9iT3 = await RevivetteKkHi.owner.call({from: accounts[0]});
//		const boolt3HHi6J = await RevivetteKkHi.transferWithLock.call(addressdVVF5BC, byteEJJg1e, uintKEb8DtB, uintGeR7cAt, {from: accounts[2]});

		await expect(RevivetteKkHi.recoverERC20.call(addresslXgG55z, uintLOvMwyO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewFuZhew = await Revive.new({from: accounts[0]});
		const uintH0fTQmV = BigInt("1984")
		const addressMDEv7xc = accounts[1]
		const addressDz5AVdF = accounts[1]
//		const boolcTf7TDr = await RevivewFuZhew.transferFrom.call(addressDz5AVdF, addressMDEv7xc, uintH0fTQmV, {from: accounts[2]});
//		const addressrIc51rI = await RevivewFuZhew.owner.call({from: accounts[0]});

		await expect(RevivewFuZhew.transferFrom.call(addressDz5AVdF, addressMDEv7xc, uintH0fTQmV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveoq2bdk = await Revive.new({from: accounts[2]});
		const uintNRrbDWO = BigInt("29")
		const uintBmc40I = BigInt("1994")
		const uintX1N59UC = BigInt("1739")
		const bytea1MK2B5 = "0x040a1b091520051511111e0c061e0c1d1a0310030c1719181c0318180b1c1108"
		const addressVBUhDtf = accounts[0]
		const uintcrknU2I = BigInt("46")
		const uintbn1RAPS = BigInt("202")
		const byteOI1sUKF = "0x06020710201b081d041f1d101f1c1b130319081b0c1a17151309160801100305"
//		const uint256NK6sWVr = await Reviveoq2bdk.recoverERC20.call(uintNRrbDWO, {from: accounts[1]});
//		const addressVBVbi3C = await Reviveoq2bdk.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHkeeI2 = await Reviveoq2bdk.transferWithLock.call(addressVBUhDtf, bytea1MK2B5, uintX1N59UC, uintBmc40I, {from: accounts[1]});
//		const boolaHdpkf = await Reviveoq2bdk.lock.call(byteOI1sUKF, uintbn1RAPS, uintcrknU2I, {from: accounts[0]});

		await expect(Reviveoq2bdk.recoverERC20.call(uintNRrbDWO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivese6Y6XB = await Revive.new({from: accounts[4]});
		const addresstbgdhZo = accounts[0]
		const uintMzy588O = BigInt("257")
		const addressL2Y48Ff = accounts[1]
		const uintdsL4uYj = BigInt("877")
		const bytesKSCjQE = "0x1716020914080219151d20070b0f071d15040a0f1b09140e1218130d0d011812"
		const addressgUPVfyz = "0x0000000000000000000000000000000000000001"
		const uintEtHHixM = BigInt("194")
		const addressc8GY9TG = accounts[4]
		const uint256mSMTi7F = await Revivese6Y6XB.balanceOf.call(addresstbgdhZo, {from: accounts[2]});
//		const boolZzo3GYo = await Revivese6Y6XB.transfer.call(addressL2Y48Ff, uintMzy588O, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZbMQO1 = await Revivese6Y6XB.tokensLockedAtTime.call(addressgUPVfyz, bytesKSCjQE, uintdsL4uYj, {from: accounts[1]});
//		const addressQiJvW6k = await Revivese6Y6XB.recoverERC20.call(addressc8GY9TG, uintEtHHixM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256mSMTi7F, BigInt("0"))
		await expect(Revivese6Y6XB.transfer.call(addressL2Y48Ff, uintMzy588O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewFuZhew = await Revive.new({from: accounts[0]});
		const uintDVVy3gW = BigInt("1075")
		const addressi9RTwFG = "0x0000000000000000000000000000000000000001"
		const uintUpq7a3R = BigInt("1984")
		const addressQp94UNN = accounts[1]
		const addressqzDzuT7 = accounts[1]
		const boolim66FCZ = await RevivewFuZhew.increaseAllowance.call(addressi9RTwFG, uintDVVy3gW, {from: accounts[1]});
//		const boolcTf7TDr = await RevivewFuZhew.transferFrom.call(addressqzDzuT7, addressQp94UNN, uintUpq7a3R, {from: accounts[2]});
//		const addressrIc51rI = await RevivewFuZhew.owner.call({from: accounts[0]});

		assert.equal(boolim66FCZ, true)
		await expect(RevivewFuZhew.transferFrom.call(addressqzDzuT7, addressQp94UNN, uintUpq7a3R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const byteLckO722 = "0x1a15140a151f14190f1015061a081520140e10011d1014161207141203190209"
		const addressESdjzzC = accounts[4]
		const uinthp7rK1R = BigInt("1229")
		const uintcWNyXaK = BigInt("1856")
		const bytedGzLMKc = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addressiA0ydPu = accounts[2]
		const uintlH7keuc = BigInt("243")
		const addressDkgwSo = accounts[1]
		const uintt7IpZd = BigInt("1206")
		const byteHkvAO5j = "0x0c0109030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
		const addressExDxLKa = accounts[2]
		const addressMqRYZkC = "0x0000000000000000000000000000000000000001"
		const uint256CQl0HHY = await RevivesziNFUx.tokensUnlockable.call(addressESdjzzC, byteLckO722, {from: accounts[0]});
		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressiA0ydPu, bytedGzLMKc, uintcWNyXaK, uinthp7rK1R, {from: accounts[4]});
		const boolii6hK2f = await RevivesziNFUx.approve.call(addressDkgwSo, uintlH7keuc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(byteHkvAO5j, uintt7IpZd, {from: accounts[2]});
//		const uint256nTvf84H = await RevivesziNFUx.allowance.call(addressMqRYZkC, addressExDxLKa, {from: accounts[1]});

		assert.equal(boolJZvXXDb, true)
		assert.equal(boolii6hK2f, true)
		assert.equal(uint256CQl0HHY, BigInt("0"))
		await expect(RevivesziNFUx.extendLock.call(byteHkvAO5j, uintt7IpZd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintkDu8v9o = BigInt("1229")
		const uintczm0yC6 = BigInt("1856")
		const bytemlwCgns = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addressMkMHnrA = accounts[2]
		const addressK9L8FW = accounts[2]
		const byteI1wULzl = "0x080f101f001d0a1017070c1b1c0409010a07081d1c1e15101b141c1a12071602"
		const addressieagGt = accounts[1]
		const uintnuDFPTm = BigInt("1197")
		const byteXd6PbO = "0x0c0109030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
		const addressTYpk5XA = accounts[2]
		const address7sOXMp = "0x0000000000000000000000000000000000000001"
		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressMkMHnrA, bytemlwCgns, uintczm0yC6, uintkDu8v9o, {from: accounts[4]});
		const uint256qYthzSe = await RevivesziNFUx.totalBalanceOf.call(addressK9L8FW, {from: accounts[1]});
		const uint256S7FiM3j = await RevivesziNFUx.tokensUnlockable.call(addressieagGt, byteI1wULzl, {from: accounts[2]});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(byteXd6PbO, uintnuDFPTm, {from: accounts[2]});
//		const uint256nTvf84H = await RevivesziNFUx.allowance.call(address7sOXMp, addressTYpk5XA, {from: accounts[1]});

		assert.equal(boolJZvXXDb, true)
		assert.equal(uint256S7FiM3j, BigInt("0"))
		assert.equal(uint256qYthzSe, BigInt("0"))
		await expect(RevivesziNFUx.extendLock.call(byteXd6PbO, uintnuDFPTm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet0kG6ZS = await Revive.new({from: accounts[3]});
		const addressqZEBTB = await Revivet0kG6ZS.owner.call({from: accounts[4]});
		const uint256nlmcOSH = await Revivet0kG6ZS.totalSupply.call({from: accounts[1]});

		assert.equal(addressqZEBTB, 0x293751e8eDd5e857e025E61dFeF21DE08428e545)
		assert.equal(uint256nlmcOSH, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const byteOScKnx = "0x1a15140a151f14190f1015061a081520140e10011d1014161207141203190209"
		const addresshq8ps5 = accounts[5]
		const addressD8mJYuo = accounts[2]
		const addresskIpwxIC = "0x0000000000000000000000000000000000000001"
		const uint256CQl0HHY = await RevivesziNFUx.tokensUnlockable.call(addresshq8ps5, byteOScKnx, {from: accounts[0]});
		const uint256nTvf84H = await RevivesziNFUx.allowance.call(addresskIpwxIC, addressD8mJYuo, {from: accounts[1]});

		assert.equal(uint256CQl0HHY, BigInt("0"))
		assert.equal(uint256nTvf84H, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveSdR8Ux = await Revive.new({from: accounts[1]});
		const addressvVE8nTX = accounts[0]
		const addresstD3XSJt = accounts[5]
		const bytelS3mRov = "0x1105190803041e1e1f0a111a01190f0508061b0f1f1a081d150202180809010f"
		const addressaLnTy0m = accounts[2]
		const uintyKh2gDw = BigInt("767")
		const bytehbMsd2N = "0x13041b1c041e0514130701190c041b1620091d071d0715161615131c12141e0a"
		const uint256g4jh4u8 = await ReviveSdR8Ux.unlock.call(addressvVE8nTX, {from: accounts[1]});
		const uint256WeYPmGs = await ReviveSdR8Ux.unlock.call(addresstD3XSJt, {from: accounts[2]});
		const uint256cgjC7I = await ReviveSdR8Ux.tokensUnlockable.call(addressaLnTy0m, bytelS3mRov, {from: accounts[0]});
//		const boolgSnQBQg = await ReviveSdR8Ux.increaseLockAmount.call(bytehbMsd2N, uintyKh2gDw, {from: accounts[3]});

		assert.equal(uint256WeYPmGs, BigInt("0"))
		assert.equal(uint256cgjC7I, BigInt("0"))
		assert.equal(uint256g4jh4u8, BigInt("0"))
		await expect(ReviveSdR8Ux.increaseLockAmount.call(bytehbMsd2N, uintyKh2gDw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivev3j1Wsh = await Revive.new({from: accounts[5]});
		const uints9Qd8Ug = BigInt("619")
		const uintOwBGsr = BigInt("782")
		const byteIBgj5O1 = "0x13060e0f0e0a051e0c121a1f1718070f1b09010f130801021d0a17141c081b11"
		const addressqwZ782q = accounts[0]
		const addressyp1UXI8 = accounts[3]
//		const boolB0IMaAc = await Revivev3j1Wsh.lock.call(byteIBgj5O1, uintOwBGsr, uints9Qd8Ug, {from: accounts[2]});
//		const uint256RtHBZNY = await Revivev3j1Wsh.balanceOf.call(addressqwZ782q, {from: accounts[1]});
//		const uint256NzVP2J = await Revivev3j1Wsh.totalBalanceOf.call(addressyp1UXI8, {from: accounts[0]});
//		const uint256UxkVD5r = await Revivev3j1Wsh.totalSupply.call({from: accounts[2]});
//		await Revivev3j1Wsh.renounceOwnership.call({from: accounts[0]});

		await expect(Revivev3j1Wsh.lock.call(byteIBgj5O1, uintOwBGsr, uints9Qd8Ug, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveSdR8Ux = await Revive.new({from: accounts[1]});
		const uintV7iryuS = BigInt("556")
		const byteOE1w1wm = "0x1b0b0108190e1e1f161f18121500070a05160807150f091f1f11120d0b14000b"
		const addresse4kB64P = accounts[1]
		const addresskbAkbF = accounts[0]
		const addressJFOmUKG = accounts[5]
		const uintKKyDEY4 = BigInt("1760")
		const bytepnRdLwA = "0x0713011e090b1219010c1b1d0900161f0a0b0e130c0b191c13030b09181c0c17"
		const addressFxAVmnH = accounts[2]
		const uintFQQcoe5 = BigInt("767")
		const byteQYLD1zu = "0x13041b1c041e0514130701190c041b1620091d071d0715161615131c12141e0a"
		const uint256Ng3IZh = await ReviveSdR8Ux.tokensLockedAtTime.call(addresse4kB64P, byteOE1w1wm, uintV7iryuS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256g4jh4u8 = await ReviveSdR8Ux.unlock.call(addresskbAkbF, {from: accounts[1]});
		const uint256WeYPmGs = await ReviveSdR8Ux.unlock.call(addressJFOmUKG, {from: accounts[2]});
		const uint2562WiLu3 = await ReviveSdR8Ux.tokensLockedAtTime.call(addressFxAVmnH, bytepnRdLwA, uintKKyDEY4, {from: accounts[5]});
//		const boolgSnQBQg = await ReviveSdR8Ux.increaseLockAmount.call(byteQYLD1zu, uintFQQcoe5, {from: accounts[3]});

		assert.equal(uint2562WiLu3, BigInt("0"))
		assert.equal(uint256Ng3IZh, BigInt("0"))
		assert.equal(uint256WeYPmGs, BigInt("0"))
		assert.equal(uint256g4jh4u8, BigInt("0"))
		await expect(ReviveSdR8Ux.increaseLockAmount.call(byteQYLD1zu, uintFQQcoe5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedPG6dN = await Revive.new({from: accounts[1]});
		const addressHS1b3x = accounts[1]
		const uintFBhMHEL = BigInt("1137")
		const addressXxb2UYy = accounts[3]
		const addressUKyAMR0 = accounts[0]
		const uinthbRovP = BigInt("335")
		const uinta7F7D4I = BigInt("1456")
		const bytez6teh78 = "0x1a1c1d10010b111f110d1718120f1d05121d1d0c1f18191b0f1a011b130a0f18"
		const addressOnGvFw = accounts[1]
		const uintbNdixUT = BigInt("1842")
		const bytezeZHYu1 = "0x0902131c1c151a13091516090115161b1c15151d010411171d02060c0c071d08"
		const uint256GmSBfMH = await RevivedPG6dN.getUnlockableTokens.call(addressHS1b3x, {from: accounts[1]});
//		const boolM0o4oN1 = await RevivedPG6dN.transferFrom.call(addressUKyAMR0, addressXxb2UYy, uintFBhMHEL, {from: accounts[5]});
//		const booljCLrRFQ = await RevivedPG6dN.lock.call(bytez6teh78, uinta7F7D4I, uinthbRovP, {from: accounts[4]});
//		const uint256w36RxZs = await RevivedPG6dN.getUnlockableTokens.call(addressOnGvFw, {from: accounts[0]});
//		const boolt0Y3nsZ = await RevivedPG6dN.increaseLockAmount.call(bytezeZHYu1, uintbNdixUT, {from: accounts[1]});

		assert.equal(uint256GmSBfMH, BigInt("0"))
		await expect(RevivedPG6dN.transferFrom.call(addressUKyAMR0, addressXxb2UYy, uintFBhMHEL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGf8Be5 = await Revive.new({from: accounts[1]});
		const uintjIrF9dn = BigInt("1445")
		const addressJ5z0PBe = accounts[3]
		const uintEBjvch = BigInt("1789")
		const addresshEcf3lR = accounts[5]
//		const boolmSt1aiN = await ReviveGf8Be5.decreaseAllowance.call(addressJ5z0PBe, uintjIrF9dn, {from: accounts[3]});
//		const addressqeCng3k = await ReviveGf8Be5.recoverERC20.call(addresshEcf3lR, uintEBjvch, {from: accounts[5]});

		await expect(ReviveGf8Be5.decreaseAllowance.call(addressJ5z0PBe, uintjIrF9dn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintAFjQkJs = BigInt("1229")
		const uinttUc7ygE = BigInt("1856")
		const bytedNIDZ7w = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addressMWKHQWa = accounts[2]
		const addressXGBqDXi = accounts[3]
		const addressXD91Zm3 = accounts[2]
		const uintcBxBuii = BigInt("1197")
		const byteEbu3xZW = "0x0c0109030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
		const addresssmPDN1H = accounts[2]
		const addressjPCIugo = "0x0000000000000000000000000000000000000001"
		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressMWKHQWa, bytedNIDZ7w, uinttUc7ygE, uintAFjQkJs, {from: accounts[4]});
		const uint256qYthzSe = await RevivesziNFUx.totalBalanceOf.call(addressXGBqDXi, {from: accounts[1]});
//		await RevivesziNFUx.onlyOwner.call({from: accounts[2]});
//		const uint256sASrWlJ = await RevivesziNFUx.getUnlockableTokens.call(addressXD91Zm3, {from: accounts[4]});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(byteEbu3xZW, uintcBxBuii, {from: accounts[2]});
//		const uint256nTvf84H = await RevivesziNFUx.allowance.call(addressjPCIugo, addresssmPDN1H, {from: accounts[1]});

		assert.equal(boolJZvXXDb, true)
		assert.equal(uint256qYthzSe, BigInt("0"))
		await expect(RevivesziNFUx.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintUrC6EXu = BigInt("990")
		const uintEb8iiDL = BigInt("1229")
		const uintXlaklMc = BigInt("1856")
		const byteyD8oFV = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addressL4CKwV = accounts[2]
		const uintXDM3kxm = BigInt("1879")
		const addressPCAw8y = accounts[0]
		const addressUwcNerZ = accounts[1]
		const uintjCyy0wc = BigInt("1197")
		const bytee1gN0l = "0x0c0109030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
		const addressIOFxby0 = accounts[2]
		const addressyiAPBGJ = "0x0000000000000000000000000000000000000002"
//		const uint256NImFQ3b = await RevivesziNFUx.recoverERC20.call(uintUrC6EXu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressL4CKwV, byteyD8oFV, uintXlaklMc, uintEb8iiDL, {from: accounts[4]});
//		await RevivesziNFUx.onlyOwner.call({from: accounts[4]});
//		const booltZ4nE9K = await RevivesziNFUx.transferFrom.call(addressUwcNerZ, addressPCAw8y, uintXDM3kxm, {from: accounts[3]});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(bytee1gN0l, uintjCyy0wc, {from: accounts[2]});
//		const uint256nTvf84H = await RevivesziNFUx.allowance.call(addressyiAPBGJ, addressIOFxby0, {from: accounts[1]});

		await expect(RevivesziNFUx.recoverERC20.call(uintUrC6EXu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveSdR8Ux = await Revive.new({from: accounts[1]});
		const uintFTVWtmh = BigInt("556")
		const bytem1cekUF = "0x1b0b0108190e1e1f161f18121500070a05160807150f091f1f11120d0b14000b"
		const addressM3pE8kg = accounts[1]
		const addressUdLvYZ3 = accounts[1]
		const uintWspvHa0 = BigInt("767")
		const bytekOrMDTj = "0x13041b1c041e0514130701190c041b1620091d071d0715161615131c12141e0a"
//		await ReviveSdR8Ux.renounceOwnership.call({from: accounts[1]});
//		const uint256Ng3IZh = await ReviveSdR8Ux.tokensLockedAtTime.call(addressM3pE8kg, bytem1cekUF, uintFTVWtmh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256g4jh4u8 = await ReviveSdR8Ux.unlock.call(addressUdLvYZ3, {from: accounts[1]});
//		const boolgSnQBQg = await ReviveSdR8Ux.increaseLockAmount.call(bytekOrMDTj, uintWspvHa0, {from: accounts[3]});

		await expect(ReviveSdR8Ux.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveSdR8Ux = await Revive.new({from: accounts[1]});
		const uintxp0Snhw = BigInt("556")
		const byteICkQOZL = "0x1b0b0108190e1e1f161f18121500070a05160807150f091f1f11120d0b14000b"
		const addressOcAmw1O = accounts[1]
		const bytezhJDpQ = "0x08200f181c0604181602140d1313191514001b1d180d0f0909040804180a0306"
		const addressS64lcT = accounts[1]
		const addresshG7Dn0h = accounts[2]
		const addressgxzRK3b = accounts[1]
		const uintt6r9YlB = BigInt("767")
		const bytedmlCHxC = "0x13011b1c041e0514130701190c041b1620091d071d0715161615131c12141e0a"
		const uint256Ng3IZh = await ReviveSdR8Ux.tokensLockedAtTime.call(addressOcAmw1O, byteICkQOZL, uintxp0Snhw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256w9TDEHN = await ReviveSdR8Ux.tokensUnlockable.call(addressS64lcT, bytezhJDpQ, {from: accounts[2]});
		const addressqFaZGJl = await ReviveSdR8Ux.transferOwnership.call(addresshG7Dn0h, {from: accounts[1]});
		const uint256g4jh4u8 = await ReviveSdR8Ux.unlock.call(addressgxzRK3b, {from: accounts[1]});
//		const boolgSnQBQg = await ReviveSdR8Ux.increaseLockAmount.call(bytedmlCHxC, uintt6r9YlB, {from: accounts[3]});

		assert.equal(uint256Ng3IZh, BigInt("0"))
		assert.equal(uint256g4jh4u8, BigInt("0"))
		assert.equal(uint256w9TDEHN, BigInt("0"))
		await expect(ReviveSdR8Ux.increaseLockAmount.call(bytedmlCHxC, uintt6r9YlB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVcUIzMf = await Revive.new({from: accounts[5]});
		const uintPsfZh9S = BigInt("110")
		const addressCxUWtU = accounts[3]
		const uintCZz1Ihl = BigInt("354")
		const addressSkpKXrA = accounts[0]
		const addressoXFGFiX = accounts[3]
		const uintoTuvIHm = BigInt("1839")
		const addressVVPpVH6 = accounts[4]
//		const uint256WrsrGk = await ReviveVcUIzMf.recoverERC20.call(uintPsfZh9S, {from: accounts[4]});
//		const uint256MeC6Tz = await ReviveVcUIzMf.unlock.call(addressCxUWtU, {from: accounts[1]});
//		const addressAqKhutx = await ReviveVcUIzMf.owner.call({from: accounts[0]});
//		const boolRrZNZLT = await ReviveVcUIzMf.transferFrom.call(addressoXFGFiX, addressSkpKXrA, uintCZz1Ihl, {from: accounts[1]});
//		const boolZp3f0S = await ReviveVcUIzMf.approve.call(addressVVPpVH6, uintoTuvIHm, {from: accounts[1]});

		await expect(ReviveVcUIzMf.recoverERC20.call(uintPsfZh9S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUhx3e7O = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGuL9DJA = BigInt("1524")
		const bytejENBcrS = "0x0d1e1911160d01080513021e1b080a170c051e1703191e051a0b1e1b1d1a191f"
		const addressxlqFH8 = accounts[4]
		const addressQwynMKj = accounts[1]
		const uintSNSIfE = BigInt("636")
		const addressQIWvyNK = accounts[1]
		const boolcXHttmy = await ReviveUhx3e7O.extendLock.call(bytejENBcrS, uintGuL9DJA, {from: accounts[4]});
		const uint256qHNKIlK = await ReviveUhx3e7O.allowance.call(addressQwynMKj, addressxlqFH8, {from: accounts[4]});
		const boolmHfisEi = await ReviveUhx3e7O.isOwner.call({from: accounts[3]});
		const boolS8RponY = await ReviveUhx3e7O.approve.call(addressQIWvyNK, uintSNSIfE, {from: accounts[4]});
	});

	it('test for Revive', async () => {
		const ReviveqoLYEbW = await Revive.new({from: accounts[2]});
		const byteH9u20hM = "0x1e1f1406190318040c1f0c01070116170714171c171e07001f1d190612051d1b"
		const addresssWYaGo = accounts[3]
		const uintGbtsFmp = BigInt("301")
		const addressldpG7H = accounts[5]
		const addressz8zuo6y = accounts[4]
		const addressNm2qCxp = accounts[0]
		const addressuuAqMGm = accounts[4]
		const addressqprYOcv = accounts[4]
		const uintMwXKNov = BigInt("1177")
		const uint256bvac6pg = await ReviveqoLYEbW.tokensUnlockable.call(addresssWYaGo, byteH9u20hM, {from: "0x0000000000000000000000000000000000000001"});
		const boolfY17AY8 = await ReviveqoLYEbW.increaseAllowance.call(addressldpG7H, uintGbtsFmp, {from: accounts[2]});
		const uint256fLGm00I = await ReviveqoLYEbW.allowance.call(addressNm2qCxp, addressz8zuo6y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K5jq2ly = await ReviveqoLYEbW.getUnlockableTokens.call(addressuuAqMGm, {from: accounts[3]});
		const uint256hB8auM6 = await ReviveqoLYEbW.balanceOf.call(addressqprYOcv, {from: accounts[4]});
//		const uint256t7ehW7N = await ReviveqoLYEbW.recoverERC20.call(uintMwXKNov, {from: accounts[5]});

		assert.equal(boolfY17AY8, true)
		assert.equal(uint256K5jq2ly, BigInt("0"))
		assert.equal(uint256bvac6pg, BigInt("0"))
		assert.equal(uint256fLGm00I, BigInt("0"))
		assert.equal(uint256hB8auM6, BigInt("0"))
		await expect(ReviveqoLYEbW.recoverERC20.call(uintMwXKNov, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintfEMTJGG = BigInt("672")
		const uintUlV45Qg = BigInt("1229")
		const uintem8bhS = BigInt("1440")
		const byteiOG9yJn = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addressHtZC70 = accounts[2]
//		const uint256FlUo5uc = await RevivesziNFUx.recoverERC20.call(uintfEMTJGG, {from: accounts[1]});
//		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressHtZC70, byteiOG9yJn, uintem8bhS, uintUlV45Qg, {from: accounts[4]});

		await expect(RevivesziNFUx.recoverERC20.call(uintfEMTJGG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintj8LMue4 = BigInt("1229")
		const uintmcKj0is = BigInt("1440")
		const bytemir0Ea = "0x1b14111b0c1c08080c1c0c2018140e0e200b130a181704071f062012100d0202"
		const addressmuX88iX = accounts[2]
		const uintjaM80FO = BigInt("1332")
		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressmuX88iX, bytemir0Ea, uintmcKj0is, uintj8LMue4, {from: accounts[4]});
//		const uint256aN6JftK = await RevivesziNFUx.recoverERC20.call(uintjaM80FO, {from: accounts[2]});

		assert.equal(boolJZvXXDb, true)
		await expect(RevivesziNFUx.recoverERC20.call(uintjaM80FO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNGbCcmr = await Revive.new({from: accounts[4]});
		const addressW2sl3f6 = accounts[2]
		const uintPnlhv9Y = BigInt("132")
		const uint256qm7G6Lp = await ReviveNGbCcmr.getUnlockableTokens.call(addressW2sl3f6, {from: accounts[2]});
//		const uint256syvH7wb = await ReviveNGbCcmr.recoverERC20.call(uintPnlhv9Y, {from: accounts[0]});

		assert.equal(uint256qm7G6Lp, BigInt("0"))
		await expect(ReviveNGbCcmr.recoverERC20.call(uintPnlhv9Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uinthGeoplP = BigInt("51")
		const uintyixJIQU = BigInt("428")
		const byteQdiEHqr = "0x131e071e0b040b131a20010e0215040b011d0e1c07201902141d080f18200604"
		const addressmceU9L0 = accounts[4]
		const addressCwhM9fe = accounts[4]
//		const uint256AlM0zzG = await RevivesziNFUx.recoverERC20.call(uinthGeoplP, {from: accounts[1]});
//		const uint256TCbBizC = await RevivesziNFUx.tokensLockedAtTime.call(addressmceU9L0, byteQdiEHqr, uintyixJIQU, {from: accounts[2]});
//		const uint256YMSQro6 = await RevivesziNFUx.getUnlockableTokens.call(addressCwhM9fe, {from: accounts[1]});

		await expect(RevivesziNFUx.recoverERC20.call(uinthGeoplP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivev3j1Wsh = await Revive.new({from: accounts[5]});
		const uintKmcQr6J = BigInt("732")
		const uintcLciZWR = BigInt("619")
		const uint6nzyNA = BigInt("1828")
		const byteZwC12sQ = "0x13060e0f0e0a051e0c121a1f1718070f1b09010f130801021d0a17141c081b11"
		const addressL0lYKIw = accounts[5]
//		const uint256PL9HoPn = await Revivev3j1Wsh.recoverERC20.call(uintKmcQr6J, {from: accounts[0]});
//		const boolB0IMaAc = await Revivev3j1Wsh.lock.call(byteZwC12sQ, uint6nzyNA, uintcLciZWR, {from: accounts[2]});
//		const uint256w4za3Qa = await Revivev3j1Wsh.unlock.call(addressL0lYKIw, {from: accounts[3]});

		await expect(Revivev3j1Wsh.recoverERC20.call(uintKmcQr6J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivex9Bkkgq = await Revive.new({from: accounts[1]});
		const uintionMzZZ = BigInt("1440")
		const addresscNlg5YS = accounts[5]
		const uintxRyajMF = BigInt("1405")
		const uintwNb3Loc = BigInt("77")
		const uintSHrqtHJ = BigInt("80")
		const byteO7PfciM = "0x181d1e001b181906051c0c0c130b1e1b0c04030e101c13130e130c1101020b07"
		const addresstPJr76 = accounts[0]
		const booli1puELB = await Revivex9Bkkgq.approve.call(addresscNlg5YS, uintionMzZZ, {from: accounts[0]});
//		const uint256qEogKKF = await Revivex9Bkkgq.recoverERC20.call(uintxRyajMF, {from: accounts[5]});
//		const boolxdx4ddn = await Revivex9Bkkgq.transferWithLock.call(addresstPJr76, byteO7PfciM, uintSHrqtHJ, uintwNb3Loc, {from: accounts[3]});

		assert.equal(booli1puELB, true)
		await expect(Revivex9Bkkgq.recoverERC20.call(uintxRyajMF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const addresssUeaQBp = accounts[1]
		const uintASi9dPB = BigInt("476")
		const uint1eu6hd = BigInt("1197")
		const bytetwiXYYv = "0x0c0109030202041b0f1c0f04120b08010f1115061f011219090f1408020a0e16"
		const addresspiEVg7H = await RevivesziNFUx.owner.call({from: accounts[0]});
		const uint256xctfJO = await RevivesziNFUx.getUnlockableTokens.call(addresssUeaQBp, {from: accounts[5]});
//		const uint256Fs9heOK = await RevivesziNFUx.recoverERC20.call(uintASi9dPB, {from: accounts[0]});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(bytetwiXYYv, uint1eu6hd, {from: accounts[2]});

		assert.equal(addresspiEVg7H, 0xF2325E8CC1ef87E47f017302804a1f8ecE136Fed)
		assert.equal(uint256xctfJO, BigInt("0"))
		await expect(RevivesziNFUx.recoverERC20.call(uintASi9dPB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewFuZhew = await Revive.new({from: accounts[0]});
		const addresszZMpvj = accounts[4]
		const addressm4Ok1RH = accounts[2]
		const uintLnlcbGm = BigInt("1397")
		const uint256lEHM666 = await RevivewFuZhew.balanceOf.call(addresszZMpvj, {from: accounts[2]});
		const uint256IyIUk4w = await RevivewFuZhew.totalBalanceOf.call(addressm4Ok1RH, {from: accounts[3]});
//		const uint256yW9Hlmr = await RevivewFuZhew.recoverERC20.call(uintLnlcbGm, {from: accounts[1]});
//		const addressrIc51rI = await RevivewFuZhew.owner.call({from: accounts[0]});

		assert.equal(uint256IyIUk4w, BigInt("0"))
		assert.equal(uint256lEHM666, BigInt("0"))
		await expect(RevivewFuZhew.recoverERC20.call(uintLnlcbGm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintwsqe0YT = BigInt("1617")
		const uintcMzVZAs = BigInt("1937")
		const uintmsZrAU8 = BigInt("501")
		const byteRg42Apc = "0x1616131d0e1a100807061f100e030b1d1d08051a1b0613161f030a05110f1b0d"
		const addressKNXVM7 = accounts[2]
		const uintS56uBk = BigInt("1190")
		const byteKCmXklk = "0x0c0109030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
//		const uint256jk2y395 = await RevivesziNFUx.recoverERC20.call(uintwsqe0YT, {from: accounts[1]});
//		const boolSRB15A = await RevivesziNFUx.transferWithLock.call(addressKNXVM7, byteRg42Apc, uintmsZrAU8, uintcMzVZAs, {from: accounts[4]});
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(byteKCmXklk, uintS56uBk, {from: accounts[2]});

		await expect(RevivesziNFUx.recoverERC20.call(uintwsqe0YT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintk3a60nj = BigInt("1229")
		const uintxojg2Q = BigInt("1440")
		const bytecoPUmTn = "0x070c18070c05121d1907150310120b16171112150a070210141a180a071e0708"
		const addressExVBcqW = accounts[2]
		const uintsAXKf0U = BigInt("1302")
		const boolJZvXXDb = await RevivesziNFUx.transferWithLock.call(addressExVBcqW, bytecoPUmTn, uintxojg2Q, uintk3a60nj, {from: accounts[4]});
//		const uint256VQu9L73 = await RevivesziNFUx.recoverERC20.call(uintsAXKf0U, {from: accounts[0]});

		assert.equal(boolJZvXXDb, true)
		await expect(RevivesziNFUx.recoverERC20.call(uintsAXKf0U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNGbCcmr = await Revive.new({from: accounts[4]});
		const uintIkpNJXL = BigInt("1055")
		const addressXuaYgN = accounts[2]
//		const uint256rdHNqY7 = await ReviveNGbCcmr.recoverERC20.call(uintIkpNJXL, {from: accounts[2]});
//		const uint256qm7G6Lp = await ReviveNGbCcmr.getUnlockableTokens.call(addressXuaYgN, {from: accounts[2]});

		await expect(ReviveNGbCcmr.recoverERC20.call(uintIkpNJXL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesziNFUx = await Revive.new({from: accounts[4]});
		const uintBlXR8tU = BigInt("1197")
		const byteSdveM4W = "0x0cffffffff09030202041b0f1c0f04120e08010f1115061f011219090f1408020a0e16"
		const addressZUSCNKF = "0x0000000000000000000000000000000000000001"
		const addressQbTjdqZ = accounts[4]
		const uintVlzANJV = BigInt("1843")
		const byteZB91dJ2 = "0x0c0411081f0a0d031512181a1e100612110b000e0f110b1d1406101b0f190106"
//		const boolEjaCpar = await RevivesziNFUx.extendLock.call(byteSdveM4W, uintBlXR8tU, {from: accounts[2]});
//		const boolgm120o1 = await RevivesziNFUx.isOwner.call({from: accounts[2]});
//		const uint256U8cV6y0 = await RevivesziNFUx.allowance.call(addressQbTjdqZ, addressZUSCNKF, {from: accounts[3]});
//		const boolVwsgmbA = await RevivesziNFUx.increaseLockAmount.call(byteZB91dJ2, uintVlzANJV, {from: accounts[3]});

		await expect(RevivesziNFUx.extendLock.call(byteSdveM4W, uintBlXR8tU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenVYytSr = await Revive.new({from: accounts[0]});
		const uintoFI3u5I = BigInt("298")
		const uintlREEO25 = BigInt("1032")
		const bytezYGjd9t = "0x111d1018051f1813060b181a0e1711041404051f1e0c0b040402061c1317051f"
		const addressUHDwxbl = accounts[3]
		const uintaGvX2k8 = BigInt("774")
//		const uint256bRc92Eg = await RevivenVYytSr.recoverERC20.call(uintoFI3u5I, {from: accounts[3]});
//		const uint256eiPwhci = await RevivenVYytSr.tokensLockedAtTime.call(addressUHDwxbl, bytezYGjd9t, uintlREEO25, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lh7y82k = await RevivenVYytSr.recoverERC20.call(uintaGvX2k8, {from: accounts[4]});

		await expect(RevivenVYytSr.recoverERC20.call(uintoFI3u5I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})