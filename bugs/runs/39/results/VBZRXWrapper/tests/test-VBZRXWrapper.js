const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractUungPW5 = await VBZRXWrapper.new({from: accounts[5]});
		const accountuj1KZy2 = accounts[1]
		const valueK2KUJah = BigInt("1167")
		await contractUungPW5.exit.call({from: accounts[3]});
		const nullWNKwj7g = await contractUungPW5.claimable.call(accountuj1KZy2, {from: accounts[1]});
		await contractUungPW5.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullaf8ilx = await contractUungPW5.claim.call({from: accounts[5]});
		await contractUungPW5.deposit.call(valueK2KUJah, {from: accounts[4]});

		await expect(contractUungPW5.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractdij0h82 = await VBZRXWrapper.new({from: accounts[2]});
		const valueHpEBZJ1 = BigInt("480")
		const dstIn48qX3 = accounts[2]
		const srcVH2k5pc = accounts[4]
		const accountlg6FrB = accounts[3]
		const nullFE01AZo = await contractdij0h82.transferFrom.call(srcVH2k5pc, dstIn48qX3, valueHpEBZJ1, {from: accounts[1]});
		const nullMVxNTTe = await contractdij0h82.claimable.call(accountlg6FrB, {from: accounts[4]});
		await contractdij0h82.exit.call({from: accounts[0]});

		await expect(contractdij0h82.transferFrom.call(srcVH2k5pc, dstIn48qX3, valueHpEBZJ1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractMV4HLDG = await VBZRXWrapper.new({from: accounts[3]});
		const accountV8Wkyvk = accounts[3]
		const valueAC6MPHP = BigInt("946")
		const spenderAUKkhF7 = accounts[2]
		const valueYKwJ0iD = BigInt("1605")
		const dstEs8iwsP = accounts[3]
		const srcsGIz7UT = accounts[0]
		const null6q2oB6 = await contractMV4HLDG.claimable.call(accountV8Wkyvk, {from: accounts[2]});
		const nulloa4H4Ot = await contractMV4HLDG.approve.call(spenderAUKkhF7, valueAC6MPHP, {from: accounts[0]});
		const nulloQTao5A = await contractMV4HLDG.transferFrom.call(srcsGIz7UT, dstEs8iwsP, valueYKwJ0iD, {from: accounts[1]});

		await expect(contractMV4HLDG.claimable.call(accountV8Wkyvk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractFef8pO5 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuexQHOHD = BigInt("47")
		const accountvG8PlMW = accounts[4]
		await contractFef8pO5.withdraw.call(valuexQHOHD, {from: accounts[5]});
		const nullJjzs0xe = await contractFef8pO5.claimable.call(accountvG8PlMW, {from: accounts[3]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractB6wFh1c = await VBZRXWrapper.new({from: accounts[5]});
		const valueuDeCXQA = BigInt("1156")
		const valueMySJwfl = BigInt("243")
		const accountFVsYz6 = accounts[4]
		const valueWsSJPXg = BigInt("988")
		const accountos6kqn5 = accounts[3]
		await contractB6wFh1c.deposit.call(valueuDeCXQA, {from: accounts[4]});
		await contractB6wFh1c.withdraw.call(valueMySJwfl, {from: accounts[0]});
		const nullk55IRWx = await contractB6wFh1c.claimable.call(accountFVsYz6, {from: accounts[3]});
		await contractB6wFh1c.deposit.call(valueWsSJPXg, {from: accounts[3]});
		const nulli3amJYO = await contractB6wFh1c.claimable.call(accountos6kqn5, {from: accounts[1]});

		await expect(contractB6wFh1c.deposit.call(valueuDeCXQA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractTrqYSuH = await VBZRXWrapper.new({from: accounts[2]});
		const valueSoD1NJS = BigInt("1373")
		const valueZsZL6Np = BigInt("1738")
		const nullOv8vIkK = await contractTrqYSuH.claim.call({from: accounts[1]});
		await contractTrqYSuH.exit.call({from: accounts[2]});
		const nullQYXWa6 = await contractTrqYSuH.claim.call({from: accounts[2]});
		await contractTrqYSuH.withdraw.call(valueSoD1NJS, {from: "0x0000000000000000000000000000000000000001"});
		await contractTrqYSuH.withdraw.call(valueZsZL6Np, {from: accounts[2]});

		assert.equal(nullOv8vIkK, 0)
		await expect(contractTrqYSuH.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractPkLgb5 = await VBZRXWrapper.new({from: accounts[3]});
		const valueyvliwf2 = BigInt("1602")
		const spenderaTwzkn5 = accounts[3]
		const valuetq8fGp = BigInt("1723")
		const valuecE8cUcl = BigInt("339")
		const nullj0hnXON = await contractPkLgb5.approve.call(spenderaTwzkn5, valueyvliwf2, {from: accounts[1]});
		await contractPkLgb5.deposit.call(valuetq8fGp, {from: accounts[0]});
		await contractPkLgb5.exit.call({from: accounts[0]});
		await contractPkLgb5.deposit.call(valuecE8cUcl, {from: accounts[4]});

		assert.equal(nullj0hnXON, true)
		await expect(contractPkLgb5.deposit.call(valuetq8fGp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSzaXchN = await VBZRXWrapper.new({from: accounts[5]});
		const value6IuqhX = BigInt("1678")
		const dstf2BmK3 = accounts[4]
		const valueoKKRFu = BigInt("1062")
		const dst1yjaW6 = accounts[0]
		const srcVJkM2LL = accounts[4]
		const accountRJ8v1ZZ = accounts[0]
		const valueTv9GkbW = BigInt("423")
		const dstrkKKZfx = accounts[0]
		const srcnqfE71b = accounts[2]
		const nulle2jQt0D = await contractSzaXchN.transfer.call(dstf2BmK3, value6IuqhX, {from: accounts[0]});
		const nullDjGp4s = await contractSzaXchN.transferFrom.call(srcVJkM2LL, dst1yjaW6, valueoKKRFu, {from: accounts[4]});
		const nullU9Xp0iJ = await contractSzaXchN.claimable.call(accountRJ8v1ZZ, {from: accounts[0]});
		const nullY81NuI3 = await contractSzaXchN.transferFrom.call(srcnqfE71b, dstrkKKZfx, valueTv9GkbW, {from: accounts[4]});

		await expect(contractSzaXchN.transfer.call(dstf2BmK3, value6IuqhX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})