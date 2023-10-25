const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringZRwIwiD = "wt8Ito7bc4eJObPRjNDRJXbqqF1sJbzlnlxDG1h65LFd2vv3dX8fUNPIQ"
		const stringHHjiORG = "ylXVMSr4s46CjcKqHD52SQTpizLEg91IcphaarTgHt4kB2Deawk4mA3aXvfkt0kiHE6vRyrL"
		const uintLohMLG6 = BigInt("244")
		const XenoFelixUTneAAX = await XenoFelix.new(stringZRwIwiD, stringHHjiORG, uintLohMLG6, {from: accounts[0]});
		const uintwd6v8s = BigInt("696")
		const addressCdV5vP5 = accounts[1]
		const addressqTVBCq5 = accounts[5]
		const addressMCUwEAq = accounts[2]
		const addressSZDtuj = accounts[1]
		const boolWhM2sD1 = await XenoFelixUTneAAX.transferFrom.call(addressqTVBCq5, addressCdV5vP5, uintwd6v8s, {from: accounts[3]});
		const addressaFjL7n8 = await XenoFelixUTneAAX.addPauser.call(addressMCUwEAq, {from: accounts[3]});
		const addressssO8dZW = await XenoFelixUTneAAX.removePauser.call(addressSZDtuj, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringnAsyLQr = "yipObVvj6XNCV31RywzsVbAvWHsqs7PjqPQhqCwW6IHKFCQVPJOBz6BBWszJGXTeMESy"
		const stringbNNYB2F = "4AhrVyEmEZPgzFrhD0JQUfSRcn78cePAMciwsfuTLG9KZyIAKxkd1d4TKDNlOXxg4FwtdFpYYwywfmbDuN"
		const uintlZFidX8 = BigInt("133")
		const XenoFelixxmRRXQo = await XenoFelix.new(stringnAsyLQr, stringbNNYB2F, uintlZFidX8, {from: accounts[3]});
		const addressqx3mybn = "0x0000000000000000000000000000000000000001"
		const uintkRw4OuN = BigInt("582")
		const uintXwpURw1 = BigInt("549")
		const addressq7HP1nf = accounts[4]
		const uintgvruJAR = BigInt("1203")
		const uintaAnCP1I = BigInt("1499")
		const addressQPlFGa7 = accounts[0]
		const uintE3ox5PM = BigInt("2")
		const addresskO4mPaa = accounts[4]
		const addressCzYDuKS = "0x0000000000000000000000000000000000000001"
		const boolryczDFI = await XenoFelixxmRRXQo.isPauser.call(addressqx3mybn, {from: accounts[2]});
		const boolMCxVGk0 = await XenoFelixxmRRXQo.transferWithLock.call(addressq7HP1nf, uintXwpURw1, uintkRw4OuN, {from: accounts[3]});
		const boolxLYNko = await XenoFelixxmRRXQo.lock.call(addressQPlFGa7, uintaAnCP1I, uintgvruJAR, {from: accounts[1]});
		const boolaqsE7Fw = await XenoFelixxmRRXQo.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolU6Xd7R = await XenoFelixxmRRXQo.approve.call(addresskO4mPaa, uintE3ox5PM, {from: accounts[0]});
		const addressBD9qPrO = await XenoFelixxmRRXQo.notFrozen.call(addressCzYDuKS, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringDd6MwAz = "31hNgry7G8nwcQNofl9dCl3VYwjdeUlwDYUBQY1VljmF6du8rTmJyxSv1nJiIO2K8tyUlgvJgOoXfFg4VAR6Gsg7I"
		const stringIvjEOUR = "IqGD4DdoQRc"
		const uintxl72tql = BigInt("66")
		const XenoFelixS5pqtXh = await XenoFelix.new(stringDd6MwAz, stringIvjEOUR, uintxl72tql, {from: accounts[2]});
		const uintSuzcPEB = BigInt("999")
		const addressAr8AUxv = accounts[2]
		const addresstm3m5SN = accounts[4]
		const addressIKkQ5S8 = accounts[2]
		const uintmkZ38Uj = BigInt("1887")
		const addresse1ELw3Q = accounts[3]
		const boolfEDgGW = await XenoFelixS5pqtXh.transferFrom.call(addresstm3m5SN, addressAr8AUxv, uintSuzcPEB, {from: accounts[0]});
		const boolpPMiBMO = await XenoFelixS5pqtXh.unfreezeAccount.call(addressIKkQ5S8, {from: accounts[5]});
		await XenoFelixS5pqtXh.whenNotPaused.call({from: accounts[1]});
		const boolCJE8jd4 = await XenoFelixS5pqtXh.transfer.call(addresse1ELw3Q, uintmkZ38Uj, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringaHtTfm3 = "WcKVIvv4y3jh"
		const stringZdpqbU6 = "ERJAqggcYYwe0aI3XAhu1B7Dy9J72jEmdHFEnvORbNOoxAIoU2TbzQ7z"
		const uintMzWcxUz = BigInt("143")
		const XenoFelixP47Pv1 = await XenoFelix.new(stringaHtTfm3, stringZdpqbU6, uintMzWcxUz, {from: accounts[5]});
		const addressvKpl80N = accounts[0]
		const addresszC9Bux3 = accounts[4]
		const addressOZu9jPb = "0x0000000000000000000000000000000000000001"
		await XenoFelixP47Pv1.onlyPauser.call({from: accounts[1]});
		await XenoFelixP47Pv1.onlyPauser.call({from: accounts[4]});
		const addresseAQpSM4 = await XenoFelixP47Pv1.notFrozen.call(addressvKpl80N, {from: accounts[1]});
		const boolCoDvvMd = await XenoFelixP47Pv1.unfreezeAccount.call(addresszC9Bux3, {from: accounts[2]});
		const addresstJeJckb = await XenoFelixP47Pv1.notFrozen.call(addressOZu9jPb, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixlGXwTTY = await XenoFelix.new({from: accounts[2]});
		const uintm5AATBd = BigInt("132")
		const addressInyB59k = accounts[4]
		const uint256pvPIK3O = await XenoFelixlGXwTTY.burn.call(uintm5AATBd, {from: accounts[2]});
		const boolsxGToie = await XenoFelixlGXwTTY.isPauser.call(addressInyB59k, {from: accounts[2]});
		await XenoFelixlGXwTTY.renouncePauser.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintBBAHhMf = BigInt("1109")
		const uintCcNMPIZ = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintBBAHhMf, uintCcNMPIZ, {from: accounts[1]});
		const addressq9BuKGH = accounts[2]
		const addresslhVTI9o = accounts[3]
		const addressOqDA0u3 = accounts[1]
		const uint256T7JhCVM = await XenoFelixC622alf.allowance.call(addresslhVTI9o, addressq9BuKGH, {from: accounts[5]});
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressOqDA0u3, {from: accounts[0]});

		assert.equal(uint256T7JhCVM, BigInt("0"))
		assert.equal(uint256Wo1fmwP, BigInt("110900000000000000000000"))
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintlKipSQJ = BigInt("1109")
		const uintpbaCdL = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintlKipSQJ, uintpbaCdL, {from: accounts[1]});
		const addressTboPsz = accounts[2]
		const addressvYjsDZo = accounts[3]
		const addressTUk9qXV = accounts[4]
		const string4Tnlkb = await XenoFelixC622alf.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256T7JhCVM = await XenoFelixC622alf.allowance.call(addressvYjsDZo, addressTboPsz, {from: accounts[5]});
//		const boolYuzD3Xa = await XenoFelixC622alf.freezeAccount.call(addressTUk9qXV, {from: accounts[5]});

		assert.equal(string4Tnlkb, "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF")
		assert.equal(uint256T7JhCVM, BigInt("0"))
		await expect(XenoFelixC622alf.freezeAccount.call(addressTUk9qXV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uinttukj1yN = BigInt("1109")
		const uintYQbfU6Y = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uinttukj1yN, uintYQbfU6Y, {from: accounts[1]});
		const addressi2WLWeL = accounts[2]
		const addresse8heybC = accounts[3]
		const uintnhRQgB = BigInt("1167")
		const addressEEVU7Fv = accounts[1]
		const addressfMt9PCe = accounts[1]
//		await XenoFelixC622alf.onlyPauser.call({from: accounts[1]});
//		const uint256T7JhCVM = await XenoFelixC622alf.allowance.call(addresse8heybC, addressi2WLWeL, {from: accounts[5]});
//		const bool1G5hXc = await XenoFelixC622alf.approve.call(addressEEVU7Fv, uintnhRQgB, {from: accounts[4]});
//		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressfMt9PCe, {from: accounts[0]});

		await expect(XenoFelixC622alf.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintdzwTJvx = BigInt("1109")
		const uintprSoJET = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintdzwTJvx, uintprSoJET, {from: accounts[1]});
		const uintH6VZ0Jz = BigInt("1812")
		const addressxiCPBO8 = accounts[4]
		const addressOPhISXr = accounts[3]
		const boolopgn7Iy = await XenoFelixC622alf.approve.call(addressxiCPBO8, uintH6VZ0Jz, {from: accounts[2]});
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressOPhISXr, {from: accounts[0]});

		assert.equal(boolopgn7Iy, true)
		assert.equal(uint256Wo1fmwP, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uint4vg0S7 = BigInt("1109")
		const uintTocs3Ye = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uint4vg0S7, uintTocs3Ye, {from: accounts[1]});
		const addressQfs3Jft = accounts[3]
		const uintEt87rda = BigInt("400")
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressQfs3Jft, {from: accounts[0]});
		const uint256aprlMkD = await XenoFelixC622alf.totalSupply.call({from: accounts[1]});
//		const uint256Pcg69Wb = await XenoFelixC622alf.burn.call(uintEt87rda, {from: accounts[0]});

		assert.equal(uint256Wo1fmwP, BigInt("0"))
		assert.equal(uint256aprlMkD, BigInt("110900000000000000000000"))
		await expect(XenoFelixC622alf.burn.call(uintEt87rda, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHI2zfQW = "KQ6uTpsDQlJJJGgG8PHq6UxTpWNLvc9Hgm1JgJtVRcGXgWhoPN9Bo"
		const stringfhRSV9w = "XsWVRQosjxLknLnE7nxH8kXXwUb8QIGd"
		const uintmbCprzf = BigInt("136")
		const XenoFelixql4Jx4 = await XenoFelix.new(stringHI2zfQW, stringfhRSV9w, uintmbCprzf, {from: accounts[1]});
		const addressfUjKez9 = accounts[2]
		const uintx4onso9 = BigInt("1772")
		const address3hfpIf = accounts[1]
		const addressRd3qBSa = accounts[4]
		const addressTdRmjAb = await XenoFelixql4Jx4.notFrozen.call(addressfUjKez9, {from: accounts[5]});
		const booltF74Mol = await XenoFelixql4Jx4.transfer.call(address3hfpIf, uintx4onso9, {from: accounts[5]});
		await XenoFelixql4Jx4.onlyOwner.call({from: accounts[2]});
		const addresswIx1U6 = await XenoFelixql4Jx4.addPauser.call(addressRd3qBSa, {from: accounts[2]});
		await XenoFelixql4Jx4.onlyPauser.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintEpJ7dWo = BigInt("1109")
		const uintgDwkEqw = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintEpJ7dWo, uintgDwkEqw, {from: accounts[1]});
		const uintS16LeOa = BigInt("752")
		const addressyAJ56tL = accounts[2]
		const addressk8EO3lE = accounts[2]
//		const boolQjL7vx = await XenoFelixC622alf.decreaseAllowance.call(addressyAJ56tL, uintS16LeOa, {from: accounts[4]});
//		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressk8EO3lE, {from: accounts[0]});

		await expect(XenoFelixC622alf.decreaseAllowance.call(addressyAJ56tL, uintS16LeOa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintvqw6xnL = BigInt("1109")
		const uintpBvcwP1 = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintvqw6xnL, uintpBvcwP1, {from: accounts[1]});
		const addressm3cNBqD = accounts[2]
		const uintpGSfSKM = BigInt("1517")
		const addresswfeKbSI = accounts[3]
		const uintVMzQ1nH = BigInt("1782")
		const addressEC6Y65J = accounts[1]
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressm3cNBqD, {from: accounts[0]});
//		const boolXZW2GpX = await XenoFelixC622alf.transfer.call(addresswfeKbSI, uintpGSfSKM, {from: accounts[0]});
//		const boolzoYMMg = await XenoFelixC622alf.increaseAllowance.call(addressEC6Y65J, uintVMzQ1nH, {from: accounts[2]});

		assert.equal(uint256Wo1fmwP, BigInt("0"))
		await expect(XenoFelixC622alf.transfer.call(addresswfeKbSI, uintpGSfSKM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uinty8uEkB = BigInt("1109")
		const uintvmUWLc = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uinty8uEkB, uintvmUWLc, {from: accounts[1]});
		const addressNwis8sY = accounts[2]
		const uintoBziJLP = BigInt("1782")
		const addresspyNOWJ2 = accounts[1]
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressNwis8sY, {from: accounts[0]});
		const boolzoYMMg = await XenoFelixC622alf.increaseAllowance.call(addresspyNOWJ2, uintoBziJLP, {from: accounts[2]});

		assert.equal(boolzoYMMg, true)
		assert.equal(uint256Wo1fmwP, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringg9MSQ1V = "WjnGmfyxP2JYfOwX58vA6xzhchcDoEQ13uYi4KBiqPQcnrw4jNYrY8"
		const stringzRVO96i = "5WqmALJRymnXTzisBMqQWek6Jumd5yAS"
		const uinttdWcRM = BigInt("2000")
		const uintZWzPpT = BigInt("250")
		const XenoFelixKQhrc92 = await XenoFelix.new(stringg9MSQ1V, stringzRVO96i, uinttdWcRM, uintZWzPpT, {from: accounts[0]});
		const uintqxe0du9 = BigInt("1652")
		const addressGAjUjln = accounts[4]
		const addressxuPhRkN = accounts[2]
		const addressFQTPhE = accounts[2]
		const addressvFuIV2 = accounts[3]
		const uintZamRgeo = BigInt("1144")
		const addressq9vUrcN = accounts[1]
		const stringeAvm35 = await XenoFelixKQhrc92.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolVD9MdL6 = await XenoFelixKQhrc92.transferFrom.call(addressxuPhRkN, addressGAjUjln, uintqxe0du9, {from: accounts[2]});
//		const boolt7jAVKD = await XenoFelixKQhrc92.freezeAccount.call(addressFQTPhE, {from: accounts[1]});
//		await XenoFelixKQhrc92.onlyNewOwner.call({from: accounts[0]});
//		const boolqRe70M6 = await XenoFelixKQhrc92.freezeAccount.call(addressvFuIV2, {from: accounts[3]});
//		const boolsF9ncpT = await XenoFelixKQhrc92.transfer.call(addressq9vUrcN, uintZamRgeo, {from: accounts[0]});

		assert.equal(stringeAvm35, "5WqmALJRymnXTzisBMqQWek6Jumd5yAS")
		await expect(XenoFelixKQhrc92.transferFrom.call(addressxuPhRkN, addressGAjUjln, uintqxe0du9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintkOkhfHO = BigInt("1109")
		const uintIUD08e8 = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintkOkhfHO, uintIUD08e8, {from: accounts[1]});
		const uintiGWKFzG = BigInt("1986")
		const uintupJeOLb = BigInt("151")
		const addressb7WsXkO = "0x0000000000000000000000000000000000000001"
		const uintyTTMpwc = BigInt("1533")
		const addressA7avfDu = accounts[3]
		const uintbnLTSC = BigInt("1782")
		const addressNf9BevC = accounts[1]
		const uint8xIo2s8P = await XenoFelixC622alf.decimals.call({from: accounts[3]});
//		const boolRhdHowW = await XenoFelixC622alf.transferWithLock.call(addressb7WsXkO, uintupJeOLb, uintiGWKFzG, {from: accounts[2]});
//		const boolXZW2GpX = await XenoFelixC622alf.transfer.call(addressA7avfDu, uintyTTMpwc, {from: accounts[0]});
//		const boolzoYMMg = await XenoFelixC622alf.increaseAllowance.call(addressNf9BevC, uintbnLTSC, {from: accounts[2]});

		assert.equal(uint8xIo2s8P, BigInt("20"))
		await expect(XenoFelixC622alf.transferWithLock.call(addressb7WsXkO, uintupJeOLb, uintiGWKFzG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintG7ZGaQ = BigInt("1109")
		const uintDnWCLX = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintG7ZGaQ, uintDnWCLX, {from: accounts[1]});
		const addressvVnTPAl = accounts[3]
		const addressUiYGnVx = accounts[5]
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressvVnTPAl, {from: accounts[0]});
//		const boolz1LUUPY = await XenoFelixC622alf.unfreezeAccount.call(addressUiYGnVx, {from: accounts[1]});
//		await XenoFelixC622alf.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Wo1fmwP, BigInt("0"))
		await expect(XenoFelixC622alf.unfreezeAccount.call(addressUiYGnVx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintigaaLq = BigInt("1109")
		const uintIQkP4jd = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintigaaLq, uintIQkP4jd, {from: accounts[1]});
		const uintUtx14c4 = BigInt("82")
		const address02Fkrl = accounts[4]
		const addressfoXwiue = accounts[3]
//		const addressAb5Vm1B = await XenoFelixC622alf.burnFrom.call(address02Fkrl, uintUtx14c4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressfoXwiue, {from: accounts[0]});

		await expect(XenoFelixC622alf.burnFrom.call(address02Fkrl, uintUtx14c4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintbsQpqbk = BigInt("1109")
		const uintJZMz9rj = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintbsQpqbk, uintJZMz9rj, {from: accounts[1]});
		const addressVDqFAY7 = accounts[4]
		const addressWNVrfQ3 = accounts[3]
		const addressrpPx9sa = await XenoFelixC622alf.transferOwnership.call(addressVDqFAY7, {from: accounts[1]});
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressWNVrfQ3, {from: accounts[0]});

		assert.equal(uint256Wo1fmwP, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintsTahjAP = BigInt("1109")
		const uintd7nnB4i = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintsTahjAP, uintd7nnB4i, {from: accounts[1]});
		const uintpiFFCJZ = BigInt("1517")
		const addressGqxoTl = accounts[4]
		const addressO1vSXuz = accounts[0]
//		await XenoFelixC622alf.renouncePauser.call({from: accounts[4]});
//		const boolXZW2GpX = await XenoFelixC622alf.transfer.call(addressGqxoTl, uintpiFFCJZ, {from: accounts[0]});
//		const uint256LJYWFR8 = await XenoFelixC622alf.balanceOf.call(addressO1vSXuz, {from: accounts[0]});

		await expect(XenoFelixC622alf.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringn3prsoi = "xmj957wdlczbaIeF3qFjx6o7T7c8MlhUhcpGppcB8EvrpRvlCM2hdqMGgUJEq5MAfc7EsPVRTNNCH4chf"
		const stringAVij2Wr = "T0njxk7aXG9r6MMHZOd6Ab1Vz"
		const uintmqt2S6A = BigInt("1729")
		const uintowvjtRb = BigInt("9")
		const XenoFelixQVACzFH = await XenoFelix.new(stringn3prsoi, stringAVij2Wr, uintmqt2S6A, uintowvjtRb, {from: "0x0000000000000000000000000000000000000001"});
		const uintoux7nRZ = BigInt("962")
		const addresskOEakzr = accounts[1]
		const uintvLBpDQu = BigInt("425")
		const uintjegbHa = BigInt("679")
		const addressbfo7uW = accounts[1]
		const addressZiwSlJ6 = accounts[3]
		const uintkCymnsF = BigInt("656")
		const addressqUzkE1k = accounts[5]
		const boollu7MurP = await XenoFelixQVACzFH.transfer.call(addresskOEakzr, uintoux7nRZ, {from: accounts[0]});
		const boolO1asGvW = await XenoFelixQVACzFH.lock.call(addressbfo7uW, uintjegbHa, uintvLBpDQu, {from: accounts[2]});
		const booleAYPAWY = await XenoFelixQVACzFH.unfreezeAccount.call(addressZiwSlJ6, {from: accounts[4]});
		await XenoFelixQVACzFH.onlyPauser.call({from: accounts[2]});
		const boolf7iADYt = await XenoFelixQVACzFH.decreaseAllowance.call(addressqUzkE1k, uintkCymnsF, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringA3PbW5 = "zMH6hpdN96nGmknO"
		const stringUL4WGxC = "LNR7aPSHP9pdNtbtLW5OpPgutN2AKKggRiwDes0lW4VE7LABrTJhKdhyeTtSS2vNOvm1Mafnb9hlUJ7WnR7z"
		const uintL6QIsi3 = BigInt("3")
		const XenoFelixwXhV8q2 = await XenoFelix.new(stringA3PbW5, stringUL4WGxC, uintL6QIsi3, {from: accounts[4]});
		const uintsNzBkGK = BigInt("1219")
		const address50AtEp = accounts[3]
		const addressPa8h2ur = accounts[0]
		const uinttokca1O = BigInt("371")
		const addressDpFKMBC = accounts[5]
		const addressQOa6u2 = accounts[2]
		await XenoFelixwXhV8q2.onlyNewOwner.call({from: accounts[5]});
		const booln0oLYRY = await XenoFelixwXhV8q2.transferFrom.call(addressPa8h2ur, address50AtEp, uintsNzBkGK, {from: accounts[1]});
		const boolAdoUFrD = await XenoFelixwXhV8q2.transferFrom.call(addressQOa6u2, addressDpFKMBC, uinttokca1O, {from: accounts[1]});
		await XenoFelixwXhV8q2.whenPaused.call({from: accounts[4]});
		const stringdiCYdaE = await XenoFelixwXhV8q2.symbol.call({from: accounts[2]});
		await XenoFelixwXhV8q2.whenNotPaused.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintQ2P7Kpe = BigInt("1109")
		const uintHKKlkhp = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintQ2P7Kpe, uintHKKlkhp, {from: accounts[1]});
		const addressWmIHK1p = accounts[4]
		const uintBZ1Hl1Q = BigInt("1498")
		const addressVHHdaR5 = accounts[5]
		const uintiqlQMDG = BigInt("792")
		const addressLvZqCY = accounts[2]
		const addressR8ZXhHf = accounts[1]
		const stringtzUukak = await XenoFelixC622alf.symbol.call({from: accounts[3]});
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressWmIHK1p, {from: accounts[0]});
//		const bool0bvOIa = await XenoFelixC622alf.burnOwner.call(addressVHHdaR5, uintBZ1Hl1Q, {from: accounts[1]});
//		const boolKcu23Wr = await XenoFelixC622alf.transferFrom.call(addressR8ZXhHf, addressLvZqCY, uintiqlQMDG, {from: accounts[4]});

		assert.equal(stringtzUukak, "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP")
		assert.equal(uint256Wo1fmwP, BigInt("0"))
		await expect(XenoFelixC622alf.burnOwner.call(addressVHHdaR5, uintBZ1Hl1Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintMhQDkS = BigInt("1109")
		const uintosSRfwS = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintMhQDkS, uintosSRfwS, {from: accounts[1]});
		const addresssqNUlZN = accounts[3]
		const boolBUMtYT3 = await XenoFelixC622alf.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addresssqNUlZN, {from: accounts[0]});

		assert.equal(boolBUMtYT3, false)
		assert.equal(uint256Wo1fmwP, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringo30uWNN = "JyxNJINJT027LrC"
		const stringPCpuJQi = "eCst2rKkwqDjF3xhFxQYJlpf2Qt0cy5l4rkbALQWUp58Uvsdrs7dRLyJ5I5dzDNsMBl4YzyTWouWzqs8iky1ru5L1zeh2lfJl"
		const uintNIaxIsL = BigInt("91")
		const XenoFelixgFBLyP = await XenoFelix.new(stringo30uWNN, stringPCpuJQi, uintNIaxIsL, {from: "0x0000000000000000000000000000000000000001"});
		const uintwWhDrD9 = BigInt("135")
		const addressaKKyg8h = accounts[4]
		const uintmnQm10e = BigInt("591")
		const addresshirphpt = accounts[3]
		const addressOlNHJTw = accounts[3]
		const boolfBciqbC = await XenoFelixgFBLyP.acceptOwnership.call({from: accounts[1]});
		const boolwpYe8JM = await XenoFelixgFBLyP.unlock.call(addressaKKyg8h, uintwWhDrD9, {from: accounts[1]});
		const stringNmmuScx = await XenoFelixgFBLyP.symbol.call({from: accounts[3]});
		const boolyIVWdIy = await XenoFelixgFBLyP.transferFrom.call(addressOlNHJTw, addresshirphpt, uintmnQm10e, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintybRvIuE = BigInt("1109")
		const uintxWoChqb = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintybRvIuE, uintxWoChqb, {from: accounts[1]});
		const uinthnnDppf = BigInt("1223")
		const uintKwvDNiy = BigInt("1520")
		const addresshirY7Ip = accounts[3]
		const uintHwkwv9 = BigInt("792")
		const addressjRFaqOw = accounts[2]
		const addressRqRm6Re = accounts[1]
		const addressFiJUJ60 = accounts[4]
//		const boolnV7MKo = await XenoFelixC622alf.lock.call(addresshirY7Ip, uintKwvDNiy, uinthnnDppf, {from: accounts[1]});
//		const boolKcu23Wr = await XenoFelixC622alf.transferFrom.call(addressRqRm6Re, addressjRFaqOw, uintHwkwv9, {from: accounts[4]});
//		const addressG7r25c5 = await XenoFelixC622alf.notFrozen.call(addressFiJUJ60, {from: accounts[4]});

		await expect(XenoFelixC622alf.lock.call(addresshirY7Ip, uintKwvDNiy, uinthnnDppf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintIBzmFRW = BigInt("1109")
		const uintJMzPrhl = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintIBzmFRW, uintJMzPrhl, {from: accounts[1]});
		const uintqo9Bmxj = BigInt("1275")
		const uintKsRgj3L = BigInt("212")
		const addressM8zWLZO = accounts[5]
		const uintBKRoPWH = BigInt("792")
		const addressJdFsjnX = accounts[3]
		const addressQFOa3gi = accounts[1]
		const uintInxdha1 = BigInt("1630")
		const addresssxDZsot = accounts[2]
		const boolsVynDo7 = await XenoFelixC622alf.transferWithLock.call(addressM8zWLZO, uintKsRgj3L, uintqo9Bmxj, {from: accounts[1]});
//		const boolKcu23Wr = await XenoFelixC622alf.transferFrom.call(addressQFOa3gi, addressJdFsjnX, uintBKRoPWH, {from: accounts[4]});
//		const boolU0SDsdI = await XenoFelixC622alf.unlock.call(addresssxDZsot, uintInxdha1, {from: accounts[5]});

		assert.equal(boolsVynDo7, true)
		await expect(XenoFelixC622alf.transferFrom.call(addressQFOa3gi, addressJdFsjnX, uintBKRoPWH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintKcMynXB = BigInt("1109")
		const uintE4rAv1F = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintKcMynXB, uintE4rAv1F, {from: accounts[1]});
		const addressJpHDrsz = accounts[2]
		const uinth2wfml = BigInt("1478")
		const addresslEEe4c1 = accounts[4]
		const uinttawCfrL = BigInt("307")
		const uintLqHr6BS = BigInt("101")
		const addressU0Aodb8 = accounts[3]
		const addressib9UP0c = await XenoFelixC622alf.addPauser.call(addressJpHDrsz, {from: accounts[1]});
//		const boolXZW2GpX = await XenoFelixC622alf.transfer.call(addresslEEe4c1, uinth2wfml, {from: accounts[0]});
//		const bool2eM127 = await XenoFelixC622alf.lock.call(addressU0Aodb8, uintLqHr6BS, uinttawCfrL, {from: accounts[4]});
//		const uint8OBEMZy8 = await XenoFelixC622alf.decimals.call({from: accounts[2]});

		await expect(XenoFelixC622alf.transfer.call(addresslEEe4c1, uinth2wfml, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringNfSWwCS = "czSTMg8LrtxtUZdB66RVe6O6XhPuPVdMb9Z4mKBAcgDHLX4VBeT4joZCIfD1jB8IN2vGqWjxvRGONtus5cxjx5cAHLx"
		const stringkdcm9cJ = "eUwMvDpxiJvng8IO2lwsORKWBWMEgu2DDd8guIB"
		const uintQhhp6CQ = BigInt("895")
		const uintTD1QCMd = BigInt("140")
		const XenoFelixXqqPY9V = await XenoFelix.new(stringNfSWwCS, stringkdcm9cJ, uintQhhp6CQ, uintTD1QCMd, {from: accounts[2]});
		const addressZplh0FR = accounts[0]
		const addresseAJQQq5 = accounts[3]
		const uintxd884C9 = BigInt("1204")
		const addressXUVDvoS = accounts[2]
		const boolpXlfLmi = await XenoFelixXqqPY9V.isPauser.call(addressZplh0FR, {from: accounts[2]});
//		const addressUCgcSnj = await XenoFelixXqqPY9V.removePauser.call(addresseAJQQq5, {from: accounts[2]});
//		const boolxE6eLn8 = await XenoFelixXqqPY9V.increaseAllowance.call(addressXUVDvoS, uintxd884C9, {from: accounts[2]});
//		const stringtkPPfkH = await XenoFelixXqqPY9V.symbol.call({from: accounts[4]});

		assert.equal(boolpXlfLmi, false)
		await expect(XenoFelixXqqPY9V.removePauser.call(addresseAJQQq5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFlCJB0 = "Lq93jksNnyyQj5L552BgLvLu2GzQjeH8KEzWDNhAE85E9O4CfNM9EEF"
		const stringSOt0ar8 = "fzlB9CfSzYu2Q6JP1DD20vECdOSmEPUINdYmGvKb4V2f9z6wdUJNWyeeGP"
		const uintZWsfsTG = BigInt("1109")
		const uintmI0Yevz = BigInt("20")
		const XenoFelixC622alf = await XenoFelix.new(stringFlCJB0, stringSOt0ar8, uintZWsfsTG, uintmI0Yevz, {from: accounts[1]});
		const addressOFfBcHB = accounts[3]
		const addresswbXiAAy = accounts[5]
		const uint256Wo1fmwP = await XenoFelixC622alf.balanceOf.call(addressOFfBcHB, {from: accounts[0]});
		const boole6UQVu = await XenoFelixC622alf.freezeAccount.call(addresswbXiAAy, {from: accounts[1]});

		assert.equal(boole6UQVu, true)
		assert.equal(uint256Wo1fmwP, BigInt("0"))
	});
})