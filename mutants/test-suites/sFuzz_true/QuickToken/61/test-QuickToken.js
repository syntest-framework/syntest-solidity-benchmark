const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressSoeD7UR = "0x0000000000000000000000000000000000000001"
		const addressjUDTpwk = accounts[5]
		const QuickTokenxIiw9e1 = await QuickToken.new(addressSoeD7UR, addressjUDTpwk, {from: accounts[5]});
		const addressGIcJlSQ = accounts[3]
		const uints8hajI2 = BigInt("1633")
		const addresslnsAgon = accounts[3]
		const address44LUGP = accounts[4]
		const uintWwuo4RB = await QuickTokenxIiw9e1.balanceOf.call(addressGIcJlSQ, {from: accounts[2]});
//		const boolCQMfsa = await QuickTokenxIiw9e1.transfer.call(addresslnsAgon, uints8hajI2, {from: accounts[1]});
//		const uintkccU2TF = await QuickTokenxIiw9e1.balanceOf.call(address44LUGP, {from: accounts[4]});

		assert.equal(uintWwuo4RB, BigInt("0"))
		await expect(QuickTokenxIiw9e1.transfer.call(addresslnsAgon, uints8hajI2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressY68DNxq = accounts[3]
		const addresshNf7RV7 = accounts[1]
		const QuickTokenxd3CLgT = await QuickToken.new(addressY68DNxq, addresshNf7RV7, {from: "0x0000000000000000000000000000000000000001"});
		const addressDKCEXl4 = accounts[1]
		const addressR4J0oxq = accounts[5]
		const addressJ2ZIZtn = accounts[5]
		const addressopv2HVV = accounts[5]
		const uintqEXfaiO = await QuickTokenxd3CLgT.allowance.call(addressR4J0oxq, addressDKCEXl4, {from: "0x0000000000000000000000000000000000000001"});
		const uint3G8oSK = await QuickTokenxd3CLgT.allowance.call(addressopv2HVV, addressJ2ZIZtn, {from: accounts[1]});
	});

	it('test for QuickToken', async () => {
		const addressc0jdbb5 = accounts[2]
		const addresselFBiZK = "0x0000000000000000000000000000000000000001"
		const QuickTokenK0ptCXH = await QuickToken.new(addressc0jdbb5, addresselFBiZK, {from: accounts[1]});
		const uintEoQvw43 = BigInt("224")
		const address1CMOlB = accounts[1]
		const uintAf6EkrG = BigInt("1865")
		const addressjngRIXu = accounts[2]
		const addressHgWYQeW = accounts[1]
		const addressHhWPzaw = accounts[3]
		const uinttxBzWEA = BigInt("1323")
		const addressrDNd8KD = accounts[4]
		const boolLF9u407 = await QuickTokenK0ptCXH.approve.call(address1CMOlB, uintEoQvw43, {from: accounts[0]});
		const boolJhZBy6t = await QuickTokenK0ptCXH.approve.call(addressjngRIXu, uintAf6EkrG, {from: accounts[1]});
		const uintdvJ03zZ = await QuickTokenK0ptCXH.allowance.call(addressHhWPzaw, addressHgWYQeW, {from: accounts[1]});
//		const boolclByc4 = await QuickTokenK0ptCXH.transfer.call(addressrDNd8KD, uinttxBzWEA, {from: accounts[1]});

		assert.equal(boolJhZBy6t, true)
		assert.equal(boolLF9u407, true)
		assert.equal(uintdvJ03zZ, BigInt("0"))
		await expect(QuickTokenK0ptCXH.transfer.call(addressrDNd8KD, uinttxBzWEA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresssVYbpCz = "0x0000000000000000000000000000000000000001"
		const addressaFeFFsj = accounts[1]
		const QuickTokenwBBqhcZ = await QuickToken.new(addresssVYbpCz, addressaFeFFsj, {from: accounts[5]});
		const uintkoezFb5 = BigInt("1884")
		const addresszU9Pade = accounts[4]
		const addressAhIVQOF = "0x0000000000000000000000000000000000000001"
		const uintS47bTRp = BigInt("1473")
		const addressO2yxoli = accounts[2]
		const boolepeJ7d3 = await QuickTokenwBBqhcZ.approve.call(addresszU9Pade, uintkoezFb5, {from: accounts[4]});
		const uintIzj40do = await QuickTokenwBBqhcZ.balanceOf.call(addressAhIVQOF, {from: accounts[2]});
//		const addressRxRruAv = await QuickTokenwBBqhcZ.mint.call(addressO2yxoli, uintS47bTRp, {from: accounts[0]});

		assert.equal(boolepeJ7d3, true)
		assert.equal(uintIzj40do, BigInt("2000000000000"))
		await expect(QuickTokenwBBqhcZ.mint.call(addressO2yxoli, uintS47bTRp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressWm0vuPR = accounts[4]
		const addressWbYjn7R = accounts[2]
		const QuickTokenzn6Mjzh = await QuickToken.new(addressWm0vuPR, addressWbYjn7R, {from: accounts[0]});
		const uintZpQQ2gJ = BigInt("1660")
		const addressQzmLjcZ = accounts[4]
		const addressqwILgwD = accounts[1]
		const uintlrpTQhK = BigInt("1")
		const addressXklrw9M = accounts[4]
		const addressbqttts8 = accounts[4]
		const addressu43HPo4 = accounts[0]
		const addressNzqIX6s = accounts[1]
		const addresscmp0Kfu = accounts[4]
		const boolmOSYbew = await QuickTokenzn6Mjzh.transfer.call(addressQzmLjcZ, uintZpQQ2gJ, {from: accounts[4]});
		const uintl7xuGTa = await QuickTokenzn6Mjzh.balanceOf.call(addressqwILgwD, {from: accounts[5]});
		const boolDv0aaDp = await QuickTokenzn6Mjzh.approve.call(addressXklrw9M, uintlrpTQhK, {from: accounts[1]});
		const uintRBtvEmX = await QuickTokenzn6Mjzh.balanceOf.call(addressbqttts8, {from: accounts[3]});
		const uintKZ6OwAG = await QuickTokenzn6Mjzh.allowance.call(addressNzqIX6s, addressu43HPo4, {from: accounts[3]});
		const uintveiR3X = await QuickTokenzn6Mjzh.balanceOf.call(addresscmp0Kfu, {from: accounts[5]});

		assert.equal(boolDv0aaDp, true)
		assert.equal(boolmOSYbew, true)
		assert.equal(uintKZ6OwAG, BigInt("0"))
		assert.equal(uintRBtvEmX, BigInt("2000000000000"))
		assert.equal(uintl7xuGTa, BigInt("0"))
		assert.equal(uintveiR3X, BigInt("2000000000000"))
	});

	it('test for QuickToken', async () => {
		const addressNgwR0dB = accounts[3]
		const addressfarFxoa = "0x0000000000000000000000000000000000000001"
		const QuickTokencZArKFB = await QuickToken.new(addressNgwR0dB, addressfarFxoa, {from: accounts[1]});
		const uintk6ot392 = BigInt("853")
		const addressrMEaQdB = "0x0000000000000000000000000000000000000001"
		const addressg2jqkHk = accounts[0]
		const uintNjGAUKr = BigInt("439")
		const addressA1GXPXr = accounts[4]
		const uintr6GKk4E = BigInt("286")
		const address5gwpny = accounts[3]
		const uintYhBoOL0 = BigInt("1415")
		const addresswRHeJpC = accounts[1]
//		const boolUGU9guj = await QuickTokencZArKFB.transferFrom.call(addressg2jqkHk, addressrMEaQdB, uintk6ot392, {from: accounts[1]});
//		const boolvtq6ho9 = await QuickTokencZArKFB.approve.call(addressA1GXPXr, uintNjGAUKr, {from: accounts[0]});
//		const boolp0v5nUM = await QuickTokencZArKFB.approve.call(address5gwpny, uintr6GKk4E, {from: accounts[4]});
//		const boolYFP1tDU = await QuickTokencZArKFB.approve.call(addresswRHeJpC, uintYhBoOL0, {from: accounts[1]});

		await expect(QuickTokencZArKFB.transferFrom.call(addressg2jqkHk, addressrMEaQdB, uintk6ot392, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressooBJYbp = accounts[3]
		const addressAAQdBO2 = "0x0000000000000000000000000000000000000001"
		const QuickTokencZArKFB = await QuickToken.new(addressooBJYbp, addressAAQdBO2, {from: accounts[1]});
		const uintkTbg3em = BigInt("251")
		const addressS8TgNu = accounts[4]
		const addressEZKkKI = accounts[0]
		const uintxiIjAW = BigInt("1415")
		const addressPLaQBl = accounts[0]
		const boolp0v5nUM = await QuickTokencZArKFB.approve.call(addressS8TgNu, uintkTbg3em, {from: accounts[4]});
//		const addressOi3jpEh = await QuickTokencZArKFB.setMinter.call(addressEZKkKI, {from: accounts[2]});
//		const boolYFP1tDU = await QuickTokencZArKFB.approve.call(addressPLaQBl, uintxiIjAW, {from: accounts[1]});

		assert.equal(boolp0v5nUM, true)
		await expect(QuickTokencZArKFB.setMinter.call(addressEZKkKI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressJKERT6H = accounts[4]
		const addressPs5QZrm = accounts[2]
		const QuickTokenzn6Mjzh = await QuickToken.new(addressJKERT6H, addressPs5QZrm, {from: accounts[0]});
		const uintGWi65az = BigInt("0")
		const addressrw3HV1O = "0x00000000000000000000000000000000000000-1"
		const uintezSYVsq = BigInt("1505")
		const addressqspwFIk = accounts[4]
		const uintSmzJjW = BigInt("1214")
		const addressuRhWjEe = accounts[1]
		const uintYmFkBap = BigInt("1858")
		const addressaQ3N1J4 = accounts[3]
//		const boolDv0aaDp = await QuickTokenzn6Mjzh.approve.call(addressrw3HV1O, uintGWi65az, {from: accounts[1]});
//		const boolj7fhAi = await QuickTokenzn6Mjzh.transfer.call(addressqspwFIk, uintezSYVsq, {from: accounts[0]});
//		const boolIGFYRmi = await QuickTokenzn6Mjzh.transfer.call(addressuRhWjEe, uintSmzJjW, {from: accounts[4]});
//		const boolUgZ7l5J = await QuickTokenzn6Mjzh.transfer.call(addressaQ3N1J4, uintYmFkBap, {from: accounts[1]});

		await expect(QuickTokenzn6Mjzh.approve.call(addressrw3HV1O, uintGWi65az, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressYTR1ALI = accounts[0]
		const addresscuUdvvZ = accounts[3]
		const QuickTokenvpvt9nq = await QuickToken.new(addressYTR1ALI, addresscuUdvvZ, {from: accounts[5]});
		const addressAvOaDRG = accounts[0]
		const uintveeH9kv = BigInt("1168")
		const addressoaTMiUc = accounts[3]
		const addressFGpdqlU = accounts[5]
		const uintUBwycNu = BigInt("203")
		const addressX1AVlJ0 = accounts[4]
		const uintJ50tuLs = await QuickTokenvpvt9nq.balanceOf.call(addressAvOaDRG, {from: accounts[3]});
		const addressOVwEI6A = await QuickTokenvpvt9nq.mint.call(addressoaTMiUc, uintveeH9kv, {from: accounts[3]});
		const uintWcWzSG8 = await QuickTokenvpvt9nq.balanceOf.call(addressFGpdqlU, {from: accounts[2]});
//		const addressWsfCrRp = await QuickTokenvpvt9nq.mint.call(addressX1AVlJ0, uintUBwycNu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintJ50tuLs, BigInt("2000000000000"))
		assert.equal(uintWcWzSG8, BigInt("0"))
		await expect(QuickTokenvpvt9nq.mint.call(addressX1AVlJ0, uintUBwycNu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})