const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contracte9Rc0Rt = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const toggleUjz92ve = false
		const addrapNQbco = accounts[5]
		const valueE4CzfTn = BigInt("1842")
		const dstVTtoJx7 = accounts[4]
		const valueSeBEU9z = BigInt("1664")
		const dstxfbTbN = accounts[2]
		const srcEr0S4MC = accounts[3]
		const accountf6KEnKS = accounts[4]
		await contracte9Rc0Rt.setBridge.call(addrapNQbco, toggleUjz92ve, {from: "0x0000000000000000000000000000000000000001"});
		const nully7CD7TG = await contracte9Rc0Rt.claim.call({from: accounts[0]});
		const nullINi05Kj = await contracte9Rc0Rt.transfer.call(dstVTtoJx7, valueE4CzfTn, {from: accounts[2]});
		const nullymIDQpU = await contracte9Rc0Rt.transferFrom.call(srcEr0S4MC, dstxfbTbN, valueSeBEU9z, {from: accounts[1]});
		const nullWmNS8CB = await contracte9Rc0Rt.claimable.call(accountf6KEnKS, {from: accounts[2]});
		await contracte9Rc0Rt.exit.call({from: accounts[2]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract9aYZnq = await VBZRXWrapper_alt.new({from: accounts[2]});
		const togglehXq49tp = true
		const addrJ51weMA = accounts[3]
		await contract9aYZnq.exit.call({from: accounts[4]});
		await contract9aYZnq.setBridge.call(addrJ51weMA, togglehXq49tp, {from: accounts[3]});
		const nullmRvp63J = await contract9aYZnq.claim.call({from: accounts[1]});

		await expect(contract9aYZnq.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractiel2TTx = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueEqfHccj = BigInt("1842")
		const spenderZWk3v7T = accounts[3]
		const accounts8KaRkV = accounts[1]
		const accountzh6b4QG = accounts[2]
		const nullnZ4TgIN = await contractiel2TTx.approve.call(spenderZWk3v7T, valueEqfHccj, {from: accounts[1]});
		const nullkAMp19 = await contractiel2TTx.claimable.call(accounts8KaRkV, {from: accounts[3]});
		await contractiel2TTx.exit.call({from: accounts[2]});
		await contractiel2TTx.exit.call({from: accounts[2]});
		const nullcdjzBAw = await contractiel2TTx.claimable.call(accountzh6b4QG, {from: accounts[1]});

		assert.equal(nullkAMp19, 0)
		assert.equal(nullnZ4TgIN, true)
		await expect(contractiel2TTx.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractr6sfltf = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountxrVf8xI = accounts[5]
		const valueMecQJxw = BigInt("1276")
		const dstYFrS3qC = accounts[1]
		const valueY7u7vdV = BigInt("751")
		const dstPkzCCnF = accounts[3]
		const srczJOtfVv = accounts[3]
		const valuelhjAT8W = BigInt("533")
		const nullhEsAdtx = await contractr6sfltf.claim.call({from: accounts[1]});
		const nullHZlfgPH = await contractr6sfltf.claimable.call(accountxrVf8xI, {from: accounts[1]});
		const nullY92yeRf = await contractr6sfltf.transfer.call(dstYFrS3qC, valueMecQJxw, {from: accounts[2]});
		const nullSH6GmVR = await contractr6sfltf.transferFrom.call(srczJOtfVv, dstPkzCCnF, valueY7u7vdV, {from: accounts[2]});
		await contractr6sfltf.deposit.call(valuelhjAT8W, {from: accounts[2]});

		assert.equal(nullHZlfgPH, 0)
		assert.equal(nullhEsAdtx, 0)
		await expect(contractr6sfltf.transfer.call(dstYFrS3qC, valueMecQJxw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlmFeYSq = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueot489qK = BigInt("20")
		const valueSehEDa2 = BigInt("1554")
		const dstUzuaJ5t = "0x0000000000000000000000000000000000000001"
		const valueB5KAptv = BigInt("1414")
		const valueiQNqxYJ = BigInt("1074")
		const dstAKX6OCQ = accounts[0]
		const srcBEooEa5 = accounts[4]
		await contractlmFeYSq.deposit.call(valueot489qK, {from: accounts[4]});
		const nullJRO4kSu = await contractlmFeYSq.transfer.call(dstUzuaJ5t, valueSehEDa2, {from: accounts[5]});
		await contractlmFeYSq.deposit.call(valueB5KAptv, {from: accounts[5]});
		const nullkn77nck = await contractlmFeYSq.transferFrom.call(srcBEooEa5, dstAKX6OCQ, valueiQNqxYJ, {from: accounts[3]});

		await expect(contractlmFeYSq.deposit.call(valueot489qK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractunM4SBi = await VBZRXWrapper_alt.new({from: accounts[2]});
		const togglewZlkEt = false
		const addrV6vKzBF = accounts[3]
		const accountK0GHmgD = accounts[0]
		await contractunM4SBi.setBridge.call(addrV6vKzBF, togglewZlkEt, {from: accounts[1]});
		await contractunM4SBi.exit.call({from: accounts[1]});
		const nullKh5naVT = await contractunM4SBi.claimable.call(accountK0GHmgD, {from: accounts[3]});

		await expect(contractunM4SBi.setBridge.call(addrV6vKzBF, togglewZlkEt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractmBIlgnn = await VBZRXWrapper_alt.new({from: accounts[1]});
		const toggleyFIk8Y = false
		const addrGUYSh6 = accounts[5]
		const accountlJSgVce = accounts[3]
		await contractmBIlgnn.setBridge.call(addrGUYSh6, toggleyFIk8Y, {from: accounts[1]});
		const nullNUVAsWm = await contractmBIlgnn.claimable.call(accountlJSgVce, {from: accounts[4]});

		assert.equal(nullNUVAsWm, 0)
	});
})