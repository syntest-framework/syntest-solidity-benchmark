const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYiYQV1iO = await KPLAY.new({from: accounts[4]});
		const addresspwvVqXS = accounts[5]
		const uintzzv3JLJ = BigInt("1310")
		const addresshJdqNKS = accounts[0]
		const addressDcqIUsk = await KPLAYiYQV1iO.unfreeze.call(addresspwvVqXS, {from: accounts[2]});
		await KPLAYiYQV1iO.whenNotPaused.call({from: accounts[2]});
		const boolLsSsdZS = await KPLAYiYQV1iO.approve.call(addresshJdqNKS, uintzzv3JLJ, {from: accounts[5]});
		await KPLAYiYQV1iO.pause.call({from: accounts[1]});

		await expect(KPLAYiYQV1iO.unfreeze.call(addresspwvVqXS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDK2ISju = await KPLAY.new({from: accounts[2]});
		const uintwzGbxnA = BigInt("1914")
		const addressjxR5ReM = accounts[4]
		const uintsLpsAJi = BigInt("267")
		const addressS44fOhz = accounts[0]
		await KPLAYDK2ISju.lockState.call(addressjxR5ReM, uintwzGbxnA, {from: accounts[5]});
		const boolYhxhxuE = await KPLAYDK2ISju.transfer.call(addressS44fOhz, uintsLpsAJi, {from: accounts[0]});
		await KPLAYDK2ISju.whenNotFrozen.call({from: accounts[4]});

		await expect(KPLAYDK2ISju.lockState.call(addressjxR5ReM, uintwzGbxnA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYXJALQHg = await KPLAY.new({from: accounts[1]});
		const addresssfE9jt = accounts[2]
		const addressjDRv1W0 = accounts[5]
		const uintkBM1t2h = BigInt("751")
		const uintYef6hlT = BigInt("1889")
		const addressoshHoRx = accounts[0]
		const addresspvnOYZU = accounts[1]
		const addressaYUQwet = accounts[0]
		const uintFJWJybu = BigInt("526")
		const address7v4pMU = accounts[1]
		const uint256WqIk0xj = await KPLAYXJALQHg.allowance.call(addressjDRv1W0, addresssfE9jt, {from: accounts[3]});
		const addressJdz80gQ = await KPLAYXJALQHg.lockAfter.call(addressoshHoRx, uintYef6hlT, uintkBM1t2h, {from: accounts[0]});
		const uint256M6wqovz = await KPLAYXJALQHg.balanceOf.call(addresspvnOYZU, {from: accounts[0]});
		const addressS2bH1fD = await KPLAYXJALQHg.transferOwnership.call(addressaYUQwet, {from: accounts[4]});
		const uint256FwYUV24 = await KPLAYXJALQHg.totalSupply.call({from: accounts[0]});
		const boolwJEIH4g = await KPLAYXJALQHg.transfer.call(address7v4pMU, uintFJWJybu, {from: accounts[2]});

		assert.equal(uint256WqIk0xj, BigInt("0"))
		await expect(KPLAYXJALQHg.lockAfter.call(addressoshHoRx, uintYef6hlT, uintkBM1t2h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAqL8f7q = await KPLAY.new({from: accounts[0]});
		const uintFdkAHB1 = BigInt("1589")
		const addressyXDO78B = accounts[0]
		const boolyeA36hX = await KPLAYAqL8f7q.increaseAllowance.call(addressyXDO78B, uintFdkAHB1, {from: accounts[3]});
		await KPLAYAqL8f7q.renounceOwnership.call({from: accounts[0]});
		await KPLAYAqL8f7q.whenPaused.call({from: accounts[1]});

		assert.equal(boolyeA36hX, true)
		await expect(KPLAYAqL8f7q.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYeY3h2oJ = await KPLAY.new({from: accounts[0]});
		const uintS6Gn6DG = BigInt("1660")
		const uintQdSyAy = BigInt("1781")
		const addressYsUb2v9 = accounts[0]
		const addresst5zm7HL = accounts[0]
		const uint256dz9ydZf = await KPLAYeY3h2oJ.afterTime.call(uintS6Gn6DG, {from: accounts[4]});
		const boolC3MUGYD = await KPLAYeY3h2oJ.decreaseAllowance.call(addressYsUb2v9, uintQdSyAy, {from: accounts[0]});
		const addressNqxplaj = await KPLAYeY3h2oJ.unfreeze.call(addresst5zm7HL, {from: accounts[5]});

		assert.equal(uint256dz9ydZf, BigInt("1630230644"))
		await expect(KPLAYeY3h2oJ.decreaseAllowance.call(addressYsUb2v9, uintQdSyAy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYK3c3uAs = await KPLAY.new({from: accounts[2]});
		const uintZnXise5 = BigInt("1085")
		const addressxpZdrcK = accounts[0]
		const uintBibnYqV = BigInt("327")
		const uintNmNfBY3 = BigInt("1015")
		const addressjzJe5vN = accounts[4]
		const boolsYCduz = await KPLAYK3c3uAs.transfer.call(addressxpZdrcK, uintZnXise5, {from: accounts[1]});
		const addresswDWwGuV = await KPLAYK3c3uAs.lockAfter.call(addressjzJe5vN, uintNmNfBY3, uintBibnYqV, {from: accounts[5]});
		await KPLAYK3c3uAs.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYK3c3uAs.transfer.call(addressxpZdrcK, uintZnXise5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYSeq4Rn0 = await KPLAY.new({from: accounts[1]});
		const addresslAdLWmA = accounts[3]
		const uint3mTAm3 = BigInt("1133")
		const addressOka8wLz = "0x0000000000000000000000000000000000000001"
		const addressaJHWqCp = accounts[2]
		const uint256WKybdCZ = await KPLAYSeq4Rn0.lockCount.call(addresslAdLWmA, {from: accounts[3]});
		const bool3MQuF9 = await KPLAYSeq4Rn0.transfer.call(addressOka8wLz, uint3mTAm3, {from: accounts[3]});
		const uint2561v7QGc = await KPLAYSeq4Rn0.balanceOf.call(addressaJHWqCp, {from: accounts[2]});
		await KPLAYSeq4Rn0.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256WKybdCZ, BigInt("0"))
		await expect(KPLAYSeq4Rn0.transfer.call(addressOka8wLz, uint3mTAm3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYK3c3uAs = await KPLAY.new({from: accounts[2]});
		const uintKh50smi = BigInt("1771")
		const addressCNNNXc2 = accounts[4]
		const addressF9St6oZ = accounts[1]
		const uintc8SbWAM = BigInt("1085")
		const addressVVLGCFH = accounts[0]
		const uintsjuiOW = BigInt("313")
		const uintOw7Z0l3 = BigInt("1015")
		const addressgw4lxAa = accounts[4]
		const boolfcil777 = await KPLAYK3c3uAs.transferFrom.call(addressF9St6oZ, addressCNNNXc2, uintKh50smi, {from: accounts[0]});
		const boolsYCduz = await KPLAYK3c3uAs.transfer.call(addressVVLGCFH, uintc8SbWAM, {from: accounts[1]});
		const addresswDWwGuV = await KPLAYK3c3uAs.lockAfter.call(addressgw4lxAa, uintOw7Z0l3, uintsjuiOW, {from: accounts[5]});
		await KPLAYK3c3uAs.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYK3c3uAs.transferFrom.call(addressF9St6oZ, addressCNNNXc2, uintKh50smi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYMVRQzCw = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFObrb4D = "0x0000000000000000000000000000000000000001"
		const uintDC5zhB = BigInt("71")
		const address9S7mi4 = accounts[1]
		const addressBxXf5cL = accounts[2]
		const uintoVPykW = BigInt("221")
		const addressY4Bp88E = accounts[4]
		const addressSjVBzQ = accounts[4]
		const addressfDoOg1i = accounts[4]
		const uint256ocZvOz = await KPLAYMVRQzCw.balanceOf.call(addressFObrb4D, {from: accounts[2]});
		const addressX3JawE = await KPLAYMVRQzCw.unlock.call(address9S7mi4, uintDC5zhB, {from: "0x0000000000000000000000000000000000000001"});
		const boolI279UYq = await KPLAYMVRQzCw.isFrozen.call(addressBxXf5cL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wqQLLz3 = await KPLAYMVRQzCw.currentTime.call({from: accounts[5]});
		const boolrQWfYr7 = await KPLAYMVRQzCw.transferFrom.call(addressSjVBzQ, addressY4Bp88E, uintoVPykW, {from: accounts[4]});
		const uint256esQhQIS = await KPLAYMVRQzCw.lockCount.call(addressfDoOg1i, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for KPLAY', async () => {
		const KPLAYSeq4Rn0 = await KPLAY.new({from: accounts[1]});
		const addressR8qfjtC = accounts[3]
		const uintcHTasH = BigInt("1133")
		const addressFAn9Vr = "0x0000000000000000000000000000000000000000"
		const addressQEQs3JI = accounts[2]
		const uintiWbdQfx = BigInt("2018")
		const uintzJQSpau = BigInt("997")
		const addresst5zWmIG = accounts[0]
		const uint256WKybdCZ = await KPLAYSeq4Rn0.lockCount.call(addressR8qfjtC, {from: accounts[3]});
		const bool3MQuF9 = await KPLAYSeq4Rn0.transfer.call(addressFAn9Vr, uintcHTasH, {from: accounts[3]});
		const uint2561v7QGc = await KPLAYSeq4Rn0.balanceOf.call(addressQEQs3JI, {from: accounts[2]});
		const boolwd904M0 = await KPLAYSeq4Rn0.transferWithLock.call(addresst5zWmIG, uintzJQSpau, uintiWbdQfx, {from: accounts[4]});
		await KPLAYSeq4Rn0.whenPaused.call({from: accounts[3]});
		await KPLAYSeq4Rn0.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256WKybdCZ, BigInt("0"))
		await expect(KPLAYSeq4Rn0.transfer.call(addressFAn9Vr, uintcHTasH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYSeq4Rn0 = await KPLAY.new({from: accounts[1]});
		const address3sWVxP = accounts[3]
		const addressyfmqSbg = accounts[2]
		const addressKaYTui = accounts[3]
		const uint256WKybdCZ = await KPLAYSeq4Rn0.lockCount.call(address3sWVxP, {from: accounts[3]});
		const uint2561v7QGc = await KPLAYSeq4Rn0.balanceOf.call(addressyfmqSbg, {from: accounts[2]});
		await KPLAYSeq4Rn0.renounceOwnership.call({from: accounts[3]});
		const uint256xBkC8GE = await KPLAYSeq4Rn0.lockCount.call(addressKaYTui, {from: accounts[2]});

		assert.equal(uint2561v7QGc, BigInt("0"))
		assert.equal(uint256WKybdCZ, BigInt("0"))
		await expect(KPLAYSeq4Rn0.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYj0do6dG = await KPLAY.new({from: accounts[4]});
		const addressx4HlCLg = accounts[5]
		const uintYUA3kfO = BigInt("186")
		const addressaATlTb6 = accounts[5]
		const addresswtId2lD = accounts[3]
		const uintsvWoeo = BigInt("894")
		const addressa3TCAP = accounts[4]
		const uint256JFCke4 = await KPLAYj0do6dG.balanceOf.call(addressx4HlCLg, {from: accounts[4]});
		const boolegddEK = await KPLAYj0do6dG.increaseAllowance.call(addressaATlTb6, uintYUA3kfO, {from: accounts[2]});
		const uint256kcP6Lo = await KPLAYj0do6dG.balanceOf.call(addresswtId2lD, {from: accounts[1]});
		const booly3stfJX = await KPLAYj0do6dG.approve.call(addressa3TCAP, uintsvWoeo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolegddEK, true)
		assert.equal(booly3stfJX, true)
		assert.equal(uint256JFCke4, BigInt("0"))
		assert.equal(uint256kcP6Lo, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const uintyY2gXO3 = BigInt("503")
		const uintwpzq0YU = BigInt("1515")
		const addressPedmbbN = accounts[3]
		const uintXGZs9ow = BigInt("717")
		const addressud3kLTr = accounts[3]
		const uintSyH06nR = BigInt("1421")
		const addressKIGrMHp = accounts[2]
		const boolomzTTod = await KPLAYJyvmqS0.transferWithLockAfter.call(addressPedmbbN, uintwpzq0YU, uintyY2gXO3, {from: accounts[0]});
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addressud3kLTr, uintXGZs9ow, {from: accounts[0]});
		const booltt0NqAP = await KPLAYJyvmqS0.mint.call(addressKIGrMHp, uintSyH06nR, {from: accounts[3]});

		assert.equal(boolfzsBsW5, true)
		assert.equal(boolomzTTod, true)
		await expect(KPLAYJyvmqS0.mint.call(addressKIGrMHp, uintSyH06nR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYSeq4Rn0 = await KPLAY.new({from: accounts[1]});
		const addressE0CU9fS = accounts[4]
		const addresstlTpaWg = accounts[5]
		const address12o3WJ = accounts[2]
		const uintWzvmmis = BigInt("524")
		const addressZ73eY0L = accounts[1]
		const addressyD6O1UD = accounts[3]
		const uint256WKybdCZ = await KPLAYSeq4Rn0.lockCount.call(addressE0CU9fS, {from: accounts[3]});
		const addressy960hZQ = await KPLAYSeq4Rn0.transferOwnership.call(addresstlTpaWg, {from: accounts[1]});
		const uint2561v7QGc = await KPLAYSeq4Rn0.balanceOf.call(address12o3WJ, {from: accounts[2]});
		const addressRwrMuPk = await KPLAYSeq4Rn0.burn.call(addressZ73eY0L, uintWzvmmis, {from: accounts[4]});
		await KPLAYSeq4Rn0.renounceOwnership.call({from: accounts[3]});
		const uint256xBkC8GE = await KPLAYSeq4Rn0.lockCount.call(addressyD6O1UD, {from: accounts[2]});

		assert.equal(uint2561v7QGc, BigInt("0"))
		assert.equal(uint256WKybdCZ, BigInt("0"))
		await expect(KPLAYSeq4Rn0.burn.call(addressZ73eY0L, uintWzvmmis, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const uintW3bHs4G = BigInt("717")
		const addresscqLTIk6 = accounts[3]
		const addressfjgTaUW = accounts[1]
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addresscqLTIk6, uintW3bHs4G, {from: accounts[0]});
		const uint256azHieU = await KPLAYJyvmqS0.currentTime.call({from: accounts[1]});
		const uint256OeKClcL = await KPLAYJyvmqS0.balanceOf.call(addressfjgTaUW, {from: accounts[4]});

		assert.equal(boolfzsBsW5, true)
		assert.equal(uint256OeKClcL, BigInt("0"))
		assert.equal(uint256azHieU, BigInt("1630228983"))
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const addressjP9bQF1 = accounts[3]
		const addressl1NY3aa = accounts[3]
		const uintDX6mFTh = BigInt("878")
		const addresspomgQ0B = accounts[4]
		const addressWClt3Js = accounts[2]
		const uintISGTyx1 = BigInt("717")
		const addresslUOKxa2 = accounts[2]
		const bool1EkXYk = await KPLAYJyvmqS0.isFrozen.call(addressjP9bQF1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xRnrRy8 = await KPLAYJyvmqS0.balanceOf.call(addressl1NY3aa, {from: accounts[1]});
		const boolinAWgM = await KPLAYJyvmqS0.transferFrom.call(addressWClt3Js, addresspomgQ0B, uintDX6mFTh, {from: accounts[0]});
		await KPLAYJyvmqS0.renounceOwnership.call({from: accounts[1]});
		await KPLAYJyvmqS0.whenNotPaused.call({from: accounts[3]});
		await KPLAYJyvmqS0.whenNotFrozen.call({from: accounts[3]});
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addresslUOKxa2, uintISGTyx1, {from: accounts[0]});

		assert.equal(bool1EkXYk, false)
		assert.equal(uint256xRnrRy8, BigInt("0"))
		await expect(KPLAYJyvmqS0.transferFrom.call(addressWClt3Js, addresspomgQ0B, uintDX6mFTh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const addressi6tlqSq = accounts[3]
		const uintzNRvyCg = BigInt("1176")
		const addressplCFtdh = accounts[1]
		const uintQlQFPbm = BigInt("878")
		const addressBTvB7e8 = accounts[4]
		const addressLgmby53 = accounts[2]
		const uintWP2iLmW = BigInt("717")
		const addressgaBhvFN = accounts[2]
		const uint256bVbGKQo = await KPLAYJyvmqS0.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xRnrRy8 = await KPLAYJyvmqS0.balanceOf.call(addressi6tlqSq, {from: accounts[1]});
		const boolFqp2IO7 = await KPLAYJyvmqS0.decreaseAllowance.call(addressplCFtdh, uintzNRvyCg, {from: accounts[4]});
		const boolinAWgM = await KPLAYJyvmqS0.transferFrom.call(addressLgmby53, addressBTvB7e8, uintQlQFPbm, {from: accounts[0]});
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addressgaBhvFN, uintWP2iLmW, {from: accounts[0]});

		assert.equal(uint256bVbGKQo, BigInt("10000000000000000"))
		assert.equal(uint256xRnrRy8, BigInt("0"))
		await expect(KPLAYJyvmqS0.decreaseAllowance.call(addressplCFtdh, uintzNRvyCg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const addressA7afSBW = accounts[4]
		const addressUHU2sw = accounts[2]
		const addressv7g0OjQ = accounts[0]
		const uintPDDhZEV = BigInt("1076")
		const addressQLMmF5O = accounts[0]
		const addressJxnxUAL = await KPLAYJyvmqS0.freeze.call(addressA7afSBW, {from: accounts[0]});
		const uint256hYnhS29 = await KPLAYJyvmqS0.balanceOf.call(addressUHU2sw, {from: accounts[0]});
		const uint256OeKClcL = await KPLAYJyvmqS0.balanceOf.call(addressv7g0OjQ, {from: accounts[4]});
		const booljkdelL = await KPLAYJyvmqS0.mint.call(addressQLMmF5O, uintPDDhZEV, {from: accounts[0]});

		assert.equal(booljkdelL, true)
		assert.equal(uint256OeKClcL, BigInt("10000000000000000"))
		assert.equal(uint256hYnhS29, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const addressnXfEbIP = accounts[3]
		const uintLTD3DwD = BigInt("1055")
		const uintCsxCTMd = BigInt("1291")
		const addressI6lrZkf = accounts[4]
		const uintnctdpVm = BigInt("878")
		const addressXrccuD2 = accounts[3]
		const addressw4xbj1B = accounts[2]
		const uintHwaOUXY = BigInt("717")
		const addressiPk7dZR = accounts[2]
		const uint256xRnrRy8 = await KPLAYJyvmqS0.balanceOf.call(addressnXfEbIP, {from: accounts[1]});
		const boolY6Q0xi2 = await KPLAYJyvmqS0.transferWithLock.call(addressI6lrZkf, uintCsxCTMd, uintLTD3DwD, {from: accounts[0]});
		const boolinAWgM = await KPLAYJyvmqS0.transferFrom.call(addressw4xbj1B, addressXrccuD2, uintnctdpVm, {from: accounts[0]});
		await KPLAYJyvmqS0.whenNotPaused.call({from: accounts[3]});
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addressiPk7dZR, uintHwaOUXY, {from: accounts[0]});

		assert.equal(boolY6Q0xi2, true)
		assert.equal(uint256xRnrRy8, BigInt("0"))
		await expect(KPLAYJyvmqS0.transferFrom.call(addressw4xbj1B, addressXrccuD2, uintnctdpVm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const uintnJyMfB = BigInt("404")
		const addressEyrBMui = accounts[3]
		const addressTEMF1Fh = accounts[3]
		const addressIgF4yjo = accounts[1]
		await KPLAYJyvmqS0.pause.call({from: accounts[0]});
		const boolhcKy0Ce = await KPLAYJyvmqS0.transferFrom.call(addressTEMF1Fh, addressEyrBMui, uintnJyMfB, {from: accounts[0]});
		const uint256OeKClcL = await KPLAYJyvmqS0.balanceOf.call(addressIgF4yjo, {from: accounts[4]});
		await KPLAYJyvmqS0.pause.call({from: accounts[4]});

		await expect(KPLAYJyvmqS0.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUvfNKlY = await KPLAY.new({from: accounts[0]});
		const uintPA6c3dh = BigInt("385")
		const uintZYwLhRs = BigInt("283")
		const addressdnUNul6 = accounts[2]
		const uintEty67yy = BigInt("949")
		const uintf5tJNMg = BigInt("353")
		const addressuXGQD5T = accounts[5]
		const uintAOtQTxl = BigInt("1469")
		const uintdf27QxF = BigInt("1341")
		const addressXzgzO37 = accounts[5]
		const addresschdVF1P = accounts[3]
		const addressJUE6xcJ = await KPLAYUvfNKlY.lockAfter.call(addressdnUNul6, uintZYwLhRs, uintPA6c3dh, {from: accounts[0]});
		const boolX8fuJ0e = await KPLAYUvfNKlY.transferWithLock.call(addressuXGQD5T, uintf5tJNMg, uintEty67yy, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYUvfNKlY.onlyOwner.call({from: accounts[1]});
		const addresslqiK3Dd = await KPLAYUvfNKlY.lockAfter.call(addressXzgzO37, uintdf27QxF, uintAOtQTxl, {from: accounts[0]});
		const uint256I09IArG = await KPLAYUvfNKlY.balanceOf.call(addresschdVF1P, {from: accounts[4]});

		await expect(KPLAYUvfNKlY.lockAfter.call(addressdnUNul6, uintZYwLhRs, uintPA6c3dh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const addressYZTKe9w = accounts[1]
		const uintJowFFQV = BigInt("293")
		const addresstXlipMk = accounts[3]
		const addressg0tKaLo = accounts[5]
		const addressTJbxhbG = accounts[1]
		const addressr9q72zQ = await KPLAYJyvmqS0.freeze.call(addressYZTKe9w, {from: accounts[0]});
		await KPLAYJyvmqS0.unpause.call({from: accounts[0]});
		const booljpG1hju = await KPLAYJyvmqS0.transferFrom.call(addressg0tKaLo, addresstXlipMk, uintJowFFQV, {from: accounts[3]});
		const uint256OeKClcL = await KPLAYJyvmqS0.balanceOf.call(addressTJbxhbG, {from: accounts[4]});

		await expect(KPLAYJyvmqS0.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const addressqRHlhz5 = accounts[1]
		const addressWVOX3ei = accounts[3]
		const uintRzvmJp4 = BigInt("1505")
		const addressq5Gzfhh = accounts[1]
		const addressUShMIs4 = accounts[3]
		const addressr1tVnkJ = accounts[3]
		const uint9tvR0u = BigInt("878")
		const addressZX4ejW = accounts[3]
		const addressN4sN4SC = accounts[3]
		const uintcwQCtwx = BigInt("855")
		const addresspTGQhFC = accounts[1]
		const addressPuhBW4O = accounts[0]
		const uintxv962GF = BigInt("717")
		const addresspzR7EIZ = accounts[2]
		const addressQj0pHv7 = await KPLAYJyvmqS0.unfreeze.call(addressqRHlhz5, {from: accounts[0]});
		const uint256xRnrRy8 = await KPLAYJyvmqS0.balanceOf.call(addressWVOX3ei, {from: accounts[1]});
		const boolvkCVmBS = await KPLAYJyvmqS0.transfer.call(addressq5Gzfhh, uintRzvmJp4, {from: accounts[4]});
		await KPLAYJyvmqS0.whenPaused.call({from: accounts[2]});
		const addressIs41Tkt = await KPLAYJyvmqS0.unfreeze.call(addressUShMIs4, {from: accounts[1]});
		const uint256jnqlTDS = await KPLAYJyvmqS0.balanceOf.call(addressr1tVnkJ, {from: accounts[0]});
		const boolinAWgM = await KPLAYJyvmqS0.transferFrom.call(addressN4sN4SC, addressZX4ejW, uint9tvR0u, {from: accounts[0]});
		const boolqZ5kfLU = await KPLAYJyvmqS0.transferFrom.call(addressPuhBW4O, addresspTGQhFC, uintcwQCtwx, {from: accounts[5]});
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addresspzR7EIZ, uintxv962GF, {from: accounts[0]});

		assert.equal(uint256xRnrRy8, BigInt("0"))
		await expect(KPLAYJyvmqS0.transfer.call(addressq5Gzfhh, uintRzvmJp4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const uintqNiVEbg = BigInt("1947")
		const uintZyM4l6 = BigInt("1045")
		const addresszyYyD5 = accounts[0]
		const addressK4OTStC = accounts[0]
		const addresshHb34D0 = await KPLAYJyvmqS0.lock.call(addresszyYyD5, uintZyM4l6, uintqNiVEbg, {from: accounts[0]});
		const uint256OeKClcL = await KPLAYJyvmqS0.balanceOf.call(addressK4OTStC, {from: accounts[4]});

		assert.equal(uint256OeKClcL, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYJyvmqS0 = await KPLAY.new({from: accounts[0]});
		const uintuZVfk2a = BigInt("717")
		const addressZ0rBXrx = accounts[3]
		const uintGwUaYSe = BigInt("451")
		const addressUngUvmh = accounts[4]
		const addressrXfRfmI = accounts[1]
		const boolfzsBsW5 = await KPLAYJyvmqS0.transfer.call(addressZ0rBXrx, uintuZVfk2a, {from: accounts[0]});
		const addressc0JXo9 = await KPLAYJyvmqS0.burn.call(addressUngUvmh, uintGwUaYSe, {from: accounts[0]});
		await KPLAYJyvmqS0.onlyOwner.call({from: accounts[1]});
		const uint256OeKClcL = await KPLAYJyvmqS0.balanceOf.call(addressrXfRfmI, {from: accounts[4]});

		assert.equal(boolfzsBsW5, true)
		await expect(KPLAYJyvmqS0.burn.call(addressUngUvmh, uintGwUaYSe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgBNs447 = await KPLAY.new({from: accounts[0]});
		const uinth8a2IX6 = BigInt("290")
		const addresstJeMul = accounts[0]
		const uintu5wNX8v = BigInt("1641")
		const uintAhxkcnD = BigInt("4")
		const addressVMM58ZS = accounts[1]
		const addressUK0HHHB = await KPLAYgBNs447.unlock.call(addresstJeMul, uinth8a2IX6, {from: accounts[0]});
		await KPLAYgBNs447.renounceOwnership.call({from: accounts[0]});
		const boolKOCqp97 = await KPLAYgBNs447.transferWithLockAfter.call(addressVMM58ZS, uintAhxkcnD, uintu5wNX8v, {from: accounts[2]});

		await expect(KPLAYgBNs447.unlock.call(addresstJeMul, uinth8a2IX6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})