const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractbhHDF4Q = await ERC20.new({from: accounts[3]});
		const valueCKVluBL = BigInt("795")
		const toGdOq76 = accounts[4]
		const fromhB1Y1b9 = accounts[2]
		const valuehTp7Tg = BigInt("1274")
		const spenderLbgaeEX = accounts[3]
		const valueeJGQ1VR = BigInt("194")
		const toMOZ3Hl = accounts[0]
		const addedValuequoJ4KX = BigInt("1023")
		const spenderBYlYTu9 = accounts[3]
		const nullSHjo0zT = await contractbhHDF4Q.transferFrom.call(fromhB1Y1b9, toGdOq76, valueCKVluBL, {from: accounts[4]});
		const nullzHbbmUU = await contractbhHDF4Q.approve.call(spenderLbgaeEX, valuehTp7Tg, {from: accounts[1]});
		const nullSGDyYVH = await contractbhHDF4Q.transfer.call(toMOZ3Hl, valueeJGQ1VR, {from: accounts[5]});
		const nullDRy74Mm = await contractbhHDF4Q.increaseAllowance.call(spenderBYlYTu9, addedValuequoJ4KX, {from: accounts[3]});

		await expect(contractbhHDF4Q.transferFrom.call(fromhB1Y1b9, toGdOq76, valueCKVluBL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractY21RASz = await ERC20.new({from: accounts[1]});
		const valueJgCrjlf = BigInt("2021")
		const spendere0OqZJ = accounts[4]
		const valuevXayckW = BigInt("773")
		const spenderFIG26Sr = accounts[1]
		const addedValuenlVr5Oq = BigInt("763")
		const spendergijQG7a = accounts[4]
		const nullDiWjKdZ = await contractY21RASz.approve.call(spendere0OqZJ, valueJgCrjlf, {from: accounts[4]});
		const nullAgo4bsj = await contractY21RASz.approve.call(spenderFIG26Sr, valuevXayckW, {from: accounts[3]});
		const nullGmAicbb = await contractY21RASz.increaseAllowance.call(spendergijQG7a, addedValuenlVr5Oq, {from: accounts[3]});

		assert.equal(nullAgo4bsj, true)
		assert.equal(nullDiWjKdZ, true)
		assert.equal(nullGmAicbb, true)
	});

	it('test for ERC20', async () => {
		const contractyA6BkHY = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuegE5R8Tu = BigInt("998")
		const spenderuiQ8anD = "0x0000000000000000000000000000000000000001"
		const addedValueg95CC5T = BigInt("1057")
		const spenderR8hE3Dh = accounts[4]
		const valuekhDilSQ = BigInt("2041")
		const spenderYHElEF = accounts[2]
		const valuee9avfcC = BigInt("539")
		const spenderlPkR39Y = accounts[0]
		const nullqMFnKl = await contractyA6BkHY.approve.call(spenderuiQ8anD, valuegE5R8Tu, {from: accounts[4]});
		const nulleKLlUmR = await contractyA6BkHY.totalSupply.call({from: accounts[0]});
		const nullynrS3BL = await contractyA6BkHY.increaseAllowance.call(spenderR8hE3Dh, addedValueg95CC5T, {from: accounts[1]});
		const nullcKjGYb2 = await contractyA6BkHY.approve.call(spenderYHElEF, valuekhDilSQ, {from: accounts[1]});
		const nullF5mMqoG = await contractyA6BkHY.approve.call(spenderlPkR39Y, valuee9avfcC, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractDhvqcTx = await ERC20.new({from: accounts[0]});
		const spenderXzTzi0x = accounts[1]
		const ownerJEhCp12 = accounts[3]
		const spenderUc8GZnH = accounts[0]
		const ownerU6dKQuO = accounts[3]
		const spenderhCfh5mc = accounts[2]
		const ownerfRBVwvM = accounts[0]
		const valueR52cpHe = BigInt("1047")
		const toO2eNMaB = accounts[1]
		const fromrm0PLB = accounts[0]
		const nullWG9tNtk = await contractDhvqcTx.allowance.call(ownerJEhCp12, spenderXzTzi0x, {from: accounts[2]});
		const nullJ7B1oOD = await contractDhvqcTx.allowance.call(ownerU6dKQuO, spenderUc8GZnH, {from: accounts[1]});
		const nulloWiYfNA = await contractDhvqcTx.allowance.call(ownerfRBVwvM, spenderhCfh5mc, {from: accounts[5]});
		const nullmROve2F = await contractDhvqcTx.transferFrom.call(fromrm0PLB, toO2eNMaB, valueR52cpHe, {from: accounts[0]});

		assert.equal(nullJ7B1oOD, 0)
		assert.equal(nullWG9tNtk, 0)
		assert.equal(nulloWiYfNA, 0)
		await expect(contractDhvqcTx.transferFrom.call(fromrm0PLB, toO2eNMaB, valueR52cpHe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJJy9C8I = await ERC20.new({from: accounts[3]});
		const spenderRNHYes6 = accounts[3]
		const ownerrLD4SyC = accounts[4]
		const valuesZBFZfW = BigInt("170")
		const toFFxirrf = accounts[0]
		const valueXJqmKvo = BigInt("766")
		const spenderfzSHQN = "0x0000000000000000000000000000000000000001"
		const ownerkSLzrMC = accounts[4]
		const nullJng395X = await contractJJy9C8I.allowance.call(ownerrLD4SyC, spenderRNHYes6, {from: accounts[1]});
		const nullilDClX = await contractJJy9C8I.transfer.call(toFFxirrf, valuesZBFZfW, {from: accounts[2]});
		const nullSiyD9dE = await contractJJy9C8I.approve.call(spenderfzSHQN, valueXJqmKvo, {from: accounts[4]});
		const nullpg8QLvi = await contractJJy9C8I.totalSupply.call({from: accounts[1]});
		const nullXzC4T8u = await contractJJy9C8I.balanceOf.call(ownerkSLzrMC, {from: accounts[1]});

		assert.equal(nullJng395X, 0)
		await expect(contractJJy9C8I.transfer.call(toFFxirrf, valuesZBFZfW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractvKWBMWp = await ERC20.new({from: accounts[0]});
		const subtractedValueIaCnu0 = BigInt("1787")
		const spenderD60PqYW = accounts[0]
		const valueWj4VSJh = BigInt("1506")
		const toUnBciIH = "0x0000000000000000000000000000000000000001"
		const fromLdFTOLy = accounts[2]
		const spenderbYKJgJK = accounts[3]
		const ownerinqwtvW = accounts[2]
		const valueCkcJkDu = BigInt("1779")
		const toGrgfvlZ = accounts[2]
		const nulltmElUVh = await contractvKWBMWp.decreaseAllowance.call(spenderD60PqYW, subtractedValueIaCnu0, {from: accounts[4]});
		const nullyzuIP6G = await contractvKWBMWp.transferFrom.call(fromLdFTOLy, toUnBciIH, valueWj4VSJh, {from: accounts[5]});
		const nullL9IBgSX = await contractvKWBMWp.allowance.call(ownerinqwtvW, spenderbYKJgJK, {from: accounts[3]});
		const nullLoKZ9P3 = await contractvKWBMWp.transfer.call(toGrgfvlZ, valueCkcJkDu, {from: accounts[1]});
		const nullOsWOYKz = await contractvKWBMWp.totalSupply.call({from: accounts[2]});

		await expect(contractvKWBMWp.decreaseAllowance.call(spenderD60PqYW, subtractedValueIaCnu0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractu0LMI4M = await ERC20.new({from: accounts[2]});
		const spendergaSyND = accounts[1]
		const ownerB0yJxt = accounts[3]
		const spenderlB5i8jX = accounts[3]
		const ownerc7uUQjt = accounts[0]
		const spendert9DxSiK = accounts[3]
		const ownervUiu0H2 = accounts[4]
		const valueTkdlEHF = BigInt("1829")
		const toAXpRzWP = accounts[2]
		const fromV8X17gj = accounts[5]
		const nullYzmXIu = await contractu0LMI4M.allowance.call(ownerB0yJxt, spendergaSyND, {from: accounts[3]});
		const nullbcfT6aQ = await contractu0LMI4M.totalSupply.call({from: accounts[0]});
		const nullMCMYlm = await contractu0LMI4M.allowance.call(ownerc7uUQjt, spenderlB5i8jX, {from: accounts[0]});
		const nullvmjzwbj = await contractu0LMI4M.allowance.call(ownervUiu0H2, spendert9DxSiK, {from: accounts[2]});
		const nullVOc4OPp = await contractu0LMI4M.transferFrom.call(fromV8X17gj, toAXpRzWP, valueTkdlEHF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullMCMYlm, 0)
		assert.equal(nullYzmXIu, 0)
		assert.equal(nullbcfT6aQ, 0)
		assert.equal(nullvmjzwbj, 0)
		await expect(contractu0LMI4M.transferFrom.call(fromV8X17gj, toAXpRzWP, valueTkdlEHF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractT48Kgah = await ERC20.new({from: accounts[1]});
		const addedValuePksuEdt = BigInt("7")
		const spenderPGWLtGC = accounts[2]
		const valuebjdLPBx = BigInt("2021")
		const spenderP1W9LpU = accounts[4]
		const valueFd7zmxl = BigInt("773")
		const spenderhhLrCEH = accounts[1]
		const addedValueemf9sUM = BigInt("763")
		const spenderodAQCUR = accounts[4]
		const ownerhzliSD = accounts[1]
		const nullONwFESM = await contractT48Kgah.increaseAllowance.call(spenderPGWLtGC, addedValuePksuEdt, {from: accounts[2]});
		const nulldBujd7L = await contractT48Kgah.approve.call(spenderP1W9LpU, valuebjdLPBx, {from: accounts[4]});
		const nullXwa9vJt = await contractT48Kgah.approve.call(spenderhhLrCEH, valueFd7zmxl, {from: accounts[3]});
		const nullIIPAMnm = await contractT48Kgah.increaseAllowance.call(spenderodAQCUR, addedValueemf9sUM, {from: accounts[3]});
		const nullpMMm6KJ = await contractT48Kgah.balanceOf.call(ownerhzliSD, {from: accounts[3]});

		assert.equal(nullIIPAMnm, true)
		assert.equal(nullONwFESM, true)
		assert.equal(nullXwa9vJt, true)
		assert.equal(nulldBujd7L, true)
		assert.equal(nullpMMm6KJ, 0)
	});
})