const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractaBCtnEd = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerHDQ119R = accounts[5]
		const valueGTKo7WA = BigInt("37")
		const spenderfPukyXg = accounts[0]
		const nullw5YWV89 = await contractaBCtnEd.balanceOf.call(ownerHDQ119R, {from: accounts[1]});
		const nullpVS4K0X = await contractaBCtnEd.approve.call(spenderfPukyXg, valueGTKo7WA, {from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractTGjpaxA = await ERC20.new({from: accounts[1]});
		const subtractedValuelMPaEpV = BigInt("43")
		const spenderLu92Br9 = accounts[1]
		const addedValuegwnr2mT = BigInt("45")
		const spenderKlwvDFK = accounts[2]
		const valueL4tJzME = BigInt("506")
		const spenderRRIXEQd = accounts[0]
		const valuesMS7LX8 = BigInt("843")
		const tonO2jqa = accounts[0]
		const valuezmK4Vur = BigInt("1370")
		const toithpuyt = accounts[4]
		const nullWHKMYix = await contractTGjpaxA.decreaseAllowance.call(spenderLu92Br9, subtractedValuelMPaEpV, {from: accounts[3]});
		const nullXIvePcC = await contractTGjpaxA.increaseAllowance.call(spenderKlwvDFK, addedValuegwnr2mT, {from: accounts[0]});
		const nullynJLDNQ = await contractTGjpaxA.approve.call(spenderRRIXEQd, valueL4tJzME, {from: accounts[4]});
		const nullPmUWg0W = await contractTGjpaxA.transfer.call(tonO2jqa, valuesMS7LX8, {from: "0x0000000000000000000000000000000000000001"});
		const nullCcoeB7P = await contractTGjpaxA.transfer.call(toithpuyt, valuezmK4Vur, {from: accounts[4]});

		await expect(contractTGjpaxA.decreaseAllowance.call(spenderLu92Br9, subtractedValuelMPaEpV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractK4INBxX = await ERC20.new({from: accounts[4]});
		const owner1X3WFF = accounts[3]
		const spenderO1gYr8x = accounts[3]
		const ownerodqJRpP = accounts[0]
		const subtractedValueMX5jAlI = BigInt("1173")
		const spenderv1pNhBN = accounts[4]
		const nullZOEYnB4 = await contractK4INBxX.balanceOf.call(owner1X3WFF, {from: accounts[4]});
		const nullOlvxN8Q = await contractK4INBxX.allowance.call(ownerodqJRpP, spenderO1gYr8x, {from: accounts[1]});
		const nullknChcmI = await contractK4INBxX.decreaseAllowance.call(spenderv1pNhBN, subtractedValueMX5jAlI, {from: accounts[0]});

		assert.equal(nullOlvxN8Q, 0)
		assert.equal(nullZOEYnB4, 0)
		await expect(contractK4INBxX.decreaseAllowance.call(spenderv1pNhBN, subtractedValueMX5jAlI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractjzKnvYK = await ERC20.new({from: accounts[5]});
		const ownerzGFxzxm = accounts[4]
		const valueXwMhcg6 = BigInt("437")
		const toEb6Le5v = "0x0000000000000000000000000000000000000001"
		const nullQJ7gvta = await contractjzKnvYK.totalSupply.call({from: accounts[5]});
		const nullSqvzXjc = await contractjzKnvYK.balanceOf.call(ownerzGFxzxm, {from: accounts[0]});
		const nullupncF92 = await contractjzKnvYK.transfer.call(toEb6Le5v, valueXwMhcg6, {from: accounts[4]});

		assert.equal(nullQJ7gvta, 0)
		assert.equal(nullSqvzXjc, 0)
		await expect(contractjzKnvYK.transfer.call(toEb6Le5v, valueXwMhcg6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractTbcV7Qj = await ERC20.new({from: accounts[5]});
		const valueRtxVwTF = BigInt("1693")
		const tozDFrlR = "0x0000000000000000000000000000000000000001"
		const fromsuGDvlb = accounts[4]
		const addedValuerl37zg1 = BigInt("965")
		const spenderkvffL6g = accounts[5]
		const valueeZGowsd = BigInt("122")
		const spendercydHqPw = accounts[2]
		const nullixOpwT6 = await contractTbcV7Qj.transferFrom.call(fromsuGDvlb, tozDFrlR, valueRtxVwTF, {from: accounts[5]});
		const nullsc52r4k = await contractTbcV7Qj.increaseAllowance.call(spenderkvffL6g, addedValuerl37zg1, {from: accounts[4]});
		const nulljLaEUN = await contractTbcV7Qj.approve.call(spendercydHqPw, valueeZGowsd, {from: accounts[4]});

		await expect(contractTbcV7Qj.transferFrom.call(fromsuGDvlb, tozDFrlR, valueRtxVwTF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractpA0yUi = await ERC20.new({from: accounts[2]});
		const addedValuedDuZ54r = BigInt("829")
		const spenderhPs0XL1 = accounts[1]
		const valueTiSCwW0 = BigInt("741")
		const toXCMSw9Q = accounts[1]
		const fromYESGog8 = accounts[5]
		const value2LoNyI = BigInt("1617")
		const toBuy3e98 = accounts[0]
		const subtractedValue86Cet3 = BigInt("1742")
		const spenderqEBCm0D = accounts[5]
		const nullySdiCQJ = await contractpA0yUi.increaseAllowance.call(spenderhPs0XL1, addedValuedDuZ54r, {from: accounts[4]});
		const nullNpgxJwO = await contractpA0yUi.transferFrom.call(fromYESGog8, toXCMSw9Q, valueTiSCwW0, {from: accounts[1]});
		const nullWuAIqSz = await contractpA0yUi.transfer.call(toBuy3e98, value2LoNyI, {from: accounts[2]});
		const nullRaTglMM = await contractpA0yUi.decreaseAllowance.call(spenderqEBCm0D, subtractedValue86Cet3, {from: accounts[5]});

		assert.equal(nullySdiCQJ, true)
		await expect(contractpA0yUi.transferFrom.call(fromYESGog8, toXCMSw9Q, valueTiSCwW0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractthRlgP = await ERC20.new({from: accounts[1]});
		const valueeX7p1WU = BigInt("1591")
		const spenderGGL2aBg = accounts[0]
		const spenderluxJ5Ft = "0x0000000000000000000000000000000000000001"
		const ownerK9rSoxg = accounts[4]
		const ownerK15fU7 = accounts[2]
		const owneroFXZxwq = accounts[1]
		const valuemtarppg = BigInt("1423")
		const tocHS03hp = accounts[1]
		const fromnFvLFV = accounts[3]
		const valuennJgHs = BigInt("1633")
		const spenderPxqkUvD = accounts[1]
		const nullQPKcdhJ = await contractthRlgP.approve.call(spenderGGL2aBg, valueeX7p1WU, {from: accounts[3]});
		const nullR5ExH0S = await contractthRlgP.allowance.call(ownerK9rSoxg, spenderluxJ5Ft, {from: accounts[1]});
		const nullASbpx08 = await contractthRlgP.balanceOf.call(ownerK15fU7, {from: accounts[3]});
		const nullnTtHi0Z = await contractthRlgP.balanceOf.call(owneroFXZxwq, {from: accounts[2]});
		const nullfAQZDmx = await contractthRlgP.transferFrom.call(fromnFvLFV, tocHS03hp, valuemtarppg, {from: accounts[2]});
		const null4OiNPs = await contractthRlgP.approve.call(spenderPxqkUvD, valuennJgHs, {from: accounts[1]});

		assert.equal(nullASbpx08, 0)
		assert.equal(nullQPKcdhJ, true)
		assert.equal(nullR5ExH0S, 0)
		assert.equal(nullnTtHi0Z, 0)
		await expect(contractthRlgP.transferFrom.call(fromnFvLFV, tocHS03hp, valuemtarppg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})