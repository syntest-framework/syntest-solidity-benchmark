const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractzcgi0w = await VBZRXWrapper.new({from: accounts[4]});
		const valueydcdlrb = BigInt("1513")
		const valuexzkUISW = BigInt("473")
		const valueb6zQhrH = BigInt("710")
		const spenderuMrI2Z = accounts[3]
		await contractzcgi0w.withdraw.call(valueydcdlrb, {from: accounts[3]});
		await contractzcgi0w.deposit.call(valuexzkUISW, {from: accounts[3]});
		const nulleUHKAwZ = await contractzcgi0w.approve.call(spenderuMrI2Z, valueb6zQhrH, {from: accounts[3]});
		const nulldpH5mLp = await contractzcgi0w.claim.call({from: accounts[5]});

		await expect(contractzcgi0w.withdraw.call(valueydcdlrb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractGEEGP6g = await VBZRXWrapper.new({from: accounts[3]});
		const accountNxGIH7i = accounts[3]
		const accountJ33CuN7 = accounts[0]
		const valueYNerKVs = BigInt("218")
		const nullKITxgTX = await contractGEEGP6g.claimable.call(accountNxGIH7i, {from: accounts[0]});
		const nullnUWdQtk = await contractGEEGP6g.claimable.call(accountJ33CuN7, {from: accounts[0]});
		await contractGEEGP6g.withdraw.call(valueYNerKVs, {from: accounts[5]});

		await expect(contractGEEGP6g.claimable.call(accountNxGIH7i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractKA6u5Ju = await VBZRXWrapper.new({from: accounts[4]});
		const valueS0rpXvE = BigInt("51")
		const dstNv7E1xh = accounts[1]
		const srcSCTSUhY = "0x0000000000000000000000000000000000000001"
		const valuek6rD0dq = BigInt("55")
		const spenderHG1Sx0w = accounts[2]
		const valuemH7TuoF = BigInt("541")
		const spenderIQ7ETnA = accounts[0]
		const nullJyReAjk = await contractKA6u5Ju.transferFrom.call(srcSCTSUhY, dstNv7E1xh, valueS0rpXvE, {from: accounts[1]});
		const null3jBN17 = await contractKA6u5Ju.approve.call(spenderHG1Sx0w, valuek6rD0dq, {from: accounts[3]});
		const nullVsER7OA = await contractKA6u5Ju.approve.call(spenderIQ7ETnA, valuemH7TuoF, {from: accounts[0]});

		await expect(contractKA6u5Ju.transferFrom.call(srcSCTSUhY, dstNv7E1xh, valueS0rpXvE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractYrJrnfn = await VBZRXWrapper.new({from: accounts[3]});
		const valueNDYvUZH = BigInt("1688")
		const accountdv8ZsS8 = accounts[0]
		await contractYrJrnfn.deposit.call(valueNDYvUZH, {from: accounts[5]});
		await contractYrJrnfn.exit.call({from: accounts[3]});
		const nullKIkt0ic = await contractYrJrnfn.claimable.call(accountdv8ZsS8, {from: accounts[4]});

		await expect(contractYrJrnfn.deposit.call(valueNDYvUZH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracttNabT3 = await VBZRXWrapper.new({from: accounts[0]});
		const valuebTA4yO = BigInt("323")
		const dstyIP8xUo = accounts[1]
		const srcnPlAyj = accounts[0]
		const accountWBbTRdf = "0x0000000000000000000000000000000000000001"
		await contracttNabT3.exit.call({from: accounts[4]});
		const nullN92LKP5 = await contracttNabT3.transferFrom.call(srcnPlAyj, dstyIP8xUo, valuebTA4yO, {from: accounts[1]});
		const nullcIl9L7Z = await contracttNabT3.claimable.call(accountWBbTRdf, {from: accounts[3]});

		await expect(contracttNabT3.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractYzai6l = await VBZRXWrapper.new({from: accounts[0]});
		const valueI0OQdVs = BigInt("1960")
		const spenderZa84tF = accounts[3]
		const nullsc9nl3 = await contractYzai6l.claim.call({from: accounts[4]});
		const null8vGQqv = await contractYzai6l.approve.call(spenderZa84tF, valueI0OQdVs, {from: accounts[5]});
		const nullf9p5zzZ = await contractYzai6l.claim.call({from: accounts[2]});

		assert.equal(null8vGQqv, true)
		assert.equal(nullf9p5zzZ, 0)
		assert.equal(nullsc9nl3, 0)
	});

	it('test for VBZRXWrapper', async () => {
		const contractgBIRjTU = await VBZRXWrapper.new({from: accounts[0]});
		const valueEfXVHRD = BigInt("802")
		const dsthXolRu9 = "0x0000000000000000000000000000000000000001"
		const valuev63TdrA = BigInt("2002")
		const dsthtN0UwS = accounts[3]
		const accountFSBciZ4 = accounts[0]
		const valueFWEv6H5 = BigInt("1765")
		const spenderqDjdT05 = accounts[4]
		const valueYOhY0E = BigInt("682")
		const nullnIl2LTc = await contractgBIRjTU.transfer.call(dsthXolRu9, valueEfXVHRD, {from: accounts[2]});
		const nullvSBaomZ = await contractgBIRjTU.transfer.call(dsthtN0UwS, valuev63TdrA, {from: accounts[4]});
		const null4WIxmB = await contractgBIRjTU.claimable.call(accountFSBciZ4, {from: "0x0000000000000000000000000000000000000001"});
		const nullUc67CPH = await contractgBIRjTU.approve.call(spenderqDjdT05, valueFWEv6H5, {from: accounts[5]});
		await contractgBIRjTU.withdraw.call(valueYOhY0E, {from: accounts[3]});

		await expect(contractgBIRjTU.transfer.call(dsthXolRu9, valueEfXVHRD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractasCtIcp = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const accountrNHVeFw = accounts[0]
		const valueFFRcsOK = BigInt("398")
		const valueJHdOAu8 = BigInt("1271")
		const spenderaZndHjh = accounts[4]
		const valuepJqbOjd = BigInt("91")
		const spenderVicG1HP = accounts[4]
		const valuecXdkTgb = BigInt("1346")
		const nulln0FPb3S = await contractasCtIcp.claimable.call(accountrNHVeFw, {from: accounts[4]});
		await contractasCtIcp.deposit.call(valueFFRcsOK, {from: accounts[2]});
		const nullrbRZ8NI = await contractasCtIcp.approve.call(spenderaZndHjh, valueJHdOAu8, {from: accounts[1]});
		const null2qCsHG = await contractasCtIcp.approve.call(spenderVicG1HP, valuepJqbOjd, {from: accounts[1]});
		await contractasCtIcp.deposit.call(valuecXdkTgb, {from: accounts[2]});
		const nulleZkSxt9 = await contractasCtIcp.claim.call({from: accounts[3]});
	});
})