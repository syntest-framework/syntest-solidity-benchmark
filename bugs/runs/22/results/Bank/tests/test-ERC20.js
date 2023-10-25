const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contracteOBVkrR = await ERC20.new({from: accounts[5]});
		const valueNqDP6D = BigInt("918")
		const totsCMmVs = "0x0000000000000000000000000000000000000001"
		const valueUaPdRS = BigInt("797")
		const toe6E9fS = accounts[2]
		const nullgAbtldg = await contracteOBVkrR.transfer.call(totsCMmVs, valueNqDP6D, {from: accounts[2]});
		const nullGEIPTEO = await contracteOBVkrR.transfer.call(toe6E9fS, valueUaPdRS, {from: accounts[1]});

		await expect(contracteOBVkrR.transfer.call(totsCMmVs, valueNqDP6D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractcVM12C = await ERC20.new({from: accounts[3]});
		const valueMgOL0PO = BigInt("490")
		const tonqvffKQ = accounts[3]
		const fromsQnodrR = accounts[3]
		const valuezVWiNQ = BigInt("1344")
		const spenderynMiyB4 = accounts[5]
		const valueN7mBVj0 = BigInt("1608")
		const toFopsiIR = accounts[3]
		const fromqmFWGYd = "0x0000000000000000000000000000000000000001"
		const valueyyksW8h = BigInt("1300")
		const spenderPaTN9WZ = accounts[0]
		const spenderFTBgwwh = "0x0000000000000000000000000000000000000001"
		const ownerlLHjSZr = accounts[3]
		const addedValueEJCH1O0 = BigInt("2035")
		const spenderJ09YfBj = accounts[4]
		const nullkg62A7h = await contractcVM12C.transferFrom.call(fromsQnodrR, tonqvffKQ, valueMgOL0PO, {from: accounts[3]});
		const nullRSntg8X = await contractcVM12C.approve.call(spenderynMiyB4, valuezVWiNQ, {from: accounts[1]});
		const nulls723f3P = await contractcVM12C.transferFrom.call(fromqmFWGYd, toFopsiIR, valueN7mBVj0, {from: accounts[0]});
		const nulltVhWwLT = await contractcVM12C.approve.call(spenderPaTN9WZ, valueyyksW8h, {from: accounts[5]});
		const nullXdAwwYg = await contractcVM12C.allowance.call(ownerlLHjSZr, spenderFTBgwwh, {from: accounts[2]});
		const nullcWeaKFc = await contractcVM12C.increaseAllowance.call(spenderJ09YfBj, addedValueEJCH1O0, {from: accounts[3]});

		await expect(contractcVM12C.transferFrom.call(fromsQnodrR, tonqvffKQ, valueMgOL0PO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractAnocJim = await ERC20.new({from: accounts[5]});
		const valueVp81Yzf = BigInt("556")
		const spenderwAe9Obm = accounts[4]
		const addedValuedfdp6Mr = BigInt("1602")
		const spenderBqlQc0L = accounts[1]
		const nulld5qZ2j = await contractAnocJim.approve.call(spenderwAe9Obm, valueVp81Yzf, {from: accounts[3]});
		const nullpH3VVS3 = await contractAnocJim.totalSupply.call({from: accounts[1]});
		const nulljZ7XWC = await contractAnocJim.increaseAllowance.call(spenderBqlQc0L, addedValuedfdp6Mr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulld5qZ2j, true)
		assert.equal(nulljZ7XWC, true)
		assert.equal(nullpH3VVS3, 0)
	});

	it('test for ERC20', async () => {
		const contractINElkxq = await ERC20.new({from: accounts[4]});
		const ownerAcIX5mA = accounts[1]
		const valueHJkGYYq = BigInt("598")
		const tollbz1jB = "0x0000000000000000000000000000000000000001"
		const subtractedValueeUD0CcS = BigInt("1448")
		const spenderPRVUk5G = accounts[3]
		const valuexUyWK4P = BigInt("1734")
		const spendernB8TQ0s = accounts[3]
		const ownerkojqHy = accounts[5]
		const nullvrh8R7c = await contractINElkxq.balanceOf.call(ownerAcIX5mA, {from: accounts[2]});
		const nullaEc5bSg = await contractINElkxq.transfer.call(tollbz1jB, valueHJkGYYq, {from: accounts[0]});
		const nullQRAUPY2 = await contractINElkxq.decreaseAllowance.call(spenderPRVUk5G, subtractedValueeUD0CcS, {from: "0x0000000000000000000000000000000000000001"});
		const nullsiJlsBH = await contractINElkxq.approve.call(spendernB8TQ0s, valuexUyWK4P, {from: "0x0000000000000000000000000000000000000001"});
		const nullhIC2BQE = await contractINElkxq.balanceOf.call(ownerkojqHy, {from: accounts[2]});

		assert.equal(nullvrh8R7c, 0)
		await expect(contractINElkxq.transfer.call(tollbz1jB, valueHJkGYYq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractXUZPb2t = await ERC20.new({from: accounts[4]});
		const addedValueDAEvy8 = BigInt("1636")
		const spenderyZlPsNa = accounts[3]
		const addedValuepPzL9s5 = BigInt("471")
		const spenderZhwApTh = accounts[0]
		const valueQHbJoJL = BigInt("637")
		const spenderG0zhM6 = accounts[0]
		const spendercnQ7OX9 = accounts[1]
		const ownerb0D3zcJ = accounts[1]
		const nullC0BzDyD = await contractXUZPb2t.increaseAllowance.call(spenderyZlPsNa, addedValueDAEvy8, {from: accounts[3]});
		const nullXev3qaB = await contractXUZPb2t.increaseAllowance.call(spenderZhwApTh, addedValuepPzL9s5, {from: "0x0000000000000000000000000000000000000001"});
		const nullo8xJEuV = await contractXUZPb2t.approve.call(spenderG0zhM6, valueQHbJoJL, {from: accounts[3]});
		const nullOMg0q8C = await contractXUZPb2t.totalSupply.call({from: accounts[4]});
		const nullTAxzrQ = await contractXUZPb2t.allowance.call(ownerb0D3zcJ, spendercnQ7OX9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullC0BzDyD, true)
		assert.equal(nullOMg0q8C, 0)
		assert.equal(nullTAxzrQ, 0)
		assert.equal(nullXev3qaB, true)
		assert.equal(nullo8xJEuV, true)
	});

	it('test for ERC20', async () => {
		const contractHBw0gxR = await ERC20.new({from: accounts[3]});
		const spenderEO4IMul = accounts[5]
		const ownerO5WFuTv = accounts[1]
		const spenderjNP9Cx = accounts[0]
		const ownerTmkiIN1 = accounts[4]
		const addedValueBs4aNml = BigInt("1027")
		const spenderPwAK1w = accounts[3]
		const valueehslYJV = BigInt("1230")
		const spenderZAX85YJ = accounts[2]
		const subtractedValuew3J3HtA = BigInt("709")
		const spenderEPrBHpb = accounts[0]
		const nullEqfho16 = await contractHBw0gxR.allowance.call(ownerO5WFuTv, spenderEO4IMul, {from: accounts[0]});
		const nullOcfxvt2 = await contractHBw0gxR.allowance.call(ownerTmkiIN1, spenderjNP9Cx, {from: accounts[1]});
		const nullIEJCiCW = await contractHBw0gxR.increaseAllowance.call(spenderPwAK1w, addedValueBs4aNml, {from: accounts[2]});
		const nulluwFpeO6 = await contractHBw0gxR.totalSupply.call({from: accounts[2]});
		const nullWx20X0Y = await contractHBw0gxR.approve.call(spenderZAX85YJ, valueehslYJV, {from: accounts[3]});
		const nullB9rScx7 = await contractHBw0gxR.decreaseAllowance.call(spenderEPrBHpb, subtractedValuew3J3HtA, {from: accounts[4]});

		assert.equal(nullEqfho16, 0)
		assert.equal(nullIEJCiCW, true)
		assert.equal(nullOcfxvt2, 0)
		assert.equal(nullWx20X0Y, true)
		assert.equal(nulluwFpeO6, 0)
		await expect(contractHBw0gxR.decreaseAllowance.call(spenderEPrBHpb, subtractedValuew3J3HtA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractExXcJA = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueBGyI6U6 = BigInt("958")
		const spenderRRSM0hP = accounts[4]
		const valueXvs2bWh = BigInt("1021")
		const toq0lgJbF = "0x0000000000000000000000000000000000000001"
		const fromnUmHaSf = accounts[3]
		const valueNoa7Tlj = BigInt("235")
		const spenderGDjwU1 = accounts[4]
		const nully4yj5Ph = await contractExXcJA.approve.call(spenderRRSM0hP, valueBGyI6U6, {from: "0x0000000000000000000000000000000000000001"});
		const nullxlmWzeG = await contractExXcJA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullKHQRUa9 = await contractExXcJA.transferFrom.call(fromnUmHaSf, toq0lgJbF, valueXvs2bWh, {from: accounts[4]});
		const nullrs8AIcx = await contractExXcJA.approve.call(spenderGDjwU1, valueNoa7Tlj, {from: accounts[2]});
	});
})