const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractrNCAqQh = await ERC20.new({from: accounts[3]});
		const subtractedValueMPJ1m1O = BigInt("1083")
		const spenderaGP9Isp = accounts[0]
		const valueosVGmIp = BigInt("345")
		const spenderqBj4dH6 = "0x0000000000000000000000000000000000000001"
		const spenderIMmrSJr = "0x0000000000000000000000000000000000000001"
		const ownerf35HEcZ = "0x0000000000000000000000000000000000000001"
		const ownerQxL12hj = accounts[3]
		const valuePRWbey2 = BigInt("1229")
		const tozCzAjl = accounts[3]
		const nullAZXmCuh = await contractrNCAqQh.decreaseAllowance.call(spenderaGP9Isp, subtractedValueMPJ1m1O, {from: "0x0000000000000000000000000000000000000001"});
		const nullvcAxgU = await contractrNCAqQh.approve.call(spenderqBj4dH6, valueosVGmIp, {from: accounts[1]});
		const nullclgjCs = await contractrNCAqQh.allowance.call(ownerf35HEcZ, spenderIMmrSJr, {from: accounts[4]});
		const nullVGhtNL4 = await contractrNCAqQh.balanceOf.call(ownerQxL12hj, {from: accounts[4]});
		const nullKvWAKkc = await contractrNCAqQh.transfer.call(tozCzAjl, valuePRWbey2, {from: accounts[0]});

		await expect(contractrNCAqQh.decreaseAllowance.call(spenderaGP9Isp, subtractedValueMPJ1m1O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractcousDDm = await ERC20.new({from: accounts[3]});
		const ownerKJIp1ey = accounts[0]
		const addedValuewmliEsf = BigInt("1029")
		const spenderkGwIZUn = accounts[3]
		const owner92zxow = accounts[2]
		const nullxovU78Z = await contractcousDDm.balanceOf.call(ownerKJIp1ey, {from: accounts[1]});
		const nullLeyqxeW = await contractcousDDm.increaseAllowance.call(spenderkGwIZUn, addedValuewmliEsf, {from: "0x0000000000000000000000000000000000000001"});
		const nullmlzLdO = await contractcousDDm.balanceOf.call(owner92zxow, {from: accounts[4]});

		assert.equal(nullLeyqxeW, true)
		assert.equal(nullmlzLdO, 0)
		assert.equal(nullxovU78Z, 0)
	});

	it('test for ERC20', async () => {
		const contractVm84YAl = await ERC20.new({from: accounts[2]});
		const addedValueQtvZNEz = BigInt("1896")
		const spenderSFkwgaK = accounts[0]
		const valueeTnjdF7 = BigInt("1688")
		const toTb6s9Bd = accounts[2]
		const fromuS9fxR = accounts[4]
		const nullx98ByVj = await contractVm84YAl.increaseAllowance.call(spenderSFkwgaK, addedValueQtvZNEz, {from: accounts[5]});
		const nulllU1vfll = await contractVm84YAl.transferFrom.call(fromuS9fxR, toTb6s9Bd, valueeTnjdF7, {from: accounts[0]});

		assert.equal(nullx98ByVj, true)
		await expect(contractVm84YAl.transferFrom.call(fromuS9fxR, toTb6s9Bd, valueeTnjdF7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractzUxWMxO = await ERC20.new({from: accounts[1]});
		const valuecUyW8yV = BigInt("200")
		const toEV2dFew = accounts[2]
		const fromGOdb91p = accounts[2]
		const valueICmx9zB = BigInt("723")
		const spenderxnE6VnH = accounts[3]
		const subtractedValueFkVb95r = BigInt("1333")
		const spenderlGoXniF = accounts[1]
		const nullhJUZO4M = await contractzUxWMxO.totalSupply.call({from: accounts[2]});
		const nullQoEIUYN = await contractzUxWMxO.transferFrom.call(fromGOdb91p, toEV2dFew, valuecUyW8yV, {from: accounts[4]});
		const nullF0wsN9Y = await contractzUxWMxO.approve.call(spenderxnE6VnH, valueICmx9zB, {from: accounts[1]});
		const nullKhRLgga = await contractzUxWMxO.decreaseAllowance.call(spenderlGoXniF, subtractedValueFkVb95r, {from: accounts[2]});

		assert.equal(nullhJUZO4M, 0)
		await expect(contractzUxWMxO.transferFrom.call(fromGOdb91p, toEV2dFew, valuecUyW8yV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractU6P2kcC = await ERC20.new({from: accounts[0]});
		const spenderV8tGixv = accounts[4]
		const ownerbEVG73H = "0x0000000000000000000000000000000000000001"
		const spenderbpNe2oa = accounts[3]
		const owneraPylzeo = accounts[1]
		const nullyvYFhwK = await contractU6P2kcC.totalSupply.call({from: accounts[0]});
		const nullqNFHtdU = await contractU6P2kcC.allowance.call(ownerbEVG73H, spenderV8tGixv, {from: accounts[1]});
		const nulllCiD0JQ = await contractU6P2kcC.allowance.call(owneraPylzeo, spenderbpNe2oa, {from: accounts[1]});

		assert.equal(nulllCiD0JQ, 0)
		assert.equal(nullqNFHtdU, 0)
		assert.equal(nullyvYFhwK, 0)
	});

	it('test for ERC20', async () => {
		const contractTwU2oJa = await ERC20.new({from: accounts[2]});
		const valuewtz1la = BigInt("637")
		const toWmEbaH = accounts[0]
		const valuemPu9Tzi = BigInt("427")
		const tojMCuXNO = accounts[1]
		const nulltSTuXED = await contractTwU2oJa.transfer.call(toWmEbaH, valuewtz1la, {from: "0x0000000000000000000000000000000000000001"});
		const nullV8IdkE5 = await contractTwU2oJa.transfer.call(tojMCuXNO, valuemPu9Tzi, {from: accounts[0]});

		await expect(contractTwU2oJa.transfer.call(toWmEbaH, valuewtz1la, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJrO3SEt = await ERC20.new({from: accounts[3]});
		const ownerVXTIFQk = accounts[0]
		const valuedIyB61X = BigInt("1624")
		const spendernkzTzeF = accounts[3]
		const addedValueKYT41ao = BigInt("1029")
		const spenderHVRzSSd = accounts[3]
		const ownerlGG2zO = accounts[2]
		const nullwcqASfq = await contractJrO3SEt.balanceOf.call(ownerVXTIFQk, {from: accounts[1]});
		const nullwXTMGop = await contractJrO3SEt.approve.call(spendernkzTzeF, valuedIyB61X, {from: accounts[5]});
		const nullnZcg3xI = await contractJrO3SEt.increaseAllowance.call(spenderHVRzSSd, addedValueKYT41ao, {from: "0x0000000000000000000000000000000000000001"});
		const nullplLb4g4 = await contractJrO3SEt.balanceOf.call(ownerlGG2zO, {from: accounts[4]});
		const nullXgaIPmY = await contractJrO3SEt.totalSupply.call({from: accounts[5]});

		assert.equal(nullXgaIPmY, 0)
		assert.equal(nullnZcg3xI, true)
		assert.equal(nullplLb4g4, 0)
		assert.equal(nullwXTMGop, true)
		assert.equal(nullwcqASfq, 0)
	});

	it('test for ERC20', async () => {
		const contractk4iWj7j = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueotbpsE4 = BigInt("287")
		const spenderLJCmBTy = accounts[1]
		const ownernBESfRv = accounts[2]
		const nullpEtNctl = await contractk4iWj7j.approve.call(spenderLJCmBTy, valueotbpsE4, {from: accounts[1]});
		const nullCfL4pGa = await contractk4iWj7j.balanceOf.call(ownernBESfRv, {from: accounts[3]});
		const nullq2zCzPC = await contractk4iWj7j.totalSupply.call({from: accounts[4]});
	});
})