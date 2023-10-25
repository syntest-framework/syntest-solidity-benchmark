const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractCCMapW = await ERC20.new({from: accounts[3]});
		const ownerfsIZmLX = accounts[4]
		const owneroCl00CF = accounts[1]
		const valueqAiEw38 = BigInt("1456")
		const toErzWIMT = accounts[2]
		const fromP45clMb = accounts[4]
		const valueY20nN3n = BigInt("177")
		const toOmO25hx = accounts[1]
		const valueEZU4Grm = BigInt("105")
		const toSxkZbKT = accounts[1]
		const fromrP6H2KV = accounts[1]
		const spender5brkfu = accounts[1]
		const ownercJXbfmU = accounts[1]
		const nulllZcDgpr = await contractCCMapW.balanceOf.call(ownerfsIZmLX, {from: accounts[1]});
		const nullJP4ynG2 = await contractCCMapW.balanceOf.call(owneroCl00CF, {from: accounts[5]});
		const nullwIwO3kU = await contractCCMapW.transferFrom.call(fromP45clMb, toErzWIMT, valueqAiEw38, {from: accounts[1]});
		const nullHsFx3tD = await contractCCMapW.transfer.call(toOmO25hx, valueY20nN3n, {from: accounts[4]});
		const nullfvDmVe6 = await contractCCMapW.transferFrom.call(fromrP6H2KV, toSxkZbKT, valueEZU4Grm, {from: accounts[1]});
		const nulldKkAYGB = await contractCCMapW.allowance.call(ownercJXbfmU, spender5brkfu, {from: accounts[3]});

		assert.equal(nullJP4ynG2, 0)
		assert.equal(nulllZcDgpr, 0)
		await expect(contractCCMapW.transferFrom.call(fromP45clMb, toErzWIMT, valueqAiEw38, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractBBbukrw = await ERC20.new({from: accounts[0]});
		const ownerHiP1kv = accounts[5]
		const addedValueAao92a = BigInt("1940")
		const spenderBGopxLL = accounts[3]
		const valueTh1ftnf = BigInt("1398")
		const spenderFu2GLPL = accounts[0]
		const nulldhlUh2Q = await contractBBbukrw.totalSupply.call({from: accounts[2]});
		const nullsJuto0X = await contractBBbukrw.balanceOf.call(ownerHiP1kv, {from: accounts[3]});
		const nullelnOua1 = await contractBBbukrw.totalSupply.call({from: accounts[1]});
		const nullQ6JdPvH = await contractBBbukrw.increaseAllowance.call(spenderBGopxLL, addedValueAao92a, {from: accounts[3]});
		const nullg0SwAhS = await contractBBbukrw.approve.call(spenderFu2GLPL, valueTh1ftnf, {from: accounts[2]});

		assert.equal(nullQ6JdPvH, true)
		assert.equal(nulldhlUh2Q, 0)
		assert.equal(nullelnOua1, 0)
		assert.equal(nullg0SwAhS, true)
		assert.equal(nullsJuto0X, 0)
	});

	it('test for ERC20', async () => {
		const contractJJNdDvI = await ERC20.new({from: accounts[1]});
		const spenderSWWMrSg = accounts[1]
		const ownergpOYmBW = "0x0000000000000000000000000000000000000001"
		const valueJuICAgz = BigInt("1820")
		const spenderRLD1kmP = accounts[0]
		const valueesGuBt = BigInt("389")
		const toyPC052O = accounts[5]
		const fromZxaAflY = accounts[3]
		const addedValuem6J2Haa = BigInt("702")
		const spenderar6tT2 = accounts[3]
		const valuejoGVT8V = BigInt("1031")
		const toYvUfA6I = accounts[1]
		const nullI3D2X6 = await contractJJNdDvI.allowance.call(ownergpOYmBW, spenderSWWMrSg, {from: accounts[5]});
		const nullJ28Suuk = await contractJJNdDvI.approve.call(spenderRLD1kmP, valueJuICAgz, {from: accounts[3]});
		const nullsOSG1ey = await contractJJNdDvI.transferFrom.call(fromZxaAflY, toyPC052O, valueesGuBt, {from: accounts[3]});
		const nullGOQXu5Y = await contractJJNdDvI.increaseAllowance.call(spenderar6tT2, addedValuem6J2Haa, {from: accounts[4]});
		const nullLWluLPB = await contractJJNdDvI.transfer.call(toYvUfA6I, valuejoGVT8V, {from: accounts[0]});

		assert.equal(nullI3D2X6, 0)
		assert.equal(nullJ28Suuk, true)
		await expect(contractJJNdDvI.transferFrom.call(fromZxaAflY, toyPC052O, valueesGuBt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractZz0Ju9j = await ERC20.new({from: accounts[1]});
		const valueTpe7TfY = BigInt("1133")
		const spenderMPxmxJA = accounts[3]
		const ownernTr3nrJ = accounts[0]
		const ownerUdgQ5lV = accounts[0]
		const spenderzNiU77W = accounts[4]
		const owneroWcfJvs = accounts[4]
		const addedValuesOI0mJx = BigInt("467")
		const spenderjoucTaF = "0x0000000000000000000000000000000000000001"
		const value91kjiE = BigInt("315")
		const toFjwIuQm = accounts[3]
		const nullxVa97h = await contractZz0Ju9j.approve.call(spenderMPxmxJA, valueTpe7TfY, {from: accounts[2]});
		const nullmC7jJe3 = await contractZz0Ju9j.balanceOf.call(ownernTr3nrJ, {from: accounts[0]});
		const nullIqhdIHQ = await contractZz0Ju9j.balanceOf.call(ownerUdgQ5lV, {from: accounts[0]});
		const nullEyFk58A = await contractZz0Ju9j.allowance.call(owneroWcfJvs, spenderzNiU77W, {from: accounts[4]});
		const nullci10hha = await contractZz0Ju9j.increaseAllowance.call(spenderjoucTaF, addedValuesOI0mJx, {from: accounts[0]});
		const nullB5gookn = await contractZz0Ju9j.transfer.call(toFjwIuQm, value91kjiE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullEyFk58A, 0)
		assert.equal(nullIqhdIHQ, 0)
		assert.equal(nullci10hha, true)
		assert.equal(nullmC7jJe3, 0)
		assert.equal(nullxVa97h, true)
		await expect(contractZz0Ju9j.transfer.call(toFjwIuQm, value91kjiE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractv6E2HDz = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValuemkXiMS3 = BigInt("1181")
		const spenderfpIyVCp = accounts[2]
		const nullrtcn2e9 = await contractv6E2HDz.increaseAllowance.call(spenderfpIyVCp, addedValuemkXiMS3, {from: accounts[1]});
		const nullANJKAJV = await contractv6E2HDz.totalSupply.call({from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractMysjwxW = await ERC20.new({from: accounts[3]});
		const subtractedValuey4ealVh = BigInt("194")
		const spenderDRmmxbQ = accounts[2]
		const ownerYKnVAbQ = accounts[4]
		const ownerl1stoD = accounts[1]
		const valuefXBaPhn = BigInt("1456")
		const toRoOo8aD = accounts[2]
		const fromQwrS3rk = accounts[4]
		const valuePSKc3dx = BigInt("177")
		const tobhdGtp = accounts[1]
		const valueGhhNNA = BigInt("105")
		const tookwbwOH = accounts[1]
		const fromaiOH2Y = accounts[1]
		const spendersqlU7QT = accounts[1]
		const ownerk1eYGe7 = accounts[1]
		const spendert6d28jZ = "0x0000000000000000000000000000000000000001"
		const ownerXBlvC4Q = accounts[3]
		const nullqkVShLa = await contractMysjwxW.decreaseAllowance.call(spenderDRmmxbQ, subtractedValuey4ealVh, {from: accounts[4]});
		const nullFaIDjSe = await contractMysjwxW.balanceOf.call(ownerYKnVAbQ, {from: accounts[1]});
		const nullcM66POT = await contractMysjwxW.balanceOf.call(ownerl1stoD, {from: accounts[5]});
		const nulljdjrBY2 = await contractMysjwxW.transferFrom.call(fromQwrS3rk, toRoOo8aD, valuefXBaPhn, {from: accounts[1]});
		const nullwTnH40Z = await contractMysjwxW.transfer.call(tobhdGtp, valuePSKc3dx, {from: accounts[4]});
		const nullvwzzfM0 = await contractMysjwxW.transferFrom.call(fromaiOH2Y, tookwbwOH, valueGhhNNA, {from: accounts[1]});
		const nullc8K5rXn = await contractMysjwxW.allowance.call(ownerk1eYGe7, spendersqlU7QT, {from: accounts[3]});
		const nulli5L8q01 = await contractMysjwxW.allowance.call(ownerXBlvC4Q, spendert6d28jZ, {from: accounts[1]});

		await expect(contractMysjwxW.decreaseAllowance.call(spenderDRmmxbQ, subtractedValuey4ealVh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})