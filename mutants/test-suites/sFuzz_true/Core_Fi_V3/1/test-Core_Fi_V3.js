const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3kmOu4rn = await Core_Fi_V3.new({from: accounts[1]});
		const uintOsADqZo = BigInt("510")
		const addressXGEFVQX = accounts[0]
		const addressgYwfv8k = accounts[2]
		const addressRIaJWPq = accounts[0]
		const boolc9Zosr = await Core_Fi_V3kmOu4rn.transfer.call(addressXGEFVQX, uintOsADqZo, {from: accounts[4]});
		const uintyWiwMl = await Core_Fi_V3kmOu4rn.allowance.call(addressRIaJWPq, addressgYwfv8k, {from: accounts[5]});

		assert.equal(boolc9Zosr, false)
		assert.equal(uintyWiwMl, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3NsIRFOE = await Core_Fi_V3.new({from: accounts[0]});
		const addressxzsZgCd = accounts[2]
		const uintoE1I6iL = BigInt("1545")
		const addressKk4nkYH = accounts[5]
		const addressvridhO = "0x0000000000000000000000000000000000000001"
		const addressD4SMxir = accounts[3]
		const uint256KxDISRF = await Core_Fi_V3NsIRFOE.balanceOf.call(addressxzsZgCd, {from: accounts[3]});
		const boolDG8jUW8 = await Core_Fi_V3NsIRFOE.transfer.call(addressKk4nkYH, uintoE1I6iL, {from: accounts[3]});
		const uintMJRIG0f = await Core_Fi_V3NsIRFOE.allowance.call(addressD4SMxir, addressvridhO, {from: accounts[3]});

		assert.equal(boolDG8jUW8, false)
		assert.equal(uint256KxDISRF, BigInt("0"))
		assert.equal(uintMJRIG0f, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3TELlBU1 = await Core_Fi_V3.new({from: accounts[3]});
		const uintW7p1j7x = BigInt("255")
		const addressD62fEZQ = "0x0000000000000000000000000000000000000001"
		const addressy8oyqCE = accounts[3]
		const addressuvexwcB = accounts[5]
		const uintY9DV9H = BigInt("1593")
		const addressDZECsQO = accounts[2]
		const uintNEFR3Mp = BigInt("569")
		const addressMHzSxHZ = "0x0000000000000000000000000000000000000001"
		const addressQBhGzi = accounts[0]
		const uintcBkEcUa = BigInt("1886")
		const addressbUiq0NC = accounts[1]
		const uintYUewain = BigInt("1156")
		const addressxm9zz6t = accounts[1]
		const addresskld1CAI = accounts[4]
		const boolRumbhtz = await Core_Fi_V3TELlBU1.transferFrom.call(addressy8oyqCE, addressD62fEZQ, uintW7p1j7x, {from: accounts[2]});
		const uint256mMMz80 = await Core_Fi_V3TELlBU1.balanceOf.call(addressuvexwcB, {from: accounts[5]});
		const boolHK4gxFd = await Core_Fi_V3TELlBU1.approve.call(addressDZECsQO, uintY9DV9H, {from: accounts[4]});
		const boolNIhtpqD = await Core_Fi_V3TELlBU1.transferFrom.call(addressQBhGzi, addressMHzSxHZ, uintNEFR3Mp, {from: accounts[2]});
		const boolzYL4SWM = await Core_Fi_V3TELlBU1.transfer.call(addressbUiq0NC, uintcBkEcUa, {from: accounts[1]});
		const boolKzCwdQ = await Core_Fi_V3TELlBU1.transferFrom.call(addresskld1CAI, addressxm9zz6t, uintYUewain, {from: accounts[3]});

		assert.equal(boolHK4gxFd, true)
		assert.equal(boolKzCwdQ, false)
		assert.equal(boolNIhtpqD, false)
		assert.equal(boolRumbhtz, false)
		assert.equal(boolzYL4SWM, false)
		assert.equal(uint256mMMz80, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3H7llPB9 = await Core_Fi_V3.new({from: accounts[1]});
		const uintpsYeZ3J = BigInt("379")
		const addressfBIRehe = accounts[3]
		const addressZxEoMtY = accounts[5]
		const address1QkWRa = accounts[1]
		const addressKb61nm = accounts[5]
		const addressDi8o9L9 = accounts[4]
		const addressEtBHv6c = accounts[2]
		const boolFiMRrL = await Core_Fi_V3H7llPB9.transferFrom.call(addressZxEoMtY, addressfBIRehe, uintpsYeZ3J, {from: accounts[5]});
		const uint256ApLw7aS = await Core_Fi_V3H7llPB9.totalSupply.call({from: accounts[3]});
		const uint256E8YjUsV = await Core_Fi_V3H7llPB9.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintIT5nXhf = await Core_Fi_V3H7llPB9.allowance.call(addressKb61nm, address1QkWRa, {from: accounts[4]});
		const uintkZ3RsE = await Core_Fi_V3H7llPB9.allowance.call(addressEtBHv6c, addressDi8o9L9, {from: accounts[4]});

		assert.equal(boolFiMRrL, false)
		assert.equal(uint256ApLw7aS, BigInt("84000000000000000000000"))
		assert.equal(uint256E8YjUsV, BigInt("84000000000000000000000"))
		assert.equal(uintIT5nXhf, BigInt("0"))
		assert.equal(uintkZ3RsE, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3IuGxnNY = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyvIgYd4 = BigInt("1606")
		const addresseejDK9Z = accounts[4]
		const uintzqJNQWq = BigInt("807")
		const addressTmdUjUo = accounts[3]
		const uintydWDqCK = BigInt("760")
		const addresssjchyWK = accounts[3]
		const uintGSM1CMs = BigInt("237")
		const addressR2rVtNr = "0x0000000000000000000000000000000000000001"
		const addressJrpOYhR = accounts[2]
		const addressSWynoQ = accounts[0]
		const boolLYteYTx = await Core_Fi_V3IuGxnNY.approve.call(addresseejDK9Z, uintyvIgYd4, {from: accounts[2]});
		const bool1nKt09 = await Core_Fi_V3IuGxnNY.approve.call(addressTmdUjUo, uintzqJNQWq, {from: accounts[2]});
		const boolYhvaid1 = await Core_Fi_V3IuGxnNY.approve.call(addresssjchyWK, uintydWDqCK, {from: accounts[4]});
		const boolhsBevXc = await Core_Fi_V3IuGxnNY.approve.call(addressR2rVtNr, uintGSM1CMs, {from: accounts[3]});
		const uintzHtFMhY = await Core_Fi_V3IuGxnNY.allowance.call(addressSWynoQ, addressJrpOYhR, {from: accounts[5]});
	});
})