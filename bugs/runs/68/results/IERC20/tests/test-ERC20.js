const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractk8JARHP = await ERC20.new({from: accounts[4]});
		const valueJUjWHCI = BigInt("577")
		const toIsnKNF1 = accounts[0]
		const valueq3pa1am = BigInt("1691")
		const toK2DGBy = accounts[1]
		const ownern4qcR9b = "0x0000000000000000000000000000000000000001"
		const nullmSTQ2u = await contractk8JARHP.transfer.call(toIsnKNF1, valueJUjWHCI, {from: accounts[0]});
		const nullChZd9B1 = await contractk8JARHP.transfer.call(toK2DGBy, valueq3pa1am, {from: accounts[0]});
		const nullob8X83K = await contractk8JARHP.balanceOf.call(ownern4qcR9b, {from: accounts[2]});

		await expect(contractk8JARHP.transfer.call(toIsnKNF1, valueJUjWHCI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUAG0Pys = await ERC20.new({from: accounts[3]});
		const ownerDrHTuo7 = accounts[3]
		const valueT108vhO = BigInt("302")
		const toegS3LDO = accounts[0]
		const valueo4FqPtb = BigInt("1981")
		const spenderaKKo4LO = accounts[1]
		const valuemvpSWS = BigInt("444")
		const spenderY3hkX0k = accounts[1]
		const nulldaYLfXF = await contractUAG0Pys.balanceOf.call(ownerDrHTuo7, {from: accounts[2]});
		const nullYGyzlmg = await contractUAG0Pys.transfer.call(toegS3LDO, valueT108vhO, {from: accounts[5]});
		const nullQIJlvCh = await contractUAG0Pys.approve.call(spenderaKKo4LO, valueo4FqPtb, {from: accounts[0]});
		const nullpf7iYsF = await contractUAG0Pys.approve.call(spenderY3hkX0k, valuemvpSWS, {from: accounts[5]});

		assert.equal(nulldaYLfXF, 0)
		await expect(contractUAG0Pys.transfer.call(toegS3LDO, valueT108vhO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractAFmMxA8 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueoBkPZws = BigInt("1937")
		const toNEMIKm = accounts[4]
		const fromgGbSbDk = "0x0000000000000000000000000000000000000001"
		const valuei4arE66 = BigInt("6")
		const spenderZIBP9M = accounts[1]
		const addedValueB2vGAnP = BigInt("1326")
		const spenderJKfRX9e = accounts[2]
		const nullaOSEyir = await contractAFmMxA8.transferFrom.call(fromgGbSbDk, toNEMIKm, valueoBkPZws, {from: accounts[3]});
		const nullGRLDJXg = await contractAFmMxA8.approve.call(spenderZIBP9M, valuei4arE66, {from: accounts[1]});
		const nullxw0pBI = await contractAFmMxA8.increaseAllowance.call(spenderJKfRX9e, addedValueB2vGAnP, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contract8Uw1mO = await ERC20.new({from: accounts[1]});
		const spenderCla6agc = accounts[1]
		const ownerHDoPppO = accounts[4]
		const ownerB61Nuq6 = accounts[3]
		const nullDVjxiqs = await contract8Uw1mO.allowance.call(ownerHDoPppO, spenderCla6agc, {from: accounts[2]});
		const nullYQ1sDCm = await contract8Uw1mO.balanceOf.call(ownerB61Nuq6, {from: accounts[2]});

		assert.equal(nullDVjxiqs, 0)
		assert.equal(nullYQ1sDCm, 0)
	});

	it('test for ERC20', async () => {
		const contractbVNCLfq = await ERC20.new({from: accounts[0]});
		const addedValueJRo9veR = BigInt("1191")
		const spendereVXJp1l = accounts[0]
		const addedValueA0wUjZN = BigInt("192")
		const spenderCV0YxXz = accounts[1]
		const valueYCaXjCC = BigInt("1793")
		const togF25GK4 = accounts[4]
		const fromDr4F3yk = accounts[2]
		const spender1oTusz = accounts[0]
		const ownerHWd2Hef = accounts[3]
		const nullAskfSiI = await contractbVNCLfq.totalSupply.call({from: accounts[2]});
		const nulla57aLDm = await contractbVNCLfq.increaseAllowance.call(spendereVXJp1l, addedValueJRo9veR, {from: accounts[3]});
		const nullvjn1TAf = await contractbVNCLfq.increaseAllowance.call(spenderCV0YxXz, addedValueA0wUjZN, {from: accounts[0]});
		const nullcfPZOZj = await contractbVNCLfq.transferFrom.call(fromDr4F3yk, togF25GK4, valueYCaXjCC, {from: accounts[5]});
		const nulljK9GstH = await contractbVNCLfq.allowance.call(ownerHWd2Hef, spender1oTusz, {from: accounts[2]});

		assert.equal(nullAskfSiI, 0)
		assert.equal(nulla57aLDm, true)
		assert.equal(nullvjn1TAf, true)
		await expect(contractbVNCLfq.transferFrom.call(fromDr4F3yk, togF25GK4, valueYCaXjCC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracto2JamzJ = await ERC20.new({from: accounts[3]});
		const values5CymYs = BigInt("457")
		const spenderdyUzrW = accounts[0]
		const addedValuepumJFbr = BigInt("319")
		const spenderwj9NJQx = accounts[1]
		const addedValueDnd6HoH = BigInt("1281")
		const spenderiig78K3 = accounts[3]
		const nullgHs3Eys = await contracto2JamzJ.approve.call(spenderdyUzrW, values5CymYs, {from: accounts[1]});
		const nulluhMsojq = await contracto2JamzJ.increaseAllowance.call(spenderwj9NJQx, addedValuepumJFbr, {from: accounts[0]});
		const nullOPd5Tmu = await contracto2JamzJ.increaseAllowance.call(spenderiig78K3, addedValueDnd6HoH, {from: accounts[4]});

		assert.equal(nullOPd5Tmu, true)
		assert.equal(nullgHs3Eys, true)
		assert.equal(nulluhMsojq, true)
	});

	it('test for ERC20', async () => {
		const contract3ZZcux = await ERC20.new({from: accounts[1]});
		const subtractedValuervuNnoQ = BigInt("463")
		const spenderYSHxJxY = accounts[2]
		const subtractedValueiciu4tw = BigInt("1095")
		const spenderPSBx0ji = accounts[1]
		const valuerL9LrX8 = BigInt("1202")
		const tox7mJeQ7 = "0x0000000000000000000000000000000000000001"
		const fromQjJyYK = accounts[4]
		const nullk3DoSw2 = await contract3ZZcux.totalSupply.call({from: accounts[1]});
		const nullufA7b7 = await contract3ZZcux.decreaseAllowance.call(spenderYSHxJxY, subtractedValuervuNnoQ, {from: accounts[0]});
		const nullfwUbJLL = await contract3ZZcux.decreaseAllowance.call(spenderPSBx0ji, subtractedValueiciu4tw, {from: accounts[2]});
		const nullLgIEKtV = await contract3ZZcux.transferFrom.call(fromQjJyYK, tox7mJeQ7, valuerL9LrX8, {from: accounts[3]});

		assert.equal(nullk3DoSw2, 0)
		await expect(contract3ZZcux.decreaseAllowance.call(spenderYSHxJxY, subtractedValuervuNnoQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})