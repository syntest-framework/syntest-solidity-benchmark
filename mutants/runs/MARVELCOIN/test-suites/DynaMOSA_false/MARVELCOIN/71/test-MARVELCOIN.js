const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintua6KEZn = BigInt("1803")
		const stringyWV1Um1 = "26MpicML7w4P31xlLSBOweUWx9BvB4R8"
		const stringSCH6KK6 = "UrLt6ApH2FggqVKYcyjzBYZ8W"
		const MARVELCOINwLBzSuw = await MARVELCOIN.new(uintua6KEZn, stringyWV1Um1, stringSCH6KK6, {from: accounts[3]});
		const uintJzmEI79 = BigInt("1945")
		const addresszyzS7Y = accounts[1]
		const bytel8Kd6kg = "0x02080704"
		const uintrdZtbX = BigInt("1783")
		const addresszA2OjF7 = accounts[3]
		const byteNa1qddY = "0x1d121d1302101e031b191315140d200d010d151d"
		const uintGTIxHtR = BigInt("151")
		const addresszJlPtv6 = accounts[5]
		const uintna7lJJ = BigInt("886")
		const bytea77rihk = "0x1617191b040413"
		const uintYiQT7wa = BigInt("1445")
		const addressfGTZQzE = accounts[3]
		const boolblqGwAb = await MARVELCOINwLBzSuw.transfer.call(addresszyzS7Y, uintJzmEI79, {from: accounts[1]});
		const booleV6Wdqi = await MARVELCOINwLBzSuw.approveAndCall.call(addresszA2OjF7, uintrdZtbX, bytel8Kd6kg, {from: accounts[0]});
		const boolYYfmrWz = await MARVELCOINwLBzSuw.approveAndCall.call(addresszJlPtv6, uintGTIxHtR, byteNa1qddY, {from: accounts[0]});
		const boolMnTkvm7 = await MARVELCOINwLBzSuw.burn.call(uintna7lJJ, {from: accounts[1]});
		const boolptEI3ZI = await MARVELCOINwLBzSuw.approveAndCall.call(addressfGTZQzE, uintYiQT7wa, bytea77rihk, {from: accounts[4]});

		await expect(MARVELCOINwLBzSuw.transfer.call(addresszyzS7Y, uintJzmEI79, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkaczuED = BigInt("1024")
		const stringjXGmXE8 = "xcmgjtRSUAWKVkP4W8AI63ESlUqChK5KSwSqaJ"
		const stringEZfQzxn = "YCqSui26d2rweOEnQLOgEacL6nmogM9NBpc"
		const MARVELCOINueTNCOg = await MARVELCOIN.new(uintkaczuED, stringjXGmXE8, stringEZfQzxn, {from: accounts[2]});
		const byteFybAAer = "0x18011a1817040d0811131d0a030b170811011807"
		const uinthZ1BQq9 = BigInt("99")
		const addresseHflzw = accounts[1]
		const uinteHVT22N = BigInt("1580")
		const addressWmXNRqs = accounts[0]
		const uintQRTB8Rw = BigInt("752")
		const uintaMp9nYE = BigInt("950")
		const addresshvrtTeU = accounts[3]
		const uintLPLbEZ1 = BigInt("374")
		const addressjKTt1WY = accounts[2]
		const boolXHMPVuI = await MARVELCOINueTNCOg.approveAndCall.call(addresseHflzw, uinthZ1BQq9, byteFybAAer, {from: accounts[1]});
		const boolH8aXP4F = await MARVELCOINueTNCOg.transfer.call(addressWmXNRqs, uinteHVT22N, {from: accounts[1]});
		const boolmgyVLu3 = await MARVELCOINueTNCOg.burn.call(uintQRTB8Rw, {from: accounts[4]});
		const booleH0F664 = await MARVELCOINueTNCOg.transfer.call(addresshvrtTeU, uintaMp9nYE, {from: accounts[4]});
		const boolKOxHzW8 = await MARVELCOINueTNCOg.approve.call(addressjKTt1WY, uintLPLbEZ1, {from: accounts[4]});

		await expect(MARVELCOINueTNCOg.approveAndCall.call(addresseHflzw, uinthZ1BQq9, byteFybAAer, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintqa0z4bC = BigInt("1952")
		const stringxsF45cd = "StjNU5XctXocyhv1DxiU4x4ntPPaEqMXWPp5Mc5h6"
		const stringugczHym = "IuQP5JvESLfRuHnRWlrxKp"
		const MARVELCOINAKNbd9L = await MARVELCOIN.new(uintqa0z4bC, stringxsF45cd, stringugczHym, {from: accounts[2]});
		const uintWKhJxLs = BigInt("1961")
		const addressV4B3eFQ = accounts[5]
		const addressWPm0SNo = accounts[1]
		const uintuWmEj3q = BigInt("1135")
		const addresshzhlCwj = accounts[1]
		const uintid97XJa = BigInt("1796")
		const addresseILTjlb = accounts[0]
		const addressFWuprRF = accounts[4]
		const uintThEokhf = BigInt("292")
		const addressHqOSQfb = accounts[2]
		const address5EBqLo = accounts[1]
		const uintAkaDl5m = BigInt("1986")
		const boolahK0HHR = await MARVELCOINAKNbd9L.transferFrom.call(addressWPm0SNo, addressV4B3eFQ, uintWKhJxLs, {from: accounts[1]});
		const boolO8kISIZ = await MARVELCOINAKNbd9L.burnFrom.call(addresshzhlCwj, uintuWmEj3q, {from: accounts[3]});
		const booltA2De6z = await MARVELCOINAKNbd9L.transferFrom.call(addressFWuprRF, addresseILTjlb, uintid97XJa, {from: accounts[0]});
		const boole1OAEXD = await MARVELCOINAKNbd9L.transferFrom.call(address5EBqLo, addressHqOSQfb, uintThEokhf, {from: accounts[4]});
		const boolXqZuZ4M = await MARVELCOINAKNbd9L.burn.call(uintAkaDl5m, {from: accounts[2]});

		await expect(MARVELCOINAKNbd9L.transferFrom.call(addressWPm0SNo, addressV4B3eFQ, uintWKhJxLs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintI9Um8bg = BigInt("297")
		const stringp5uUUW = "iGNyddW6vrEyvFinQ7z8zl7MFvOjvlk5yCOPgPVG4SgfS"
		const stringZMWTDt = "JSrSv5dLtUvgvEptFyZZ4R"
		const MARVELCOINCf3Tcz4 = await MARVELCOIN.new(uintI9Um8bg, stringp5uUUW, stringZMWTDt, {from: accounts[4]});
		const uintwabXHdT = BigInt("1826")
		const uintXz9IFg8 = BigInt("794")
		const addresscOSzJ3w = accounts[5]
		const byte1fjVNN = "0x011e120c19"
		const uintaewLqwM = BigInt("1728")
		const addresstMkvA9S = accounts[3]
		const uintz55wj76 = BigInt("120")
		const addresspFuUAs = accounts[0]
		const addressVaYcpLj = accounts[2]
		const uintBZF89ov = BigInt("814")
		const addressWqU6sLF = accounts[1]
		const addressLNyQUWA = accounts[2]
		const boolcblZb0P = await MARVELCOINCf3Tcz4.burn.call(uintwabXHdT, {from: accounts[4]});
		const boolK6LUadz = await MARVELCOINCf3Tcz4.transfer.call(addresscOSzJ3w, uintXz9IFg8, {from: accounts[4]});
		const bool0qN1SM = await MARVELCOINCf3Tcz4.approveAndCall.call(addresstMkvA9S, uintaewLqwM, byte1fjVNN, {from: accounts[3]});
		const boolla0f1uC = await MARVELCOINCf3Tcz4.transferFrom.call(addressVaYcpLj, addresspFuUAs, uintz55wj76, {from: accounts[3]});
		const boolkQMUL7x = await MARVELCOINCf3Tcz4.transferFrom.call(addressLNyQUWA, addressWqU6sLF, uintBZF89ov, {from: accounts[4]});

		assert.equal(boolK6LUadz, true)
		assert.equal(boolcblZb0P, true)
		await expect(MARVELCOINCf3Tcz4.approveAndCall.call(addresstMkvA9S, uintaewLqwM, byte1fjVNN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintEakH5ui = BigInt("630")
		const stringOYYPBJb = "qxNnQmEd6NXse3BGHlonpDpvwSXhtE7mRpYbo36TVteVj1QDv9pPAFNCtzMXNZohh3mAvbx9MABWTzLsBG5ybhwku9i55RVIzY3"
		const stringU9IDufj = "GEhTMdvO8J72GPm6aAeWH95w7PdgYSlcoXmE61yMnCcN1xx4MFkMIIsGqpBsA5MvkAHZVRE"
		const MARVELCOINw2sMxrl = await MARVELCOIN.new(uintEakH5ui, stringOYYPBJb, stringU9IDufj, {from: "0x0000000000000000000000000000000000000001"});
		const byteKy3BkMu = "0x031c1b0a141c140406180a0a0f0a1e09"
		const uintQf60HHR = BigInt("363")
		const addressBVOnlJr = accounts[2]
		const uintY2YFXYL = BigInt("1832")
		const addressO1ypccV = "0x0000000000000000000000000000000000000001"
		const bytethHPvrx = "0x060a06"
		const uintrYPNT4L = BigInt("1699")
		const addressliAKjfX = accounts[1]
		const uintjkkOTG = BigInt("660")
		const boolGfJ2bP = await MARVELCOINw2sMxrl.approveAndCall.call(addressBVOnlJr, uintQf60HHR, byteKy3BkMu, {from: accounts[4]});
		const boolmgpb2Ag = await MARVELCOINw2sMxrl.approve.call(addressO1ypccV, uintY2YFXYL, {from: accounts[2]});
		const boolh3lnTrF = await MARVELCOINw2sMxrl.approveAndCall.call(addressliAKjfX, uintrYPNT4L, bytethHPvrx, {from: accounts[0]});
		const boolQMQfdOA = await MARVELCOINw2sMxrl.burn.call(uintjkkOTG, {from: accounts[3]});
	});

	it('test for MARVELCOIN', async () => {
		const uinteAQ433C = BigInt("1006")
		const stringbgzExPw = "xHilSuFY1qya4fH6bJzxuT"
		const stringOAdXtEe = "OOxML8eeKYPGl3JunfFSIL3Qkr8LdWvAXxira7m3eBJiqIEUnUosHucemq1j0njmkzG04vVQoOyFif"
		const MARVELCOINkBuvvPz = await MARVELCOIN.new(uinteAQ433C, stringbgzExPw, stringOAdXtEe, {from: accounts[0]});
		const uintEUqDwS8 = BigInt("1795")
		const addressSPYHrKK = accounts[5]
		const byteY7aOwwp = "0x1d12071c14200e03"
		const uintVoihBod = BigInt("824")
		const addressd3uqYvP = accounts[3]
		const uintrgcdPQ9 = BigInt("1441")
		const addressSht1oTw = accounts[3]
		const addressDixZRxR = accounts[3]
		const uintQFxjsSd = BigInt("343")
		const uintM9qvjLR = BigInt("796")
		const boolL24cunu = await MARVELCOINkBuvvPz.burnFrom.call(addressSPYHrKK, uintEUqDwS8, {from: accounts[2]});
		const boolMfbT6Y = await MARVELCOINkBuvvPz.approveAndCall.call(addressd3uqYvP, uintVoihBod, byteY7aOwwp, {from: accounts[2]});
		const boolNN1RkkQ = await MARVELCOINkBuvvPz.transferFrom.call(addressDixZRxR, addressSht1oTw, uintrgcdPQ9, {from: accounts[4]});
		const boolQSla3Mt = await MARVELCOINkBuvvPz.burn.call(uintQFxjsSd, {from: accounts[0]});
		const boolcNrbxbY = await MARVELCOINkBuvvPz.burn.call(uintM9qvjLR, {from: accounts[5]});

		await expect(MARVELCOINkBuvvPz.burnFrom.call(addressSPYHrKK, uintEUqDwS8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})