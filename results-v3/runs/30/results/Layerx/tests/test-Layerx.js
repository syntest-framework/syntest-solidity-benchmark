const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressBuW1Kf9 = accounts[3]
		const LayerxPSN9Lk8 = await Layerx.new(addressBuW1Kf9, {from: accounts[1]});
		const addresslBMNZcS = accounts[3]
		const uintfFlNqa5 = BigInt("1524")
		const addresslhgKRcT = await LayerxPSN9Lk8.transferOwnership.call(addresslBMNZcS, {from: accounts[3]});
		const uintUAjhLtP = await LayerxPSN9Lk8.lock.call(uintfFlNqa5, {from: accounts[1]});
		const uintcIuTMPz = await LayerxPSN9Lk8.getStakesNum.call({from: accounts[5]});
		await LayerxPSN9Lk8.f.call({from: accounts[0]});

		await expect(LayerxPSN9Lk8.lock.call(uintfFlNqa5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressK5BuOjQ = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressK5BuOjQ, {from: accounts[4]});
		const addressaJr5rn = accounts[2]
		const addressCCZvviq = "0x0000000000000000000000000000000000000001"
		const uintA1DQHWI = await LayerxICw1e6J.getStakesNum.call({from: accounts[1]});
		const addressAfUoOTd = await LayerxICw1e6J.transferOwnership.call(addressaJr5rn, {from: accounts[5]});
		const addressOZ9BUx = await LayerxICw1e6J.setNewStakeCreator.call(addressCCZvviq, {from: accounts[3]});

		assert.equal(uintA1DQHWI, BigInt("1"))
		await expect(LayerxICw1e6J.transferOwnership.call(addressaJr5rn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address2HjZwa = accounts[2]
		const LayerxHV9htlG = await Layerx.new(address2HjZwa, {from: "0x0000000000000000000000000000000000000001"});
		const uintLVmnSg = BigInt("542")
		const addressojxgILV = accounts[4]
		const addressuN1h2cy = accounts[2]
		const uintkBDMAzW = await LayerxHV9htlG.lock.call(uintLVmnSg, {from: accounts[3]});
		const addresspQHn34x = await LayerxHV9htlG.transferOwnership.call(addressojxgILV, {from: accounts[3]});
		const uintZUHexuU = await LayerxHV9htlG.balanceOf.call(addressuN1h2cy, {from: accounts[5]});
	});

	it('test for Layerx', async () => {
		const addressOVp0Uqt = accounts[2]
		const LayerxUJrz0iX = await Layerx.new(addressOVp0Uqt, {from: accounts[2]});
		const uintQpUGUcC = BigInt("1471")
		const addresssJOnga = accounts[5]
		const addressMjgeWTa = accounts[0]
		const uintmPkZkia = BigInt("525")
		const uint9TGkVR = BigInt("278")
		const addressfJEjtvt = accounts[1]
		const uintgbOBg3H = await LayerxUJrz0iX.getStakesNum.call({from: accounts[2]});
		const boolKQUQVxk = await LayerxUJrz0iX.transferFrom.call(addressMjgeWTa, addresssJOnga, uintQpUGUcC, {from: accounts[1]});
		const uint256T0qMYp0 = await LayerxUJrz0iX.burn.call(uintmPkZkia, {from: accounts[2]});
		const uint256TRwfAcK = await LayerxUJrz0iX.burn.call(uint9TGkVR, {from: accounts[4]});
		const uintabR9XyN = await LayerxUJrz0iX.balanceOf.call(addressfJEjtvt, {from: accounts[0]});

		assert.equal(uintgbOBg3H, BigInt("1"))
		await expect(LayerxUJrz0iX.transferFrom.call(addressMjgeWTa, addresssJOnga, uintQpUGUcC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresspvOUqzX = accounts[3]
		const LayerxjKlDFwA = await Layerx.new(addresspvOUqzX, {from: accounts[3]});
		const uintdgANmG6 = BigInt("1492")
		const addressuvwM3Vb = accounts[1]
		const addressH2aTG8B = accounts[2]
		const byte72GIb4 = "0x151401021b1d14090b170202140a12141218"
		const uintLL3bP05 = BigInt("948")
		const addressQCqQoQ = accounts[3]
		const boolHExiZyv = await LayerxjKlDFwA.approve.call(addressuvwM3Vb, uintdgANmG6, {from: accounts[4]});
		const uintk2Pxek = await LayerxjKlDFwA.balanceOf.call(addressH2aTG8B, {from: accounts[1]});
		await LayerxjKlDFwA.f.call({from: accounts[3]});
		const bool8ngnmL = await LayerxjKlDFwA.approveAndCall.call(addressQCqQoQ, uintLL3bP05, byte72GIb4, {from: accounts[3]});

		assert.equal(boolHExiZyv, true)
		assert.equal(uintk2Pxek, BigInt("0"))
		await expect(LayerxjKlDFwA.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYF0ePMC = accounts[0]
		const LayerxuF6n3T = await Layerx.new(addressYF0ePMC, {from: accounts[3]});
		const uinteNOtVR = BigInt("621")
		const uinteWSTKFd = BigInt("27")
		const addressJjlv2h2 = accounts[3]
		const uintyBuiOgv = await LayerxuF6n3T.exist.call(uinteNOtVR, {from: accounts[3]});
		const uintMwrbot = await LayerxuF6n3T.withdraw.call(uinteWSTKFd, {from: accounts[4]});
		const uintkUyvfxN = await LayerxuF6n3T.balanceOf.call(addressJjlv2h2, {from: accounts[3]});

		await expect(LayerxuF6n3T.exist.call(uinteNOtVR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJLRMTIf = accounts[4]
		const LayerxJOsV99g = await Layerx.new(addressJLRMTIf, {from: accounts[4]});
		const addressVgpU3DS = accounts[0]
		const boolkwiKPgf = true
		const uintEGWpglt = await LayerxJOsV99g.totalSupply.call({from: accounts[1]});
		const addressNPu7WS = await LayerxJOsV99g.transferOwnership.call(addressVgpU3DS, {from: accounts[0]});
		const boolVyw7uJe = await LayerxJOsV99g.setIsPaused.call(boolkwiKPgf, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxJOsV99g.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintEGWpglt, BigInt("40000000000000000000000"))
		await expect(LayerxJOsV99g.transferOwnership.call(addressVgpU3DS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressM64DdYU = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressM64DdYU, {from: accounts[4]});
		const uintPfZHzTv = BigInt("1147")
		const addressbDVhyIM = accounts[2]
		const uintzBgbs6B = BigInt("640")
		const addressS4UvZsp = accounts[1]
		await LayerxICw1e6J.unlock.call({from: accounts[1]});
		const uintAAkP8YN = await LayerxICw1e6J.lock.call(uintPfZHzTv, {from: accounts[2]});
		const addressAfUoOTd = await LayerxICw1e6J.transferOwnership.call(addressbDVhyIM, {from: accounts[5]});
		const boolIl8jnZb = await LayerxICw1e6J.approve.call(addressS4UvZsp, uintzBgbs6B, {from: accounts[3]});

		await expect(LayerxICw1e6J.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskaMl75q = accounts[3]
		const LayerxZsnRruv = await Layerx.new(addresskaMl75q, {from: accounts[3]});
		const uintvBoIowt = BigInt("210")
		const addressb2D9xar = accounts[0]
		const addressPPtDeuW = accounts[4]
		const byteVMpIC5b = "0x03130f1c0c12060504070a0d171a1410020405"
		const uintnTXDgCI = BigInt("1308")
		const addressDGPwGfH = accounts[0]
		const boolCZCZyyc = await LayerxZsnRruv.transfer.call(addressb2D9xar, uintvBoIowt, {from: accounts[1]});
		const uintYe7mtha = await LayerxZsnRruv.balanceOf.call(addressPPtDeuW, {from: accounts[1]});
		const boolhN0RLPa = await LayerxZsnRruv.approveAndCall.call(addressDGPwGfH, uintnTXDgCI, byteVMpIC5b, {from: accounts[1]});

		await expect(LayerxZsnRruv.transfer.call(addressb2D9xar, uintvBoIowt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWKXFhY4 = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressWKXFhY4, {from: accounts[4]});
		const addressHzC2xWW = accounts[3]
		const addressMQTtYoi = accounts[3]
		const addressBsvBvd = accounts[4]
		const uintVsHHyPb = await LayerxICw1e6J.allowance.call(addressMQTtYoi, addressHzC2xWW, {from: accounts[4]});
		const addressAfUoOTd = await LayerxICw1e6J.transferOwnership.call(addressBsvBvd, {from: accounts[5]});

		assert.equal(uintVsHHyPb, BigInt("0"))
		await expect(LayerxICw1e6J.transferOwnership.call(addressBsvBvd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjpOdyVz = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressjpOdyVz, {from: accounts[4]});
		const addressLhhKVt1 = accounts[4]
		await LayerxICw1e6J.addStakePayment.call({from: accounts[2]});
		const addressAfUoOTd = await LayerxICw1e6J.transferOwnership.call(addressLhhKVt1, {from: accounts[5]});

		await expect(LayerxICw1e6J.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHY4DhQa = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressHY4DhQa, {from: accounts[4]});
		const uintzjgm8du = BigInt("1180")
		const uintlyqBsiV = await LayerxICw1e6J.totalSupply.call({from: accounts[1]});
		const uintafogkGO = await LayerxICw1e6J.withdraw.call(uintzjgm8du, {from: accounts[4]});
		await LayerxICw1e6J.addStakePayment.call({from: accounts[2]});

		assert.equal(uintlyqBsiV, BigInt("40000000000000000000000"))
		await expect(LayerxICw1e6J.withdraw.call(uintzjgm8du, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxl8zcvc = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressxl8zcvc, {from: accounts[4]});
		const uintca5ZJHg = BigInt("1202")
		const addressAB0R73z = accounts[5]
		const uint256GX4dMmX = await LayerxICw1e6J.burn.call(uintca5ZJHg, {from: accounts[4]});
		const addressAfUoOTd = await LayerxICw1e6J.transferOwnership.call(addressAB0R73z, {from: accounts[5]});

		await expect(LayerxICw1e6J.transferOwnership.call(addressAB0R73z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressI8WJW9h = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressI8WJW9h, {from: accounts[4]});
		const addressMsodwCA = accounts[4]
		const uintTQLWZ81 = BigInt("1289")
		await LayerxICw1e6J.addStakePayment.call({from: accounts[4]});
		const addressAfUoOTd = await LayerxICw1e6J.transferOwnership.call(addressMsodwCA, {from: accounts[5]});
		const uint256PLZeSH = await LayerxICw1e6J.burn.call(uintTQLWZ81, {from: accounts[4]});

		await expect(LayerxICw1e6J.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrvecOt1 = accounts[3]
		const LayerxzU9k8o1 = await Layerx.new(addressrvecOt1, {from: accounts[3]});
		const boolR9210Nl = true
		const uintW9Vche = BigInt("840")
		const addressG7nY7Re = accounts[1]
		const uinttVTkLgH = BigInt("1161")
		const uintOH7w9iB = await LayerxzU9k8o1.totalSupply.call({from: accounts[5]});
		const boolBBvig9A = await LayerxzU9k8o1.setIsPaused.call(boolR9210Nl, {from: accounts[3]});
		const boolZmq6wVF = await LayerxzU9k8o1.approve.call(addressG7nY7Re, uintW9Vche, {from: accounts[3]});
		const uintAsR1TeO = await LayerxzU9k8o1.exist.call(uinttVTkLgH, {from: accounts[4]});

		assert.equal(boolZmq6wVF, true)
		assert.equal(uintOH7w9iB, BigInt("40000000000000000000000"))
		await expect(LayerxzU9k8o1.exist.call(uinttVTkLgH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressi9NR0Zu = accounts[4]
		const LayerxICw1e6J = await Layerx.new(addressi9NR0Zu, {from: accounts[4]});
		const addressFVVIqe7 = accounts[1]
		await LayerxICw1e6J.addStakePayment.call({from: accounts[4]});
		const addressJlTXUu = await LayerxICw1e6J.setNewStakeCreator.call(addressFVVIqe7, {from: accounts[4]});

		await expect(LayerxICw1e6J.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})