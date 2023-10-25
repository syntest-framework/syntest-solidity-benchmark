const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractolIGxwg = await VBZRXWrapper.new({from: accounts[4]});
		const valueU77K6vP = BigInt("1793")
		const valueEQXCiM0 = BigInt("596")
		const spenderdXixuoS = "0x0000000000000000000000000000000000000001"
		const accountdbEZ6i = accounts[0]
		const accountKjbzyZC = accounts[1]
		const nullKx27UNi = await contractolIGxwg.claim.call({from: accounts[0]});
		await contractolIGxwg.withdraw.call(valueU77K6vP, {from: accounts[2]});
		const nullq40rOm = await contractolIGxwg.approve.call(spenderdXixuoS, valueEQXCiM0, {from: "0x0000000000000000000000000000000000000001"});
		const nullZ4h6vAS = await contractolIGxwg.claimable.call(accountdbEZ6i, {from: accounts[1]});
		const nullL7ePXIN = await contractolIGxwg.claimable.call(accountKjbzyZC, {from: accounts[0]});

		assert.equal(nullKx27UNi, 0)
		await expect(contractolIGxwg.withdraw.call(valueU77K6vP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractiGvqZju = await VBZRXWrapper.new({from: accounts[1]});
		const valueji20WUX = BigInt("813")
		const dstGZTolRF = accounts[0]
		const valuekhJ1tu = BigInt("344")
		const valueKJczEF1 = BigInt("92")
		const valueiC3e7l7 = BigInt("726")
		const valuenMIdne = BigInt("254")
		const nullKdxJsnu = await contractiGvqZju.transfer.call(dstGZTolRF, valueji20WUX, {from: accounts[2]});
		await contractiGvqZju.withdraw.call(valuekhJ1tu, {from: accounts[1]});
		await contractiGvqZju.withdraw.call(valueKJczEF1, {from: "0x0000000000000000000000000000000000000001"});
		await contractiGvqZju.withdraw.call(valueiC3e7l7, {from: accounts[5]});
		await contractiGvqZju.withdraw.call(valuenMIdne, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractiGvqZju.transfer.call(dstGZTolRF, valueji20WUX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractG0Fb3p6 = await VBZRXWrapper.new({from: accounts[2]});
		const accountYfL0jw9 = accounts[1]
		const valuepKqWrB = BigInt("942")
		const valueYNESMWL = BigInt("1559")
		const nullehDLfHs = await contractG0Fb3p6.claimable.call(accountYfL0jw9, {from: "0x0000000000000000000000000000000000000001"});
		await contractG0Fb3p6.deposit.call(valuepKqWrB, {from: "0x0000000000000000000000000000000000000001"});
		await contractG0Fb3p6.deposit.call(valueYNESMWL, {from: accounts[4]});
		const nullBCPOi1y = await contractG0Fb3p6.claim.call({from: accounts[2]});
		const nullSOftVQa = await contractG0Fb3p6.claim.call({from: accounts[2]});

		await expect(contractG0Fb3p6.claimable.call(accountYfL0jw9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractT7wkT4 = await VBZRXWrapper.new({from: accounts[5]});
		const value9tg3k4 = BigInt("445")
		const spenderj1oFu0U = accounts[1]
		const accountdAOMjT = accounts[0]
		const accountgxOEoSl = accounts[5]
		const valueJWrzBV = BigInt("1988")
		const dstRk1e3p0 = accounts[4]
		const src8JcQ3x = "0x0000000000000000000000000000000000000001"
		const nullMfmGLa = await contractT7wkT4.approve.call(spenderj1oFu0U, value9tg3k4, {from: accounts[3]});
		await contractT7wkT4.exit.call({from: accounts[3]});
		const nullpdzHcK7 = await contractT7wkT4.claimable.call(accountdAOMjT, {from: accounts[3]});
		const nulluMmSPPC = await contractT7wkT4.claimable.call(accountgxOEoSl, {from: "0x0000000000000000000000000000000000000001"});
		const nullAc1P8C9 = await contractT7wkT4.transferFrom.call(src8JcQ3x, dstRk1e3p0, valueJWrzBV, {from: accounts[4]});

		assert.equal(nullMfmGLa, true)
		await expect(contractT7wkT4.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractvg7kd8m = await VBZRXWrapper.new({from: accounts[0]});
		const valueZw99NJ9 = BigInt("2008")
		const valueyvTOhu7 = BigInt("89")
		const valueRRtsjPH = BigInt("83")
		const valuetwnyiCk = BigInt("1688")
		await contractvg7kd8m.deposit.call(valueZw99NJ9, {from: accounts[1]});
		await contractvg7kd8m.deposit.call(valueyvTOhu7, {from: accounts[0]});
		await contractvg7kd8m.withdraw.call(valueRRtsjPH, {from: accounts[4]});
		await contractvg7kd8m.deposit.call(valuetwnyiCk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractvg7kd8m.deposit.call(valueZw99NJ9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractaipU1Lb = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueUBj0B9j = BigInt("1033")
		const dstnDp7mTn = accounts[5]
		const srcnLMkUEL = "0x0000000000000000000000000000000000000001"
		const valueTbVUuux = BigInt("681")
		const dstcFS4DP5 = accounts[0]
		const accountKuzE4B1 = accounts[1]
		const nullOyi1KRC = await contractaipU1Lb.transferFrom.call(srcnLMkUEL, dstnDp7mTn, valueUBj0B9j, {from: accounts[0]});
		const nullChMhOMJ = await contractaipU1Lb.transfer.call(dstcFS4DP5, valueTbVUuux, {from: accounts[3]});
		const nullj46W40z = await contractaipU1Lb.claimable.call(accountKuzE4B1, {from: accounts[0]});
		const nulliOqFLEh = await contractaipU1Lb.claim.call({from: accounts[5]});
	});
})