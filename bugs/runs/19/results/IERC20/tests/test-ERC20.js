const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractbNDi1IF = await ERC20.new({from: accounts[3]});
		const valueRpc9mGP = BigInt("1414")
		const toGzEuKZS = accounts[2]
		const froml6GWcg = accounts[0]
		const ownerwYiEsSY = accounts[5]
		const valueEB3fqiB = BigInt("255")
		const tou6RouG9 = accounts[4]
		const fromTloq0wn = accounts[0]
		const addedValueZUS3aV7 = BigInt("1319")
		const spenderYYdlh3C = accounts[4]
		const nulls1PC5Cl = await contractbNDi1IF.transferFrom.call(froml6GWcg, toGzEuKZS, valueRpc9mGP, {from: accounts[0]});
		const nulltVw0gJM = await contractbNDi1IF.balanceOf.call(ownerwYiEsSY, {from: accounts[2]});
		const nullnNfZDb = await contractbNDi1IF.transferFrom.call(fromTloq0wn, tou6RouG9, valueEB3fqiB, {from: accounts[3]});
		const nullgQxSPhT = await contractbNDi1IF.increaseAllowance.call(spenderYYdlh3C, addedValueZUS3aV7, {from: accounts[4]});

		await expect(contractbNDi1IF.transferFrom.call(froml6GWcg, toGzEuKZS, valueRpc9mGP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgu0hr0J = await ERC20.new({from: accounts[4]});
		const ownerbR7zvZE = accounts[5]
		const subtractedValueagl8N8Y = BigInt("600")
		const spenderIEcvYmh = accounts[1]
		const ownerWrWPJ2Z = accounts[3]
		const valueTJzo1Nx = BigInt("845")
		const toU1LPOl = accounts[3]
		const nullv8v5Ua9 = await contractgu0hr0J.balanceOf.call(ownerbR7zvZE, {from: "0x0000000000000000000000000000000000000001"});
		const nullc2YdpDw = await contractgu0hr0J.decreaseAllowance.call(spenderIEcvYmh, subtractedValueagl8N8Y, {from: accounts[3]});
		const nullSljl2x8 = await contractgu0hr0J.balanceOf.call(ownerWrWPJ2Z, {from: accounts[0]});
		const nullGiHWNr3 = await contractgu0hr0J.transfer.call(toU1LPOl, valueTJzo1Nx, {from: accounts[0]});

		assert.equal(nullv8v5Ua9, 0)
		await expect(contractgu0hr0J.decreaseAllowance.call(spenderIEcvYmh, subtractedValueagl8N8Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracterr2vg5 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderlQFBIT6 = accounts[1]
		const ownerYDMp0G9 = accounts[3]
		const valueFkYKed = BigInt("468")
		const spenderMN7rum2 = accounts[0]
		const valuen7QqxLA = BigInt("2033")
		const toZ6bCfiN = accounts[0]
		const valueRDPwsy = BigInt("1275")
		const spenderZQkfiP5 = accounts[0]
		const valueF8cd7rQ = BigInt("804")
		const spenderxWrZhj9 = accounts[3]
		const valueZn2BLZj = BigInt("1542")
		const tomMczhU = accounts[4]
		const fromZfZeq9k = accounts[1]
		const nullofYACA3 = await contracterr2vg5.allowance.call(ownerYDMp0G9, spenderlQFBIT6, {from: accounts[4]});
		const nullLrQdlgE = await contracterr2vg5.approve.call(spenderMN7rum2, valueFkYKed, {from: accounts[0]});
		const nullSJPkouC = await contracterr2vg5.transfer.call(toZ6bCfiN, valuen7QqxLA, {from: accounts[5]});
		const nullwHd9SsK = await contracterr2vg5.approve.call(spenderZQkfiP5, valueRDPwsy, {from: "0x0000000000000000000000000000000000000001"});
		const null2XRNNW = await contracterr2vg5.approve.call(spenderxWrZhj9, valueF8cd7rQ, {from: accounts[5]});
		const nullTaTsEzk = await contracterr2vg5.transferFrom.call(fromZfZeq9k, tomMczhU, valueZn2BLZj, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractbqP1p0Y = await ERC20.new({from: accounts[1]});
		const addedValuevqaqKdf = BigInt("937")
		const spenderXw47Q7E = accounts[5]
		const valueJwuIsdP = BigInt("302")
		const tomkwR44u = "0x0000000000000000000000000000000000000001"
		const addedValueOKe5Oob = BigInt("416")
		const spenderOdjpzF5 = accounts[5]
		const spenderyxxER5Q = accounts[0]
		const ownerf5N6rc = accounts[4]
		const valueWArxP5F = BigInt("629")
		const spenderLgMA5xQ = accounts[4]
		const nullZKs5GFz = await contractbqP1p0Y.increaseAllowance.call(spenderXw47Q7E, addedValuevqaqKdf, {from: accounts[2]});
		const nullCKuRZsS = await contractbqP1p0Y.transfer.call(tomkwR44u, valueJwuIsdP, {from: accounts[0]});
		const nullX6Xi4x1 = await contractbqP1p0Y.increaseAllowance.call(spenderOdjpzF5, addedValueOKe5Oob, {from: accounts[1]});
		const nullU0I3Ukw = await contractbqP1p0Y.allowance.call(ownerf5N6rc, spenderyxxER5Q, {from: accounts[1]});
		const nullbPR1mNg = await contractbqP1p0Y.approve.call(spenderLgMA5xQ, valueWArxP5F, {from: accounts[0]});

		assert.equal(nullZKs5GFz, true)
		await expect(contractbqP1p0Y.transfer.call(tomkwR44u, valueJwuIsdP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractX32R7nK = await ERC20.new({from: accounts[0]});
		const valueAVTrxQs = BigInt("1327")
		const spenderjlteC9o = accounts[0]
		const value06Y5V8 = BigInt("93")
		const tos9RwUg5 = accounts[2]
		const fromyqJGdwf = "0x0000000000000000000000000000000000000001"
		const spenderN6tXxNY = accounts[5]
		const ownerSYOYDDU = accounts[2]
		const value7D1RGH = BigInt("646")
		const spenderf5krzok = accounts[4]
		const valueIjpI2rk = BigInt("640")
		const tou7KBign = accounts[2]
		const nullPGD4NUi = await contractX32R7nK.approve.call(spenderjlteC9o, valueAVTrxQs, {from: accounts[3]});
		const nullG4ykL3u = await contractX32R7nK.transferFrom.call(fromyqJGdwf, tos9RwUg5, value06Y5V8, {from: accounts[4]});
		const nulll6KE64M = await contractX32R7nK.allowance.call(ownerSYOYDDU, spenderN6tXxNY, {from: accounts[5]});
		const nulljRrO2L6 = await contractX32R7nK.approve.call(spenderf5krzok, value7D1RGH, {from: accounts[4]});
		const nullAOA7ucS = await contractX32R7nK.transfer.call(tou7KBign, valueIjpI2rk, {from: accounts[5]});

		assert.equal(nullPGD4NUi, true)
		await expect(contractX32R7nK.transferFrom.call(fromyqJGdwf, tos9RwUg5, value06Y5V8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractXXQSHiK = await ERC20.new({from: accounts[3]});
		const spenderdc3ZYag = accounts[3]
		const ownerXPFEYGX = "0x0000000000000000000000000000000000000001"
		const valueGW0qWnh = BigInt("596")
		const toe4KQsj6 = accounts[5]
		const fromIGiQt2s = accounts[2]
		const valueeYxEUzl = BigInt("67")
		const topVULmas = accounts[1]
		const addedValuePBHvDl2 = BigInt("1499")
		const spenderTEulZNm = accounts[0]
		const nullzIqhtoa = await contractXXQSHiK.allowance.call(ownerXPFEYGX, spenderdc3ZYag, {from: accounts[0]});
		const nullMVEbYuQ = await contractXXQSHiK.transferFrom.call(fromIGiQt2s, toe4KQsj6, valueGW0qWnh, {from: accounts[1]});
		const nullCJibvF = await contractXXQSHiK.transfer.call(topVULmas, valueeYxEUzl, {from: accounts[0]});
		const nulljuxDgSL = await contractXXQSHiK.increaseAllowance.call(spenderTEulZNm, addedValuePBHvDl2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullzIqhtoa, 0)
		await expect(contractXXQSHiK.transferFrom.call(fromIGiQt2s, toe4KQsj6, valueGW0qWnh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contract2XGC0n = await ERC20.new({from: accounts[3]});
		const valueXYiL7Dg = BigInt("897")
		const spendercF6tLR6 = accounts[2]
		const valuegiehST3 = BigInt("596")
		const toLD1E2n = accounts[6]
		const fromCQ8qKpe = accounts[2]
		const subtractedValuevlyiYeF = BigInt("1683")
		const spenderIAwwfxn = accounts[3]
		const nullWmGDIly = await contract2XGC0n.approve.call(spendercF6tLR6, valueXYiL7Dg, {from: accounts[2]});
		const nullKZ2lZPY = await contract2XGC0n.totalSupply.call({from: accounts[1]});
		const nullrXDosdx = await contract2XGC0n.transferFrom.call(fromCQ8qKpe, toLD1E2n, valuegiehST3, {from: accounts[1]});
		const nullqIUwbnA = await contract2XGC0n.decreaseAllowance.call(spenderIAwwfxn, subtractedValuevlyiYeF, {from: accounts[0]});

		assert.equal(nullKZ2lZPY, 0)
		assert.equal(nullWmGDIly, true)
		await expect(contract2XGC0n.transferFrom.call(fromCQ8qKpe, toLD1E2n, valuegiehST3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})