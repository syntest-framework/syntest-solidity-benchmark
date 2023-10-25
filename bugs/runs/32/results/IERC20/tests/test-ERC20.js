const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractndjo61Z = await ERC20.new({from: accounts[3]});
		const addedValuebfEU94R = BigInt("682")
		const spenderphDYlSc = accounts[2]
		const spender4U2kuW = "0x0000000000000000000000000000000000000001"
		const ownerAZbirxC = accounts[3]
		const addedValuere3r4pO = BigInt("1601")
		const spenderF0FxgD1 = accounts[1]
		const nullaGcsUUf = await contractndjo61Z.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullGdMqfyu = await contractndjo61Z.increaseAllowance.call(spenderphDYlSc, addedValuebfEU94R, {from: accounts[2]});
		const nullDc7sM0 = await contractndjo61Z.allowance.call(ownerAZbirxC, spender4U2kuW, {from: accounts[2]});
		const nullcn9NlAm = await contractndjo61Z.increaseAllowance.call(spenderF0FxgD1, addedValuere3r4pO, {from: accounts[0]});

		assert.equal(nullDc7sM0, 0)
		assert.equal(nullGdMqfyu, true)
		assert.equal(nullaGcsUUf, 0)
		assert.equal(nullcn9NlAm, true)
	});

	it('test for ERC20', async () => {
		const contractahuz1DJ = await ERC20.new({from: accounts[1]});
		const valuenjYD6kG = BigInt("873")
		const toxmRaEZo = accounts[3]
		const valueRaubp5b = BigInt("1136")
		const togAnRtv6 = accounts[4]
		const valueKN1lcPk = BigInt("1005")
		const toKvJqaZJ = accounts[3]
		const fromTEX1QlE = accounts[2]
		const spenderwbFFjUI = accounts[4]
		const ownerBgvaqQJ = accounts[5]
		const addedValue9YBw2A = BigInt("1963")
		const spenderciCVpTo = accounts[0]
		const addedValueVzRnxk1 = BigInt("692")
		const spendergLb3D4T = "0x0000000000000000000000000000000000000001"
		const nullZqVzu5v = await contractahuz1DJ.transfer.call(toxmRaEZo, valuenjYD6kG, {from: accounts[2]});
		const nulloRNQmX0 = await contractahuz1DJ.transfer.call(togAnRtv6, valueRaubp5b, {from: accounts[1]});
		const nulliO39dBd = await contractahuz1DJ.transferFrom.call(fromTEX1QlE, toKvJqaZJ, valueKN1lcPk, {from: accounts[3]});
		const nullIYyspYx = await contractahuz1DJ.allowance.call(ownerBgvaqQJ, spenderwbFFjUI, {from: accounts[3]});
		const nullybonTB = await contractahuz1DJ.increaseAllowance.call(spenderciCVpTo, addedValue9YBw2A, {from: accounts[5]});
		const nullayhuqRd = await contractahuz1DJ.increaseAllowance.call(spendergLb3D4T, addedValueVzRnxk1, {from: accounts[5]});

		await expect(contractahuz1DJ.transfer.call(toxmRaEZo, valuenjYD6kG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractd9nmSV = await ERC20.new({from: accounts[2]});
		const addedValueouSMRR = BigInt("1725")
		const spenderqhmIACT = accounts[1]
		const spendergwrzS3 = accounts[4]
		const ownerD0nyTQ1 = accounts[4]
		const valueCwYWbs = BigInt("1307")
		const spendern53bqdS = accounts[5]
		const ownervL3Pqra = accounts[1]
		const nullyiYCrHG = await contractd9nmSV.increaseAllowance.call(spenderqhmIACT, addedValueouSMRR, {from: accounts[1]});
		const nullfT3M5Li = await contractd9nmSV.allowance.call(ownerD0nyTQ1, spendergwrzS3, {from: "0x0000000000000000000000000000000000000001"});
		const nullblLHoxB = await contractd9nmSV.approve.call(spendern53bqdS, valueCwYWbs, {from: accounts[0]});
		const nullFM8JXdN = await contractd9nmSV.balanceOf.call(ownervL3Pqra, {from: accounts[2]});

		assert.equal(nullFM8JXdN, 0)
		assert.equal(nullblLHoxB, true)
		assert.equal(nullfT3M5Li, 0)
		assert.equal(nullyiYCrHG, true)
	});

	it('test for ERC20', async () => {
		const contractUFGjKG = await ERC20.new({from: accounts[1]});
		const valueovqhSQ0 = BigInt("947")
		const tornEm7f7 = accounts[1]
		const fromuqq8XPL = accounts[1]
		const subtractedValueP4G2ioS = BigInt("337")
		const spendermcUDrlh = accounts[4]
		const valueTMXMReq = BigInt("2046")
		const toaMG58oe = accounts[4]
		const fromWLx1xh9 = "0x0000000000000000000000000000000000000001"
		const nullkeHKMAk = await contractUFGjKG.transferFrom.call(fromuqq8XPL, tornEm7f7, valueovqhSQ0, {from: accounts[3]});
		const nullj7NVJm5 = await contractUFGjKG.decreaseAllowance.call(spendermcUDrlh, subtractedValueP4G2ioS, {from: accounts[0]});
		const nullQ9NPx0E = await contractUFGjKG.transferFrom.call(fromWLx1xh9, toaMG58oe, valueTMXMReq, {from: accounts[1]});

		await expect(contractUFGjKG.transferFrom.call(fromuqq8XPL, tornEm7f7, valueovqhSQ0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractw6NSx7Z = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueE17XbyA = BigInt("179")
		const spenderWsbtDlT = accounts[4]
		const ownerKBvWrMD = accounts[4]
		const valuereuOMOh = BigInt("799")
		const torpaM6n4 = accounts[4]
		const nullz5SW78 = await contractw6NSx7Z.approve.call(spenderWsbtDlT, valueE17XbyA, {from: accounts[2]});
		const nullw2iIAxV = await contractw6NSx7Z.balanceOf.call(ownerKBvWrMD, {from: accounts[0]});
		const nullwx3YKPL = await contractw6NSx7Z.transfer.call(torpaM6n4, valuereuOMOh, {from: accounts[5]});
		const nullPY4B8mz = await contractw6NSx7Z.totalSupply.call({from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractrs5yrX = await ERC20.new({from: accounts[0]});
		const addedValuezgGZhJB = BigInt("1631")
		const spendervNei9eC = accounts[2]
		const subtractedValueGakPTCd = BigInt("1198")
		const spenderctSg0dO = accounts[3]
		const valuedyZ9Aah = BigInt("1986")
		const spenderU1ouMA3 = accounts[0]
		const nullIzZJajz = await contractrs5yrX.increaseAllowance.call(spendervNei9eC, addedValuezgGZhJB, {from: accounts[2]});
		const nullLlfMVA = await contractrs5yrX.decreaseAllowance.call(spenderctSg0dO, subtractedValueGakPTCd, {from: accounts[5]});
		const nullMBAPHFz = await contractrs5yrX.approve.call(spenderU1ouMA3, valuedyZ9Aah, {from: accounts[4]});

		assert.equal(nullIzZJajz, true)
		await expect(contractrs5yrX.decreaseAllowance.call(spenderctSg0dO, subtractedValueGakPTCd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})