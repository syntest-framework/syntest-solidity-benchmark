const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYm71G7VE = await KPLAY.new({from: accounts[3]});
		const uintVdQXjI = BigInt("71")
		const addressAko2WKo = accounts[2]
		const uinto9mAivW = BigInt("660")
		const uintXRYDHsG = BigInt("1481")
		const addressEtDMjj2 = accounts[1]
		const addressMMzi5M = accounts[0]
		const boolUOiOvcP = await KPLAYm71G7VE.decreaseAllowance.call(addressAko2WKo, uintVdQXjI, {from: accounts[3]});
		const booljaL3dq = await KPLAYm71G7VE.transferWithLock.call(addressEtDMjj2, uintXRYDHsG, uinto9mAivW, {from: accounts[4]});
		const uint256ojzx93h = await KPLAYm71G7VE.balanceOf.call(addressMMzi5M, {from: accounts[4]});
		await KPLAYm71G7VE.whenNotFrozen.call({from: accounts[1]});

		await expect(KPLAYm71G7VE.decreaseAllowance.call(addressAko2WKo, uintVdQXjI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUWoUZDK = await KPLAY.new({from: accounts[0]});
		const addressn2CRUqx = accounts[0]
		const addressu2J3tLv = accounts[0]
		const address6oDlqm = accounts[4]
		const uint256e1Rx1r = await KPLAYUWoUZDK.allowance.call(addressu2J3tLv, addressn2CRUqx, {from: accounts[1]});
		const uint256ESpHod6 = await KPLAYUWoUZDK.lockCount.call(address6oDlqm, {from: accounts[1]});

		assert.equal(uint256ESpHod6, BigInt("0"))
		assert.equal(uint256e1Rx1r, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYeqgatP2 = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJEVGZqv = BigInt("1059")
		const addressHcEdQ7V = accounts[5]
		const addresssiHeR9j = accounts[2]
		const uinty3x69A = BigInt("31")
		const addressQsJFFZ = accounts[0]
		const boolKRBT2T1 = await KPLAYeqgatP2.transfer.call(addressHcEdQ7V, uintJEVGZqv, {from: accounts[2]});
		await KPLAYeqgatP2.pause.call({from: accounts[0]});
		await KPLAYeqgatP2.unpause.call({from: accounts[1]});
		const addressLC9rRT = await KPLAYeqgatP2.unfreeze.call(addresssiHeR9j, {from: accounts[0]});
		const boolzflLe6B = await KPLAYeqgatP2.transfer.call(addressQsJFFZ, uinty3x69A, {from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYodSfgZn = await KPLAY.new({from: accounts[4]});
		const uintZsH03F5 = BigInt("880")
		const uintxD3d2cR = BigInt("1722")
		const addressGcmphOx = accounts[2]
		const uintRRDvT6o = BigInt("1840")
		const addressTYEbOKS = accounts[4]
		const uintWtfCShp = BigInt("1552")
		const address5UNC7u = accounts[3]
		const boolots58pT = await KPLAYodSfgZn.transferWithLock.call(addressGcmphOx, uintxD3d2cR, uintZsH03F5, {from: accounts[3]});
		const addressqNkb86m = await KPLAYodSfgZn.burn.call(addressTYEbOKS, uintRRDvT6o, {from: accounts[0]});
		const boollSFqdrT = await KPLAYodSfgZn.decreaseAllowance.call(address5UNC7u, uintWtfCShp, {from: accounts[5]});
		await KPLAYodSfgZn.unpause.call({from: accounts[4]});

		await expect(KPLAYodSfgZn.transferWithLock.call(addressGcmphOx, uintxD3d2cR, uintZsH03F5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYFztq1gF = await KPLAY.new({from: accounts[3]});
		const uintgUQ6lXq = BigInt("236")
		const addresssLllQsw = accounts[3]
		const uintkCqSIZN = BigInt("578")
		const addressXyKR27U = accounts[5]
		const addressmjwpi0a = accounts[1]
		const boolmcIxMw = await KPLAYFztq1gF.approve.call(addresssLllQsw, uintgUQ6lXq, {from: "0x0000000000000000000000000000000000000001"});
		const boolLqBSa2O = await KPLAYFztq1gF.mint.call(addressXyKR27U, uintkCqSIZN, {from: accounts[5]});
		const addressUEQtx1A = await KPLAYFztq1gF.transferOwnership.call(addressmjwpi0a, {from: accounts[4]});

		assert.equal(boolmcIxMw, true)
		await expect(KPLAYFztq1gF.mint.call(addressXyKR27U, uintkCqSIZN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressoI9nTnX = accounts[3]
		const uinty2CjhS = BigInt("1399")
		const uintNREvTz = BigInt("1981")
		const addressz1XlkDt = accounts[3]
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressoI9nTnX, {from: accounts[1]});
		const addressvd4u8n1 = await KPLAYDcrO25y.lockAfter.call(addressz1XlkDt, uintNREvTz, uinty2CjhS, {from: accounts[3]});

		assert.equal(uint256EqomE8q, BigInt("0"))
		await expect(KPLAYDcrO25y.lockAfter.call(addressz1XlkDt, uintNREvTz, uinty2CjhS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUWoUZDK = await KPLAY.new({from: accounts[0]});
		const addressnwqEc1n = accounts[0]
		const addresscZ8v6Wt = accounts[1]
		const uintLd9kIqz = BigInt("1383")
		const addressGLJCKkS = accounts[0]
		const addressq0H9683 = accounts[4]
		const uint256e1Rx1r = await KPLAYUWoUZDK.allowance.call(addresscZ8v6Wt, addressnwqEc1n, {from: accounts[1]});
		const uint256Gj38Pjg = await KPLAYUWoUZDK.afterTime.call(uintLd9kIqz, {from: accounts[5]});
		const addressx34cwjF = await KPLAYUWoUZDK.unfreeze.call(addressGLJCKkS, {from: accounts[4]});
		const uint256ESpHod6 = await KPLAYUWoUZDK.lockCount.call(addressq0H9683, {from: accounts[1]});

		assert.equal(uint256Gj38Pjg, BigInt("1630229552"))
		assert.equal(uint256e1Rx1r, BigInt("0"))
		await expect(KPLAYUWoUZDK.unfreeze.call(addressGLJCKkS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYFpUf1N9 = await KPLAY.new({from: accounts[1]});
		const uintLIQhSzF = BigInt("291")
		const addresshzOFWSD = accounts[1]
		const addressePCDKbR = accounts[5]
		const uintz6DVER0 = BigInt("957")
		const addressJ3nzwyt = "0x0000000000000000000000000000000000000001"
		await KPLAYFpUf1N9.whenPaused.call({from: accounts[5]});
		const boolPJlDxMr = await KPLAYFpUf1N9.decreaseAllowance.call(addresshzOFWSD, uintLIQhSzF, {from: accounts[0]});
		const uint256JYjIia3 = await KPLAYFpUf1N9.balanceOf.call(addressePCDKbR, {from: accounts[0]});
		const addressH9iFFPL = await KPLAYFpUf1N9.burn.call(addressJ3nzwyt, uintz6DVER0, {from: accounts[2]});

		await expect(KPLAYFpUf1N9.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUWoUZDK = await KPLAY.new({from: accounts[0]});
		const addressxL1UWJg = accounts[0]
		const addressomG4MbY = accounts[0]
		const uintLcQcPz4 = BigInt("769")
		const addressnT53EG = accounts[0]
		const addressG0eV4v = accounts[2]
		const uintTsUDueV = BigInt("566")
		const uint78Trmm = BigInt("328")
		const addresspPUqW3D = accounts[1]
		const addressgu7MhV = accounts[5]
		const uint256e1Rx1r = await KPLAYUWoUZDK.allowance.call(addressomG4MbY, addressxL1UWJg, {from: accounts[1]});
		const boolAbus5S = await KPLAYUWoUZDK.transferFrom.call(addressG0eV4v, addressnT53EG, uintLcQcPz4, {from: accounts[4]});
		const boolDEbi40 = await KPLAYUWoUZDK.transferWithLock.call(addresspPUqW3D, uint78Trmm, uintTsUDueV, {from: accounts[2]});
		const uint256ESpHod6 = await KPLAYUWoUZDK.lockCount.call(addressgu7MhV, {from: accounts[1]});

		assert.equal(uint256e1Rx1r, BigInt("0"))
		await expect(KPLAYUWoUZDK.transferFrom.call(addressG0eV4v, addressnT53EG, uintLcQcPz4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYFpUf1N9 = await KPLAY.new({from: accounts[1]});
		const addressZQdDn3q = accounts[5]
		const uint256JYjIia3 = await KPLAYFpUf1N9.balanceOf.call(addressZQdDn3q, {from: accounts[0]});
		const uint256bahgzDo = await KPLAYFpUf1N9.currentTime.call({from: accounts[0]});

		assert.equal(uint256JYjIia3, BigInt("0"))
		assert.equal(uint256bahgzDo, BigInt("1630228160"))
	});

	it('test for KPLAY', async () => {
		const KPLAYZYVDNet = await KPLAY.new({from: accounts[3]});
		const uintNYvxCUP = BigInt("2002")
		const uintgT75xvI = BigInt("301")
		const addressBxN8zMY = accounts[3]
		const uint256dclyfYm = await KPLAYZYVDNet.afterTime.call(uintNYvxCUP, {from: accounts[3]});
		const boolC19OruZ = await KPLAYZYVDNet.increaseAllowance.call(addressBxN8zMY, uintgT75xvI, {from: accounts[4]});
		await KPLAYZYVDNet.whenNotPaused.call({from: accounts[4]});
		const uint256CaCMoxC = await KPLAYZYVDNet.currentTime.call({from: accounts[1]});

		assert.equal(boolC19OruZ, true)
		assert.equal(uint256dclyfYm, BigInt("1630230179"))
		await expect(KPLAYZYVDNet.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const uintywiPmbr = BigInt("1840")
		const addressUfXM4OT = accounts[3]
		const uintPwX2NU = BigInt("1401")
		const uintDD7OHSX = BigInt("1981")
		const addresssz5b5oL = accounts[3]
		await KPLAYDcrO25y.lockState.call(addressUfXM4OT, uintywiPmbr, {from: accounts[5]});
		const addressvd4u8n1 = await KPLAYDcrO25y.lockAfter.call(addresssz5b5oL, uintDD7OHSX, uintPwX2NU, {from: accounts[3]});

		await expect(KPLAYDcrO25y.lockState.call(addressUfXM4OT, uintywiPmbr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressbMFrIHj = accounts[4]
		const uintTJ5kIEu = BigInt("991")
		const addresszWsOPRY = accounts[2]
		const uintZbrCoPz = BigInt("812")
		const addressQxVa1Wy = accounts[1]
		const uintCpgAnNN = BigInt("1399")
		const uintmFinqve = BigInt("1981")
		const addressAXKvFp3 = accounts[3]
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressbMFrIHj, {from: accounts[1]});
		const boolEUtbE25 = await KPLAYDcrO25y.transfer.call(addresszWsOPRY, uintTJ5kIEu, {from: accounts[3]});
		const boolKLD1NmU = await KPLAYDcrO25y.decreaseAllowance.call(addressQxVa1Wy, uintZbrCoPz, {from: accounts[2]});
		const addressvd4u8n1 = await KPLAYDcrO25y.lockAfter.call(addressAXKvFp3, uintmFinqve, uintCpgAnNN, {from: accounts[3]});

		assert.equal(uint256EqomE8q, BigInt("0"))
		await expect(KPLAYDcrO25y.transfer.call(addresszWsOPRY, uintTJ5kIEu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYei2sHDK = await KPLAY.new({from: accounts[4]});
		const uinteG2tWL = BigInt("1318")
		const uintefOMhG2 = BigInt("626")
		const addresszUZ0R9h = accounts[0]
		const uintM86bNTD = BigInt("1347")
		const addressIrwO1pe = accounts[3]
		const addressJuXAqVm = await KPLAYei2sHDK.lockAfter.call(addresszUZ0R9h, uintefOMhG2, uinteG2tWL, {from: accounts[4]});
		await KPLAYei2sHDK.onlyOwner.call({from: accounts[2]});
		const addressnN9uJTM = await KPLAYei2sHDK.unlock.call(addressIrwO1pe, uintM86bNTD, {from: accounts[3]});

		await expect(KPLAYei2sHDK.lockAfter.call(addresszUZ0R9h, uintefOMhG2, uinteG2tWL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYFpUf1N9 = await KPLAY.new({from: accounts[1]});
		const uintOOxQug = BigInt("1313")
		const addressFR9Nb1w = accounts[1]
		const uint256TmgBcrH = await KPLAYFpUf1N9.totalSupply.call({from: accounts[0]});
		const boolPJlDxMr = await KPLAYFpUf1N9.decreaseAllowance.call(addressFR9Nb1w, uintOOxQug, {from: accounts[0]});

		assert.equal(uint256TmgBcrH, BigInt("10000000000000000"))
		await expect(KPLAYFpUf1N9.decreaseAllowance.call(addressFR9Nb1w, uintOOxQug, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUWoUZDK = await KPLAY.new({from: accounts[0]});
		const addressIbk9vyg = accounts[0]
		const addressGzHoKb = accounts[0]
		const uintarUSona = BigInt("1753")
		const addressTqzzAM7 = accounts[2]
		const uintrJK7Lz = BigInt("769")
		const addressRzF9kjl = accounts[0]
		const addressR2taHH5 = accounts[2]
		const uintCJXFkgv = BigInt("1849")
		const uintKTnZvGO = BigInt("851")
		const addresswjAZL6o = accounts[1]
		const uintxynIH9Q = BigInt("566")
		const uintqZNkCXV = BigInt("328")
		const addressrLCOhgs = accounts[1]
		const addressoimc9eG = accounts[5]
		const uint256e1Rx1r = await KPLAYUWoUZDK.allowance.call(addressGzHoKb, addressIbk9vyg, {from: accounts[1]});
		const boolxOsi3MH = await KPLAYUWoUZDK.transfer.call(addressTqzzAM7, uintarUSona, {from: accounts[0]});
		const boolAbus5S = await KPLAYUWoUZDK.transferFrom.call(addressR2taHH5, addressRzF9kjl, uintrJK7Lz, {from: accounts[4]});
		const addressty6Aax = await KPLAYUWoUZDK.lockAfter.call(addresswjAZL6o, uintKTnZvGO, uintCJXFkgv, {from: accounts[1]});
		const boolDEbi40 = await KPLAYUWoUZDK.transferWithLock.call(addressrLCOhgs, uintqZNkCXV, uintxynIH9Q, {from: accounts[2]});
		await KPLAYUWoUZDK.onlyOwner.call({from: accounts[1]});
		const uint256ESpHod6 = await KPLAYUWoUZDK.lockCount.call(addressoimc9eG, {from: accounts[1]});

		assert.equal(boolxOsi3MH, true)
		assert.equal(uint256e1Rx1r, BigInt("0"))
		await expect(KPLAYUWoUZDK.transferFrom.call(addressR2taHH5, addressRzF9kjl, uintrJK7Lz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const uintWgkanJz = BigInt("155")
		const addressfz6Qu8p = accounts[2]
		const addressgymEEGo = accounts[4]
		const uintUIrjSN = BigInt("1399")
		const uintzVSGixp = BigInt("1981")
		const addressD3gbDhx = accounts[3]
		const boolKLWHKlW = await KPLAYDcrO25y.mint.call(addressfz6Qu8p, uintWgkanJz, {from: accounts[0]});
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressgymEEGo, {from: accounts[1]});
		const addressvd4u8n1 = await KPLAYDcrO25y.lockAfter.call(addressD3gbDhx, uintzVSGixp, uintUIrjSN, {from: accounts[3]});

		assert.equal(boolKLWHKlW, true)
		assert.equal(uint256EqomE8q, BigInt("0"))
		await expect(KPLAYDcrO25y.lockAfter.call(addressD3gbDhx, uintzVSGixp, uintUIrjSN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressm089v8P = accounts[4]
		const addressqNfnwlw = accounts[0]
		const uintGQ9urxs = BigInt("1399")
		const uintpTAru4k = BigInt("1981")
		const addressd6QyGoF = accounts[3]
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressm089v8P, {from: accounts[1]});
		const boola1VyeVh = await KPLAYDcrO25y.isFrozen.call(addressqNfnwlw, {from: accounts[5]});
		const addressvd4u8n1 = await KPLAYDcrO25y.lockAfter.call(addressd6QyGoF, uintpTAru4k, uintGQ9urxs, {from: accounts[3]});

		assert.equal(boola1VyeVh, false)
		assert.equal(uint256EqomE8q, BigInt("0"))
		await expect(KPLAYDcrO25y.lockAfter.call(addressd6QyGoF, uintpTAru4k, uintGQ9urxs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYme83Nef = await KPLAY.new({from: accounts[0]});
		const uintm0XAqtp = BigInt("43")
		const addressVeKTf6F = accounts[1]
		const uintYzhoYZo = BigInt("1210")
		const addressM0hYfHi = accounts[5]
		await KPLAYme83Nef.pause.call({from: accounts[0]});
		const addressRXM9bT = await KPLAYme83Nef.burn.call(addressVeKTf6F, uintm0XAqtp, {from: accounts[1]});
		const boolgUPIVkx = await KPLAYme83Nef.mint.call(addressM0hYfHi, uintYzhoYZo, {from: accounts[4]});

		await expect(KPLAYme83Nef.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressjLWQsuJ = accounts[4]
		const uintn4Qozx2 = BigInt("964")
		const uintojPRbE = BigInt("52")
		const addressjHewH62 = accounts[2]
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressjLWQsuJ, {from: accounts[1]});
		const boolr5pdkvi = await KPLAYDcrO25y.transferWithLockAfter.call(addressjHewH62, uintojPRbE, uintn4Qozx2, {from: accounts[0]});

		assert.equal(boolr5pdkvi, true)
		assert.equal(uint256EqomE8q, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressCP6CKYy = accounts[3]
		const addressqZd9gLQ = accounts[4]
		const uintUC4uGI9 = BigInt("1846")
		const addressEubB5vq = accounts[2]
		const addressAIgSOE1 = await KPLAYDcrO25y.transferOwnership.call(addressCP6CKYy, {from: accounts[0]});
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressqZd9gLQ, {from: accounts[1]});
		const boolMGNeSK0 = await KPLAYDcrO25y.decreaseAllowance.call(addressEubB5vq, uintUC4uGI9, {from: accounts[1]});

		assert.equal(uint256EqomE8q, BigInt("0"))
		await expect(KPLAYDcrO25y.decreaseAllowance.call(addressEubB5vq, uintUC4uGI9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const uintLXDxEU2 = BigInt("1257")
		const uintj4voC2G = BigInt("801")
		const addressCv29Suo = "0x0000000000000000000000000000000000000001"
		const addressr8FpV54 = accounts[5]
		const addressrMoywf0 = accounts[3]
		const boolmGqzGDD = await KPLAYDcrO25y.transferWithLock.call(addressCv29Suo, uintj4voC2G, uintLXDxEU2, {from: accounts[0]});
		const uint256oRKdUlV = await KPLAYDcrO25y.balanceOf.call(addressr8FpV54, {from: accounts[3]});
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressrMoywf0, {from: accounts[1]});

		assert.equal(boolmGqzGDD, true)
		assert.equal(uint256EqomE8q, BigInt("0"))
		assert.equal(uint256oRKdUlV, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addresskVwzXwa = accounts[3]
		const uintO6EWI0f = BigInt("1673")
		const addressR8tvVPY = accounts[5]
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addresskVwzXwa, {from: accounts[1]});
		await KPLAYDcrO25y.renounceOwnership.call({from: accounts[0]});
		const booleoqob3N = await KPLAYDcrO25y.transfer.call(addressR8tvVPY, uintO6EWI0f, {from: accounts[4]});

		assert.equal(uint256EqomE8q, BigInt("0"))
		await expect(KPLAYDcrO25y.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYovpAzbd = await KPLAY.new({from: accounts[3]});
		const addressERk8yxa = "0x0000000000000000000000000000000000000001"
		await KPLAYovpAzbd.unpause.call({from: accounts[3]});
		await KPLAYovpAzbd.whenNotPaused.call({from: accounts[2]});
		const uint256tCCTne = await KPLAYovpAzbd.balanceOf.call(addressERk8yxa, {from: accounts[0]});

		await expect(KPLAYovpAzbd.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const uintipwhKYP = BigInt("324")
		const uintjmxPnHH = BigInt("549")
		const addressaz0q52e = accounts[0]
		const uintKOHTf9e = BigInt("2035")
		const addressJ9lqZQs = accounts[1]
		const addressJq7byIb = accounts[0]
		const addresszr9HlIx = await KPLAYDcrO25y.lock.call(addressaz0q52e, uintjmxPnHH, uintipwhKYP, {from: accounts[0]});
		const boolFzvy8s = await KPLAYDcrO25y.transferFrom.call(addressJq7byIb, addressJ9lqZQs, uintKOHTf9e, {from: accounts[2]});

		await expect(KPLAYDcrO25y.transferFrom.call(addressJq7byIb, addressJ9lqZQs, uintKOHTf9e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const uinthLZ2r0D = BigInt("471")
		const addresstuz2aMD = accounts[1]
		const addressyyqs4P = accounts[4]
		const addressGeLdlMs = "0x0000000000000000000000000000000000000001"
		const addressDcRubE2 = await KPLAYDcrO25y.unlock.call(addresstuz2aMD, uinthLZ2r0D, {from: accounts[0]});
		await KPLAYDcrO25y.renounceOwnership.call({from: accounts[0]});
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressyyqs4P, {from: accounts[1]});
		const uint256VtEFHtQ = await KPLAYDcrO25y.lockCount.call(addressGeLdlMs, {from: accounts[4]});

		await expect(KPLAYDcrO25y.unlock.call(addresstuz2aMD, uinthLZ2r0D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressUOeH420 = accounts[3]
		const addressxt0aZdQ = accounts[3]
		const addressrjRybiX = accounts[4]
		const addressHTr8QYV = await KPLAYDcrO25y.freeze.call(addressUOeH420, {from: accounts[0]});
		const uint256EqomE8q = await KPLAYDcrO25y.balanceOf.call(addressxt0aZdQ, {from: accounts[1]});
		const uint256QMY2zc = await KPLAYDcrO25y.lockCount.call(addressrjRybiX, {from: accounts[4]});

		assert.equal(uint256EqomE8q, BigInt("0"))
		assert.equal(uint256QMY2zc, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYDcrO25y = await KPLAY.new({from: accounts[0]});
		const addressNDMqbp = accounts[3]
		const uintCX8LE7R = BigInt("2009")
		const addressiunPCy7 = accounts[1]
		const addressTgKvXnp = accounts[1]
		const uintSVSNgfh = BigInt("211")
		const addressHNa33yI = accounts[0]
		const addressWlgLsRz = await KPLAYDcrO25y.unfreeze.call(addressNDMqbp, {from: accounts[0]});
		await KPLAYDcrO25y.pause.call({from: accounts[3]});
		const boolFzvy8s = await KPLAYDcrO25y.transferFrom.call(addressTgKvXnp, addressiunPCy7, uintCX8LE7R, {from: accounts[2]});
		const boolZhq3LGX = await KPLAYDcrO25y.transfer.call(addressHNa33yI, uintSVSNgfh, {from: accounts[1]});

		await expect(KPLAYDcrO25y.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})