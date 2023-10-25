const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringptOETny = "rNkQuVrEwlqSck"
		const stringn4uWH7G = "uzS7uioDsp9fpilf6QnHwK9FPdjttvfWeWW4tcZnQnYUkHtpOKTVOV7Lbh7"
		const uintHiNqvKd = BigInt("1818")
		const WOLFOjP44Nd = await WOLF.new(stringptOETny, stringn4uWH7G, uintHiNqvKd, {from: accounts[0]});
		const uintST06moi = BigInt("1280")
		const addressxWvVYp5 = accounts[1]
		const addressyNaueuI = accounts[2]
		const uintQWpguWP = BigInt("819")
		const addresstgoxuO = accounts[1]
//		const boolLXr0ywz = await WOLFOjP44Nd.transferFrom.call(addressyNaueuI, addressxWvVYp5, uintST06moi, {from: accounts[0]});
//		const boolatslhtx = await WOLFOjP44Nd.approve.call(addresstgoxuO, uintQWpguWP, {from: accounts[0]});

		await expect(WOLFOjP44Nd.transferFrom.call(addressyNaueuI, addressxWvVYp5, uintST06moi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjgSysIJ = "tmsubsova8XxrWubI4eIjHdeqwDojssbIuY1fL1ENO2xw8Yl9qY"
		const stringou4lknx = "a7jx1eTnq46kTK6CSq732DPkU0j"
		const uintbwATGPB = BigInt("1236")
		const WOLFWSedbU5 = await WOLF.new(stringjgSysIJ, stringou4lknx, uintbwATGPB, {from: "0x0000000000000000000000000000000000000001"});
		const uintIoh8UOn = BigInt("715")
		const addressP9Dxblr = accounts[0]
		const uintp9tCftq = BigInt("1946")
		const addressuVeYZdf = accounts[5]
		const uintwbGbam1 = BigInt("475")
		const addressbpvmpmk = accounts[4]
		const addresseEQM1SX = accounts[2]
		const uintZqoq5dx = BigInt("960")
		const addressazmw6Vg = accounts[4]
		const uintAYnejZy = BigInt("1413")
		const addresse3nIt8 = accounts[1]
		const addressYUjrWgN = accounts[0]
		const boolAA2ONtM = await WOLFWSedbU5.transfer.call(addressP9Dxblr, uintIoh8UOn, {from: accounts[3]});
		const boolr6vwpXp = await WOLFWSedbU5.transfer.call(addressuVeYZdf, uintp9tCftq, {from: accounts[2]});
		const bool3EV9VQ = await WOLFWSedbU5.transferFrom.call(addresseEQM1SX, addressbpvmpmk, uintwbGbam1, {from: accounts[2]});
		const boolyj3N9u5 = await WOLFWSedbU5.approve.call(addressazmw6Vg, uintZqoq5dx, {from: "0x0000000000000000000000000000000000000001"});
		const boold1v1fQN = await WOLFWSedbU5.transferFrom.call(addressYUjrWgN, addresse3nIt8, uintAYnejZy, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringHjzwVJf = "oQy4N79BC"
		const stringmETHzdO = "jN4Z2ib"
		const uintkb9o59g = BigInt("998")
		const WOLFaOGRoy1 = await WOLF.new(stringHjzwVJf, stringmETHzdO, uintkb9o59g, {from: accounts[0]});
		const uintCxRDdiJ = BigInt("969")
		const addressFIdbqkb = accounts[5]
		const uintHUTLo1 = BigInt("449")
		const addressERXIImh = accounts[1]
		const uintTTxHyw5 = BigInt("1962")
		const addressOINGLaT = accounts[1]
		const addressvtwFZc1 = accounts[2]
		const uintIqqGE81 = BigInt("1038")
		const addressc5J1iNh = accounts[2]
		const boolFdzVnGw = await WOLFaOGRoy1.approve.call(addressFIdbqkb, uintCxRDdiJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGsD418U = await WOLFaOGRoy1.approveAndCall.call(addressERXIImh, uintHUTLo1, {from: accounts[3]});
//		const boolenX9FCm = await WOLFaOGRoy1.transferFrom.call(addressvtwFZc1, addressOINGLaT, uintTTxHyw5, {from: "0x0000000000000000000000000000000000000001"});
//		const bool0zvU8U = await WOLFaOGRoy1.transfer.call(addressc5J1iNh, uintIqqGE81, {from: accounts[2]});

		assert.equal(boolFdzVnGw, true)
		await expect(WOLFaOGRoy1.approveAndCall.call(addressERXIImh, uintHUTLo1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringYFPDhQR = "eePIuPn4MgFu02T6NkY4ww"
		const stringRXYqohb = "UkyC33MGGbR7agLY8YQD2foHJsfTAte24mpvLT6vRkhqW9UkiD5ggYJ5qDBX4DUT6BP42"
		const uintXdjq47N = BigInt("1841")
		const WOLFLdYd93 = await WOLF.new(stringYFPDhQR, stringRXYqohb, uintXdjq47N, {from: accounts[3]});
		const uintIB3OBbt = BigInt("1115")
		const addressbhZSqz = accounts[0]
		const addressOMJ5mQI = accounts[3]
		const uintMGPKp98 = BigInt("1036")
		const addressf472Wu = accounts[2]
		const uintQEuKupt = BigInt("837")
		const addressI2fRAGG = accounts[3]
		const boolL9rtCq = await WOLFLdYd93.transferFrom.call(addressOMJ5mQI, addressbhZSqz, uintIB3OBbt, {from: accounts[3]});
//		const boolBekdVe = await WOLFLdYd93.approveAndCall.call(addressf472Wu, uintMGPKp98, {from: accounts[4]});
//		const boolj630oZv = await WOLFLdYd93.approveAndCall.call(addressI2fRAGG, uintQEuKupt, {from: accounts[0]});

		assert.equal(boolL9rtCq, true)
		await expect(WOLFLdYd93.approveAndCall.call(addressf472Wu, uintMGPKp98, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringJA4YX7 = "3kllN1zsuiGN5KwdqlJaCvO11fbpr1CTBKAvfsZEc"
		const stringQqAMUU = "53YPdidOZ4X6A72bDLrzUKVYnCR9e3yZGQzsHzjFrN9aTbskgZQdx9SeNmZmMp8RdqqfRDTA7398MI"
		const uintCDyIxa = BigInt("2040")
		const WOLFeH6G6JK = await WOLF.new(stringJA4YX7, stringQqAMUU, uintCDyIxa, {from: accounts[4]});
		const uintEhYzd8o = BigInt("92")
		const addressCSIROrm = accounts[4]
		const uintAk7Gxfx = BigInt("518")
		const addressomBWvay = accounts[4]
		const addressOUSNbC = accounts[3]
		const uintiX89UJE = BigInt("612")
		const addressrFz7Vaa = accounts[2]
		const uintWmfGv4 = BigInt("1411")
		const addressK3SLz6j = accounts[0]
		const addressS8DdUka = "0x0000000000000000000000000000000000000001"
		const uintDmOT6UV = BigInt("972")
		const addresszfFmjDo = accounts[4]
		const boolsghgEXY = await WOLFeH6G6JK.approveAndCall.call(addressCSIROrm, uintEhYzd8o, {from: accounts[4]});
//		const boolKBweblp = await WOLFeH6G6JK.transferFrom.call(addressOUSNbC, addressomBWvay, uintAk7Gxfx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJOqtxK = await WOLFeH6G6JK.approveAndCall.call(addressrFz7Vaa, uintiX89UJE, {from: accounts[3]});
//		const boolbM9aG8M = await WOLFeH6G6JK.transferFrom.call(addressS8DdUka, addressK3SLz6j, uintWmfGv4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhbpdlww = await WOLFeH6G6JK.approveAndCall.call(addresszfFmjDo, uintDmOT6UV, {from: accounts[1]});

		assert.equal(boolsghgEXY, true)
		await expect(WOLFeH6G6JK.transferFrom.call(addressOUSNbC, addressomBWvay, uintAk7Gxfx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringYYlbhGz = "5hMimnvz0LIWWfvyQ6ymYwowSxn1u2rwS8vMY8HSwBKwEVjeYxIiXuNvgBaRw1oO2U356chT5i7zdn7YH9"
		const stringOz4PfKT = "lbd7ZqPj6n8n0i4"
		const uintHHFj0vy = BigInt("1648")
		const WOLFmZxBSm = await WOLF.new(stringYYlbhGz, stringOz4PfKT, uintHHFj0vy, {from: accounts[1]});
		const uintEHxgDRG = BigInt("638")
		const addressHI7KbGI = accounts[4]
		const uintli5l5Pv = BigInt("475")
		const addressUIheT4 = accounts[4]
		const uintxjg43RO = BigInt("244")
		const addressu8RYIuf = accounts[2]
		const uintx0QERnw = BigInt("603")
		const addressJhpFZck = accounts[2]
		const addressAcah6Bo = accounts[1]
//		const boolQLBuUw5 = await WOLFmZxBSm.transfer.call(addressHI7KbGI, uintEHxgDRG, {from: "0x0000000000000000000000000000000000000001"});
//		const booloBE68xH = await WOLFmZxBSm.approve.call(addressUIheT4, uintli5l5Pv, {from: accounts[2]});
//		const boolGWx7ZyH = await WOLFmZxBSm.approve.call(addressu8RYIuf, uintxjg43RO, {from: accounts[3]});
//		const boolVqN0bOb = await WOLFmZxBSm.transferFrom.call(addressAcah6Bo, addressJhpFZck, uintx0QERnw, {from: accounts[4]});

		await expect(WOLFmZxBSm.transfer.call(addressHI7KbGI, uintEHxgDRG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringpwNmSR = "RVpJlSGOohw2C3lnVBON4VP06bDl1X8kKseD4D49wcoBzwLglJDsjT98fU0J9F8zGMwW2tAjWOb8lHtUjqUzSetDo"
		const stringtOmfHI6 = "7hU3TFKRmij6kel44MrsFr7lmDBct9C6I4XOGhJKpVnrS8NMjNgo4L3i"
		const uinth70lcLK = BigInt("1328")
		const WOLFiT8m4rr = await WOLF.new(stringpwNmSR, stringtOmfHI6, uinth70lcLK, {from: accounts[4]});
		const addressurxJloQ = accounts[2]
		const uinte89A58p = BigInt("610")
		const addressZWoYcKt = accounts[0]
		const uintV0kGmCi = BigInt("1702")
		const addressRqaoU3F = accounts[4]
		const boolnjdpLiD = await WOLFiT8m4rr.transferownership.call(addressurxJloQ, {from: accounts[4]});
//		const boolhSNqCk = await WOLFiT8m4rr.transfer.call(addressZWoYcKt, uinte89A58p, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQIVxDTg = await WOLFiT8m4rr.transfer.call(addressRqaoU3F, uintV0kGmCi, {from: accounts[1]});

		assert.equal(boolnjdpLiD, true)
		await expect(WOLFiT8m4rr.transfer.call(addressZWoYcKt, uinte89A58p, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringJA4YX7 = "3kllN1zsuiGN5KwdqlJaCvO11fbpr1CTBKAvfsZEc"
		const stringQqAMUU = "53YPdidOZ4X6A72bDLrzUKVYnCR9e3yZGQzsHzjFrN9aTbskgZQdx9SeNmZmMp8RdqqfRDTA7398MI"
		const uintr52SiL = BigInt("2040")
		const WOLFeH6G6JK = await WOLF.new(stringJA4YX7, stringQqAMUU, uintr52SiL, {from: accounts[4]});
		const uint4CNrJn = BigInt("0")
		const addressEFJER7u = accounts[0]
		const uintLGjvNpL = BigInt("748")
		const addressvzKdqyV = accounts[5]
		const addressFQmZgE1 = accounts[5]
		const uintOi9dh5w = BigInt("1209")
		const addresse9eKFQM = accounts[1]
		const addressJRoarzD = accounts[3]
		const uintDXNbk5 = BigInt("972")
		const addresse7PcB2G = accounts[4]
		const boolMSliIti = await WOLFeH6G6JK.transfer.call(addressEFJER7u, uint4CNrJn, {from: accounts[0]});
//		const boolZRws4Iy = await WOLFeH6G6JK.transferFrom.call(addressFQmZgE1, addressvzKdqyV, uintLGjvNpL, {from: accounts[0]});
//		const boolNZBKHE9 = await WOLFeH6G6JK.approve.call(addresse9eKFQM, uintOi9dh5w, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRJLjsJK = await WOLFeH6G6JK.transferownership.call(addressJRoarzD, {from: accounts[1]});
//		const boolhbpdlww = await WOLFeH6G6JK.approveAndCall.call(addresse7PcB2G, uintDXNbk5, {from: accounts[1]});

		assert.equal(boolMSliIti, true)
		await expect(WOLFeH6G6JK.transferFrom.call(addressFQmZgE1, addressvzKdqyV, uintLGjvNpL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringJA4YX7 = "3kllN1zsuiGN5KwdqlJaCvO11fbpr1CTBKAvfsZEc"
		const stringQqAMUU = "53YPdidOZ4X6A72bDLrzUKVYnCR9e3yZGQzsHzjFrN9aTbskgZQdx9SeNmZmMp8RdqqfRDTA7398MI"
		const uintmCu9MWO = BigInt("2040")
		const WOLFeH6G6JK = await WOLF.new(stringJA4YX7, stringQqAMUU, uintmCu9MWO, {from: accounts[4]});
		const uintF1qrRmc = BigInt("99")
		const addresspwKKr75 = accounts[5]
		const uintaVORCjV = BigInt("0")
		const addressDdtcIyk = accounts[5]
		const addressKdGVP3r = accounts[3]
		const uinta3CZb2B = BigInt("391")
		const addressQKUWM79 = accounts[2]
		const uintoHWONJ = BigInt("481")
		const addressnHhjFQN = accounts[0]
		const boolBs42K6M = await WOLFeH6G6JK.approve.call(addresspwKKr75, uintF1qrRmc, {from: accounts[4]});
		const boolsghgEXY = await WOLFeH6G6JK.approveAndCall.call(addressDdtcIyk, uintaVORCjV, {from: accounts[4]});
		const boolqRvK1xZ = await WOLFeH6G6JK.transferownership.call(addressKdGVP3r, {from: accounts[4]});
		const boolOkhx6IN = await WOLFeH6G6JK.approve.call(addressQKUWM79, uinta3CZb2B, {from: accounts[1]});
		const booldMLDVHE = await WOLFeH6G6JK.approve.call(addressnHhjFQN, uintoHWONJ, {from: accounts[0]});

		assert.equal(boolBs42K6M, true)
		assert.equal(boolOkhx6IN, true)
		assert.equal(booldMLDVHE, true)
		assert.equal(boolqRvK1xZ, true)
		assert.equal(boolsghgEXY, true)
	});
})