const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringERxc5qx = "S1jt2TaH8DXSxjJlFiHJa9nee2fbVKGxIUmW44zvfAR9rHYYrHLCrzKaMAcM9MqRpwDMHLX5pSFMweNHRvtmOip32c"
		const stringTPw5sY = "bd3FIToEBgRCI7yo2cFHTPbBWva1COdmRIi"
		const uintkvGSARX = BigInt("112")
		const WOLFMQyO2So = await WOLF.new(stringERxc5qx, stringTPw5sY, uintkvGSARX, {from: accounts[3]});
		const uintLj6lxH = BigInt("1295")
		const addressi5H3G6a = accounts[3]
		const uintSDB6Ai1 = BigInt("501")
		const addressQQ07Hwv = accounts[4]
		const uinteXnoeL = BigInt("694")
		const addressYBo6Tdh = accounts[2]
		const addressGChpTPO = accounts[0]
		const uintz1vOAS = BigInt("1003")
		const addressv3PEAup = accounts[3]
		const boolR0upnTL = await WOLFMQyO2So.approve.call(addressi5H3G6a, uintLj6lxH, {from: accounts[5]});
		const boolXq1NpWS = await WOLFMQyO2So.approve.call(addressQQ07Hwv, uintSDB6Ai1, {from: accounts[2]});
		const boolSxaWVL8 = await WOLFMQyO2So.transferFrom.call(addressGChpTPO, addressYBo6Tdh, uinteXnoeL, {from: accounts[0]});
		const booldSIE4q5 = await WOLFMQyO2So.transfer.call(addressv3PEAup, uintz1vOAS, {from: accounts[3]});

		assert.equal(boolR0upnTL, true)
		assert.equal(boolXq1NpWS, true)
		await expect(WOLFMQyO2So.transferFrom.call(addressGChpTPO, addressYBo6Tdh, uinteXnoeL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringQIajH4i = "muv9J9PO8fNU4ykNrgs8p8WYYqa6Zr9FJ1R6CSPqREHxFS3XybpjOTmWyxKP0oiIO8y"
		const stringjiC85w8 = "JbeoCnS61YBYwDB6ib1rxHcQZLE6HyK7vtMf4kPGPznNaDzJUr8686Hp1pKkqwXypYHRuuFl2EksumvGww"
		const uintMgk9Jbb = BigInt("550")
		const WOLFEh04nXn = await WOLF.new(stringQIajH4i, stringjiC85w8, uintMgk9Jbb, {from: accounts[2]});
		const uintGhnVIrq = BigInt("1468")
		const addresswuYhUY6 = accounts[0]
		const uintqnniyjb = BigInt("425")
		const addressJTFMsqU = accounts[2]
		const addressOPvr0yJ = accounts[1]
		const addressPQjnDnL = accounts[4]
		const addressHSWSj1y = "0x0000000000000000000000000000000000000001"
		const uintcGyLYJy = BigInt("397")
		const addressriYM4Lf = accounts[0]
		const boolHsX3AUN = await WOLFEh04nXn.approve.call(addresswuYhUY6, uintGhnVIrq, {from: accounts[4]});
		const boolHvdFHzA = await WOLFEh04nXn.approve.call(addressJTFMsqU, uintqnniyjb, {from: accounts[0]});
		const boolxY3F9br = await WOLFEh04nXn.transferownership.call(addressOPvr0yJ, {from: accounts[4]});
		const boolKy8fuXj = await WOLFEh04nXn.transferownership.call(addressPQjnDnL, {from: accounts[3]});
		const boolcH5bahW = await WOLFEh04nXn.transferownership.call(addressHSWSj1y, {from: accounts[1]});
		const boolvFHKj1 = await WOLFEh04nXn.transfer.call(addressriYM4Lf, uintcGyLYJy, {from: accounts[0]});

		assert.equal(boolHsX3AUN, true)
		assert.equal(boolHvdFHzA, true)
		await expect(WOLFEh04nXn.transferownership.call(addressOPvr0yJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringfHJgBq0 = "7uKHw4bnPti3kI2TzuvvwfMQ8q3YGFWSbHc3ejxg8Y14GnWSu3GkdcyRD8nycryYA2EALTb2TtJmDKcFvwxMRuck"
		const stringXDBwvNX = "VL95Fmj8T6dYef51qarDnu71IOEXqAjTR27TvZ268FRS05zLx6fuzxMFRqGPq"
		const uintMt3Oe9d = BigInt("1698")
		const WOLFF3tpG5V = await WOLF.new(stringfHJgBq0, stringXDBwvNX, uintMt3Oe9d, {from: accounts[5]});
		const uintYbIJFEb = BigInt("1202")
		const addressQxt6F9j = accounts[2]
		const uintVUw6AHT = BigInt("737")
		const addressXLzABhN = accounts[3]
		const uintVHY5IQX = BigInt("1770")
		const addressBrxHia7 = accounts[1]
		const addressAzr5Yv9 = accounts[2]
		const uintuTaQVg8 = BigInt("1217")
		const addressDzi2wo1 = accounts[1]
		const uintpskcaqE = BigInt("495")
		const addresshGCFHEe = accounts[0]
		const boolvDUBtV = await WOLFF3tpG5V.approveAndCall.call(addressQxt6F9j, uintYbIJFEb, {from: accounts[3]});
		const boolJcmKlWI = await WOLFF3tpG5V.approveAndCall.call(addressXLzABhN, uintVUw6AHT, {from: accounts[4]});
		const boolmdAF5cn = await WOLFF3tpG5V.transferFrom.call(addressAzr5Yv9, addressBrxHia7, uintVHY5IQX, {from: accounts[4]});
		const boolLlqPB90 = await WOLFF3tpG5V.transfer.call(addressDzi2wo1, uintuTaQVg8, {from: accounts[4]});
		const booldqbxC1 = await WOLFF3tpG5V.approve.call(addresshGCFHEe, uintpskcaqE, {from: accounts[1]});

		await expect(WOLFF3tpG5V.approveAndCall.call(addressQxt6F9j, uintYbIJFEb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringawgzf6J = "pyvqcBsMCJN1SlI7l4snsdj6ncVMGbVSeU18UDVGnJ7HaF"
		const stringY9m9XG = "8Jwyyrh2UYzKCPAy8oXkpmQCDxYhKBXrNf"
		const uinte4ruW3r = BigInt("450")
		const WOLFJgsSBS = await WOLF.new(stringawgzf6J, stringY9m9XG, uinte4ruW3r, {from: accounts[3]});
		const uintkrsdp1H = BigInt("379")
		const addressajHGVyq = accounts[5]
		const addressvuhkhnm = accounts[3]
		const uinth7mEhw = BigInt("524")
		const addressag6eoub = accounts[4]
		const boolXFEccVr = await WOLFJgsSBS.transferFrom.call(addressvuhkhnm, addressajHGVyq, uintkrsdp1H, {from: accounts[3]});
		const boolIuDMqWr = await WOLFJgsSBS.approveAndCall.call(addressag6eoub, uinth7mEhw, {from: accounts[5]});

		assert.equal(boolXFEccVr, true)
		await expect(WOLFJgsSBS.approveAndCall.call(addressag6eoub, uinth7mEhw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringADAG0Hz = "Z4IYyGKaAfSwfgj6aGsAgLp1wZrn8FXqq2DkGAhgxzbL7dC6R02l8tAFvloObixvGT5yQ614Z02PVfMimf9SzEbByRN"
		const stringT2k0LGa = "sowY6FbMa5kXDBt8yhCbnrUThVW"
		const uintsKrDcwk = BigInt("1685")
		const WOLFedoubUz = await WOLF.new(stringADAG0Hz, stringT2k0LGa, uintsKrDcwk, {from: "0x0000000000000000000000000000000000000001"});
		const uintt4mXfeu = BigInt("1606")
		const addressl3MzLkz = accounts[1]
		const uintxmLoDP = BigInt("1705")
		const addresszhOpsM6 = accounts[3]
		const uintCc1OM4V = BigInt("1363")
		const addressVT2bqjp = accounts[5]
		const uintQAb2JBn = BigInt("155")
		const addressN3zQamP = accounts[1]
		const addressnyPldvr = accounts[3]
		const uintdLRf3AI = BigInt("984")
		const addressuV3SekB = accounts[1]
		const uintesYcBQd = BigInt("1773")
		const addressYDUepXa = accounts[0]
		const addressCxdGy6O = accounts[4]
		const boolHcHi4R = await WOLFedoubUz.approve.call(addressl3MzLkz, uintt4mXfeu, {from: accounts[4]});
		const boolASXldcE = await WOLFedoubUz.approveAndCall.call(addresszhOpsM6, uintxmLoDP, {from: accounts[1]});
		const boolvFW1MMQ = await WOLFedoubUz.approveAndCall.call(addressVT2bqjp, uintCc1OM4V, {from: accounts[3]});
		const booljNXjduj = await WOLFedoubUz.transferFrom.call(addressnyPldvr, addressN3zQamP, uintQAb2JBn, {from: accounts[3]});
		const boolJxVBzKN = await WOLFedoubUz.approve.call(addressuV3SekB, uintdLRf3AI, {from: accounts[3]});
		const boolC4loOcv = await WOLFedoubUz.transferFrom.call(addressCxdGy6O, addressYDUepXa, uintesYcBQd, {from: accounts[0]});
	});

	it('test for WOLF', async () => {
		const stringg1Doyfw = "4sWHK4E8j2RdIt5m5inSp1YilLb"
		const stringlIxj22a = "BlQe6SJYDkzeT83o6zthc8sz4iJn1fFDI5hXmj1fyuVl5fFgJ"
		const uintrawuOsz = BigInt("1174")
		const WOLFtm9kty7 = await WOLF.new(stringg1Doyfw, stringlIxj22a, uintrawuOsz, {from: accounts[4]});
		const uintjRFipH = BigInt("76")
		const addressAKOadMu = accounts[2]
		const uintmI2v25x = BigInt("385")
		const addressU1kaVX = "0x0000000000000000000000000000000000000001"
		const uintNEJ9QZr = BigInt("1420")
		const addresshhRRNk = accounts[4]
		const uintLXiFQPF = BigInt("501")
		const addressaz8iQYE = "0x0000000000000000000000000000000000000001"
		const boolrxnUAdQ = await WOLFtm9kty7.approve.call(addressAKOadMu, uintjRFipH, {from: accounts[4]});
		const boolXkg5OzM = await WOLFtm9kty7.transfer.call(addressU1kaVX, uintmI2v25x, {from: accounts[3]});
		const boolBj7oJMj = await WOLFtm9kty7.approveAndCall.call(addresshhRRNk, uintNEJ9QZr, {from: accounts[5]});
		const boolvpJc1sH = await WOLFtm9kty7.approveAndCall.call(addressaz8iQYE, uintLXiFQPF, {from: accounts[2]});

		assert.equal(boolrxnUAdQ, true)
		await expect(WOLFtm9kty7.transfer.call(addressU1kaVX, uintmI2v25x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringawgzf6J = "pyvqcBsMCJN1SlI7l4snsdj6ncVMGbVSeU18UDVGnJ7HaF"
		const stringY9m9XG = "8Jwyyrh2UYzKCPAy8oXkpmQCDxYhKBXrNf"
		const uintE4QsWG = BigInt("450")
		const WOLFJgsSBS = await WOLF.new(stringawgzf6J, stringY9m9XG, uintE4QsWG, {from: accounts[3]});
		const uintfkexBSE = BigInt("764")
		const addressbbCgD3r = accounts[3]
		const uintcSPPcTS = BigInt("64")
		const addressxnqj3IV = accounts[1]
		const uintN4APjyd = BigInt("1940")
		const addressanVIB0y = accounts[4]
		const uintcBkQx2V = BigInt("160")
		const addressf9WgUJ5 = accounts[3]
		const addressNkLxKXB = accounts[2]
		const uintUGfqF9G = BigInt("379")
		const addresszjl9oIX = accounts[5]
		const addressd4HGPO9 = accounts[3]
		const boolgoVo9NM = await WOLFJgsSBS.approve.call(addressbbCgD3r, uintfkexBSE, {from: accounts[0]});
		const boolRO2sZ2U = await WOLFJgsSBS.approveAndCall.call(addressxnqj3IV, uintcSPPcTS, {from: accounts[3]});
		const boolXFlhIPZ = await WOLFJgsSBS.approve.call(addressanVIB0y, uintN4APjyd, {from: accounts[4]});
		const boolujCIJ6D = await WOLFJgsSBS.transferFrom.call(addressNkLxKXB, addressf9WgUJ5, uintcBkQx2V, {from: accounts[2]});
		const boolXFEccVr = await WOLFJgsSBS.transferFrom.call(addressd4HGPO9, addresszjl9oIX, uintUGfqF9G, {from: accounts[3]});

		assert.equal(boolRO2sZ2U, true)
		assert.equal(boolXFlhIPZ, true)
		assert.equal(boolgoVo9NM, true)
		await expect(WOLFJgsSBS.transferFrom.call(addressNkLxKXB, addressf9WgUJ5, uintcBkQx2V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringSbfX72G = "eBk9g3dzkrvXg1jVnkp"
		const stringIK53hjV = "RjC1Nt2NgugxjmE6kEuLj4Am1kTOE0YWWERj6hpWAtjPukYT2ctPXCVzj5hY3NW6ahQcmot9wl"
		const uintEJ8RE2g = BigInt("1432")
		const WOLFr57GHcT = await WOLF.new(stringSbfX72G, stringIK53hjV, uintEJ8RE2g, {from: accounts[0]});
		const uintcg71vqu = BigInt("0")
		const addressD7CZzU7 = accounts[4]
		const uintgqDGoOZ = BigInt("483")
		const addressZfbZuF1 = accounts[2]
		const addressY62ccTd = accounts[3]
		const boolcly6h0V = await WOLFr57GHcT.transfer.call(addressD7CZzU7, uintcg71vqu, {from: accounts[3]});
		const boolROBsR9 = await WOLFr57GHcT.transfer.call(addressZfbZuF1, uintgqDGoOZ, {from: accounts[2]});
		const boolbxi0iBG = await WOLFr57GHcT.transferownership.call(addressY62ccTd, {from: accounts[0]});

		assert.equal(boolcly6h0V, true)
		await expect(WOLFr57GHcT.transfer.call(addressZfbZuF1, uintgqDGoOZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringawgzf6J = "pyvqcBsMCJN1SlI7l4snsdj6ncVMGbVSeU18UDVGnJ7HaF"
		const stringY9m9XG = "8Jwyyrh2UYzKCPAy8oXkpmQCDxYhKBXrNf"
		const uint5lZRRd = BigInt("450")
		const WOLFJgsSBS = await WOLF.new(stringawgzf6J, stringY9m9XG, uint5lZRRd, {from: accounts[3]});
		const uintq26k7q0 = BigInt("0")
		const addressrcw9L8D = "0x0000000000000000000000000000000000000001"
		const uintm2SnCBG = BigInt("276")
		const addressHO4Bdd = accounts[2]
		const boolC8gNkP2 = await WOLFJgsSBS.approveAndCall.call(addressrcw9L8D, uintq26k7q0, {from: accounts[3]});
		const boolVnCEtL6 = await WOLFJgsSBS.transfer.call(addressHO4Bdd, uintm2SnCBG, {from: accounts[3]});

		assert.equal(boolC8gNkP2, true)
		assert.equal(boolVnCEtL6, true)
	});
})