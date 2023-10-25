const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YmnH6sh = await GAZ_ERC20.new({from: accounts[3]});
		const uintHmJUDv1 = BigInt("949")
		const addressEIRal5o = accounts[0]
		const uintY96rTdX = BigInt("604")
		const addresshAfIFwW = accounts[2]
		const uinthMMkuN = BigInt("388")
		const addresse2PnPLq = accounts[2]
		const boolIS0JO0W = await GAZ_ERC20YmnH6sh.approve.call(addressEIRal5o, uintHmJUDv1, {from: accounts[4]});
		const boolXkRyNfO = await GAZ_ERC20YmnH6sh.transfer.call(addresshAfIFwW, uintY96rTdX, {from: accounts[2]});
		const boolDf4C9UT = await GAZ_ERC20YmnH6sh.transfer.call(addresse2PnPLq, uinthMMkuN, {from: accounts[4]});

		assert.equal(boolIS0JO0W, true)
		await expect(GAZ_ERC20YmnH6sh.transfer.call(addresshAfIFwW, uintY96rTdX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20iMsjexZ = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlo8a88s = BigInt("915")
		const addressvnEfvJV = accounts[2]
		const addresssJO0mNZ = accounts[1]
		const uinthQTFiHZ = BigInt("140")
		const addressbuhzfAQ = accounts[4]
		const boollWNTb7 = await GAZ_ERC20iMsjexZ.transfer.call(addressvnEfvJV, uintlo8a88s, {from: accounts[3]});
		const boolf5pKKC4 = await GAZ_ERC20iMsjexZ.approve.call(addresssJO0mNZ, {from: accounts[0]});
		const boolbeXxUH = await GAZ_ERC20iMsjexZ.approve.call(addressbuhzfAQ, uinthQTFiHZ, {from: accounts[2]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20e7qrjJM = await GAZ_ERC20.new({from: accounts[4]});
		const uintHHr2SZB = BigInt("345")
		const addressxAeJ3VS = accounts[4]
		const uintvDw3hl = BigInt("1484")
		const addressFupxP6 = accounts[4]
		const addressME76TGI = accounts[4]
		const boolgcYtCgM = await GAZ_ERC20e7qrjJM.approve.call(addressxAeJ3VS, uintHHr2SZB, {from: accounts[3]});
		const boolrF0AFHT = await GAZ_ERC20e7qrjJM.transfer.call(addressFupxP6, uintvDw3hl, {from: accounts[4]});
		const boolzj01DQN = await GAZ_ERC20e7qrjJM.approve.call(addressME76TGI, {from: accounts[3]});

		assert.equal(boolgcYtCgM, true)
		assert.equal(boolrF0AFHT, true)
		await expect(GAZ_ERC20e7qrjJM.approve.call(addressME76TGI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20hC35GsZ = await GAZ_ERC20.new({from: accounts[1]});
		const uinttjgx10z = BigInt("1493")
		const addressBXZjEhY = accounts[2]
		const addressWudPlJr = accounts[5]
		const uintJqQ6k8T = BigInt("1484")
		const address6l4lhq = accounts[1]
		const uintrcmdUIr = BigInt("938")
		const addressGNsAyYu = accounts[3]
		const uintpZnCzoF = BigInt("969")
		const addressswiYSR = accounts[1]
		const uintwBsHano = BigInt("1227")
		const addressiBMxsHJ = accounts[3]
		const uintee0tlYt = BigInt("382")
		const addressvlsX0mR = accounts[1]
		const boolw0YXWU = await GAZ_ERC20hC35GsZ.transferFrom.call(addressWudPlJr, addressBXZjEhY, uinttjgx10z, {from: accounts[3]});
		const bool1ItJdf = await GAZ_ERC20hC35GsZ.transfer.call(address6l4lhq, uintJqQ6k8T, {from: accounts[0]});
		const boolJ6fCl31 = await GAZ_ERC20hC35GsZ.approve.call(addressGNsAyYu, uintrcmdUIr, {from: accounts[0]});
		const bool6iVvmX = await GAZ_ERC20hC35GsZ.transfer.call(addressswiYSR, uintpZnCzoF, {from: accounts[1]});
		const boolTGdeXO = await GAZ_ERC20hC35GsZ.transfer.call(addressiBMxsHJ, uintwBsHano, {from: accounts[4]});
		const boolSNSRUkN = await GAZ_ERC20hC35GsZ.transfer.call(addressvlsX0mR, uintee0tlYt, {from: accounts[2]});

		await expect(GAZ_ERC20hC35GsZ.transferFrom.call(addressWudPlJr, addressBXZjEhY, uinttjgx10z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vZwzAf = await GAZ_ERC20.new({from: accounts[1]});
		const uinttPyWbqk = BigInt("134")
		const addressNickWdr = accounts[3]
		const addressa81dVJ4 = accounts[4]
		const boolm0Rln8 = await GAZ_ERC20vZwzAf.approve.call(addressNickWdr, uinttPyWbqk, {from: accounts[4]});
		const boolB0iq0OM = await GAZ_ERC20vZwzAf.approve.call(addressa81dVJ4, {from: accounts[0]});

		assert.equal(boolm0Rln8, true)
		await expect(GAZ_ERC20vZwzAf.approve.call(addressa81dVJ4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20esMCUQz = await GAZ_ERC20.new({from: accounts[0]});
		const address83lCAb = accounts[4]
		const uintYYE9j7g = BigInt("1207")
		const addressVRfRGWM = "0x0000000000000000000000000000000000000001"
		const uintzMwri9u = BigInt("1758")
		const addressPPCwSC5 = accounts[3]
		const addressKhmvn6v = accounts[1]
		const uintuMO0cSf = BigInt("1102")
		const addressFbqAmL = accounts[4]
		const addressdRYlRqq = accounts[4]
		const uintWlxwT0f = BigInt("999")
		const addressDvTAVM6 = accounts[1]
		const addressAefNk9b = "0x0000000000000000000000000000000000000001"
		const addresstWkPCZN = accounts[1]
		const booluByzuVe = await GAZ_ERC20esMCUQz.approve.call(address83lCAb, {from: "0x0000000000000000000000000000000000000001"});
		const boolkpk2AMG = await GAZ_ERC20esMCUQz.approve.call(addressVRfRGWM, uintYYE9j7g, {from: accounts[2]});
		const boolrH4zCyE = await GAZ_ERC20esMCUQz.transferFrom.call(addressKhmvn6v, addressPPCwSC5, uintzMwri9u, {from: accounts[4]});
		const boolYnWdG7n = await GAZ_ERC20esMCUQz.transferFrom.call(addressdRYlRqq, addressFbqAmL, uintuMO0cSf, {from: accounts[4]});
		const boolmMAGeAQ = await GAZ_ERC20esMCUQz.transferFrom.call(addressAefNk9b, addressDvTAVM6, uintWlxwT0f, {from: accounts[5]});
		const boolBFh9KQw = await GAZ_ERC20esMCUQz.approve.call(addresstWkPCZN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20esMCUQz.approve.call(address83lCAb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vZwzAf = await GAZ_ERC20.new({from: accounts[1]});
		const uintMNeoZ4y = BigInt("419")
		const addressEyMOCI = accounts[4]
		const uinteKGQHgq = BigInt("134")
		const addressguPHXCk = accounts[3]
		const addressAqGgIDk = accounts[2]
		const uintEIyAvI = BigInt("1666")
		const addressGwUZYJy = accounts[4]
		const addresspTNRIz2 = accounts[2]
		const boolqo10Bg = await GAZ_ERC20vZwzAf.approve.call(addressEyMOCI, uintMNeoZ4y, {from: accounts[4]});
		const boolm0Rln8 = await GAZ_ERC20vZwzAf.approve.call(addressguPHXCk, uinteKGQHgq, {from: accounts[4]});
		const boolX3HFzxa = await GAZ_ERC20vZwzAf.approve.call(addressAqGgIDk, {from: accounts[1]});
		const boolXpihw6 = await GAZ_ERC20vZwzAf.transferFrom.call(addresspTNRIz2, addressGwUZYJy, uintEIyAvI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolm0Rln8, true)
		assert.equal(boolqo10Bg, true)
		await expect(GAZ_ERC20vZwzAf.approve.call(addressAqGgIDk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pM8dWPo = await GAZ_ERC20.new({from: accounts[0]});
		const uintFczthX3 = BigInt("259")
		const addressHoHrUy9 = accounts[1]
		const addressiebGCWi = "0x0000000000000000000000000000000000000001"
		const uintcAbxDci = BigInt("426")
		const addressqYatlX = accounts[3]
		const uintJU2sCJ4 = BigInt("1887")
		const addressXEm6rg7 = accounts[0]
		const uintQGzvGVH = BigInt("325")
		const addressEojLW70 = accounts[4]
		const boolorpW3ly = await GAZ_ERC20pM8dWPo.approve.call(addressHoHrUy9, uintFczthX3, {from: accounts[5]});
		const boolcmKIfi1 = await GAZ_ERC20pM8dWPo.approve.call(addressiebGCWi, {from: accounts[4]});
		const boolZFPMmVP = await GAZ_ERC20pM8dWPo.approve.call(addressqYatlX, uintcAbxDci, {from: accounts[4]});
		const boolEa2zATJ = await GAZ_ERC20pM8dWPo.approve.call(addressXEm6rg7, uintJU2sCJ4, {from: accounts[4]});
		const boolUA3hOr9 = await GAZ_ERC20pM8dWPo.approve.call(addressEojLW70, uintQGzvGVH, {from: accounts[4]});

		assert.equal(boolorpW3ly, true)
		await expect(GAZ_ERC20pM8dWPo.approve.call(addressiebGCWi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20IdmU7Eo = await GAZ_ERC20.new({from: accounts[2]});
		const addressmAqNnFZ = accounts[0]
		const uintwp47Spg = BigInt("1486")
		const addressULV5Y5 = accounts[4]
		const uintWX8Mw1d = BigInt("380")
		const addressLQZTGgR = accounts[4]
		const address8LTnKm = accounts[4]
		const boolVVziuf8 = await GAZ_ERC20IdmU7Eo.approve.call(addressmAqNnFZ, {from: accounts[2]});
		const boolYpA3SXT = await GAZ_ERC20IdmU7Eo.approve.call(addressULV5Y5, uintwp47Spg, {from: accounts[5]});
		const boolBuLC3pE = await GAZ_ERC20IdmU7Eo.transferFrom.call(address8LTnKm, addressLQZTGgR, uintWX8Mw1d, {from: accounts[2]});

		await expect(GAZ_ERC20IdmU7Eo.approve.call(addressmAqNnFZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vZwzAf = await GAZ_ERC20.new({from: accounts[1]});
		const uintofxdH2R = BigInt("137")
		const addressTd3A7k = accounts[2]
		const addressMKvu4fr = accounts[1]
		const boolm0Rln8 = await GAZ_ERC20vZwzAf.approve.call(addressTd3A7k, uintofxdH2R, {from: accounts[4]});
		const boolpRAAW7 = await GAZ_ERC20vZwzAf.approve.call(addressMKvu4fr, {from: accounts[5]});

		assert.equal(boolm0Rln8, true)
		await expect(GAZ_ERC20vZwzAf.approve.call(addressMKvu4fr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})