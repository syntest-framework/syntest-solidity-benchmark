const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADLrG7isZ = await ZAD.new({from: accounts[4]});
		const uintxnvQvga = BigInt("1613")
		const addressTsDs0Cy = accounts[3]
		const uintN0Lr063 = BigInt("934")
		const addressE5wyBJ5 = accounts[0]
		const uintrEZBuFa = BigInt("757")
		const addresspreWArl = accounts[3]
		const addressOYSudlD = accounts[1]
		const boolqIrV2Sg = await ZADLrG7isZ.approve.call(addressTsDs0Cy, uintxnvQvga, {from: accounts[4]});
		const boolud3Ysuc = await ZADLrG7isZ.decreaseAllowance.call(addressE5wyBJ5, uintN0Lr063, {from: accounts[0]});
		const boolpyZyzL0 = await ZADLrG7isZ.approve.call(addresspreWArl, uintrEZBuFa, {from: accounts[1]});
		const uint256kBpfETj = await ZADLrG7isZ.balanceOf.call(addressOYSudlD, {from: accounts[1]});

		assert.equal(boolqIrV2Sg, true)
		await expect(ZADLrG7isZ.decreaseAllowance.call(addressE5wyBJ5, uintN0Lr063, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADYpZriUH = await ZAD.new({from: accounts[3]});
		const uintxPYhZYE = BigInt("491")
		const uintwVYjxNV = BigInt("1794")
		const addressusZcqm4 = accounts[2]
		const uint256RfU63DZ = await ZADYpZriUH._burn.call(uintxPYhZYE, {from: accounts[0]});
		const boolorO2EK = await ZADYpZriUH.transfer.call(addressusZcqm4, uintwVYjxNV, {from: accounts[4]});
		const string85rGru = await ZADYpZriUH.symbol.call({from: accounts[3]});
		const stringBHfYx9Z = await ZADYpZriUH.name.call({from: accounts[0]});

		await expect(ZADYpZriUH._burn.call(uintxPYhZYE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADOdjdLax = await ZAD.new({from: accounts[5]});
		const addresswlkwgo = accounts[0]
		const addressPK7ufHO = accounts[2]
		const addressG40qHcx = accounts[3]
		const addressOLYJJ6V = accounts[3]
		const uint256cHGnUr = await ZADOdjdLax.allowance.call(addressPK7ufHO, addresswlkwgo, {from: accounts[1]});
		const uint256vMGV2na = await ZADOdjdLax.allowance.call(addressOLYJJ6V, addressG40qHcx, {from: accounts[2]});

		assert.equal(uint256cHGnUr, BigInt("0"))
		assert.equal(uint256vMGV2na, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADqHFsSnH = await ZAD.new({from: accounts[1]});
		const uintd8JrhjX = BigInt("98")
		const addresspN4Wh9z = accounts[2]
		const uintp28cgYg = BigInt("471")
		const addressauZy0lM = "0x0000000000000000000000000000000000000001"
		const addressasLR6Z = accounts[2]
		const boolDLgs6Q = await ZADqHFsSnH.transfer.call(addresspN4Wh9z, uintd8JrhjX, {from: accounts[4]});
		const boolDIRNtmM = await ZADqHFsSnH.transferFrom.call(addressasLR6Z, addressauZy0lM, uintp28cgYg, {from: accounts[3]});
		const stringDbbD89J = await ZADqHFsSnH.symbol.call({from: accounts[4]});

		await expect(ZADqHFsSnH.transfer.call(addresspN4Wh9z, uintd8JrhjX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZzfHyQI = await ZAD.new({from: accounts[2]});
		const uintsEzRinA = BigInt("739")
		const addresssJZVhso = accounts[2]
		const addressXdrdtVR = accounts[1]
		const addressyAPzVZs = accounts[1]
		const addressOqXWpeq = accounts[0]
		const boolZAbAAj = await ZADZzfHyQI.transferFrom.call(addressXdrdtVR, addresssJZVhso, uintsEzRinA, {from: accounts[3]});
		const uint256MY3yjsa = await ZADZzfHyQI.allowance.call(addressOqXWpeq, addressyAPzVZs, {from: "0x0000000000000000000000000000000000000001"});
		const stringXFR6GP5 = await ZADZzfHyQI.symbol.call({from: accounts[1]});

		await expect(ZADZzfHyQI.transferFrom.call(addressXdrdtVR, addresssJZVhso, uintsEzRinA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADoZaotRk = await ZAD.new({from: accounts[4]});
		const uintqsiWOqh = BigInt("554")
		const addressUBUvmUM = accounts[0]
		const addresshJzh3i = accounts[2]
		const uintHl6L2bp = BigInt("832")
		const addressy7Iv89h = accounts[4]
		const addressV0kcUXs = "0x0000000000000000000000000000000000000001"
		const stringJJ8llcg = await ZADoZaotRk.symbol.call({from: accounts[3]});
		const boolrV9RVsl = await ZADoZaotRk.decreaseAllowance.call(addressUBUvmUM, uintqsiWOqh, {from: accounts[4]});
		const uint256XTqtHj = await ZADoZaotRk.balanceOf.call(addresshJzh3i, {from: accounts[5]});
		const boolXdQIrTO = await ZADoZaotRk.transferFrom.call(addressV0kcUXs, addressy7Iv89h, uintHl6L2bp, {from: accounts[2]});

		assert.equal(stringJJ8llcg, "ZAD")
		await expect(ZADoZaotRk.decreaseAllowance.call(addressUBUvmUM, uintqsiWOqh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADKcdF5Mp = await ZAD.new({from: accounts[3]});
		const addressTpN7Ae = accounts[3]
		const addressWjaouwG = accounts[0]
		const uintJbd4aJ1 = BigInt("1522")
		const addressbd7HBD8 = accounts[3]
		const uints9N9Ym5 = BigInt("1581")
		const addressRyRb9zs = accounts[0]
		const uint8pqJyCSB = await ZADKcdF5Mp.decimals.call({from: accounts[3]});
		const uint8ZZHGc6n = await ZADKcdF5Mp.decimals.call({from: accounts[4]});
		const uint256Rp1RDsK = await ZADKcdF5Mp.allowance.call(addressWjaouwG, addressTpN7Ae, {from: accounts[3]});
		const boolBzh7hu = await ZADKcdF5Mp.transfer.call(addressbd7HBD8, uintJbd4aJ1, {from: accounts[3]});
		const boolDojyZ2A = await ZADKcdF5Mp.increaseAllowance.call(addressRyRb9zs, uints9N9Ym5, {from: accounts[4]});

		assert.equal(uint256Rp1RDsK, BigInt("0"))
		assert.equal(uint8ZZHGc6n, BigInt("18"))
		assert.equal(uint8pqJyCSB, BigInt("18"))
		await expect(ZADKcdF5Mp.transfer.call(addressbd7HBD8, uintJbd4aJ1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADOdjdLax = await ZAD.new({from: accounts[5]});
		const uintDhDXDJA = BigInt("1574")
		const addressPcHT0gB = "0x0000000000000000000000000000000000000001"
		const addresslHtjNdQ = accounts[1]
		const addresssPBRk9H = "0x0000000000000000000000000000000000000001"
		const addressH8QS88 = accounts[3]
		const addressDAQfLRR = accounts[4]
		const booljsRtp1a = await ZADOdjdLax.increaseAllowance.call(addressPcHT0gB, uintDhDXDJA, {from: accounts[0]});
		const uint256IvouQrf = await ZADOdjdLax.allowance.call(addresssPBRk9H, addresslHtjNdQ, {from: accounts[3]});
		const uint256KuYLvg = await ZADOdjdLax.totalSupply.call({from: accounts[3]});
		const uint256vMGV2na = await ZADOdjdLax.allowance.call(addressDAQfLRR, addressH8QS88, {from: accounts[2]});

		assert.equal(booljsRtp1a, true)
		assert.equal(uint256IvouQrf, BigInt("0"))
		assert.equal(uint256KuYLvg, BigInt("100000000000000000000000000"))
		assert.equal(uint256vMGV2na, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADOdjdLax = await ZAD.new({from: accounts[5]});
		const addressOSncmXy = accounts[1]
		const addressgTNKxxI = accounts[3]
		const addressHvU9vlR = accounts[4]
		const uintBXospQ = BigInt("1530")
		const addressuDbHCeW = accounts[1]
		const addressLnU2k6Q = accounts[0]
		const stringVYgFrUA = await ZADOdjdLax.symbol.call({from: accounts[3]});
		const uint256xPlUsbG = await ZADOdjdLax.balanceOf.call(addressOSncmXy, {from: accounts[5]});
		const uint256vMGV2na = await ZADOdjdLax.allowance.call(addressHvU9vlR, addressgTNKxxI, {from: accounts[2]});
		const boolpEsca9R = await ZADOdjdLax.transferFrom.call(addressLnU2k6Q, addressuDbHCeW, uintBXospQ, {from: accounts[5]});

		assert.equal(stringVYgFrUA, "ZAD")
		assert.equal(uint256vMGV2na, BigInt("0"))
		assert.equal(uint256xPlUsbG, BigInt("0"))
		await expect(ZADOdjdLax.transferFrom.call(addressLnU2k6Q, addressuDbHCeW, uintBXospQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADOdjdLax = await ZAD.new({from: accounts[5]});
		const uint9FQFR9 = BigInt("1054")
		const addresskfdD4y4 = accounts[3]
		const addressCueE2uK = accounts[4]
		const stringXI1FeTZ = await ZADOdjdLax.name.call({from: accounts[1]});
		const stringq70Q6LH = await ZADOdjdLax.name.call({from: accounts[2]});
		const uint256gDRAKkC = await ZADOdjdLax._burn.call(uint9FQFR9, {from: accounts[4]});
		const uint256vMGV2na = await ZADOdjdLax.allowance.call(addressCueE2uK, addresskfdD4y4, {from: accounts[2]});

		assert.equal(stringXI1FeTZ, "Zadkiel")
		assert.equal(stringq70Q6LH, "Zadkiel")
		await expect(ZADOdjdLax._burn.call(uint9FQFR9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAubCtL = await ZAD.new({from: accounts[3]});
		const uintDAcBocS = BigInt("1304")
		const addressSx0cdr7 = "0x0000000000000000000000000000000000000000"
		const uintu0rkp15 = BigInt("882")
		const addressXuiq05 = accounts[3]
		const uintYQb2tmi = BigInt("1423")
		const addressAFpW9RZ = accounts[2]
		const boolQbWMJeR = await ZADAubCtL.transfer.call(addressSx0cdr7, uintDAcBocS, {from: accounts[4]});
		const boolouiEutH = await ZADAubCtL.approve.call(addressXuiq05, uintu0rkp15, {from: accounts[3]});
		const stringb0SIgbx = await ZADAubCtL.name.call({from: accounts[3]});
		const boolD5OUQwX = await ZADAubCtL.increaseAllowance.call(addressAFpW9RZ, uintYQb2tmi, {from: accounts[1]});
		const uint256yUV3mW4 = await ZADAubCtL.totalSupply.call({from: accounts[2]});
		const uint256idHy1X1 = await ZADAubCtL.totalSupply.call({from: accounts[3]});

		await expect(ZADAubCtL.transfer.call(addressSx0cdr7, uintDAcBocS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAE1xIGC = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrqplL6s = BigInt("1366")
		const addressPrV2ahA = accounts[1]
		const uintQTcuGeN = BigInt("1620")
		const addressI0eKJpI = accounts[2]
		const uint83gUfDs = await ZADAE1xIGC.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhi1WTB8 = await ZADAE1xIGC.decreaseAllowance.call(addressPrV2ahA, uintrqplL6s, {from: accounts[2]});
		const stringjDOqZc9 = await ZADAE1xIGC.symbol.call({from: accounts[4]});
		const string2x0Y8L = await ZADAE1xIGC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolvHlW7Ru = await ZADAE1xIGC.transfer.call(addressI0eKJpI, uintQTcuGeN, {from: accounts[1]});
	});
})