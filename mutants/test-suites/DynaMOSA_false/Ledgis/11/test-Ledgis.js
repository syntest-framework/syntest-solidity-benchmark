const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisMKThXyf = await Ledgis.new({from: accounts[5]});
		const uintzbwvymL = BigInt("837")
		const addressMgc8rIe = accounts[5]
		const uintAyr5u9x = BigInt("116")
		const addresshvEKZgS = accounts[4]
		const addressDM4pQ6 = accounts[1]
		const addressB2fAJBX = accounts[0]
		const addressbwbp5Du = accounts[0]
//		const boolnFTmMuO = await LedgisMKThXyf.transfer.call(addressMgc8rIe, uintzbwvymL, {from: accounts[4]});
//		const boolEFxJxI0 = await LedgisMKThXyf.transferFrom.call(addressDM4pQ6, addresshvEKZgS, uintAyr5u9x, {from: accounts[2]});
//		const uint256OfE8l44 = await LedgisMKThXyf.allowance.call(addressbwbp5Du, addressB2fAJBX, {from: accounts[5]});

		await expect(LedgisMKThXyf.transfer.call(addressMgc8rIe, uintzbwvymL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisVk9YXct = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCy24iXA = accounts[4]
		const addressnP3lKjF = accounts[1]
		const addresshBaYG9F = accounts[3]
		const uintQY8z2n = BigInt("463")
		const uint256kTtDNLJ = await LedgisVk9YXct.lockCount.call(addressCy24iXA, {from: accounts[0]});
		const boolrfMZc12 = await LedgisVk9YXct.isFrozen.call(addressnP3lKjF, {from: accounts[1]});
		const addressZOeMciL = await LedgisVk9YXct.freeze.call(addresshBaYG9F, {from: accounts[2]});
		const uint256BVNXjnI = await LedgisVk9YXct.afterTime.call(uintQY8z2n, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgispEV00Zo = await Ledgis.new({from: accounts[2]});
		const uintWBVp0d4 = BigInt("1740")
		const addressH9nEUBS = accounts[5]
		const uinth3K9Zc1 = BigInt("982")
		const addressz82O55 = accounts[5]
//		const boolgnnBnfS = await LedgispEV00Zo.mint.call(addressH9nEUBS, uintWBVp0d4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcSplHtw = await LedgispEV00Zo.decreaseAllowance.call(addressz82O55, uinth3K9Zc1, {from: accounts[2]});

		await expect(LedgispEV00Zo.mint.call(addressH9nEUBS, uintWBVp0d4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisqmdBfpb = await Ledgis.new({from: accounts[4]});
		const addressNxCt0sr = accounts[4]
		const addresst6cpIp8 = accounts[4]
		const uint256Zt2wi7p = await LedgisqmdBfpb.totalSupply.call({from: accounts[1]});
//		await LedgisqmdBfpb.whenPaused.call({from: accounts[0]});
		await LedgisqmdBfpb.whenPaused.call({from: accounts[0]});
//		const uint256xBzKtgJ = await LedgisqmdBfpb.balanceOf.call(addressNxCt0sr, {from: accounts[1]});
//		const uint256VF3hHwW = await LedgisqmdBfpb.balanceOf.call(addresst6cpIp8, {from: accounts[0]});

		assert.equal(uint256Zt2wi7p, BigInt("10000000000000"))
		await expect(LedgisqmdBfpb.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZNxPECM = await Ledgis.new({from: accounts[2]});
		const uintxEHpV4O = BigInt("1988")
		const addressAS8MUmJ = accounts[3]
		const uintRH5ggRM = BigInt("272")
		const uintjJhOtRU = BigInt("1940")
		const addresstK0niJu = accounts[1]
//		await LedgisZNxPECM.lockState.call(addressAS8MUmJ, uintxEHpV4O, {from: accounts[1]});
//		await LedgisZNxPECM.pause.call({from: accounts[0]});
//		await LedgisZNxPECM.whenNotFrozen.call({from: accounts[1]});
//		await LedgisZNxPECM.onlyOwner.call({from: accounts[0]});
//		const boolkduBe1g = await LedgisZNxPECM.transferWithLock.call(addresstK0niJu, uintjJhOtRU, uintRH5ggRM, {from: accounts[3]});

		await expect(LedgisZNxPECM.lockState.call(addressAS8MUmJ, uintxEHpV4O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyBvYQ3T = await Ledgis.new({from: accounts[3]});
		const addressIL9E5J = accounts[1]
		const uintWwR4QFK = BigInt("1184")
		const addressnlDNLSD = accounts[2]
		const addressiQ7CqS = accounts[0]
		const uintomwdyac = BigInt("512")
		const uintnAsU6pp = BigInt("1909")
		const addressYif4cCI = accounts[0]
		const uint256AnmKWQD = await LedgisyBvYQ3T.balanceOf.call(addressIL9E5J, {from: accounts[0]});
//		const boolqPsx6JM = await LedgisyBvYQ3T.transferFrom.call(addressiQ7CqS, addressnlDNLSD, uintWwR4QFK, {from: accounts[4]});
//		await LedgisyBvYQ3T.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		await LedgisyBvYQ3T.whenNotFrozen.call({from: accounts[4]});
//		const addressZmfYmem = await LedgisyBvYQ3T.lock.call(addressYif4cCI, uintnAsU6pp, uintomwdyac, {from: accounts[1]});

		assert.equal(uint256AnmKWQD, BigInt("0"))
		await expect(LedgisyBvYQ3T.transferFrom.call(addressiQ7CqS, addressnlDNLSD, uintWwR4QFK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswJjR53K = await Ledgis.new({from: accounts[5]});
		const uintz5y5mRi = BigInt("615")
		const addressa8w9Kr9 = accounts[4]
		const uintxx64Shl = BigInt("1710")
		const addressQ6todpu = accounts[3]
		const uintSfT29U = BigInt("1842")
		const uintKS0gvzN = BigInt("1412")
		const addressRVKcRmJ = accounts[0]
		const boolDgPEH0E = await LedgiswJjR53K.approve.call(addressa8w9Kr9, uintz5y5mRi, {from: accounts[1]});
//		const boolfJrpZ3s = await LedgiswJjR53K.mint.call(addressQ6todpu, uintxx64Shl, {from: accounts[4]});
//		const boolbDOwDnH = await LedgiswJjR53K.transferWithLock.call(addressRVKcRmJ, uintKS0gvzN, uintSfT29U, {from: accounts[1]});

		assert.equal(boolDgPEH0E, true)
		await expect(LedgiswJjR53K.mint.call(addressQ6todpu, uintxx64Shl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisigIaANb = await Ledgis.new({from: accounts[0]});
		const uintCHYE1v5 = BigInt("1476")
		const addressnTCACg = accounts[4]
		const uintnmzXzIU = BigInt("725")
		const addresslz5Zrnx = accounts[1]
		const addressmKadiT = "0x0000000000000000000000000000000000000001"
		const addressl8feYvh = accounts[1]
		const boolWYHJ4Ci = await LedgisigIaANb.approve.call(addressnTCACg, uintCHYE1v5, {from: accounts[2]});
//		const boolENwokb1 = await LedgisigIaANb.decreaseAllowance.call(addresslz5Zrnx, uintnmzXzIU, {from: accounts[4]});
//		const addressyB72kUR = await LedgisigIaANb.transferOwnership.call(addressmKadiT, {from: accounts[3]});
//		const uint256a5ZHtbI = await LedgisigIaANb.balanceOf.call(addressl8feYvh, {from: accounts[0]});

		assert.equal(boolWYHJ4Ci, true)
		await expect(LedgisigIaANb.decreaseAllowance.call(addresslz5Zrnx, uintnmzXzIU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMKThXyf = await Ledgis.new({from: accounts[5]});
		const uintAw9YmKZ = BigInt("92")
		const uintdJDS8Fi = BigInt("378")
		const address6lcFYC = accounts[2]
		const uintBov2pZ5 = BigInt("837")
		const addressN9rGLUT = accounts[5]
		const uint7DphGI = BigInt("116")
		const addressHdPNcu3 = accounts[4]
		const addressheWVoct = accounts[1]
		const boolClkc7tQ = await LedgisMKThXyf.transferWithLockAfter.call(address6lcFYC, uintdJDS8Fi, uintAw9YmKZ, {from: accounts[5]});
//		const boolnFTmMuO = await LedgisMKThXyf.transfer.call(addressN9rGLUT, uintBov2pZ5, {from: accounts[4]});
//		await LedgisMKThXyf.pause.call({from: accounts[0]});
//		const boolEFxJxI0 = await LedgisMKThXyf.transferFrom.call(addressheWVoct, addressHdPNcu3, uint7DphGI, {from: accounts[2]});

		assert.equal(boolClkc7tQ, true)
		await expect(LedgisMKThXyf.transfer.call(addressN9rGLUT, uintBov2pZ5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMKThXyf = await Ledgis.new({from: accounts[5]});
		const addressH2oOtNP = accounts[5]
		const uintMO1zBgK = BigInt("116")
		const addresstg38Qdw = accounts[4]
		const addressjN0mdJh = accounts[1]
		const addresszJ1vEdp = accounts[0]
		const address8cHlFB = accounts[1]
		const boolI8X1mzz = await LedgisMKThXyf.isFrozen.call(addressH2oOtNP, {from: accounts[3]});
//		const boolEFxJxI0 = await LedgisMKThXyf.transferFrom.call(addressjN0mdJh, addresstg38Qdw, uintMO1zBgK, {from: accounts[2]});
//		const uint256OfE8l44 = await LedgisMKThXyf.allowance.call(address8cHlFB, addresszJ1vEdp, {from: accounts[5]});

		assert.equal(boolI8X1mzz, false)
		await expect(LedgisMKThXyf.transferFrom.call(addressjN0mdJh, addresstg38Qdw, uintMO1zBgK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyBvYQ3T = await Ledgis.new({from: accounts[3]});
		const addressYErbGV = accounts[1]
		const uintKGGuhs = BigInt("1906")
		const addressJTidM69 = accounts[1]
		const uintH57lqXU = BigInt("1184")
		const addressNMj2wMw = accounts[2]
		const addresskFvkThf = accounts[0]
		const uintS2QwZXq = BigInt("512")
		const uintIteYV3N = BigInt("1909")
		const address2bk8F9 = accounts[0]
		const uintcHUiUD = BigInt("361")
		const addressg4Yih1F = accounts[3]
		const uint256AnmKWQD = await LedgisyBvYQ3T.balanceOf.call(addressYErbGV, {from: accounts[0]});
//		const addressV74rv9v = await LedgisyBvYQ3T.burn.call(addressJTidM69, uintKGGuhs, {from: accounts[3]});
//		const boolqPsx6JM = await LedgisyBvYQ3T.transferFrom.call(addresskFvkThf, addressNMj2wMw, uintH57lqXU, {from: accounts[4]});
//		await LedgisyBvYQ3T.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressZmfYmem = await LedgisyBvYQ3T.lock.call(address2bk8F9, uintIteYV3N, uintS2QwZXq, {from: accounts[1]});
//		await LedgisyBvYQ3T.lockState.call(addressg4Yih1F, uintcHUiUD, {from: accounts[0]});

		assert.equal(uint256AnmKWQD, BigInt("0"))
		await expect(LedgisyBvYQ3T.burn.call(addressJTidM69, uintKGGuhs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyBvYQ3T = await Ledgis.new({from: accounts[3]});
		const uintbeUZPof = BigInt("253")
		const uintykH88Y7 = BigInt("688")
		const addressLSAGG3X = accounts[3]
		const addressC9xiwgr = accounts[2]
		const uintZ9LGXqy = BigInt("1184")
		const addressfTxCWTX = accounts[2]
		const addresst91bQE = accounts[0]
		const uintJxc75dP = BigInt("512")
		const uintCyDm0sE = BigInt("1909")
		const addressDQbwPh = accounts[0]
		const uintg6mq5ee = BigInt("489")
		const uintfdEMqgO = BigInt("1797")
		const addressHliRuU = accounts[4]
		const addressanDqYo6 = await LedgisyBvYQ3T.lock.call(addressLSAGG3X, uintykH88Y7, uintbeUZPof, {from: accounts[3]});
		const uint256AnmKWQD = await LedgisyBvYQ3T.balanceOf.call(addressC9xiwgr, {from: accounts[0]});
//		const boolqPsx6JM = await LedgisyBvYQ3T.transferFrom.call(addresst91bQE, addressfTxCWTX, uintZ9LGXqy, {from: accounts[4]});
//		await LedgisyBvYQ3T.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		await LedgisyBvYQ3T.whenNotFrozen.call({from: accounts[4]});
//		const addressZmfYmem = await LedgisyBvYQ3T.lock.call(addressDQbwPh, uintCyDm0sE, uintJxc75dP, {from: accounts[1]});
//		const addresso1Wvs3 = await LedgisyBvYQ3T.lockAfter.call(addressHliRuU, uintfdEMqgO, uintg6mq5ee, {from: accounts[4]});

		assert.equal(uint256AnmKWQD, BigInt("0"))
		await expect(LedgisyBvYQ3T.transferFrom.call(addresst91bQE, addressfTxCWTX, uintZ9LGXqy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyBvYQ3T = await Ledgis.new({from: accounts[3]});
		const addressB774OK2 = accounts[2]
		const uintz6MEh3w = BigInt("1420")
		const addressfabaaZa = accounts[4]
		const uintnmpqQiD = BigInt("512")
		const uintqN4kK8F = BigInt("1909")
		const addresseOqftdw = accounts[0]
		const uint256AnmKWQD = await LedgisyBvYQ3T.balanceOf.call(addressB774OK2, {from: accounts[0]});
		const boolQD3Za7 = await LedgisyBvYQ3T.increaseAllowance.call(addressfabaaZa, uintz6MEh3w, {from: accounts[0]});
		const uint256sjPc32y = await LedgisyBvYQ3T.currentTime.call({from: accounts[2]});
//		await LedgisyBvYQ3T.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressZmfYmem = await LedgisyBvYQ3T.lock.call(addresseOqftdw, uintqN4kK8F, uintnmpqQiD, {from: accounts[1]});

		assert.equal(boolQD3Za7, true)
		assert.equal(uint256AnmKWQD, BigInt("0"))
		assert.equal(uint256sjPc32y, BigInt("1630231633"))
		await expect(LedgisyBvYQ3T.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDZNupLj = await Ledgis.new({from: accounts[1]});
		const addressssq8VpS = accounts[1]
		const addressX2t0rwJ = accounts[0]
		const uintESzMc5C = BigInt("1961")
		const uinthzn35E = BigInt("1839")
		const addressgzopfGv = accounts[3]
		const uintXBeUtWh = BigInt("1276")
		const uint256EbhVmf = await LedgisDZNupLj.allowance.call(addressX2t0rwJ, addressssq8VpS, {from: accounts[0]});
//		const addressKwARNcy = await LedgisDZNupLj.lockAfter.call(addressgzopfGv, uinthzn35E, uintESzMc5C, {from: accounts[2]});
//		const uint256bWmhKXl = await LedgisDZNupLj.afterTime.call(uintXBeUtWh, {from: accounts[1]});

		assert.equal(uint256EbhVmf, BigInt("0"))
		await expect(LedgisDZNupLj.lockAfter.call(addressgzopfGv, uinthzn35E, uintESzMc5C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMKThXyf = await Ledgis.new({from: accounts[5]});
		const uintI4QOtCw = BigInt("383")
		const uintMJguhZ = BigInt("837")
		const addressNjQR1qf = accounts[5]
		const uint256Kj3olPr = await LedgisMKThXyf.afterTime.call(uintI4QOtCw, {from: accounts[4]});
//		const boolnFTmMuO = await LedgisMKThXyf.transfer.call(addressNjQR1qf, uintMJguhZ, {from: accounts[4]});

		assert.equal(uint256Kj3olPr, BigInt("1630232020"))
		await expect(LedgisMKThXyf.transfer.call(addressNjQR1qf, uintMJguhZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOQ9u7DK = await Ledgis.new({from: accounts[3]});
		const uintZoAUb2A = BigInt("1325")
		const addressisNpL5o = accounts[2]
		const uintRpXkMVG = BigInt("1911")
		const addressqz0HFKz = accounts[2]
		const addressDvT8HYU = accounts[2]
		const uintPopBX7q = BigInt("1852")
		const addressVmImcRv = accounts[3]
		const uintLSZilPt = BigInt("1245")
		const addressjKTWLZ = accounts[4]
		const addresshTod9cK = accounts[4]
//		const addressaza0Y1 = await LedgisOQ9u7DK.unlock.call(addressisNpL5o, uintZoAUb2A, {from: accounts[3]});
//		await LedgisOQ9u7DK.renounceOwnership.call({from: accounts[3]});
//		const boolkH0ZOcN = await LedgisOQ9u7DK.transferFrom.call(addressDvT8HYU, addressqz0HFKz, uintRpXkMVG, {from: accounts[4]});
//		const boolUMPGatQ = await LedgisOQ9u7DK.transfer.call(addressVmImcRv, uintPopBX7q, {from: accounts[3]});
//		const boolhnRXgt1 = await LedgisOQ9u7DK.transferFrom.call(addresshTod9cK, addressjKTWLZ, uintLSZilPt, {from: accounts[4]});
//		const uint256YLLF3Px = await LedgisOQ9u7DK.currentTime.call({from: accounts[5]});

		await expect(LedgisOQ9u7DK.unlock.call(addressisNpL5o, uintZoAUb2A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMKThXyf = await Ledgis.new({from: accounts[5]});
		const uintcor9AOI = BigInt("41")
		const addressyCfZuU = accounts[4]
		const addresseffot03 = accounts[4]
		const uintLA9nYK = BigInt("563")
		const uintMrifCMO = BigInt("13")
		const addressHTbayHJ = accounts[1]
		const booly4VMczt = await LedgisMKThXyf.increaseAllowance.call(addressyCfZuU, uintcor9AOI, {from: accounts[2]});
		const uint256y88CBrN = await LedgisMKThXyf.lockCount.call(addresseffot03, {from: accounts[2]});
//		const addressmdAtpz = await LedgisMKThXyf.lock.call(addressHTbayHJ, uintMrifCMO, uintLA9nYK, {from: accounts[3]});

		assert.equal(booly4VMczt, true)
		assert.equal(uint256y88CBrN, BigInt("0"))
		await expect(LedgisMKThXyf.lock.call(addressHTbayHJ, uintMrifCMO, uintLA9nYK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOQ9u7DK = await Ledgis.new({from: accounts[3]});
		const addressEB46zP = accounts[4]
		const uintv0B7aWg = BigInt("1595")
		const addressqN43RIr = accounts[3]
		const uintzCVLRv0 = BigInt("1911")
		const addressUyUI95F = accounts[2]
		const addresswewsY2h = accounts[2]
		const uintk7Pz5aj = BigInt("1852")
		const addressGve0unJ = accounts[3]
		const uintAhuycR2 = BigInt("1245")
		const addressVnD3DuL = accounts[6]
		const addresse1dRUg7 = accounts[4]
//		await LedgisOQ9u7DK.pause.call({from: accounts[3]});
//		await LedgisOQ9u7DK.renounceOwnership.call({from: accounts[3]});
//		const addressM6b7hLl = await LedgisOQ9u7DK.freeze.call(addressEB46zP, {from: accounts[0]});
//		const boolI3m0pk0 = await LedgisOQ9u7DK.approve.call(addressqN43RIr, uintv0B7aWg, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkH0ZOcN = await LedgisOQ9u7DK.transferFrom.call(addresswewsY2h, addressUyUI95F, uintzCVLRv0, {from: accounts[4]});
//		const boolUMPGatQ = await LedgisOQ9u7DK.transfer.call(addressGve0unJ, uintk7Pz5aj, {from: accounts[3]});
//		const boolhnRXgt1 = await LedgisOQ9u7DK.transferFrom.call(addresse1dRUg7, addressVnD3DuL, uintAhuycR2, {from: accounts[4]});
//		const uint256YLLF3Px = await LedgisOQ9u7DK.currentTime.call({from: accounts[5]});

		await expect(LedgisOQ9u7DK.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyBvYQ3T = await Ledgis.new({from: accounts[3]});
		const addressEW0YSz4 = accounts[2]
		const addressnc7ak83 = accounts[5]
		const uintEQXKlVQ = BigInt("876")
		const addresst3XIjsO = accounts[1]
		const uint256AnmKWQD = await LedgisyBvYQ3T.balanceOf.call(addressEW0YSz4, {from: accounts[0]});
		const addressc30m1Tc = await LedgisyBvYQ3T.unfreeze.call(addressnc7ak83, {from: accounts[3]});
//		const addressr5knViY = await LedgisyBvYQ3T.burn.call(addresst3XIjsO, uintEQXKlVQ, {from: accounts[3]});

		assert.equal(uint256AnmKWQD, BigInt("0"))
		await expect(LedgisyBvYQ3T.burn.call(addresst3XIjsO, uintEQXKlVQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOQ9u7DK = await Ledgis.new({from: accounts[3]});
		const addressYNqA3Go = accounts[4]
		const uint8Rn2ou = BigInt("1858")
		const addressjkNEnjd = accounts[3]
		const uintQ1MCVH9 = BigInt("1245")
		const addressB7pL9T = accounts[5]
		const addressnyEyFA = accounts[4]
		const addressFt4qv7 = await LedgisOQ9u7DK.transferOwnership.call(addressYNqA3Go, {from: accounts[3]});
		const boolUMPGatQ = await LedgisOQ9u7DK.transfer.call(addressjkNEnjd, uint8Rn2ou, {from: accounts[3]});
//		const boolhnRXgt1 = await LedgisOQ9u7DK.transferFrom.call(addressnyEyFA, addressB7pL9T, uintQ1MCVH9, {from: accounts[4]});
//		const uint256YLLF3Px = await LedgisOQ9u7DK.currentTime.call({from: accounts[5]});

		assert.equal(boolUMPGatQ, true)
		await expect(LedgisOQ9u7DK.transferFrom.call(addressnyEyFA, addressB7pL9T, uintQ1MCVH9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiszXW7Cz = await Ledgis.new({from: accounts[1]});
		const addressSw2FtXE = "0x00000000000000000000000000000000000000-1"
		const uintfaelf1A = BigInt("731")
		const addressgCczhGf = accounts[2]
		const addressK4FtkGz = accounts[3]
		const uintb6jGgWz = BigInt("955")
		const addressW71oMQ9 = accounts[0]
		const addresseWNUfzJ = accounts[6]
//		const uint256EjXikV = await LedgiszXW7Cz.balanceOf.call(addressSw2FtXE, {from: accounts[2]});
//		const boolUSMwYfG = await LedgiszXW7Cz.transferFrom.call(addressK4FtkGz, addressgCczhGf, uintfaelf1A, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgiszXW7Cz.unpause.call({from: accounts[0]});
//		const boolN3L0cl = await LedgiszXW7Cz.decreaseAllowance.call(addressW71oMQ9, uintb6jGgWz, {from: accounts[0]});
//		const addressylKKZp = await LedgiszXW7Cz.unfreeze.call(addresseWNUfzJ, {from: accounts[3]});

		await expect(LedgiszXW7Cz.balanceOf.call(addressSw2FtXE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOQ9u7DK = await Ledgis.new({from: accounts[3]});
		const uintYShhn1 = BigInt("1385")
		const uintRNaPh5e = BigInt("417")
		const addressSBOPANr = accounts[2]
		const addressNkLdPFG = accounts[5]
		const uintqnwzyc3 = BigInt("1325")
		const addressZUallM = accounts[2]
		const uintrePc1Wy = BigInt("1655")
		const addressieo8wD7 = accounts[1]
		const uintmh7nGDs = BigInt("1527")
		const addressoLoVc1 = accounts[3]
		const uintNKpA2r1 = BigInt("625")
		const addressjoae8Cy = accounts[3]
		const addressIfJNFU6 = accounts[1]
		const uintzhPpuEC = BigInt("689")
		const uintrl7qM4E = BigInt("127")
		const addressAivv4I = accounts[3]
		const uintBprZV9u = BigInt("2017")
		const uintLRL21QL = BigInt("315")
		const addressuo7qurI = accounts[1]
		const addressbZaw2iB = accounts[2]
		const uinttFp827G = BigInt("1852")
		const addressxribfGT = accounts[3]
		const addressyVHZu1g = accounts[3]
		const uintzt0iand = BigInt("1245")
		const addressX8UhM1p = accounts[5]
		const addressFf61F2d = accounts[4]
		const addressF7z03wF = accounts[3]
//		const addresscVf31aa = await LedgisOQ9u7DK.lockAfter.call(addressSBOPANr, uintRNaPh5e, uintYShhn1, {from: accounts[3]});
//		const uint256R2PNaJw = await LedgisOQ9u7DK.balanceOf.call(addressNkLdPFG, {from: accounts[1]});
//		const addressaza0Y1 = await LedgisOQ9u7DK.unlock.call(addressZUallM, uintqnwzyc3, {from: accounts[3]});
//		const boolRPWEDn0 = await LedgisOQ9u7DK.increaseAllowance.call(addressieo8wD7, uintrePc1Wy, {from: accounts[1]});
//		await LedgisOQ9u7DK.whenPaused.call({from: accounts[4]});
//		const boolKhSS05m = await LedgisOQ9u7DK.approve.call(addressoLoVc1, uintmh7nGDs, {from: accounts[2]});
//		const boole5oXrX = await LedgisOQ9u7DK.transfer.call(addressjoae8Cy, uintNKpA2r1, {from: accounts[5]});
//		const uint256kX61z0d = await LedgisOQ9u7DK.balanceOf.call(addressIfJNFU6, {from: accounts[2]});
//		await LedgisOQ9u7DK.whenPaused.call({from: accounts[1]});
//		const boolOhn7sD = await LedgisOQ9u7DK.transferWithLockAfter.call(addressAivv4I, uintrl7qM4E, uintzhPpuEC, {from: accounts[3]});
//		const address4UBYVX = await LedgisOQ9u7DK.lock.call(addressuo7qurI, uintLRL21QL, uintBprZV9u, {from: accounts[5]});
//		await LedgisOQ9u7DK.unpause.call({from: accounts[2]});
//		const addressI92k3IL = await LedgisOQ9u7DK.unfreeze.call(addressbZaw2iB, {from: accounts[5]});
//		const boolUMPGatQ = await LedgisOQ9u7DK.transfer.call(addressxribfGT, uinttFp827G, {from: accounts[3]});
//		const uint256XwZZGtr = await LedgisOQ9u7DK.lockCount.call(addressyVHZu1g, {from: accounts[1]});
//		const boolhnRXgt1 = await LedgisOQ9u7DK.transferFrom.call(addressFf61F2d, addressX8UhM1p, uintzt0iand, {from: accounts[4]});
//		const uint256YLLF3Px = await LedgisOQ9u7DK.currentTime.call({from: accounts[5]});
//		const addressfh3aqiW = await LedgisOQ9u7DK.transferOwnership.call(addressF7z03wF, {from: accounts[3]});

		await expect(LedgisOQ9u7DK.lockAfter.call(addressSBOPANr, uintRNaPh5e, uintYShhn1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyBvYQ3T = await Ledgis.new({from: accounts[3]});
		const addressKaqacy7 = accounts[2]
		const uint256AnmKWQD = await LedgisyBvYQ3T.balanceOf.call(addressKaqacy7, {from: accounts[0]});
//		await LedgisyBvYQ3T.unpause.call({from: accounts[3]});

		assert.equal(uint256AnmKWQD, BigInt("0"))
		await expect(LedgisyBvYQ3T.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOQ9u7DK = await Ledgis.new({from: accounts[3]});
		const addressVARlziI = accounts[4]
		const addressAdb1yj = accounts[0]
		const uintIcaobMc = BigInt("1325")
		const addressIm8zNqp = accounts[2]
		const addressYJQvwUw = await LedgisOQ9u7DK.freeze.call(addressVARlziI, {from: accounts[3]});
//		const addressJpherOc = await LedgisOQ9u7DK.transferOwnership.call(addressAdb1yj, {from: accounts[0]});
//		const addressaza0Y1 = await LedgisOQ9u7DK.unlock.call(addressIm8zNqp, uintIcaobMc, {from: accounts[3]});

		await expect(LedgisOQ9u7DK.transferOwnership.call(addressAdb1yj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOQ9u7DK = await Ledgis.new({from: accounts[3]});
		const addressM6uRd5N = accounts[3]
		const uintTLu9jqW = BigInt("1038")
		const uintlWT0Jfd = BigInt("411")
		const addressPIrQ1DP = accounts[3]
		const uintKIjj2mR = BigInt("1325")
		const addressBrzamHa = accounts[3]
		const uint256RNc5pl = await LedgisOQ9u7DK.balanceOf.call(addressM6uRd5N, {from: accounts[2]});
		const booljUg4IRM = await LedgisOQ9u7DK.transferWithLock.call(addressPIrQ1DP, uintlWT0Jfd, uintTLu9jqW, {from: accounts[3]});
//		const addressaza0Y1 = await LedgisOQ9u7DK.unlock.call(addressBrzamHa, uintKIjj2mR, {from: accounts[3]});

		assert.equal(booljUg4IRM, true)
		assert.equal(uint256RNc5pl, BigInt("10000000000000"))
		await expect(LedgisOQ9u7DK.unlock.call(addressBrzamHa, uintKIjj2mR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissVwdh47 = await Ledgis.new({from: accounts[2]});
		const addressePBurcX = accounts[4]
		const addressUYykCgf = accounts[4]
		const uint9YQqI0 = BigInt("1064")
		const addressfhXhIOg = accounts[2]
		const addressZM3FUe0 = accounts[0]
		const uint256F6huLY8 = await LedgissVwdh47.allowance.call(addressUYykCgf, addressePBurcX, {from: accounts[2]});
		const boolEHrhMeu = await LedgissVwdh47.mint.call(addressfhXhIOg, uint9YQqI0, {from: accounts[2]});
//		await LedgissVwdh47.whenNotPaused.call({from: accounts[5]});
//		const addressawhcdKM = await LedgissVwdh47.transferOwnership.call(addressZM3FUe0, {from: accounts[4]});
//		await LedgissVwdh47.whenNotFrozen.call({from: accounts[5]});

		assert.equal(boolEHrhMeu, true)
		assert.equal(uint256F6huLY8, BigInt("0"))
		await expect(LedgissVwdh47.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})