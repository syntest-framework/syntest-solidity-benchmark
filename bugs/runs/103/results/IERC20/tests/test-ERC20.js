const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractlIXb7Ho = await ERC20.new({from: accounts[0]});
		const valuelwU1EjQ = BigInt("1961")
		const tov5Pvuss = accounts[0]
		const valuefoQEfIX = BigInt("538")
		const spenderrjlFrNE = accounts[2]
		const valueBu8Korh = BigInt("1554")
		const to1V3fHn = accounts[3]
		const addedValueD0H8vT = BigInt("1754")
		const spenderMG9GkR1 = accounts[1]
		const owner9qCkDM = accounts[4]
		const nullRXqHQXP = await contractlIXb7Ho.transfer.call(tov5Pvuss, valuelwU1EjQ, {from: accounts[3]});
		const nullXXU0ZPR = await contractlIXb7Ho.approve.call(spenderrjlFrNE, valuefoQEfIX, {from: accounts[3]});
		const nullGjvkBuS = await contractlIXb7Ho.transfer.call(to1V3fHn, valueBu8Korh, {from: accounts[1]});
		const nullkLXXXY = await contractlIXb7Ho.increaseAllowance.call(spenderMG9GkR1, addedValueD0H8vT, {from: "0x0000000000000000000000000000000000000001"});
		const nullNeWrVgL = await contractlIXb7Ho.balanceOf.call(owner9qCkDM, {from: accounts[2]});

		await expect(contractlIXb7Ho.transfer.call(tov5Pvuss, valuelwU1EjQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractTWcjjek = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueinE374m = BigInt("109")
		const toLInBxvE = accounts[5]
		const subtractedValueeZzVoVU = BigInt("742")
		const spenderzciexF = accounts[1]
		const addedValueUaaO28v = BigInt("1975")
		const spenderyOrQNVL = accounts[2]
		const valueveywtlU = BigInt("1652")
		const tojx8ZRqG = accounts[2]
		const valueAUk0reh = BigInt("1367")
		const toiuqMDKR = accounts[0]
		const nulleTbK24 = await contractTWcjjek.transfer.call(toLInBxvE, valueinE374m, {from: accounts[0]});
		const nullFDiGJhe = await contractTWcjjek.decreaseAllowance.call(spenderzciexF, subtractedValueeZzVoVU, {from: accounts[2]});
		const nullfm2jYBb = await contractTWcjjek.increaseAllowance.call(spenderyOrQNVL, addedValueUaaO28v, {from: "0x0000000000000000000000000000000000000001"});
		const nullcEmgZH = await contractTWcjjek.transfer.call(tojx8ZRqG, valueveywtlU, {from: accounts[1]});
		const nullpJxb5B = await contractTWcjjek.totalSupply.call({from: accounts[4]});
		const nullcgxkSvN = await contractTWcjjek.transfer.call(toiuqMDKR, valueAUk0reh, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractRiX94vn = await ERC20.new({from: accounts[1]});
		const spendercNKKTV6 = accounts[2]
		const ownerk8rH89w = "0x0000000000000000000000000000000000000001"
		const valuesNmQcYg = BigInt("2024")
		const to6itAtA = accounts[3]
		const fromnnhO0U = accounts[2]
		const valuew9cWgNt = BigInt("1572")
		const spenderZF4zvDF = accounts[2]
		const spendergrsUlNE = "0x0000000000000000000000000000000000000001"
		const ownerBE5C6U = accounts[1]
		const addedValuemH8QBU = BigInt("29")
		const spenderAudccg = "0x0000000000000000000000000000000000000001"
		const valueexJpisT = BigInt("1303")
		const spenderCGCmC9 = accounts[0]
		const nullKjDOO1m = await contractRiX94vn.allowance.call(ownerk8rH89w, spendercNKKTV6, {from: accounts[3]});
		const nullvryl6hN = await contractRiX94vn.transferFrom.call(fromnnhO0U, to6itAtA, valuesNmQcYg, {from: accounts[1]});
		const nullZwKp1sJ = await contractRiX94vn.approve.call(spenderZF4zvDF, valuew9cWgNt, {from: accounts[4]});
		const nullpwMbVO9 = await contractRiX94vn.allowance.call(ownerBE5C6U, spendergrsUlNE, {from: accounts[3]});
		const nullAKZlbVg = await contractRiX94vn.increaseAllowance.call(spenderAudccg, addedValuemH8QBU, {from: "0x0000000000000000000000000000000000000001"});
		const null1MSUVY = await contractRiX94vn.approve.call(spenderCGCmC9, valueexJpisT, {from: accounts[5]});

		assert.equal(nullKjDOO1m, 0)
		await expect(contractRiX94vn.transferFrom.call(fromnnhO0U, to6itAtA, valuesNmQcYg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractqVASOt = await ERC20.new({from: accounts[3]});
		const ownerS3qb1VQ = accounts[5]
		const valuegeF3fG3 = BigInt("234")
		const toNUCLMQF = accounts[1]
		const fromdiHHsTB = accounts[2]
		const spenderSc7DlKB = "0x0000000000000000000000000000000000000001"
		const ownerkkFaHs1 = "0x0000000000000000000000000000000000000001"
		const spenderCXLIpNm = accounts[1]
		const ownercD8b1v = accounts[5]
		const valuetV6iWkm = BigInt("1689")
		const toeIK2plQ = accounts[0]
		const valueGwwIUlp = BigInt("572")
		const toD5Dm9QA = accounts[1]
		const nullVkZ4AsI = await contractqVASOt.balanceOf.call(ownerS3qb1VQ, {from: accounts[3]});
		const nullAbyaV89 = await contractqVASOt.transferFrom.call(fromdiHHsTB, toNUCLMQF, valuegeF3fG3, {from: accounts[4]});
		const nullnaCA6pV = await contractqVASOt.allowance.call(ownerkkFaHs1, spenderSc7DlKB, {from: accounts[0]});
		const nulluiUnSSw = await contractqVASOt.allowance.call(ownercD8b1v, spenderCXLIpNm, {from: accounts[2]});
		const nullV3eYZDc = await contractqVASOt.transfer.call(toeIK2plQ, valuetV6iWkm, {from: accounts[5]});
		const nullK1H3Tiu = await contractqVASOt.transfer.call(toD5Dm9QA, valueGwwIUlp, {from: accounts[0]});

		assert.equal(nullVkZ4AsI, 0)
		await expect(contractqVASOt.transferFrom.call(fromdiHHsTB, toNUCLMQF, valuegeF3fG3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractRqIUhb = await ERC20.new({from: accounts[3]});
		const spenderRn2A9B = "0x0000000000000000000000000000000000000001"
		const ownerkqUF8K = accounts[4]
		const valuepn7cX7M = BigInt("1129")
		const spenderfElnAd = accounts[0]
		const valueHOBtjow = BigInt("585")
		const tomPvA6OT = accounts[1]
		const nullbdUT4Rg = await contractRqIUhb.allowance.call(ownerkqUF8K, spenderRn2A9B, {from: accounts[3]});
		const nullmsVaiad = await contractRqIUhb.approve.call(spenderfElnAd, valuepn7cX7M, {from: accounts[0]});
		const nullXyWsBLU = await contractRqIUhb.transfer.call(tomPvA6OT, valueHOBtjow, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullbdUT4Rg, 0)
		assert.equal(nullmsVaiad, true)
		await expect(contractRqIUhb.transfer.call(tomPvA6OT, valueHOBtjow, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdA9Cwd = await ERC20.new({from: accounts[2]});
		const valuebIZMw2m = BigInt("1013")
		const spenderYN9yMpb = accounts[1]
		const subtractedValuel55ZhYK = BigInt("1156")
		const spenderO4fw76 = accounts[3]
		const valueYWNHPLb = BigInt("1571")
		const tokqiUd7y = accounts[1]
		const from2PWzA9 = accounts[5]
		const nulldJtPiQL = await contractdA9Cwd.approve.call(spenderYN9yMpb, valuebIZMw2m, {from: accounts[4]});
		const nullLaHMam3 = await contractdA9Cwd.decreaseAllowance.call(spenderO4fw76, subtractedValuel55ZhYK, {from: "0x0000000000000000000000000000000000000001"});
		const nullNzJ9F9R = await contractdA9Cwd.transferFrom.call(from2PWzA9, tokqiUd7y, valueYWNHPLb, {from: accounts[0]});

		assert.equal(nulldJtPiQL, true)
		await expect(contractdA9Cwd.decreaseAllowance.call(spenderO4fw76, subtractedValuel55ZhYK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractLQDOde = await ERC20.new({from: accounts[2]});
		const addedValueCA62TXd = BigInt("1385")
		const spendergrC2XRj = accounts[3]
		const valueDgH2kf = BigInt("1485")
		const tomuw9qcq = accounts[1]
		const fromILLHExp = accounts[0]
		const valueVw5Ujie = BigInt("718")
		const spenderIwKpvzD = accounts[3]
		const ownerUXkclRl = accounts[1]
		const valuebo606ib = BigInt("1535")
		const tosV0nV3N = accounts[4]
		const fromInvSlmO = accounts[0]
		const valuey6z1pGC = BigInt("132")
		const toqpq4cM = accounts[0]
		const fromUzXkL1v = accounts[1]
		const nullyX6EDbN = await contractLQDOde.increaseAllowance.call(spendergrC2XRj, addedValueCA62TXd, {from: accounts[0]});
		const nullrcfgsLH = await contractLQDOde.transferFrom.call(fromILLHExp, tomuw9qcq, valueDgH2kf, {from: accounts[3]});
		const nullmk2xPIO = await contractLQDOde.approve.call(spenderIwKpvzD, valueVw5Ujie, {from: accounts[2]});
		const nullOAwKSek = await contractLQDOde.balanceOf.call(ownerUXkclRl, {from: accounts[5]});
		const nullzKsibrA = await contractLQDOde.transferFrom.call(fromInvSlmO, tosV0nV3N, valuebo606ib, {from: "0x0000000000000000000000000000000000000001"});
		const nullxlZw5KW = await contractLQDOde.transferFrom.call(fromUzXkL1v, toqpq4cM, valuey6z1pGC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullyX6EDbN, true)
		await expect(contractLQDOde.transferFrom.call(fromILLHExp, tomuw9qcq, valueDgH2kf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractwvjG47 = await ERC20.new({from: accounts[3]});
		const spenderViSuv8m = "0x0000000000000000000000000000000000000001"
		const ownerqXfQiDq = accounts[4]
		const valueNL7rMYt = BigInt("1129")
		const spenderRcIQoch = accounts[0]
		const valueT9tabeg = BigInt("585")
		const toK3BwFih = accounts[1]
		const nullTsYmfTQ = await contractwvjG47.allowance.call(ownerqXfQiDq, spenderViSuv8m, {from: accounts[3]});
		const nullDyLzBY1 = await contractwvjG47.totalSupply.call({from: accounts[1]});
		const nullFIQcZ1B = await contractwvjG47.approve.call(spenderRcIQoch, valueNL7rMYt, {from: accounts[0]});
		const nulldt4SwqV = await contractwvjG47.transfer.call(toK3BwFih, valueT9tabeg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullDyLzBY1, 0)
		assert.equal(nullFIQcZ1B, true)
		assert.equal(nullTsYmfTQ, 0)
		await expect(contractwvjG47.transfer.call(toK3BwFih, valueT9tabeg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})