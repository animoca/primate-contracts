// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {ManagedIdentity, Ownable, Recoverable} from "@animoca/ethereum-contracts-core/contracts/utils/Recoverable.sol";
import {ERC20} from "@animoca/ethereum-contracts-assets/contracts/token/ERC20/ERC20.sol";
import {IForwarderRegistry, UsingUniversalForwarding} from "ethereum-universal-forwarder/src/solc_0.7/ERC2771/UsingUniversalForwarding.sol";

/**
 * @title PrimateCoin
 */
contract PrimateCoin is ERC20, UsingUniversalForwarding, Recoverable {
    string public constant NAME = "PRIMATE";
    string public constant SYMBOL = "PRIMATE";
    uint8 public constant DECIMALS = 18;

    /**
     * Constructor.
     * @dev Reverts if `values` and `recipients` have different lengths.
     * @dev Reverts if one of `recipients` is the zero address.
     * @dev Emits an {IERC20-Transfer} event for each transfer with `from` set to the zero address.
     * @param recipients the accounts to deliver the tokens to.
     * @param values the amounts of tokens to mint to each of `recipients`.
     * @param forwarderRegistry Registry of approved meta-transaction forwarders.
     * @param universalForwarder Universal meta-transaction forwarder.
     */
    constructor(
        address[] memory recipients,
        uint256[] memory values,
        IForwarderRegistry forwarderRegistry,
        address universalForwarder
    ) ERC20(NAME, SYMBOL, DECIMALS) UsingUniversalForwarding(forwarderRegistry, universalForwarder) Ownable(msg.sender) {
        _batchMint(recipients, values);
    }

    /**
     * Updates the URI of the token.
     * @dev Reverts if the sender is not the contract owner.
     * @param tokenURI_ the updated URI.
     */
    function setTokenURI(string calldata tokenURI_) external {
        _requireOwnership(_msgSender());
        _tokenURI = tokenURI_;
    }

    function _msgSender() internal view virtual override(ManagedIdentity, UsingUniversalForwarding) returns (address payable) {
        return UsingUniversalForwarding._msgSender();
    }

    function _msgData() internal view virtual override(ManagedIdentity, UsingUniversalForwarding) returns (bytes memory ret) {
        return UsingUniversalForwarding._msgData();
    }
}
