const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringvqYfwR9 = "WJWsBG5GuOePcSWhZewXMy5ew0ZbzyZ2aKJRUSzrYvcl3njXB5l9tpcLNOb20fSWWV23lslbUAJj59jVc7J"
		const stringTAz9p8v = "J9TcMX5Y4hLZlDNB47h3egOHVO"
		const uintdtO7kx = BigInt("1509")
		const WheatFarmjWZkWD2 = await WheatFarm.new(stringvqYfwR9, stringTAz9p8v, uintdtO7kx, {from: accounts[2]});
		const uintrcP5uvP = BigInt("251")
		const addressD8cinBA = accounts[2]
		const uintF7Nc2hv = BigInt("423")
		const addressZWJbsbv = accounts[1]
		const addressOC0X9cE = accounts[3]
		const addressAnfXDwI = "0x0000000000000000000000000000000000000001"
		const addressbWkzb8V = accounts[1]
		const addressinpxqLG = "0x0000000000000000000000000000000000000001"
//		const boolnQhB55T = await WheatFarmjWZkWD2.increaseAllowance.call(addressD8cinBA, uintrcP5uvP, {from: accounts[0]});
//		const boolbArtywM = await WheatFarmjWZkWD2.transferFrom.call(addressOC0X9cE, addressZWJbsbv, uintF7Nc2hv, {from: accounts[0]});
//		const boolGvUgDXM = await WheatFarmjWZkWD2.transferownership.call(addressAnfXDwI, {from: accounts[3]});
//		const uintxt6r82i = await WheatFarmjWZkWD2.allowance.call(addressinpxqLG, addressbWkzb8V, {from: accounts[1]});

		await expect(WheatFarmjWZkWD2.increaseAllowance.call(addressD8cinBA, uintrcP5uvP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringBZdmp9s = "iFPloRdZY"
		const stringo1eF4IJ = "Dcez1JogWHd"
		const uintVFVZ4IY = BigInt("425")
		const WheatFarmvHFiEQO = await WheatFarm.new(stringBZdmp9s, stringo1eF4IJ, uintVFVZ4IY, {from: accounts[4]});
		const uint2OCGAT = BigInt("1940")
		const addresseoXdm0g = accounts[0]
		const uintYpgOahU = BigInt("135")
		const addresszmMAh7D = accounts[4]
		const boolIeLKGk = await WheatFarmvHFiEQO.transfer.call(addresseoXdm0g, uint2OCGAT, {from: accounts[4]});
//		const boolz6FDJyS = await WheatFarmvHFiEQO.decreaseAllowance.call(addresszmMAh7D, uintYpgOahU, {from: accounts[4]});

		assert.equal(boolIeLKGk, true)
		await expect(WheatFarmvHFiEQO.decreaseAllowance.call(addresszmMAh7D, uintYpgOahU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringsa8b0BJ = "4GRAdNmENhUp92qsXdrpc6qoEH17CFvCLM7jlCik93F7tiNTQCK0zlVu5nACD2jmQ"
		const stringBc1O3Ai = "8fIqbRt9I8JyUcYObTptaR6AuzDmOOfLPCUt6YA1rtR4oy30uOWPptULl181hOfQydaaeHf4BOPkmfbfTY"
		const uintdfLS31n = BigInt("1034")
		const WheatFarmwHLaUX8 = await WheatFarm.new(stringsa8b0BJ, stringBc1O3Ai, uintdfLS31n, {from: accounts[5]});
		const addresswyzIJl0 = accounts[4]
		const addressPkS7HFZ = "0x0000000000000000000000000000000000000001"
		const uintAzQImN = BigInt("638")
		const addressxaCFgfs = accounts[1]
		const uint8OZiDQtk = await WheatFarmwHLaUX8.decimals.call({from: accounts[3]});
		const uintNF4WKVN = await WheatFarmwHLaUX8.allowance.call(addressPkS7HFZ, addresswyzIJl0, {from: accounts[0]});
//		const boolygVE3AG = await WheatFarmwHLaUX8.transfer.call(addressxaCFgfs, uintAzQImN, {from: accounts[0]});

		assert.equal(uint8OZiDQtk, BigInt("18"))
		assert.equal(uintNF4WKVN, BigInt("0"))
		await expect(WheatFarmwHLaUX8.transfer.call(addressxaCFgfs, uintAzQImN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string3G1JeA = "JV2WmJvspu1A"
		const stringo5qkMFD = ""
		const uintkIuFLa = BigInt("74")
		const WheatFarmxTuBvJP = await WheatFarm.new(string3G1JeA, stringo5qkMFD, uintkIuFLa, {from: accounts[0]});
		const uintVGded9z = BigInt("611")
		const addressdLMoBT = accounts[0]
		const uintrRmIuxY = BigInt("879")
		const addressT7V1taZ = accounts[0]
		const addressqG5e5fd = accounts[0]
		const uintkVfd9O5 = BigInt("1641")
		const addressHFqLnpt = accounts[3]
		const boolDLN1qwW = await WheatFarmxTuBvJP.approve.call(addressdLMoBT, uintVGded9z, {from: accounts[0]});
		const stringTDF2zW9 = await WheatFarmxTuBvJP.name.call({from: accounts[1]});
//		const boolKsmwxVP = await WheatFarmxTuBvJP.transferFrom.call(addressqG5e5fd, addressT7V1taZ, uintrRmIuxY, {from: accounts[3]});
//		const boolg0OM1z = await WheatFarmxTuBvJP.approve.call(addressHFqLnpt, uintkVfd9O5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDLN1qwW, true)
		assert.equal(stringTDF2zW9, "JV2WmJvspu1A")
		await expect(WheatFarmxTuBvJP.transferFrom.call(addressqG5e5fd, addressT7V1taZ, uintrRmIuxY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkFJBaWo = "7nwVgUVYTflX841kkDBCoykoXyJpLg0pYYysyWUH7BOLZnseQ27mb5oJ6ypik8KHITuD3GN7q7OxcMbMBU"
		const stringfn17Jm = "nT7Z1fMjee3UCxQqFYLROhqkNhF3GQ4yHaK5PVDJRvaM67eUvsGhtTiSYmrx"
		const uinti4O1xM1 = BigInt("127")
		const WheatFarmTMwLvOt = await WheatFarm.new(stringkFJBaWo, stringfn17Jm, uinti4O1xM1, {from: accounts[4]});
		const uintlffpwS = BigInt("330")
		const addressPeiXPqb = accounts[0]
		const uintKY33IQ9 = BigInt("1081")
		const addressfm6qZ9Y = accounts[1]
		const addressoXbE9nM = accounts[1]
//		const boolIEYwlfy = await WheatFarmTMwLvOt.approveAndCall.call(addressPeiXPqb, uintlffpwS, {from: accounts[5]});
//		const uintuE4cRU3 = await WheatFarmTMwLvOt.totalSupply.call({from: accounts[1]});
//		const boolMzZQxh = await WheatFarmTMwLvOt.transferFrom.call(addressoXbE9nM, addressfm6qZ9Y, uintKY33IQ9, {from: accounts[1]});

		await expect(WheatFarmTMwLvOt.approveAndCall.call(addressPeiXPqb, uintlffpwS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string4WAu4S = "fSUPT8nZ5h2yfgXRdsxEv40d24rh"
		const stringsy9f4U4 = "3grGzOWHDuQ6C2hc14fUlSADVpYhIimPTEpVIQwyAviK2fplNJ8qtRd4zh1JVHbaGhBW6p3b"
		const uintwAGF0M = BigInt("161")
		const WheatFarmO2EO4c = await WheatFarm.new(string4WAu4S, stringsy9f4U4, uintwAGF0M, {from: accounts[0]});
		const addressCBpIgkh = accounts[4]
		const uintMsQQTDK = BigInt("365")
		const addressqMZRZA = accounts[3]
		const uintFS4Aaum = BigInt("534")
		const addressrNyij9t = accounts[3]
		const addressfJsB7AU = accounts[4]
		const uintAYo8iDS = BigInt("541")
		const address3Mcewi = accounts[4]
//		const boolCIMNhW3 = await WheatFarmO2EO4c.transferownership.call(addressCBpIgkh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGYTrkPt = await WheatFarmO2EO4c.transfer.call(addressqMZRZA, uintMsQQTDK, {from: accounts[1]});
//		const booli3BNUVa = await WheatFarmO2EO4c.transferFrom.call(addressfJsB7AU, addressrNyij9t, uintFS4Aaum, {from: accounts[4]});
//		const stringuWhMywj = await WheatFarmO2EO4c.name.call({from: accounts[1]});
//		const boolVyCybkj = await WheatFarmO2EO4c.decreaseAllowance.call(address3Mcewi, uintAYo8iDS, {from: accounts[1]});

		await expect(WheatFarmO2EO4c.transferownership.call(addressCBpIgkh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringEFpWxJ9 = "5OgBvxJY29LjPVYzwYsFaTRwqOxuA8YAqvCUDHllHdCwtNGtG1m5L"
		const stringYxiwWfv = "69UD14gH25djeatJwPWIhKMxtSnaLB2yYYgFzgnrdx799FjwSifh6vBk2Uf8Ly"
		const uintnTrzxh1 = BigInt("170")
		const WheatFarm2OysRb = await WheatFarm.new(stringEFpWxJ9, stringYxiwWfv, uintnTrzxh1, {from: "0x0000000000000000000000000000000000000001"});
		const uintRPN7LG8 = BigInt("952")
		const addressrnRN8fg = accounts[5]
		const uintT3UEZgk = BigInt("752")
		const addressoBiRJAW = accounts[2]
		const addresskAU15pi = accounts[3]
		const addressKAbuR4l = accounts[3]
		const addressTCFBXU = accounts[2]
		const addresshBXlczi = accounts[2]
		const boolDXVQChc = await WheatFarm2OysRb.approve.call(addressrnRN8fg, uintRPN7LG8, {from: accounts[0]});
		const boolJioDjNM = await WheatFarm2OysRb.transferFrom.call(addresskAU15pi, addressoBiRJAW, uintT3UEZgk, {from: accounts[4]});
		const uintjXJGzG = await WheatFarm2OysRb.totalSupply.call({from: accounts[0]});
		const uinthUVtj1o = await WheatFarm2OysRb.allowance.call(addressTCFBXU, addressKAbuR4l, {from: "0x0000000000000000000000000000000000000001"});
		const uint0RF7Xb = await WheatFarm2OysRb.balanceOf.call(addresshBXlczi, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WheatFarm', async () => {
		const string4WAu4S = "fSUPT8nZ5h2yfgXRdsxEv40d24rh"
		const stringsy9f4U4 = "3grGzOWHDuQ6C2hc14fUlSADVpYhIimPTEpVIQwyAviK2fplNJ8qtRd4zh1JVHbaGhBW6p3b"
		const uintUiKAVVi = BigInt("161")
		const WheatFarmO2EO4c = await WheatFarm.new(string4WAu4S, stringsy9f4U4, uintUiKAVVi, {from: accounts[0]});
		const uintOjt8rdE = BigInt("0")
		const address3VNVby = accounts[1]
		const address5MwXD3 = accounts[1]
		const uintrzgCMOK = BigInt("1736")
		const addressvQQ6kKe = accounts[2]
		const addresspZ0gfX = accounts[2]
		const addresskgNS3h9 = "0x0000000000000000000000000000000000000001"
		const uintbd367I = BigInt("541")
		const addressQ5EJOSZ = accounts[4]
		const boolYScMUqs = await WheatFarmO2EO4c.transferFrom.call(address5MwXD3, address3VNVby, uintOjt8rdE, {from: accounts[4]});
//		const boolQMESqzL = await WheatFarmO2EO4c.decreaseAllowance.call(addressvQQ6kKe, uintrzgCMOK, {from: accounts[1]});
//		const stringuWhMywj = await WheatFarmO2EO4c.name.call({from: accounts[1]});
//		const uint8ew72QBr = await WheatFarmO2EO4c.decimals.call({from: accounts[2]});
//		const uintrskxhz = await WheatFarmO2EO4c.allowance.call(addresskgNS3h9, addresspZ0gfX, {from: accounts[2]});
//		const boolVyCybkj = await WheatFarmO2EO4c.decreaseAllowance.call(addressQ5EJOSZ, uintbd367I, {from: accounts[1]});
//		const stringIPKcPJq = await WheatFarmO2EO4c.symbol.call({from: accounts[2]});

		assert.equal(boolYScMUqs, true)
		await expect(WheatFarmO2EO4c.decreaseAllowance.call(addressvQQ6kKe, uintrzgCMOK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVBkkKo = "31XPOluuwxKrCXjqrXY1kt"
		const stringWk2h5X = "NQD6SAU5zl9gUWmUBadZ4JbuCNHxyqAgzyKWMVArNkQvAtPxSyZzC7fO0Gi1yPEjOX7zE8YgJHUWmpPjV"
		const uintJlj1oI = BigInt("120")
		const WheatFarmgPX2pwO = await WheatFarm.new(stringVBkkKo, stringWk2h5X, uintJlj1oI, {from: accounts[3]});
		const addressQ0rBpSQ = accounts[4]
		const addressYCDRiJF = accounts[2]
		const booloFjGLL2 = await WheatFarmgPX2pwO.transferownership.call(addressQ0rBpSQ, {from: accounts[3]});
//		const boolH4yEAuC = await WheatFarmgPX2pwO.transferownership.call(addressYCDRiJF, {from: accounts[5]});

		assert.equal(booloFjGLL2, true)
		await expect(WheatFarmgPX2pwO.transferownership.call(addressYCDRiJF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkFJBaWo = "7nwVgUVYTflX841kkDBCoykoXyJpLg0pYYysyWUH7BOLZnseQ27mb5oJ6ypik8KHITuD3GN7q7OxcMbMBU"
		const stringfn17Jm = "nT7Z1fMjee3UCxQqFYLROhqkNhF3GQ4yHaK5PVDJRvaM67eUvsGhtTiSYmrx"
		const uintskcpQfg = BigInt("127")
		const WheatFarmTMwLvOt = await WheatFarm.new(stringkFJBaWo, stringfn17Jm, uintskcpQfg, {from: accounts[4]});
		const uintMhlxhWY = BigInt("1349")
		const addresslc17QW3 = accounts[4]
		const uintDRokUzy = BigInt("2013")
		const addressYWH7DkQ = "0x0000000000000000000000000000000000000001"
		const uinteVEA65 = BigInt("864")
		const addressdQxfTT = accounts[2]
		const booliWdCIZO = await WheatFarmTMwLvOt.transfer.call(addresslc17QW3, uintMhlxhWY, {from: accounts[4]});
		const booljoGdzmi = await WheatFarmTMwLvOt.approveAndCall.call(addressYWH7DkQ, uintDRokUzy, {from: accounts[4]});
//		const boolg8B036e = await WheatFarmTMwLvOt.approveAndCall.call(addressdQxfTT, uinteVEA65, {from: accounts[2]});

		assert.equal(booliWdCIZO, true)
		assert.equal(booljoGdzmi, true)
		await expect(WheatFarmTMwLvOt.approveAndCall.call(addressdQxfTT, uinteVEA65, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})