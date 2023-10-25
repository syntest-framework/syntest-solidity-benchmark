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
		const stringZUGxJ4g = "yj5IlYAbOjYQH3D1stpqAihvLYXXrknMfqQ53es5w4gxFTWaMirRT3WoMFNispwukwBpoUB9WBE2VYJpAkFbXoFShCsPP35Kz4"
		const stringmGS0H3m = "iOLQ7L8xJ9OSDFaBlV"
		const uintdji2mE = BigInt("177")
		const WheatFarmNYikGvS = await WheatFarm.new(stringZUGxJ4g, stringmGS0H3m, uintdji2mE, {from: accounts[2]});
		const addressWgeQfCP = accounts[1]
		const addressfUrXbuW = accounts[2]
//		const boolKzIEV6Q = await WheatFarmNYikGvS.transferownership.call(addressWgeQfCP, {from: "0x0000000000000000000000000000000000000001"});
//		const stringyQFkOXy = await WheatFarmNYikGvS.name.call({from: accounts[1]});
//		const uintAvQ5ohY = await WheatFarmNYikGvS.balanceOf.call(addressfUrXbuW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmNYikGvS.transferownership.call(addressWgeQfCP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringjYgJRl = "Vvdjn2piwbnYi2Ss70uobqNlP6PldpXaS1TgloTasnxKW3WZh1T0HMjHWBg"
		const stringLQMToCP = "NLbABn2vcMKUql0Sguo5VhPdyfT"
		const uintu56VuvP = BigInt("1073")
		const WheatFarmrdKGmgg = await WheatFarm.new(stringjYgJRl, stringLQMToCP, uintu56VuvP, {from: accounts[1]});
		const uintVckEGI4 = BigInt("1434")
		const addressgOKbU8r = accounts[3]
		const uintkcxbsX6 = BigInt("472")
		const addressmFqm9E8 = accounts[4]
		const addressaAN5T3E = accounts[1]
		const uintemFz8go = BigInt("0")
		const addresszQwIoq = accounts[5]
		const addressvZnrFvp = accounts[0]
		const uintPrCt0yL = BigInt("326")
		const addressZ91wz3h = accounts[3]
		const uintUizbwM4 = BigInt("1778")
		const addresshFTid05 = accounts[3]
		const boolut6pOiR = await WheatFarmrdKGmgg.approve.call(addressgOKbU8r, uintVckEGI4, {from: accounts[4]});
		const boolbd0pORH = await WheatFarmrdKGmgg.transferFrom.call(addressaAN5T3E, addressmFqm9E8, uintkcxbsX6, {from: accounts[1]});
		const stringNBDqpYN = await WheatFarmrdKGmgg.name.call({from: accounts[2]});
		const boolFJJAuzg = await WheatFarmrdKGmgg.transfer.call(addresszQwIoq, uintemFz8go, {from: accounts[1]});
		const stringqEyEhF6 = await WheatFarmrdKGmgg.name.call({from: accounts[1]});
		const uintpSPghE = await WheatFarmrdKGmgg.balanceOf.call(addressvZnrFvp, {from: accounts[2]});
//		const boolQ880LIE = await WheatFarmrdKGmgg.increaseAllowance.call(addressZ91wz3h, uintPrCt0yL, {from: accounts[0]});
//		const boolZmryOl = await WheatFarmrdKGmgg.transfer.call(addresshFTid05, uintUizbwM4, {from: accounts[4]});
//		const uint8XHc0l9 = await WheatFarmrdKGmgg.decimals.call({from: accounts[0]});

		assert.equal(boolFJJAuzg, true)
		assert.equal(boolbd0pORH, true)
		assert.equal(boolut6pOiR, true)
		assert.equal(stringNBDqpYN, "Vvdjn2piwbnYi2Ss70uobqNlP6PldpXaS1TgloTasnxKW3WZh1T0HMjHWBg")
		assert.equal(stringqEyEhF6, "Vvdjn2piwbnYi2Ss70uobqNlP6PldpXaS1TgloTasnxKW3WZh1T0HMjHWBg")
		assert.equal(uintpSPghE, BigInt("0"))
		await expect(WheatFarmrdKGmgg.increaseAllowance.call(addressZ91wz3h, uintPrCt0yL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringsLa26T = "RPCHF7jKNWfSxJ779DrHZYVlqjtKJwLqORxkXSm3hasakaJHOxmdKgZiqD6t5oZ5aYWqKpE5y9PRr"
		const stringXSWd5iw = "gnL12H4MUNcKbVpfOcRXh001"
		const uintvlahAYy = BigInt("150")
		const WheatFarmrbXtFST = await WheatFarm.new(stringsLa26T, stringXSWd5iw, uintvlahAYy, {from: "0x0000000000000000000000000000000000000001"});
		const stringZ6wi8C2 = await WheatFarmrbXtFST.name.call({from: accounts[4]});
		const stringkrFZDVk = await WheatFarmrbXtFST.name.call({from: accounts[1]});
		const stringkZPMR5L = await WheatFarmrbXtFST.symbol.call({from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringjYgJRl = "Vvdjn2piwbnYi2Ss70uobqNlP6PldpXaS1TgloTasnxKW3WZh1T0HMjHWBg"
		const stringLQMToCP = "NLbABn2vcMKUql0Sguo5VhPdyfT"
		const uintegQS2vx = BigInt("1073")
		const WheatFarmrdKGmgg = await WheatFarm.new(stringjYgJRl, stringLQMToCP, uintegQS2vx, {from: accounts[1]});
		const addressWAXV4Hk = accounts[2]
		const addresspzMj5tK = accounts[4]
		const uintNUstEY = BigInt("1606")
		const addressoO9GaYM = accounts[2]
		const uintV50hCze = BigInt("1057")
		const addressRge61Ao = accounts[3]
		const uinttApScCN = await WheatFarmrdKGmgg.allowance.call(addresspzMj5tK, addressWAXV4Hk, {from: accounts[0]});
		const booltsyEg3 = await WheatFarmrdKGmgg.approveAndCall.call(addressoO9GaYM, uintNUstEY, {from: accounts[1]});
//		const boolsZa868n = await WheatFarmrdKGmgg.approveAndCall.call(addressRge61Ao, uintV50hCze, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8XHc0l9 = await WheatFarmrdKGmgg.decimals.call({from: accounts[0]});

		assert.equal(booltsyEg3, true)
		assert.equal(uinttApScCN, BigInt("0"))
		await expect(WheatFarmrdKGmgg.approveAndCall.call(addressRge61Ao, uintV50hCze, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})