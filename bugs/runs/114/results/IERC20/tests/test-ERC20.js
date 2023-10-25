const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractGmWYGus = await ERC20.new({from: accounts[3]});
		const addedValuegKYZMWk = BigInt("1729")
		const spenderSn67gzX = accounts[4]
		const valueGAD1Ohr = BigInt("1890")
		const tob2O3qJy = accounts[1]
		const fromAXsunRf = accounts[1]
		const nullJVXFxbY = await contractGmWYGus.increaseAllowance.call(spenderSn67gzX, addedValuegKYZMWk, {from: accounts[4]});
		const nullvMiv8Xu = await contractGmWYGus.transferFrom.call(fromAXsunRf, tob2O3qJy, valueGAD1Ohr, {from: accounts[0]});

		assert.equal(nullJVXFxbY, true)
		await expect(contractGmWYGus.transferFrom.call(fromAXsunRf, tob2O3qJy, valueGAD1Ohr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractH4cBHYX = await ERC20.new({from: accounts[1]});
		const valuetB7d14a = BigInt("1414")
		const toaWzumcY = accounts[2]
		const addedValue6GLdCF = BigInt("1247")
		const spenderCXbfpJU = accounts[1]
		const valueGdLj76k = BigInt("854")
		const toEj7VWnr = accounts[4]
		const fromqEFHCW4 = accounts[3]
		const ownerVJmDIeC = accounts[4]
		const ownernw9Sk1W = accounts[2]
		const valueNCIdx3V = BigInt("864")
		const toPeSok93 = accounts[2]
		const nullAXMGQ5G = await contractH4cBHYX.transfer.call(toaWzumcY, valuetB7d14a, {from: accounts[2]});
		const nullrZH2KVG = await contractH4cBHYX.increaseAllowance.call(spenderCXbfpJU, addedValue6GLdCF, {from: accounts[4]});
		const nullDIqLSCt = await contractH4cBHYX.transferFrom.call(fromqEFHCW4, toEj7VWnr, valueGdLj76k, {from: accounts[1]});
		const nulltbcdbQw = await contractH4cBHYX.balanceOf.call(ownerVJmDIeC, {from: accounts[2]});
		const nullbH6PPLo = await contractH4cBHYX.balanceOf.call(ownernw9Sk1W, {from: accounts[3]});
		const nulllszP6Z = await contractH4cBHYX.transfer.call(toPeSok93, valueNCIdx3V, {from: accounts[3]});

		await expect(contractH4cBHYX.transfer.call(toaWzumcY, valuetB7d14a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracttlIOD3p = await ERC20.new({from: accounts[2]});
		const spenderHi68c7G = "0x0000000000000000000000000000000000000001"
		const ownerohGXWVz = accounts[2]
		const valuetYl5wF4 = BigInt("471")
		const toA7KWsjk = "0x0000000000000000000000000000000000000001"
		const valueyzxgeQ = BigInt("373")
		const tosSCsKk6 = accounts[0]
		const valuePDie0o = BigInt("251")
		const toq4V5VZm = accounts[4]
		const valuem3QUdEo = BigInt("1697")
		const spenderXGA7dBl = accounts[2]
		const nulltZ2WqBh = await contracttlIOD3p.allowance.call(ownerohGXWVz, spenderHi68c7G, {from: accounts[3]});
		const nullfsC8R2j = await contracttlIOD3p.transfer.call(toA7KWsjk, valuetYl5wF4, {from: accounts[2]});
		const nullPkGFmEe = await contracttlIOD3p.totalSupply.call({from: accounts[0]});
		const nullueUW0st = await contracttlIOD3p.transfer.call(tosSCsKk6, valueyzxgeQ, {from: accounts[0]});
		const nulln2nLGx = await contracttlIOD3p.transfer.call(toq4V5VZm, valuePDie0o, {from: accounts[1]});
		const nullpCvBsYP = await contracttlIOD3p.approve.call(spenderXGA7dBl, valuem3QUdEo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulltZ2WqBh, 0)
		await expect(contracttlIOD3p.transfer.call(toA7KWsjk, valuetYl5wF4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractpTC9FX0 = await ERC20.new({from: accounts[0]});
		const valuejg3sXHW = BigInt("1195")
		const spenderOBPHowz = accounts[1]
		const addedValueZcKMmDT = BigInt("772")
		const spenderB8r5Gpb = accounts[0]
		const valueBvX6643 = BigInt("1321")
		const toajiisDG = accounts[4]
		const ownerSzkmHJO = accounts[2]
		const nulloucvyZ7 = await contractpTC9FX0.approve.call(spenderOBPHowz, valuejg3sXHW, {from: accounts[5]});
		const nullLG8jxZe = await contractpTC9FX0.increaseAllowance.call(spenderB8r5Gpb, addedValueZcKMmDT, {from: accounts[0]});
		const nullim31KEQ = await contractpTC9FX0.transfer.call(toajiisDG, valueBvX6643, {from: accounts[4]});
		const nullw46JD28 = await contractpTC9FX0.balanceOf.call(ownerSzkmHJO, {from: accounts[2]});

		assert.equal(nullLG8jxZe, true)
		assert.equal(nulloucvyZ7, true)
		await expect(contractpTC9FX0.transfer.call(toajiisDG, valueBvX6643, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractekclBHg = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueMmbBj4 = BigInt("1025")
		const spenderkYkpnDP = accounts[1]
		const spenderUnPlEBs = accounts[0]
		const ownerPh4k7f = accounts[0]
		const value7eA7lT = BigInt("1453")
		const toSBFpBRs = accounts[1]
		const valueKOPbq4F = BigInt("552")
		const spenderU8lfn7q = accounts[0]
		const nullYK0ibhu = await contractekclBHg.increaseAllowance.call(spenderkYkpnDP, addedValueMmbBj4, {from: accounts[3]});
		const nulljszh4dw = await contractekclBHg.allowance.call(ownerPh4k7f, spenderUnPlEBs, {from: accounts[2]});
		const nulldkQbXUa = await contractekclBHg.transfer.call(toSBFpBRs, value7eA7lT, {from: accounts[5]});
		const nullCnhklBg = await contractekclBHg.approve.call(spenderU8lfn7q, valueKOPbq4F, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractaJjHBFt = await ERC20.new({from: accounts[0]});
		const valueRpXOrby = BigInt("1956")
		const toJptqKE3 = accounts[5]
		const fromNyyKgsV = accounts[3]
		const valuetHZU01 = BigInt("719")
		const toC49RKV5 = accounts[2]
		const valuegzahw1B = BigInt("566")
		const toMtu9m6b = accounts[3]
		const spenderxi8UIDo = "0x0000000000000000000000000000000000000001"
		const ownerTIvqs9T = accounts[4]
		const addedValue89eDIN = BigInt("1202")
		const spender8ofZKj = accounts[0]
		const nullWfEsmrZ = await contractaJjHBFt.totalSupply.call({from: accounts[1]});
		const null1BF4xj = await contractaJjHBFt.transferFrom.call(fromNyyKgsV, toJptqKE3, valueRpXOrby, {from: accounts[4]});
		const nullgeFJKXF = await contractaJjHBFt.transfer.call(toC49RKV5, valuetHZU01, {from: accounts[0]});
		const nullJEfDeyf = await contractaJjHBFt.transfer.call(toMtu9m6b, valuegzahw1B, {from: accounts[1]});
		const nullqoEg5t8 = await contractaJjHBFt.allowance.call(ownerTIvqs9T, spenderxi8UIDo, {from: accounts[2]});
		const nullI3j81JQ = await contractaJjHBFt.increaseAllowance.call(spender8ofZKj, addedValue89eDIN, {from: accounts[5]});

		assert.equal(nullWfEsmrZ, 0)
		await expect(contractaJjHBFt.transferFrom.call(fromNyyKgsV, toJptqKE3, valueRpXOrby, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractb2ikGt = await ERC20.new({from: accounts[4]});
		const spenderEab9PbI = accounts[2]
		const ownervrfY7q = accounts[1]
		const spenderdZGVzOH = accounts[4]
		const ownerN5XIO9g = accounts[4]
		const addedValuevrBfZEv = BigInt("626")
		const spendermHNEi6d = accounts[3]
		const subtractedValueBpUVvfj = BigInt("1589")
		const spenderp3Z9L4U = accounts[4]
		const nullkiRJE8g = await contractb2ikGt.allowance.call(ownervrfY7q, spenderEab9PbI, {from: accounts[5]});
		const nulltoDCwOh = await contractb2ikGt.totalSupply.call({from: accounts[4]});
		const nullUm0tiba = await contractb2ikGt.allowance.call(ownerN5XIO9g, spenderdZGVzOH, {from: accounts[0]});
		const nullDyJUbz = await contractb2ikGt.increaseAllowance.call(spendermHNEi6d, addedValuevrBfZEv, {from: accounts[4]});
		const nullMVQFlJ9 = await contractb2ikGt.decreaseAllowance.call(spenderp3Z9L4U, subtractedValueBpUVvfj, {from: accounts[0]});

		assert.equal(nullDyJUbz, true)
		assert.equal(nullUm0tiba, 0)
		assert.equal(nullkiRJE8g, 0)
		assert.equal(nulltoDCwOh, 0)
		await expect(contractb2ikGt.decreaseAllowance.call(spenderp3Z9L4U, subtractedValueBpUVvfj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractPgD8kFH = await ERC20.new({from: accounts[2]});
		const spenderzxXrWvP = "0x0000000000000000000000000000000000000001"
		const ownerYP3wYRf = accounts[2]
		const valueQtmnMPG = BigInt("1179")
		const spendertPpd6Sv = accounts[2]
		const ownerr6GGsWZ = accounts[2]
		const valuedn2FDNH = BigInt("471")
		const toKpYTkKY = "0x0000000000000000000000000000000000000000"
		const valueSvtegLw = BigInt("373")
		const toFT4Pws2 = accounts[0]
		const valueCebjsY = BigInt("251")
		const to6VH1RL = accounts[4]
		const valuelQJlHWL = BigInt("1697")
		const spendercp6Esyy = accounts[2]
		const nullU97TD2u = await contractPgD8kFH.allowance.call(ownerYP3wYRf, spenderzxXrWvP, {from: accounts[3]});
		const nullnaEmNMU = await contractPgD8kFH.approve.call(spendertPpd6Sv, valueQtmnMPG, {from: accounts[3]});
		const nullSoQ9hSt = await contractPgD8kFH.balanceOf.call(ownerr6GGsWZ, {from: accounts[2]});
		const nullR3VJZzN = await contractPgD8kFH.transfer.call(toKpYTkKY, valuedn2FDNH, {from: accounts[2]});
		const nullvtKbL8m = await contractPgD8kFH.totalSupply.call({from: accounts[0]});
		const nullfWCm2YW = await contractPgD8kFH.transfer.call(toFT4Pws2, valueSvtegLw, {from: accounts[0]});
		const nullME2awER = await contractPgD8kFH.transfer.call(to6VH1RL, valueCebjsY, {from: accounts[1]});
		const nulleRkCm3F = await contractPgD8kFH.approve.call(spendercp6Esyy, valuelQJlHWL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullSoQ9hSt, 0)
		assert.equal(nullU97TD2u, 0)
		assert.equal(nullnaEmNMU, true)
		await expect(contractPgD8kFH.transfer.call(toKpYTkKY, valuedn2FDNH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})