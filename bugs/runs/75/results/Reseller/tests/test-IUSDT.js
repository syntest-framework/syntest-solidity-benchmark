const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractQhXjDKu = await IUSDT.new({from: accounts[3]});
		const amountKZtevWD = BigInt("1216")
		const spenderFfQIz4X = accounts[0]
		const amountsoX6UAX = BigInt("913")
		const recipienta0RxYEz = accounts[1]
		const sender2JfPA6 = accounts[2]
		const spenderBPHWwmu = accounts[0]
		const ownerW97G69O = accounts[2]
		const spendertLyaLc = accounts[4]
		const ownerZJyrYbp = "0x0000000000000000000000000000000000000001"
		await contractQhXjDKu.approve.call(spenderFfQIz4X, amountKZtevWD, {from: "0x0000000000000000000000000000000000000001"});
		await contractQhXjDKu.transferFrom.call(sender2JfPA6, recipienta0RxYEz, amountsoX6UAX, {from: accounts[2]});
		const nulloTHmMd7 = await contractQhXjDKu.decimals.call({from: accounts[4]});
		const nullYv5uKlX = await contractQhXjDKu.allowance.call(ownerW97G69O, spenderBPHWwmu, {from: "0x0000000000000000000000000000000000000001"});
		const nullR7YkXxC = await contractQhXjDKu.allowance.call(ownerZJyrYbp, spendertLyaLc, {from: accounts[0]});
	});
})