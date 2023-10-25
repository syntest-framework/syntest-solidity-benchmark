const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressKrZQzW = accounts[5]
		const LayerxrEEmCH9 = await Layerx.new(addressKrZQzW, {from: accounts[1]});
		const addressngWFb5o = accounts[4]
		const byteiD9nrI = "0x1a1f021918180d030a14050c011907070d091d050e041a150f0f061610"
		const uintGkvkqCH = BigInt("214")
		const addresszMWNryz = accounts[0]
		const uintdvQ2ZEq = BigInt("661")
//		const addresssrttm5Y = await LayerxrEEmCH9.transferOwnership.call(addressngWFb5o, {from: accounts[0]});
//		const boolrfQpI3z = await LayerxrEEmCH9.approveAndCall.call(addresszMWNryz, uintGkvkqCH, byteiD9nrI, {from: accounts[2]});
//		await LayerxrEEmCH9.addStakePayment.call({from: accounts[1]});
//		const uintHbI8SbB = await LayerxrEEmCH9.lock.call(uintdvQ2ZEq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxrEEmCH9.transferOwnership.call(addressngWFb5o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressm0QmA4A = accounts[2]
		const LayerxOvODOD7 = await Layerx.new(addressm0QmA4A, {from: accounts[0]});
		const addressPAgea8j = accounts[0]
		const addressLi76FP = accounts[5]
		const addressZDDm5k1 = accounts[4]
		const uintMgDJEu2 = await LayerxOvODOD7.getStakesNum.call({from: accounts[2]});
//		const addresss3nXClW = await LayerxOvODOD7.transferOwnership.call(addressPAgea8j, {from: accounts[3]});
//		const uintFBdjClF = await LayerxOvODOD7.balanceOf.call(addressLi76FP, {from: accounts[0]});
//		const uintBHOKgMF = await LayerxOvODOD7.balanceOf.call(addressZDDm5k1, {from: accounts[2]});
//		const uintdaS5xz = await LayerxOvODOD7.totalSupply.call({from: accounts[0]});

		assert.equal(uintMgDJEu2, BigInt("1"))
		await expect(LayerxOvODOD7.transferOwnership.call(addressPAgea8j, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXmtnRCN = accounts[0]
		const Layerxw09FAmp = await Layerx.new(addressXmtnRCN, {from: accounts[5]});
		const uintzOV1fiU = BigInt("906")
		const addressJahyoG2 = "0x0000000000000000000000000000000000000001"
		const uintfAagbcq = await Layerxw09FAmp.totalSupply.call({from: accounts[3]});
		const boolJm21fna = await Layerxw09FAmp.transfer.call(addressJahyoG2, uintzOV1fiU, {from: accounts[0]});

		assert.equal(boolJm21fna, true)
		assert.equal(uintfAagbcq, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addressJqTQjxA = accounts[1]
		const LayerxjtlP4Gt = await Layerx.new(addressJqTQjxA, {from: accounts[2]});
		const uintBoWt43J = BigInt("1848")
		const addressd9pdjcA = accounts[3]
		const uintfeUY1Sq = BigInt("1649")
		const addressEyERfem = accounts[0]
		const addressWxB8gjz = accounts[0]
//		await LayerxjtlP4Gt.paused.call({from: accounts[2]});
//		await LayerxjtlP4Gt.paused.call({from: accounts[4]});
//		const uintnB0F0X = await LayerxjtlP4Gt.withdraw.call(uintBoWt43J, {from: accounts[2]});
//		const addressrKE7tt = await LayerxjtlP4Gt.transferOwnership.call(addressd9pdjcA, {from: accounts[1]});
//		const boolHWozkuU = await LayerxjtlP4Gt.transfer.call(addressEyERfem, uintfeUY1Sq, {from: accounts[1]});
//		const addresscW17iP1 = await LayerxjtlP4Gt.setNewStakeCreator.call(addressWxB8gjz, {from: accounts[0]});

		await expect(LayerxjtlP4Gt.paused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfHAwXaL = accounts[2]
		const LayerxlzdwJwx = await Layerx.new(addressfHAwXaL, {from: accounts[3]});
		const uintMAHMSfA = BigInt("649")
		const addresshVy9OGj = accounts[4]
		const byteF9z6Poi = "0x200518121d1a110e0c0d101d1403031a"
		const uintE2aXHD = BigInt("1776")
		const addresswY7x05q = accounts[0]
		const booloCa0uM3 = await LayerxlzdwJwx.approve.call(addresshVy9OGj, uintMAHMSfA, {from: accounts[2]});
		const uintZNtLWMm = await LayerxlzdwJwx.getStakesNum.call({from: accounts[5]});
//		const boolu63kH6w = await LayerxlzdwJwx.approveAndCall.call(addresswY7x05q, uintE2aXHD, byteF9z6Poi, {from: accounts[1]});

		assert.equal(booloCa0uM3, true)
		assert.equal(uintZNtLWMm, BigInt("1"))
		await expect(LayerxlzdwJwx.approveAndCall.call(addresswY7x05q, uintE2aXHD, byteF9z6Poi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDcTX5u3 = accounts[2]
		const LayerxjMHnalx = await Layerx.new(addressDcTX5u3, {from: accounts[2]});
		const addressAbzeTVM = accounts[3]
		const addressVcno0DG = accounts[0]
		const uintxhttLqD = BigInt("394")
		const address7eCpxh = accounts[4]
		const addresscnuwGJ = accounts[5]
		const uintUDPzFtC = await LayerxjMHnalx.allowance.call(addressVcno0DG, addressAbzeTVM, {from: accounts[2]});
//		await LayerxjMHnalx.unlock.call({from: accounts[3]});
//		const boolx8l6Pre = await LayerxjMHnalx.transferFrom.call(addresscnuwGJ, address7eCpxh, uintxhttLqD, {from: accounts[0]});

		assert.equal(uintUDPzFtC, BigInt("0"))
		await expect(LayerxjMHnalx.unlock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresse4o9ays = accounts[2]
		const LayerxjMHnalx = await Layerx.new(addresse4o9ays, {from: accounts[2]});
		const addresslCXSmtq = accounts[3]
		const addressFlrk2fj = accounts[0]
		const uintdodNuUy = BigInt("1880")
		const addressq4h2f6H = accounts[1]
		const uintV4pljpO = BigInt("1727")
		const uintb1S0M3b = BigInt("394")
		const addressuxekIgi = accounts[5]
		const addressOw4lNGT = accounts[5]
		const uintUDPzFtC = await LayerxjMHnalx.allowance.call(addressFlrk2fj, addresslCXSmtq, {from: accounts[2]});
		const booloRAZUHm = await LayerxjMHnalx.transfer.call(addressq4h2f6H, uintdodNuUy, {from: accounts[2]});
//		const uintbiOXI7G = await LayerxjMHnalx.withdraw.call(uintV4pljpO, {from: accounts[0]});
//		const boolx8l6Pre = await LayerxjMHnalx.transferFrom.call(addressOw4lNGT, addressuxekIgi, uintb1S0M3b, {from: accounts[0]});

		assert.equal(booloRAZUHm, true)
		assert.equal(uintUDPzFtC, BigInt("0"))
		await expect(LayerxjMHnalx.withdraw.call(uintV4pljpO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEc9NaDb = accounts[2]
		const LayerxjMHnalx = await Layerx.new(addressEc9NaDb, {from: accounts[2]});
		const addressFUXnY7 = accounts[3]
		const addressHvOFMJY = accounts[0]
		const uintPDtJw3 = BigInt("394")
		const addressOQgZwLo = accounts[4]
		const addresshEyz8Hg = accounts[5]
		const uintUDPzFtC = await LayerxjMHnalx.allowance.call(addressHvOFMJY, addressFUXnY7, {from: accounts[2]});
//		const boolx8l6Pre = await LayerxjMHnalx.transferFrom.call(addresshEyz8Hg, addressOQgZwLo, uintPDtJw3, {from: accounts[0]});

		assert.equal(uintUDPzFtC, BigInt("0"))
		await expect(LayerxjMHnalx.transferFrom.call(addresshEyz8Hg, addressOQgZwLo, uintPDtJw3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBVrPGq4 = accounts[3]
		const LayerxRBqlqfw = await Layerx.new(addressBVrPGq4, {from: accounts[2]});
		const boolQ8TGu6G = false
		const uintf9BIIJ = BigInt("1940")
		const addressVOfhaug = accounts[2]
		const uintUTEEm05 = BigInt("1817")
		const addressauXBk0v = accounts[3]
		const booljVFTrVM = await LayerxRBqlqfw.setIsPaused.call(boolQ8TGu6G, {from: accounts[3]});
//		const booloaEmXKW = await LayerxRBqlqfw.transfer.call(addressVOfhaug, uintf9BIIJ, {from: accounts[5]});
//		const boolmBB41zV = await LayerxRBqlqfw.transfer.call(addressauXBk0v, uintUTEEm05, {from: accounts[2]});

		await expect(LayerxRBqlqfw.transfer.call(addressVOfhaug, uintf9BIIJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresslEERehf = accounts[1]
		const LayerxXx8Fba = await Layerx.new(addresslEERehf, {from: accounts[5]});
		const boolZNbOwZ7 = false
		const uintb9QkbUF = BigInt("1346")
		const addressTMeeUbn = accounts[3]
		const uintlbKr9rU = BigInt("1908")
		const addressedH0FES = accounts[5]
		const addresse9TbaVB = accounts[3]
		const addressoo3kovj = "0x0000000000000000000000000000000000000001"
		const addressG11k1S2 = accounts[2]
		const boolxIh8yZw = await LayerxXx8Fba.setIsPaused.call(boolZNbOwZ7, {from: accounts[1]});
		const boolUA5fgVc = await LayerxXx8Fba.approve.call(addressTMeeUbn, uintb9QkbUF, {from: accounts[3]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[3]});
//		const boolIbQ8zY = await LayerxXx8Fba.transferFrom.call(addresse9TbaVB, addressedH0FES, uintlbKr9rU, {from: accounts[5]});
//		const address89QXaM = await LayerxXx8Fba.transferOwnership.call(addressoo3kovj, {from: accounts[3]});
//		const addressTL1NCvj = await LayerxXx8Fba.setNewStakeCreator.call(addressG11k1S2, {from: accounts[4]});

		assert.equal(boolUA5fgVc, true)
		await expect(LayerxXx8Fba.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLwD9KBM = accounts[4]
		const LayerxrOrmeYR = await Layerx.new(addressLwD9KBM, {from: "0x0000000000000000000000000000000000000001"});
		const uinthzE3co9 = BigInt("1847")
		const uintNnC0ieb = BigInt("378")
		const uintsi5UQxW = await LayerxrOrmeYR.totalSupply.call({from: accounts[4]});
		const uint256KNaaAJ2 = await LayerxrOrmeYR.burn.call(uinthzE3co9, {from: accounts[3]});
		const uint256MgOxV0e = await LayerxrOrmeYR.burn.call(uintNnC0ieb, {from: accounts[2]});
	});

	it('test for Layerx', async () => {
		const addressrakOfd = accounts[0]
		const LayerxpFW9vQ = await Layerx.new(addressrakOfd, {from: accounts[5]});
		const addressuTu48oA = accounts[0]
		const byteGWXgG9u = "0x1d09091b"
		const uintwm6i6oy = BigInt("1629")
		const addressHhiZUly = accounts[0]
		const bytetzDPgy4 = "0x19171909110812"
		const uintmb4RTvj = BigInt("1523")
		const addressh1C5vb = accounts[1]
		const uintIpcgI9E = BigInt("1546")
		const uintZhJK7qj = await LayerxpFW9vQ.balanceOf.call(addressuTu48oA, {from: accounts[0]});
		const uint3v0pb8 = await LayerxpFW9vQ.totalSupply.call({from: accounts[2]});
//		const boolh4z4Ykb = await LayerxpFW9vQ.approveAndCall.call(addressHhiZUly, uintwm6i6oy, byteGWXgG9u, {from: accounts[1]});
//		const boolDP0UPmj = await LayerxpFW9vQ.approveAndCall.call(addressh1C5vb, uintmb4RTvj, bytetzDPgy4, {from: accounts[2]});
//		const uintt5Z61EA = await LayerxpFW9vQ.withdraw.call(uintIpcgI9E, {from: accounts[0]});
//		const uinti4PrgsX = await LayerxpFW9vQ.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint3v0pb8, BigInt("40000000000000000000000"))
		assert.equal(uintZhJK7qj, BigInt("40000000000000000000000"))
		await expect(LayerxpFW9vQ.approveAndCall.call(addressHhiZUly, uintwm6i6oy, byteGWXgG9u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdmMzK5a = accounts[1]
		const LayerxXx8Fba = await Layerx.new(addressdmMzK5a, {from: accounts[5]});
		const boolZNbOwZ7 = false
		const uintyuXUH56 = BigInt("1346")
		const addressRPEqZkm = accounts[3]
		const byteRmnl0X0 = "0x1217"
		const uintT1pujn = BigInt("227")
		const addressknHuDRB = accounts[0]
		const uintXZ7Eqxo = BigInt("131")
		const addresseBf7Elg = accounts[5]
		const addresszBMDKni = accounts[3]
		const addressBJhgALl = "0x0000000000000000000000000000000000000001"
		const addressJTymlmL = accounts[2]
		const boolxIh8yZw = await LayerxXx8Fba.setIsPaused.call(boolZNbOwZ7, {from: accounts[1]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[1]});
//		const boolUA5fgVc = await LayerxXx8Fba.approve.call(addressRPEqZkm, uintyuXUH56, {from: accounts[3]});
//		const boolQ2kHM3 = await LayerxXx8Fba.approveAndCall.call(addressknHuDRB, uintT1pujn, byteRmnl0X0, {from: accounts[3]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[3]});
//		const boolIbQ8zY = await LayerxXx8Fba.transferFrom.call(addresszBMDKni, addresseBf7Elg, uintXZ7Eqxo, {from: accounts[5]});
//		const address89QXaM = await LayerxXx8Fba.transferOwnership.call(addressBJhgALl, {from: accounts[3]});
//		const addressTL1NCvj = await LayerxXx8Fba.setNewStakeCreator.call(addressJTymlmL, {from: accounts[4]});

		await expect(LayerxXx8Fba.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrMoiPae = "0x0000000000000000000000000000000000000001"
		const LayerxnDKocSr = await Layerx.new(addressrMoiPae, {from: accounts[0]});
//		await LayerxnDKocSr.f.call({from: accounts[3]});

		await expect(LayerxnDKocSr.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTycWARa = accounts[1]
		const LayerxXx8Fba = await Layerx.new(addressTycWARa, {from: accounts[5]});
		const boolZNbOwZ7 = false
		const uintPx0qqV = BigInt("1767")
		const bytenKDwaT = "0x1217"
		const uintoN9LTsZ = BigInt("227")
		const addressQpNAHMU = accounts[1]
		const uintacpyrpX = BigInt("131")
		const addressPo7rZgY = accounts[5]
		const addressKg0KJge = accounts[1]
		const boolxIh8yZw = await LayerxXx8Fba.setIsPaused.call(boolZNbOwZ7, {from: accounts[1]});
		const uintJ54NLNg = await LayerxXx8Fba.getStakesNum.call({from: accounts[2]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[1]});
//		const uint256XOaAAr8 = await LayerxXx8Fba.burn.call(uintPx0qqV, {from: accounts[1]});
//		await LayerxXx8Fba.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolQ2kHM3 = await LayerxXx8Fba.approveAndCall.call(addressQpNAHMU, uintoN9LTsZ, bytenKDwaT, {from: accounts[3]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[3]});
//		const boolIbQ8zY = await LayerxXx8Fba.transferFrom.call(addressKg0KJge, addressPo7rZgY, uintacpyrpX, {from: accounts[5]});

		assert.equal(uintJ54NLNg, BigInt("1"))
		await expect(LayerxXx8Fba.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEtpHii6 = accounts[1]
		const LayerxXx8Fba = await Layerx.new(addressEtpHii6, {from: accounts[5]});
		const boolZNbOwZ7 = false
		const uintRFBuDru = BigInt("1584")
		const uintVmOry2I = BigInt("1346")
		const addressfU3WYny = accounts[3]
		const byteOrvQP2b = "0x1217"
		const uintZDa6UUm = BigInt("227")
		const addressXF7tBZ = accounts[0]
		const uintlLimgbh = BigInt("1576")
		const uintFkGwbWd = BigInt("131")
		const addressb8PzYNb = accounts[5]
		const addressmMZQ9ZQ = accounts[1]
		const boolxIh8yZw = await LayerxXx8Fba.setIsPaused.call(boolZNbOwZ7, {from: accounts[1]});
//		const uintnH2w2Ty = await LayerxXx8Fba.lock.call(uintRFBuDru, {from: accounts[2]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[1]});
//		await LayerxXx8Fba.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		await LayerxXx8Fba.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolUA5fgVc = await LayerxXx8Fba.approve.call(addressfU3WYny, uintVmOry2I, {from: accounts[3]});
//		const boolQ2kHM3 = await LayerxXx8Fba.approveAndCall.call(addressXF7tBZ, uintZDa6UUm, byteOrvQP2b, {from: accounts[3]});
//		await LayerxXx8Fba.addStakePayment.call({from: accounts[3]});
//		const uintJ8cePGD = await LayerxXx8Fba.exist.call(uintlLimgbh, {from: accounts[0]});
//		const boolIbQ8zY = await LayerxXx8Fba.transferFrom.call(addressmMZQ9ZQ, addressb8PzYNb, uintFkGwbWd, {from: accounts[5]});

		await expect(LayerxXx8Fba.lock.call(uintRFBuDru, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszYBaDc7 = accounts[1]
		const Layerxem0sUS = await Layerx.new(addresszYBaDc7, {from: accounts[4]});
		const uintobnkz4L = BigInt("1513")
		const addressum2B2Wt = accounts[0]
		const addressji0ptDu = accounts[2]
		const boolqBQ2K0I = false
		const uintUZ9j6Bt = BigInt("780")
		const boolA6yEDoL = await Layerxem0sUS.approve.call(addressum2B2Wt, uintobnkz4L, {from: accounts[1]});
		const uint6dSqqM = await Layerxem0sUS.totalSupply.call({from: accounts[3]});
		const addressPzKDhTE = await Layerxem0sUS.transferOwnership.call(addressji0ptDu, {from: accounts[1]});
//		await Layerxem0sUS.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolQXSXbL = await Layerxem0sUS.setIsPaused.call(boolqBQ2K0I, {from: "0x0000000000000000000000000000000000000001"});
//		const uint33hSbv = await Layerxem0sUS.lock.call(uintUZ9j6Bt, {from: accounts[0]});

		assert.equal(boolA6yEDoL, true)
		assert.equal(uint6dSqqM, BigInt("40000000000000000000000"))
		await expect(Layerxem0sUS.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUy4QcjD = accounts[1]
		const Layerxc3SDtjV = await Layerx.new(addressUy4QcjD, {from: accounts[1]});
		const addressArBFIS1 = accounts[0]
		const uintsxCrfF7 = BigInt("381")
		const uintwuJ7TTx = BigInt("254")
		const addressrw0x4Eq = accounts[5]
		const addressxHjMSXL = accounts[4]
		const addressAcdorUb = accounts[3]
		const booldcSrTJZ = true
		const addressYZhtCP = await Layerxc3SDtjV.setNewStakeCreator.call(addressArBFIS1, {from: accounts[1]});
//		const uintoc2IZjG = await Layerxc3SDtjV.withdraw.call(uintsxCrfF7, {from: accounts[0]});
//		const booljzflPpz = await Layerxc3SDtjV.approve.call(addressrw0x4Eq, uintwuJ7TTx, {from: accounts[1]});
//		const uintJ3ruy3x = await Layerxc3SDtjV.allowance.call(addressAcdorUb, addressxHjMSXL, {from: accounts[3]});
//		const boolytKyL0J = await Layerxc3SDtjV.setIsPaused.call(booldcSrTJZ, {from: accounts[3]});

		await expect(Layerxc3SDtjV.withdraw.call(uintsxCrfF7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLqNje7b = accounts[0]
		const LayerxMhLccho = await Layerx.new(addressLqNje7b, {from: accounts[5]});
		const uintlEWOB9b = BigInt("0")
//		const uintQoKBUmU = await LayerxMhLccho.lock.call(uintlEWOB9b, {from: accounts[2]});
//		const uintVijxRzA = await LayerxMhLccho.getStakesNum.call({from: accounts[0]});
//		await LayerxMhLccho.paused.call({from: accounts[4]});
//		await LayerxMhLccho.paused.call({from: accounts[1]});
//		const uintMt8iKdn = await LayerxMhLccho.getStakesNum.call({from: accounts[0]});

		await expect(LayerxMhLccho.lock.call(uintlEWOB9b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})